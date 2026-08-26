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
      className="fixed bottom-0 left-0 top-0 z-40 hidden w-72 flex-col justify-between border-r border-sage-200 bg-cream-50/80 p-6 shadow-[4px_0_24px_rgba(0,0,0,0.03)] backdrop-blur-xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/85 dark:shadow-[4px_0_24px_rgba(0,0,0,0.25)] lg:flex"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-3 border-b border-sage-200/80 pb-6 dark:border-slate-800">
          <button
            onClick={() => handleNavClick("home")}
            className="group flex items-center gap-3 rounded-xl text-left transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 dark:focus-visible:ring-gold-400"
            aria-label="Go to Home"
          >
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-sage-300/80 bg-gradient-to-br from-sage-100 to-sage-200 p-1 shadow-sm transition-colors duration-300 group-hover:border-sage-500 dark:border-slate-600 dark:from-slate-800 dark:to-slate-700 dark:group-hover:border-gold-400">
              <img
                src="/profile.jpg"
                alt="Shahil Ahamad Logo"
                className="h-full w-full rounded-lg object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold leading-snug tracking-tight text-charcoal-900 dark:text-white">
                Shahil{" "}
                <span className="font-serif text-sage-600 dark:text-gold-400">
                  Ahamad
                </span>
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-charcoal-500 dark:text-slate-400">
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
            className="relative h-9 w-9 shrink-0 rounded-xl border border-sage-200/60 text-charcoal-700 transition-all duration-300 hover:scale-105 hover:bg-sage-100 hover:text-sage-600 dark:border-slate-700/60 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-gold-400"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 rotate-0 text-gold-400 transition-transform duration-500 hover:rotate-90" />
            ) : (
              <Moon className="h-4 w-4 rotate-0 text-sage-600 transition-transform duration-500 hover:-rotate-12" />
            )}
          </Button>
        </div>

        <nav aria-label="Sidebar Navigation" className="space-y-1.5 pt-1">
          {isBlogDetailPage && (
            <Link
              href="/"
              className="mb-3 flex items-center gap-3 rounded-xl border border-sage-200 bg-sage-100/70 px-3.5 py-2.5 text-sm font-medium text-sage-700 transition-all duration-200 hover:bg-sage-200/70 dark:border-slate-700 dark:bg-slate-800/80 dark:text-gold-400 dark:hover:bg-slate-700"
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
                className={`group relative flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 dark:focus-visible:ring-gold-400 ${
                  isActive
                    ? "bg-sage-600 font-semibold text-white shadow-md shadow-sage-600/15 dark:bg-gold-500/15 dark:text-gold-400 dark:shadow-gold-500/5"
                    : "text-charcoal-700 hover:bg-sage-100/70 hover:text-sage-700 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-gold-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`h-4 w-4 transition-transform duration-300 group-hover:scale-110 ${
                      isActive
                        ? "text-white dark:text-gold-400"
                        : "text-charcoal-500 group-hover:text-sage-600 dark:text-slate-400 dark:group-hover:text-gold-400"
                    }`}
                  />
                  <span>{item.label}</span>
                </div>

                {isActive ? (
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white dark:bg-gold-400" />
                ) : (
                  <ChevronRight className="h-3.5 w-3.5 -translate-x-1 text-charcoal-400 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 dark:text-slate-500" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-sage-200/80 pt-6 dark:border-slate-800">
        <div className="text-center text-[11px] text-charcoal-400 dark:text-slate-500">
          © {new Date().getFullYear()} Shahil Ahamad
        </div>
      </div>
    </aside>
  );
}
