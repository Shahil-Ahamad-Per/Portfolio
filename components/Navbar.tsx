"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

interface HeaderProps {
  theme: string | undefined;
  setTheme: (theme: string) => void;
  activeSection?: string;
  scrollToSection?: (sectionId: string) => void;
}

const NAV_ITEMS = [
  "home",
  "about",
  "skills",
  "projects",
  "blog",
  "contact",
] as const;

export default function NavBar({
  theme,
  setTheme,
  activeSection,
  scrollToSection,
}: HeaderProps) {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  const isMainPage = pathname === "/";
  const isBlogDetailPage = pathname.startsWith("/blog/");

  const handleNavClick = (item: string) => {
    setMobileOpen(false);
    if (isMainPage && scrollToSection) {
      scrollToSection(item);
    } else {
      window.location.href = item === "home" ? "/" : `/#${item}`;
    }
  };

  const isItemActive = (item: string) =>
    isMainPage &&
    (activeSection === item || (item === "home" && activeSection === ""));

  return (
    <header className="sticky top-0 w-full bg-cream-50/90 dark:bg-slate-900/95 backdrop-blur-md border-b border-sage-200 dark:border-slate-600 z-50 transition-colors duration-300">
      <nav
        aria-label="Main navigation"
        className="container mx-auto px-6 py-4 flex justify-between items-center"
      >
        <button
          onClick={() => handleNavClick("home")}
          className="text-xl sm:text-2xl font-serif font-bold transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded-sm"
        >
          <span className="text-charcoal-800 dark:text-white">Shahil</span>{" "}
          <span className="text-sage-600 dark:text-gold-400">Ahamad</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => {
            const isActive = isItemActive(item);
            return (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                aria-current={isActive ? "page" : undefined}
                className={`relative capitalize font-medium py-2 px-1 group transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded-sm ${
                  isActive
                    ? "text-sage-600 dark:text-gold-400"
                    : "text-charcoal-700 dark:text-slate-200 hover:text-sage-600 dark:hover:text-gold-400"
                }`}
              >
                {item}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sage-500 to-sage-600 dark:from-gold-400 dark:to-gold-500 origin-left transition-transform duration-300 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          {isBlogDetailPage && (
            <Link
              href="/"
              className="hidden md:block text-sm text-charcoal-600 dark:text-slate-400 hover:text-sage-600 dark:hover:text-gold-400 transition-colors"
            >
              ← Back to Portfolio
            </Link>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="text-charcoal-700 dark:text-slate-200 hover:bg-sage-100 dark:hover:bg-navy-800 hover:text-sage-600 dark:hover:text-gold-400 hover:scale-110 transition-all duration-300"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-sage-200 dark:border-slate-600 bg-cream-50/95 dark:bg-slate-900/95 backdrop-blur-md">
          <div className="flex flex-col px-6 py-4 space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = isItemActive(item);
              return (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-left capitalize font-medium py-2 px-2 rounded-sm transition-colors duration-200 ${
                    isActive
                      ? "text-sage-600 dark:text-gold-400 bg-sage-50 dark:bg-navy-800"
                      : "text-charcoal-700 dark:text-slate-200 hover:bg-sage-50 dark:hover:bg-navy-800"
                  }`}
                >
                  {item}
                </button>
              );
            })}
            {isBlogDetailPage && (
              <Link
                href="/"
                className="text-sm text-charcoal-600 dark:text-slate-400 py-2 px-2"
              >
                ← Back to Portfolio
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
