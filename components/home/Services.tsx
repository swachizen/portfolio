import Link from "next/link";

import {
  Brain,
  Code2,
  Database,
  Globe,
  Gauge,
  Wrench,
} from "lucide-react";

type ServicesProps = {
  id: string;
};

const services = [
  {
    title: "Website Design & Development",
    icon: Globe,
    items: [
      "Landing Pages",
      "News Websites",
      "Blog Websites",
      "Corporate Websites",
      "Educational Websites",
      "NGO Websites",
      "Government Websites",
      "Portfolio Websites",
      "Business Websites",
      "Responsive Layouts",
    ],
  },
  {
    title: "Frontend Development",
    icon: Code2,
    items: [
      "React Development",
      "Next.js Development",
      "TypeScript Development",
      "Tailwind CSS Development",
      "Responsive UI Design",
      "UI Implementation",
      "Performance Optimisation",
      "Accessibility Improvements",
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    items: [
      "Database Design",
      "API Development",
      "Authentication Systems",
      "Role-Based Access Control",
      "File Storage Setup",
      "Database Optimisation",
      "Server Actions Integration",
      "Node.js & Express",
      "Prisma ORM",
      "SQL & PostgreSQL",
      "Supabase Integration",
    ],
  },
  {
    title: "AI Integration",
    icon: Brain,
    items: [
      "AI Assistants",
      "Gemini Integration",
      "OpenAI Integration",
      "Knowledge Base Assistants",
      "Customer Support AI",
      "Content Generation Tools",
      "Chatbots",
      "FAQ Systems",
      "Smart Automation",
    ],
  },
  {
    title: "Website Maintenance",
    icon: Wrench,
    items: [
      "Monthly Maintenance",
      "Feature Updates",
      "Database Maintenance",
      "Bug Fixing",
      "Performance Optimisation",
      "Content Updates",
      "Security Improvements",
    ],
  },
  {
    title: "Website Optimisation",
    icon: Gauge,
    items: [
      "Lighthouse Optimisation",
      "Core Web Vitals Optimisation",
      "SEO Optimisation",
      "Performance Audits",
      "Accessibility Audits",
      "Technical SEO",
      "Schema Markup Implementation",
    ],
  },
];

export default function Services({
  id,
}: Readonly<ServicesProps>) {
  return (
    <section
      id={id}
      aria-labelledby="services-heading"
      className="border-b border-border"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-6
          py-24
          sm:px-8
          lg:px-12
        "
      >
        <div className="max-w-3xl">
          <p
            className="
              mb-4
              text-sm
              font-medium
              uppercase
              tracking-[0.12em]
              text-primary
            "
          >
            Services
          </p>

          <h2
            id="services-heading"
            className="
              font-heading
              text-4xl
              font-bold
              tracking-tight
              text-foreground
              sm:text-5xl
            "
          >
            Development services focused on
            performance, scalability and long-term
            maintainability.
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-text-body
            "
          >
            Whether you need a business website,
            custom web application, AI-powered
            solution or ongoing technical support,
            I build modern solutions with a strong
            focus on performance, accessibility,
            SEO and user experience.
          </p>
        </div>

        <div
          className="
            mt-20
            grid
            gap-x-12
            gap-y-16
            md:grid-cols-3
            xl:grid-cols-3
          "
        >
          {services.map(
            ({
              title,
              icon: Icon,
              items,
            }) => (
              <section
                key={title}
                aria-labelledby={title}
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <Icon
                    size={22}
                    className="
                      text-primary
                    "
                    aria-hidden="true"
                  />

                  <h3
                    id={title}
                    className="
                      font-heading
                      text-xl
                      font-semibold
                      tracking-tight
                      text-foreground
                    "
                  >
                    {title}
                  </h3>
                </div>

                <ul
                  className="
                    mt-6
                    space-y-3
                  "
                >
                  {items.map((item) => (
                    <li
                      key={item}
                      className="
                        flex
                        items-start
                        gap-3
                      "
                    >
                      <span
                        aria-hidden="true"
                        className="
                          mt-2
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-primary
                          shrink-0
                        "
                      />

                      <span
                        className="
                          text-sm
                          leading-7
                          text-text-body
                        "
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ),
          )}
        </div>

        <div
          className="
            mt-24
            border-t
            border-border
            pt-12
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div className="max-w-2xl">
              <h3
                className="
                  font-heading
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-foreground
                "
              >
                Have a project in mind?
              </h3>

              <p
                className="
                  mt-3
                  text-base
                  leading-8
                  text-text-body
                "
              >
                Let&apos;s discuss your requirements,
                goals and timeline. I&apos;m always
                interested in building modern,
                performant and user-focused digital
                products.
              </p>
            </div>

            <Link
              href="/contact"
              aria-label="Contact Swaleh Mohamad Swalehe"
              className="
                inline-flex
                h-12
                w-40
                items-center
                justify-center
                rounded-full
                bg-primary
                px-6
                text-sm
                font-semibold
                text-primary-foreground
                transition-opacity
                hover:opacity-90
              "
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
