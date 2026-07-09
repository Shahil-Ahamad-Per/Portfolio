import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-20 px-6 animate-slideUp"
    >
      <div className="container mx-auto text-center max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-charcoal-800 dark:text-slate-100 mb-4 sm:mb-6 leading-tight animate-fadeInUp hover:scale-105 transition-transform duration-500">
            Shahil
            <span className="text-sage-600 dark:text-gold-400"> Ahamad</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-charcoal-600 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed animate-fadeInUp animation-delay-200">
            Full-Stack Developer passionate about creating elegant digital
            experiences with modern technologies
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-10 sm:mb-12 animate-fadeInUp animation-delay-400">
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-sage-600 hover:bg-sage-700 dark:bg-gold-600 dark:hover:bg-gold-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg transform w-full sm:w-auto"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-sage-600 text-sage-600 hover:bg-sage-50 dark:border-gold-400 dark:text-gold-400 dark:hover:bg-slate-800 px-6 sm:px-8 py-3 text-base sm:text-lg font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg transform w-full sm:w-auto"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center gap-8 sm:gap-6 animate-fadeInUp animation-delay-600">
          <a
            href="https://github.com/Shahil-Ahamad-Per"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal-600 dark:text-slate-300 hover:text-sage-600 dark:hover:text-gold-400 transition-all duration-300 hover:scale-125 transform hover:rotate-12"
          >
            <Github className="h-7 w-7 sm:h-6 sm:w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/shahil-ahamad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal-600 dark:text-slate-300 hover:text-sage-600 dark:hover:text-gold-400 transition-all duration-300 hover:scale-125 transform hover:rotate-12"
          >
            <Linkedin className="h-7 w-7 sm:h-6 sm:w-6" />
          </a>
          <a
            href="mailto:contact@shahilahamad.com.np"
            target="_blank"
            className="text-charcoal-600 dark:text-slate-300 hover:text-sage-600 dark:hover:text-gold-400 transition-all duration-300 hover:scale-125 transform hover:rotate-12"
          >
            <Mail className="h-7 w-7 sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
