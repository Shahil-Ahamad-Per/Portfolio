"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { DesktopSidebar } from "./navbar/DesktopSidebar";
import { SocialDock } from "./navbar/SocialDock";
import { MobileHeader } from "./navbar/MobileHeader";
import { MobileDrawer } from "./navbar/MobileDrawer";
import { BackToTop } from "./navbar/BackToTop";

interface HeaderProps {
  readonly theme: string | undefined;
  readonly setTheme: (theme: string) => void;
  readonly activeSection?: string;
  readonly scrollToSection?: (sectionId: string) => void;
}

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

  const handleHomeClick = () => handleNavClick("home");

  const scrollToTop = () => {
    if (isMainPage && scrollToSection) {
      scrollToSection("home");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
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
      <DesktopSidebar
        theme={theme}
        toggleTheme={toggleTheme}
        isItemActive={isItemActive}
        handleNavClick={handleNavClick}
        isBlogDetailPage={isBlogDetailPage}
      />
      <SocialDock />
      <MobileHeader
        theme={theme}
        toggleTheme={toggleTheme}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        onHomeClick={handleHomeClick}
      />
      <MobileDrawer
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        isItemActive={isItemActive}
        handleNavClick={handleNavClick}
        isBlogDetailPage={isBlogDetailPage}
      />
      <BackToTop onScrollToTop={scrollToTop} />
    </>
  );
}
