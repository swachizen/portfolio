"use client";

import Image from "next/image";

type ScreenshotGalleryProps = {
  screenshots?: string[];
  title?: string;
};

function ScreenshotSkeleton() {
  return (
    <div
      className="
        aspect-[16/10]
        w-full
        animate-pulse
        rounded-[var(--radius-card)]
        border
        border-border
      "
      aria-hidden="true"
    />
  );
}

export default function ScreenshotGallery({
  screenshots = [],
  title = "Project Screenshot",
}: Readonly<ScreenshotGalleryProps>) {
  if (screenshots.length === 0) {
    return (
      <div
        className="
          grid
          grid-cols-1
          gap-6
          md:grid-cols-2
        "
      >
        {Array.from({
          length: 4,
        }).map((_, index) => (
          <ScreenshotSkeleton
            key={index}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
      "
    >
      {screenshots.map(
        (
          screenshot,
          index,
        ) => (
          <figure
            key={`${screenshot}-${index}`}
            className="
              overflow-hidden
              rounded-[var(--radius-card)]
              border
              border-border
            "
          >
            <Image
              src={screenshot}
              alt={`${title} ${
                index + 1
              }`}
              width={1600}
              height={1000}
              quality={75}
              priority={
                index == 0
              }
              loading={
                index == 0
                  ? "eager"
                  : "lazy"
              }
              sizes="
                (max-width: 768px) 100vw,
                (max-width: 1280px) 50vw,
                50vw
              "
              className="
                h-auto
                w-full
                object-cover
                transition-transform
                duration-500
                hover:scale-[1.02]
              "
            />
          </figure>
        ),
      )}
    </div>
  );
}
