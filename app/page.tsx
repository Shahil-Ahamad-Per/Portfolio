"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import NavBar from "@/components/Navbar"
import HeroSection from "./Sections/MainPage"
import { AboutSection } from "./Sections/About"
import SkillsSection from "@/app/Sections/Skill/skillPage"
import ProjectsSection from "@/app/Sections/Project/ProjectsPage"
import BlogSection from "./Sections/Blog/BlogPage"
import ContactSection from "./Sections/Contact"
import Footer from "./Sections/Footer"
import WelcomeScreen from "./Sections/WelcomeScreen"
import { useSectionNavigation } from "@/hooks/use-section-navigation"
import { useWelcomeScreen } from "@/hooks/use-welcome-screen"

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { showWelcome, handleWelcomeExit } = useWelcomeScreen()
  const { activeSection, scrollToSection } = useSectionNavigation(!showWelcome)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  if (showWelcome) return <WelcomeScreen onExit={handleWelcomeExit} />
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-sage-50 dark:from-slate-900 dark:via-slate-800 dark:to-navy-900 transition-all duration-1000 animate-fadeIn">
      <NavBar theme={theme} setTheme={setTheme} activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
