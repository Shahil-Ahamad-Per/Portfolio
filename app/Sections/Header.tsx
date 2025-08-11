import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"

interface HeaderProps {
  theme: string | undefined
  setTheme: (theme: string) => void
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Header({ theme, setTheme, activeSection, scrollToSection }: HeaderProps) {
  return (
    <header className="sticky top-0 w-full bg-cream-50/90 dark:bg-slate-900/95 backdrop-blur-md border-b border-sage-200 dark:border-slate-600 z-50 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("home")}
          className="text-2xl font-serif font-bold text-charcoal-800 dark:text-slate-100 hover:text-sage-600 dark:hover:text-gold-400 transition-colors duration-300 cursor-pointer"
        >
          Shahil Ahamad
        </button>

        <div className="hidden md:flex space-x-8">
          {["home", "about", "skills", "projects", "blog", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`relative text-charcoal-700 dark:text-slate-200 hover:text-sage-600 dark:hover:text-gold-400 transition-all duration-300 capitalize font-medium py-2 px-1 group ${activeSection === item ? "text-sage-600 dark:text-gold-400" : ""
                }`}
            >
              {item}
              {/* Underline effect */}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sage-500 to-sage-600 dark:from-gold-400 dark:to-gold-500 transform origin-left transition-all duration-300 ${activeSection === item ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
              ></span>
            </button>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-charcoal-700 dark:text-slate-200 hover:bg-sage-100 dark:hover:bg-navy-800 hover:text-sage-600 dark:hover:text-gold-400 hover:scale-110 transition-all duration-300"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </nav>
    </header>
  )
}
