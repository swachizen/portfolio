// app/about/page.tsx

import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import Story from "@/components/about/Story";
import ToolKit from "@/components/about/ToolKit";
import Experience from "@/components/about/Experience";
import PersonalTouch from "@/components/about/PersonalTouch";
import AboutCTA from "@/components/about/AboutCTA";

const siteUrl = "https://www.swaleh.app";
const pageUrl = `${siteUrl}/about`;

export const metadata: Metadata = {
  title: "About",

  description:
    "Learn more about Swaleh Mohamad Swalehe, a Full-Stack Developer from Mombasa, Kenya specializing in Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL, and AI-powered development workflows.",

  keywords: [
    "About Swaleh Mohamad Swalehe",
    "Full Stack Developer Kenya",
    "Web Developer Mombasa",
    "Next.js Developer",
    "TypeScript Developer",
    "Supabase Developer",
    "Frontend Engineer",
    "Backend Developer",
    "Software Engineer Kenya",
    "Technical University of Mombasa",
    "Civil Engineering Student",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    url: pageUrl,
    title: "About | Swaleh Mohamad Swalehe",
    description:
      "Full-Stack Developer building modern, scalable and accessible digital experiences with Next.js, TypeScript, Tailwind CSS and Supabase.",

    siteName: "Swaleh Portfolio",

    images: [
      {
        url: "/og/about-og.png",
        width: 1200,
        height: 630,
        alt: "About Swaleh Mohamad Swalehe",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About | Swaleh Mohamad Swalehe",
    description:
      "Full-Stack Developer from Mombasa, Kenya building fast, modern and scalable web applications.",

    images: ["/og/about-og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <>
      <main
        id="about-page"
        className="relative isolate overflow-hidden"
      >
        {/* Section 01 */}
        <section
          id="about-hero"
          aria-labelledby="about-hero-heading"
        >
          <AboutHero />
        </section>

        {/* Section 02 */}
        <section
          id="story"
          aria-labelledby="story-heading"
        >
          <Story />
        </section>

        {/* Section 03 */}
        <section
          id="toolkit"
          aria-labelledby="toolkit-heading"
        >
          <ToolKit />
        </section>

        {/* Section 04 */}
        <section
          id="experience"
          aria-labelledby="experience-heading"
        >
          <Experience />
        </section>

        {/* Section 05 */}
        <section
          id="personal-touch"
          aria-labelledby="personal-touch-heading"
        >
          <PersonalTouch />
        </section>

        {/* Section 06 */}
        <section
          id="about-cta"
          aria-labelledby="about-cta-heading"
        >
          <AboutCTA />
        </section>
      </main>
    </>
  );
}
