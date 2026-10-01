const episodes = [
  {
    number: '01',
    title: 'Behind Island Nights',
    summary:
      'A quiet introduction to the world of Arcane du Beltah, the emotional thread of the series, and the ideas that shaped the island.',
    status: 'Coming soon',
  },
  {
    number: '02',
    title: 'The Making of Amanah Books',
    summary:
      'A short conversation-style note on writing across romance, mystery, and courage.',
    status: 'In planning',
  },
];

const notes = [
  'Worldbuilding',
  'Writing life',
  'Reader questions',
  'Behind the books',
];

export default function PodcastPage() {
  return (
    <main className="site-shell aver-home podcast-template-page min-h-screen">
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
        <section className="page-banner podcast-page-banner">
          <div className="banner-watermark" aria-hidden="true">
            <span>Podcast</span>
          </div>
          <div className="container-nevo page-banner-inner page-banner-split">
            <div>
              <h1>Podcast</h1>
              <nav className="page-breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span>•</span>
                <span>Podcast</span>
              </nav>
            </div>
            <p>Coming Soon</p>
          </div>
        </section>

        <section className="about-intro-template podcast-intro-template">
          <div className="container-nevo about-intro-grid">
            <div className="about-photo-stack podcast-photo-stack" aria-hidden="true">
              <figure>
                <img src="/island-nights-book-two-mockup-fast.webp" alt="" loading="lazy" />
              </figure>
              <figure>
                <img src="/island-nights-book-one-mockup-fast.webp" alt="" loading="lazy" />
              </figure>
              <figure>
                <img src="/amanah-saais-author-fast.webp" alt="" loading="eager" fetchPriority="high" />
              </figure>
            </div>
            <div className="about-intro-copy podcast-hero-copy reveal-up">
              <span className="eyebrow">Coming Soon</span>
              <h2>Stories behind the stories.</h2>
              <p>
                A minimal audio space for Amanah Saais to share book notes,
                creative reflections, and the worlds behind the page.
              </p>
              <div className="podcast-mark" aria-hidden="true">
                <span>AS</span>
                <strong>Listen soon</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="podcast-episodes section-size-2">
          <div className="container-nevo">
            <div className="section-row">
              <h2>Episodes</h2>
              <p>Short, thoughtful conversations are in preparation.</p>
            </div>

            <div className="episode-list">
              {episodes.map((episode) => (
                <article className="episode-item" key={episode.number}>
                  <span>{episode.number}</span>
                  <div>
                    <p>{episode.status}</p>
                    <h3>{episode.title}</h3>
                  </div>
                  <p>{episode.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="podcast-note-section lighter-bg">
          <div className="container-nevo podcast-note-grid">
            <div>
              <p className="eyebrow">Format</p>
              <h2>Simple, intimate, and book-led.</h2>
            </div>
            <div className="podcast-note-list">
              {notes.map((note) => (
                <span key={note}>{note}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="podcast-closing section-size-2">
          <div className="container-nevo">
            <blockquote>
              <span>For the readers who want to linger a little longer in the world.</span>
              <cite>Amanah Books Podcast</cite>
            </blockquote>
          </div>
        </section>
      </div>

      <footer className="footer-nevo">
        <a className="button-dark" href="/shop">
          Shop Books
        </a>
        <div>
          <span>Podcast </span>
          <strong>Amanah Saais</strong>
          <p>Stories behind the stories</p>
        </div>
      </footer>
    </main>
  );
}
