import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';

const head = (title, description, image = '/island-nights-cover.jpg') => String.raw`<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${image}" />
  <link rel="icon" href="/favicon.svg" />
  <link rel="stylesheet" href="/style.css" />
</head>`;

const header = (home = false) => String.raw`<header class="site-header">
  <a class="brand-mark" href="${home ? '#home' : '/'}" aria-label="Amanah Saais home">AS</a>
  <nav class="main-menu" aria-label="Primary">
    <a href="${home ? '#home' : '/'}">Home</a>
    <a href="/about/">About</a>
    <a href="${home ? '#books' : '/#books'}">Books</a>
    <a href="${home ? '#shop' : '/#shop'}">Shop</a>
    <a href="${home ? '#podcast' : '/#podcast'}">Podcast</a>
    <a href="${home ? '#contact' : '/#contact'}">Contact</a>
  </nav>
  <p class="header-note">Novelist. Poet. Storyteller.</p>
  <nav class="social-menu" aria-label="Quick links">
    <a href="${home ? '#books' : '/#books'}">Book One</a>
    <a href="/about/">Bio</a>
    <a href="${home ? '#contact' : '/#contact'}">Mail</a>
  </nav>
</header>`;

const footer = String.raw`<footer class="footer-nevo">
  <a class="button-dark" href="/#books">View Book</a>
  <div><span>Built for </span><strong>Amanah Saais</strong><p>Arcane du Beltah: Island Nights</p></div>
</footer>`;

const contactSection = String.raw`<section id="contact" class="quote-section lighter-bg">
  <div class="container-nevo quote-grid">
    <blockquote><span>For readers, press, and project inquiries.</span><cite>Contact Amanah Saais</cite></blockquote>
    <form class="contact-box" action="mailto:hello@example.com" method="post">
      <label for="name">Name</label><input id="name" name="name" type="text" placeholder="John Doe" />
      <label for="email">Email</label><input id="email" name="email" type="email" placeholder="e.g. johndoe@example.com" />
      <label for="message">Message</label><textarea id="message" name="message" placeholder="Ask me anything" rows="7"></textarea>
      <button class="button-dark" type="submit">Submit</button>
    </form>
  </div>
</section>`;

const homeHtml = String.raw`<!doctype html>
<html lang="en">
${head('Amanah Saais | About the Author', 'About Amanah Saais, novelist, poet, storyteller, and author of Arcane du Beltah: Island Nights.')}
<body>
  <main class="site-shell">
    ${header(true)}
    <div class="content-frame">
      <section id="home" class="freelancer-hero section-size-1">
        <div class="container-nevo">
          <h1 class="freelancer-title"><span>I'm Amanah, a </span><span class="typed-word serif black-text">novelist </span><br /><span>creating worlds of magic, destiny, romance, and wonder.</span></h1>
        </div>
      </section>
      <section id="books" class="section-size-2 books-section">
        <div class="container-nevo">
          <div class="section-row">
            <h2>Selected books</h2>
            <div class="filter-row" aria-label="Book categories"><span>All</span><span>Novel</span><span>Fantasy</span><span>Book One</span></div>
          </div>
          <article class="book-showcase">
            <div class="book-stage" aria-hidden="true">
              <div class="book-shadow"></div>
              <div class="book-3d"><div class="book-side"></div><img src="/island-nights-cover.jpg" alt="" class="book-cover-pro" /></div>
            </div>
            <div class="book-copy">
              <div class="labels">Novel</div>
              <h3>Arcane du Beltah: Island Nights</h3>
              <p>Book One begins an epic journey where magic, destiny, and courage collide beneath an island night.</p>
              <div class="book-meta">
                <div><span>Title</span><strong>Arcane du Beltah: Island Nights</strong></div>
                <div><span>Series</span><strong>Arcane du Beltah</strong></div>
                <div><span>Volume</span><strong>Book One</strong></div>
                <div><span>Genre</span><strong>Fantasy Romance</strong></div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section id="shop" class="statement-section lighter-bg">
        <div class="container-nevo narrow">
          <h2>Shop the debut novel.</h2>
          <div class="bio-copy"><p>Arcane du Beltah: Island Nights introduces readers to a world shaped by mystery, romance, hope, and wonder.</p><a class="inline-button" href="#contact">Request Purchase Details</a></div>
        </div>
      </section>
      <section id="podcast" class="section-size-3 podcast-section">
        <div class="container-nevo">
          <div class="section-row"><h2>Podcast</h2><p>Conversations on story, imagination, and the worlds behind the page.</p></div>
          <div class="podcast-panel"><span>Coming Soon</span><h3>Behind Island Nights</h3><p>A future audio space for book reflections, creative notes, and conversations with readers.</p></div>
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
${head('About Amanah Saais', 'The official About page for Amanah Saais, author of Arcane du Beltah: Island Nights.', '/amanah-saais-author.png')}
<body>
  <main class="site-shell">
    ${header(false)}
    <div class="content-frame">
      <section class="about-hero section-size-2">
        <div class="container-nevo about-profile">
          <div class="about-profile-image reveal-up"><img src="/amanah-saais-author.png" alt="Portrait of Amanah Saais" /></div>
          <div class="about-profile-title reveal-up delay-1"><p class="eyebrow">About</p><h1>Amanah Saais</h1><h2>Creative storyteller</h2></div>
        </div>
      </section>
      <section class="about-bio section-size-2">
        <div class="container-nevo bio-column">
          <h2>Bio</h2>
          <p>Amanah Saais is a novelist, poet, and storyteller drawn to immersive worlds, unforgettable characters, and stories that stay with readers after the final page.</p>
          <p>Her writing blends imagination with emotion, exploring the extraordinary hidden within ordinary moments. Across genres, she writes with one clear aim: to captivate the heart and ignite the imagination.</p>
          <p>Arcane du Beltah: Island Nights is her debut novel and the first installment in a series where magic, destiny, and courage collide.</p>
          <blockquote><span>Stories can make the unseen feel close enough to touch.</span><cite>Amanah Saais</cite></blockquote>
        </div>
      </section>
      <section class="latest-work section-size-2 lighter-bg">
        <div class="container-nevo">
          <div class="center-title"><h2>Latest Book</h2></div>
          <article class="book-showcase">
            <div class="book-stage" aria-hidden="true"><div class="book-shadow"></div><div class="book-3d"><div class="book-side"></div><img src="/island-nights-cover.jpg" alt="" class="book-cover-pro" /></div></div>
            <div class="book-copy"><div class="labels">Novel</div><h3>Arcane du Beltah: Island Nights</h3><p>A debut novel and the opening installment of the Arcane du Beltah series.</p></div>
          </article>
        </div>
      </section>
    </div>
    ${footer}
  </main>
</body>
</html>`;

const globalCss = await readFile('app/globals.css', 'utf8');
const customCss = globalCss.slice(globalCss.indexOf('.site-shell'));
const css = `*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#f8f7f4;color:#171717;font-family:Arial,Helvetica,sans-serif}p,h1,h2,h3{margin:0}a{color:inherit}${customCss}`;

await mkdir('vercel-static/about', { recursive: true });
await writeFile('vercel-static/index.html', homeHtml);
await writeFile('vercel-static/about/index.html', aboutHtml);
await writeFile('vercel-static/style.css', css);
await cp('public/island-nights-cover.jpg', 'vercel-static/island-nights-cover.jpg');
await cp('public/amanah-saais-author.png', 'vercel-static/amanah-saais-author.png');
await cp('public/favicon.svg', 'vercel-static/favicon.svg');
