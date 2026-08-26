"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X, ArrowLeft, ChevronRight } from "lucide-react";
import { NAV_ITEMS } from "@/lib/nav-config";

interface MobileDrawerProps {
  readonly mobileOpen: boolean;
  readonly setMobileOpen: (open: boolean) => void;
  readonly isItemActive: (id: string) => boolean;
  readonly handleNavClick: (id: string) => void;
  readonly isBlogDetailPage: boolean;
}

export function MobileDrawer({
  mobileOpen,
  setMobileOpen,
  isItemActive,
  handleNavClick,
  isBlogDetailPage,
}: Readonly<MobileDrawerProps>) {
  return (
    <>
      {mobileOpen && (
        <div
          className="animate-fadeIn fixed inset-0 z-40 bg-charcoal-900/60 backdrop-blur-md transition-opacity duration-300 dark:bg-black/80 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <dialog
        open={mobileOpen}
        aria-label="Mobile navigation drawer"
        className={`fixed bottom-0 left-0 top-0 z-50 m-0 flex h-full max-h-none w-80 max-w-[85vw] flex-col justify-between border-0 border-r border-sage-200 bg-cream-50/95 p-6 text-inherit shadow-2xl backdrop-blur-2xl transition-transform duration-300 ease-out dark:border-slate-800 dark:bg-slate-900/95 lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-sage-200/80 pb-4 dark:border-slate-800">
            <button
              type="button"
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-3 text-left"
            >
              <div className="h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-sage-300 bg-gradient-to-br from-sage-100 to-sage-200 p-1 shadow-sm dark:border-slate-700 dark:from-slate-800 dark:to-slate-700">
                <img
                  src="/profile.jpg"
                  alt="Shahil Ahamad Logo"
                  className="h-full w-full rounded-lg object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold text-charcoal-900 dark:text-white">
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
              className="h-8 w-8 rounded-lg text-charcoal-600 hover:bg-sage-100 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <nav className="space-y-2">
            {isBlogDetailPage && (
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="mb-3 flex items-center gap-3 rounded-xl border border-sage-200 bg-sage-100 px-4 py-3 text-sm font-medium text-sage-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-gold-400"
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
                  type="button"
                  key={`mobile-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`active:scale-98 flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-sage-600 font-semibold text-white shadow-md shadow-sage-600/20 dark:bg-gold-500/20 dark:text-gold-400"
                      : "text-charcoal-700 hover:bg-sage-100/70 dark:text-slate-300 dark:hover:bg-slate-800/70"
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
                    <span className="h-2 w-2 animate-pulse rounded-full bg-white dark:bg-gold-400" />
                  ) : (
                    <ChevronRight className="h-3.5 w-3.5 text-charcoal-400 dark:text-slate-600" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="space-y-3 border-t border-sage-200/80 pt-6 dark:border-slate-800">
          <Button
            onClick={() => handleNavClick("contact")}
            className="w-full rounded-xl bg-sage-600 py-3 text-sm font-semibold text-white shadow-md shadow-sage-600/20 hover:bg-sage-700 dark:bg-gold-600 dark:hover:bg-gold-700"
          >
            Get In Touch
          </Button>
          <div className="text-center text-[11px] text-charcoal-600 dark:text-slate-500">
            © {new Date().getFullYear()} Shahil Ahamad
          </div>
        </div>
      </dialog>
    </>
  );
}
