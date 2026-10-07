import { books, price, usdPrice } from './books';

type Book = (typeof books)[number];

export default function BookDetail({ book }: { book: Book }) {
  return (
    <main className="site-shell aver-home shop-template-page shop-detail-page min-h-screen">
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
            <span>{book.volume}</span>
          </div>
          <div className="container-nevo page-banner-inner page-banner-split">
            <div>
              <h1>{book.title}</h1>
              <nav className="page-breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span>•</span>
                <a href="/shop">Shop</a>
                <span>•</span>
                <span>{book.subtitle}</span>
              </nav>
            </div>
            <p>{book.volume}</p>
          </div>
        </section>

        <section className="shop-detail-template">
          <div className="container-nevo shop-detail-grid">
            <figure className="shop-detail-cover">
              <img src={book.image} alt={`${book.title} ${book.subtitle}`} loading="eager" fetchPriority="high" />
            </figure>
            <article className="shop-detail-copy">
              <div className="shop-blog-meta">
                <span>Ebook</span>
                {book.comingSoon && <span>Coming soon</span>}
              </div>
              <h2>{book.subtitle}</h2>
              <p>{book.description}</p>
              <div className="shop-price-row">
                <strong>{price}</strong>
                <em>{usdPrice}</em>
              </div>
              <div className="shop-listing-actions">
                {book.comingSoon ? <div className="preorder-pending"><button className="button-dark" disabled>Preorder coming soon</button><p>Preorders are not open yet.</p></div> : <>
                <a className="button-dark" href={book.paystackUrl} target="_blank" rel="noreferrer">
                  <span>Buy with Paystack</span>
                </a>
                <a className="button-outline" href={book.amazonUrl} target="_blank" rel="noreferrer">
                  Buy from Amazon
                </a></>}
              </div>
            </article>
          </div>
          {book.pdf && <div id="sample" className="container-nevo quick-read-panel"><div><span>Ebook preview</span><h3>Read sample</h3></div><a className="button-dark" href={book.pdf} target="_blank" rel="noreferrer"><span>Read sample</span></a></div>}
        </section>
      </div>
    </main>
  );
}
