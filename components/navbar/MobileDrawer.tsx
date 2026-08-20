"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X, ArrowLeft, ChevronRight } from "lucide-react";
import { NAV_ITEMS } from "@/lib/nav-config";

interface MobileDrawerProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  isItemActive: (id: string) => boolean;
  handleNavClick: (id: string) => void;
  isBlogDetailPage: boolean;
}

export function MobileDrawer({
  mobileOpen,
  setMobileOpen,
  isItemActive,
  handleNavClick,
  isBlogDetailPage,
}: MobileDrawerProps) {
  return (
    <>
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-charcoal-900/60 dark:bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`lg:hidden fixed top-0 bottom-0 left-0 w-80 max-w-[85vw] bg-cream-50/95 dark:bg-slate-900/95 backdrop-blur-2xl border-r border-sage-200 dark:border-slate-800 z-50 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation drawer"
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-sage-200/80 dark:border-slate-800">
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-3 text-left"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-sage-100 to-sage-200 dark:from-slate-800 dark:to-slate-700 p-1 border border-sage-300 dark:border-slate-700 shrink-0 shadow-sm">
                <img
                  src="/profile.jpg"
                  alt="Shahil Ahamad Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-serif font-bold text-charcoal-900 dark:text-white">
                  Shahil{" "}
                  <span className="text-sage-600 dark:text-gold-400">
                    Ahamad
                  </span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-charcoal-500 dark:text-slate-400">
                  Full-Stack Developer
                </span>
              </div>
            </button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(false)}
              aria-label="Close drawer"
              className="h-8 w-8 rounded-lg text-charcoal-600 dark:text-slate-400 hover:bg-sage-100 dark:hover:bg-slate-800"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <nav className="space-y-2">
            {isBlogDetailPage && (
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-sage-700 dark:text-gold-400 bg-sage-100 dark:bg-slate-800 mb-3 border border-sage-200 dark:border-slate-700 shadow-sm"
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
                  key={`mobile-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 active:scale-98 ${
                    isActive
                      ? "bg-sage-600 text-white dark:bg-gold-500/20 dark:text-gold-400 font-semibold shadow-md shadow-sage-600/20"
                      : "text-charcoal-700 dark:text-slate-300 hover:bg-sage-100/70 dark:hover:bg-slate-800/70"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`h-4 w-4 ${
                        isActive
                          ? "text-white dark:text-gold-400"
                          : "text-charcoal-500 dark:text-slate-400"
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-white dark:bg-gold-400 animate-pulse" />
                  ) : (
                    <ChevronRight className="h-3.5 w-3.5 text-charcoal-400 dark:text-slate-600" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-sage-200/80 dark:border-slate-800 space-y-3">
          <Button
            onClick={() => handleNavClick("contact")}
            className="w-full bg-sage-600 hover:bg-sage-700 dark:bg-gold-600 dark:hover:bg-gold-700 text-white rounded-xl py-3 text-sm font-semibold shadow-md shadow-sage-600/20"
          >
            Get In Touch
          </Button>
          <div className="text-[11px] text-charcoal-600 dark:text-slate-500 text-center">
            © {new Date().getFullYear()} Shahil Ahamad
          </div>
        </div>
      </div>
    </>
  );
}
