const featuredBy = ['Inspirational', 'Fantasy', 'Romance', 'Mystery', 'Destiny', 'Faith Based'];

const services = [
  {
    title: 'Immersive Worlds',
    description:
      'Amanah builds settings with atmosphere first: island light, hidden mystery, and the quiet sense that destiny is already moving.',
  },
  {
    title: 'Emotional Characters',
    description:
      'Her stories follow people caught between longing, courage, loyalty, and the choices that change everything.',
  },
  {
    title: 'Series Storytelling',
    description:
      'Arcane du Beltah begins with Island Nights and expands into a world shaped by mystery, romance, and destiny.',
  },
];

export default function AboutPage() {
  return (
    <main className="site-shell aver-home about-template-page min-h-screen">
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
            <span>About</span>
          </div>
          <div className="container-nevo page-banner-inner">
            <span className="eyebrow">Amanah Saais</span>
            <h1>About the Author</h1>
            <p>Novelist. Writer. Poet.</p>
          </div>
        </section>

        <section className="about-intro-template">
          <div className="container-nevo about-intro-grid">
            <div className="about-intro-image">
              <img src="/amanah-saais-author.png" alt="Amanah Saais" />
            </div>
            <div className="about-intro-copy">
              <span className="eyebrow">Bio</span>
              <h2>A storyteller drawn to worlds that feel close enough to touch.</h2>
              <p>
                Amanah Saais is a novelist, poet, and storyteller drawn to immersive
                worlds, unforgettable characters, and stories that stay with readers
                after the final page.
              </p>
              <p>
                Her writing blends imagination with emotion, exploring the
                extraordinary hidden within ordinary moments. Across genres, she
                writes with one clear aim: to captivate the heart and ignite the
                imagination.
              </p>
              <p>
                Arcane du Beltah: Island Nights is her debut novel and the first
                installment in a series where mystery, destiny, and courage collide.
              </p>
            </div>
          </div>
        </section>

        <section className="about-featured-template">
          <div className="container-nevo">
            <h2>Genres</h2>
            <div className="featured-list">
              {featuredBy.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="about-services-template">
          <div className="container-nevo">
            <div className="landing-section-head">
              <div>
                <p className="eyebrow">Writing</p>
                <h2>What the stories carry</h2>
              </div>
              <span>The approach</span>
            </div>
            <div className="about-service-grid">
              {services.map((item, index) => (
                <article key={item.title}>
                  <span>/ 0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-quote-template">
          <div className="container-nevo">
            <span>Author Note</span>
            <h2>Stories can make the unseen feel close enough to touch.</h2>
            <p>Amanah Saais</p>
          </div>
        </section>
      </div>
    </main>
  );
}
