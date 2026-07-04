import { FolderSearch } from "lucide-react";

type EmptyStateProps = {
  title: string;
  description: string;
};

export default function EmptyState({
  title,
  description,
}: Readonly<EmptyStateProps>) {
  return (
    <section
      aria-labelledby="empty-state-title"
      className="flex min-h-[320px] flex-col items-center justify-center py-12 text-center"
    >
      <div
        aria-hidden="true"
        className="
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          border
          border-border
          bg-background
        "
      >
        <FolderSearch
          size={100}
          className="text-text-body"
          strokeWidth={1.75}
        />
      </div>

      <h2
        id="empty-state-title"
        className="
          font-heading
          text-2xl
          font-semibold
          tracking-tight
          text-foreground
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-3
          max-w-md
          text-sm
          leading-relaxed
          text-text-body
          md:text-base
        "
      >
        {description}
      </p>
    </section>
  );
}
