import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders a neutral two-app product hub", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>NYDER — Tools for Makers<\/title>/i);
  assert.match(html, /Tools for ideas/);
  assert.match(html, /Choose your lab/);
  assert.match(html, /AirLab/);
  assert.match(html, /Frame Lab/);
  assert.match(html, /href="\/apps\/airlab"/);
  assert.match(html, /href="\/apps\/framelab"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("renders dedicated AirLab and Frame Lab pages", async () => {
  const [airLabResponse, frameLabResponse] = await Promise.all([
    render("/apps/airlab"),
    render("/apps/framelab"),
  ]);
  assert.equal(airLabResponse.status, 200);
  assert.equal(frameLabResponse.status, 200);

  const [airLabHtml, frameLabHtml] = await Promise.all([
    airLabResponse.text(),
    frameLabResponse.text(),
  ]);
  assert.match(airLabHtml, /Design\. Print\. Use it\./);
  assert.match(airLabHtml, /assets\/airlab\/airlab-wide\.png/);
  assert.match(airLabHtml, /downloads\/airlab\/AirLab_0\.1\.0_aarch64\.dmg/);
  assert.match(airLabHtml, /Download for Windows/);
  assert.match(frameLabHtml, /Custom sunglasses generator/);
  assert.match(frameLabHtml, /assets\/framelab\/frame-lab-banner\.png/);
  assert.match(frameLabHtml, /Download for macOS/);
  assert.match(frameLabHtml, /Build coming soon/);
});

test("keeps the finished site free of starter preview code", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Choose your lab/);
  assert.match(layout, /NYDER — Tools for Makers/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("app\/_sites-preview", root)));
});
