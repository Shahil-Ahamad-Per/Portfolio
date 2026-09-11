"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Sun, Moon, Menu, X, ArrowUp } from "lucide-react";
import { BackToTop } from "./navbar/BackToTop";

interface HeaderProps {
  readonly theme: string | undefined;
  readonly setTheme: (theme: string) => void;
  readonly activeSection?: string;
  readonly scrollToSection?: (sectionId: string) => void;
}

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "experience", label: "Experience" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
] as const;

export default function NavBar({
  theme,
  setTheme,
  activeSection = "home",
  scrollToSection,
}: Readonly<HeaderProps>) {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMainPage = pathname === "/";
  const isBlogDetailPage = pathname.startsWith("/blog/");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const scrollToTop = () => {
    if (isMainPage && scrollToSection) {
      scrollToSection("home");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isItemActive = (item: string) =>
    isMainPage &&
    (activeSection === item ||
      (item === "home" && !activeSection) ||
      (item === "tech-stack" && activeSection === "skills"));

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header
        role="banner"
        className="border-surface-container-high/60 bg-surface/85 fixed inset-x-0 top-0 z-50 border-b shadow-[0_1px_8px_rgba(0,0,0,0.03)] backdrop-blur-md transition-colors duration-300"
      >
        <div className="mx-auto flex h-20 max-w-[1360px] items-center justify-between gap-space-md px-margin md:px-margin-tablet lg:px-margin-desktop">
          {/* Brand Identity */}
          <div className="flex items-center gap-space-lg">
            {isBlogDetailPage ? (
              <Link
                href="/"
                className="group flex items-center gap-space-sm"
                aria-label="Back to Portfolio"
              >
                <div className="relative flex items-center justify-center rounded-full bg-surface-container p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <img
                    alt="Profile"
                    className="h-8 w-8 rounded-full object-cover"
                    src="/profile.jpg"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm leading-none tracking-tight text-primary transition-colors group-hover:text-primary-container">
                    Shahil Ahamad
                  </span>
                  <span className="mt-0.5 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                    ← Back to Portfolio
                  </span>
                </div>
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => handleNavClick("home")}
                className="group flex items-center gap-space-sm text-left focus:outline-none"
                aria-label="Go to Home"
              >
                <div className="relative flex items-center justify-center rounded-full bg-surface-container p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <img
                    alt="Shahil Ahamad Profile"
                    className="h-8 w-8 rounded-full object-cover"
                    src="/profile.jpg"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm leading-none tracking-tight text-primary transition-colors group-hover:text-primary-container">
                    Shahil Ahamad
                  </span>
                  <span className="mt-0.5 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                    Web Developer
                  </span>
                </div>
              </button>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-space-lg lg:flex"
          >
            {NAV_LINKS.map((link) => {
              const active = isItemActive(link.id);
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`font-label-lg text-label-lg transition-colors duration-200 ${
                    active
                      ? "font-semibold text-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-space-sm sm:gap-space-md">
            {/* Dark / Light Mode Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container text-on-surface transition-colors hover:bg-surface-container-high hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 rotate-0 text-secondary transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="h-4 w-4 text-primary transition-transform duration-300" />
              )}
            </button>

            {/* Let's Connect CTA */}
            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className="hidden items-center justify-center rounded-lg bg-primary px-space-md py-2.5 font-label-lg text-label-lg text-on-primary shadow-sm transition-all hover:bg-primary-container hover:text-on-primary-container active:scale-95 sm:inline-flex"
            >
              Let's Connect
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container text-on-surface transition-colors hover:bg-surface-container-high hover:text-primary lg:hidden"
              aria-label={
                mobileOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Overlay & Dropdown */}
        {mobileOpen && (
          <div className="border-surface-container-high/70 bg-surface/95 animate-fadeIn border-t px-margin py-space-lg backdrop-blur-xl transition-all lg:hidden">
            <nav
              className="flex flex-col gap-space-sm"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link) => {
                const active = isItemActive(link.id);
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between rounded-lg px-space-md py-2.5 text-left font-label-lg text-label-lg transition-colors ${
                      active
                        ? "bg-surface-container font-semibold text-primary"
                        : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    <span>{link.label}</span>
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => handleNavClick("contact")}
                className="mt-space-sm inline-flex w-full items-center justify-center rounded-lg bg-primary px-space-md py-3 font-label-lg text-label-lg text-on-primary shadow-sm transition-all hover:bg-primary-container hover:text-on-primary-container"
              >
                Let's Connect
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Floating Back to top button */}
      <BackToTop onScrollToTop={scrollToTop} />
    </>
  );
}
