import Image from "next/image";

export default function BrandAssets() {
  return (
    <div className="space-y-24">
      {/* Brand Identity */}
      <section
        aria-labelledby="brand-identity"
        className="space-y-10"
      >
        <div className="max-w-3xl">
          <h2
            id="brand-identity"
            className="
              text-3xl
              font-bold
              tracking-tight
              text-foreground
              sm:text-4xl
            "
          >
            Brand Identity
          </h2>

          <p
            className="
              mt-4
              text-base
              leading-8
              text-text-body
            "
          >
            Official visual assets representing the
            Swaleh digital ecosystem, including logo
            ownership, monogram identity, favicon
            usage and brand standards.
          </p>
        </div>

        <div
          className="
            grid
            gap-12
            lg:grid-cols-3
          "
        >
          {/* Logo */}
          <article className="space-y-5">
           <div className="mt-8 flex justify-center">
            <div
              className="
                rounded-3xl
                border
                border-border
                bg-white
                p-6
              "
            >
              <Image
                src="/logo.png"
                alt="Swaleh official logo"
                width={240}
                height={240}
                priority
                className="h-auto w-full max-w-[240px]"
              />
            </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">
                Official Logo
              </h3>

              <p className="text-sm leading-7 text-text-body">
                • Official logo of the Swaleh digital
                ecosystem.
                <br />
                • Established 2026.
                <br />
                • Represents ownership,
                authenticity and trust.
                <br />
                • Used across all authorized Swaleh
                properties and subdomains.
              </p>
            </div>
          </article>

          {/* Monogram */}
          <article className="space-y-5">
            <div
              className="
                mt-8
                flex
                h-32
                w-32
                items-center
                justify-center
                rounded-3xl
                border
                border-border
                bg-white
              "
            >
              <span
                className="
                  text-4xl
                  font-bold
                  tracking-tight
                  text-primary
                "
              >
                SMS
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">
                Monogram
              </h3>

              <p className="text-sm leading-7 text-text-body">
                A simplified identity mark derived
                from Swaleh Mohamad Swalehe. Used in
                constrained spaces such as avatars,
                favicons, profile representations and
                compact brand assets.
              </p>
            </div>
          </article>

          {/* Favicon */}
          <article className="space-y-5">
            <div
              className="
                mt-8
                flex
                h-32
                w-32
                items-center
                justify-center
                rounded-3xl
                border
                border-border
                bg-white
              "
            >
              <Image
                src="/favicon.ico"
                alt="Swaleh favicon"
                width={64}
                height={64}
                className="h-16 w-16"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">
                Favicon
              </h3>

              <p className="text-sm leading-7 text-text-body">
                Browser identification icon used
                throughout the Swaleh ecosystem to
                provide visual consistency,
                authenticity and recognizable
                ownership.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Brand Meaning */}
      <section
        aria-labelledby="brand-meaning"
        className="space-y-8"
      >
        <div className="max-w-4xl">
          <h2
            id="brand-meaning"
            className="
              text-3xl
              font-bold
              tracking-tight
              text-foreground
              sm:text-4xl
            "
          >
            Brand Meaning
          </h2>

          <p
            className="
              mt-5
              text-base
              leading-8
              text-text-body
            "
          >
            The Swaleh brand represents the
            intersection of software engineering and
            civil engineering. It reflects the idea
            of building reliable digital systems
            with the same discipline, precision and
            long-term thinking used to build
            physical infrastructure.
          </p>
        </div>

        <blockquote
          className="
            border-l-4
            border-primary
            pl-6
          "
        >
          <p
            className="
              font-heading
              text-2xl
              font-semibold
              tracking-tight
              text-foreground
              sm:text-3xl
            "
          >
            Building Structures. Building Systems.
          </p>
        </blockquote>

        <p
          className="
            max-w-4xl
            text-base
            leading-8
            text-text-body
          "
        >
          The logo serves as a recognizable
          ownership mark across all official digital
          properties, products, platforms and
          communications.
        </p>
      </section>

      {/* Brand Colors */}
      <section
        aria-labelledby="brand-colors"
        className="space-y-10"
      >
        <div>
          <h2
            id="brand-colors"
            className="
              text-3xl
              font-bold
              tracking-tight
              text-foreground
              sm:text-4xl
            "
          >
            Brand Colors
          </h2>
        </div>

        <div
          className="
            grid
            gap-10
            md:grid-cols-2
          "
        >
          <div className="space-y-5">
            <div
              className="
                h-16
                w-16
                rounded-2xl
                border
                border-border
              "
              style={{
                backgroundColor: "#0A0A0A",
              }}
            />

            <div>
              <h3 className="font-semibold text-primary">
                #0A0A0A
              </h3>

              <p className="mt-2 text-sm leading-7 text-text-body">
                Black symbolizes precision,
                engineering discipline, authority
                and technical excellence.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div
              className="
                h-16
                w-16
                rounded-2xl
                border
                border-border
              "
              style={{
                backgroundColor: "#FFFFFF",
              }}
            />

            <div>
              <h3 className="font-semibold text-primary">
                #FFFFFF
              </h3>

              <p className="mt-2 text-sm leading-7 text-text-body">
                White represents clarity,
                transparency, simplicity,
                accessibility and openness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section
        aria-labelledby="brand-usage"
        className="
          grid
          gap-12
          lg:grid-cols-2
        "
      >
        <div>
          <h2
            id="brand-usage"
            className="
              text-2xl
              font-bold
              tracking-tight
              text-foreground
            "
          >
            Permitted Usage
          </h2>

          <ul
            className="
              mt-5
              space-y-4
              text-sm
              leading-7
              text-text-body
            "
          >
            <li>
              • Reference and attribution purposes.
            </li>

            <li>
              • Educational and portfolio citations.
            </li>

            <li>
              • Linking to official Swaleh
              properties.
            </li>
          </ul>
        </div>

        <div>
          <h2
            className="
              text-2xl
              font-bold
              tracking-tight
              text-foreground
            "
          >
            Restricted Usage
          </h2>

          <ul
            className="
              mt-5
              space-y-4
              text-sm
              leading-7
              text-text-body
            "
          >
            <li>
              • Unauthorized impersonation.
            </li>

            <li>
              • Commercial redistribution.
            </li>

            <li>
              • Removal of ownership attribution.
            </li>

            <li>
              • Use suggesting endorsement,
              affiliation or partnership without
              authorization.
            </li>
          </ul>
        </div>
      </section>

      {/* Ownership */}
      <section
        aria-labelledby="ownership"
        className="
          border-t
          border-border
          pt-12
        "
      >
        <h2
          id="ownership"
          className="
            text-3xl
            font-bold
            tracking-tight
            text-foreground
            sm:text-4xl
          "
        >
          Ownership &amp; Attribution
        </h2>

        <p
          className="
            mt-5
            max-w-5xl
            text-base
            leading-8
            text-text-body
          "
        >
          All logos, monograms, visual assets,
          favicons, brand identifiers and associated
          branding remain the intellectual property
          of Swaleh Mohamad Swalehe unless otherwise
          stated. Usage must respect ownership,
          attribution and applicable intellectual
          property rights.
        </p>
      </section>
    </div>
  );
}
