// lib/getIcons.ts

import type { ComponentType } from "react";

import {
  Code2,
  Database,
  Server,
  Globe,
  Smartphone,
  Cpu,
  Cloud,
  Shield,
  Terminal,
  Workflow,
  Layers3,
  FileCode2,
  GitBranch,
  Braces,
} from "lucide-react";

import {
  SiGooglegemini,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiPrisma,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiGit,
  SiHtml5,
  SiWebassembly,
  SiSass,
  SiRedux,
  SiReactquery,
  SiShadcnui,
  SiFramer,
  SiPython,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiPhp,
  SiLaravel,
  SiBootstrap,
  SiFigma,
  SiLinux,
  SiNginx,
  SiCloudflare,
  SiGooglecloud,
  SiOpenai,
  SiStripe,
  SiJsonwebtokens,
  SiSocketdotio,
  SiGraphql,
  SiVite,
  SiAstro,
  SiElectron,
  SiFlutter,
  SiDart,
  SiKotlin,
  SiSwift,
  SiC,
  SiCplusplus,
  SiSharp,
  SiGo,
  SiRust,
  SiJest,
  SiVitest,
  SiCypress,
  SiStorybook,
} from "react-icons/si";

type IconComponent = ComponentType<{
  size?: number;
  className?: string;
}>;

const FALLBACK_ICON: IconComponent =
  Layers3;

const TECH_ICONS: Record<
  string,
  IconComponent
> = {
  // Frontend
  react: SiReact,
  "react.js": SiReact,
  "reactjs": SiReact,

  next: SiNextdotjs,
  "next.js": SiNextdotjs,
  nextjs: SiNextdotjs,

  typescript: SiTypescript,
  ts: SiTypescript,

  javascript: SiJavascript,
  js: SiJavascript,

  html: SiHtml5,
  html5: SiHtml5,

  sass: SiSass,
  scss: SiSass,

  tailwind: SiTailwindcss,
  tailwindcss: SiTailwindcss,

  bootstrap: SiBootstrap,

  redux: SiRedux,
  "redux toolkit": SiRedux,

  "react query": SiReactquery,
  tanstack: SiReactquery,
  "tanstack query": SiReactquery,

  shadcn: SiShadcnui,
  "shadcn/ui": SiShadcnui,

  framer: SiFramer,
  "framer motion": SiFramer,

  vite: SiVite,
  astro: SiAstro,

  // Backend
  node: SiNodedotjs,
  "node.js": SiNodedotjs,
  nodejs: SiNodedotjs,

  express: SiExpress,
  "express.js": SiExpress,

  python: SiPython,

  django: SiDjango,
  flask: SiFlask,
  fastapi: SiFastapi,

  php: SiPhp,
  laravel: SiLaravel,

  graphql: SiGraphql,

  "socket.io": SiSocketdotio,
  socketio: SiSocketdotio,

  // Databases
  postgres: SiPostgresql,
  postgresql: SiPostgresql,

  mysql: SiMysql,

  mongodb: SiMongodb,
  mongo: SiMongodb,

  supabase: SiSupabase,
  firebase: SiFirebase,

  prisma: SiPrisma,

  // Cloud / DevOps
  docker: SiDocker,

  gcp: SiGooglecloud,
  "google cloud": SiGooglecloud,

  vercel: SiVercel,
  netlify: SiNetlify,

  cloudflare: SiCloudflare,
  nginx: SiNginx,

  linux: SiLinux,

  // AI
  openai: SiOpenai,
  chatgpt: SiOpenai,
  gemini: SiGooglegemini,
  "google gemini": SiGooglegemini,
  "google ai studio": SiGooglegemini,
  "ai studio": SiGooglegemini,

  // Payments / Auth
  stripe: SiStripe,
  jwt: SiJsonwebtokens,

  // Mobile
  flutter: SiFlutter,
  dart: SiDart,

  kotlin: SiKotlin,
  swift: SiSwift,

  electron: SiElectron,

  // Languages
  c: SiC,
  "c++": SiCplusplus,
  cpp: SiCplusplus,

  "c#": SiSharp,
  csharp: SiSharp,

  go: SiGo,
  golang: SiGo,

  rust: SiRust,

  wasm: SiWebassembly,
  webassembly: SiWebassembly,

  // Testing
  jest: SiJest,
  vitest: SiVitest,
  cypress: SiCypress,
  storybook: SiStorybook,

  // Git
  git: SiGit,
  github: SiGithub,
};

const CATEGORY_ICONS: Array<{
  keywords: string[];
  icon: IconComponent;
}> = [
  {
    keywords: [
      "api",
      "backend",
      "server",
    ],
    icon: Server,
  },
  {
    keywords: [
      "database",
      "sql",
      "db",
    ],
    icon: Database,
  },
  {
    keywords: [
      "cloud",
      "hosting",
    ],
    icon: Cloud,
  },
  {
    keywords: [
      "security",
      "auth",
    ],
    icon: Shield,
  },
  {
    keywords: [
      "mobile",
      "android",
      "ios",
    ],
    icon: Smartphone,
  },
  {
    keywords: [
      "frontend",
      "web",
    ],
    icon: Globe,
  },
  {
    keywords: [
      "devops",
      "ci/cd",
    ],
    icon: Workflow,
  },
  {
    keywords: [
      "terminal",
      "cli",
    ],
    icon: Terminal,
  },
  {
    keywords: [
      "code",
      "programming",
    ],
    icon: Code2,
  },
  {
    keywords: [
      "engine",
      "compiler",
    ],
    icon: Cpu,
  },
  {
    keywords: [
      "json",
      "schema",
    ],
    icon: Braces,
  },
  {
    keywords: [
      "source",
      "repository",
    ],
    icon: GitBranch,
  },
];

function normalizeTechName(
  tech: string,
): string {
  return tech
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

/**
 * Returns the appropriate icon component
 * based on the tech stack name stored
 * in the Supabase `tech_stacks` array.
 *
 * Example values:
 * - React
 * - Next.js
 * - TypeScript
 * - Supabase
 * - PostgreSQL
 * - Docker
 */
export function getTechIcon(
  tech: string,
): IconComponent {
  const normalized =
    normalizeTechName(tech);

  const directMatch =
    TECH_ICONS[normalized];

  if (directMatch) {
    return directMatch;
  }

  const categoryMatch =
    CATEGORY_ICONS.find(
      ({ keywords }) =>
        keywords.some((keyword) =>
          normalized.includes(
            keyword,
          ),
        ),
    );

  if (categoryMatch) {
    return categoryMatch.icon;
  }

  return FileCode2;
}

/**
 * Optional helper if you ever want
 * standardized labels from database values.
 */
export function formatTechName(
  tech: string,
): string {
  return tech
    .trim()
    .replace(/\s+/g, " ");
}
