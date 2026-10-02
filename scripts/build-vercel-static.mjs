import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';

const head = (title, description, image = '/island-nights-cover.jpg') => String.raw`<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${image}" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="apple-touch-icon" href="/favicon.png" />
  <link rel="preload" as="image" href="/amanah-saais-author-fast.webp" />
  <link rel="preload" as="image" href="/island-nights-book-one-mockup-fast.webp" />
  <link rel="preload" as="image" href="/island-nights-book-two-mockup-fast.webp" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/style.css" />
</head>`;

const header = (home = false) => String.raw`<header class="site-header">
  <a class="brand-mark" href="${home ? '#home' : '/'}" aria-label="Amanah Saais home"><span class="brand-seal">AS</span><span>Amanah</span></a>
  <nav class="main-menu" aria-label="Primary">
    <a href="${home ? '#home' : '/'}">Home</a>
    <a href="/about/">About</a>
    <a href="${home ? '#books' : '/#books'}">Books</a>
    <a href="/shop/">Shop</a>
    <a href="/podcast/">Podcast</a>
    <a href="${home ? '#contact' : '/#contact'}">Contact</a>
  </nav>
  <div class="social-links-mini" aria-label="Social links">
    <span>Social Links:</span>
    <div><a href="${home ? '#contact' : '/#contact'}">FB</a><a href="${home ? '#contact' : '/#contact'}">X</a><a href="${home ? '#contact' : '/#contact'}">IN</a><a href="${home ? '#contact' : '/#contact'}">MAIL</a></div>
  </div>
</header>`;

const motionScript = String.raw`<script>
const initAverMotion = () => {
  const root = document.querySelector('.aver-home');
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.main-menu');
  if (!root) return;

  root.classList.add('motion-ready');

  if (nav) {
    const links = [...nav.querySelectorAll('a')];
    const active = links[0];
    const moveIndicator = (link) => {
      if (!link) return;
      nav.style.setProperty('--indicator-left', link.offsetLeft + 'px');
      nav.style.setProperty('--indicator-width', link.offsetWidth + 'px');
    };

    requestAnimationFrame(() => moveIndicator(active));
    links.forEach((link) => {
      link.addEventListener('mouseenter', () => moveIndicator(link));
      link.addEventListener('focus', () => moveIndicator(link));
      link.addEventListener('mouseleave', () => moveIndicator(active));
      link.addEventListener('blur', () => moveIndicator(active));
    });
    window.addEventListener('resize', () => moveIndicator(active));
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
    ...document.querySelectorAll('.reveal-up, .landing-section-head, .work-process-item, .journal-grid article, .quote-grid > *, .about-intro-grid > *, .about-service-grid article, .shop-listing-card, .episode-item, .podcast-note-grid > *, .podcast-card'),
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
</script>`;

const footer = String.raw`<footer class="footer-nevo">
  <a class="footer-cta" href="/#contact">
    <div class="animated-line animated-line-one">
      <div class="line-block"><span><span class="cta-text">Let’s talk books</span><span class="cta-icon">↗</span></span><span><span class="cta-text">Let’s talk books</span><span class="cta-icon">↗</span></span><span><span class="cta-text">Let’s talk books</span><span class="cta-icon">↗</span></span></div>
      <div class="line-block-copy"><span><span class="cta-text">Let’s talk books</span><span class="cta-icon">↗</span></span><span><span class="cta-text">Let’s talk books</span><span class="cta-icon">↗</span></span><span><span class="cta-text">Let’s talk books</span><span class="cta-icon">↗</span></span></div>
    </div>
    <div class="animated-line animated-line-two">
      <div class="line-block"><span><span class="cta-text">Enter Arcane du Beltah</span><span class="cta-icon">↗</span></span><span><span class="cta-text">Enter Arcane du Beltah</span><span class="cta-icon">↗</span></span><span><span class="cta-text">Enter Arcane du Beltah</span><span class="cta-icon">↗</span></span></div>
      <div class="line-block-copy"><span><span class="cta-text">Enter Arcane du Beltah</span><span class="cta-icon">↗</span></span><span><span class="cta-text">Enter Arcane du Beltah</span><span class="cta-icon">↗</span></span><span><span class="cta-text">Enter Arcane du Beltah</span><span class="cta-icon">↗</span></span></div>
    </div>
  </a>
  <a class="button" href="/#books"><span>View Book</span></a>
  <nav class="footer-social-links" aria-label="Social links"><a href="/#contact">FB</a><a href="/#contact">X</a><a href="/#contact">IN</a><a href="/#contact">MAIL</a></nav>
  <div><span>Built for </span><strong>Amanah Saais</strong><p>Arcane du Beltah: Island Nights</p></div>
</footer>`;

const contactSection = String.raw`<section id="contact" class="quote-section lighter-bg">
  <div class="container-nevo quote-grid">
    <blockquote><span>For readers, press, and project inquiries.</span><cite>Contact Amanah Saais</cite></blockquote>
    <form class="contact-box" action="mailto:hello@example.com" method="post">
      <label for="name">Name</label><input id="name" name="name" type="text" placeholder="John Doe" />
      <label for="email">Email</label><input id="email" name="email" type="email" placeholder="e.g. johndoe@example.com" />
      <label for="message">Message</label><textarea id="message" name="message" placeholder="Ask me anything" rows="7"></textarea>
      <button class="button-dark" type="submit"><span>Submit</span></button>
    </form>
  </div>
</section>`;

const homeHtml = String.raw`<!doctype html>
<html lang="en">
${head('Amanah Saais | About the Author', 'About Amanah Saais, novelist, poet, storyteller, and author of Arcane du Beltah: Island Nights.')}
<body>
  <main class="site-shell aver-home">
    ${header(true)}
    ${motionScript}
    <div class="content-frame">
      <section id="home" class="amanah-banner">
        <div class="banner-watermark" aria-hidden="true"><span>Amanah</span></div>
        <div class="container-nevo">
          <div class="banner-title reveal-up">
            <p class="eyebrow">Novelist / Writer / Poet</p>
            <h1><span>Amanah</span><span class="author-orb"><img src="/amanah-saais-author-fast.webp" alt="" loading="eager" fetchpriority="high" /><i aria-hidden="true">✦</i></span><span>Saais</span></h1>
            <p>Amanah Saais is a novelist, poet, and storyteller writing faith-led stories of romance, mystery, and courage.</p>
          </div>
          <div class="banner-feature hero-featured reveal-up delay-1">
            <h2>Genres</h2>
            <div class="featured-list" aria-label="Genres"><span>Inspirational</span><span>Fantasy</span><span>Romance</span><span>Mystery</span><span>Destiny</span><span>Faith Based</span></div>
          </div>
        </div>
      </section>
      <section id="books" class="landing-books section-size-2">
        <div class="container-nevo">
          <div class="landing-section-head">
            <div><p class="eyebrow">Books</p><h2>Selected work</h2></div>
            <span>Books / Covers / Movie Concepts</span>
          </div>
          <div class="project-grid">
            <article class="project-book-card portrait" style="--card-tone:#0b5c79">
              <span class="card-reveal" aria-hidden="true"></span>
              <div class="project-cover"><img src="/island-nights-book-one-mockup-fast.webp" alt="Island Nights cover" loading="eager" fetchpriority="high" /></div>
            </article>
            <article class="project-book-card portrait" style="--card-tone:#432a70">
              <span class="card-reveal" aria-hidden="true"></span>
              <div class="project-cover"><img src="/island-nights-book-two-mockup-fast.webp" alt="Island Nights Part Two cover" loading="eager" fetchpriority="high" /></div>
            </article>
            <article class="project-book-card portrait" style="--card-tone:#8f6b3d">
              <span class="card-reveal" aria-hidden="true"></span>
              <div class="project-cover"><img src="/behind-hind-sight-cover.svg" alt="Behind Hind Sight cover" /></div>
            </article>
            <article class="project-book-card landscape" style="--card-tone:#0b5c79">
              <span class="card-reveal" aria-hidden="true"></span>
              <div class="project-cover"><img src="/island-nights-movie-part-one-wide-fast.webp" alt="Island Nights movie Part 1 cover" loading="lazy" /></div>
            </article>
            <article class="project-book-card landscape" style="--card-tone:#170f31">
              <span class="card-reveal" aria-hidden="true"></span>
              <div class="project-cover"><img src="/island-nights-movie-part-two-wide-fast.webp" alt="Island Nights movie Part 2 cover" loading="lazy" /></div>
            </article>
          </div>
          <div class="landing-center-action"><a class="button" href="/shop/"><span>All Books</span></a></div>
        </div>
      </section>
      <section class="work-process-section">
        <div class="container-nevo">
          <div class="landing-section-head">
            <div><p class="eyebrow">Process</p><h2>Process Delivers Stories</h2></div>
            <span>The approach</span>
          </div>
          <div class="process-grid work-process">
            <div><article class="work-process-item"><span>01</span><h3>World</h3><p>Every story begins with atmosphere: islands, secrets, and the feeling that something unseen is close.</p></article></div>
            <div><article class="work-process-item"><span>02</span><h3>Heart</h3><p>Characters move through romance, courage, and longing with emotional choices at the center.</p></article></div>
            <div><article class="work-process-item"><span>03</span><h3>Journey</h3><p>Each book opens another door into Arcane du Beltah, building a series made to linger.</p></article></div>
          </div>
        </div>
      </section>
      <section id="podcast" class="journal-section">
        <div class="container-nevo">
          <div class="landing-section-head">
            <div><p class="eyebrow">Notes</p><h2>My weekly thoughts</h2></div>
            <span>Podcast / Bio / Shop</span>
          </div>
          <div class="journal-grid">
            <article><span>Podcast</span><h3>Behind Island Nights</h3><p>A quiet audio space for the ideas, worldbuilding, and emotional notes behind the books.</p><a class="inline-button" href="/podcast/">Open</a></article>
            <article><span>About</span><h3>Meet Amanah</h3><p>A novelist, writer, and poet crafting immersive stories filled with hope and courage.</p><a class="inline-button" href="/about/">Open</a></article>
            <article><span>Shop</span><h3>Amanah Books</h3><p>Buy through Paystack or Amazon and begin the Arcane du Beltah series.</p><a class="inline-button" href="/shop/">Open</a></article>
          </div>
        </div>
      </section>
      ${contactSection}
    </div>
    ${footer}
  </main>
</body>
</html>`;

const aboutHtml = String.raw`<!doctype html>
<html lang="en">
${head('About Amanah Saais', 'The official About page for Amanah Saais, author of Arcane du Beltah: Island Nights.', '/amanah-saais-author-fast.webp')}
<body>
  <main class="site-shell aver-home about-template-page">
    ${header(false)}
    ${motionScript}
    <div class="content-frame">
      <section class="page-banner">
        <div class="banner-watermark" aria-hidden="true"><span>About</span></div>
        <div class="container-nevo page-banner-inner page-banner-split"><div><h1>About Me</h1><nav class="page-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>•</span><span>About</span></nav></div><p>Who I Am</p></div>
      </section>
      <section class="about-intro-template">
        <div class="container-nevo about-intro-grid">
          <div class="about-photo-stack" aria-label="Amanah Saais and featured books"><figure><img src="/island-nights-book-two-mockup-fast.webp" alt="" loading="lazy" /></figure><figure><img src="/island-nights-book-one-mockup-fast.webp" alt="" loading="lazy" /></figure><figure><img src="/amanah-saais-author-fast.webp" alt="Amanah Saais" loading="eager" fetchpriority="high" /></figure></div>
          <div class="about-intro-copy">
            <span class="eyebrow">Bio</span>
            <h2>A novelist, writer, and poet creating worlds that feel close enough to touch.</h2>
            <p>Amanah Saais is a novelist, poet, and storyteller drawn to immersive worlds, unforgettable characters, and stories that stay with readers after the final page.</p>
            <p>Her writing blends imagination with emotion, exploring the extraordinary hidden within ordinary moments. Across genres, she writes with one clear aim: to captivate the heart and ignite the imagination.</p>
            <p>Arcane du Beltah: Island Nights is her debut novel and the first installment in a series where mystery, destiny, and courage collide.</p>
            <a class="about-intro-button" href="/#books"><span aria-hidden="true">↻</span>More Books</a>
          </div>
        </div>
      </section>
      <section class="about-services-template">
        <div class="container-nevo">
          <div class="landing-section-head"><div><h2>What I can do for you</h2></div><span>Services</span></div>
          <div class="about-service-grid">
            <article><span>/ 01</span><h3>Story Worlds</h3><p>Atmospheric worlds shaped by island light, hidden mystery, and the quiet pull of destiny.</p></article>
            <article><span>/ 02</span><h3>Character Emotion</h3><p>Romance, courage, loyalty, and choices that stay with readers beyond the last page.</p></article>
            <article><span>/ 03</span><h3>Faith-led Themes</h3><p>Hopeful, faith-based threads woven through mystery, longing, and personal courage.</p></article>
            <article><span>/ 04</span><h3>Poetry & Prose</h3><p>Minimal, lyrical writing that keeps the emotional pulse close and memorable.</p></article>
            <article class="muted"><span>/ 05</span><h3>Reader Notes</h3><p>Coming Soon...</p></article>
            <div class="service-star" aria-hidden="true"></div><div class="service-star" aria-hidden="true"></div><div class="service-star" aria-hidden="true"></div>
          </div>
        </div>
      </section>
      <section class="about-quote-template reader-review-template"><div class="container-nevo"><span>Reviews</span><h2>What readers say</h2><div class="reader-review-slider"><button type="button" aria-label="Previous review">←</button><blockquote><p>Amanah’s writing feels cinematic and intimate at once, with a world that keeps unfolding after the page ends.</p><cite><strong>Reader Note</strong><span>Arcane du Beltah</span></cite></blockquote><button type="button" aria-label="Next review">→</button></div></div></section>
    </div>
  </main>
</body>
</html>`;

const shopHtml = String.raw`<!doctype html>
<html lang="en">
${head('Shop | Amanah Saais', 'Shop page for Arcane du Beltah: Island Nights books by Amanah Saais.')}
<body>
  <main class="site-shell aver-home shop-template-page">
    ${header(false)}
    ${motionScript}
    <div class="content-frame">
      <section class="page-banner">
        <div class="banner-watermark" aria-hidden="true"><span>Shop</span></div>
        <div class="container-nevo page-banner-inner"><span class="eyebrow">Amanah Books</span><h1>Shop</h1><p>Island Nights editions available through Paystack and Amazon.</p></div>
      </section>
      <section class="shop-listing-template">
        <div class="container-nevo">
          <div class="shop-listing-grid">
            <article class="shop-listing-card">
              <div class="shop-listing-image"><img src="/island-nights-book-one-mockup-fast.webp" alt="Arcane du Beltah Island Nights Book One" loading="eager" fetchpriority="high" /></div>
              <div class="shop-listing-copy">
                <span>Book One</span>
                <h3>Arcane du Beltah: Island Nights</h3>
                <p>Part One begins an island journey where courage, destiny, and hidden power meet beneath the night sky.</p>
                <div class="shop-price-row"><strong>₦15,000</strong><em>approx. $11.34</em></div>
                <div class="shop-listing-actions"><a class="button-dark" href="https://paystack.shop/pay/jeqoqeorm8" target="_blank" rel="noreferrer"><span>Buy with Paystack</span></a><a class="button-outline" href="https://www.amazon.com/Arcane-Du-Beltah-Island-Nights-ebook/dp/B0HJ7719YF/ref=sr_1_1?dib=eyJ2IjoiMSJ9.CxCcJFU2nLDFWZ2y_I1hqt7NGVOxQKQE5e9FNjHkx8HGjHj071QN20LucGBJIEps.65QKABuPNIYRwg-3CRjFSNIvAWT9oggMjGC0GQgg_RY&dib_tag=se&keywords=arcane+du+beltah+book&qid=1790701568&sr=8-1" target="_blank" rel="noreferrer">Buy from Amazon</a></div>
              </div>
            </article>
            <article class="shop-listing-card">
              <div class="shop-listing-image"><img src="/island-nights-book-two-mockup-fast.webp" alt="Arcane du Beltah Island Nights Book Two" loading="lazy" /></div>
              <div class="shop-listing-copy">
                <span>Book Two</span>
                <h3>Arcane du Beltah: Island Nights</h3>
                <p>Part Two expands the world with deeper mystery, romance, and a fate balanced between courage and risk.</p>
                <div class="shop-price-row"><strong>₦15,000</strong><em>approx. $11.34</em></div>
                <div class="shop-listing-actions"><a class="button-dark" href="https://paystack.shop/pay/jeqoqeorm8" target="_blank" rel="noreferrer"><span>Buy with Paystack</span></a><a class="button-outline" href="https://www.amazon.com/Arcane-Du-Beltah-Amanah-Sasis-ebook/dp/B0HDR1H55S/ref=sr_1_3?dib=eyJ2IjoiMSJ9.CxCcJFU2nLDFWZ2y_I1hqt7NGVOxQKQE5e9FNjHkx8HGjHj071QN20LucGBJIEps.65QKABuPNIYRwg-3CRjFSNIvAWT9oggMjGC0GQgg_RY&dib_tag=se&keywords=arcane+du+beltah+book&qid=1790701568&sr=8-3" target="_blank" rel="noreferrer">Buy from Amazon</a></div>
              </div>
            </article>
          </div>
          <div class="shop-pagination"><span>1</span></div>
        </div>
      </section>
    </div>
  </main>
</body>
</html>`;

const podcastHtml = String.raw`<!doctype html>
<html lang="en">
${head('Podcast | Amanah Saais', 'A minimal podcast page for Amanah Saais, featuring book notes and conversations behind Amanah Books.', '/amanah-saais-author-fast.webp')}
<body>
  <main class="site-shell aver-home podcast-template-page">
    ${header(false)}
    ${motionScript}
    <div class="content-frame">
      <section class="page-banner podcast-page-banner">
        <div class="banner-watermark" aria-hidden="true"><span>Podcast</span></div>
        <div class="container-nevo page-banner-inner page-banner-split"><div><h1>Podcast</h1><nav class="page-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>•</span><span>Podcast</span></nav></div><p>Coming Soon</p></div>
      </section>
      <section class="podcast-blog-template">
        <div class="container-nevo">
          <div class="podcast-blog-intro"><span>Podcast</span><h2>Stories behind the stories</h2><p>Short, thoughtful audio notes from Amanah Saais are in preparation.</p></div>
          <div class="podcast-card-grid">
            <article class="podcast-card init-delay"><div class="podcast-card-image"><img src="/island-nights-movie-part-one-wide-fast.webp" alt="" loading="lazy" /></div><div class="podcast-card-copy"><span>Episode 01</span><h3>Behind Island Nights</h3><p>A quiet introduction to the world of Arcane du Beltah and the emotional thread behind the island.</p><strong>Coming soon</strong></div></article>
            <article class="podcast-card init-delay"><div class="podcast-card-image"><img src="/island-nights-book-one-mockup-fast.webp" alt="" loading="lazy" /></div><div class="podcast-card-copy"><span>Episode 02</span><h3>The Making of Amanah Books</h3><p>A short note on writing across romance, mystery, faith, and courage.</p><strong>In planning</strong></div></article>
            <article class="podcast-card init-delay"><div class="podcast-card-image"><img src="/island-nights-book-two-mockup-fast.webp" alt="" loading="lazy" /></div><div class="podcast-card-copy"><span>Episode 03</span><h3>Reader Questions</h3><p>A simple space for reflections, questions, and the small details readers keep returning to.</p><strong>Coming soon</strong></div></article>
          </div>
          <div class="shop-pagination"><span>1</span></div>
        </div>  
      </section>
    </div>
    <footer class="footer-nevo">
      <a class="button-dark" href="/shop/">Shop Books</a>
      <div><span>Podcast </span><strong>Amanah Saais</strong><p>Stories behind the stories</p></div>
    </footer>
  </main>
</body>
</html>`;

const globalCss = await readFile('app/globals.css', 'utf8');
const customCss = globalCss.slice(globalCss.indexOf('.site-shell'));
const css = `*{box-sizing:border-box}:root{--font-outfit:Outfit,Arial,Helvetica,sans-serif;--font-geist-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace}html{scroll-behavior:smooth}body{margin:0;background:#f8f7f4;color:#171717;font-family:Outfit,Arial,Helvetica,sans-serif}p,h1,h2,h3{margin:0}a{color:inherit}${customCss}`;

await mkdir('vercel-static/about', { recursive: true });
await mkdir('vercel-static/shop', { recursive: true });
await mkdir('vercel-static/podcast', { recursive: true });
await writeFile('vercel-static/index.html', homeHtml);
await writeFile('vercel-static/about/index.html', aboutHtml);
await writeFile('vercel-static/shop/index.html', shopHtml);
await writeFile('vercel-static/podcast/index.html', podcastHtml);
await writeFile('vercel-static/style.css', css);
await cp('public/island-nights-cover.jpg', 'vercel-static/island-nights-cover.jpg');
await cp('public/island-nights-book-two.png', 'vercel-static/island-nights-book-two.png');
await cp('public/island-nights-part-one-cover.png', 'vercel-static/island-nights-part-one-cover.png');
await cp('public/island-nights-part-two-cover.png', 'vercel-static/island-nights-part-two-cover.png');
await cp('public/island-nights-book-one-mockup.png', 'vercel-static/island-nights-book-one-mockup.png');
await cp('public/island-nights-book-two-mockup.png', 'vercel-static/island-nights-book-two-mockup.png');
await cp('public/island-nights-book-one-mockup-fast.webp', 'vercel-static/island-nights-book-one-mockup-fast.webp');
await cp('public/island-nights-book-two-mockup-fast.webp', 'vercel-static/island-nights-book-two-mockup-fast.webp');
await cp('public/behind-hind-sight-cover.svg', 'vercel-static/behind-hind-sight-cover.svg');
await cp('public/island-nights-movie-part-one.svg', 'vercel-static/island-nights-movie-part-one.svg');
await cp('public/island-nights-movie-part-two.svg', 'vercel-static/island-nights-movie-part-two.svg');
await cp('public/island-nights-movie-part-one-wide.png', 'vercel-static/island-nights-movie-part-one-wide.png');
await cp('public/island-nights-movie-part-two-wide.png', 'vercel-static/island-nights-movie-part-two-wide.png');
await cp('public/island-nights-movie-part-one-wide-fast.webp', 'vercel-static/island-nights-movie-part-one-wide-fast.webp');
await cp('public/island-nights-movie-part-two-wide-fast.webp', 'vercel-static/island-nights-movie-part-two-wide-fast.webp');
await cp('public/island-nights-movie-wide.jpg', 'vercel-static/island-nights-movie-wide.jpg');
await cp('public/amanah-saais-author.png', 'vercel-static/amanah-saais-author.png');
await cp('public/amanah-saais-author-fast.webp', 'vercel-static/amanah-saais-author-fast.webp');
await cp('public/favicon.svg', 'vercel-static/favicon.svg');
await cp('public/favicon.png', 'vercel-static/favicon.png');
await mkdir('vercel-static/images', { recursive: true });
await cp('public/images/noise.webp', 'vercel-static/images/noise.webp');
await mkdir('vercel-static/fonts/melodrama', { recursive: true });
await cp('public/fonts/melodrama/Melodrama-Variable.woff2', 'vercel-static/fonts/melodrama/Melodrama-Variable.woff2');
