import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the simple app download library", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>NYDER — App Downloads<\/title>/i);
  assert.match(html, /Download your app/);
  assert.match(html, /AirLab/);
  assert.match(html, /Frame Lab/);
  assert.match(html, /Download for macOS/);
  assert.match(html, /Download for Windows/);
  assert.match(html, /downloads\/airlab\/AirLab_0\.1\.0_aarch64\.dmg/);
  assert.match(html, /Frame-Lab-app\/releases\/download\/v0\.3\.11\/Frame-Lab-0\.3\.11-mac-universal\.dmg/);
  assert.match(html, /Frame-Lab-app\/releases\/download\/v0\.3\.11\/Frame-Lab-0\.3\.11-win-x64\.exe/);
  assert.match(html, /Activation code required/);
  assert.doesNotMatch(html, /\b\d{4}-\d{4}-\d{4}\b/, "Activation codes must never be exposed on the download site.");
  assert.doesNotMatch(html, /coming soon|how it works|inside airlab/i);
});

test("stores the app catalog in one copyable data list", async () => {
  const [page, appData, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/apps.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /apps\.map/);
  assert.match(appData, /copy one object/i);
  assert.match(layout, /NYDER — App Downloads/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("app\/_sites-preview", root)));
});
