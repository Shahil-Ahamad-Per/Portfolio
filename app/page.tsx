"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NavBar from "@/components/Navbar";
import HeroSection from "./Sections/MainPage";
import { AboutSection } from "./Sections/About";
import SkillsSection from "@/app/Sections/Skill/skillPage";
import ProjectsSection from "@/app/Sections/Project/ProjectsPage";
import BlogSection from "./Sections/Blog/BlogPage";
import ContactSection from "./Sections/Contact";
import Footer from "./Sections/Footer";
import WelcomeScreen from "./Sections/WelcomeScreen";
import { useSectionNavigation } from "@/hooks/use-section-navigation";
import { useWelcomeScreen } from "@/hooks/use-welcome-screen";
import { SIDEBAR_WIDTH_PX } from "@/lib/nav-config";

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { showWelcome, handleWelcomeExit } = useWelcomeScreen();
  const { activeSection, scrollToSection } = useSectionNavigation(!showWelcome);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (showWelcome) return <WelcomeScreen onExit={handleWelcomeExit} />;
  return (
    <div className="animate-fadeIn min-h-screen bg-gradient-to-br from-cream-50 to-sage-50 transition-all duration-1000 dark:from-slate-900 dark:via-slate-800 dark:to-navy-900">
      <NavBar
        theme={theme}
        setTheme={setTheme}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      {/* lg:pl-72 must match Navbar w-72 and SIDEBAR_WIDTH_PX in lib/nav-config.ts */}
      <div className="flex min-h-screen flex-col pt-16 lg:pl-72 lg:pt-0">
        <main className="flex-grow">
          <HeroSection scrollToSection={scrollToSection} />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
