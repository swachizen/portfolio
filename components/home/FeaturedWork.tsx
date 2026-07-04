import Link from "next/link";

import ProjectCard from "@/components/projects/ProjectCard";
import EmptyState from "@/components/projects/EmptyState";
import ErrorState from "@/components/projects/ErrorState";

import { supabase } from "@/lib/supabaseClient";

type FeaturedWorkProps = {
  id: string;
};

async function getFeaturedProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select(
      `
        id,
        slug,
        title,
        description,
        cover_photo,
        industry,
        featured,
        created_at
      `,
    )
    .eq("featured", true)
    .order("created_at", {
      ascending: false,
    })
    .limit(6);

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}

export default async function FeaturedWork({
  id,
}: Readonly<FeaturedWorkProps>) {
  let projects: Awaited<
    ReturnType<
      typeof getFeaturedProjects
    >
  > = [];

  let state:
    | "success"
    | "empty"
    | "error" = "success";

  let errorMessage =
    "Unable to load featured projects.";

  try {
    projects =
      await getFeaturedProjects();

    if (projects.length === 0) {
      state = "empty";
    }
  } catch (error) {
    state = "error";

    const message =
      error instanceof Error
        ? error.message
        : "";

    const offlineErrors = [
      "fetch failed",
      "network",
      "failed to fetch",
      "typeerror",
      "offline",
    ];

    const isOfflineError =
      offlineErrors.some((value) =>
        message
          .toLowerCase()
          .includes(value),
      );

    errorMessage = isOfflineError
      ? "Projects could not be loaded because your internet connection appears to be unavailable. Please reconnect and try again."
      : "Something went wrong while loading featured projects. Please try again in a few moments.";
  }

  return (
    <section
      id={id}
      aria-labelledby="featured-work-heading"
      className="
        border-b
        border-border
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-6
          py-24
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div className="max-w-3xl">
            <p
              className="
                mb-4
                text-sm
                font-medium
                uppercase
                tracking-[0.12em]
                text-primary
              "
            >
              Selected Work
            </p>

            <h2
              id="featured-work-heading"
              className="
                font-heading
                text-4xl
                font-bold
                tracking-tight
                text-foreground
                sm:text-5xl
              "
            >
              Featured Projects
            </h2>

            <p
              className="
                mt-5
                max-w-2xl
                text-base
                leading-8
                text-text-body
              "
            >
              A selection of projects
              focused on performance,
              accessibility,
              scalability and modern
              user experience design.
            </p>
          </div>

          <div
            className="
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >
            <Link
              href="/projects"
              aria-label="View all projects"
              className="
                inline-flex
                h-12
                items-center
                justify-center
                rounded-full
                border
                border-border
                px-6
                text-sm
                font-semibold
                text-foreground
                transition-colors
                hover:bg-foreground-muted
              "
            >
              All Projects
            </Link>

            <Link
              href="/about#toolkit"
              aria-label="View my skills and toolkit"
              className="
                inline-flex
                h-12
                items-center
                justify-center
                rounded-full
                bg-primary
                px-6
                text-sm
                font-semibold
                text-primary-foreground
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:opacity-90
              "
            >
              My Skills
            </Link>
          </div>
        </div>

        <div className="mt-16">
          {state === "success" && (
            <div
              className="
                grid
                gap-6
                md:grid-cols-2
                xl:grid-cols-3
              "
            >
              {projects.map(
                (project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                  />
                ),
              )}
            </div>
          )}

          {state === "empty" && (
            <EmptyState
              title="No featured projects yet"
              description="Featured projects will appear here once they are published."
            />
          )}

          {state === "error" && (
            <ErrorState
              message={
                errorMessage
              }
            />
          )}
        </div>
      </div>
    </section>
  );
}
