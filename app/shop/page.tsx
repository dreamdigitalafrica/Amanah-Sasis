const products = [
  {
    id: 'book-one',
    volume: 'Book One',
    image: '/island-nights-book-one-mockup.png',
    title: 'Arcane du Beltah: Island Nights',
    note: 'Part One begins an island journey where courage, destiny, and hidden power meet beneath the night sky.',
    amazonUrl:
      'https://www.amazon.com/Arcane-Du-Beltah-Island-Nights-ebook/dp/B0HJ7719YF/ref=sr_1_1?dib=eyJ2IjoiMSJ9.CxCcJFU2nLDFWZ2y_I1hqt7NGVOxQKQE5e9FNjHkx8HGjHj071QN20LucGBJIEps.65QKABuPNIYRwg-3CRjFSNIvAWT9oggMjGC0GQgg_RY&dib_tag=se&keywords=arcane+du+beltah+book&qid=1790701568&sr=8-1',
    paystackUrl: 'https://paystack.shop/pay/jeqoqeorm8',
  },
  {
    id: 'book-two',
    volume: 'Book Two',
    image: '/island-nights-book-two-mockup.png',
    title: 'Arcane du Beltah: Island Nights',
    note: 'Part Two expands the world with deeper mystery, romance, and a fate balanced between courage and risk.',
    amazonUrl:
      'https://www.amazon.com/Arcane-Du-Beltah-Amanah-Sasis-ebook/dp/B0HDR1H55S/ref=sr_1_3?dib=eyJ2IjoiMSJ9.CxCcJFU2nLDFWZ2y_I1hqt7NGVOxQKQE5e9FNjHkx8HGjHj071QN20LucGBJIEps.65QKABuPNIYRwg-3CRjFSNIvAWT9oggMjGC0GQgg_RY&dib_tag=se&keywords=arcane+du+beltah+book&qid=1790701568&sr=8-3',
    paystackUrl: 'https://paystack.shop/pay/jeqoqeorm8',
  },
];

const price = '₦15,000';
const usdPrice = 'approx. $11.34';

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
        </nav>
        <div className="social-links-mini" aria-label="Social links">
          <span>Social Links:</span>
          <div>
            <a href="/#contact">Mail</a>
            <a href="https://paystack.shop/pay/jeqoqeorm8">Pay</a>
            <a href="/shop">Shop</a>
          </div>
        </div>
      </header>

      <div className="content-frame">
        <section className="page-banner">
          <div className="banner-watermark" aria-hidden="true">
            <span>Shop</span>
          </div>
          <div className="container-nevo page-banner-inner">
            <span className="eyebrow">Amanah Books</span>
            <h1>Shop</h1>
            <p>Island Nights editions available through Paystack and Amazon.</p>
          </div>
        </section>

        <section className="shop-listing-template">
          <div className="container-nevo">
            <div className="shop-listing-grid">
              {products.map((product, index) => (
                <article
                  className="shop-listing-card init-delay"
                  key={product.id}
                  style={
                    {
                      '--lg-delay': `${(index % 3) * 75}ms`,
                      '--md-delay': `${(index % 2) * 75}ms`,
                      '--sm-delay': `${(index % 2) * 75}ms`,
                    } as any
                  }
                >
                  <div className="shop-listing-image">
                    <img src={product.image} alt={`${product.title} ${product.volume}`} />
                  </div>
                  <div className="shop-listing-copy">
                    <span>{product.volume}</span>
                    <h2>{product.title}</h2>
                    <p>{product.note}</p>
                    <div className="shop-price-row">
                      <strong>{price}</strong>
                      <em>{usdPrice}</em>
                    </div>
                    <div className="shop-listing-actions">
                      <a
                        className="button-dark"
                        href={product.paystackUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>Buy with Paystack</span>
                      </a>
                      <a
                        className="button-outline"
                        href={product.amazonUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Buy from Amazon
                      </a>
                    </div>
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
