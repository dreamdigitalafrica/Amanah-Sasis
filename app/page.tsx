import { BookOpen, Feather, Sparkles } from 'lucide-react';

const bioParagraphs = [
  'Amanah Saais is a novelist, poet, and storyteller with a passion for crafting immersive worlds, unforgettable characters, and stories that resonate long after the final page. Blending imagination with emotion, her writing explores the extraordinary hidden within the ordinary, inviting readers into adventures filled with mystery, romance, hope, and wonder.',
  'Inspired by the boundless possibilities of storytelling, Amanah writes across genres while remaining committed to one goal: creating stories that captivate the heart, ignite the imagination, and leave a lasting impression.',
  'Arcane du Beltah: Island Nights is her debut novel and the first installment in the Arcane du Beltah series, marking the beginning of an epic journey into a world where magic, destiny, and courage collide.',
];

const signatures = [
  { icon: Sparkles, label: 'Mystery', text: 'Hidden worlds and luminous secrets.' },
  { icon: Feather, label: 'Romance', text: 'Emotion-rich characters with lasting pull.' },
  { icon: BookOpen, label: 'Wonder', text: 'A debut series shaped by magic and courage.' },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07131a] text-[#fff8ea]">
      <section className="hero-shell relative isolate flex min-h-[100svh] items-stretch">
        <div className="absolute inset-0 -z-10">
          <img
            src="/island-nights-cover.jpg"
            alt="Arcane du Beltah: Island Nights book cover"
            className="h-full w-full object-cover object-[56%_36%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,10,14,.96)_0%,rgba(4,10,14,.88)_34%,rgba(4,10,14,.34)_72%,rgba(4,10,14,.7)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#07131a] to-transparent" />
        </div>

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 pb-16 pt-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_390px] lg:px-12">
          <div className="flex min-h-[calc(100svh-88px)] flex-col justify-between">
            <header className="flex items-center justify-between gap-4 text-sm">
              <a
                href="#about"
                className="font-serif text-2xl tracking-[0.08em] text-[#f6d39b]"
              >
                Amanah Saais
              </a>
              <nav aria-label="Primary" className="flex items-center gap-5 text-[#d9e7ea]">
                <a href="#about" className="transition hover:text-[#f6d39b]">
                  About
                </a>
                <a href="#debut" className="transition hover:text-[#f6d39b]">
                  Debut Novel
                </a>
              </nav>
            </header>

            <div className="max-w-3xl py-14 lg:py-20">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[#55c9df]">
                About the Author
              </p>
              <h1 className="font-serif text-[clamp(3.3rem,8vw,7.9rem)] leading-[0.88] text-[#fff4dc]">
                Amanah Saais
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d7e6e8] sm:text-xl">
                Novelist, poet, and storyteller creating immersive worlds where mystery,
                romance, hope, and wonder linger beyond the final page.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#about"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#d7a866] px-6 text-sm font-bold uppercase tracking-[0.16em] text-[#10100c] shadow-[0_18px_42px_rgba(215,168,102,.24)] transition hover:bg-[#f2c27f]"
                >
                  Read Her Story
                </a>
                <a
                  href="#debut"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-[#f6d39b]/45 px-6 text-sm font-bold uppercase tracking-[0.16em] text-[#fff4dc] transition hover:border-[#f6d39b] hover:bg-white/8"
                >
                  Explore the Debut
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {signatures.map(({ icon: Icon, label, text }) => (
                <article
                  key={label}
                  className="rounded-md border border-white/12 bg-[#081820]/75 p-4 backdrop-blur-md"
                >
                  <Icon aria-hidden="true" className="mb-4 h-5 w-5 text-[#55c9df]" />
                  <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#f6d39b]">
                    {label}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#c6d3d6]">{text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="hidden items-end lg:flex">
            <div className="w-full rounded-md border border-[#f6d39b]/24 bg-[#07131a]/64 p-4 shadow-[0_30px_80px_rgba(0,0,0,.38)] backdrop-blur-md">
              <img
                src="/island-nights-cover.jpg"
                alt="Arcane du Beltah: Island Nights by Amanah Saais"
                className="aspect-[2/3] w-full rounded-sm object-cover"
              />
            </div>
          </aside>
        </div>
      </section>

      <section id="about" className="bg-[#07131a] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.72fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#55c9df]">
              The Voice Behind the Series
            </p>
            <h2 className="mt-4 font-serif text-5xl leading-none text-[#fff4dc] sm:text-6xl">
              Stories with magic under the surface.
            </h2>
          </div>
          <div className="space-y-7 text-lg leading-9 text-[#d7e6e8]">
            {bioParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="debut" className="bg-[#0c1c21] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[330px_1fr]">
          <img
            src="/island-nights-cover.jpg"
            alt="Book cover for Arcane du Beltah: Island Nights"
            className="mx-auto aspect-[2/3] w-full max-w-[300px] rounded-md object-cover shadow-[0_24px_70px_rgba(0,0,0,.45)]"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#55c9df]">
              Book One
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#fff4dc] sm:text-6xl">
              Arcane du Beltah: Island Nights
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-[#d7e6e8]">
              A debut novel and the opening installment of the Arcane du Beltah
              series, inviting readers into an epic journey where magic, destiny,
              and courage collide.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
