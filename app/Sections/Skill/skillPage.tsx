"use client";

import { useState, useMemo } from "react";
import {
  Monitor,
  Terminal,
  Database,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { skills } from "@/app/Sections/Skill/skillsIcons";

const CATEGORY_FILTERS = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "DevOps & Tools",
] as const;

type CategoryFilter = (typeof CATEGORY_FILTERS)[number];

function getSkillGroup(
  category: string
): "Frontend" | "Backend" | "Database" | "DevOps & Tools" {
  switch (category) {
    case "Frontend":
    case "Framework":
      return "Frontend";
    case "Backend":
    case "API":
    case "ORM":
      return "Backend";
    case "Database":
      return "Database";
    case "DevOps":
    case "Version Control":
    case "System":
    case "Infrastructure":
    case "Deployment":
    case "Workspace":
      return "DevOps & Tools";
    case "Language":
      return "Frontend";
    default:
      return "DevOps & Tools";
  }
}

function renderSkillIcon(skill: (typeof skills)[number]) {
  if (skill.icon) {
    const Icon = skill.icon;
    return (
      <Icon
        className={`h-full w-full object-contain transition-transform duration-300 ${
          skill.invertDark ? "dark:brightness-0 dark:invert" : ""
        }`}
      />
    );
  }

  if (!skill.image) {
    return (
      <span className="text-base font-bold text-primary dark:text-primary-fixed">
        {skill.name.charAt(0)}
      </span>
    );
  }

  if (
    typeof skill.image === "string" &&
    skill.image.trim().startsWith("<svg")
  ) {
    return (
      <div
        className="flex h-full w-full items-center justify-center"
        dangerouslySetInnerHTML={{ __html: skill.image }}
      />
    );
  }

  return (
    <img
      src={skill.image || "/placeholder.svg"}
      alt={skill.name}
      className={`h-full w-full object-contain ${
        skill.invertDark ? "dark:brightness-0 dark:invert" : ""
      }`}
      loading="lazy"
    />
  );
}

interface SkillsSectionProps {
  readonly defaultOpen?: boolean;
}

export default function SkillsSection({
  defaultOpen = false,
}: Readonly<SkillsSectionProps> = {}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("All");

  const filteredSkills = useMemo(() => {
    if (selectedCategory === "All") return skills;
    return skills.filter(
      (skill) => getSkillGroup(skill.category) === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section
      id="tech-stack"
      className="w-full bg-surface-container-low py-space-3xl shadow-inner transition-colors duration-300"
    >
      <div className="mx-auto max-w-[1360px] px-margin md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Header */}
        <div className="mb-space-2xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div className="flex max-w-xl flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-secondary">
              03 // Technical Arsenal
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              <span className="sr-only">Skills &amp; Technologies: </span>
              Capabilities &amp; Stack Matrix
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Disciplined selection of languages, frameworks, and deployment
              runtimes validated in production scale applications.
            </p>
          </div>

          <div className="flex items-center gap-space-xs">
            <span className="h-2 w-2 rounded-full bg-secondary"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              Continuous Mastery Track
            </span>
          </div>
        </div>

        {/* 4 Pillars Grid Matching Portfolio Design */}
        <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-4">
          {/* Pillar 1: Frontend */}
          <div className="border-surface-container-high/60 flex flex-col gap-space-md rounded-xl border bg-surface p-space-lg shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Frontend
              </h3>
              <Monitor className="h-5 w-5 text-secondary" />
            </div>
            <div className="flex flex-wrap gap-space-xs">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Vue.js",
                "JavaScript",
              ].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 rounded-full bg-surface-container px-space-sm py-1 font-label-sm text-label-sm text-on-surface"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>{" "}
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex flex-col gap-1 pt-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <span className="font-label-sm text-label-sm font-semibold uppercase text-on-surface">
                Proficiency
              </span>
              <span>
                SSR / SSG paradigms, state reconciliation, declarative layout
                systems.
              </span>
            </div>
          </div>

          {/* Pillar 2: Backend */}
          <div className="border-surface-container-high/60 flex flex-col gap-space-md rounded-xl border bg-surface p-space-lg shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Backend
              </h3>
              <Terminal className="h-5 w-5 text-secondary" />
            </div>
            <div className="flex flex-wrap gap-space-xs">
              {[
                "Node.js",
                "Express.js",
                "GraphQL",
                "Prisma",
                "Python",
                "RESTful APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 rounded-full bg-surface-container px-space-sm py-1 font-label-sm text-label-sm text-on-surface"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>{" "}
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex flex-col gap-1 pt-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <span className="font-label-sm text-label-sm font-semibold uppercase text-on-surface">
                Proficiency
              </span>
              <span>
                REST/RPC design, asynchronous workers, auth flows (JWT/OAuth2).
              </span>
            </div>
          </div>

          {/* Pillar 3: Database */}
          <div className="border-surface-container-high/60 flex flex-col gap-space-md rounded-xl border bg-surface p-space-lg shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Database
              </h3>
              <Database className="h-5 w-5 text-secondary" />
            </div>
            <div className="flex flex-wrap gap-space-xs">
              {["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Redis"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-full bg-surface-container px-space-sm py-1 font-label-sm text-label-sm text-on-surface"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>{" "}
                    {tech}
                  </span>
                )
              )}
            </div>
            <div className="mt-auto flex flex-col gap-1 pt-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <span className="font-label-sm text-label-sm font-semibold uppercase text-on-surface">
                Proficiency
              </span>
              <span>
                Relational schema modeling, index optimization, caching tiers.
              </span>
            </div>
          </div>

          {/* Pillar 4: DevOps & Tools */}
          <div className="border-surface-container-high/60 flex flex-col gap-space-md rounded-xl border bg-surface p-space-lg shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-sm text-headline-sm text-primary">
                DevOps &amp; Tools
              </h3>
              <ShieldCheck className="h-5 w-5 text-secondary" />
            </div>
            <div className="flex flex-wrap gap-space-xs">
              {[
                "Docker",
                "Git",
                "GitHub",
                "Linux",
                "Vercel",
                "Cloudflare",
                "NX Workspace",
              ].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 rounded-full bg-surface-container px-space-sm py-1 font-label-sm text-label-sm text-on-surface"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>{" "}
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex flex-col gap-1 pt-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <span className="font-label-sm text-label-sm font-semibold uppercase text-on-surface">
                Proficiency
              </span>
              <span>
                Strict semantic standards, defensive error boundaries,
                continuous CI/CD.
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Ecosystem Dropdown / Accordion Section */}
        <div className="mt-space-2xl pt-space-md">
          <div className="border-surface-container-high/80 overflow-hidden rounded-2xl border bg-surface shadow-sm transition-all duration-300">
            {/* Interactive Dropdown Header Button */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="detailed-ecosystem-content"
              className="hover:bg-surface-container/40 flex w-full items-center justify-between p-space-md text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:p-space-lg"
            >
              <div className="flex flex-col gap-1 pr-4">
                <div className="flex flex-wrap items-center gap-space-sm">
                  <span className="font-headline-sm text-headline-sm text-primary">
                    Detailed Ecosystem
                  </span>
                  <span className="inline-flex items-center rounded-full bg-surface-container px-2.5 py-0.5 font-label-sm text-label-sm font-medium text-secondary">
                    {skills.length} Validated Technologies
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Explore full granular stack matrix across libraries,
                  frameworks, databases, and deployment runtimes.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <span className="hidden font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant sm:inline">
                  {isOpen ? "Collapse Details" : "Expand Details"}
                </span>
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg bg-surface-container text-on-surface transition-transform duration-300 ${
                    isOpen
                      ? "rotate-180 bg-surface-container-high text-primary"
                      : ""
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </button>

            {/* Dropdown Content Area */}
            {isOpen && (
              <div
                id="detailed-ecosystem-content"
                className="border-surface-container-high/60 bg-surface-container-low/20 border-t p-space-md transition-all duration-300 sm:p-space-lg"
              >
                {/* Category Filters */}
                <div className="mb-space-md flex flex-col gap-space-sm sm:flex-row sm:items-center sm:justify-between">
                  <div className="scrollbar-none flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {CATEGORY_FILTERS.map((cat) => {
                      const isSelected = selectedCategory === cat;
                      return (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setSelectedCategory(cat)}
                          className={`rounded-full px-3 py-1 font-label-sm text-label-sm font-medium transition-all duration-200 ${
                            isSelected
                              ? "shadow-xs bg-primary text-on-primary"
                              : "border border-surface-container-high bg-surface text-on-surface-variant hover:bg-surface-container hover:text-primary"
                          }`}
                        >
                          {cat}
                        </button>
                      );
                    })}
                  </div>

                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Showing {filteredSkills.length} of {skills.length} items
                  </span>
                </div>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                  {filteredSkills.map((skill) => (
                    <a
                      key={skill.name}
                      href={skill.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-surface-container-high/70 shadow-xs group flex flex-col items-center justify-center rounded-xl border bg-surface p-3 transition-all duration-300 hover:border-surface-container-highest hover:bg-surface-container hover:shadow-sm"
                    >
                      <div className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg p-1 transition-transform duration-300 group-hover:scale-110">
                        {renderSkillIcon(skill)}
                      </div>
                      <span className="text-center font-label-sm text-label-sm font-medium text-on-surface transition-colors group-hover:text-primary">
                        {skill.name}
                      </span>
                      <span className="text-on-surface-variant/75 text-[10px]">
                        {skill.category}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
