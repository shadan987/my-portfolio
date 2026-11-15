type Project = {
  name: string;
  emoji: string;
  description: string;
  highlights: string[];
  tech: string[];
  live: string;
  github: string;
  accent: string; // gradient jo screenshot na ho tab preview mein dikhta hai
  image?: string; // optional: "/projects/study-timer.png" (file public/projects/ mein)
  featured?: boolean;
};

const projects: Project[] = [
  {
    name: "study-timer",
    emoji: "⏱️",
    description:
      "A focus timer I built to track study time by subject, with a progress ring that fills as the session runs.",
    highlights: [
      "Progress ring, alarms and confetti when a session ends",
      "Session history and a weekly chart in hours",
      "Installable on your phone (PWA)",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        image: "/projects/study-timer.png",
    live: "https://study-timer-six-fawn.vercel.app",
    github: "https://github.com/shadan987/study-timer",
    accent: "linear-gradient(135deg,#064e3b 0%,#4c1d95 100%)",
    featured: true,
  },
  {
    name: "luxe-clothes",
    emoji: "🛍️",
    description:
      "A multi-page clothing shop website built with HTML, CSS and JavaScript.",
    highlights: [
      "Home, Shop and Contact pages",
      "Men, women and kids collections",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
        image: "/projects/luxe-clothes.png",
    live: "https://luxe-clothes.vercel.app",
    github: "https://github.com/shadan987/luxe-clothes",
    accent: "linear-gradient(135deg,#78350f 0%,#1c1917 100%)",
  },
  {
    name: "luxe-watches",
    emoji: "⌚",
    description:
      "An ecommerce website for luxury watches built with Next.js, React and Tailwind CSS.",
    highlights: [
      "Ecommerce storefront for luxury watches",
      "Component-based Next.js app",
    ],
    tech: ["Next.js", "React", "Tailwind CSS"],
        image: "/projects/luxe-watches.png",
    live: "https://luxe-watches-nine.vercel.app",
    github: "https://github.com/shadan987/luxe-watches",
    accent: "linear-gradient(135deg,#1e293b 0%,#78350f 100%)",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  { title: "Tools", items: ["Git & GitHub", "Vercel"] },
];

const links = {
  github: "https://github.com/shadan987",
  linkedin: "https://linkedin.com/in/shadan-saifi-1680b9445",
  x: "https://x.com/Shadan836",
  email: "mailto:shadansaifi1368@gmail.com",
};

const CSS = `
html { scroll-behavior: smooth; }

.grad-text {
  background: linear-gradient(90deg, #6ee7b7, #a78bfa, #f9a8d4);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}

.dots {
  background-image: radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse at top, black 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse at top, black 30%, transparent 75%);
}

.orb { position: absolute; border-radius: 9999px; filter: blur(90px); opacity: 0.35; pointer-events: none; }
.o1 { width: 380px; height: 380px; background: #10b981; top: -120px; left: -100px; animation: drift1 16s ease-in-out infinite; }
.o2 { width: 420px; height: 420px; background: #8b5cf6; top: 80px; right: -140px; animation: drift2 20s ease-in-out infinite; }
@keyframes drift1 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(40px,50px); } }
@keyframes drift2 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-50px,-30px); } }

.fade-up { animation: fadeUp 0.8s cubic-bezier(.2,.8,.2,1) both; }
@keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .orb, .fade-up { animation: none; }
}
`;

function Preview({ p }: { p: Project }) {
  if (p.image) {
    return (
      <img
        src={p.image}
        alt={`${p.name} screenshot`}
        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
      />
    );
  }
  return (
    <div
      className="flex h-full flex-col transition duration-500 group-hover:scale-105"
      style={{ background: p.accent }}
    >
      <div className="flex items-center gap-1.5 bg-black/30 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ml-3 truncate rounded-md bg-black/30 px-2 py-0.5 text-[11px] text-white/70">
          {p.live.replace("https://", "")}
        </span>
      </div>
      <div className="flex flex-1 items-center justify-center text-6xl">
        {p.emoji}
      </div>
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_20px_60px_-25px_rgba(16,185,129,0.45)] ${
        p.featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
        <Preview p={p} />
        {p.featured && (
          <span className="absolute top-3 left-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-emerald-950">
            Latest
          </span>
        )}
      </div>

      <div className="flex flex-col p-6">
        <h3 className="text-xl font-semibold">{p.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-400">
          {p.description}
        </p>

        <ul className="mt-4 space-y-1.5 text-sm text-neutral-300">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="text-emerald-400">✓</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3 pt-1 text-sm md:mt-auto">
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-emerald-950 transition hover:bg-emerald-400"
          >
            Live ↗
          </a>
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-neutral-700 px-4 py-2 transition hover:border-neutral-500 hover:bg-neutral-800"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-neutral-950 text-neutral-100">
      <style>{CSS}</style>

      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-neutral-800/80 bg-neutral-950/70 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            Shadan Saifi
          </a>
          <div className="hidden items-center gap-7 text-sm text-neutral-400 sm:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
          </div>
          <a
            href="#contact"
            className="rounded-lg border border-neutral-700 px-4 py-1.5 text-sm transition hover:border-emerald-500/60 hover:bg-emerald-500/10"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="orb o1" />
        <div className="orb o2" />
        <div className="dots absolute inset-0" />

        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 sm:pt-32">
          <span
            className="fade-up inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Building in public
          </span>

          <h1
            className="fade-up mt-6 text-5xl font-bold tracking-tight sm:text-7xl"
            style={{ animationDelay: "100ms" }}
          >
            Hi, I&apos;m Shadan.
            <br />
            <span className="grad-text">I build web apps people use.</span>
          </h1>

          <p
            className="fade-up mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400"
            style={{ animationDelay: "200ms" }}
          >
            Aspiring frontend developer from India learning Next.js, React and
            Tailwind. I ship real projects and share the journey in public.
          </p>

          <div
            className="fade-up mt-9 flex flex-wrap gap-3"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="#projects"
              className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              View projects
            </a>
            <a
              href={projects[0].live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-neutral-700 px-6 py-3 transition hover:-translate-y-0.5 hover:border-neutral-500 hover:bg-neutral-900"
            >
              Try Study Timer ↗
            </a>
            <a
              href="#contact"
              className="rounded-xl px-6 py-3 text-neutral-400 transition hover:text-white"
            >
              Contact →
            </a>
          </div>

          <div
            className="fade-up mt-12 flex flex-wrap gap-3 text-sm"
            style={{ animationDelay: "400ms" }}
          >
            {[
              `${projects.length} projects shipped`,
              "Next.js · React · Tailwind",
              "Open to internships",
            ].map((s) => (
              <span
                key={s}
                className="rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-neutral-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6">
        {/* About */}
        <section id="about" className="scroll-mt-20 py-16">
          <h2 className="mb-4 text-2xl font-semibold">About</h2>
          <p className="max-w-2xl leading-relaxed text-neutral-400">
            I&apos;m a beginner web developer learning Next.js, React and
            Tailwind CSS. I learn by building real projects instead of only
            watching tutorials, and I&apos;m looking for my first internship or
            junior developer opportunity.
          </p>

          <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
            <p className="text-xs tracking-widest text-emerald-300 uppercase">
              What I&apos;m doing now
            </p>
            <p className="mt-2 text-neutral-200">
              Getting my first 10 real users every week for 4 weeks with Study
              Timer, and sharing what I learn from their feedback.
            </p>
            <a
              href={links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-emerald-400 hover:underline"
            >
              Follow the journey on X →
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20 py-16">
          <h2 className="mb-2 text-2xl font-semibold">Projects</h2>
          <p className="mb-8 text-neutral-400">
            Things I&apos;ve built and put online.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20 py-16">
          <h2 className="mb-6 text-2xl font-semibold">Skills</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6"
              >
                <p className="mb-4 text-xs tracking-widest text-neutral-500 uppercase">
                  {g.title}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-sm transition hover:-translate-y-0.5 hover:border-emerald-500/40"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 py-16">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-8 text-center sm:p-14">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Let&apos;s <span className="grad-text">work together</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-400">
              Open to internships and junior roles. If you have feedback on my
              projects or an opportunity, I&apos;d love to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={links.email}
                className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                Email me
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-neutral-700 px-6 py-3 transition hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                LinkedIn
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-neutral-700 px-6 py-3 transition hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                GitHub
              </a>
              <a
                href={links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-neutral-700 px-6 py-3 transition hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                X
              </a>
            </div>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-800 py-8 text-sm text-neutral-500">
          <span>© 2026 Shadan Saifi</span>
          <a href="#top" className="transition hover:text-white">
            Back to top ↑
          </a>
        </footer>
      </div>
    </main>
  );
}