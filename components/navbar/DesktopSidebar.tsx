"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sun, Moon, ArrowLeft, ChevronRight } from "lucide-react";
import { NAV_ITEMS, type NavItemConfig } from "@/lib/nav-config";

interface DesktopSidebarProps {
  theme: string | undefined;
  toggleTheme: () => void;
  activeSection: string;
  isItemActive: (id: string) => boolean;
  handleNavClick: (id: string) => void;
  isBlogDetailPage: boolean;
}

export function DesktopSidebar({
  theme,
  toggleTheme,
  isItemActive,
  handleNavClick,
  isBlogDetailPage,
}: DesktopSidebarProps) {
  return (
    /* w-72 must match lg:pl-72 in page.tsx and BlogClient.tsx. See SIDEBAR_WIDTH_PX in lib/nav-config.ts */
    <aside
      aria-label="Main sidebar navigation"
      className="hidden lg:flex fixed left-0 top-0 bottom-0 w-72 flex-col justify-between bg-cream-50/80 dark:bg-slate-900/85 backdrop-blur-xl border-r border-sage-200 dark:border-slate-800 z-40 p-6 shadow-[4px_0_24px_rgba(0,0,0,0.03)] dark:shadow-[4px_0_24px_rgba(0,0,0,0.25)] transition-colors duration-300"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-3 pb-6 border-b border-sage-200/80 dark:border-slate-800">
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 dark:focus-visible:ring-gold-400 rounded-xl transition-transform duration-300 hover:scale-[1.02]"
            aria-label="Go to Home"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-sage-100 to-sage-200 dark:from-slate-800 dark:to-slate-700 p-1 border border-sage-300/80 dark:border-slate-600 shadow-sm group-hover:border-sage-500 dark:group-hover:border-gold-400 transition-colors duration-300 shrink-0">
              <img
                src="/profile.jpg"
                alt="Shahil Ahamad Logo"
                className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-serif font-bold tracking-tight text-charcoal-900 dark:text-white leading-snug">
                Shahil{" "}
                <span className="text-sage-600 dark:text-gold-400 font-serif">
                  Ahamad
                </span>
              </span>
              <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal-500 dark:text-slate-400">
                Full-Stack Dev
              </span>
            </div>
          </button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="relative h-9 w-9 rounded-xl text-charcoal-700 dark:text-slate-200 hover:bg-sage-100 dark:hover:bg-slate-800 hover:text-sage-600 dark:hover:text-gold-400 border border-sage-200/60 dark:border-slate-700/60 transition-all duration-300 hover:scale-105 shrink-0"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-gold-400 transition-transform duration-500 rotate-0 hover:rotate-90" />
            ) : (
              <Moon className="h-4 w-4 text-sage-600 transition-transform duration-500 rotate-0 hover:-rotate-12" />
            )}
          </Button>
        </div>

        <nav aria-label="Sidebar Navigation" className="space-y-1.5 pt-1">
          {isBlogDetailPage && (
            <Link
              href="/"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-sage-700 dark:text-gold-400 bg-sage-100/70 dark:bg-slate-800/80 hover:bg-sage-200/70 dark:hover:bg-slate-700 transition-all duration-200 mb-3 border border-sage-200 dark:border-slate-700"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Portfolio</span>
            </Link>
          )}

          {NAV_ITEMS.map((item) => {
            const isActive = isItemActive(item.id);
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                aria-current={isActive ? "page" : undefined}
                className={`w-full group flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 dark:focus-visible:ring-gold-400 ${
                  isActive
                    ? "bg-sage-600 text-white dark:bg-gold-500/15 dark:text-gold-400 shadow-md shadow-sage-600/15 dark:shadow-gold-500/5 font-semibold"
                    : "text-charcoal-700 dark:text-slate-300 hover:bg-sage-100/70 dark:hover:bg-slate-800/60 hover:text-sage-700 dark:hover:text-gold-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`h-4 w-4 transition-transform duration-300 group-hover:scale-110 ${
                      isActive
                        ? "text-white dark:text-gold-400"
                        : "text-charcoal-500 dark:text-slate-400 group-hover:text-sage-600 dark:group-hover:text-gold-400"
                    }`}
                  />
                  <span>{item.label}</span>
                </div>

                {isActive ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-gold-400 animate-pulse" />
                ) : (
                  <ChevronRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-charcoal-400 dark:text-slate-500" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="pt-6 border-t border-sage-200/80 dark:border-slate-800">
        <div className="text-[11px] text-charcoal-400 dark:text-slate-500 text-center">
          © {new Date().getFullYear()} Shahil Ahamad
        </div>
      </div>
    </aside>
  );
}
