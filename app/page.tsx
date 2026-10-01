const books = [
  {
    tag: 'Book',
    title: 'Island Nights',
    subtitle: 'Arcane du Beltah / Part One',
    image: '/island-nights-book-one-card.jpg',
    layout: 'portrait',
    tone: '#0b5c79',
  },
  {
    tag: 'Book',
    title: 'Island Nights',
    subtitle: 'Arcane du Beltah / Part Two',
    image: '/island-nights-book-two-card.jpg',
    layout: 'portrait',
    tone: '#432a70',
  },
  {
    tag: 'Coming Soon',
    title: 'Behind Hind Sight',
    subtitle: 'Amanah Saais',
    image: '/behind-hind-sight-cover.svg',
    layout: 'portrait',
    tone: '#8f6b3d',
  },
  {
    tag: 'Movie',
    title: 'Island Nights',
    subtitle: 'Arcane du Beltah / Part 1',
    image: '/island-nights-movie-part-one-wide.png',
    layout: 'landscape',
    tone: '#0b5c79',
  },
  {
    tag: 'Movie',
    title: 'Island Nights',
    subtitle: 'Arcane du Beltah / Part 2',
    image: '/island-nights-movie-part-two-wide.png',
    layout: 'landscape',
    tone: '#170f31',
  },
];

const featuredBy = ['Inspirational', 'Fantasy', 'Romance', 'Mystery', 'Destiny', 'Faith Based'];

const process = [
  {
    step: '01',
    title: 'World',
    text: 'Every story begins with atmosphere: islands, secrets, and the feeling that something unseen is close.',
  },
  {
    step: '02',
    title: 'Heart',
    text: 'Characters move through romance, courage, and longing with emotional choices at the center.',
  },
  {
    step: '03',
    title: 'Journey',
    text: 'Each book opens another door into Arcane du Beltah, building a series made to linger.',
  },
];

const notes = [
  {
    label: 'Podcast',
    title: 'Behind Island Nights',
    text: 'A quiet audio space for the ideas, worldbuilding, and emotional notes behind the books.',
    href: '/podcast',
  },
  {
    label: 'About',
    title: 'Meet Amanah',
    text: 'A novelist, writer, and poet crafting immersive stories filled with hope and wonder.',
    href: '/about',
  },
  {
    label: 'Shop',
    title: 'Amanah Books',
    text: 'Buy through Paystack or Amazon and begin the Arcane du Beltah series.',
    href: '/shop',
  },
];

export default function Home() {
  return (
    <main className="site-shell aver-home min-h-screen">
      <header className="site-header">
        <a className="brand-mark" href="#home" aria-label="Amanah Saais home">
          <span className="brand-seal">AS</span>
          <span>Amanah</span>
        </a>
        <nav className="main-menu" aria-label="Primary">
          <a href="#home">Home</a>
          <a href="/about">About</a>
          <a href="#books">Books</a>
          <a href="/shop">Shop</a>
          <a href="/podcast">Podcast</a>
        </nav>
        <div className="social-links-mini" aria-label="Social links">
          <span>Social Links:</span>
          <div>
            <a href="#contact">Mail</a>
            <a href="https://paystack.shop/pay/jeqoqeorm8">Pay</a>
            <a href="/shop">Shop</a>
          </div>
        </div>
      </header>

      <div className="content-frame">
        <section id="home" className="amanah-banner">
          <div className="banner-watermark" aria-hidden="true">
            <span>Amanah</span>
          </div>
          <div className="container-nevo">
            <div className="banner-title reveal-up">
              <p className="eyebrow">Novelist / Writer / Poet</p>
              <h1>
                <span>Amanah</span>
                <span className="author-orb">
                  <img src="/amanah-saais-author.png" alt="" />
                  <i aria-hidden="true">✦</i>
                </span>
                <span>Saais</span>
              </h1>
              <p>
                Amanah Saais is a novelist, poet, and storyteller writing faith-led stories of romance, mystery, and courage.
              </p>
            </div>

            <div className="banner-feature hero-featured reveal-up delay-1">
              <h2>Genres</h2>
              <div className="featured-list" aria-label="Genres">
                {featuredBy.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="books" className="landing-books section-size-2">
          <div className="container-nevo">
            <div className="landing-section-head">
              <div>
                <p className="eyebrow">Books</p>
                <h2>Selected work</h2>
              </div>
              <span>Books / Covers / Movie Concepts</span>
            </div>

            <div className="project-grid">
              {books.map((book, index) => (
                <article
                  className={`project-book-card ${book.layout}`}
                  key={`${book.title}-${book.subtitle}`}
                  style={{ '--card-tone': book.tone } as any}
                >
                  <span className="card-reveal" aria-hidden="true" />
                  <div className="project-cover">
                    <img src={book.image} alt={`${book.title} cover`} />
                  </div>
                </article>
              ))}
            </div>

            <div className="landing-center-action">
              <a className="button" href="/shop">
                <span>All Books</span>
              </a>
            </div>
          </div>
        </section>

        <section className="work-process-section">
          <div className="container-nevo">
            <div className="landing-section-head">
              <div>
                <p className="eyebrow">Process</p>
                <h2>Process Delivers Wonder</h2>
              </div>
              <span>The approach</span>
            </div>

            <div className="process-grid work-process">
              {process.map((item) => (
                <div key={item.step}>
                  <article className="work-process-item">
                    <span>{item.step}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="podcast" className="journal-section">
          <div className="container-nevo">
            <div className="landing-section-head">
              <div>
                <p className="eyebrow">Notes</p>
                <h2>My weekly thoughts</h2>
              </div>
              <span>Podcast / Bio / Shop</span>
            </div>

            <div className="journal-grid">
              {notes.map((item) => (
                <article key={item.title}>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a className="inline-button" href={item.href}>
                    Open
                  </a>
                </article>
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
                <span>Submit</span>
              </button>
            </form>
          </div>
        </section>
      </div>

      <footer className="footer-nevo">
        <a className="footer-cta" href="#contact">
          <div className="animated-line animated-line-one">
            <div className="line-block">
              <span>
                <span className="cta-text">Let’s talk books</span>
                <span className="cta-icon">↗</span>
              </span>
              <span>
                <span className="cta-text">Let’s talk books</span>
                <span className="cta-icon">↗</span>
              </span>
              <span>
                <span className="cta-text">Let’s talk books</span>
                <span className="cta-icon">↗</span>
              </span>
            </div>
            <div className="line-block-copy">
              <span>
                <span className="cta-text">Let’s talk books</span>
                <span className="cta-icon">↗</span>
              </span>
              <span>
                <span className="cta-text">Let’s talk books</span>
                <span className="cta-icon">↗</span>
              </span>
              <span>
                <span className="cta-text">Let’s talk books</span>
                <span className="cta-icon">↗</span>
              </span>
            </div>
          </div>
          <div className="animated-line animated-line-two">
            <div className="line-block">
              <span>
                <span className="cta-text">Enter Arcane du Beltah</span>
                <span className="cta-icon">↗</span>
              </span>
              <span>
                <span className="cta-text">Enter Arcane du Beltah</span>
                <span className="cta-icon">↗</span>
              </span>
              <span>
                <span className="cta-text">Enter Arcane du Beltah</span>
                <span className="cta-icon">↗</span>
              </span>
            </div>
            <div className="line-block-copy">
              <span>
                <span className="cta-text">Enter Arcane du Beltah</span>
                <span className="cta-icon">↗</span>
              </span>
              <span>
                <span className="cta-text">Enter Arcane du Beltah</span>
                <span className="cta-icon">↗</span>
              </span>
              <span>
                <span className="cta-text">Enter Arcane du Beltah</span>
                <span className="cta-icon">↗</span>
              </span>
            </div>
          </div>
        </a>
        <a className="button" href="#books">
          <span>View Book</span>
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
