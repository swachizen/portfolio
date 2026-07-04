"use client";

import {
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  Check,
  Copy,
} from "lucide-react";

type CopyButtonProps = {
  value: string;
  icon?: ReactNode;
};

export default function CopyButton({
  value,
  icon,
}: Readonly<CopyButtonProps>) {
  const [copied, setCopied] =
    useState(false);

  const handleCopy =
    useCallback(async () => {
      try {
        await navigator.clipboard.writeText(
          value,
        );

        setCopied(true);
      } catch (error) {
        console.error(
          "[COPY_ERROR]",
          error,
        );
      }
    }, [value]);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeout =
      window.setTimeout(() => {
        setCopied(false);
      }, 2000);

    return () =>
      window.clearTimeout(timeout);
  }, [copied]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={
        copied
          ? "Link copied"
          : "Copy link"
      }
      className="
        inline-flex
        items-center
        gap-2
        rounded-lg
        border
        border-border
        px-4
        py-2
        text-sm
        font-medium
        transition-all
        duration-200
        hover:border-primary
        hover:text-primary
        focus-visible:outline-none
      "
    >
      {copied ? (
        <Check
          size={22}
          aria-hidden="true"
        />
      ) : (
        icon ?? (
          <Copy
            size={22}
            aria-hidden="true"
          />
        )
      )}

      <span>
        {copied
          ? "Copied"
          : "Copy Link"}
      </span>
    </button>
  );
}
