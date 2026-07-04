"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type MessageListProps = {
  messages: Message[];
  isThinking: boolean;
};

export default function MessageList({
  messages,
  isThinking,
}: MessageListProps) {
  return (
    <>
      <div
        className="mx-auto flex w-full max-w-3xl flex-col gap-10"
        aria-live="polite"
      >
        {messages.map((message) => {
          const isUser = message.role === "user";

          return (
            <article
              key={message.id}
              className={`flex ${
                isUser ? "justify-end" : "justify-start"
              }`}
            >
              {isUser ? (
                <div
                  className={`
                    max-w-[85%]
                    rounded-[28px]
                    bg-primary
                    px-5
                    py-3.5
                    text-sm
                    leading-7
                    text-primary-foreground
                    shadow-sm
                  `}
                >
                  <p className="whitespace-pre-wrap break-words">
                    {message.content}
                  </p>
                </div>
              ) : (
                <div className="w-full">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ children }) => (
                        <h1 className="mb-5 mt-1 text-3xl font-bold tracking-tight">
                          {children}
                        </h1>
                      ),

                      h2: ({ children }) => (
                        <h2 className="mb-4 mt-10 text-2xl font-semibold tracking-tight">
                          {children}
                        </h2>
                      ),

                      h3: ({ children }) => (
                        <h3 className="mb-3 mt-8 text-xl font-semibold tracking-tight">
                          {children}
                        </h3>
                      ),

                      h4: ({ children }) => (
                        <h4 className="mb-3 mt-6 text-lg font-semibold">
                          {children}
                        </h4>
                      ),

                      p: ({ children }) => (
                        <p className="mb-5 text-[15px] leading-8 text-text-body">
                          {children}
                        </p>
                      ),

                      ul: ({ children }) => (
                        <ul className="mb-6 ml-6 space-y-3 marker:text-primary list-disc">
                          {children}
                        </ul>
                      ),

                      ol: ({ children }) => (
                        <ol className="mb-6 ml-6 space-y-3 marker:text-primary list-decimal">
                          {children}
                        </ol>
                      ),

                      li: ({ children }) => (
                        <li className="leading-8 text-text-body">
                          {children}
                        </li>
                      ),

                      strong: ({ children }) => (
                        <strong className="font-semibold text-primary">
                          {children}
                        </strong>
                      ),

                      blockquote: ({ children }) => (
                        <blockquote
                          className={`
                            my-6
                            border-l-2
                            border-primary
                            pl-4
                            text-text-body
                            italic
                          `}
                        >
                          {children}
                        </blockquote>
                      ),

                      code(props) {
                        const { children, className } = props;
                        const inline = !className;

                        if (inline) {
                          return (
                            <code
                              className={`
                                rounded-md
                                border
                                border-border
                                bg-card
                                px-1.5
                                py-0.5
                                text-[0.9em]
                              `}
                            >
                              {children}
                            </code>
                          );
                        }

                        return (
                          <pre
                            className={`
                              my-6
                              overflow-x-auto
                              rounded-2xl
                              border
                              border-border
                              bg-card
                              p-5
                            `}
                          >
                            <code>{children}</code>
                          </pre>
                        );
                      },

                      hr: () => (
                        <hr className="my-8 border-border" />
                      ),

                      a: ({ href, children }) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            font-medium
                            text-primary
                            underline
                            underline-offset-4
                          `}
                        >
                          {children}
                        </a>
                      ),

                      table: ({ children }) => (
                        <div className="my-6 overflow-x-auto">
                          <table className="w-full border-collapse">
                            {children}
                          </table>
                        </div>
                      ),

                      thead: ({ children }) => (
                        <thead className="border-b border-border">
                          {children}
                        </thead>
                      ),

                      tbody: ({ children }) => (
                        <tbody>{children}</tbody>
                      ),

                      tr: ({ children }) => (
                        <tr className="border-b border-border">
                          {children}
                        </tr>
                      ),

                      th: ({ children }) => (
                        <th className="px-4 py-3 text-left font-semibold">
                          {children}
                        </th>
                      ),

                      td: ({ children }) => (
                        <td className="px-4 py-3 text-text-body">
                          {children}
                        </td>
                      ),
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>
                </div>
              )}
            </article>
          );
        })}

        {isThinking && (
          <article
            aria-label="Assistant is thinking"
            className="flex justify-start"
          >
            <div className="thinking-wave">
              <span />
              <span />
              <span />
            </div>
          </article>
        )}
      </div>

      <style jsx>{`
        .thinking-wave {
          display: flex;
          align-items: center;
          gap: 6px;
          min-height: 32px;
        }

        .thinking-wave span {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: var(--primary);
          animation: wave 1.2s ease-in-out infinite;
        }

        .thinking-wave span:nth-child(2) {
          animation-delay: 0.15s;
        }

        .thinking-wave span:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes wave {
          0%,
          60%,
          100% {
            transform: translateY(0);
            opacity: 0.35;
          }

          30% {
            transform: translateY(-6px);
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .thinking-wave span {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
