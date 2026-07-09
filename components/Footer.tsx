"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { ChevronDown, Laptop, Moon, Palette, Sun } from "lucide-react";

const SITE_URL = "https://www.swaleh.app";

const CONTACTS = {
  email: "mailto:swalehmohamed203@gmail.com",
  whatsapp: "https://wa.me/254792948482",
  linkedin: "https://www.linkedin.com/in/swaleh-mohamad-a5b2353a4",
  github: "https://github.com/swachizen",
};

const VERSION = {
  major: 1,
  minor: 0,
  patch: 3,
};

const deepDiveLinks = [
  {
    label: "Brand",
    href: "/brand",
    description: "Brand identity and assets",
  },
];

const trustLinks = [
  {
    label: "Privacy Policy",
    href: "/secondary#policy",
    baseHref: "/secondary",
    description: "Read the privacy policy",
  },
  {
    label: "Terms of Service",
    href: "/secondary#terms",
    baseHref: "/secondary",
    description: "Read the terms of service",
  },
  {
    label: "Accessibility Statement",
    href: "/secondary#accessibility",
    baseHref: "/secondary",
    description: "Read the accessibility statement",
  },
];

const socialLinks = [
  {
    label: "WhatsApp",
    href: CONTACTS.whatsapp,
    description: "Chat on WhatsApp",
  },
  {
    label: "Email",
    href: CONTACTS.email,
    description: "Send an email",
  },
  {
    label: "LinkedIn",
    href: CONTACTS.linkedin,
    description: "View LinkedIn profile",
  },
  {
    label: "GitHub",
    href: CONTACTS.github,
    description: "View GitHub profile",
  },
];

const themeOptions = [
  {
    value: "system",
    label: "System default",
    icon: Laptop,
  },
  {
    value: "light",
    label: "Light",
    icon: Sun,
  },
  {
    value: "dark",
    label: "Dark",
    icon: Moon,
  },
] as const;

function FooterLink({
  href,
  label,
  description,
  isActive,
}: {
  href: string;
  label: string;
  description: string;
  isActive: boolean;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  {/* Added explicit decoration-primary and underline-offset utilities to fix the hover and active trace lines */}
  const className = [
    "text-sm transition-all duration-200 hover:text-primary hover:underline hover:decoration-primary decoration-2 underline-offset-4 focus-visible:text-primary focus-visible:outline-none",
    isActive ? "text-primary font-semibold underline decoration-primary decoration-2" : "text-foreground-muted",
  ].join(" ");

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={description}
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={description} aria-current={isActive ? "page" : undefined} className={className}>
      {label}
    </Link>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  {/* Client-side synchronization track to trace inner hash movements smoothly */}
  useEffect(() => {
    if (!mounted) return;

    const updateHash = () => {
      setActiveHash(window.location.hash);
    };

    updateHash();

    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);
    
    // Fallback click listener captures interior micro-routing updates instantly
    document.body.addEventListener("click", () => {
      setTimeout(updateHash, 50);
    });

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
      document.body.removeEventListener("click", updateHash);
    };
  }, [pathname, mounted]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setThemeMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setThemeMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const currentTheme = useMemo(() => {
    if (!mounted) return "system";
    if (theme === "system") return "system";
    return resolvedTheme === "dark" ? "dark" : "light";
  }, [mounted, resolvedTheme, theme]);

  const currentThemeLabel = useMemo(() => {
    const active = themeOptions.find((option) => option.value === currentTheme);
    return active?.label ?? "System default";
  }, [currentTheme]);

  return (
    <footer className="border-t border-border bg-background transition-colors duration-200">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <section className="flex flex-col justify-start">
            <Link
              href="/"
              className={[
                "text-base font-bold tracking-tight transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                pathname === "/" ? "text-primary" : "text-foreground",
              ].join(" ")}
              aria-label="Go to homepage"
              aria-current={pathname === "/" ? "page" : undefined}
            >
              Swaleh Mohamad Swalehe
            </Link>
          </section>

          <section className="space-y-4">
            <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Deep Dive
            </h2>
            <nav aria-label="Deep Dive links" className="flex flex-col space-y-2.5">
              {deepDiveLinks.map((item) => (
                <FooterLink
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  description={item.description}
                  isActive={pathname === item.href}
                />
              ))}
            </nav>
          </section>

          <section className="space-y-4">
            <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Trust and Policy
            </h2>
            <nav aria-label="Trust and policy links" className="flex flex-col space-y-2.5">
              {trustLinks.map((item) => {
                // Combines both current path layout and active layout state for strict exact-match routing
                const isPathMatch = pathname === item.baseHref;
                const isHashMatch = activeHash ? item.href.endsWith(activeHash) : false;
                
                return (
                  <FooterLink
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    description={item.description}
                    isActive={isPathMatch && (activeHash ? isHashMatch : true)}
                  />
                );
              })}
            </nav>
          </section>

          <section className="space-y-4">
            <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Networks
            </h2>
            <nav aria-label="Social profile links" className="flex flex-col space-y-2.5">
              {socialLinks.map((item) => (
                <FooterLink
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  description={item.description}
                  isActive={false}
                />
              ))}
            </nav>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1.5">
            <p className="text-xs text-foreground-muted">
              Version {VERSION.major}.{VERSION.minor}.{VERSION.patch}
            </p>
            <p className="text-xs text-foreground-muted">
              &copy; {new Date().getFullYear()} Swaleh Mohamad Swalehe. All rights reserved.
            </p>
          </div>

          <div ref={menuRef} className="relative self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setThemeMenuOpen((open) => !open)}
              aria-haspopup="menu"
              aria-expanded={themeMenuOpen}
              aria-label="Switch theme"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-[var(--shadow-card)] transition-all duration-200 hover:border-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Palette className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>{currentThemeLabel}</span>
              <ChevronDown className="h-4 w-4 opacity-60" aria-hidden="true" />
            </button>

            {themeMenuOpen ? (
              <div
                role="menu"
                aria-label="Theme options"
                className="absolute bottom-full left-0 sm:left-auto sm:right-0  z-50 mb-2 w-48 overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] origin-bottom-right animate-in fade-in slide-in-from-bottom-2"
              >
                <div className="border-b border-border bg-card px-3 py-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
                    Theme
                  </p>
                </div>

                <div className="p-1 bg-card">
                  {themeOptions.map((option) => {
                    const Icon = option.icon;
                    const isActive = currentTheme === option.value;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        role="menuitemradio"
                        aria-checked={isActive}
                        onClick={() => {
                          setTheme(option.value);
                          setThemeMenuOpen(false);
                        }}
                        className={[
                          "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-xs font-medium transition-colors duration-150",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-text-body hover:border-secondary hover:text-primary",
                        ].join(" ")}
                      >
                        <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{option.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}

