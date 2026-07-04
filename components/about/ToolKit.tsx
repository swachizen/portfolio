// components/about/ToolKit.tsx

import {
  SiTypescript,
  SiWebassembly,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiGithub,
  SiVercel,
  SiCanva,
  SiFigma,
} from "react-icons/si";

type ToolItem = {
  name: string;
  icon: React.ReactNode;
};

type ToolGroup = {
  title: string;
  items: ToolItem[];
};

const frontendGroups: ToolGroup[] = [
  {
    title: "Programming Languages",
    items: [
      {
        name: "TypeScript",
        icon: <SiTypescript size={22} />,
      },
      {
        name: "WebAssembly (WASM)",
        icon: <SiWebassembly size={22} />,
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      {
        name: "React",
        icon: <SiReact size={22} />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs size={22} />,
      },
    ],
  },
  {
    title: "Styling",
    items: [
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={22} />,
      },
    ],
  },
];

const backendGroups: ToolGroup[] = [
  {
    title: "Backend",
    items: [
      {
        name: "Node.js (TypeScript)",
        icon: <SiNodedotjs size={22} />,
      },
      {
        name: "Express.js",
        icon: <SiExpress size={22} />,
      },
    ],
  },
  {
    title: "SQL",
    items: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql size={22} />,
      },
    ],
  },
  {
    title: "Database & Storage Tools",
    items: [
      {
        name: "Prisma ORM",
        icon: <SiPrisma size={22} />,
      },
      {
        name: "Supabase",
        icon: <SiSupabase size={22} />,
      },
    ],
  },
];

const deploymentGroups: ToolGroup[] = [
  {
    title: "Publishing & Deployment",
    items: [
      {
        name: "GitHub",
        icon: <SiGithub size={22} />,
      },
      {
        name: "Vercel",
        icon: <SiVercel size={22} />,
      },
    ],
  },
  {
    title: "Designing Tools",
    items: [
      {
        name: "Canva",
        icon: <SiCanva size={22} />,
      },
      {
        name: "Figma",
        icon: <SiFigma size={22} />,
      },
    ],
  },
];

function ToolSection({
  title,
  groups,
}: Readonly<{
  title: string;
  groups: ToolGroup[];
}>) {
  return (
    <article
      className="rounded-[var(--radius-large)] border border-border bg-card p-6 shadow-card lg:p-8"
      aria-label={title}
    >
      <h3 className="text-xl font-semibold text-card-foreground">
        {title}
      </h3>

      <div className="mt-8 space-y-8">
        {groups.map((group) => (
          <div key={group.title}>
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              {group.title}
            </h4>

            <ul className="mt-4 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <li key={item.name}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground">
                    <span
                      aria-hidden="true"
                      className="text-primary"
                    >
                      {item.icon}
                    </span>

                    <span>{item.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function ToolKit() {
  return (
    <section
      id="toolkit"
      aria-labelledby="toolkit-heading"
      className="relative"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Toolkit
          </p>

          <h2
            id="toolkit-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Technologies I use to design, build and deploy modern web
            applications.
          </h2>

          <p className="mt-6 text-base leading-8 text-text-body sm:text-lg">
            My workflow focuses on performance, scalability, accessibility and
            maintainability. These are the core technologies and tools I use
            across frontend development, backend architecture, databases,
            deployment and design.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <ToolSection
            title="Frontend"
            groups={frontendGroups}
          />

          <ToolSection
            title="Backend & Database"
            groups={backendGroups}
          />

          <ToolSection
            title="Deployment & Design"
            groups={deploymentGroups}
          />
        </div>
      </div>
    </section>
  );
}
