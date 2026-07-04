import Link from "next/link";

type HeroProps = {
  id: string;
};

export default function Hero({
  id,
}: Readonly<HeroProps>) {
  return (
    <section
      id={id}
      aria-labelledby="hero-heading"
      className="
        relative
        w-full
        border-b
        border-border
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[calc(100vh-80px)]
          w-full
          max-w-7xl
          flex-col
          justify-center
          px-6
          py-24
          sm:px-8
          lg:px-12
        "
      >
        <div className="max-w-4xl">
          <p
            className="
              mb-6
              text-sm
              font-medium
              tracking-[0.18em]
              text-primary
              uppercase
            "
          >
            Full-Stack Developer & Civil Engineering Scholar • Mombasa, Kenya
          </p>

          <h1
            id="hero-heading"
            className="
              font-heading
              text-[clamp(3.5rem,8vw,6.5rem)]
              font-bold
              leading-[0.92]
              tracking-[-0.04em]
              text-foreground
            "
          >
            Hi, I&apos;m Swaleh
            <br />
            Mohamad Swalehe.
          </h1>

          <p
            className="
              mt-8
              max-w-3xl
              text-lg
              leading-8
              text-text-body
              sm:text-xl
            "
          >
           I architect modern, rapid, and resilient web solutions
           leveraging Next.js, TypeScript, Tailwind CSS, and Supabase.
           Based in Mombasa, Kenya, I am a dedicated self-taught innovator
           and Civil Engineering undergraduate at the Technical University
           of Mombasa, committed to graduating with excellence in 2029.
          </p>

          <p
            className="
              mt-6
              max-w-3xl
              text-base
              leading-8
              text-text-body
            "
          >
           Since launching my development career in early 2025, I have
           engineered intuitive digital experiences, high-performance systems,
           and scalable architectures while mastering emerging tools and adapting rigorous global industry standards.
          </p>

          <div
            className="
              mt-12
              flex
              flex-col
              gap-4
              sm:flex-row
            "
          >
            <Link
              href="/projects"
              aria-label="View featured projects"
              className="
                inline-flex
                h-12
                items-center
                justify-center
                rounded-full
                bg-primary
                px-6
                text-sm
                font-semibold
                text-primary-foreground
                transition-opacity
                hover:opacity-90
                focus-visible:outline-none
              "
            >
              View My Projects
            </Link>

            <Link
              href="/about"
              aria-label="Contact Swaleh Mohamad Swalehe"
              className="
                inline-flex
                h-12
                items-center
                justify-center
                rounded-full
                border
                border-border
                px-6
                text-sm
                font-semibold
                text-foreground
                transition-colors
                hover:bg-foreground-muted
                focus-visible:outline-none
              "
            >
              My Journey
            </Link>
          </div>

          <div
            className="
              mt-16
              flex
              flex-wrap
              items-center
              gap-x-8
              gap-y-3
              text-sm
              text-text-body
            "
          >
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>Supabase</span>
            <span>PostgreSQL</span>
            <span>AI-Driven Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
}
