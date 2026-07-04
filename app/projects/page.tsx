// app/projects/page.tsx

import type { Metadata } from "next";
import Search from "@/components/projects/Search";

const siteUrl = "https://swaleh.app";
const pageUrl = `${siteUrl}/projects`;

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore software engineering and civil engineering projects built by Swaleh Mohamad Swalehe using Next.js, TypeScript, Tailwind CSS, Supabase and modern web technologies.",

  keywords: [
   "Swaleh Mohamad Projects",
   "Software Engineering Projects",
   "Civil Engineering Projects",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "Projects | Swaleh Mohamad Swalehe",
    description:
      "Explore software engineering and civil engineering projects built by Swaleh Mohamad Swalehe.",
    url: pageUrl,
    siteName: "Swaleh Portfolio",
    type: "website",

    images: [
      {
        url: "/og/og-projects.png",
        width: 1200,
        height: 630,
        alt: "Swaleh Projects",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Projects | Swaleh Mohamad Swalehe",
    description:
      "Explore software engineering and civil engineering projects built by Swaleh Mohamad Swalehe.",
    images: ["/og/og-projects.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ProjectsPage() {
  return (
    <main
      id="main-content"
      className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-6 lg:px-8"
    >
      <section
        aria-labelledby="projects-heading"
        className="mx-auto max-w-4xl text-center"
      >
      
      <span className="inline-flex items-center px-4 py-2 text-sm font-medium tracking-[0.18em] text-primary uppercase">
        My Projects
      </span>

        <header className="space-y-4">
          <h1
            id="projects-heading"
            className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Projects
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base text-text-body leading-8 sm:text-lg">
            A collection of software engineering and civil engineering
            projects showcasing problem solving, modern technologies,
            performance optimization, and real-world implementations.
          </p>
        </header>

        <Search />
      </section>
    </main>
  );
}
