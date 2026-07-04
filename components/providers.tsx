"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({
  children,
}: Readonly<ProvidersProps>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="swaleh-theme"
    >
      {children}

      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{
          top: 24,
          right: 24,
          left: 24,
        }}
        toastOptions={{
          duration: 5000,

          style: {
            background: "var(--card)",
            color: "var(--card-foreground)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            boxShadow: "var(--shadow-card)",
            padding: "14px 16px",
            maxWidth: "420px",
            fontSize: "14px",
            fontWeight: 500,
          },

          success: {
            duration: 4000,
            iconTheme: {
              primary: "#4285f4",
              secondary: "#ffffff",
            },
          },

          error: {
            duration: 6000,
          },

          loading: {
            duration: Infinity,
          },
        }}
      />

      <SpeedInsights />
    </ThemeProvider>
  );
}
