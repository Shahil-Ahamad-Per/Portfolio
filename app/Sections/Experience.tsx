"use client";

import { Briefcase, CheckCircle2 } from "lucide-react";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-[1360px] px-margin py-space-3xl md:px-margin-tablet lg:px-margin-desktop"
    >
      <div className="grid grid-cols-1 items-start gap-gutter-desktop lg:grid-cols-12">
        {/* Left Anchor */}
        <div className="flex flex-col gap-space-sm lg:col-span-4">
          <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-secondary">
            04 // Chronology
          </span>
          <h2 className="font-headline-lg text-headline-lg leading-tight text-primary">
            Career &amp; Production Track
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            A progression of engineering accountability across early-stage
            digital products, agencies, and independent contracting.
          </p>

          <div className="border-surface-container-high/70 shadow-xs mt-space-md rounded-xl border bg-surface-container-low p-space-md">
            <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-primary">
              Engagement Modes
            </span>
            <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
              Available for direct contract consultation, fractional engineering
              leadership, and high-impact full-time engineering roles.
            </p>
          </div>
        </div>

        {/* Right Timeline Column */}
        <div className="flex flex-col gap-space-lg lg:col-span-8">
          <div className="border-surface-container-high/70 flex flex-col gap-space-sm rounded-xl border bg-surface-container-low p-space-lg shadow-sm transition-all hover:border-surface-container-highest hover:bg-surface-container hover:shadow-md">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary">
                  Full Stack Web Developer
                </span>
                <span className="font-label-md text-label-md font-semibold text-secondary">
                  Skillprompt • Engineering
                </span>
              </div>
              <div className="shadow-xs inline-flex items-center gap-space-xs self-start rounded bg-surface px-2.5 py-1 font-label-sm text-label-sm text-on-surface sm:self-auto">
                <span>2024 - Present</span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </div>
            </div>

            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
              Focused on developing robust, scalable full-stack web
              applications, modern interactive interfaces, and resilient backend
              APIs using Next.js, Node.js, TypeScript, PostgreSQL, and cloud
              deployments.
            </p>

            <div className="flex flex-wrap gap-space-xs pt-space-xs">
              {[
                "Next.js",
                "React",
                "Node.js",
                "TypeScript",
                "PostgreSQL",
                "REST APIs",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="shadow-xs rounded bg-surface px-2.5 py-0.5 font-label-sm text-label-sm text-on-surface-variant"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
