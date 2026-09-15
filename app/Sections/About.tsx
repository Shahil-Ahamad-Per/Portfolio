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
            <div className="group relative overflow-hidden rounded-xl border border-[#23352d] bg-[#0c1411] shadow-xl transition-all duration-300 hover:border-emerald-500/40 dark:border-emerald-500/25 dark:shadow-2xl dark:shadow-emerald-950/40">
              {/* Subtle ambient highlight glow */}
              <div className="pointer-events-none absolute -top-16 right-0 h-32 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

              {/* Window Bar */}
              <div className="flex items-center gap-2 border-b border-white/[0.08] bg-[#0f1a16] px-4 py-3">
                {/* macOS traffic dots */}
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/90" />
                </div>
                <span className="ml-1 font-mono text-xs text-slate-400">
                  shahil-ahamad.system.ts
                </span>
              </div>

              {/* Code Block Body */}
              <div className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-slate-200 sm:p-5 sm:text-[13px]">
                <div className="flex items-start gap-4">
                  {/* Line Numbers */}
                  <div
                    className="flex select-none flex-col space-y-1.5 border-r border-white/[0.08] pr-3 text-right font-mono text-xs text-slate-600 dark:text-emerald-500/35"
                    aria-hidden="true"
                  >
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                    <span>11</span>
                  </div>

                  {/* Highlighted Code */}
                  <div className="flex min-w-max flex-col space-y-1.5 font-mono text-xs text-slate-200 sm:text-[13px]">
                    <div>
                      <span className="font-semibold text-amber-400">
                        interface
                      </span>{" "}
                      <span className="font-semibold text-teal-300">
                        EngineeringBlueprint
                      </span>{" "}
                      <span className="text-slate-400">{"{"}</span>
                    </div>

                    <div className="pl-4">
                      <span className="text-slate-300">specialization</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-emerald-300">
                        "Full-Stack Architecture &amp; Interfaces"
                      </span>
                      <span className="text-slate-500">;</span>
                    </div>

                    <div className="pl-4">
                      <span className="text-slate-300">architecture</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-emerald-300">
                        "Distributed / Cloud-Native"
                      </span>
                      <span className="text-slate-500">;</span>
                    </div>

                    <div className="pl-4">
                      <span className="text-slate-300">stackCore</span>
                      <span className="text-slate-500">: [</span>
                      <span className="text-teal-200">"Next.js"</span>
                      <span className="text-slate-500">, </span>
                      <span className="text-teal-200">"TypeScript"</span>
                      <span className="text-slate-500">, </span>
                      <span className="text-teal-200">"Node.js"</span>
                      <span className="text-slate-500">, </span>
                      <span className="text-teal-200">"PostgreSQL"</span>
                      <span className="text-slate-500">];</span>
                    </div>

                    <div className="pl-4">
                      <span className="text-slate-300">corePrinciples</span>
                      <span className="text-slate-500">: [</span>
                    </div>

                    <div className="pl-8">
                      <span className="text-amber-200/90">
                        "Semantic purity &amp; WCAG AA compliance"
                      </span>
                      <span className="text-slate-500">,</span>
                    </div>

                    <div className="pl-8">
                      <span className="text-amber-200/90">
                        "Zero-tolerance performance bottlenecks"
                      </span>
                      <span className="text-slate-500">,</span>
                    </div>

                    <div className="pl-8">
                      <span className="text-amber-200/90">
                        "Scalable microservice / serverless paradigms"
                      </span>
                    </div>

                    <div className="pl-4">
                      <span className="text-slate-500">];</span>
                    </div>

                    <div className="pl-4">
                      <span className="text-slate-300">activeState</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-emerald-300">
                        "READY_FOR_COMMISSION"
                      </span>
                      <span className="text-slate-500">;</span>
                    </div>

                    <div>
                      <span className="text-slate-400">{"}"}</span>
                    </div>
                  </div>
                </div>
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
