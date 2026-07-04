AGENTS.md

Project Context

This project is a modern personal portfolio built with Next.js, TypeScript, Tailwind CSS, Supabase, and AI-enhanced workflows.

The site includes these public routes:

- "/"
- "/about"
- "/ai"
- "/brand"
- "/secondary"
- "/contact"
- "/projects"

The codebase uses a Gemini-inspired visual system with:

- Light mode background: "#fafaf7"
- Dark mode background: "#000000"
- Accent blue: "#4285f4"
- Secondary blue: "#8ab4f8"
- Light borders: "#e5e7eb"
- Dark borders: "#222222"

Typography uses:

- "Inter" for body text
- "Plus Jakarta Sans" for headings

Core Standards

Code Quality

- Use TypeScript for all application logic.
- Keep components small, composable, and readable.
- Prefer explicit types where they improve clarity.
- Avoid unnecessary abstraction.
- Preserve existing formatting, naming, and file structure unless a change is required.

UI and Styling

- Follow the established color system and typography tokens.
- Support light, dark, and system themes through "next-themes".
- Keep UI clean, minimal, modern, and professional.
- Ensure content remains clearly readable in all themes.
- Maintain consistent spacing, radius, shadows, and hover states.
- Use accessible focus states and visible active navigation states.

Accessibility

- Use semantic HTML elements.
- Prefer real interactive elements such as "button" and "a".
- Add meaningful "aria-label", "aria-current", and "aria-expanded" attributes where appropriate.
- Preserve keyboard navigation and escape-to-close behavior for menus and dialogs.
- Maintain strong contrast across text, surfaces, borders, and interactive states.

Performance

- Optimize for Lighthouse metrics: Performance, Accessibility, Best Practices, and SEO.
- Prefer server components when client interactivity is not needed.
- Keep client components minimal.
- Use "next/image" for all static and optimized images.
- Avoid unnecessary re-renders and heavy runtime computations.
- Use dynamic imports only for genuinely heavy or deferred UI.

Routing and Navigation

Primary Navigation

- Keep the navbar present on all pages.
- Highlight the active route clearly.
- On mobile, keep navigation compact and gesture-friendly.
- On desktop, show the full navigation inline.

Footer

- Keep the footer present on all pages.
- Include trust links, network links, versioning, and copyright text.
- Keep theme switching available and usable from the footer if implemented there.

SEO Requirements

Metadata

- Maintain unique metadata per page where appropriate.
- Preserve correct "title", "description", "openGraph", "twitter", and canonical settings.
- Keep metadata aligned with the portfolio brand and route purpose.

Structured Data

- Keep JSON-LD valid and syntactically correct.
- Update schema data when the public identity, title, or links change.

Indexing Files

- Keep "robots.ts" and "sitemap.ts" valid and synchronized with real public routes.
- Update sitemap entries whenever routes are added, removed, or renamed.
- Keep "/api" paths excluded from indexing.

Theme System

- Use the theme provider for manual theme switching.
- Use CSS variables for background, foreground, card, border, and shadow tokens.
- Keep the dark theme truly dark and the light theme off-white, not pure white.
- Ensure theme transitions are smooth and non-disruptive.

Global Styling

- Keep "app/globals.css" as the source of truth for global tokens and base styles.
- Do not introduce conflicting theme systems.
- Keep font variables consistent with "next/font/google".
- Preserve global accessibility and motion-reduction rules.

Routing Files

When updating route-related files, keep these in sync:

- "app/layout.tsx"
- "app/globals.css"
- "app/robots.ts"
- "app/sitemap.ts"
- "public/site.webmanifest"

Asset Rules

- Keep favicon, manifest, logo, and Open Graph assets in "public/".
- Use modern image formats where possible.
- Provide properly sized icon variants for browser and mobile support.
- Keep filenames predictable and descriptive.

Editing Rules

- Make the smallest safe change that solves the task.
- Do not rewrite unrelated code.
- Do not remove existing behavior unless it is broken or explicitly requested.
- Preserve comments that are still accurate and useful.
- If a file already contains a stable pattern, match it.

Deployment Notes

- Prefer Vercel-friendly conventions.
- Keep production output optimized for speed, stability, and crawlability.
- Avoid adding dependencies unless they provide clear value.

Maintenance Notes

- Update this file whenever the site structure, styling system, or deployment assumptions change.
- Keep the public routes, sitemap, and navigation aligned at all times.
- Treat Lighthouse improvements as a design and architecture concern, not only a post-build optimization step.

Allowed

- Add or update route files when they match the documented public pages.
- Improve accessibility, semantic structure, metadata, and SEO when doing so preserves the existing design intent.
- Refactor for readability, typing clarity, or performance when the behavior stays the same.
- Update theme, layout, navigation, footer, manifest, robots, and sitemap files when needed for consistency.
- Add or adjust icons, Open Graph assets, and static metadata assets in "public/".
- Make small compatibility fixes for current Next.js, TypeScript, and Tailwind conventions.
- Improve client/server component boundaries when it reduces bundle size or hydration cost.

Disallowed

- Do not change unrelated files or redesign the system without request.
- Do not remove routes, metadata, or indexing files unless the user explicitly asks.
- Do not introduce a second theme system, second design token system, or duplicate global styles.
- Do not replace semantic HTML with generic "div"-based interactivity.
- Do not add dependencies that do not materially improve the project.
- Do not hardcode unsafe external assumptions, placeholder production secrets, or fake live data.
- Do not weaken accessibility, contrast, keyboard support, or crawlability.
- Do not change public route names casually.
- Do not add "/api" routes to sitemap or allow them to be indexed.
- Do not rewrite stable code just to make it look different.

Review Before Changing

- Public route changes.
- Metadata or canonical URL changes.
- Theme token changes.
- Global CSS variable changes.
- Layout, navbar, footer, or shell structure changes.
- "robots.ts", "sitemap.ts", and "site.webmanifest" updates.
- Any change affecting Lighthouse, SEO, accessibility, or crawlability.
- Any addition of a dependency.
- Any change that affects production performance or build behavior.
