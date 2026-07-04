// components/about/AboutCTA.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FolderOpen } from "lucide-react";

export default function AboutCTA() {
  return (
    <section
      id="about-cta"
      aria-labelledby="about-cta-heading"
      className="relative"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-border bg-card sm:h-28 sm:w-28">
              <Image
                src="/about/profile.webp"
                alt="Swaleh Mohamad Swalehe"
                fill
                priority={false}
                sizes="(max-width: 640px) 96px, 112px"
                className="object-cover"
              />
            </div>

            <div className="mt-5">
              <h2
                id="about-cta-heading"
                className="text-xl font-semibold text-foreground sm:text-2xl"
              >
                Swaleh Mohamad Swalehe
              </h2>

              <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Full-Stack Developer
              </p>
            </div>
          </div>

          <blockquote className="mt-10">
            <p className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              BUILDING SYSTEMS.
              <br />
              BUILDING STRUCTURES.
            </p>
          </blockquote>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-text-body sm:text-lg">
            Whether it&apos;s engineering software or studying engineering
            principles, I enjoy creating solutions that are structured,
            scalable and built to last. My goal is to deliver digital products
            that combine performance, usability and long-term value.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-text-body sm:text-base">
            Great products begin with clear communication, thoughtful planning
            and consistent execution. If you have a project in mind, I&apos;d be
            happy to discuss how we can bring it to life.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              aria-label="Contact Swaleh Mohamad Swalehe"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Let&apos;s Work Together

              <ArrowRight
                size={22}
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/projects"
              aria-label="View projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View My Projects

              <FolderOpen
                size={22}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
