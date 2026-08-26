"use client";
import { useState, useEffect, useCallback } from "react";
import { SECTIONS, type SectionId } from "@/lib/nav-config";

export function useSectionNavigation(active: boolean) {
  const [activeSection, setActiveSection] = useState("home");

  const getHeaderOffset = useCallback(() => {
    if (typeof window === "undefined") return 32;
    return window.innerWidth >= 1024 ? 32 : 80;
  }, []);

  const scrollToSection = useCallback(
    (sectionId: string, updateHash: boolean = true) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const offset = getHeaderOffset();
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(0, elementPosition - offset),
        behavior: "smooth",
      });

      if (updateHash) {
        window.history.pushState(null, "", `#${sectionId}`);
      }
      setActiveSection(sectionId);
    },
    [getHeaderOffset]
  );

  useEffect(() => {
    if (!active) return;

    if (window.location.hash) {
      const section = window.location.hash.slice(1);
      scrollToSection(section, false);
    }
  }, [active, scrollToSection]);

  useEffect(() => {
    if (!active) return;

    const handleScroll = () => {
      const offset = getHeaderOffset();
      const scrollPosition = window.scrollY + offset + 50;
      for (const section of SECTIONS) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            const currentHash = window.location.hash.slice(1);
            if (currentHash !== section) {
              window.history.pushState(null, "", `#${section}`);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active, getHeaderOffset]);

  useEffect(() => {
    if (!active) return;

    const handleHashChange = () => {
      const section = window.location.hash.slice(1) || "home";
      scrollToSection(section, false);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [active, scrollToSection]);

  return { activeSection, scrollToSection };
}
