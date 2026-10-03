import { books, price, usdPrice } from './books';

export default function ShopPage() {
  return (
    <main className="site-shell aver-home shop-template-page min-h-screen">
      <header className="site-header">
        <a className="brand-mark" href="/" aria-label="Amanah Saais home">
          <span className="brand-seal">AS</span>
          <span>Amanah</span>
        </a>
        <nav className="main-menu" aria-label="Primary">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/#books">Books</a>
          <a href="/shop">Shop</a>
          <a href="/podcast">Podcast</a>
          <a href="/#contact">Contact</a>
        </nav>
        <div className="social-links-mini" aria-label="Social links">
          <span>Social Links:</span>
          <div>
            <a href="/#contact">FB</a>
            <a href="/#contact">X</a>
            <a href="/#contact">IN</a>
            <a href="/#contact">MAIL</a>
            <a className="substack-social-link" href="https://open.substack.com/pub/amanahsaais" target="_blank" rel="noreferrer" aria-label="Amanah Saais on Substack" title="Substack">
              <span className="substack-icon" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <div className="content-frame">
        <section className="page-banner shop-page-banner">
          <div className="banner-watermark" aria-hidden="true">
            <span>Shop</span>
          </div>
          <div className="container-nevo page-banner-inner page-banner-split">
            <div>
              <h1>Shop</h1>
              <nav className="page-breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span>•</span>
                <span>Shop</span>
              </nav>
            </div>
            <p>Amanah Books</p>
          </div>
        </section>

        <section className="shop-listing-template">
          <div className="container-nevo">
            <div className="shop-blog-grid">
              {books.map((book, index) => (
                <article className="shop-blog-card init-delay" key={book.id}>
                  <a className="shop-blog-image" href={book.href} aria-label={`Read more about ${book.title} ${book.subtitle}`}>
                    <img
                      src={book.image}
                      alt={`${book.title} ${book.subtitle}`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                    />
                  </a>
                  <div className="shop-blog-meta">
                    <span>{book.category}</span>
                    <time>{book.date}</time>
                  </div>
                  <h2>
                    <a href={book.href}>{book.title}</a>
                  </h2>
                  <p>{book.subtitle}</p>
                  <div className="shop-price-row">
                    <strong>{price}</strong>
                    <em>{usdPrice}</em>
                  </div>
                </article>
              ))}
            </div>
            <div className="shop-pagination">
              <span>1</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
