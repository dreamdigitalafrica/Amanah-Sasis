const books = [
  {
    volume: 'Book One',
    image: '/island-nights-cover.jpg',
    description:
      'Book One begins an epic journey where magic, destiny, and courage collide beneath an island night.',
  },
  {
    volume: 'Book Two',
    image: '/island-nights-book-two.png',
    description:
      'Book Two continues the Arcane du Beltah journey with deeper mystery, romance, and courage above an enchanted world.',
  },
];

const price = '₦15,000 / approx. $11.34';

export default function Home() {
  return (
    <main className="site-shell min-h-screen">
      <header className="site-header">
        <a className="brand-mark" href="#home" aria-label="Amanah Saais home">
          <span className="brand-seal">AS</span>
          <span>Amanah Saais</span>
        </a>
        <nav className="main-menu" aria-label="Primary">
          <a href="#home">Home</a>
          <a href="/about">About</a>
          <a href="#books">Books</a>
          <a href="/shop">Shop</a>
          <a href="/podcast">Podcast</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="content-frame">
        <section id="home" className="freelancer-hero section-size-1">
          <div className="container-nevo">
            <h1 className="freelancer-title reveal-up">
              <span>Amanah Saais is a </span>
              <span className="typed-word serif black-text">
                <span>novelist.</span>
                <span>writer.</span>
                <span>poet.</span>
              </span>
            </h1>
          </div>
        </section>

        <section id="books" className="section-size-2 books-section">
          <div className="container-nevo">
            <div className="section-row">
              <h2>Selected books</h2>
              <div className="filter-row" aria-label="Book categories">
                <span>All</span>
                <span>Novel</span>
                <span>Fantasy</span>
                <span>Book One</span>
                <span>Book Two</span>
              </div>
            </div>

            <div className="books-stack">
              {books.map((book, index) => (
                <article
                  className={`book-showcase ${index % 2 === 1 ? 'reverse' : ''}`}
                  key={book.volume}
                >
                  <div className="book-stage" aria-hidden="true">
                    <div className="book-shadow" />
                    <div className="book-3d">
                      <div className="book-side" />
                      <img src={book.image} alt="" className="book-cover-pro" />
                    </div>
                  </div>
                  <div className="book-copy">
                    <div className="labels">Novel</div>
                    <h3>Arcane du Beltah: Island Nights</h3>
                    <p>{book.description}</p>
                    <div className="book-meta">
                      <div>
                        <span>Series</span>
                        <strong>Arcane du Beltah</strong>
                      </div>
                      <div>
                        <span>Volume</span>
                        <strong>{book.volume}</strong>
                      </div>
                      <div>
                        <span>Genre</span>
                        <strong>Fantasy Romance</strong>
                      </div>
                      <div>
                        <span>Price</span>
                        <strong>{price}</strong>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="shop" className="statement-section lighter-bg">
          <div className="container-nevo mini-section">
            <p className="eyebrow">Shop</p>
            <h2>Book shop coming soon.</h2>
            <a className="inline-button" href="/shop">
              Preview Shop
            </a>
          </div>
        </section>

        <section id="podcast" className="section-size-3 podcast-section">
          <div className="container-nevo">
            <div className="section-row">
              <h2>Podcast</h2>
              <p>Conversations on story, imagination, and the worlds behind the page.</p>
            </div>
            <div className="podcast-panel">
              <span>Coming Soon</span>
              <h3>Behind Island Nights</h3>
              <p>
                A future audio space for book reflections, creative notes, and
                conversations with readers.
              </p>
              <a className="inline-button light" href="/podcast">
                View Podcast
              </a>
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
        <a className="button-dark" href="#books">
          View Book
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
