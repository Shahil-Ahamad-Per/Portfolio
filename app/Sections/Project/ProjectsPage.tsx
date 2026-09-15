"use client";

import { ExternalLink, Code2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "./Projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-[1360px] px-margin py-space-3xl md:px-margin-tablet lg:px-margin-desktop"
    >
      {/* Section Header */}
      <div className="mb-space-2xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
        <div className="flex max-w-2xl flex-col gap-space-xs">
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
          <span className="rounded-full bg-surface-container px-3 py-1 font-label-sm text-label-sm font-medium text-primary">
            {projects.length} Featured Projects
          </span>
        </div>
      </div>

      {/* Projects List (Clean, Professional, Non-Card Layout) */}
      <div className="divide-surface-container-high/70 border-surface-container-high/80 divide-y border-y">
        {projects.map((project) => {
          const isComingSoon =
            project.status === "Coming Soon" ||
            project.status === "Work In Progress";

          return (
            <article
              key={project.title}
              className="hover:bg-surface-container-low/40 group relative -mx-space-md flex flex-col justify-between gap-space-md rounded-xl px-space-md py-space-lg transition-all duration-300 sm:py-space-xl md:flex-row md:items-center"
            >
              {/* Left Content: Title, Description & Tech Stack */}
              <div className="flex max-w-3xl flex-col gap-space-xs">
                {/* Title and Status Badge */}
                <div className="flex flex-wrap items-center gap-space-sm">
                  <h3 className="font-headline-sm text-headline-sm text-primary transition-colors group-hover:text-primary-container">
                    {project.title}
                  </h3>

                  {isComingSoon && (
                    <span className="bg-secondary-container/80 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-label-sm text-label-sm font-medium text-on-secondary-container">
                      <Clock className="h-3 w-3" />
                      {project.status === "Work In Progress"
                        ? "In Dev"
                        : "Soon"}
                    </span>
                  )}
                </div>

                {/* Small Description */}
                <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="mt-1 flex flex-wrap items-center gap-1.5 pt-space-xs">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="border-surface-container-high/80 bg-surface-container-low/70 text-on-surface-variant/90 group-hover:border-primary/30 rounded-md border px-2.5 py-0.5 font-mono text-[11px] font-medium transition-colors group-hover:text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Content: Action Buttons */}
              <div className="flex shrink-0 items-center gap-2.5 pt-space-xs md:pt-0">
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.github, "_blank")}
                    className="shadow-xs inline-flex items-center gap-1.5 rounded-lg border-surface-container-high bg-surface px-3.5 py-1.5 font-label-sm text-label-sm text-on-surface transition-colors hover:border-surface-container-highest hover:bg-surface-container hover:text-primary"
                  >
                    <Code2 className="h-3.5 w-3.5" />
                    <span>Code</span>
                  </Button>
                )}

                {project.live ? (
                  <Button
                    size="sm"
                    onClick={() => window.open(project.live, "_blank")}
                    className="shadow-xs inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-1.5 font-label-sm text-label-sm text-on-primary transition-all hover:bg-primary-container hover:text-on-primary-container"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    disabled
                    className="cursor-not-allowed rounded-lg bg-surface-container-high px-4 py-1.5 font-label-sm text-label-sm text-on-surface-variant opacity-70"
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
