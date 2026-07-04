export default function FeaturedWorkSkeleton() {
  return (
    <section
      aria-hidden="true"
      className="border-b border-border"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-6
          py-24
          sm:px-8
          lg:px-12
        "
      >
        {/* Header Skeleton */}
        <div
          className="
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div className="max-w-3xl space-y-5">
            <div
              className="
                h-4
                w-32
                animate-pulse
                rounded-full
                bg-foreground-muted
              "
            />

            <div className="space-y-3">
              <div
                className="
                  h-12
                  w-full
                  max-w-md
                  animate-pulse
                  rounded-xl
                  bg-foreground-muted
                "
              />

              <div
                className="
                  h-12
                  w-3/4
                  animate-pulse
                  rounded-xl
                  bg-foreground-muted
                "
              />
            </div>

            <div className="space-y-2">
              <div
                className="
                  h-5
                  w-full
                  max-w-2xl
                  animate-pulse
                  rounded-lg
                  bg-foreground-muted
                "
              />

              <div
                className="
                  h-5
                  w-[90%]
                  animate-pulse
                  rounded-lg
                  bg-foreground-muted
                "
              />
            </div>
          </div>

          <div
            className="
              h-12
              w-44
              animate-pulse
              rounded-full
              border
              border-border
              bg-foreground-muted
            "
          />
        </div>

        {/* Project Grid Skeleton */}
        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-2
          "
        >
          {Array.from({
            length: 4,
          }).map((_, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-[var(--radius-card)]
                border
                border-border
                bg-card
                shadow-card
              "
            >
              {/* Cover Image */}
              <div
                className="
                  aspect-[16/10]
                  animate-pulse
                  bg-foreground-muted
                "
              />

              {/* Content */}
              <div className="space-y-4 p-5">
                <div
                  className="
                    h-6
                    w-3/4
                    animate-pulse
                    rounded-lg
                    bg-foreground-muted
                  "
                />

                <div className="space-y-2">
                  <div
                    className="
                      h-4
                      w-full
                      animate-pulse
                      rounded-md
                      bg-foreground-muted
                    "
                  />

                  <div
                    className="
                      h-4
                      w-[92%]
                      animate-pulse
                      rounded-md
                      bg-foreground-muted
                    "
                  />

                  <div
                    className="
                      h-4
                      w-[70%]
                      animate-pulse
                      rounded-md
                      bg-foreground-muted
                    "
                  />
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    pt-1
                  "
                >
                  <div
                    className="
                      h-4
                      w-28
                      animate-pulse
                      rounded-md
                      bg-secondary
                    "
                  />

                  <div
                    className="
                      h-4
                      w-24
                      animate-pulse
                      rounded-md
                      bg-foreground-muted
                    "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
