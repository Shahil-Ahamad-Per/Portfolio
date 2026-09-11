"use client";

import { Code2, Server, Cloud, Smartphone } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-surface-container-low py-space-3xl shadow-inner transition-colors duration-300"
    >
      <div className="mx-auto max-w-[1360px] px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 items-start gap-gutter-desktop lg:grid-cols-12">
          {/* Left Column: Editorial Manifesto & Portrait */}
          <div className="flex flex-col gap-space-md lg:col-span-6">
            <div className="flex items-center gap-space-xs">
              <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-secondary">
                01 // Architectural Creed
              </span>
            </div>

            <h2 className="font-headline-lg text-headline-lg leading-tight text-primary">
              <span className="sr-only">About Me: </span>
              Bridging refined modern design with resilient, modular backend
              architecture.
            </h2>

            {/* Compact Architectural Profile Badge */}
            <div className="border-surface-container-high/60 flex items-center gap-space-md rounded-xl border bg-surface p-space-md shadow-sm">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-surface-container p-0.5">
                <img
                  src="/profile.jpg"
                  alt="Shahil Ahamad"
                  className="h-full w-full rounded-md object-cover shadow-inner"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm leading-none text-primary">
                  Shahil Ahamad
                </span>
                <span className="mt-1 font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">
                  Engineering &amp; System Craft
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Available for full-stack engagements &amp; architecture.
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-space-sm font-body-md text-body-md leading-relaxed text-on-surface-variant">
              <p>
                I regard web development not as assembly-line templating, but as
                intentional software craftsmanship. Every line of code impacts
                user retention, engine accessibility, and systems
                maintainability over years of product growth.
              </p>
              <p>
                My methodology pairs tactile micro-interactions and typographic
                cadence with rigorous data validation, distributed caching
                layers, and scalable cloud deployments. Whether architecting a
                high-concurrency engine or fine-tuning responsive interfaces,
                the north star remains uncompromised:{" "}
                <strong className="font-semibold text-on-surface">
                  clarity, performance, and operational reliability
                </strong>
                .
              </p>
              <p className="text-on-surface-variant/90 border-primary/30 border-l-2 pl-3 text-body-sm italic">
                I'm Shahil Ahamad, a passionate full-stack developer who loves
                creating digital solutions that combine beautiful design with
                robust functionality. My expertise spans modern JavaScript
                frameworks, backend systems, and database management. When I'm
                not coding, you'll find me exploring new technologies,
                contributing to open source projects, or sharing technical
                insights.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Code & Focus Area Mosaic */}
          <div className="flex flex-col gap-space-md lg:col-span-6">
            {/* Terminal / Architectural Shell */}
            <div className="overflow-hidden rounded-xl bg-inverse-surface text-inverse-on-surface shadow-md">
              {/* Window Bar */}
              <div className="flex items-center justify-between bg-tertiary px-space-md py-space-sm text-on-tertiary">
                <div className="flex items-center gap-space-xs">
                  <span className="h-2.5 w-2.5 rounded-full bg-error" />
                  <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary-fixed" />
                  <span className="ml-2 font-label-sm text-label-sm text-on-tertiary-container">
                    shahil-ahamad.system.ts
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-on-tertiary-container opacity-75">
                  Production Engine
                </span>
              </div>

              {/* Code Block Body */}
              <div className="overflow-x-auto p-space-md font-label-md text-label-md leading-relaxed">
                <div className="text-on-tertiary-container">
                  <span className="text-secondary-fixed">interface</span>{" "}
                  <span className="text-primary-fixed">
                    EngineeringBlueprint
                  </span>{" "}
                  {"{"}
                </div>
                <div className="pl-4 text-inverse-on-surface">
                  specialization:{" "}
                  <span className="text-secondary-fixed">
                    "Full-Stack Architecture &amp; Interfaces"
                  </span>
                  ;
                </div>
                <div className="pl-4 text-inverse-on-surface">
                  architecture:{" "}
                  <span className="text-secondary-fixed">
                    "Distributed / Cloud-Native"
                  </span>
                  ;
                </div>
                <div className="pl-4 text-inverse-on-surface">
                  stackCore: [
                  <span className="text-primary-fixed">"Next.js"</span>,{" "}
                  <span className="text-primary-fixed">"TypeScript"</span>,{" "}
                  <span className="text-primary-fixed">"Node.js"</span>,{" "}
                  <span className="text-primary-fixed">"PostgreSQL"</span>
                  ];
                </div>
                <div className="pl-4 text-inverse-on-surface">
                  corePrinciples: [
                </div>
                <div className="pl-8 text-secondary-fixed-dim">
                  "Semantic purity &amp; WCAG AA compliance",
                </div>
                <div className="pl-8 text-secondary-fixed-dim">
                  "Zero-tolerance performance bottlenecks",
                </div>
                <div className="pl-8 text-secondary-fixed-dim">
                  "Scalable microservice / serverless paradigms"
                </div>
                <div className="pl-4 text-inverse-on-surface">];</div>
                <div className="pl-4 text-inverse-on-surface">
                  activeState:{" "}
                  <span className="text-secondary-fixed">
                    "READY_FOR_COMMISSION"
                  </span>
                  ;
                </div>
                <div className="text-on-tertiary-container">{"}"}</div>
              </div>
            </div>

            {/* Focus Area 4-Card Mosaic */}
            <div className="grid grid-cols-1 gap-space-sm pt-space-xs sm:grid-cols-2">
              <div className="flex flex-col gap-1 rounded-lg bg-surface p-space-md shadow-sm transition-colors hover:bg-surface-container">
                <div className="flex items-center gap-space-xs text-primary">
                  <Code2 className="h-4 w-4 text-primary" />
                  <span className="font-label-md text-label-md font-bold">
                    Frontend Engineering
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Next.js 14, React, State trees, Tailwind utility
                  architectures, fluid animations.
                </p>
              </div>

              <div className="flex flex-col gap-1 rounded-lg bg-surface p-space-md shadow-sm transition-colors hover:bg-surface-container">
                <div className="flex items-center gap-space-xs text-primary">
                  <Server className="h-4 w-4 text-primary" />
                  <span className="font-label-md text-label-md font-bold">
                    Backend Systems
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Node.js, Express, Python, REST &amp; GraphQL engines, token
                  auth pipelines.
                </p>
              </div>

              <div className="flex flex-col gap-1 rounded-lg bg-surface p-space-md shadow-sm transition-colors hover:bg-surface-container">
                <div className="flex items-center gap-space-xs text-primary">
                  <Cloud className="h-4 w-4 text-primary" />
                  <span className="font-label-md text-label-md font-bold">
                    Cloud &amp; APIs
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  PostgreSQL, Supabase, Redis cache tiers, Dockerization,
                  serverless CI/CD.
                </p>
              </div>

              <div className="flex flex-col gap-1 rounded-lg bg-surface p-space-md shadow-sm transition-colors hover:bg-surface-container">
                <div className="flex items-center gap-space-xs text-primary">
                  <Smartphone className="h-4 w-4 text-primary" />
                  <span className="font-label-md text-label-md font-bold">
                    Responsive UI/UX
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Pixel-perfect ergonomics, accessible design systems, editorial
                  typography.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
