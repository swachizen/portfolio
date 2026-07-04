"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import FloatingOnboarding from "@/components/ai/FloatingOnboarding";
import MessageList from "@/components/ai/MessageList";
import StarterPrompts from "@/components/ai/StarterPrompts";
import ChatInput from "@/components/ai/ChatInput";

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const STARTER_PROMPTS = [
  "Tell me about Swaleh and his background.",
  "What technologies does Swaleh specialize in?",
  "Show me some of Swaleh's projects.",
  "Why should I hire Swaleh for my next project?",
];

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const hasConversation = messages.length > 0;

  const canSend = useMemo(() => {
    return input.trim().length > 0 && !isThinking;
  }, [input, isThinking]);

  const scrollToBottom = useCallback(() => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking, scrollToBottom]);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  async function sendMessage(message: string) {
    const trimmed = message.trim();

    if (!trimmed || isThinking) {
      return;
    }

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsThinking(true);

    try {
      abortRef.current = new AbortController();

      const response = await fetch("/api/ai", {
        method: "POST",
        signal: abortRef.current.signal,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();

        throw new Error(
          errorData?.error ?? "Request failed",
        );
      }

      const text = await response.text();

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          text || "Sorry, I could not generate a response right now.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error: unknown) {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "Sorry, something went wrong while contacting the assistant.",
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  }

  return (
    <section
      aria-label="AI Portfolio Assistant"
      className="relative flex min-h-dvh w-full flex-col bg-background text-foreground antialiased"
    >
      <main
        className="relative flex w-full flex-1 flex-col justify-between"
        aria-live="polite"
      >
        {/* Main Content Area */}
        <div className="mx-auto w-full max-w-4xl flex-1 px-4 pb-36 pt-12 sm:px-6 md:pt-16">
          {!hasConversation ? (
            /* Onboarding State: Sequential block stacking eliminates the collision seen in 1000414505.jpg */
            <div className="w-full space-y-14 py-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
              {/* Isolated container blocks prevent internal absolute styles from leaking out */}
              <div className="relative w-full block-layout-isolate pt-44">
                <FloatingOnboarding />
              </div>

              <div className="w-full pt-24">
                <StarterPrompts
                  prompts={STARTER_PROMPTS}
                  disabled={isThinking}
                  onSelectPrompt={sendMessage}
                />
              </div>
            </div>
          ) : (
            /* Live Chat State */
            <MessageList messages={messages} isThinking={isThinking} />
          )}

          {/* Precise scroll anchoring target */}
          <div ref={scrollRef} className="h-2" />
        </div>

        {/* Sticky Control Bar */}
        <div className="sticky bottom-0 z-20 w-full bg-gradient-to-t from-background via-background to-transparent px-4 pb-6 pt-10 sm:px-6">
          <div className="mx-auto w-full max-w-4xl">
            <ChatInput
              value={input}
              onChange={setInput}
              onSubmit={sendMessage}
              disabled={isThinking}
              canSend={canSend}
            />
          </div>
        </div>
      </main>
    </section>
  );
}

