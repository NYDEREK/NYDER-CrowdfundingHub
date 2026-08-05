import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Frame Lab — NYDER",
  description: "Create your own custom, 3D-printable sunglasses with Frame Lab.",
};

const features = [
  {
    number: "01",
    title: "Create your shape",
    copy: "Move beyond the same mass-produced frames. Build eyewear around your own proportions, mood and idea.",
  },
  {
    number: "02",
    title: "Control the style",
    copy: "Keep it clean and minimal or push it toward bold, unusual and futuristic forms that would be difficult to find in stores.",
  },
  {
    number: "03",
    title: "Personalize the details",
    copy: "Add custom text, patterns and details so the finished pair carries your own visual language.",
  },
  {
    number: "04",
    title: "Make it real",
    copy: "Turn the finished design into a printable object and produce each pair on demand instead of settling for a standardized frame.",
  },
];

export default function FrameLabPage() {
  return (
    <main className="product-page framelab-page">
      <SiteHeader />

      <section className="product-hero framelab-hero" id="top">
        <div className="section-shell">
          <div className="product-breadcrumb product-breadcrumb-dark"><a href="/#apps">Apps</a><span>/</span><span>Frame Lab</span></div>
          <div className="framelab-banner">
            <img src="/assets/framelab/frame-lab-banner.png" alt="Frame Lab custom sunglasses generator banner" />
          </div>
          <div className="framelab-hero-copy">
            <p className="product-kicker">Custom sunglasses generator</p>
            <h1>Your idea.<br />Your style.<br />Your sunglasses.</h1>
            <p>Frame Lab is a creative generator for designing personal, expressive and truly one-of-a-kind 3D-printed eyewear.</p>
          </div>
        </div>
      </section>

      <section className="framelab-story section-shell">
        <div className="framelab-story-image"><img src="/assets/framelab/frame-lab-glasses.png" alt="Orange custom sunglasses created with Frame Lab" /></div>
        <div className="framelab-story-copy">
          <p className="eyebrow">Why Frame Lab</p>
          <h2>Stop choosing from the same frames.</h2>
          <p>Frame Lab gives you a wide range of customization options so you can make eyewear that matches your own style, mood or idea.</p>
          <p>Want something clean and minimal? Make it. Want something bold, weird, futuristic or impossible to find in stores? Make that too.</p>
        </div>
      </section>

      <section className="feature-section section-shell framelab-features">
        <div className="section-heading feature-heading">
          <p className="eyebrow">Inside Frame Lab</p>
          <h2>From a blank frame to something personal.</h2>
        </div>
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

      <section className="framelab-campaign section-shell">
        <div className="framelab-campaign-copy">
          <p className="eyebrow">MakerWorld Crowdfunding</p>
          <h2>Lifetime access to a growing design tool.</h2>
          <p>The app download and campaign access options will be available here when Frame Lab is ready to launch.</p>
        </div>
        <div className="framelab-campaign-image"><img src="/assets/framelab/frame-lab-cover.png" alt="Frame Lab lifetime access campaign cover" /></div>
      </section>

      <section className="product-download section-shell" id="downloads">
        <div className="product-download-card framelab-download-card">
          <div><p className="eyebrow">Download Frame Lab</p><h2>Build a pair that belongs to you.</h2><p>The macOS and Windows builds will be added here together with campaign access details.</p></div>
          <div className="os-downloads" aria-label="Frame Lab downloads">
            <span className="os-download-button os-download-disabled" aria-disabled="true">
              <span><strong>Download for macOS</strong><small>Build coming soon</small></span>
              <b aria-hidden="true">—</b>
            </span>
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
