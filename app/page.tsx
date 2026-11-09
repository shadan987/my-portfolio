const projects = [
  {
    name: "luxe-watches",
    description:
      "An ecommerce website for luxury watches built with Next.js, React and Tailwind CSS.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    live: "https://luxe-watches-nine.vercel.app",
    github: "https://github.com/shadan987/luxe-watches",
  },
    {
    name: "luxe-clothes",
    description:
      "A multi-page clothing shop website built with HTML, CSS and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://luxe-clothes.vercel.app",
    github: "https://github.com/shadan987/luxe-clothes",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git & GitHub",
];

const links = {
  github: "https://github.com/shadan987",
  linkedin: "https://linkedin.com/in/shadan-saifi-1680b9445",
  x: "https://x.com/Shadan836",
  email: "mailto:shadansaifi1368@gmail.com",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Navbar */}
      <header className="sticky top-0 z-10 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <span className="font-semibold">Shadan Saifi</span>
          <div className="flex gap-6 text-sm text-neutral-400">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-4xl px-6">
        {/* Hero */}
        <section className="py-24">
          <p className="mb-3 text-sm text-emerald-400">Hi, I&apos;m</p>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Shadan Saifi
          </h1>
          <p className="mt-4 text-xl text-neutral-300">
            Aspiring Frontend Developer learning Next.js &amp; React.
          </p>
          <p className="mt-4 max-w-xl text-neutral-400">
            I build real projects and share my progress in public.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-emerald-500 px-5 py-2.5 font-medium text-black hover:bg-emerald-400"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-neutral-700 px-5 py-2.5 hover:border-neutral-500"
            >
              Contact
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16">
          <h2 className="mb-4 text-2xl font-semibold">About</h2>
          <p className="max-w-2xl leading-relaxed text-neutral-400">
            I&apos;m a beginner web developer learning Next.js, React and
            Tailwind CSS. I learn by building real projects instead of only
            watching tutorials, and I&apos;m looking for my first internship or
            junior developer opportunity.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16">
          <h2 className="mb-6 text-2xl font-semibold">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-neutral-800 bg-neutral-900 p-6"
              >
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-neutral-400">{p.description}</p>
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
                <div className="mt-5 flex gap-4 text-sm">
                  <a href={p.live} className="text-emerald-400 hover:underline">
                    Live
                  </a>
                  <a href={p.github} className="text-emerald-400 hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16">
          <h2 className="mb-6 text-2xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
          <p className="mb-6 text-neutral-400">
            Open to internships and junior roles. Let&apos;s connect!
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href={links.email} className="text-emerald-400 hover:underline">Email</a>
            <a href={links.linkedin} className="text-emerald-400 hover:underline">LinkedIn</a>
            <a href={links.github} className="text-emerald-400 hover:underline">GitHub</a>
            <a href={links.x} className="text-emerald-400 hover:underline">X</a>
          </div>
        </section>

        <footer className="border-t border-neutral-800 py-8 text-sm text-neutral-500">
          © 2026 Shadan Saifi
        </footer>
      </div>
    </main>
  );
}