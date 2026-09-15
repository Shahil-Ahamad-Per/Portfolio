"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import NavBar from "@/components/Navbar";
import HeroSection from "./Sections/MainPage";
import { AboutSection } from "./Sections/About";
import ProjectsSection from "@/app/Sections/Project/ProjectsPage";
import SkillsSection from "@/app/Sections/Skill/skillPage";
import ExperienceSection from "./Sections/Experience";
import BlogSection from "./Sections/Blog/BlogPage";
import ContactSection from "./Sections/Contact";
import Footer from "./Sections/Footer";
import WelcomeScreen from "./Sections/WelcomeScreen";
import { useSectionNavigation } from "@/hooks/use-section-navigation";
import { useWelcomeScreen } from "@/hooks/use-welcome-screen";

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { showWelcome, handleWelcomeExit } = useWelcomeScreen();
  const { activeSection, scrollToSection } = useSectionNavigation(
    !showWelcome && mounted
  );

  const onWelcomeExit = useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      window.history.replaceState(null, "", "#home");
    }
    handleWelcomeExit();
  }, [handleWelcomeExit]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!showWelcome && mounted) {
      const currentHash =
        typeof window !== "undefined" ? window.location.hash : "";
      if (!currentHash || currentHash === "#home") {
        if (typeof window !== "undefined" && window.scrollY !== 0) {
          window.scrollTo(0, 0);
        }
        scrollToSection("home", true);
      }
    }
  }, [showWelcome, mounted, scrollToSection]);

  if (!mounted) return null;

  return (
    <div className="animate-fadeIn min-h-screen bg-surface text-on-surface transition-colors duration-500 selection:bg-primary-fixed selection:text-on-primary-fixed">
      {showWelcome && <WelcomeScreen onExit={onWelcomeExit} />}
      <NavBar
        theme={theme}
        setTheme={setTheme}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <div className="flex min-h-screen flex-col pt-20">
        <main className="w-full flex-grow">
          <HeroSection scrollToSection={scrollToSection} />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
