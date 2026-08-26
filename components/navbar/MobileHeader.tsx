"use client";

import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";

interface MobileHeaderProps {
  readonly theme: string | undefined;
  readonly toggleTheme: () => void;
  readonly mobileOpen: boolean;
  readonly setMobileOpen: (open: boolean) => void;
  readonly onHomeClick: () => void;
}

export function MobileHeader({
  theme,
  toggleTheme,
  mobileOpen,
  setMobileOpen,
  onHomeClick,
}: MobileHeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-sage-200/80 bg-cream-50/90 px-4 shadow-sm backdrop-blur-xl transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-900/90 sm:px-6 lg:hidden">
      <button
        type="button"
        onClick={onHomeClick}
        className="group flex items-center gap-2.5 rounded-xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
        aria-label="Shahil Ahamad Home"
      >
        <div className="h-8 w-8 shrink-0 overflow-hidden rounded-xl border border-sage-300 bg-gradient-to-br from-sage-100 to-sage-200 p-0.5 shadow-sm transition-transform group-active:scale-95 dark:border-slate-700 dark:from-slate-800 dark:to-slate-700">
          <img
            src="/profile.jpg"
            alt="Logo"
            className="h-full w-full rounded-lg object-contain"
          />
        </div>
        <span className="font-serif text-lg font-bold text-charcoal-900 dark:text-white">
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
          className="h-9 w-9 rounded-xl border border-sage-200/60 text-charcoal-700 shadow-sm transition-all hover:bg-sage-100 active:scale-95 dark:border-slate-700/60 dark:text-slate-200 dark:hover:bg-slate-800"
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
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={
            mobileOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          className={`h-9 w-9 rounded-xl border border-sage-200/60 shadow-sm transition-all active:scale-95 dark:border-slate-700/60 ${
            mobileOpen
              ? "bg-sage-100 text-sage-700 dark:bg-slate-800 dark:text-gold-400"
              : "text-charcoal-800 hover:bg-sage-100 dark:text-slate-100 dark:hover:bg-slate-800"
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
