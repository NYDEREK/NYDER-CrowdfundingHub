export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/#top" aria-label="NYDER home">
        <span className="brand-mark" aria-hidden="true">N</span>
        <span>NYDER</span>
      </a>

      <nav className="site-nav" aria-label="Main navigation">
        <a href="/#apps">Apps</a>
        <a href="/#how-it-works">How it works</a>
        <a href="/#about">About</a>
      </nav>

      <a className="nav-action" href="/#apps">Downloads</a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer section-shell" id="about">
      <a className="brand footer-brand" href="/#top" aria-label="NYDER home">
        <span className="brand-mark" aria-hidden="true">N</span>
        <span>NYDER</span>
      </a>
      <p>Independent software for makers, designed and tested by Szymon.</p>
      <p className="footer-meta">© 2026 NYDER</p>
    </footer>
  );
}
