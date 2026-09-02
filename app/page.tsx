const works = [
  {
    label: 'Novel',
    title: 'Island Nights',
    sub: 'Arcane du Beltah / Book One',
    kind: 'book',
  },
  {
    label: 'Author',
    title: 'Amanah Saais',
    sub: 'Portrait / Storyteller',
    kind: 'portrait',
  },
  {
    label: 'Series',
    title: 'Arcane du Beltah',
    sub: 'Magic, destiny, courage',
    kind: 'series',
  },
  {
    label: 'Poetry',
    title: 'Poetic Voice',
    sub: 'Emotion-led writing',
    kind: 'poetry',
  },
  {
    label: 'Worlds',
    title: 'Hidden Wonder',
    sub: 'Mystery and romance',
    kind: 'worlds',
  },
  {
    label: 'Project',
    title: 'Debut Journey',
    sub: 'First installment',
    kind: 'journey',
  },
];

const bioParagraphs = [
  'Amanah Saais writes immersive fiction shaped by mystery, romance, hope, and wonder. Her work looks for the extraordinary hidden inside ordinary moments.',
  'Arcane du Beltah: Island Nights is her debut novel and the first step into a series where magic, destiny, and courage collide.',
];

const listColumns = [
  ['Novelist', 'Poet', 'Storyteller', 'Worldbuilder'],
  ['Mystery', 'Romance', 'Hope', 'Wonder'],
  ['Debut Novel', 'Book One', 'Arcane du Beltah', 'Island Nights'],
  ['Magic', 'Destiny', 'Courage', 'Epic Journey'],
];

export default function Home() {
  return (
    <main className="site-shell min-h-screen">
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
        <p className="header-note">Novelist. Poet. Storyteller.</p>
        <nav className="social-menu" aria-label="Social links">
          <a href="#works">Books</a>
          <a href="#about">Bio</a>
          <a href="#contact">Mail</a>
        </nav>
      </header>

      <div className="content-frame">
        <section id="home" className="intro-section">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container-nevo hero-grid">
            <div>
              <p className="eyebrow reveal-up">About the Author</p>
              <h1 className="intro-title reveal-up delay-1">
                <span>Amanah Saais</span>
                <br />
                <span className="serif black-text">writes wonder.</span>
              </h1>
              <p className="hero-copy reveal-up delay-2">
                Novelist, poet, and storyteller behind Arcane du Beltah: Island
                Nights.
              </p>
            </div>
            <div className="hero-card reveal-up delay-3">
              <img src="/amanah-saais-author.png" alt="Portrait of Amanah Saais" />
            </div>
          </div>
        </section>

        <section id="works" className="section-size-2">
          <div className="container-nevo">
            <div className="section-row">
              <h2>Selected work</h2>
              <div className="filter-row" aria-label="Work categories">
                <span>All</span>
                <span>Novel</span>
                <span>Series</span>
                <span>Poetry</span>
              </div>
            </div>

            <div className="work-grid">
              {works.map((work) => (
                <article key={work.title} className={`work-item ${work.kind}`}>
                  {work.kind === 'book' && (
                    <div className="book-mockup" aria-hidden="true">
                      <div className="book-spine" />
                      <img src="/island-nights-cover.jpg" alt="" className="book-cover" />
                    </div>
                  )}
                  {work.kind === 'portrait' && (
                    <img
                      src="/amanah-saais-author.png"
                      alt=""
                      className="tile-image"
                      aria-hidden="true"
                    />
                  )}
                  {!['book', 'portrait'].includes(work.kind) && (
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
            <h2>Stories with magic just beneath the surface.</h2>
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
                  <h3>{['Identity', 'Themes', 'Publication', 'Journey'][index]}</h3>
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
              <span>For readers, press, and project inquiries.</span>
              <cite>Contact Amanah Saais</cite>
            </blockquote>
            <form className="contact-box" action="mailto:hello@example.com" method="post">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="John Doe" />
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="e.g. johndoe@example.com"
              />
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Ask me anything"
                rows={7}
              />
              <button className="button-dark" type="submit">
                Submit
              </button>
            </form>
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
