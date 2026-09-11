"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

interface HeroSectionProps {
  readonly scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({
  scrollToSection,
}: Readonly<HeroSectionProps>) {
  return (
    <div className="relative w-full overflow-hidden" id="home">
      {/* Top Ambient Scrim & Editorial Decorative Glow */}
      <div className="from-primary-fixed/25 via-secondary-fixed/15 pointer-events-none absolute -top-24 left-1/2 -z-10 h-[340px] w-[850px] -translate-x-1/2 rounded-full bg-gradient-to-b to-transparent blur-3xl"></div>

      <section className="mx-auto max-w-[1360px] px-margin pb-space-2xl pt-space-xl md:px-margin-tablet md:pt-space-2xl lg:px-margin-desktop">
        <div className="flex max-w-4xl flex-col items-start gap-space-lg">
          {/* Editorial Headline */}
          <h1
            aria-label="Shahil Ahamad - Crafting intentional digital experiences through thoughtful engineering & robust web architecture"
            className="text-balance font-display text-display-mobile leading-[1.08] tracking-tight text-primary md:text-display"
          >
            <span className="sr-only">Shahil Ahamad - </span>
            Crafting intentional digital experiences through thoughtful
            engineering &amp; robust web architecture.
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-balance font-body-lg text-body-lg text-on-surface-variant">
            Hi, I’m{" "}
            <strong className="font-semibold text-on-surface">
              Shahil Ahamad
            </strong>
            . A Full-Stack Developer passionate about creating elegant digital
            experiences, performant web applications, resilient distributed
            services, and tactile, high-craft interfaces.
          </p>

          {/* CTAs & Fast Social Links */}
          <div className="flex w-full flex-wrap items-center gap-space-md pt-space-xs">
            <Button
              onClick={() => scrollToSection("projects")}
              aria-label="View My Work"
              className="inline-flex h-auto items-center gap-space-xs rounded-lg bg-primary px-space-lg py-3 font-label-lg text-label-lg text-on-primary shadow-sm transition-all hover:bg-primary-container hover:text-on-primary-container"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="h-4 w-4" />
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              aria-label="Get In Touch"
              variant="outline"
              className="inline-flex h-auto items-center gap-space-xs rounded-lg bg-surface-container px-space-lg py-3 font-label-lg text-label-lg text-on-surface shadow-sm transition-all hover:bg-surface-container-high"
            >
              <Mail className="h-4 w-4" />
              <span>Get In Touch</span>
            </Button>

            <div className="ml-auto flex items-center gap-space-sm pt-space-xs sm:pt-0">
              <span className="hidden font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant sm:inline">
                Connect —
              </span>
              <a
                className="rounded-lg bg-surface-container p-2 text-on-surface transition-colors hover:bg-surface-container-high hover:text-primary"
                href="https://github.com/Shahil-Ahamad-Per"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                className="rounded-lg bg-surface-container p-2 text-on-surface transition-colors hover:bg-surface-container-high hover:text-primary"
                href="https://www.linkedin.com/in/shahil-ahamad/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                className="rounded-lg bg-surface-container p-2 text-on-surface transition-colors hover:bg-surface-container-high hover:text-primary"
                href="mailto:contact@shahilahamad.com.np"
                aria-label="Send Email"
                title="Direct Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Stats Bar Matrix */}
          <div className="grid w-full grid-cols-2 gap-space-md pt-space-lg md:grid-cols-3">
            <div className="flex flex-col gap-1 rounded-xl bg-surface-container p-space-md shadow-sm transition-transform hover:-translate-y-0.5">
              <span className="font-headline-lg text-headline-lg leading-none text-primary">
                3<span className="font-headline-sm text-secondary">+</span>
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Years Industry Craft
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Full-Stack &amp; Product Scope
              </span>
            </div>

            <div className="flex flex-col gap-1 rounded-xl bg-surface-container p-space-md shadow-sm transition-transform hover:-translate-y-0.5">
              <span className="font-headline-lg text-headline-lg leading-none text-primary">
                25<span className="font-headline-sm text-secondary">+</span>
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Production Releases
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Web Apps, SaaS &amp; APIs
              </span>
            </div>

            <div className="col-span-2 flex flex-col gap-1 rounded-xl bg-surface-container p-space-md shadow-sm transition-transform hover:-translate-y-0.5 md:col-span-1">
              <span className="font-headline-lg text-headline-lg leading-none text-primary">
                100<span className="font-headline-sm text-secondary">%</span>
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Project Delivery
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Tested, Type-Safe &amp; Scalable
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
