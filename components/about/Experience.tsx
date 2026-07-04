// components/about/Experience.tsx

import {
  Globe,
  Rocket,
  Database,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const experienceAreas = [
  {
    icon: Globe,
    title: "Modern Frontend Development",
    description:
      "Building responsive, accessible and SEO-friendly web applications using Next.js, React, TypeScript and Tailwind CSS.",
  },
  {
    icon: Database,
    title: "Backend & Database Architecture",
    description:
      "Designing scalable backend systems with Node.js, Express.js, PostgreSQL, Prisma ORM and Supabase.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Prioritizing Lighthouse performance, Core Web Vitals, code splitting, image optimization and efficient rendering strategies.",
  },
  {
    icon: ShieldCheck,
    title: "Production Readiness",
    description:
      "Implementing secure authentication flows, structured databases, scalable architectures and deployment best practices.",
  },
];

const values = [
  "Clean and maintainable code",
  "Accessibility-first development",
  "SEO and performance optimization",
  "Mobile-first user experiences",
  "Scalable architecture decisions",
  "Continuous learning and improvement",
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Experience
          </p>

          <h2
            id="experience-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Focused on building reliable digital products with modern web
            technologies.
          </h2>

          <p className="mt-6 text-base leading-8 text-text-body sm:text-lg">
            Since beginning my development journey in 2025, I have concentrated
            on creating modern web applications that combine performance,
            usability and maintainability. My work spans frontend development,
            backend systems, database design and deployment workflows.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {experienceAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className="transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background"
                  >
                    <Icon
                      size={22}
                      className="text-primary"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {area.title}
                    </h3>

                    <p className="mt-3 leading-7 text-text-body">
                      {area.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-24">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold text-card-foreground">
              Professional Approach
            </h3>
          </div>

          <p className="mt-5 max-w-3xl leading-8 text-text-body">
            Every project is approached with a focus on clarity, performance and
            long-term maintainability. I prioritize scalable solutions, clean
            user experiences and engineering practices that help businesses
            establish a strong digital presence.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value}
                className="flex items-center gap-3 text-sm font-medium text-foreground"
              >
                <Sparkles
                  size={18}
                  className="shrink-0 text-primary"
                />

                <span className="text-sm font-medium text-foreground">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
