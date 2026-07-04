import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { supabase } from "@/lib/supabaseClient";

import type { Project } from "./Search";

type ProjectCardProps = {
  project: Project;
};

const NEW_PROJECT_WINDOW = 24 * 60 * 60 * 1000;

export default function ProjectCard({
  project,
}: Readonly<ProjectCardProps>) {
  const isNew =
    Date.now() -
      new Date(
        project.created_at,
      ).getTime() <
    NEW_PROJECT_WINDOW;

  const coverPhotoUrl =
    supabase.storage
      .from("projects")
      .getPublicUrl(
        project.cover_photo,
      ).data.publicUrl;

  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`View ${project.title} project`}
      className="
        group
        overflow-hidden
        rounded-[var(--radius-card)]
        border
        border-border
        bg-card
        shadow-card
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-secondary
        hover:shadow-lg
        focus-visible:outline-none
      "
    >
      <article>
        <div
          className="
            relative
            aspect-[16/10]
            overflow-hidden
            bg-card
          "
        >
          <Image
            src={coverPhotoUrl}
            alt={project.title}
            fill
            priority={project.featured}
            quality={75}
            sizes="
              (max-width: 768px) 100vw,
              (max-width: 1280px) 50vw,
              33vw
            "
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          {isNew && (
            <span
              className="
                absolute
                left-3
                top-3
                z-10
                rounded-full
                bg-primary
                px-3
                py-1
                text-xs
                font-semibold
                tracking-wide
                text-primary-foreground
                shadow-sm
              "
            >
              NEW
            </span>
          )}

          <div
            className="
              absolute
              right-3
              top-3
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-foreground-muted
              bg-foreground-muted
              text-white
              backdrop-blur-sm
              transition-transform
              duration-300
              group-hover:scale-110
            "
          >
            <ArrowUpRight
              size={22}
            />
          </div>
        </div>

        <div className="space-y-3 p-5">
          <h2
            className="
              line-clamp-1
              font-heading
              text-xl
              font-semibold
              tracking-tight
            "
          >
            {project.title}
          </h2>

          <p
            className="
              line-clamp-3
              text-sm
              leading-6
              text-text-body
            "
          >
            {project.description}
          </p>

          <div
            className="
              flex
              items-center
              justify-between
              pt-1
            "
          >
            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-wide
                text-primary
              "
            >
              {project.industry ===
              "software-engineering"
                ? "Software Engineering"
                : "Civil Engineering"}
            </span>

            <span
              className="
                text-xs
                text-text-body
              "
            >
              View Project
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
