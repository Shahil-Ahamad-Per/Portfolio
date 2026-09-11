"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-surface-container-high/60 mt-space-3xl w-full border-t bg-surface-container-low shadow-[0_-1px_6px_rgba(0,0,0,0.02)] transition-colors duration-300">
      <div className="mx-auto max-w-[1360px] px-margin py-space-2xl md:px-margin-tablet lg:px-margin-desktop">
        <div className="mb-space-2xl grid grid-cols-1 items-start gap-gutter-desktop md:grid-cols-12">
          {/* Identity & Mission */}
          <div className="flex flex-col gap-space-sm md:col-span-5">
            <div className="flex items-center gap-space-sm">
              <span className="font-headline-md text-headline-md text-primary">
                Shahil Ahamad
              </span>
            </div>
            <p className="max-w-sm font-body-md text-body-md text-on-surface-variant">
              Full-stack web developer and software engineer building
              deliberate, performance-minded architectural experiences.
            </p>
          </div>

          {/* Navigation & Inquiries */}
          <div className="flex flex-col gap-space-xs md:col-span-4">
            <span className="mb-space-xs font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
              Inquiries &amp; Navigation
            </span>
            <div className="flex flex-wrap gap-x-space-md gap-y-space-xs">
              <a
                className="font-label-md text-label-md text-on-surface transition-colors hover:text-primary"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="font-label-md text-label-md text-on-surface transition-colors hover:text-primary"
                href="#experience"
              >
                Experience
              </a>
              <a
                className="font-label-md text-label-md text-on-surface transition-colors hover:text-primary"
                href="#tech-stack"
              >
                Tech Stack
              </a>
              <a
                className="font-label-md text-label-md text-on-surface transition-colors hover:text-primary"
                href="#blog"
                aria-label="Footer Blog"
              >
                Blog
              </a>
              <a
                className="font-label-md text-label-md text-on-surface transition-colors hover:text-primary"
                href="https://github.com/Shahil-Ahamad-Per"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="font-label-md text-label-md text-on-surface transition-colors hover:text-primary"
                href="https://linkedin.com/in/shahil-ahamad"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="font-label-md text-label-md text-on-surface transition-colors hover:text-primary"
                href="mailto:contact@shahilahamad.com.np"
              >
                Email
              </a>
            </div>
          </div>

          {/* Back to Top */}
          <div className="flex items-start md:col-span-3 md:justify-end">
            <button
              type="button"
              onClick={handleBackToTop}
              className="shadow-xs inline-flex items-center gap-space-xs rounded-lg bg-surface-container px-space-md py-2 font-label-md text-label-md text-on-surface transition-colors hover:bg-surface-container-high hover:text-primary"
            >
              <ArrowUp className="h-4 w-4" />
              <span>Back to top</span>
            </button>
          </div>
        </div>

        {/* Legal & DMCA Verification */}
        <div className="border-surface-container-high/60 flex flex-col items-center justify-between gap-space-sm border-t pt-space-lg sm:flex-row">
          <a
            href="https://www.dmca.com/r/g70zll2"
            title="DMCA.com Protection Status"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-sm text-label-sm text-on-surface-variant transition-colors hover:text-primary"
          >
            Copyright © {currentYear} Shahil Ahamad. Engineered with precision.
            Crafted with passion and attention to detail.
          </a>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            Crafted with Archival &amp; Editorial Poise
          </span>
        </div>
      </div>
    </footer>
  );
}
