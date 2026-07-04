import type { Metadata } from "next";

import BrandAssets from "@/components/brand/BrandAssets";

const siteUrl = "https://swaleh.app";
const pageUrl = `${siteUrl}/brand`;

const pageTitle =
  "Brand Assets | Swaleh Mohamad Swalehe";

const pageDescription =
  "Official brand assets, logo guidelines, typography, colors, imagery and visual identity resources for Swaleh Mohamad Swalehe, Full-Stack Developer and Civil Engineering student based in Mombasa, Kenya.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  keywords: [
    "Swaleh Brand Assets",
    "Swaleh Portfolio Brand",
    "Swaleh Logo",
    "Developer Brand Kit",
    "Personal Branding",
    "Full Stack Developer Kenya",
    "Mombasa Developer",
    "Brand Guidelines",
    "Design System",
    "Portfolio Identity",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: pageTitle,

    description: pageDescription,

    url: pageUrl,

    siteName: "Swaleh Portfolio",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: "/og/og-brand.png",
        width: 1200,
        height: 630,
        alt: "Swaleh Brand Assets",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: pageTitle,

    description: pageDescription,

    images: ["/og/og-brand.png"],
  },

robots: {
    index: true,
    follow: true,
  }
};

export default function BrandPage() {
  return (
    <main
      className="
        mx-auto
        w-full
        max-w-7xl
        px-6
        py-20
        lg:px-8
      "
    >
      <section
        className="
          mx-auto
          max-w-4xl
          text-center
        "
      >
        <span
          className="
            inline-flex
            items-center
            px-4
            py-2
            text-sm
            font-medium
            tracking-[0.18em]
            text-primary
            uppercase
          "
        >
          Brand Guidelines
        </span>

        <h1
          className="
            mt-6
            text-4xl
            font-bold
            tracking-tight
            text-foreground
            sm:text-5xl
            lg:text-6xl
          "
        >
          Brand Assets
        </h1>

        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-base
            leading-8
            text-text-body
            sm:text-lg
          "
        >
          A modern visual identity built around
          clarity, professionalism and engineering
          precision. This brand system represents
          the work of Swaleh Mohamad Swalehe,
          combining software engineering,
          civil engineering and AI-powered
          development workflows into a consistent
          and recognizable portfolio experience.
        </p>
      </section>

      <div className="mt-16">
        <BrandAssets />
      </div>
    </main>
  );
}
