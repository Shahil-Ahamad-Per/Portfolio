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
      className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 animate-slideUp"
    >
      <div className="container mx-auto text-center max-w-5xl">
        <div className="mb-8 sm:mb-10">
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100/80 dark:bg-slate-800/80 border border-sage-200 dark:border-slate-700 text-sage-800 dark:text-gold-400 text-xs sm:text-sm font-medium mb-6 animate-fadeInUp shadow-sm">
            <span className="w-2 h-2 rounded-full bg-sage-500 dark:bg-gold-400 animate-ping"></span>
            Available for New Projects
          </div> */}

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-charcoal-900 dark:text-slate-100 mb-4 sm:mb-6 leading-[1.15] tracking-tight animate-fadeInUp">
            Shahil
            <span className="text-sage-600 dark:text-gold-400 font-serif">
              {" "}
              Ahamad
            </span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-charcoal-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200 px-2">
            Full-Stack Developer passionate about creating elegant digital
            experiences with modern technologies
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 mb-10 sm:mb-12 animate-fadeInUp animation-delay-400 max-w-md sm:max-w-none mx-auto">
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-sage-600 hover:bg-sage-700 dark:bg-gold-600 dark:hover:bg-gold-700 text-white px-7 py-3.5 h-12 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 shadow-md shadow-sage-600/20 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <span>View My Work</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-sage-300 text-charcoal-800 hover:bg-sage-100/70 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 px-7 py-3.5 h-12 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            Get In Touch
          </Button>
        </div>

        {/* Mobile-enhanced Social Links */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 animate-fadeInUp animation-delay-600">
          <a
            href="https://github.com/Shahil-Ahamad-Per"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-sage-200/80 dark:border-slate-700 text-charcoal-700 dark:text-slate-300 hover:text-sage-600 dark:hover:text-gold-400 hover:border-sage-400 dark:hover:border-gold-500 shadow-sm active:scale-95 transition-all text-xs sm:text-sm font-medium"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/shahil-ahamad/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-sage-200/80 dark:border-slate-700 text-charcoal-700 dark:text-slate-300 hover:text-sage-600 dark:hover:text-gold-400 hover:border-sage-400 dark:hover:border-gold-500 shadow-sm active:scale-95 transition-all text-xs sm:text-sm font-medium"
          >
            <Linkedin className="h-4 w-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="mailto:contact@shahilahamad.com.np"
            target="_blank"
            aria-label="Send Email"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-sage-200/80 dark:border-slate-700 text-charcoal-700 dark:text-slate-300 hover:text-sage-600 dark:hover:text-gold-400 hover:border-sage-400 dark:hover:border-gold-500 shadow-sm active:scale-95 transition-all text-xs sm:text-sm font-medium"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
