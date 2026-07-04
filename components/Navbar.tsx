"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Code2,
  FolderKanban,
  Mail,
  Menu,
  SquareUserRound,
  X,
} from "lucide-react";
import { SiGooglegemini } from "react-icons/si";

type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  exact?: boolean;
};

// Main navigation routes
const navItems: NavItem[] = [
  {
    label: "About Me",
    href: "/about",
    icon: SquareUserRound,
  },
  {
    label: "My Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    label: "Contact Me",
    href: "/contact",
    icon: Mail,
  },
];

function isActivePath(pathname: string, href: string, exact = false) {
  if (exact) return pathname === href;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

interface NavLinkProps {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active: boolean;
  onClick?: () => void;
  className?: string;
  hideTextOnMobile?: boolean;
}

function NavLink({
  href,
  label,
  icon: Icon,
  active,
  onClick,
  className = "",
  hideTextOnMobile = false,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={[
        "inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "text-text-body hover:bg-secondary hover:text-primary",
        className,
      ].join(" ")}
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span className={hideTextOnMobile ? "hidden sm:inline" : ""}>{label}</span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close mobile drawer automatically on path navigation transitions
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Handle click outside and Escape key for modular dismissibility
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const homeActive = useMemo(() => isActivePath(pathname, "/", true), [pathname]);
  const aiActive = useMemo(() => isActivePath(pathname, "/ai"), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md transition-colors duration-200">
      <nav
        aria-label="Main Navigation"
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10"
      >
        {/* LEFT BRAND REGION: Responsive configurations switching viewports cleanly */}
        <div className="flex items-center">
          {/* Mobile Name Tag */}
          <Link
            href="/"
            aria-current={homeActive ? "page" : undefined}
            className={[
              "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold tracking-tight transition-all duration-200 lg:hidden",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              homeActive
                ? "bg-secondary text-primary"
                : "text-foreground hover:bg-secondary hover:text-primary",
            ].join(" ")}
          >
            <Code2 className="h-4 w-4 text-primary" aria-hidden="true" />
            <span>Developer Swaleh</span>
          </Link>

          {/* Desktop Name Tag */}
          <Link
            href="/"
            aria-current={homeActive ? "page" : undefined}
            className={[
              "hidden items-center gap-2 rounded-xl px-3 py-2 text-base font-bold tracking-tight transition-all duration-200 lg:inline-flex",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              homeActive
                ? "bg-secondary text-primary"
                : "text-foreground hover:bg-secondary hover:text-primary",
            ].join(" ")}
          >
            <Code2 className="h-[22px] w-[22px] text-primary" aria-hidden="true" />
            <span>Developer Swaleh</span>
          </Link>
        </div>

        {/* DESKTOP ROW VIEWPORTS (>= lg): Displays all route options directly inline */}
        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={isActivePath(pathname, item.href)}
            />
          ))}

          <span className="h-5 w-px bg-border mx-1" aria-hidden="true" />

          <NavLink
            href="/ai"
            label="AI Assistant"
            icon={SiGooglegemini}
            active={aiActive}
          />
        </div>

        {/* MOBILE CONTROL REGION (< lg): Aligns AI Assistant and Toggle Menu Switch */}
        <div className="flex items-center gap-2 md:hidden" ref={menuRef}>
          <NavLink
            href="/ai"
            label="AI Assistant"
            icon={SiGooglegemini}
            active={aiActive}
            hideTextOnMobile={true}
          />

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className={[
              "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all duration-200 shadow-[var(--shadow-card)]",
              "hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              menuOpen ? "text-primary border-primary bg-secondary" : "",
            ].join(" ")}
          >
            {menuOpen ? (
              <X className="h-[22px] w-[22px] transition-transform duration-200 rotate-0 scale-100" aria-hidden="true" />
            ) : (
              <Menu className="h-[22px] w-[22px] transition-transform duration-200 rotate-0 scale-100" aria-hidden="true" />
            )}
          </button>

          {/* MOBILE DROPDOWN CONTAINER: Complete with smooth hardware-accelerated transforms */}
          <div
            role="menu"
            aria-label="Mobile Navigation Drawer"
            className={[
              "absolute right-6 top-full mt-3 w-64 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 ease-in-out origin-top-right",
              menuOpen
                ? "visible translate-y-0 opacity-100 scale-100 animate-in fade-in slide-in-from-top-2"
                : "invisible -translate-y-2 opacity-0 scale-95 pointer-events-none",
            ].join(" ")}
          >
            <div className="border-b border-border bg-card px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground-muted">
                Navigation Menu
              </p>
            </div>

            <div className="flex flex-col gap-1.5 p-2 bg-card">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                  active={isActivePath(pathname, item.href)}
                  onClick={() => setMenuOpen(false)}
                  className="w-full justify-start py-3"
                />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

