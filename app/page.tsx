"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

import Header from "./Sections/Header"
import HeroSection from "./Sections/MainPage"
import { AboutSection } from "./Sections/About"
import SkillsSection from "@/app/Sections/Skill/skillPage"
import ProjectsSection from "@/app/Sections/Project/ProjectsPage"
import BlogSection from "./Sections/Blog/BlogPage"
import ContactSection from "./Sections/Contact"
import Footer from "./Sections/Footer"
import WelcomeScreen from "./Sections/WelcomeScreen"

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  // Scroll spy effect for active section tracking
  useEffect(() => {
    if (showWelcome) return

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "blog", "contact"]
      const headerOffset = 96
      const scrollPosition = window.scrollY + headerOffset

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [showWelcome])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const headerOffset = 96
    const elementPosition = element.getBoundingClientRect().top + window.scrollY

    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: "smooth",
    })
  }

  if (!mounted) return null
  if (showWelcome) return <WelcomeScreen onExit={() => setShowWelcome(false)} />

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-sage-50 dark:from-slate-900 dark:via-slate-800 dark:to-navy-900 transition-all duration-1000 animate-fadeIn">
      <Header
        theme={theme}
        setTheme={setTheme}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
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
