"use client"
import { useState, useEffect, useCallback } from "react"

const SECTIONS = ["home", "about", "skills", "projects", "blog", "contact"]
const HEADER_OFFSET = 96

export function useSectionNavigation(active: boolean) {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = useCallback(
    (sectionId: string, updateHash: boolean = true) => {
      const element = document.getElementById(sectionId)
      if (!element) return

      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - HEADER_OFFSET,
        behavior: "smooth",
      })

      if (updateHash) {
        window.history.pushState(null, "", `#${sectionId}`)
      }
      setActiveSection(sectionId)
    },
    [],
  )

  useEffect(() => {
    if (!active) return

    if (window.location.hash) {
      const section = window.location.hash.slice(1)
      scrollToSection(section, false)
    }
  }, [active, scrollToSection])

  useEffect(() => {
    if (!active) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + HEADER_OFFSET
      for (const section of SECTIONS) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            const currentHash = window.location.hash.slice(1)
            if (currentHash !== section) {
              window.history.pushState(null, "", `#${section}`)
            }
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [active])

  useEffect(() => {
    if (!active) return

    const handleHashChange = () => {
      const section = window.location.hash.slice(1) || "home"
      scrollToSection(section, false)
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [active, scrollToSection])

  return { activeSection, scrollToSection }
}
