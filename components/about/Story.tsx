// components/about/Story.tsx

import {
  GraduationCap,
  Code2,
  Brain,
} from "lucide-react";

export default function Story() {
  const journey = [
    {
      icon: Code2,
      year: "2025",
      title: "Started Learning Web Development",
      description:
        "My software development journey began in early 2025. I started with HTML, building a strong understanding of web fundamentals before progressing into modern frontend technologies and application architecture.",
    },
    {
      icon: Brain,
      year: "2025",
      title: "AI-Assisted Development Workflow",
      description:
        "As I continued learning, I adopted AI as a development tool to improve productivity, code quality, research and problem solving. This helped accelerate learning while maintaining a focus on clean engineering practices.",
    },
    {
      icon: GraduationCap,
      year: "Present",
      title: "Engineering & Software Development",
      description:
        "Today, I balance my Civil Engineering studies with professional software development. The combination of engineering discipline and modern web technologies influences how I approach problem solving, scalability and system design.",
    },
  ];

  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="relative"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-primary">
            My Story
          </p>

          <h2
            id="story-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            A journey built on curiosity, consistency and continuous learning.
          </h2>

          <p className="mt-6 text-base leading-8 text-text-body sm:text-lg">
            My path into software development didn&apos;t begin in a classroom.
            It started with curiosity, self-learning and a commitment to
            improving every day. Since writing my first lines of HTML in early
            2025, I have focused on understanding not only how modern websites
            are built, but also why they perform, scale and deliver value.
          </p>

          <p className="mt-6 text-base leading-8 text-text-body sm:text-lg">
            Over time, I expanded into React, Next.js, TypeScript, Tailwind CSS
            and backend development with Supabase and PostgreSQL. Every project
            became an opportunity to strengthen technical skills, improve
            problem-solving abilities and learn industry-standard development
            practices.
          </p>

          <p className="mt-6 text-base leading-8 text-text-body sm:text-lg">
            Alongside software development, I began pursuing a Bachelor&apos;s
            Degree in Civil Engineering at the Technical University of Mombasa
            in September 2025. Engineering has strengthened my analytical
            thinking and reinforced the importance of precision, structure and
            long-term planning when building digital products.
          </p>
        </div>

        <div
          className="mt-16 border-t border-border"
          aria-label="Development journey timeline"
        >
          <div className="divide-y divide-border">
            {journey.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="py-8 sm:py-10"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex max-w-3xl gap-4">
                      <div
                        aria-hidden="true"
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border"
                      >
                        <Icon
                          size={22}
                          className="text-primary"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-primary">
                          {item.year}
                        </p>

                        <h3 className="mt-1 text-xl font-semibold text-foreground">
                          {item.title}
                        </h3>

                        <p className="mt-3 leading-7 text-text-body">
                          {item.description}
                        </p>
                      </div>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-16 max-w-4xl border-t border-border pt-10">
          <h3 className="text-xl font-semibold text-foreground">
            What drives me today
          </h3>

          <p className="mt-4 leading-8 text-text-body">
            I believe great software comes from continuous improvement,
            attention to detail and a genuine desire to solve problems. My goal
            is to build fast, accessible and scalable digital experiences while
            continuing to grow as both a developer and an engineer.
          </p>
        </div>
      </div>
    </section>
  );
}
