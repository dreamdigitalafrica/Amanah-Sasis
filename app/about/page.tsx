const bioParagraphs = [
  'Amanah Saais is a novelist, poet, and storyteller drawn to immersive worlds, unforgettable characters, and stories that stay with readers after the final page.',
  'Her writing blends imagination with emotion, exploring the extraordinary hidden within ordinary moments. Across genres, she writes with one clear aim: to captivate the heart and ignite the imagination.',
  'Arcane du Beltah: Island Nights is her debut novel and the first installment in a series where magic, destiny, and courage collide.',
];

const latest = [
  {
    label: 'Novel',
    title: 'Island Nights',
    sub: 'Arcane du Beltah / Book One',
    kind: 'book',
  },
  {
    label: 'Theme',
    title: 'Mystery & Romance',
    sub: 'Emotion-led adventure',
    kind: 'series',
  },
  {
    label: 'World',
    title: 'Magic Beneath',
    sub: 'Wonder in the ordinary',
    kind: 'worlds',
  },
];

const connections = [
  'Immersive worlds',
  'Unforgettable characters',
  'Mystery and romance',
  'Hope and wonder',
  'Magic and destiny',
  'Courage in motion',
];

export default function AboutPage() {
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
          <a href="/#podcast">Podcast</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      <div className="content-frame">
        <section className="about-hero section-size-2">
          <div className="container-nevo about-profile">
            <div className="about-profile-image reveal-up">
              <img src="/amanah-saais-author.png" alt="Portrait of Amanah Saais" />
            </div>
            <div className="about-profile-title reveal-up delay-1">
              <p className="eyebrow">About</p>
              <h1>Amanah Saais</h1>
              <h2>Creative storyteller</h2>
            </div>
          </div>
        </section>

        <section className="about-bio section-size-2">
          <div className="container-nevo bio-column">
            <h2>Bio</h2>
            {bioParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <blockquote>
              <span>Stories can make the unseen feel close enough to touch.</span>
              <cite>Amanah Saais</cite>
            </blockquote>
          </div>
        </section>

        <section className="latest-work section-size-2 lighter-bg">
          <div className="container-nevo">
            <div className="center-title">
              <h2>Latest Work</h2>
            </div>
            <div className="latest-grid">
              {latest.map((work) => (
                <article key={work.title} className={`work-item ${work.kind}`}>
                  {work.kind === 'book' ? (
                    <div className="book-mockup" aria-hidden="true">
                      <div className="book-spine" />
                      <img src="/island-nights-cover.jpg" alt="" className="book-cover" />
                    </div>
                  ) : (
                    <div className="text-work">
                      <span>{work.label}</span>
                      <p>{work.sub}</p>
                    </div>
                  )}
                  <div className="labels">{work.label}</div>
                  <div className="caption">
                    <h3>{work.title}</h3>
                    <p>{work.sub}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="center-action">
              <a className="button-dark" href="/#books">
                View Books
              </a>
            </div>
          </div>
        </section>

        <section className="connection-section section-size-3">
          <div className="container-nevo">
            <div className="center-title">
              <h2>A strong connection with lasting stories</h2>
            </div>
            <div className="connection-grid">
              {connections.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer className="footer-nevo">
        <a className="button-dark" href="/#contact">
          Contact
        </a>
        <div>
          <span>About </span>
          <strong>Amanah Saais</strong>
          <p>Arcane du Beltah: Island Nights</p>
        </div>
      </footer>
    </main>
  );
}
