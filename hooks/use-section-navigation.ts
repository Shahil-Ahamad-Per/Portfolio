"use client";
import { useState, useEffect, useCallback } from "react";
import { SECTIONS } from "@/lib/nav-config";

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
        window.history.replaceState(null, "", `#${sectionId}`);
      }
      setActiveSection(sectionId);
    },
    [getHeaderOffset]
  );

  useEffect(() => {
    if (!active) return;

    let targetSection = "";
    try {
      const returnSection = sessionStorage.getItem("returnToSection");
      if (returnSection) {
        targetSection = returnSection;
        sessionStorage.removeItem("returnToSection");
      }
    } catch {
      // ignore
    }

    if (!targetSection && window.location.hash) {
      targetSection = window.location.hash.slice(1);
    }

    if (targetSection) {
      const performScroll = () => {
        scrollToSection(targetSection, true);
      };

      performScroll();
      const timer1 = setTimeout(performScroll, 50);
      const timer2 = setTimeout(performScroll, 150);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
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
              window.history.replaceState(null, "", `#${section}`);
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

    const handleNavigationEvent = () => {
      let target = "";
      try {
        const returnSection = sessionStorage.getItem("returnToSection");
        if (returnSection) {
          target = returnSection;
          sessionStorage.removeItem("returnToSection");
        }
      } catch {
        // ignore
      }

      if (!target) {
        target = window.location.hash.slice(1) || "home";
      }

      scrollToSection(target, false);
    };

    window.addEventListener("hashchange", handleNavigationEvent);
    window.addEventListener("popstate", handleNavigationEvent);
    return () => {
      window.removeEventListener("hashchange", handleNavigationEvent);
      window.removeEventListener("popstate", handleNavigationEvent);
    };
  }, [active, scrollToSection]);

  return { activeSection, scrollToSection };
}
