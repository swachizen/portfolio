Swaleh Portfolio

A modern personal portfolio built with Next.js, TypeScript, Tailwind CSS, Supabase, and AI-enhanced workflows.

Overview

This portfolio is designed to present professional work in a clean, modern, and responsive interface with strong focus on performance, accessibility, SEO, and readability.

It includes:

- A responsive navbar and footer across all pages
- Light, dark, and system theme support
- SEO-friendly metadata, Open Graph, Twitter cards, sitemap, and robots configuration
- A structured portfolio experience for projects, contact, blog content, and AI assistance

Public Pages

- "/" — Homepage
- "/about" — About Me
- "/ai" — AI Assistant
- "/brand" — Brand / Press Kit
- "/secondary" — Secondary policy and support page
- "/contact" — Contact Me
- "/projects" — Projects

Tech Stack

- Framework: Next.js
- Language: TypeScript
- Styling: Tailwind CSS
- Theme System: "next-themes"
- Database / Backend: Supabase
- Toasts: "react-hot-toast"
- Analytics / Performance: Vercel Speed Insights
- Fonts: "Inter", "Plus Jakarta Sans"

Design System

The interface uses a Gemini-inspired visual language with:

- Light mode background: "#fafaf7"
- Dark mode background: "#000000"
- Accent blue: "#4285f4"
- Secondary blue: "#8ab4f8"
- Light borders: "#e5e7eb"
- Dark borders: "#222222"

Typography:

- "Inter" for body text
- "Plus Jakarta Sans" for headings

Features

- Responsive navigation with active route states
- Mobile dropdown menu
- Theme switcher with system default support
- Structured footer with trust links, social links, versioning, and copyright
- SEO metadata with Open Graph and Twitter cards
- JSON-LD structured data
- "robots.ts" and "sitemap.ts"
- Manifest and favicon support
- Lighthouse-focused performance and accessibility patterns

Project Structure

app/
  layout.tsx
  globals.css
  robots.ts
  sitemap.ts
  page.tsx
  about/
  ai/
  brand/
  secondary/
  contact/
  projects/

components/
  Navbar.tsx
  Footer.tsx
  providers.tsx
  projects/
  brand/
  secondary/
  ai/
  contact/
  home/
  about/

public/
  favicon.ico
  favicon-16x16.png
  favicon-32x32.png
  favicon-48x48.png
  apple-touch-icon.png
  logo.png
  og/
  icons/
  screenshots/
  shortcuts/
  about/
  site.webmanifest

Setup

1. Install dependencies

npm install

2. Run the development server

npm run dev

3. Open the project

http://swaleh.app

Environment Variables

Create a ".env.local" file and add the variables required by your Supabase and AI integration.

Example:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
TURNSTILE_SECRET_KEY=your_turnstile_secret_key
SEO and Indexing

The project includes:

- Metadata configuration in "app/layout.tsx"
- Open Graph images
- Twitter cards
- JSON-LD schema
- "app/robots.ts"
- "app/sitemap.ts"

Keep these files synchronized whenever routes change.

Theme Support

The site supports:

- "system"
- "light"
- "dark"

Theme behavior is handled through "next-themes" and CSS variables defined in "app/globals.css".

Performance Guidelines

This project is structured to support strong Lighthouse results by:

- Using server components where possible
- Keeping client components minimal
- Optimizing images through "next/image"
- Avoiding unnecessary runtime work
- Preserving accessible semantic markup

Accessibility Guidelines

The UI follows accessibility-first patterns:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Strong contrast
- ARIA where needed

Deployment

This portfolio is Vercel-friendly and should deploy cleanly to modern Next.js hosting environments.

Before deploying:

- Verify all routes
- Confirm metadata and icons
- Check sitemap and robots output
- Test light, dark, and system themes
- Review mobile navigation behavior

Maintenance Notes

When changing the site:

- Keep routes aligned with "robots.ts" and "sitemap.ts"
- Keep theme tokens consistent across CSS and components
- Avoid introducing duplicate design systems
- Preserve the clean, professional visual style

License

All rights reserved unless stated otherwise.
