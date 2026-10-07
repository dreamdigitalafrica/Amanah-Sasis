import { books } from './shop/books';
import BookCard from './shop/BookCard';

const featuredBy = ['Inspirational', 'Fantasy', 'Romance', 'Mystery', 'Destiny', 'Faith Based'];

const motionScript = `
const initAverMotion = () => {
  const root = document.querySelector('.aver-home');
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.main-menu');
  if (!root) return;

  root.classList.add('motion-ready');

  if (nav) {
    const links = [...nav.querySelectorAll('a')];
    let active = links[0];
    const moveIndicator = (link) => {
      if (!link) return;
      nav.style.setProperty('--indicator-left', link.offsetLeft + 'px');
      nav.style.setProperty('--indicator-width', link.offsetWidth + 'px');
    };

    const linkMatching = (matcher) =>
      links.find((link) => matcher(new URL(link.href, window.location.href)));

    const getActiveLink = () => {
      const path = window.location.pathname.replace(/\\/$/, '') || '/';
      if (path.startsWith('/about')) return linkMatching((url) => url.pathname.startsWith('/about'));
      if (path.startsWith('/shop')) return linkMatching((url) => url.pathname.startsWith('/shop'));
      if (path.startsWith('/podcast')) return linkMatching((url) => url.pathname.startsWith('/podcast'));

      const contact = document.querySelector('#contact');
      const books = document.querySelector('#books');
      const probeLine = window.innerHeight * 0.4;
      if (contact && contact.getBoundingClientRect().top <= probeLine) {
        return linkMatching((url) => url.hash === '#contact');
      }
      if (books && books.getBoundingClientRect().top <= probeLine) {
        return linkMatching((url) => url.hash === '#books');
      }
      if (window.location.hash === '#contact') return linkMatching((url) => url.hash === '#contact');
      if (window.location.hash === '#books') return linkMatching((url) => url.hash === '#books');
      return links[0];
    };

    const setActive = (link) => {
      active = link || links[0];
      links.forEach((item) => item.classList.toggle('is-active', item === active));
      moveIndicator(active);
    };

    const syncActive = () => setActive(getActiveLink());
    requestAnimationFrame(syncActive);
    links.forEach((link) => {
      link.addEventListener('mouseenter', () => moveIndicator(link));
      link.addEventListener('focus', () => moveIndicator(link));
      link.addEventListener('mouseleave', () => moveIndicator(active));
      link.addEventListener('blur', () => moveIndicator(active));
      link.addEventListener('click', () => requestAnimationFrame(() => setActive(link)));
    });
    window.addEventListener('resize', syncActive);
    window.addEventListener('hashchange', syncActive);
    window.addEventListener('scroll', syncActive, { passive: true });
  }

  if (header) {
    let lastScroll = window.scrollY;
    const syncHeader = () => {
      const current = window.scrollY;
      header.classList.toggle('is-scrolled', current > 50);
      header.classList.toggle('is-hidden', current > window.innerHeight * 0.9 && current > lastScroll);
      lastScroll = Math.max(current, 0);
    };
    syncHeader();
    window.addEventListener('scroll', syncHeader, { passive: true });
  }

  const revealItems = [
    ...document.querySelectorAll('.reveal-up, .landing-section-head, .work-process-item, .journal-grid article, .quote-grid > *, .about-intro-grid > *, .about-service-grid article, .shop-listing-card, .shop-blog-card, .episode-item, .podcast-note-grid > *, .podcast-card'),
  ];
  const projectCards = [...document.querySelectorAll('.project-book-card')];

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

    [...revealItems, ...projectCards].forEach((item, index) => {
      item.style.setProperty('--motion-delay', Math.min(index * 75, 420) + 'ms');
      observer.observe(item);
    });
  } else {
    [...revealItems, ...projectCards].forEach((item) => item.classList.add('is-visible'));
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAverMotion, { once: true });
} else {
  initAverMotion();
}
`;

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
    date: 'Coming Soon',
    title: 'Behind Island Nights',
    text: 'A quiet audio space for the ideas, worldbuilding, and emotional notes behind the books.',
    href: '/podcast',
    image: '/island-nights-movie-part-one-wide-fast.webp',
  },
  {
    label: 'Bio',
    date: 'Amanah Saais',
    title: 'Meet Amanah',
    text: 'A novelist, writer, and poet crafting immersive stories filled with hope and courage.',
    href: '/about',
    image: '/amanah-saais-author-fast.webp',
  },
  {
    label: 'Books',
    date: 'Available',
    title: 'Amanah Books',
    text: 'Buy through Paystack or Amazon and begin the Arcane du Beltah series.',
    href: '/shop',
    image: '/island-nights-book-two-mockup-fast.webp',
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
          <a href="#contact">Contact</a>
        </nav>
        <div className="social-links-mini" aria-label="Social links">
          <span>Social Links:</span>
          <div>
            <a href="#contact">FB</a>
            <a href="#contact">X</a>
            <a href="#contact">IN</a>
            <a href="#contact">MAIL</a>
            <a
              className="substack-social-link"
              href="https://open.substack.com/pub/amanahsaais"
              target="_blank"
              rel="noreferrer"
              aria-label="Amanah Saais on Substack"
              title="Substack"
            >
              <span className="substack-icon" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>
      <script dangerouslySetInnerHTML={{ __html: motionScript }} />

      <div className="content-frame">
        <section id="home" className="amanah-banner">
          <div className="container-nevo">
            <div className="banner-title hero-typewriter reveal-up">
              <p className="eyebrow">Novelist / Writer / Poet</p>
              <h1 aria-label="Stories that awaken faith, carry romance, hold mystery, and choose courage.">
                <span className="typewriter-prefix">Stories that</span>
                <span className="typewriter-words" aria-hidden="true">
                  <span>awaken faith</span>
                  <span>carry romance</span>
                  <span>hold mystery</span>
                  <span>choose courage</span>
                </span>
              </h1>
            </div>
          </div>
        </section>

        <section id="books" className="landing-books section-size-2">
          <div className="container-nevo">
            <div className="landing-section-head">
              <div>
                <h2>Books</h2>
              </div>

            </div>

            <div className="shop-blog-grid">{books.map((book, index) => <BookCard key={book.id} book={book} index={index} />)}</div>

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
                <h2>Process Delivers Stories</h2>
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
                <h2>My weekly thoughts</h2>
              </div>
              <span>Blog</span>
            </div>

            <div className="journal-grid">
              {notes.map((item, index) => (
                <article className="journal-card" key={item.title}>
                  <a className="journal-image" href={item.href} aria-label={item.title}>
                    <img src={item.image} alt="" loading={index === 0 ? 'eager' : 'lazy'} />
                  </a>
                  <div className="journal-meta">
                    <span>{item.label}</span>
                    <time>{item.date}</time>
                  </div>
                  <h3>
                    <a href={item.href}>{item.title}</a>
                  </h3>
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
        <nav className="footer-social-links" aria-label="Social links">
          <a href="#contact">FB</a>
          <a href="#contact">X</a>
          <a href="#contact">IN</a>
          <a href="#contact">MAIL</a>
          <a
            className="substack-social-link"
            href="https://open.substack.com/pub/amanahsaais"
            target="_blank"
            rel="noreferrer"
            aria-label="Amanah Saais on Substack"
            title="Substack"
          >
            <span className="substack-icon" aria-hidden="true" />
          </a>
        </nav>
        <div>
          <span>Built for </span>
          <strong>Amanah Saais</strong>
          <p>Arcane du Beltah: Island Nights</p>
        </div>
      </footer>
    </main>
  );
}
