const episodes = [
  {
    image: '/island-nights-movie-part-one-wide-fast.webp',
    label: 'Episode 01',
    title: 'Behind Island Nights',
    summary:
      'A quiet introduction to the world of Arcane du Beltah and the emotional thread behind the island.',
    status: 'Coming soon',
  },
  {
    image: '/island-nights-book-one-mockup-fast.webp',
    label: 'Episode 02',
    title: 'The Making of Amanah Books',
    summary:
      'A short note on writing across romance, mystery, faith, and courage.',
    status: 'In planning',
  },
  {
    image: '/island-nights-book-two-mockup-fast.webp',
    label: 'Episode 03',
    title: 'Reader Questions',
    summary:
      'A simple space for reflections, questions, and the small details readers keep returning to.',
    status: 'Coming soon',
  },
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
          <a href="/#contact">Contact</a>
        </nav>
        <div className="social-links-mini" aria-label="Social links">
          <span>Social Links:</span>
          <div>
            <a href="/#contact">FB</a>
            <a href="/#contact">X</a>
            <a href="/#contact">IN</a>
            <a href="/#contact">MAIL</a>
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

        <section className="podcast-blog-template">
          <div className="container-nevo">
            <div className="podcast-blog-intro">
              <span>Podcast</span>
              <h2>Stories behind the stories</h2>
              <p>Short, thoughtful audio notes from Amanah Saais are in preparation.</p>
            </div>

            <div className="podcast-card-grid">
              {episodes.map((episode) => (
                <article className="podcast-card init-delay" key={episode.title}>
                  <div className="podcast-card-image">
                    <img src={episode.image} alt="" loading="lazy" />
                  </div>
                  <div className="podcast-card-copy">
                    <span>{episode.label}</span>
                    <h3>{episode.title}</h3>
                    <p>{episode.summary}</p>
                    <strong>{episode.status}</strong>
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
