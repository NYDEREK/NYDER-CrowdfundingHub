import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const apps = [
  {
    number: "01",
    name: "AirLab",
    category: "Custom airless ball generator",
    description: "Design printable balls for sport, play, pets and display — with coherent patterns, custom bands, text and SVG logos.",
    image: "/assets/airlab/airlab-square.png",
    href: "/apps/airlab",
    className: "hub-app-airlab",
    alt: "Colorful airless balls designed in AirLab",
  },
  {
    number: "02",
    name: "Frame Lab",
    category: "Custom sunglasses generator",
    description: "Create one-of-a-kind, 3D-printable sunglasses instead of choosing another mass-produced frame.",
    image: "/assets/framelab/frame-lab-cover.png",
    href: "/apps/framelab",
    className: "hub-app-framelab",
    alt: "Frame Lab custom sunglasses generator campaign cover",
  },
];

export default function Home() {
  return (
    <main className="hub-page">
      <SiteHeader />

      <section className="hub-hero section-shell" id="top">
        <div className="hub-hero-copy">
          <p className="eyebrow">Independent software for makers</p>
          <h1>Tools for ideas<br />you can hold.</h1>
          <p>
            A growing collection of focused desktop apps for designing custom,
            printable objects — from the first parameter to the final export.
          </p>
          <a className="button button-light" href="#apps">Choose an app</a>
        </div>

        <div className="hub-index" aria-label="Available applications">
          <div className="hub-index-head">
            <span>NYDER / APP INDEX</span>
            <span>02 AVAILABLE</span>
          </div>
          <a href="/apps/airlab" className="hub-index-row">
            <span className="hub-index-number">01</span>
            <div><strong>AirLab</strong><small>Airless objects</small></div>
            <span aria-hidden="true">↗</span>
          </a>
          <a href="/apps/framelab" className="hub-index-row">
            <span className="hub-index-number">02</span>
            <div><strong>Frame Lab</strong><small>Custom eyewear</small></div>
            <span aria-hidden="true">↗</span>
          </a>
          <div className="hub-index-row hub-index-future">
            <span className="hub-index-number">03</span>
            <div><strong>Next project</strong><small>In development</small></div>
            <span>—</span>
          </div>
        </div>
      </section>

      <section className="hub-catalog section-shell" id="apps">
        <div className="hub-section-title">
          <p className="eyebrow">The collection</p>
          <h2>Choose your lab.</h2>
          <p>Each app solves a different design problem. Pick the object you want to create and enter its dedicated workspace.</p>
        </div>

        <div className="hub-app-grid">
          {apps.map((app) => (
            <a className={`hub-app-card ${app.className}`} href={app.href} key={app.name}>
              <div className="hub-app-media">
                <img src={app.image} alt={app.alt} />
                <span className="hub-app-number">{app.number}</span>
              </div>
              <div className="hub-app-copy">
                <p className="eyebrow">{app.category}</p>
              <div className="hub-app-title">
                  <div>
                    <h3>{app.name}</h3>
                    <p>{app.description}</p>
                  </div>
                  <span className="round-arrow" aria-hidden="true">↗</span>
                </div>
                <div className="hub-card-actions">
                  <span>macOS + Windows</span>
                  <span>View downloads&nbsp; →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="hub-system section-shell" id="how-it-works">
        <div className="hub-system-intro">
          <p className="eyebrow">One home, every release</p>
          <h2>Simple from download to design.</h2>
        </div>
        <div className="hub-steps">
          <article>
            <span>01</span>
            <h3>Choose</h3>
            <p>Open the app page and find the tool made for your project.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Download</h3>
            <p>Get the latest macOS or Windows build directly from this hub.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Unlock</h3>
            <p>Sign in and activate the plan connected to your campaign access code.</p>
          </article>
        </div>
      </section>

      <section className="hub-statement section-shell">
        <p>Built independently.</p>
        <h2>Different objects.<br />The same goal: make customization accessible.</h2>
        <a className="text-link" href="#apps">Browse the apps <span aria-hidden="true">↑</span></a>
      </section>

      <SiteFooter />
    </main>
  );
}
