// app/projects/[slug]/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ExternalLink,
  Copy,
  Star,
  Briefcase,
  Clock3,
  Layers3,
} from "lucide-react";

import { SiGithub } from "react-icons/si";

import { createClient } from "@supabase/supabase-js";

import CopyButton from "@/components/projects/CopyButton";
import ScreenshotGallery from "@/components/projects/ScreenshotGallery";
import { getTechIcon } from "@/lib/getIcons";

const siteUrl = "https://swaleh.app";

type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  problem_solved: string;
  tech_stacks: string[];
  screenshots: string[];
  cover_photo: string;
  live_url: string | null;
  github_url: string | null;
  est: string | null;
  core_role: string;
  industry:
    | "software-engineering"
    | "civil-engineering";
  featured: boolean;
  created_at: string;
  updated_at: string;
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

async function getProject(
  slug: string,
): Promise<Project | null> {
  const { data, error } =
    await supabase
      .from("projects")
      .select("*")
      .eq("slug", slug)
      .single();

  if (error || !data) {
    return null;
  }

  return data as Project;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata> {
  const { slug } =
    await params;

  const project =
    await getProject(slug);

  if (!project) {
    return {
      title:
        "Project Not Found",
    };
  }

  const coverPhotoUrl =
    supabase.storage
      .from("projects")
      .getPublicUrl(
        project.cover_photo,
      ).data.publicUrl;

  return {
    title: `${project.title} | Projects`,
    description:
      project.description,

    alternates: {
      canonical: `${siteUrl}/projects/${project.slug}`,
    },

    openGraph: {
      title:
        project.title,
      description:
        project.description,
      url: `${siteUrl}/projects/${project.slug}`,
      type: "article",

      images: [
        {
          url: coverPhotoUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },

    twitter: {
      card:
        "summary_large_image",
      title:
        project.title,
      description:
        project.description,
      images: [
        coverPhotoUrl,
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } =
    await params;

  const project =
    await getProject(slug);

  if (!project) {
    notFound();
  }

  const screenshots =
    project.screenshots.map(
      (path) =>
        supabase.storage
          .from("projects")
          .getPublicUrl(path)
          .data.publicUrl,
    );

  return (
    <main
      id="main-content"
      className="
        mx-auto
        w-full
        max-w-7xl
        px-4
        py-10
        sm:px-6
        lg:px-8
      "
    >
      <div className="space-y-12">
        {/* Back Navigation */}

        <div>
          <Link
            href="/projects"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-text-body
              transition-colors
              hover:text-primary
              focus-visible:outline-none
            "
          >
            <ArrowLeft
              size={22}
            />
            Back to Projects
          </Link>
        </div>

        {/* Title */}

        <header className="space-y-4">
          <h1
            className="
              font-heading
              text-4xl
              font-bold
              tracking-tight
              md:text-5xl
            "
          >
            {project.title}
          </h1>

          <p
            className="
              max-w-4xl
              text-base
              leading-8
              text-text-body
              md:text-lg
            "
          >
            {project.description}
          </p>
        </header>

        {/* Screenshots */}

<section
  aria-labelledby="screenshots-heading"
  className="space-y-6"
>
  <h2
    id="screenshots-heading"
    className="
      font-heading
      text-2xl
      font-semibold
    "
  >
    Screenshots
  </h2>

  <ScreenshotGallery
    screenshots={screenshots}
    title={project.title}
  />
</section>

        {/* Description */}

        <section className="space-y-4">
          <h2
            className="
              font-heading
              text-2xl
              font-semibold
            "
          >
            Project Description
          </h2>

          <p
            className="
              leading-8
              text-text-body
            "
          >
            {project.description}
          </p>
        </section>

        {/* Problem Solved */}

        <section className="space-y-4">
          <h2
            className="
              font-heading
              text-2xl
              font-semibold
            "
          >
            Problem Solved
          </h2>

          <p
            className="
              leading-8
              text-text-body
            "
          >
            {project.problem_solved}
          </p>
        </section>

        {/* Tech Stack */}

        <section className="space-y-5">
          <h2
            className="
              font-heading
              text-2xl
              font-semibold
            "
          >
            Tech Stack
          </h2>

          <div
            className="
              flex
              flex-wrap
              gap-4
            "
          >
            {project.tech_stacks.map(
              (tech) => {
                const Icon =
                  getTechIcon(
                    tech,
                  );

                return (
                  <div
                    key={
                      tech
                    }
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-border
                      px-4
                      py-2
                    "
                  >
                    <Icon
                      size={
                        22
                      }
                      className="text-primary"
                    />

                    <span className="text-sm font-medium">
                      {tech}
                    </span>
                  </div>
                );
              },
            )}
          </div>
        </section>

        {/* Links */}

        <section className="space-y-8">
          <h2
            className="
              font-heading
              text-2xl
              font-semibold
            "
          >
            Project Links
          </h2>

          {project.live_url && (
            <div className="space-y-3">
              <h3 className="font-medium">
                Live Preview
              </h3>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={
                    project.live_url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    bg-primary
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-primary-foreground
                    transition-opacity
                    hover:opacity-90
                  "
                >
                  <ExternalLink
                    size={22}
                  />
                  Preview
                </Link>

                <CopyButton
                  value={
                    project.live_url
                  }
                  icon={
                    <Copy
                      size={
                        22
                      }
                    />
                  }
                />
              </div>
            </div>
          )}

          {project.github_url && (
            <div className="space-y-3">
              <h3 className="font-medium">
                GitHub Repository
              </h3>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={
                    project.github_url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
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
                    transition-colors
                    hover:border-primary
                    hover:text-primary
                  "
                >
                  <SiGithub
                    size={22}
                  />
                  Open Repository
                </Link>

                <CopyButton
                  value={
                    project.github_url
                  }
                  icon={
                    <Copy
                      size={
                        22
                      }
                    />
                  }
                />
              </div>
            </div>
          )}
        </section>

        {/* Project Information */}

        <section className="space-y-8">
          <h2
            className="
              font-heading
              text-2xl
              font-semibold
            "
          >
            Project Information
          </h2>

          <div className="space-y-6">
            {project.est && (
              <div className="flex items-start gap-3">
                <Clock3
                  size={22}
                  className="text-primary"
                />

                <div>
                  <h3 className="font-medium">
                    Estimated Duration
                  </h3>

                  <p className="text-text-body">
                    {project.est}
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-start gap-3">
              <Briefcase
                size={22}
                className="text-primary"
              />

              <div>
                <h3 className="font-medium">
                  Core Role
                </h3>

                <p className="text-text-body">
                  {
                    project.core_role
                  }
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Star
                size={22}
                className="text-primary"
              />

              <div>
                <h3 className="font-medium">
                  Featured
                </h3>

                <p className="text-text-body">
                  {project.featured
                    ? "Yes"
                    : "No"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Layers3
                size={22}
                className="text-primary"
              />

              <div>
                <h3 className="font-medium">
                  Industry
                </h3>

                <p className="text-text-body">
                  {project.industry ===
                  "software-engineering"
                    ? "Software Engineering"
                    : "Civil Engineering"}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
