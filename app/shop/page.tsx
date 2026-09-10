const products = [
  {
    volume: 'Book One',
    image: '/island-nights-cover.jpg',
    note: 'The opening novel in the Arcane du Beltah series.',
  },
  {
    volume: 'Book Two',
    image: '/island-nights-book-two.png',
    note: 'The next chapter in the Island Nights journey.',
  },
];

const price = '₦15,000 / approx. $11.34';

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
              <h2>Arcane du Beltah / Books One & Two</h2>
            </div>
            <div className="shop-hero-visual reveal-up delay-1">
              <div className="shop-book-pair" aria-hidden="true">
                <div className="shop-book-mockup secondary">
                  <div className="shop-book-pages" />
                  <img src="/island-nights-book-two.png" alt="" />
                </div>
                <div className="shop-book-mockup">
                  <div className="shop-book-pages" />
                  <img src="/island-nights-cover.jpg" alt="" />
                </div>
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
              <h2>Two books. One enchanted world.</h2>
              <p>
                Arcane du Beltah: Island Nights opens Amanah Saais&apos;s fantasy
                romance series and continues with Book Two. Each title is priced
                at {price}.
              </p>
            </div>
          </div>
        </section>

        <section className="shop-dark-band section-size-6">
          <div className="container-nevo">
            <h2>Magic, destiny, and courage across two island nights.</h2>
          </div>
        </section>

        <section className="shop-detail-section section-size-3 lighter-bg">
          <div className="container-nevo">
            <div className="section-row">
              <h2>Books</h2>
              <div className="filter-row" aria-label="Book prices">
                <span>₦15,000</span>
                <span>Approx. $11.34</span>
              </div>
            </div>
            <div className="shop-products-grid">
              {products.map((product) => (
                <article className="shop-product-card" key={product.volume}>
                  <div className="shop-cover-wide">
                    <img src={product.image} alt="" aria-hidden="true" />
                  </div>
                  <div className="shop-product-copy">
                    <span>{product.volume}</span>
                    <h3>Arcane du Beltah: Island Nights</h3>
                    <p>{product.note}</p>
                    <strong>{price}</strong>
                  </div>
                </article>
              ))}
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
