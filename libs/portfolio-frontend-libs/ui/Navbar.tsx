"use client"
import Link from "next/link"
import { Button } from "./ui/button"
import { Sun, Moon } from "lucide-react"
import { usePathname } from "next/navigation"

interface HeaderProps {
  theme: string | undefined
  setTheme: (theme: string) => void
  activeSection?: string
  scrollToSection?: (sectionId: string) => void
}

export function NavBar({ theme, setTheme, activeSection, scrollToSection }: HeaderProps) {
  const pathname = usePathname() || "/"

  // Check if we're on the main page (portfolio) or a blog detail page
  const isMainPage = pathname === "/"
  const isBlogDetailPage = pathname.startsWith("/blog/")

  const navItems = ["home", "about", "skills", "projects", "blog", "contact"]

  const handleNavClick = (item: string) => {
    if (isMainPage && scrollToSection) {
      // If we're on the main page, scroll to section
      const sectionId = item === "home" ? "home" : item
      scrollToSection(sectionId)
    } else {
      // If we're on a blog detail page, navigate back to main page with section
      if (item === "home") {
        window.location.href = "/"
      } else {
        window.location.href = `/#${item}`
      }
    }
  }

  return (
    <header className="sticky top-0 w-full bg-cream-50/90 dark:bg-slate-900/95 backdrop-blur-md border-b border-sage-200 dark:border-slate-600 z-50 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-serif font-bold text-charcoal-800 dark:text-slate-100 hover:text-sage-600 dark:hover:text-gold-400 transition-colors duration-300 cursor-pointer"
        >
          Shahil Ahamad
        </Link>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            // Determine if this nav item is active
            const isActive = isMainPage ? activeSection === item || (item === "home" && activeSection === "") : false

            return (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`relative text-charcoal-700 dark:text-slate-200 hover:text-sage-600 dark:hover:text-gold-400 transition-all duration-300 capitalize font-medium py-2 px-1 group ${
                  isActive ? "text-sage-600 dark:text-gold-400" : ""
                }`}
              >
                {item}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sage-500 to-sage-600 dark:from-gold-400 dark:to-gold-500 transform origin-left transition-all duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
            )
          })}
        </div>

        {/* Show current page indicator for blog detail pages */}
        {isBlogDetailPage && (
          <div className="hidden md:block text-sm text-charcoal-600 dark:text-slate-400">
            <Link href="/" className="hover:text-sage-600 dark:hover:text-gold-400 transition-colors">
              ← Back to Portfolio
            </Link>
          </div>
        )}

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-charcoal-700 dark:text-slate-200 hover:bg-sage-100 dark:hover:bg-navy-800 hover:text-sage-600 dark:hover:text-gold-400 hover:scale-110 transition-all duration-300"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </nav>
    </header>
  )
}
