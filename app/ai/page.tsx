// app/ai/page.tsx

import type { Metadata } from "next";

import ChatInterface from "@/components/ai/ChatInterface";

const siteUrl = "https://swaleh.app";
const pageUrl = `${siteUrl}/ai`;

export const metadata: Metadata = {
  title: "AI Assistant | Swaleh Mohamad Swalehe",

  description:
    "Ask questions about Swaleh Mohamad Swalehe, his projects, skills, services, development process, experience, technologies, and proffessional background. Powered by Gemini Flash and portfolio-specific knowledge.",

  keywords: [
    "Swaleh Mohamad Swalehe",
    "Swaleh Portfolio",
    "AI Assistant",
    "Web Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "Typescript Developer",
    "Tailwind CSS",
    "Supabase",
    "Portfolio",
    "Software Engineer",
    "Kenya Developer",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    url: pageUrl,
    title: "AI Assistant | Swaleh Mohamad Swalehe",
    description:
      "Learn about Swaleh's projects, skills, services, experience, technology stack, development process through an AI-powered portfolio assistant.",

    siteName: "Swaleh Portfolio",

    images: [
      {
        url: "/og/og-ai.png",
        width: 1200,
        height: 630,
        alt: "Swaleh AI Assistant",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Assistant | Swaleh Mohamad Swalehe",
    description:
      "Ask questions about projects, services, experience, skills, technologies and development processes.",

    images: ["/og/og-ai.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AIPage() {
  return <ChatInterface />;
}
