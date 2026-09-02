import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';

const html = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Amanah Saais | About the Author</title>
    <meta name="description" content="About Amanah Saais, novelist, poet, storyteller, and author of Arcane du Beltah: Island Nights." />
    <meta property="og:title" content="Amanah Saais | About the Author" />
    <meta property="og:description" content="Meet the author of Arcane du Beltah: Island Nights, a debut fantasy novel where magic, destiny, and courage collide." />
    <meta property="og:image" content="/island-nights-cover.jpg" />
    <link rel="icon" href="/favicon.svg" />
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <main class="site-shell">
      <header class="site-header">
        <a class="brand-mark" href="#home" aria-label="Amanah Saais home">AS</a>
        <nav class="main-menu" aria-label="Primary">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </nav>
        <p class="header-note">Novelist. Poet. Storyteller.</p>
        <nav class="social-menu" aria-label="Social links">
          <a href="#works">Books</a>
          <a href="#about">Bio</a>
          <a href="#contact">Mail</a>
        </nav>
      </header>
      <div class="content-frame">
        <section id="home" class="intro-section">
          <div class="hero-glow" aria-hidden="true"></div>
          <div class="container-nevo hero-grid">
            <div>
              <p class="eyebrow reveal-up">About the Author</p>
              <h1 class="intro-title reveal-up delay-1"><span>Amanah Saais</span><br /><span class="serif black-text">writes wonder.</span></h1>
              <p class="hero-copy reveal-up delay-2">Novelist, poet, and storyteller behind Arcane du Beltah: Island Nights.</p>
            </div>
            <div class="hero-card reveal-up delay-3">
              <img src="/amanah-saais-author.png" alt="Portrait of Amanah Saais" />
            </div>
          </div>
        </section>
        <section id="works" class="section-size-2">
          <div class="container-nevo">
            <div class="section-row">
              <h2>Selected work</h2>
              <div class="filter-row" aria-label="Work categories"><span>All</span><span>Novel</span><span>Series</span><span>Poetry</span></div>
            </div>
            <div class="work-grid">
              <article class="work-item book">
                <div class="book-mockup" aria-hidden="true"><div class="book-spine"></div><img src="/island-nights-cover.jpg" alt="" class="book-cover" /></div>
                <div class="labels">Novel</div>
                <div class="caption"><h3>Island Nights</h3><p>Arcane du Beltah / Book One</p></div>
              </article>
              <article class="work-item portrait">
                <img src="/amanah-saais-author.png" alt="" class="tile-image" aria-hidden="true" />
                <div class="labels">Author</div>
                <div class="caption"><h3>Amanah Saais</h3><p>Portrait / Storyteller</p></div>
              </article>
              <article class="work-item series"><div class="text-work"><span>Series</span><p>Magic, destiny, courage</p></div><div class="labels">Series</div><div class="caption"><h3>Arcane du Beltah</h3><p>Magic, destiny, courage</p></div></article>
              <article class="work-item poetry"><div class="text-work"><span>Poetry</span><p>Emotion-led writing</p></div><div class="labels">Poetry</div><div class="caption"><h3>Poetic Voice</h3><p>Emotion-led writing</p></div></article>
              <article class="work-item worlds"><div class="text-work"><span>Worlds</span><p>Mystery and romance</p></div><div class="labels">Worlds</div><div class="caption"><h3>Hidden Wonder</h3><p>Mystery and romance</p></div></article>
              <article class="work-item journey"><div class="text-work"><span>Project</span><p>First installment</p></div><div class="labels">Project</div><div class="caption"><h3>Debut Journey</h3><p>First installment</p></div></article>
            </div>
          </div>
        </section>
        <section id="about" class="statement-section lighter-bg">
          <div class="container-nevo narrow">
            <h2>Stories with magic just beneath the surface.</h2>
            <div class="bio-copy">
              <p>Amanah Saais writes immersive fiction shaped by mystery, romance, hope, and wonder. Her work looks for the extraordinary hidden inside ordinary moments.</p>
              <p>Arcane du Beltah: Island Nights is her debut novel and the first step into a series where magic, destiny, and courage collide.</p>
            </div>
          </div>
        </section>
        <section class="section-size-3">
          <div class="container-nevo">
            <div class="list-grid">
              <div><h3>Identity</h3><ul><li>Novelist</li><li>Poet</li><li>Storyteller</li><li>Worldbuilder</li></ul></div>
              <div><h3>Themes</h3><ul><li>Mystery</li><li>Romance</li><li>Hope</li><li>Wonder</li></ul></div>
              <div><h3>Publication</h3><ul><li>Debut Novel</li><li>Book One</li><li>Arcane du Beltah</li><li>Island Nights</li></ul></div>
              <div><h3>Journey</h3><ul><li>Magic</li><li>Destiny</li><li>Courage</li><li>Epic Journey</li></ul></div>
            </div>
          </div>
        </section>
        <section id="contact" class="quote-section lighter-bg">
          <div class="container-nevo quote-grid">
            <blockquote><span>For readers, press, and project inquiries.</span><cite>Contact Amanah Saais</cite></blockquote>
            <form class="contact-box" action="mailto:hello@example.com" method="post">
              <label for="name">Name</label><input id="name" name="name" type="text" placeholder="John Doe" />
              <label for="email">Email</label><input id="email" name="email" type="email" placeholder="e.g. johndoe@example.com" />
              <label for="message">Message</label><textarea id="message" name="message" placeholder="Ask me anything" rows="7"></textarea>
              <button class="button-dark" type="submit">Submit</button>
            </form>
          </div>
        </section>
      </div>
      <footer class="footer-nevo">
        <a class="button-dark" href="#works">View Works</a>
        <div><span>Built for </span><strong>Amanah Saais</strong><p>Arcane du Beltah: Island Nights</p></div>
      </footer>
    </main>
  </body>
</html>`;

const globalCss = await readFile('app/globals.css', 'utf8');
const customCss = globalCss.slice(globalCss.indexOf('.site-shell'));
const css = `*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#f8f7f4;color:#171717;font-family:Arial,Helvetica,sans-serif}p,h1,h2,h3{margin:0}a{color:inherit}${customCss}`;

await mkdir('vercel-static', { recursive: true });
await writeFile('vercel-static/index.html', html);
await writeFile('vercel-static/style.css', css);
await cp('public/island-nights-cover.jpg', 'vercel-static/island-nights-cover.jpg');
await cp('public/amanah-saais-author.png', 'vercel-static/amanah-saais-author.png');
await cp('public/favicon.svg', 'vercel-static/favicon.svg');
