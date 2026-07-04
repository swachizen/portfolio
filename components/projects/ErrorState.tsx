import { AlertTriangle } from "lucide-react";

type ErrorStateProps = {
  message?: string;
};

export default function ErrorState({
  message,
}: Readonly<ErrorStateProps>) {
  return (
    <section
      role="alert"
      aria-labelledby="error-state-title"
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
        <AlertTriangle
          size={100}
          className="text-text-body"
          strokeWidth={1.75}
        />
      </div>

      <h2
        id="error-state-title"
        className="
          font-heading
          text-2xl
          font-semibold
          tracking-tight
          text-foreground
        "
      >
        Unable to load projects
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
        {message ??
          "Something went wrong while loading projects. Please refresh the page and try again."}
      </p>
    </section>
  );
}
