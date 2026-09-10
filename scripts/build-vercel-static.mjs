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
  <a class="brand-mark" href="${home ? '#home' : '/'}" aria-label="Amanah Saais home"><span class="brand-seal">AS</span><span>Amanah Saais</span></a>
  <nav class="main-menu" aria-label="Primary">
    <a href="${home ? '#home' : '/'}">Home</a>
    <a href="/about/">About</a>
    <a href="${home ? '#books' : '/#books'}">Books</a>
    <a href="/shop/">Shop</a>
    <a href="${home ? '#podcast' : '/#podcast'}">Podcast</a>
    <a href="${home ? '#contact' : '/#contact'}">Contact</a>
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
          <h1 class="freelancer-title reveal-up"><span>Amanah Saais is a </span><span class="typed-word serif black-text"><span>novelist.</span><span>writer.</span><span>poet.</span></span></h1>
        </div>
      </section>
      <section id="books" class="section-size-2 books-section">
        <div class="container-nevo">
          <div class="section-row">
            <h2>Selected books</h2>
            <div class="filter-row" aria-label="Book categories"><span>All</span><span>Novel</span><span>Fantasy</span><span>Book One</span><span>Book Two</span></div>
          </div>
          <div class="books-stack">
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
                  <div><span>Series</span><strong>Arcane du Beltah</strong></div>
                  <div><span>Volume</span><strong>Book One</strong></div>
                  <div><span>Genre</span><strong>Fantasy Romance</strong></div>
                  <div><span>Price</span><strong>₦15,000 / approx. $11.34</strong></div>
                </div>
              </div>
            </article>
            <article class="book-showcase reverse">
              <div class="book-stage" aria-hidden="true">
                <div class="book-shadow"></div>
                <div class="book-3d"><div class="book-side"></div><img src="/island-nights-book-two.png" alt="" class="book-cover-pro" /></div>
              </div>
              <div class="book-copy">
                <div class="labels">Novel</div>
                <h3>Arcane du Beltah: Island Nights</h3>
                <p>Book Two continues the Arcane du Beltah journey with deeper mystery, romance, and courage above an enchanted world.</p>
                <div class="book-meta">
                  <div><span>Series</span><strong>Arcane du Beltah</strong></div>
                  <div><span>Volume</span><strong>Book Two</strong></div>
                  <div><span>Genre</span><strong>Fantasy Romance</strong></div>
                  <div><span>Price</span><strong>₦15,000 / approx. $11.34</strong></div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section id="shop" class="statement-section lighter-bg">
        <div class="container-nevo mini-section">
          <p class="eyebrow">Shop</p>
          <h2>Book shop coming soon.</h2>
          <a class="inline-button" href="/shop/">Preview Shop</a>
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

const shopHtml = String.raw`<!doctype html>
<html lang="en">
${head('Shop | Amanah Saais', 'Shop page for Arcane du Beltah: Island Nights books by Amanah Saais.')}
<body>
  <main class="site-shell">
    ${header(false)}
    <div class="content-frame">
      <section class="shop-page-hero section-size-2 lighter-bg">
        <div class="container-nevo shop-page-heading reveal-up">
          <p class="eyebrow">Shop</p>
          <h1>Arcane du Beltah Books</h1>
          <p>Explore the Island Nights series and purchase each volume through Paystack.</p>
        </div>
      </section>
      <section class="shop-products-section section-size-2">
        <div class="container-nevo">
          <div class="shop-products-header">
            <h2>Available Books</h2>
            <span>₦15,000 / approx. $11.34</span>
          </div>
          <div class="shop-products-grid refined">
            <article class="shop-book-card">
              <div class="shop-book-visual"><div class="shop-card-book" aria-hidden="true"><div class="shop-card-pages"></div><img src="/island-nights-cover.jpg" alt="" /></div></div>
              <div class="shop-book-info">
                <span>Book One</span>
                <h3>Arcane du Beltah: Island Nights</h3>
                <p>A magical island romance where courage, destiny, and hidden power meet beneath the night sky.</p>
                <div class="shop-price-row"><strong>₦15,000</strong><em>approx. $11.34</em></div>
                <div class="shop-actions"><a class="button-dark" href="#book-one-preview">Read Glimpse</a><a class="button-outline" href="https://paystack.com/pay/amanah-saais-book-one" target="_blank" rel="noreferrer">Buy Now</a></div>
              </div>
            </article>
            <article class="shop-book-card accent">
              <div class="shop-book-visual"><div class="shop-card-book" aria-hidden="true"><div class="shop-card-pages"></div><img src="/island-nights-book-two.png" alt="" /></div></div>
              <div class="shop-book-info">
                <span>Book Two</span>
                <h3>Arcane du Beltah: Island Nights</h3>
                <p>The journey continues with deeper mystery, romance, and a world balanced between wonder and risk.</p>
                <div class="shop-price-row"><strong>₦15,000</strong><em>approx. $11.34</em></div>
                <div class="shop-actions"><a class="button-dark" href="#book-two-preview">Read Glimpse</a><a class="button-outline" href="https://paystack.com/pay/amanah-saais-book-two" target="_blank" rel="noreferrer">Buy Now</a></div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section class="shop-note-section lighter-bg">
        <div class="container-nevo shop-note">
          <h2>Secure checkout through Paystack.</h2>
          <p>Payment links are prepared for each book and can be connected to the final Paystack product pages when ready.</p>
        </div>
      </section>
      <div class="book-preview-modal" id="book-one-preview">
        <a class="modal-backdrop" href="/shop/" aria-label="Close preview"></a>
        <article class="modal-panel" role="dialog" aria-modal="true">
          <a class="modal-close" href="/shop/" aria-label="Close preview">×</a>
          <div class="modal-cover"><img src="/island-nights-cover.jpg" alt="" /></div>
          <div class="modal-copy"><span>Book One</span><h2>Arcane du Beltah: Island Nights</h2><p>The story begins on an island where ordinary choices open the door to a world of magic, danger, and longing. As destiny pulls closer, the heart must decide what courage truly costs.</p><div class="shop-price-row"><strong>₦15,000</strong><em>approx. $11.34</em></div><a class="button-dark" href="https://paystack.com/pay/amanah-saais-book-one" target="_blank" rel="noreferrer">Buy with Paystack</a></div>
        </article>
      </div>
      <div class="book-preview-modal" id="book-two-preview">
        <a class="modal-backdrop" href="/shop/" aria-label="Close preview"></a>
        <article class="modal-panel" role="dialog" aria-modal="true">
          <a class="modal-close" href="/shop/" aria-label="Close preview">×</a>
          <div class="modal-cover"><img src="/island-nights-book-two.png" alt="" /></div>
          <div class="modal-copy"><span>Book Two</span><h2>Arcane du Beltah: Island Nights</h2><p>Book Two returns to Arcane du Beltah with higher stakes and a wider horizon. Love, loyalty, and power are tested as the island reveals more than anyone expected.</p><div class="shop-price-row"><strong>₦15,000</strong><em>approx. $11.34</em></div><a class="button-dark" href="https://paystack.com/pay/amanah-saais-book-two" target="_blank" rel="noreferrer">Buy with Paystack</a></div>
        </article>
      </div>
    </div>
    <footer class="footer-nevo">
      <a class="button-dark" href="/#books">View Books</a>
      <div><span>Shop </span><strong>Amanah Saais</strong><p>Arcane du Beltah: Island Nights</p></div>
    </footer>
  </main>
</body>
</html>`;

const globalCss = await readFile('app/globals.css', 'utf8');
const customCss = globalCss.slice(globalCss.indexOf('.site-shell'));
const css = `*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#f8f7f4;color:#171717;font-family:Arial,Helvetica,sans-serif}p,h1,h2,h3{margin:0}a{color:inherit}${customCss}`;

await mkdir('vercel-static/about', { recursive: true });
await mkdir('vercel-static/shop', { recursive: true });
await writeFile('vercel-static/index.html', homeHtml);
await writeFile('vercel-static/about/index.html', aboutHtml);
await writeFile('vercel-static/shop/index.html', shopHtml);
await writeFile('vercel-static/style.css', css);
await cp('public/island-nights-cover.jpg', 'vercel-static/island-nights-cover.jpg');
await cp('public/island-nights-book-two.png', 'vercel-static/island-nights-book-two.png');
await cp('public/amanah-saais-author.png', 'vercel-static/amanah-saais-author.png');
await cp('public/favicon.svg', 'vercel-static/favicon.svg');
