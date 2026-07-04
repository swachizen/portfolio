export default function ProjectCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="
        overflow-hidden
        rounded-[var(--radius-card)]
        border
        border-border
        bg-card
        shadow-card
      "
    >
      <div
        className="
          aspect-[16/10]
          animate-pulse
          bg-foreground-muted
        "
      />

      <div className="space-y-4 p-5">
        <div
          className="
            h-6
            w-3/4
            animate-pulse
            rounded-md
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
            h-4
            w-28
            animate-pulse
            rounded-md
            bg-foreground-muted
          "
        />
      </div>
    </div>
  );
}
