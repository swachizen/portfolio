"use client";

import { MessageSquarePlus, Sparkles } from "lucide-react";

type StarterPromptsProps = {
  prompts: string[];
  disabled?: boolean;
  onSelectPrompt: (prompt: string) => void | Promise<void>;
};

export default function StarterPrompts({
  prompts,
  disabled = false,
  onSelectPrompt,
}: StarterPromptsProps) {
  return (
    <section
      aria-labelledby="starter-prompts-heading"
      className="w-full"
    >
      <div className="flex items-center gap-2">
        <Sparkles
          className="h-4 w-4 text-primary"
          aria-hidden="true"
        />

        <h2
          id="starter-prompts-heading"
          className="text-sm font-medium text-muted-foreground"
        >
          Suggested questions
        </h2>
      </div>

      <div
        className="
          mt-3
          flex
          flex-wrap
          gap-2
        "
      >
        {prompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            disabled={disabled}
            aria-label={prompt}
            onClick={() => void onSelectPrompt(prompt)}
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-border
              bg-transparent
              px-4
              py-2.5
              text-sm
              font-medium
              text-text-body
              transition-all
              duration-200
              hover:border-secondary
              hover:bg-background
              hover:text-foreground
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary
              focus-visible:ring-offset-2
              focus-visible:ring-offset-background
              disabled:pointer-events-none
              disabled:opacity-50
            "
          >
            <MessageSquarePlus
              className="
                h-4
                w-4
                shrink-0
                text-muted-foreground
                transition-colors
                group-hover:text-primary
              "
              aria-hidden="true"
            />

            <span className="truncate">
              {prompt}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
