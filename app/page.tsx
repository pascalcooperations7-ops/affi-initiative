const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "7 yrs", label: "Creative experience" },
  { value: "96%", label: "Client retention" },
  { value: "24h", label: "Average response time" },
];

const services = [
  {
    icon: "✍️",
    title: "Copywriting",
    text: "Persuasive, conversion-focused copy for businesses, brands, and founders who want their message to move people to action.",
  },
  {
    icon: "🖋️",
    title: "Creative Writing",
    text: "Story-rich writing that builds emotional connection, strengthens brand identity, and makes your message memorable.",
  },
  {
    icon: "📚",
    title: "Book Writing",
    text: "Professional book development and writing support for authors and visionaries ready to share a meaningful message with the world.",
  },
  {
    icon: "💻",
    title: "Website Content",
    text: "Clear, engaging, and conversion-ready website content designed to help your audience understand your value quickly.",
  },
  {
    icon: "🎯",
    title: "Sales Funnel Setup",
    text: "Smart funnel structure and messaging that guide your audience from attention to trust to action with clarity and flow.",
  },
  {
    icon: "📈",
    title: "Content Strategy",
    text: "Tailored messaging plans and content direction that keep your brand consistent, relevant, and positioned for growth.",
  },
];

const process = [
  { number: "01", title: "Discover", text: "I learn your goals, audience, and the story behind your work." },
  { number: "02", title: "Shape", text: "We define the message, structure, and creative direction with intention." },
  { number: "03", title: "Craft", text: "I write, design, and refine every detail for clarity and impact." },
  { number: "04", title: "Deliver", text: "You receive polished work ready to engage, inspire, and convert." },
];

const caseStudies = [
  {
    tag: "Brand Messaging",
    title: "Launching a boutique wellness brand with a story-led voice.",
    image:
      "linear-gradient(160deg, rgba(20,17,15,0.34), rgba(20,17,15,0.1)), url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80') center/cover no-repeat",
  },
  {
    tag: "Book Writing",
    title: "Helping an entrepreneur turn insights into a compelling memoir.",
    image:
      "linear-gradient(160deg, rgba(30,30,30,0.2), rgba(30,30,30,0.1)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80') center/cover no-repeat",
  },
  {
    tag: "Web Design",
    title: "Creating a luxury service brand presence built for trust and conversions.",
    image:
      "linear-gradient(160deg, rgba(25,25,25,0.22), rgba(25,25,25,0.08)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80') center/cover no-repeat",
  },
];

const testimonials = [
  {
    quote:
      "The messaging finally matched the quality of the service. It gave our brand confidence and clarity from day one.",
    name: "Sarah, founder",
  },
  {
    quote:
      "From concept to final copy, everything felt intentional, polished, and deeply aligned with my voice.",
    name: "Michael, author",
  },
  {
    quote:
      "The website feels premium, modern, and far more compelling than before. It’s a huge difference in how visitors respond.",
    name: "Ada, business owner",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(183,127,69,0.12),_transparent_25%),linear-gradient(135deg,_#f7f3ee_0%,_#f0e8df_100%)] text-[#1a1a1a]">
      <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20">
          <nav className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 rounded-full border border-white/60 bg-[rgba(255,250,245,0.7)] px-5 py-4 shadow-[0_18px_40px_rgba(58,40,21,0.06)] backdrop-blur-xl sm:px-7">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#1d1d1d] to-[#4d3c29] font-['Cormorant_Garamond'] text-2xl font-bold text-[#f3eee8]">
                A
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-extrabold tracking-[-0.05em]">AFFI</span>
                <small className="text-[10px] uppercase tracking-[0.12em] text-[#5b5b5b]">initiative</small>
              </div>
            </div>

            <div className="hidden items-center gap-7 text-sm text-[#5b5b5b] md:flex">
              <a href="#services" className="transition-colors hover:text-[#1a1a1a]">Services</a>
              <a href="#process" className="transition-colors hover:text-[#1a1a1a]">Process</a>
              <a href="#work" className="transition-colors hover:text-[#1a1a1a]">Work</a>
              <a href="#about" className="transition-colors hover:text-[#1a1a1a]">About</a>
            </div>

            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#1a1a1a] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_26px_rgba(25,13,7,0.18)] transition-transform hover:-translate-y-0.5">
              Book a call
            </a>
          </nav>
        </header>

        <main>
          <section className="py-16 sm:py-20">
            <div className="mx-auto grid max-w-[1180px] items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <span className="mb-5 inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-[#8d5d2b]">
                  Creative strategy • storytelling • design
                </span>
                <h1 className="max-w-[660px] text-5xl font-extrabold leading-[0.94] tracking-[-0.08em] text-[#1a1a1a] sm:text-6xl lg:text-[6rem]">
                  Strategic words that turn ideas into growth.
                </h1>
                <p className="mt-6 max-w-[620px] text-lg leading-8 text-[#5b5b5b]">
                  AFFI INITIATIVE helps brands, founders, and authors communicate clearly,
                  sell confidently, and grow with compelling writing and content systems that work.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#1a1a1a] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_26px_rgba(25,13,7,0.18)] transition-transform hover:-translate-y-0.5">
                    Get started
                  </a>
                  <a href="#services" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/30 px-6 py-3.5 text-sm font-bold text-[#1a1a1a] transition-transform hover:-translate-y-0.5">
                    Explore services
                  </a>
                </div>

                <ul className="mt-8 flex flex-wrap items-center gap-5 text-[11px] uppercase tracking-[0.08em] text-[#5b5b5b]">
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#b77f45] to-[#8d5d2b]" />Copywriting</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#b77f45] to-[#8d5d2b]" />Book writing</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#b77f45] to-[#8d5d2b]" />Sales funnels</li>
                </ul>
              </div>

              <div className="relative grid min-h-[620px] place-items-center rounded-[40px] border border-black/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.56),rgba(255,255,255,0.18)),radial-gradient(circle_at_top,rgba(183,127,69,0.18),transparent_40%),linear-gradient(135deg,#f6efe8,#e9e1d5)] shadow-[0_20px_60px_rgba(68,47,28,0.12)]">
                <div className="absolute right-8 top-24 w-[min(340px,80%)] rounded-[28px] border border-black/5 bg-[rgba(255,250,245,0.82)] p-6 shadow-[0_18px_38px_rgba(36,23,12,0.12)] backdrop-blur-xl">
                  <span className="inline-flex items-center rounded-full bg-[rgba(183,127,69,0.12)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#8d5d2b]">
                    Featured project
                  </span>
                  <h3 className="mt-4 text-3xl font-bold tracking-[-0.05em]">Brand Voice Blueprint</h3>
                  <div className="mt-5 flex h-[110px] items-end gap-2.5">
                    <span className="flex-1 rounded-t-[16px] bg-gradient-to-t from-[#9d6b3a] to-[#d7b28d]" style={{ height: "28%" }} />
                    <span className="flex-1 rounded-t-[16px] bg-gradient-to-t from-[#9d6b3a] to-[#d7b28d]" style={{ height: "50%" }} />
                    <span className="flex-1 rounded-t-[16px] bg-gradient-to-t from-[#9d6b3a] to-[#d7b28d]" style={{ height: "68%" }} />
                    <span className="flex-1 rounded-t-[16px] bg-gradient-to-t from-[#9d6b3a] to-[#d7b28d]" style={{ height: "82%" }} />
                    <span className="flex-1 rounded-t-[16px] bg-gradient-to-t from-[#9d6b3a] to-[#d7b28d]" style={{ height: "100%" }} />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm text-[#5b5b5b]">
                    <span>Conversion</span>
                    <strong className="text-xl font-extrabold text-[#1a1a1a]">+41%</strong>
                  </div>
                </div>

                <div className="absolute bottom-16 left-8 w-[220px] rounded-[22px] border border-black/5 bg-[rgba(255,250,245,0.82)] p-4 shadow-[0_18px_38px_rgba(36,23,12,0.12)] backdrop-blur-xl">
                  <p className="m-0 leading-6 text-[#1a1a1a]">“The clarity and elegance were immediately visible.”</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-6">
            <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[22px] border border-black/5 bg-white/40 p-6 text-center">
                  <strong className="block text-4xl font-extrabold tracking-[-0.06em]">{stat.value}</strong>
                  <span className="text-[#5b5b5b]">{stat.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="services" className="py-20 bg-white/10">
            <div className="mx-auto max-w-[1180px]">
              <div className="mb-10">
                <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-[#8d5d2b]">
                  What we do
                </span>
                <h2 className="max-w-[760px] text-4xl font-extrabold tracking-[-0.06em] text-[#1a1a1a] sm:text-5xl">
                  Writing and content solutions built to move your brand forward.
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {services.map((service) => (
                  <article key={service.title} className="rounded-[28px] border border-black/5 bg-white/55 p-7 shadow-[0_18px_44px_rgba(36,24,14,0.05)]">
                    <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[rgba(183,127,69,0.15)] to-[rgba(184,152,110,0.2)] text-3xl">
                      {service.icon}
                    </div>
                    <h3 className="mb-3 text-2xl font-bold tracking-[-0.04em]">{service.title}</h3>
                    <p className="leading-7 text-[#5b5b5b]">{service.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="process" className="py-20">
            <div className="mx-auto max-w-[1180px]">
              <div className="mb-10">
                <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-[#8d5d2b]">
                  How it works
                </span>
                <h2 className="max-w-[680px] text-4xl font-extrabold tracking-[-0.06em] text-[#1a1a1a] sm:text-5xl">
                  A clear, strategic process from idea to impact.
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {process.map((item) => (
                  <div key={item.number} className="rounded-[24px] border border-black/5 bg-white/45 p-5">
                    <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[rgba(183,127,69,0.12)] text-sm font-extrabold text-[#8d5d2b]">
                      {item.number}
                    </span>
                    <h3 className="mb-2 text-2xl font-bold tracking-[-0.04em]">{item.title}</h3>
                    <p className="leading-7 text-[#5b5b5b]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="work" className="py-20">
            <div className="mx-auto max-w-[1180px]">
              <div className="mb-10">
                <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-[#8d5d2b]">
                  Selected work
                </span>
                <h2 className="max-w-[760px] text-4xl font-extrabold tracking-[-0.06em] text-[#1a1a1a] sm:text-5xl">
                  Premium storytelling with a polished, modern edge.
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-[1.1fr_0.9fr_0.9fr]">
                {caseStudies.map((project, index) => (
                  <article key={project.title} className={`overflow-hidden rounded-[28px] border border-black/5 bg-white/50 shadow-[0_18px_40px_rgba(28,20,15,0.05)] ${index === 0 ? "xl:row-span-2" : ""}`}>
                    <div className="min-h-[250px]" style={{ background: project.image }} />
                    <div className="p-5 sm:p-6">
                      <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.12em] text-[#8d5d2b]">
                        {project.tag}
                      </span>
                      <h3 className="text-xl font-bold leading-tight tracking-[-0.04em] sm:text-2xl">{project.title}</h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="mx-auto max-w-[1180px]">
              <div className="mb-10">
                <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-[#8d5d2b]">
                  Testimonials
                </span>
                <h2 className="max-w-[680px] text-4xl font-extrabold tracking-[-0.06em] text-[#1a1a1a] sm:text-5xl">
                  Clients keep coming back for work that feels strategic and elevated.
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {testimonials.map((item) => (
                  <blockquote key={item.name} className="rounded-[24px] border border-black/5 bg-white/52 p-6 text-base leading-8 text-[#1a1a1a]">
                    “{item.quote}”
                    <footer className="mt-4 font-bold text-[#5b5b5b]">— {item.name}</footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="mx-auto max-w-[1180px] rounded-[32px] border border-black/5 bg-[#1a1a1a] p-8 text-white shadow-[0_20px_60px_rgba(27,20,15,0.18)] md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="mb-3 inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-[#d9b690]">
                    Ready to grow?
                  </span>
                  <h3 className="text-3xl font-extrabold tracking-[-0.05em] md:text-4xl">
                    Let your message do the talking.
                  </h3>
                </div>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#f7f3ee] px-6 py-3.5 text-sm font-bold text-[#1a1a1a] transition-transform hover:-translate-y-0.5">
                  Start your project
                </a>
              </div>
            </div>
          </section>

          <section id="about" className="py-20">
            <div className="mx-auto grid max-w-[1180px] items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-[#8d5d2b]">
                  About AFFI
                </span>
                <h2 className="mb-5 text-4xl font-extrabold tracking-[-0.06em] text-[#1a1a1a] sm:text-5xl">
                  A creative initiative for brands that want powerful messaging and real growth.
                </h2>
                <p className="max-w-[620px] text-lg leading-8 text-[#5b5b5b]">
                  AFFI INITIATIVE brings together strategic writing, creative storytelling, book development, website content, and sales funnel messaging to help businesses communicate with clarity and confidence.
                </p>
                <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1a1a1a] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_26px_rgba(25,13,7,0.18)] transition-transform hover:-translate-y-0.5">
                  Let’s talk
                </a>
              </div>

              <div className="rounded-[30px] border border-black/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(244,237,230,0.8))] p-8 shadow-[0_20px_60px_rgba(68,47,28,0.12)]">
                <h3 className="mb-5 text-2xl font-bold tracking-[-0.04em]">What I bring</h3>
                <ul className="space-y-4 text-[#5b5b5b]">
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-[#b77f45]">Strategic thinking</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-[#b77f45]">Elegant writing</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-[#b77f45]">Modern visual design</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-[#b77f45]">Clear, compelling messaging</li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        <a
          href="https://wa.me/2348162242199"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-[0_20px_35px_rgba(37,211,102,0.35)] transition-transform hover:-translate-y-0.5"
          aria-label="Chat on WhatsApp"
        >
          WhatsApp
        </a>

        <footer id="contact" className="py-6">
          <div className="mx-auto grid max-w-[1180px] items-center gap-6 rounded-[30px] bg-[#1a1a1a] px-6 py-7 text-white shadow-[0_20px_50px_rgba(19,14,10,0.25)] md:grid-cols-[1.2fr_0.4fr_0.8fr]">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#1d1d1d] to-[#4d3c29] font-['Cormorant_Garamond'] text-2xl font-bold text-[#f3eee8]">A</div>
                <div className="flex flex-col leading-none">
                  <span className="text-lg font-extrabold tracking-[-0.05em]">AFFI</span>
                  <small className="text-[10px] uppercase tracking-[0.12em] text-white/60">initiative</small>
                </div>
              </div>
              <p className="max-w-[460px] text-white/70 leading-7">
                Words, stories, and digital presence that feel premium and perform with purpose.
              </p>
            </div>

            <div className="grid gap-3 text-white/70">
              <a href="#services" className="transition-colors hover:text-white">Services</a>
              <a href="#work" className="transition-colors hover:text-white">Work</a>
              <a href="#about" className="transition-colors hover:text-white">About</a>
            </div>

            <div className="justify-self-start rounded-[18px] border border-white/10 bg-white/5 p-4 md:justify-self-end">
              <span className="block text-[10px] uppercase tracking-[0.1em] text-white/60">Start your project</span>
              <a href="mailto:pascalcooperations7@gmail.com" className="mt-2 block text-lg font-bold text-white">
                pascalcooperations7@gmail.com
              </a>
              <a href="tel:+2348162242199" className="mt-1 block text-base font-medium text-white/80">
                +2348162242199
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
