"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Search as SearchIcon,
  Filter,
} from "lucide-react";

import { supabase } from "@/lib/supabaseClient";

import ProjectCard from "./ProjectCard";
import ProjectCardSkeleton from "./ProjectCardSkeleton";
import EmptyState from "./EmptyState";
import ErrorState from "./ErrorState";

type Industry =
  | "all"
  | "software-engineering"
  | "civil-engineering";

export type Project = {
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

const SKELETON_COUNT = 6;

export default function Search() {
  const [query, setQuery] = useState("");

  const [industry, setIndustry] =
    useState<Industry>("all");

  const [projects, setProjects] =
    useState<Project[]>([]);

  const [relatedProjects, setRelatedProjects] =
    useState<Project[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const [showRelated, setShowRelated] =
    useState(false);

  const debounceRef =
    useRef<NodeJS.Timeout | null>(null);

  const normalizedQuery = useMemo(
    () => query.trim().toLowerCase(),
    [query],
  );

  const scoreProject = useCallback(
    (
      project: Project,
      searchTerm: string,
    ) => {
      if (!searchTerm) return 0;

      const term =
        searchTerm.toLowerCase();

      let score = 0;

      if (
        project.title
          .toLowerCase()
          .includes(term)
      ) {
        score += 10;
      }

      if (
        project.description
          .toLowerCase()
          .includes(term)
      ) {
        score += 6;
      }

      if (
        project.industry
          .toLowerCase()
          .includes(term)
      ) {
        score += 5;
      }

      project.tech_stacks.forEach(
        (tech) => {
          const value =
            tech.toLowerCase();

          if (value.includes(term)) {
            score += 8;
          }

          if (
            term.includes(value)
          ) {
            score += 4;
          }
        },
      );

      return score;
    },
    [],
  );

  const fetchProjects =
    useCallback(async () => {
     if (!navigator.onLine) {
       setLoading(false);
       setError(
        "No internet connection.",
        );

        return;
        }

      try {
        setLoading(true);
        setError(null);
        setShowRelated(false);

        let builder =
          supabase
            .from("projects")
            .select("*")
            .order(
              "created_at",
              {
                ascending: false,
              },
            );

        if (industry !== "all") {
          builder = builder.eq(
            "industry",
            industry,
          );
        }

        const {
          data,
          error: supabaseError,
        } = await builder;

        if (supabaseError) {
          throw supabaseError;
        }

        const exactResults =
          (data ?? []) as Project[];

       const searchTerm = normalizedQuery
  .toLowerCase()
  .trim();

const filteredProjects =
  !searchTerm
    ? exactResults
    : exactResults.filter((project) => {
        const haystack = [
          project.title,
          project.description,
          project.problem_solved,
          project.industry,
          project.core_role,
          ...project.tech_stacks,
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(searchTerm);
      });

        if (
          filteredProjects.length > 0
        ) {
          setProjects(
            filteredProjects
          );
          setRelatedProjects(
            [],
          );
          return;
        }

        if (!normalizedQuery) {
          setProjects([]);
          setRelatedProjects(
            [],
          );
          return;
        }

       const ranked = exactResults
  .map((project) => ({
    project,
    score: scoreProject(
      project,
      searchTerm,
    ),
  }))
  .filter(
    (item) => item.score > 0,
  )
  .sort(
    (a, b) =>
      b.score - a.score,
  )
  .slice(0, 6)
  .map(
    (item) =>
      item.project,
  );

setProjects([]);

setRelatedProjects(
  ranked,
);

setShowRelated(
  ranked.length > 0,
);
      } catch (
        fetchError: unknown
      ) {
        const isOffline =
         typeof navigator !== "undefined" && !navigator.onLine;

      if (!isOffline) {
        console.error(
          "[PROJECT_SEARCH_ERROR]",
          fetchError,
        );
       }

        setError(
          isOffline
            ? "No internet connection "
            : "Failed to load projects.",
        );
      } finally {
        setLoading(false);
      }
    }, [
      industry,
      normalizedQuery,
      scoreProject,
    ]);

  useEffect(() => {
    if (
      debounceRef.current
    ) {
      clearTimeout(
        debounceRef.current,
      );
    }

    debounceRef.current =
      setTimeout(
        () => {
          fetchProjects();
        },
        300,
      );

    return () => {
      if (
        debounceRef.current
      ) {
        clearTimeout(
          debounceRef.current,
        );
      }
    };
  }, [
    fetchProjects,
  ]);

  const displayedProjects =
    showRelated
      ? relatedProjects
      : projects;

  return (
    <section
      aria-label="Projects search"
      className="space-y-8"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <SearchIcon
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted"
          />

          <input
            type="search"
            value={query}
            autoComplete="off"
            spellCheck={false}
            aria-label="Search projects"
            placeholder="Search title, description, technologies or industry..."
            onChange={(e) =>
              setQuery(
                e.target.value,
              )
            }
            className="
              h-12
              w-full
              rounded-[var(--radius-card)]
              border
              border-border
              bg-background
              pl-11
              pr-4
              text-sm
              outline-none
              transition-colors
              focus:border-primary
            "
          />
        </div>

        <div className="relative min-w-[220px]">
          <Filter
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted"
          />

          <select
            value={industry}
            aria-label="Filter projects by industry"
            onChange={(e) =>
              setIndustry(
                e.target
                  .value as Industry,
              )
            }
            className="
              h-12
              w-full
              rounded-[var(--radius-card)]
              border
              border-border
              bg-background
              pl-11
              pr-10
              text-sm
              outline-none
              transition-colors
              focus:border-primary
            "
          >
            <option value="all">
              All Industries
            </option>

            <option value="software-engineering">
              Software Engineering
            </option>

            <option value="civil-engineering">
              Civil Engineering
            </option>
          </select>
        </div>
      </div>

      {loading && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({
            length:
              SKELETON_COUNT,
          }).map(
            (
              _,
              index,
            ) => (
              <ProjectCardSkeleton
                key={
                  index
                }
              />
            ),
          )}
        </div>
      )}

      {!loading &&
        error && (
          <ErrorState
            message={
              error
            }
          />
        )}

      {!loading &&
        !error &&
        showRelated && (
          <div className="space-y-1">
            <h2 className="font-heading text-xl font-semibold">
              No exact matches found
            </h2>

            <p className="text-sm text-text-body">
              Showing related projects instead.
            </p>
          </div>
        )}

      {!loading &&
        !error &&
        displayedProjects.length >
          0 && (
          <div
            className="
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {displayedProjects.map(
              (
                project,
              ) => (
                <ProjectCard
                  key={
                    project.id
                  }
                  project={
                    project
                  }
                />
              ),
            )}
          </div>
        )}

      {!loading &&
        !error &&
        displayedProjects.length ===
          0 && (
          <EmptyState
            title="No projects found"
            description="Try a different keyword, technology, or industry filter."
          />
        )}
    </section>
  );
}
