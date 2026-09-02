import { cp, mkdir, writeFile } from 'node:fs/promises';

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
        <p class="header-note">Stories that captivate the heart, ignite the imagination, and linger after the final page.</p>
        <nav class="social-menu" aria-label="Social links">
          <a href="#contact">Readers</a>
          <a href="#works">Books</a>
          <a href="#about">Press</a>
        </nav>
      </header>
      <div class="content-frame">
        <section id="home" class="intro-section">
          <div class="container-nevo">
            <h1 class="intro-title"><span>I'm Amanah, a </span><span class="serif black-text">storyteller </span><br /><span>who creates immersive worlds, unforgettable characters, and stories of mystery, romance, hope, and wonder.</span></h1>
          </div>
        </section>
        <section id="works" class="section-size-2">
          <div class="container-nevo">
            <div class="section-row">
              <h2>Selected work</h2>
              <div class="filter-row" aria-label="Work categories">
                <span>All</span><span>Novel</span><span>Project</span><span>Series</span>
              </div>
            </div>
            <div class="work-grid">
              <article class="work-item featured-work">
                <div class="book-mockup" aria-hidden="true">
                  <div class="book-spine"></div>
                  <img src="/island-nights-cover.jpg" alt="" class="book-cover" />
                </div>
                <div class="labels">Project</div>
                <div class="caption"><h3>Arcane du Beltah: Island Nights</h3><p>Debut novel / Book one</p></div>
              </article>
              <article class="work-item">
                <div class="text-work"><span>Writing</span><p>Fantasy, mystery, romance</p></div>
                <div class="labels">Writing</div>
                <div class="caption"><h3>Immersive Worlds</h3><p>Fantasy, mystery, romance</p></div>
              </article>
              <article class="work-item">
                <div class="text-work"><span>Poetry</span><p>Language with feeling</p></div>
                <div class="labels">Poetry</div>
                <div class="caption"><h3>Emotional Imprint</h3><p>Language with feeling</p></div>
              </article>
              <article class="work-item">
                <div class="text-work"><span>Series</span><p>Magic, destiny, courage</p></div>
                <div class="labels">Series</div>
                <div class="caption"><h3>Arcane du Beltah</h3><p>Magic, destiny, courage</p></div>
              </article>
            </div>
          </div>
        </section>
        <section id="about" class="statement-section lighter-bg">
          <div class="container-nevo narrow">
            <h2>Writing the extraordinary hidden within the ordinary.</h2>
            <div class="bio-copy">
              <p>Amanah Saais is a novelist, poet, and storyteller with a passion for crafting immersive worlds, unforgettable characters, and stories that resonate long after the final page. Blending imagination with emotion, her writing explores the extraordinary hidden within the ordinary, inviting readers into adventures filled with mystery, romance, hope, and wonder.</p>
              <p>Inspired by the boundless possibilities of storytelling, Amanah writes across genres while remaining committed to one goal: creating stories that captivate the heart, ignite the imagination, and leave a lasting impression.</p>
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
            <blockquote><span>Arcane du Beltah: Island Nights marks the beginning of an epic journey where magic, destiny, and courage collide.</span><cite>Amanah Saais</cite></blockquote>
            <div class="contact-box">
              <label>Name</label><div class="fake-input">Reader</div>
              <label>Email</label><div class="fake-input">hello@example.com</div>
              <label>Message</label><div class="fake-textarea">Ask about the book, the series, or the worlds within.</div>
              <a class="button-dark" href="mailto:hello@example.com">Submit</a>
            </div>
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

const css = String.raw`*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#f7f6f1;color:#111;font-family:Arial,Helvetica,sans-serif}.site-shell{letter-spacing:0}.site-header{align-items:flex-start;display:grid;gap:28px;grid-template-columns:92px minmax(0,1fr) minmax(180px,280px) auto;left:0;padding:34px 44px;position:fixed;right:0;top:0;z-index:20}.brand-mark{align-items:center;border:2px solid #111;color:#111;display:inline-flex;font-family:Georgia,'Times New Roman',serif;font-size:24px;height:54px;justify-content:center;line-height:1;text-decoration:none;width:54px}.main-menu,.social-menu{display:flex;flex-wrap:wrap;gap:22px;justify-content:flex-end;margin-top:15px;text-transform:uppercase}.main-menu a,.social-menu a{color:#171717;font-size:12px;font-weight:800;letter-spacing:.12em;text-decoration:none}.header-note{color:#555;font-size:13px;line-height:1.7;margin:7px 0 0}.content-frame{padding-top:114px}.container-nevo{margin:0 auto;max-width:1180px;padding:0 42px;width:100%}.intro-section{align-items:center;display:flex;min-height:calc(100svh - 114px);padding:68px 0 92px}.intro-title{color:#9b9b9b;font-size:clamp(48px,7.6vw,126px);font-weight:800;line-height:1.06;max-width:1120px}.intro-title .serif{font-family:Georgia,'Times New Roman',serif;font-style:italic;font-weight:500}.black-text{color:#111}.section-size-2,.section-size-3,.statement-section,.quote-section{padding:96px 0}.lighter-bg{background:#eceae2}.section-row{align-items:center;display:flex;gap:24px;justify-content:space-between;margin-bottom:36px}.section-row h2,.list-grid h3{font-size:14px;font-weight:900;margin:0;text-transform:uppercase}.filter-row{display:flex;flex-wrap:wrap;gap:18px;justify-content:flex-end}.filter-row span{color:#606060;font-size:13px;font-weight:800;text-transform:uppercase}.work-grid{display:grid;gap:28px;grid-template-columns:repeat(3,minmax(0,1fr))}.work-item{background:#fff;min-height:310px;overflow:hidden;padding:24px;position:relative}.featured-work{align-items:center;background:radial-gradient(circle at 24% 18%,rgba(58,190,215,.22),transparent 34%),linear-gradient(135deg,#07131a 0%,#102831 58%,#e7d6b4 100%);display:flex;grid-column:span 2;min-height:650px}.book-mockup{margin:10px auto 62px;perspective:1300px;position:relative;width:min(66%,350px)}.book-cover{aspect-ratio:2/3;box-shadow:32px 36px 70px rgba(0,0,0,.38);display:block;object-fit:cover;position:relative;transform:rotateY(-14deg) rotateZ(-2deg);transform-origin:left center;width:100%;z-index:2}.book-spine{background:linear-gradient(90deg,#0b1115,#d2a564);bottom:10px;box-shadow:18px 28px 42px rgba(0,0,0,.28);left:-22px;position:absolute;top:12px;transform:skewY(-4deg);width:42px;z-index:1}.text-work{align-items:flex-start;background:linear-gradient(135deg,rgba(17,17,17,.05),transparent),#f2efe6;display:flex;flex-direction:column;height:100%;justify-content:center;min-height:262px;padding:24px}.text-work span{color:#ad7c33;font-size:13px;font-weight:900;text-transform:uppercase}.text-work p{color:#111;font-family:Georgia,'Times New Roman',serif;font-size:36px;line-height:1.05;margin-top:18px}.labels{background:rgba(255,255,255,.9);color:#111;font-size:11px;font-weight:900;left:22px;padding:7px 10px;position:absolute;text-transform:uppercase;top:22px}.caption{bottom:22px;color:#111;left:22px;position:absolute;right:22px}.featured-work .caption{color:#fff}.caption h3{font-size:24px;font-weight:900;line-height:1.1;margin:0}.caption p{font-size:14px;margin-top:6px}.narrow{display:grid;gap:60px;grid-template-columns:minmax(260px,.62fr) 1fr}.statement-section h2{font-family:Georgia,'Times New Roman',serif;font-size:clamp(38px,4.5vw,70px);font-weight:500;line-height:1.05}.bio-copy{color:#333;font-size:20px;line-height:1.75}.bio-copy p+p{margin-top:26px}.list-grid{display:grid;gap:36px;grid-template-columns:repeat(4,minmax(0,1fr))}.list-grid ul{color:#4d4d4d;font-size:16px;line-height:2.1;list-style:none;margin-top:20px;padding:0}.quote-grid{align-items:center;display:grid;gap:64px;grid-template-columns:.82fr 1fr}blockquote{font-family:Georgia,'Times New Roman',serif;font-size:clamp(30px,3.4vw,52px);line-height:1.15;margin:0}blockquote cite{color:#666;display:block;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-style:normal;font-weight:900;margin-top:22px;text-transform:uppercase}.contact-box{background:#fff;box-shadow:0 24px 70px rgba(0,0,0,.1);padding:34px}.contact-box label{display:block;font-size:13px;font-weight:900;margin:16px 0 8px;text-transform:uppercase}.fake-input,.fake-textarea{border-bottom:2px solid #111;color:#6a6a6a;min-height:42px;padding:10px 0}.fake-textarea{min-height:90px}.button-dark{background:#111;color:#fff;display:inline-flex;font-size:12px;font-weight:900;margin-top:22px;padding:14px 22px;text-decoration:none;text-transform:uppercase}.footer-nevo{align-items:center;border-top:1px solid #d6d3c8;display:flex;justify-content:space-between;padding:54px 44px}.footer-nevo p{color:#696969;margin-top:4px}@media(max-width:980px){.site-header{grid-template-columns:auto 1fr;position:static}.header-note,.social-menu{display:none}.content-frame{padding-top:0}.main-menu{align-self:center}.work-grid,.narrow,.quote-grid{grid-template-columns:1fr}.featured-work{grid-column:span 1}.list-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:640px){.site-header{padding:22px 20px}.main-menu{gap:12px;justify-content:flex-end}.main-menu a{font-size:10px}.container-nevo{padding:0 20px}.intro-section,.section-size-2,.section-size-3,.statement-section,.quote-section{padding:62px 0}.intro-title{font-size:42px}.section-row,.footer-nevo{align-items:flex-start;flex-direction:column}.work-grid,.list-grid{grid-template-columns:1fr}.featured-work{min-height:520px}.book-mockup{width:min(76%,290px)}}`;

await mkdir('vercel-static', { recursive: true });
await writeFile('vercel-static/index.html', html);
await writeFile('vercel-static/style.css', css);
await cp('public/island-nights-cover.jpg', 'vercel-static/island-nights-cover.jpg');
await cp('public/favicon.svg', 'vercel-static/favicon.svg');
