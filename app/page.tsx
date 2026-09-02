const works = [
  {
    label: 'Project',
    title: 'Arcane du Beltah: Island Nights',
    sub: 'Debut novel / Book one',
    feature: true,
  },
  {
    label: 'Writing',
    title: 'Immersive Worlds',
    sub: 'Fantasy, mystery, romance',
  },
  {
    label: 'Poetry',
    title: 'Emotional Imprint',
    sub: 'Language with feeling',
  },
  {
    label: 'Series',
    title: 'Arcane du Beltah',
    sub: 'Magic, destiny, courage',
  },
];

const bioParagraphs = [
  'Amanah Saais is a novelist, poet, and storyteller with a passion for crafting immersive worlds, unforgettable characters, and stories that resonate long after the final page. Blending imagination with emotion, her writing explores the extraordinary hidden within the ordinary, inviting readers into adventures filled with mystery, romance, hope, and wonder.',
  'Inspired by the boundless possibilities of storytelling, Amanah writes across genres while remaining committed to one goal: creating stories that captivate the heart, ignite the imagination, and leave a lasting impression.',
];

const listColumns = [
  ['Novelist', 'Poet', 'Storyteller', 'Worldbuilder'],
  ['Mystery', 'Romance', 'Hope', 'Wonder'],
  ['Debut Novel', 'Book One', 'Arcane du Beltah', 'Island Nights'],
  ['Magic', 'Destiny', 'Courage', 'Epic Journey'],
];

export default function Home() {
  return (
    <main className="site-shell min-h-screen bg-[#f7f6f1] text-[#111111]">
      <header className="site-header">
        <a className="brand-mark" href="#home" aria-label="Amanah Saais home">
          AS
        </a>
        <nav className="main-menu" aria-label="Primary">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="header-note">
          Stories that captivate the heart, ignite the imagination, and linger
          after the final page.
        </p>
        <nav className="social-menu" aria-label="Social links">
          <a href="#contact">Readers</a>
          <a href="#works">Books</a>
          <a href="#about">Press</a>
        </nav>
      </header>

      <div className="content-frame">
        <section id="home" className="intro-section">
          <div className="container-nevo">
            <h1 className="intro-title">
              <span>I&apos;m Amanah, a </span>
              <span className="serif black-text">storyteller </span>
              <br />
              <span>
                who creates immersive worlds, unforgettable characters, and
                stories of mystery, romance, hope, and wonder.
              </span>
            </h1>
          </div>
        </section>

        <section id="works" className="section-size-2">
          <div className="container-nevo">
            <div className="section-row">
              <h2>Selected work</h2>
              <div className="filter-row" aria-label="Work categories">
                <span>All</span>
                <span>Novel</span>
                <span>Project</span>
                <span>Series</span>
              </div>
            </div>

            <div className="work-grid">
              {works.map((work) => (
                <article
                  key={work.title}
                  className={work.feature ? 'work-item featured-work' : 'work-item'}
                >
                  {work.feature ? (
                    <div className="book-mockup" aria-hidden="true">
                      <div className="book-spine" />
                      <img
                        src="/island-nights-cover.jpg"
                        alt=""
                        className="book-cover"
                      />
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
          </div>
        </section>

        <section id="about" className="statement-section lighter-bg">
          <div className="container-nevo narrow">
            <div>
              <img
                src="/amanah-saais-author.png"
                alt="Portrait of Amanah Saais"
                className="author-portrait"
              />
              <h2>Writing the extraordinary hidden within the ordinary.</h2>
            </div>
            <div className="bio-copy">
              {bioParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="section-size-3">
          <div className="container-nevo">
            <div className="list-grid">
              {listColumns.map((items, index) => (
                <div key={items[0]}>
                  <h3>
                    {['Identity', 'Themes', 'Publication', 'Journey'][index]}
                  </h3>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="quote-section lighter-bg">
          <div className="container-nevo quote-grid">
            <blockquote>
              <span>
                Arcane du Beltah: Island Nights marks the beginning of an epic
                journey where magic, destiny, and courage collide.
              </span>
              <cite>Amanah Saais</cite>
            </blockquote>
            <div className="contact-box">
              <label>Name</label>
              <div className="fake-input">Reader</div>
              <label>Email</label>
              <div className="fake-input">hello@example.com</div>
              <label>Message</label>
              <div className="fake-textarea">Ask about the book, the series, or the worlds within.</div>
              <a className="button-dark" href="mailto:hello@example.com">
                Submit
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer-nevo">
        <a className="button-dark" href="#works">
          View Works
        </a>
        <div>
          <span>Built for </span>
          <strong>Amanah Saais</strong>
          <p>Arcane du Beltah: Island Nights</p>
        </div>
      </footer>
    </main>
  );
}
