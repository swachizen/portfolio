// app/secondary/page.tsx

import type { Metadata } from "next";

import Accessibility from "@/components/secondary/Accessibility";
import Terms from "@/components/secondary/Terms";
import Policy from "@/components/secondary/Policy";

const siteUrl = "https://swaleh.app";
const pageUrl = `${siteUrl}/secondary`;

export const metadata: Metadata = {
  title: "Trust & Policies",

  description:
    "Read the Privacy Policy, Terms & Conditions, and Accessibility Statement for Swaleh Mohamad Swalehe's portfolio website.",

  keywords: [
    "Privacy Policy",
    "Terms and Conditions",
    "Accessibility Statement",
    "Trust",
    "Website Policies",
    "Swaleh Mohamad Swalehe",
    "Full Stack Developer Kenya",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Trust & Policies | Swaleh Mohamad Swalehe",
    description:
      "Read my Privacy Policy, Terms & Conditions and Accessibility Statement.",

    siteName: "Swaleh Portfolio",

    images: [
      {
        url: "/og/secondary-og.png",
        width: 1200,
        height: 630,
        alt: "Swaleh's Trust & Policies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Trust & Policies | Swaleh Mohamad Swalehe",
    description:
      "Read my Privacy Policy, Terms & Conditions and Accessibility Statement.",

    images: ["/og/secondary-og.png"],
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
          id="accessibilty-statement"
          aria-labelledby="about-hero-heading"
        >
          <Accessibility />
        </section>

        {/* Section 02 */}
        <section
          id="terms-and-conditions"
          aria-labelledby="story-heading"
        >
          <Terms />
        </section>

        {/* Section 03 */}
        <section
          id="privacy-policy"
          aria-labelledby="toolkit-heading"
        >
          <Policy />
        </section>
      </main>
    </>
  );
}
