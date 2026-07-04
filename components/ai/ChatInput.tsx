"use client";

import { useCallback, useRef } from "react";
import { SendHorizonal } from "lucide-react";

type ChatInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (message: string) => Promise<void> | void;
  disabled?: boolean;
  canSend?: boolean;
};

export default function ChatInput({
  value,
  onChange,
  onSubmit,
  disabled = false,
  canSend = false,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resizeTextarea = useCallback(() => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(
      textarea.scrollHeight,
      200,
    )}px`;
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    onChange(event.target.value);
    resizeTextarea();
  };

  const handleSubmit = async () => {
    const trimmed = value.trim();

    if (!trimmed || disabled) {
      return;
    }

    await onSubmit(trimmed);

    requestAnimationFrame(() => {
      const textarea = textareaRef.current;

      if (!textarea) return;

      textarea.style.height = "auto";
    });
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();
      await handleSubmit();
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        void handleSubmit();
      }}
      className="relative"
      aria-label="Chat message input"
    >
      <div
        className="
          flex items-end gap-3
          rounded-[28px]
          border border-border
          bg-background
          px-4 py-3
          transition-all
          duration-200
          focus-within:border-primary
          focus-within:ring-2
          focus-within:ring-background
        "
      >
        <label
          htmlFor="chat-input"
          className="sr-only"
        >
          Ask the AI assistant
        </label>

        <textarea
          ref={textareaRef}
          id="chat-input"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          rows={1}
          maxLength={4000}
          autoComplete="off"
          spellCheck="true"
          placeholder="Ask about projects, experience, skills or services..."
          className="
            flex-1
            resize-none
            overflow-y-auto
            bg-transparent
            text-[15px]
            leading-6
            py-[18px]
            px-2
            text-foreground
            placeholder:text-muted-foreground
            rounded-[20px]
            outline-none
            focus:outline-none
            focus:ring-0
            disabled:cursor-not-allowed
            disabled:opacity-60
            [&::-webkit-scrollbar]:hidden
            [scrollbar-width:none]
            [-ms-overflow-style:none]
          "
          aria-label="Message"
        />

        <button
          type="submit"
          disabled={!canSend}
          aria-label="Send message"
          className="
            inline-flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-primary
            text-primary-foreground
            transition-all
            duration-200
            hover:scale-[1.03]
            hover:opacity-95
            active:scale-[0.98]
            disabled:pointer-events-none
            disabled:scale-100
            disabled:opacity-40
          "
        >
          <SendHorizonal
            className="h-4.5 w-4.5"
            aria-hidden="true"
          />
        </button>
      </div>

      <p className="mt-3 px-2 text-center text-xs text-muted-foreground">
        AI responses may occasionally be inaccurate. Verify important
        information independently.
      </p>
    </form>
  );
}
