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
      'A short conversation-style note on writing across romance, wonder, mystery, and courage.',
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
        <section className="podcast-page-hero section-size-2 lighter-bg">
          <div className="container-nevo podcast-hero-grid">
            <div className="podcast-hero-copy reveal-up">
              <p className="eyebrow">Podcast</p>
              <h1>Stories behind the stories.</h1>
              <p>
                A minimal audio space for Amanah Saais to share book notes,
                creative reflections, and the worlds behind the page.
              </p>
            </div>
            <div className="podcast-mark reveal-up delay-1" aria-hidden="true">
              <span>AS</span>
              <strong>Listen soon</strong>
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
