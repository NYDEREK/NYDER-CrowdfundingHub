import { SiteHeader } from "./SiteChrome";

type DownloadLandingProps = {
  appName: string;
  category: string;
  image: string;
  imageAlt: string;
  macHref: string;
  windowsHref: string;
  theme: "airlab" | "framelab";
};

export function DownloadLanding({
  appName,
  category,
  image,
  imageAlt,
  macHref,
  windowsHref,
  theme,
}: DownloadLandingProps) {
  return (
    <main className={`download-landing download-landing-${theme}`}>
      <SiteHeader />
      <section className="download-landing-main">
        <div className="download-landing-image">
          <img src={image} alt={imageAlt} />
        </div>

        <div className="download-landing-panel">
          <div>
            <div className="download-landing-breadcrumb">
              <a href="/#apps">All apps</a>
              <span>/</span>
              <span>{appName}</span>
            </div>
            <p className="eyebrow">{category}</p>
            <h1>{appName}</h1>
            <p className="download-prompt">Choose your system and download the app.</p>
          </div>

          <div className="download-primary-actions" aria-label={`${appName} downloads`}>
            <a className="download-primary-button" href={macHref} download>
              <span><small>Apple</small><strong>Download for macOS</strong></span>
              <b aria-hidden="true">↓</b>
            </a>
            <a className="download-primary-button" href={windowsHref} download>
              <span><small>Microsoft</small><strong>Download for Windows</strong></span>
              <b aria-hidden="true">↓</b>
            </a>
          </div>

          <div className="download-landing-footer">
            <span>NYDER / {appName}</span>
            <a href="/#apps">Choose another app&nbsp; →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
