import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

const siteUrl = "https://www.swaleh.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#fafaf7",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#000000",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Swaleh Mohamad Swalehe | Full-Stack Developer",
    template: "%s | Swaleh Mohamad Swalehe",
  },

  description:
    "Professional Full-Stack Developer from Mombasa, Kenya building modern web applications using Next.js, TypeScript, Tailwind CSS, Supabase, and AI-powered workflows.",

  keywords: [
    "Swaleh Mohamad Swalehe",
    "Full Stack Developer Kenya",
    "Next.js Developer",
    "TypeScript Developer",
    "Supabase Developer",
    "Frontend Developer",
    "Web Developer Mombasa",
    "Tailwind CSS",
    "React Developer",
    "Civil Engineering Student",
  ],

  authors: [
    {
      name: "Swaleh Mohamad Swalehe",
      url: siteUrl,
    },
  ],

  creator: "Swaleh Mohamad Swalehe",

  publisher: "Swaleh Mohamad Swalehe",

  category: "Technology",

  applicationName: "Swaleh Portfolio",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Swaleh Portfolio",
    title: "Swaleh Mohamad Swalehe | Full-Stack Developer",
    description:
      "Building fast, scalable and modern web applications with Next.js, TypeScript, Tailwind CSS and Supabase.",

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
    title: "Swaleh Mohamad Swalehe | Full-Stack Developer",
    description:
      "Building fast, scalable and modern web applications with Next.js, TypeScript, Tailwind CSS and Supabase.",
    images: ["/og/og-image.png"],
    creator: "@swaleh_001",
  },

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],

    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Swaleh Mohamad Swalehe",

    url: siteUrl,

    image: `${siteUrl}/logo.png`,

    jobTitle: "Full-Stack Developer",

    description:
      "Full-Stack Developer specializing in Next.js, TypeScript, Tailwind CSS and Supabase.",

    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Technical University of Mombasa",
    },

    address: {
      "@type": "PostalAddress",
      addressLocality: "Mombasa",
      addressCountry: "Kenya",
    },

    knowsAbout: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "React",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "AI Development",
    ],

    sameAs: [
      "https://github.com/swachizen",
      "https://www.linkedin.com/in/swaleh-mohamad-a5b2353a4",
      "https://x.com/swaleh_001",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

       <Providers>
        <div className="flex min-h-screen flex-col">
         <Navbar />
          <main className="flex-1">{children}</main>
         <Footer />
        </div>
       </Providers>
      </body>
    </html>
  );
}
