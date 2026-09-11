"use client";

import { ExternalLink, Code2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "./Projects";

const PROJECT_CATEGORIES: Record<string, string> = {
  "Express Js Weather API": "Backend API",
  "Browser Code Editor": "Web Utility",
  "SA Docs Converter": "Productivity Tool",
  "SA Sudoku": "Web Gaming",
  "SA Web Paint": "Canvas Creative",
  "SA Type": "Interactive Audio",
  "SA BagChal": "Board Game",
  "Aditya Rana Portfolio": "Client Monograph",
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-[1360px] px-margin py-space-3xl md:px-margin-tablet lg:px-margin-desktop"
    >
      {/* Section Header */}
      <div className="mb-space-2xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
        <div className="flex max-w-xl flex-col gap-space-xs">
          <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-secondary">
            02 // Selected Works
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Featured Projects: Engineered with Purpose
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            A curated chronicle of full-stack platforms, production SaaS suites,
            and editorial design systems delivered for commercial viability and
            end-user delight.
          </p>
        </div>

        <div className="flex items-center gap-space-xs text-on-surface-variant">
          <span className="font-label-sm text-label-sm uppercase tracking-widest">
            Archive Status:
          </span>
          <span className="rounded-full bg-surface-container px-2.5 py-0.5 font-label-sm text-label-sm font-medium text-primary">
            {projects.length} Featured Projects
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const isComingSoon =
            project.status === "Coming Soon" ||
            project.status === "Work In Progress";
          const categoryTag =
            PROJECT_CATEGORIES[project.title] || "Full-Stack System";
          const indexNum = String(index + 1).padStart(2, "0");

          return (
            <article
              key={project.title}
              className={`border-surface-container-high/70 group relative flex flex-col justify-between rounded-xl border bg-surface-container-low p-space-lg transition-all duration-300 hover:border-surface-container-highest hover:bg-surface-container hover:shadow-md ${
                isComingSoon ? "opacity-95" : ""
              }`}
            >
              <div className="flex flex-col gap-space-sm">
                {/* Header Tag & Status */}
                <div className="flex items-center justify-between gap-space-xs">
                  <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-secondary">
                    {indexNum} // {categoryTag}
                  </span>
                  {isComingSoon && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-secondary-container px-2 py-0.5 font-label-sm text-label-sm font-medium text-on-secondary-container">
                      <Clock className="h-3 w-3" />
                      {project.status === "Work In Progress"
                        ? "In Dev"
                        : "Soon"}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-headline-sm text-headline-sm text-primary transition-colors group-hover:text-primary-container">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-space-xs">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="shadow-xs rounded-full bg-surface px-2.5 py-0.5 font-label-sm text-label-sm text-on-surface-variant"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto flex items-center gap-space-sm pt-space-md">
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.github, "_blank")}
                    className="shadow-xs inline-flex items-center gap-1.5 rounded-lg border-surface-container-high bg-surface px-space-sm py-1.5 font-label-sm text-label-sm text-on-surface transition-colors hover:bg-surface-container-high hover:text-primary"
                  >
                    <Code2 className="h-3.5 w-3.5" />
                    <span>Code</span>
                  </Button>
                )}

                {project.live ? (
                  <Button
                    size="sm"
                    onClick={() => window.open(project.live, "_blank")}
                    className="shadow-xs inline-flex items-center gap-1.5 rounded-lg bg-primary px-space-md py-1.5 font-label-sm text-label-sm text-on-primary transition-colors hover:bg-primary-container hover:text-on-primary-container"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    disabled
                    className="cursor-not-allowed rounded-lg bg-surface-container-high px-space-md py-1.5 font-label-sm text-label-sm text-on-surface-variant opacity-70"
                  >
                    <span>In Development</span>
                  </Button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
