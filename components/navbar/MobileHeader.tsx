"use client";

import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";

interface MobileHeaderProps {
  theme: string | undefined;
  toggleTheme: () => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  onHomeClick: () => void;
}

export function MobileHeader({
  theme,
  toggleTheme,
  mobileOpen,
  setMobileOpen,
  onHomeClick,
}: MobileHeaderProps) {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-cream-50/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-sage-200/80 dark:border-slate-800/80 z-50 px-4 sm:px-6 flex items-center justify-between transition-colors duration-300 shadow-sm">
      <button
        onClick={onHomeClick}
        className="flex items-center gap-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded-xl group"
        aria-label="Shahil Ahamad Home"
      >
        <div className="w-8 h-8 rounded-xl overflow-hidden bg-gradient-to-br from-sage-100 to-sage-200 dark:from-slate-800 dark:to-slate-700 p-0.5 border border-sage-300 dark:border-slate-700 shrink-0 shadow-sm group-active:scale-95 transition-transform">
          <img
            src="/profile.jpg"
            alt="Logo"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <span className="text-lg font-serif font-bold text-charcoal-900 dark:text-white">
          Shahil{" "}
          <span className="text-sage-600 dark:text-gold-400">Ahamad</span>
        </span>
      </button>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label={`Toggle theme (currently ${theme})`}
          className="h-9 w-9 rounded-xl text-charcoal-700 dark:text-slate-200 hover:bg-sage-100 dark:hover:bg-slate-800 border border-sage-200/60 dark:border-slate-700/60 shadow-sm active:scale-95 transition-all"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4 text-gold-400" />
          ) : (
            <Moon className="h-4 w-4 text-sage-600" />
          )}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={
            mobileOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          className={`h-9 w-9 rounded-xl border border-sage-200/60 dark:border-slate-700/60 shadow-sm active:scale-95 transition-all ${
            mobileOpen
              ? "bg-sage-100 dark:bg-slate-800 text-sage-700 dark:text-gold-400"
              : "text-charcoal-800 dark:text-slate-100 hover:bg-sage-100 dark:hover:bg-slate-800"
          }`}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  );
}
