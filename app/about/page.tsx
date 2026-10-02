const services = [
  {
    title: 'Story Worlds',
    description:
      'Atmospheric worlds shaped by island light, hidden mystery, and the quiet pull of destiny.',
  },
  {
    title: 'Character Emotion',
    description:
      'Romance, courage, loyalty, and choices that stay with readers beyond the last page.',
  },
  {
    title: 'Faith-led Themes',
    description:
      'Hopeful, faith-based threads woven through mystery, longing, and personal courage.',
  },
  {
    title: 'Poetry & Prose',
    description:
      'Minimal, lyrical writing that keeps the emotional pulse close and memorable.',
  },
  {
    title: 'Reader Notes',
    description: 'Coming Soon...',
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
          <div className="container-nevo page-banner-inner page-banner-split">
            <div>
              <h1>About Me</h1>
              <nav className="page-breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span>•</span>
                <span>About</span>
              </nav>
            </div>
            <p>Who I Am</p>
          </div>
        </section>

        <section className="about-intro-template">
          <div className="container-nevo about-intro-grid">
            <div className="about-photo-stack" aria-label="Amanah Saais and featured books">
              <figure>
                <img src="/island-nights-book-two-mockup-fast.webp" alt="" loading="lazy" />
              </figure>
              <figure>
                <img src="/island-nights-book-one-mockup-fast.webp" alt="" loading="lazy" />
              </figure>
              <figure>
                <img src="/amanah-saais-author-fast.webp" alt="Amanah Saais" loading="eager" fetchPriority="high" />
              </figure>
            </div>
            <div className="about-intro-copy">
              <span className="eyebrow">Bio</span>
              <h2>A novelist, writer, and poet creating worlds that feel close enough to touch.</h2>
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
              <a className="about-intro-button" href="/#books">
                <span aria-hidden="true">↻</span>
                More Books
              </a>
            </div>
          </div>
        </section>

        <section className="about-services-template">
          <div className="container-nevo">
            <div className="landing-section-head">
              <div>
                <h2>What I can do for you</h2>
              </div>
              <span>Services</span>
            </div>
            <div className="about-service-grid">
              {services.map((item, index) => (
                <article className={index === services.length - 1 ? 'muted' : ''} key={item.title}>
                  <span>/ 0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
              <div className="service-star" aria-hidden="true" />
              <div className="service-star" aria-hidden="true" />
              <div className="service-star" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="about-quote-template reader-review-template">
          <div className="container-nevo">
            <span>Reviews</span>
            <h2>What readers say</h2>
            <div className="reader-review-slider">
              <button type="button" aria-label="Previous review">←</button>
              <blockquote>
                <p>
                  Amanah’s writing feels cinematic and intimate at once, with a
                  world that keeps unfolding after the page ends.
                </p>
                <cite>
                  <strong>Reader Note</strong>
                  <span>Arcane du Beltah</span>
                </cite>
              </blockquote>
              <button type="button" aria-label="Next review">→</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
