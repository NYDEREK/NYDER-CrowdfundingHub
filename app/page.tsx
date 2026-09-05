import { apps } from "./apps";

export default function Home() {
  return (
    <main>
      <header className="simple-header">
        <a className="simple-brand" href="#top" aria-label="NYDER downloads home">
          <span>N</span>
          <strong>NYDER</strong>
        </a>
        <p>App downloads</p>
      </header>

      <div className="library" id="top">
        <section className="library-intro">
          <p>NYDER SOFTWARE</p>
          <h1>Download your app.</h1>
          <span>Choose a program and your operating system.</span>
        </section>

        <section className="app-library" aria-label="Available apps">
          {apps.map((app, index) => (
            <article className="download-card-simple" id={app.id} key={app.id}>
              <div className="download-card-image">
                <img src={app.image} alt={app.imageAlt} loading={index === 0 ? "eager" : "lazy"} />
              </div>

              <div className="download-card-content">
                <span className="app-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{app.name}</h2>
                  <p>{app.description}</p>
                  {app.requiresActivation ? (
                    <span className="activation-note">Activation code required</span>
                  ) : null}
                </div>

                <div className="simple-download-buttons" aria-label={`${app.name} downloads`}>
                  <a href={app.macDownload} download rel="noreferrer">
                    <span><small>Apple</small><strong>Download for macOS</strong></span>
                    <b aria-hidden="true">↓</b>
                  </a>
                  <a href={app.windowsDownload} download rel="noreferrer">
                    <span><small>Microsoft</small><strong>Download for Windows</strong></span>
                    <b aria-hidden="true">↓</b>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

        <footer className="simple-footer">
          <span>© 2026 NYDER</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </main>
  );
}
