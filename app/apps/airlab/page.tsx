import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "AirLab — NYDER",
  description: "Design custom, printable airless balls for sport, play, pets and display.",
};

const features = [
  {
    number: "01",
    title: "Shape the ball",
    copy: "Start with tennis, basketball, volleyball, baseball, rugby, massage and pet-toy profiles — then set the exact size and proportions you need.",
  },
  {
    number: "02",
    title: "Build a real surface",
    copy: "Create coherent hexagon, triangle or circular lattices with even spacing. Add spikes, bands and sport detailing without scattering random shapes over the model.",
  },
  {
    number: "03",
    title: "Make it yours",
    copy: "Place curved text or SVG logos on bands and surface frames. Tune their depth, position, colors and geometry directly on the model.",
  },
  {
    number: "04",
    title: "Finish the object",
    copy: "Add a keychain loop or build a fitted display stand. Save the project, choose one-color TPU or multicolor output, then export STL or 3MF.",
  },
];

const workflows = [
  { title: "Tennis", note: "From a custom lattice to a printed court test.", src: "/assets/airlab/tennis-workflow.gif" },
  { title: "Basketball", note: "Designed, printed and held in the real world.", src: "/assets/airlab/basketball-workflow.gif" },
  { title: "Volleyball", note: "A complete workflow in one desktop tool.", src: "/assets/airlab/volleyball-workflow.gif" },
];

export default function AirLabPage() {
  return (
    <main className="product-page airlab-page">
      <SiteHeader />

      <section className="product-hero product-hero-light" id="top">
        <div className="section-shell">
          <div className="product-breadcrumb"><a href="/#apps">Apps</a><span>/</span><span>AirLab</span></div>
          <div className="product-hero-heading">
            <div>
              <p className="product-kicker">Airless object generator</p>
              <h1>AirLab</h1>
            </div>
            <p>Design the ball you actually want — with controlled geometry, personal details and clean export-ready output.</p>
          </div>
          <div className="product-hero-media airlab-hero-media">
            <img src="/assets/airlab/airlab-wide.png" alt="AirLab custom ball generator campaign artwork" />
          </div>
        </div>
      </section>

      <section className="product-overview section-shell">
        <div className="product-overview-title">
          <p className="eyebrow">What it does</p>
          <h2>One idea, all the way to print.</h2>
        </div>
        <p className="product-overview-copy">AirLab turns a few clear decisions into a printable, customized model. No manual mesh cleanup. No randomly placed cutouts. Just a coherent surface you can control.</p>
      </section>

      <section className="feature-section section-shell">
        <div className="feature-list">
          {features.map((feature) => (
            <article className="feature-row" key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-section">
        <div className="section-shell">
          <div className="section-heading workflow-heading">
            <p className="eyebrow">Design. Print. Use it.</p>
            <h2>Not just a render.</h2>
            <p>AirLab models are made to leave the screen and become objects you can test, play with and keep.</p>
          </div>
          <div className="workflow-grid">
            {workflows.map((workflow, index) => (
              <article className="workflow-card" key={workflow.title}>
                <div className="workflow-media"><img src={workflow.src} alt={`${workflow.title} AirLab design, print and use workflow`} loading="lazy" /></div>
                <div className="workflow-copy"><span>0{index + 1}</span><div><h3>{workflow.title}</h3><p>{workflow.note}</p></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="format-section section-shell">
        <div className="format-card">
          <div className="format-copy">
            <p className="eyebrow">Flexible output</p>
            <h2>One color.<br />Or the full idea.</h2>
            <p>Keep it simple for TPU, or separate the ball, bands and markings for a multicolor 3MF. The same design can serve both paths.</p>
          </div>
          <div className="format-options" aria-label="Supported output styles">
            <div className="format-option format-one"><span className="format-swatch" /><div><strong>One color</strong><small>STL · TPU ready</small></div></div>
            <div className="format-option format-multi"><span className="format-swatch" /><div><strong>Multicolor</strong><small>3MF · separated parts</small></div></div>
          </div>
        </div>
      </section>

      <section className="product-download section-shell" id="downloads">
        <div className="product-download-card airlab-download-card">
          <div><p className="eyebrow">Download AirLab</p><h2>Get the app.</h2><p>Download AirLab for free, then sign in and unlock your plan inside the app with the access code connected to your campaign reward.</p></div>
          <div className="os-downloads" aria-label="AirLab downloads">
            <a className="os-download-button os-download-active" href="/downloads/airlab/AirLab_0.1.0_aarch64.dmg" download>
              <span><strong>Download for macOS</strong><small>Apple silicon · version 0.1.0</small></span>
              <b aria-hidden="true">↓</b>
            </a>
            <span className="os-download-button os-download-disabled" aria-disabled="true">
              <span><strong>Download for Windows</strong><small>Build coming soon</small></span>
              <b aria-hidden="true">—</b>
            </span>
            <a className="download-back-link" href="/#apps">← Back to all apps</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
