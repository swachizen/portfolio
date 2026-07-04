import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

const siteUrl = "https://swaleh.app";
const pageUrl = `${siteUrl}/contact`;

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Swaleh Mohamad Swalehe, a Full-Stack Developer from Mombasa, Kenya. Available for freelance projects, collaborations, internships, and professional opportunities.",

  keywords: [
    "Contact Swaleh Mohamad Swalehe",
    "Hire Full Stack Developer Kenya",
    "Next.js Developer Kenya",
    "TypeScript Developer",
    "Supabase Developer",
    "Freelance Web Developer Mombasa",
    "Web Development Services",
    "Software Developer Contact",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: "Swaleh Portfolio",
    title: "Contact | Swaleh Mohamad Swalehe",
    description:
      "Let's discuss your next project, collaboration, internship opportunity, or web application idea.",

    images: [
      {
        url: "/og/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact Swaleh Mohamad Swalehe",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact | Swaleh Mohamad Swalehe",
    description:
      "Get in touch with Swaleh Mohamad Swalehe for modern web development projects and collaborations.",
    images: ["/og/og-contact.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main
      id="main-content"
      className="relative"
      aria-labelledby="contact-heading"
    >
      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <header className="text-center">
            <p className="mb-4 text-sm font-medium tracking-[0.2em] text-primary uppercase">
              Contact
            </p>

            <h1
              id="contact-heading"
              className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Let&apos;s Build Something Exceptional
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-body sm:text-lg">
              Whether you need a modern website, a scalable web application,
              technical consultation, freelance development, or would like to
              discuss future opportunities, I&apos;d be glad to hear from you.
            </p>
          </header>

          {/* Contact Form */}
          <section
            aria-label="Contact form"
            className="mt-16"
          >
            <ContactForm />
          </section>

          {/* Additional Information */}
          <section
            aria-labelledby="contact-details-heading"
            className="mt-20 border-t border-border pt-10"
          >
            <h2
              id="contact-details-heading"
              className="sr-only"
            >
              Contact Information
            </h2>

            <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Location
                </h3>

                <p className="mt-2 text-sm leading-7 text-text-body">
                  Mombasa, Kenya
                </p>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Availability
                </h3>

                <p className="mt-2 text-sm leading-7 text-text-body">
                  Open to freelance projects, collaborations, internships, and
                  long-term professional opportunities.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Response Time
                </h3>

                <p className="mt-2 text-sm leading-7 text-text-body">
                  Usually within 24 to 48 hours.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
