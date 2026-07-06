import type { Metadata } from "next";
import { Suspense } from "react";

import Hero from "@/components/home/Hero";
import FeaturedWork from "@/components/home/FeaturedWork";
import FeaturedWorkSkeleton from "@/components/home/FeaturedWorkSkeleton";
import Services from "@/components/home/Services";

    const siteUrl = "https://www.swaleh.app";

    const pageUrl = `${siteUrl}/`;

export const metadata: Metadata = {
  title: "Swaleh Mohamad Swalehe | Full-Stack Developer",
  description:
    "Full-Stack Developer from Mombasa, Kenya building modern web applications with Next.js, TypeScript, Tailwind CSS, Supabase and AI-powered workflows.",

  keywords: [
   "About Swaleh Mohamad Swalehe",
   "Full Stack Developer Kenya",
   "Web Developer Momabasa",
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
    title:
      "Swaleh Mohamad Swalehe | Full-Stack Developer",

    description:
      "Building fast, scalable and modern web applications with Next.js, TypeScript, Tailwind CSS and Supabase.",

    siteName: "Swaleh Portfolio",

    locale: "en_US",

    images: [
      {
        url: "/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Swaleh Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Swaleh Mohamad Swalehe | Full-Stack Developer",

    description:
      "Building fast, scalable and modern web applications with Next.js, TypeScript, Tailwind CSS and Supabase.",

    images: ["/og/og-image.png"],
  },

  robots: {
   index: true,
   follow: true,
 },
};

export default function HomePage() {
  return (
    <main className="w-full">
      <Hero id="hero" />

      <Suspense
        fallback={
          <FeaturedWorkSkeleton />
        }
      >
        <FeaturedWork
          id="featured-work"
        />
      </Suspense>

      <Services id="services" />
    </main>
  );
}
