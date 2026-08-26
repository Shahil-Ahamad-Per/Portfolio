"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="animate-slideUp flex min-h-screen items-center justify-center px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24"
    >
      <div className="container mx-auto max-w-5xl text-center">
        <div className="mb-8 sm:mb-10">
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100/80 dark:bg-slate-800/80 border border-sage-200 dark:border-slate-700 text-sage-800 dark:text-gold-400 text-xs sm:text-sm font-medium mb-6 animate-fadeInUp shadow-sm">
            <span className="w-2 h-2 rounded-full bg-sage-500 dark:bg-gold-400 animate-ping"></span>
            Available for New Projects
          </div> */}

          <h1 className="animate-fadeInUp mb-4 font-serif text-4xl font-bold leading-[1.15] tracking-tight text-charcoal-900 dark:text-slate-100 sm:mb-6 sm:text-6xl md:text-7xl lg:text-8xl">
            Shahil
            <span className="font-serif text-sage-600 dark:text-gold-400">
              {" "}
              Ahamad
            </span>
          </h1>
          <p className="animate-fadeInUp animation-delay-200 mx-auto max-w-3xl px-2 text-base leading-relaxed text-charcoal-600 dark:text-slate-300 sm:text-xl md:text-2xl">
            Full-Stack Developer passionate about creating elegant digital
            experiences with modern technologies
          </p>
        </div>

        <div className="animate-fadeInUp animation-delay-400 mx-auto mb-10 flex max-w-md flex-col justify-center gap-3 sm:mb-12 sm:max-w-none sm:flex-row sm:gap-5">
          <Button
            onClick={() => scrollToSection("projects")}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-sage-600 px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-sage-600/20 transition-all duration-300 hover:scale-105 hover:bg-sage-700 hover:shadow-lg active:scale-95 dark:bg-gold-600 dark:hover:bg-gold-700 sm:w-auto"
          >
            <span>View My Work</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="h-12 w-full rounded-xl border-sage-300 px-7 py-3.5 text-base font-semibold text-charcoal-800 transition-all duration-300 hover:scale-105 hover:bg-sage-100/70 active:scale-95 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 sm:w-auto"
          >
            Get In Touch
          </Button>
        </div>

        {/* Mobile-enhanced Social Links */}
        <div className="animate-fadeInUp animation-delay-600 flex items-center justify-center gap-3 sm:gap-4">
          <a
            href="https://github.com/Shahil-Ahamad-Per"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center gap-2 rounded-xl border border-sage-200/80 bg-white/70 px-4 py-2.5 text-xs font-medium text-charcoal-700 shadow-sm transition-all hover:border-sage-400 hover:text-sage-600 active:scale-95 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:border-gold-500 dark:hover:text-gold-400 sm:text-sm"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/shahil-ahamad/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex items-center gap-2 rounded-xl border border-sage-200/80 bg-white/70 px-4 py-2.5 text-xs font-medium text-charcoal-700 shadow-sm transition-all hover:border-sage-400 hover:text-sage-600 active:scale-95 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:border-gold-500 dark:hover:text-gold-400 sm:text-sm"
          >
            <Linkedin className="h-4 w-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="mailto:contact@shahilahamad.com.np"
            target="_blank"
            aria-label="Send Email"
            className="flex items-center gap-2 rounded-xl border border-sage-200/80 bg-white/70 px-4 py-2.5 text-xs font-medium text-charcoal-700 shadow-sm transition-all hover:border-sage-400 hover:text-sage-600 active:scale-95 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:border-gold-500 dark:hover:text-gold-400 sm:text-sm"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
