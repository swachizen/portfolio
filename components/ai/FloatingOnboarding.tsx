"use client";

import { Sparkles } from "lucide-react";

export default function FloatingOnboarding() {
  return (
    <section
      aria-labelledby="ai-onboarding-heading"
      className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6"
    >
      <div className="max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background">
            <Sparkles
              className="h-[22px] w-[22px] text-primary"
              aria-hidden="true"
            />
          </div>
        </div>

        <h1
          id="ai-onboarding-heading"
          className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          How can I help today?
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-text-body sm:text-base">
          Ask about Swaleh&apos;s projects, experience, services,
          development process, technologies, case studies, education,
          or professional background.
        </p>

      </div>
    </section>
  );
}
