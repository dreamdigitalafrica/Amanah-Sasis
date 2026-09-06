const productFacts = [
  ['Book', 'Arcane du Beltah: Island Nights'],
  ['Series', 'Arcane du Beltah'],
  ['Format', 'Debut novel'],
  ['Status', 'Shop coming soon'],
];

export default function ShopPage() {
  return (
    <main className="site-shell min-h-screen">
      <header className="site-header">
        <a className="brand-mark" href="/" aria-label="Amanah Saais home">
          <span className="brand-seal">AS</span>
          <span>Amanah Saais</span>
        </a>
        <nav className="main-menu" aria-label="Primary">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/#books">Books</a>
          <a href="/shop">Shop</a>
          <a href="/#podcast">Podcast</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      <div className="content-frame">
        <section className="shop-project-hero section-size-3 lighter-bg">
          <div className="container-nevo shop-hero-grid">
            <div className="shop-title-block reveal-up">
              <p className="eyebrow">Shop</p>
              <h1>Island Nights</h1>
              <h2>Arcane du Beltah / Book One</h2>
            </div>
            <div className="shop-hero-visual reveal-up delay-1">
              <div className="shop-book-mockup" aria-hidden="true">
                <div className="shop-book-pages" />
                <img src="/island-nights-cover.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="shop-project-split section-size-3 lighter-bg">
          <div className="container-nevo shop-split-grid">
            <div className="shop-cover-panel">
              <img
                src="/island-nights-cover.jpg"
                alt="Arcane du Beltah: Island Nights book cover"
              />
            </div>
            <div>
              <h2>A debut portal into magic and destiny.</h2>
              <p>
                Arcane du Beltah: Island Nights opens Amanah Saais&apos;s fantasy
                romance series with mystery, courage, and wonder beneath an
                island sky.
              </p>
            </div>
          </div>
        </section>

        <section className="shop-dark-band section-size-6">
          <div className="container-nevo">
            <h2>One book. One island night. The journey begins here.</h2>
          </div>
        </section>

        <section className="shop-detail-section section-size-3 lighter-bg">
          <div className="container-nevo shop-detail-grid">
            <div className="shop-facts">
              {productFacts.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <div className="shop-cover-wide">
              <img src="/island-nights-cover.jpg" alt="" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="shop-large-image section-size-2">
          <div className="container-nevo">
            <div className="shop-purchase-panel">
              <p className="eyebrow">Availability</p>
              <h2>Purchase details coming soon.</h2>
              <a className="button-dark" href="/#contact">
                Request Update
              </a>
            </div>
          </div>
        </section>

        <section className="post-navigation">
          <a className="post-navigation-link" href="/about">
            <span>Previous</span>
            <strong>About the Author</strong>
          </a>
          <a className="post-navigation-link" href="/#podcast">
            <span>Next</span>
            <strong>Podcast</strong>
          </a>
        </section>
      </div>

      <footer className="footer-nevo">
        <a className="button-dark" href="/#books">
          View Book
        </a>
        <div>
          <span>Shop </span>
          <strong>Amanah Saais</strong>
          <p>Arcane du Beltah: Island Nights</p>
        </div>
      </footer>
    </main>
  );
}
