const products = [
  {
    id: 'book-one',
    volume: 'Book One',
    image: '/island-nights-cover.jpg',
    title: 'Arcane du Beltah: Island Nights',
    note: 'A magical island romance where courage, destiny, and hidden power meet beneath the night sky.',
    glimpse:
      'The story begins on an island where ordinary choices open the door to a world of magic, danger, and longing. As destiny pulls closer, the heart must decide what courage truly costs.',
    paystackUrl: 'https://paystack.shop/pay/jeqoqeorm8',
  },
  {
    id: 'book-two',
    volume: 'Book Two',
    image: '/island-nights-book-two.png',
    title: 'Arcane du Beltah: Island Nights',
    note: 'The journey continues with deeper mystery, romance, and a world balanced between wonder and risk.',
    glimpse:
      'Book Two returns to Arcane du Beltah with higher stakes and a wider horizon. Love, loyalty, and power are tested as the island reveals more than anyone expected.',
    paystackUrl: 'https://paystack.shop/pay/jeqoqeorm8',
  },
];

const price = '₦15,000';
const usdPrice = 'approx. $11.34';

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
          <a href="/podcast">Podcast</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      <div className="content-frame">
        <section className="shop-page-hero section-size-2 lighter-bg">
          <div className="container-nevo shop-page-heading reveal-up">
            <p className="eyebrow">Shop</p>
            <h1>Amanah Books</h1>
            <p>
              Explore the Island Nights series and purchase each volume through
              Paystack.
            </p>
          </div>
        </section>

        <section className="shop-products-section section-size-2">
          <div className="container-nevo">
            <div className="shop-products-header">
              <h2>Available Books</h2>
              <span>
                {price} / {usdPrice}
              </span>
            </div>

            <div className="shop-products-grid refined">
              {products.map((product, index) => (
                <article
                  className={`shop-book-card ${index === 1 ? 'accent' : ''}`}
                  key={product.id}
                >
                  <div className="shop-book-visual">
                    <div className="shop-card-book" aria-hidden="true">
                      <div className="shop-card-pages" />
                      <img src={product.image} alt="" />
                    </div>
                  </div>

                  <div className="shop-book-info">
                    <span>{product.volume}</span>
                    <h3>{product.title}</h3>
                    <p>{product.note}</p>

                    <div className="shop-price-row">
                      <strong>{price}</strong>
                      <em>{usdPrice}</em>
                    </div>

                    <div className="shop-actions">
                      <a className="button-dark" href={`#${product.id}-preview`}>
                        Read Glimpse
                      </a>
                      <a
                        className="button-outline"
                        href={product.paystackUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="shop-note-section lighter-bg">
          <div className="container-nevo shop-note">
            <h2>Secure checkout through Paystack.</h2>
            <p>
              Payment links are prepared for each book and can be connected to
              the final Paystack product pages when ready.
            </p>
          </div>
        </section>

        {products.map((product) => (
          <div className="book-preview-modal" id={`${product.id}-preview`} key={product.id}>
            <a className="modal-backdrop" href="/shop" aria-label="Close preview" />
            <article className="modal-panel" role="dialog" aria-modal="true">
              <a className="modal-close" href="/shop" aria-label="Close preview">
                ×
              </a>
              <div className="modal-cover">
                <img src={product.image} alt="" />
              </div>
              <div className="modal-copy">
                <span>{product.volume}</span>
                <h2>{product.title}</h2>
                <p>{product.glimpse}</p>
                <div className="shop-price-row">
                  <strong>{price}</strong>
                  <em>{usdPrice}</em>
                </div>
                <a
                  className="button-dark"
                  href={product.paystackUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy with Paystack
                </a>
              </div>
            </article>
          </div>
        ))}
      </div>

      <footer className="footer-nevo">
        <a className="button-dark" href="/#books">
          View Books
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
