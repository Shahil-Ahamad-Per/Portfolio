"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sun,
  Moon,
  Menu,
  X,
  Home,
  User,
  Code2,
  FolderGit2,
  BookOpen,
  Send,
  Github,
  Linkedin,
  Mail,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import { usePathname } from "next/navigation";

interface HeaderProps {
  theme: string | undefined;
  setTheme: (theme: string) => void;
  activeSection?: string;
  scrollToSection?: (sectionId: string) => void;
}

interface NavItemConfig {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItemConfig[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "blog", label: "Blog", icon: BookOpen },
  { id: "contact", label: "Contact", icon: Send },
];

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/Shahil-Ahamad-Per",
    icon: Github,
    hoverColor: "group-hover:text-[#24292e] dark:group-hover:text-white",
    bgColor: "hover:bg-slate-100 dark:hover:bg-slate-800",
    badgeBg: "bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shahil-ahamad/",
    icon: Linkedin,
    hoverColor: "group-hover:text-[#0a66c2] dark:group-hover:text-[#388bfd]",
    bgColor: "hover:bg-blue-50 dark:hover:bg-blue-950/30",
    badgeBg: "bg-[#0a66c2] text-white",
  },
  {
    name: "Gmail",
    href: "mailto:contact@shahilahamad.com.np",
    icon: Mail,
    hoverColor: "group-hover:text-[#ea4335] dark:group-hover:text-[#ff6b6b]",
    bgColor: "hover:bg-red-50 dark:hover:bg-red-950/30",
    badgeBg: "bg-[#ea4335] text-white",
  },
];

export default function NavBar({
  theme,
  setTheme,
  activeSection = "home",
  scrollToSection,
}: HeaderProps) {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMainPage = pathname === "/";
  const isBlogDetailPage = pathname.startsWith("/blog/");

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
    (activeSection === item || (item === "home" && !activeSection));

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* ========================================= */}
      {/* 1. DESKTOP FIXED VERTICAL SIDEBAR (>=lg)  */}
      {/* ========================================= */}
      <aside
        aria-label="Main sidebar navigation"
        className="hidden lg:flex fixed left-0 top-0 bottom-0 w-72 flex-col justify-between bg-cream-50/80 dark:bg-slate-900/85 backdrop-blur-xl border-r border-sage-200 dark:border-slate-800 z-40 p-6 shadow-[4px_0_24px_rgba(0,0,0,0.03)] dark:shadow-[4px_0_24px_rgba(0,0,0,0.25)] transition-colors duration-300"
      >
        {/* --- TOP SECTION: Logo, Brand & Theme Toggle --- */}
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-3 pb-6 border-b border-sage-200/80 dark:border-slate-800">
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 dark:focus-visible:ring-gold-400 rounded-xl transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Go to Home"
            >
              {/* Brand Logo Avatar */}
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-sage-100 to-sage-200 dark:from-slate-800 dark:to-slate-700 p-1 border border-sage-300/80 dark:border-slate-600 shadow-sm group-hover:border-sage-500 dark:group-hover:border-gold-400 transition-colors duration-300 shrink-0">
                <img
                  src="/profile.jpg"
                  alt="Shahil Ahamad Logo"
                  className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Name */}
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

            {/* Dark / Light Mode Toggle */}
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

          {/* --- MAIN SECTION: Vertical Navigation Links --- */}
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

                  {/* Active Indicator Arrow / Dot */}
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
      </aside>

      {/* ============================================================ */}
      {/* 2. FLOATING PAGE-EDGE SOCIAL DOCK (Extra Desktop Floating Stack) */}
      {/* ============================================================ */}
      <aside
        aria-label="Social profiles quick dock"
        className="hidden xl:flex fixed right-6 bottom-8 z-30 flex-col items-end gap-2.5 pointer-events-none"
      >
        {SOCIAL_LINKS.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={`dock-${social.name}`}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`pointer-events-auto group flex items-center h-10 bg-cream-50/90 dark:bg-slate-900/90 backdrop-blur-md border border-sage-300/80 dark:border-slate-700/80 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out overflow-hidden px-2.5 hover:pr-4 hover:border-sage-500 dark:hover:border-gold-400 ${social.bgColor}`}
            >
              <div className="flex items-center justify-center text-charcoal-700 dark:text-slate-200 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  className={`h-4 w-4 ${social.hoverColor} transition-colors duration-300`}
                />
              </div>
              <span className="max-w-0 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 group-hover:ml-2 text-xs font-medium text-charcoal-800 dark:text-slate-100 transition-all duration-300 ease-out whitespace-nowrap overflow-hidden">
                {social.name}
              </span>
            </a>
          );
        })}
      </aside>

      {/* ========================================= */}
      {/* 3. MOBILE HEADER BAR (<lg screens)        */}
      {/* ========================================= */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-cream-50/90 dark:bg-slate-900/95 backdrop-blur-md border-b border-sage-200 dark:border-slate-800 z-50 px-5 flex items-center justify-between transition-colors duration-300">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded-lg"
          aria-label="Shahil Ahamad Home"
        >
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-sage-100 dark:bg-slate-800 p-0.5 border border-sage-300 dark:border-slate-700 shrink-0">
            <img
              src="/profile.jpg"
              alt="Logo"
              className="w-full h-full object-contain rounded-md"
            />
          </div>
          <span className="text-lg font-serif font-bold text-charcoal-900 dark:text-white">
            Shahil{" "}
            <span className="text-sage-600 dark:text-gold-400">Ahamad</span>
          </span>
        </button>

        {/* Right side controls (Theme Toggle + Menu Button) */}
        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={`Toggle theme (currently ${theme})`}
            className="h-9 w-9 rounded-lg text-charcoal-700 dark:text-slate-200 hover:bg-sage-100 dark:hover:bg-slate-800"
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
            className="h-9 w-9 rounded-lg text-charcoal-800 dark:text-slate-100 hover:bg-sage-100 dark:hover:bg-slate-800"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>

      {/* ========================================= */}
      {/* 4. MOBILE SIDEBAR DRAWER (<lg screens)    */}
      {/* ========================================= */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-charcoal-900/50 dark:bg-black/70 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`lg:hidden fixed top-0 bottom-0 left-0 w-72 max-w-[85vw] bg-cream-50 dark:bg-slate-900 border-r border-sage-200 dark:border-slate-800 z-50 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation drawer"
      >
        {/* Drawer Header */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-sage-200 dark:border-slate-800">
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-3 text-left"
            >
              <div className="w-9 h-9 rounded-xl overflow-hidden bg-sage-100 dark:bg-slate-800 p-1 border border-sage-300 dark:border-slate-700 shrink-0">
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
                  Full-Stack Dev
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

          {/* Drawer Nav Items */}
          <nav className="space-y-1.5">
            {isBlogDetailPage && (
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-sage-700 dark:text-gold-400 bg-sage-100 dark:bg-slate-800 mb-3"
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
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-sage-600 text-white dark:bg-gold-500/15 dark:text-gold-400 font-semibold"
                      : "text-charcoal-700 dark:text-slate-300 hover:bg-sage-100 dark:hover:bg-slate-800"
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
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-gold-400" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Drawer Social Links */}
        <div className="pt-6 border-t border-sage-200 dark:border-slate-800 space-y-3">
          <div className="text-[11px] font-medium tracking-wider uppercase text-charcoal-400 dark:text-slate-500">
            Connect
          </div>
          <div className="flex flex-col gap-2">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={`mobile-${social.name}`}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-2 rounded-xl border border-sage-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-800/60 text-charcoal-700 dark:text-slate-300 ${social.bgColor}`}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-sage-100 dark:bg-slate-700 text-charcoal-700 dark:text-slate-200 shrink-0">
                    <Icon className={`h-4 w-4 ${social.hoverColor}`} />
                  </div>
                  <span className="ml-3 text-xs font-semibold text-charcoal-800 dark:text-slate-200">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
