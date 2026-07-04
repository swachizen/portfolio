// components/about/AboutHero.tsx

import Link from "next/link";

export default function AboutHero() {
  return (
    <header
      id="about-hero"
      aria-labelledby="about-hero-heading"
      className="relative"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium tracking-[0.18em] text-primary uppercase">
            About Me
          </p>

          <h1
            id="about-hero-heading"
            className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl"
          >
            Full-Stack Developer building modern, fast and scalable web
            experiences.
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-text-body sm:text-lg">
            I&apos;m Swaleh Mohamad Swalehe, a Full-Stack Developer
            based in Mombasa, Kenya. I specialize in building modern web
            applications using Next.js, TypeScript, Tailwind CSS, Supabase and
            AI-powered development workflows that help deliver clean, efficient
            and production-ready solutions.
          </p>

          <p className="mt-6 max-w-3xl text-base leading-8 text-text-body sm:text-lg">
            Alongside software development, I&apos;m pursuing a Bachelor&apos;s
            Degree in Civil Engineering at the Technical University of Mombasa,
            with an expected graduation in 2029. My approach combines
            engineering thinking, continuous learning and modern web
            technologies to create reliable digital products that solve real
            business problems.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/projects"
              aria-label="View selected projects"
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-card)] bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              aria-label="Contact Swaleh Mohamad Swalehe"
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-card)] border border-border px-6 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-card focus-visible:outline-none"
            >
              Let&apos;s Work Together
            </Link>
          </div>

          <div
            aria-label="Professional highlights"
            className="mt-14 grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-4"
          >
            <div>
              <p className="text-2xl font-bold text-foreground sm:text-3xl">
                2025
              </p>
              <p className="mt-2 text-sm text-text-body">
                Started Software Development
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-foreground sm:text-3xl">
                Next.js
              </p>
              <p className="mt-2 text-sm text-text-body">
                Primary Frontend Framework
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-foreground sm:text-3xl">
                Supabase
              </p>
              <p className="mt-2 text-sm text-text-body">
                Backend &amp; Database Stack
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-foreground sm:text-3xl">
                2029
              </p>
              <p className="mt-2 text-sm text-text-body">
                Engineering Graduation Target
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
