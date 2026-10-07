import BookCard from './BookCard';
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
              <h1>Amanah Books</h1>
              <nav className="page-breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span>•</span>
                <span>Shop</span>
              </nav>
            </div>
            <p>Shop</p>
          </div>
        </section>

        <section className="shop-listing-template">
          <div className="container-nevo">
            <div className="shop-blog-grid">
              {books.map((book, index) => (
                <BookCard book={book} index={index} key={book.id} />
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
