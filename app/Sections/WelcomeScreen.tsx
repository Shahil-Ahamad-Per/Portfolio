"use client";

import { useEffect, useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";

interface WelcomeScreenProps {
  readonly onExit: () => void;
}

export default function WelcomeScreen({
  onExit,
}: Readonly<WelcomeScreenProps>) {
  const [welcomeTextAnimated, setWelcomeTextAnimated] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const startSmoothExit = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);

    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      window.history.replaceState(null, "", "#home");
    }

    // Allow the smooth slide-up curtain animation (700ms) to complete before unmounting
    setTimeout(() => {
      onExit();
    }, 700);
  }, [isExiting, onExit]);

  useEffect(() => {
    // Animate "Welcome" text reveal after 500ms
    const timer = setTimeout(() => setWelcomeTextAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Listen for scroll wheel gestures on laptop/desktop
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 8 && !isExiting) {
        startSmoothExit();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isExiting, startSmoothExit]);

  // Listen for touch swipe gestures on mobile/tablet
  useEffect(() => {
    let startTouchY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startTouchY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      if (startTouchY - currentY > 25 && !isExiting) {
        startSmoothExit();
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isExiting, startSmoothExit]);

  // Standard scroll listener (supports direct window.scrollY changes and unit tests)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (currentScrollY > window.innerHeight * 0.5) {
        if (typeof window !== "undefined") {
          window.scrollTo(0, 0);
          window.history.replaceState(null, "", "#home");
        }
        onExit();
      } else if (currentScrollY > 15 && !isExiting) {
        startSmoothExit();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isExiting, onExit, startSmoothExit]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (["Enter", " ", "ArrowDown", "PageDown"].includes(e.key)) {
      e.preventDefault();
      startSmoothExit();
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className={`ease-[cubic-bezier(0.76,0,0.24,1)] fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface transition-transform duration-700 dark:bg-[radial-gradient(ellipse_85%_65%_at_50%_50%,#172621_0%,#0e1513_100%)] ${
          isExiting ? "pointer-events-none -translate-y-full" : "translate-y-0"
        }`}
        style={
          !isExiting
            ? {
                transform: `translateY(-${scrollY * 0.3}px)`,
                opacity: Math.max(0, 1 - scrollY / (window.innerHeight * 0.5)),
              }
            : undefined
        }
      >
        {/* Content Container - Full-bleed width with WELCOME dead-center */}
        <div className="relative z-10 flex w-full flex-col items-center justify-center px-4 text-center sm:px-6 md:px-8">
          {/* Monumental Screen-Covering WELCOME Heading */}
          <h1
            style={{
              fontFamily:
                '"Cinzel", var(--font-display), "Newsreader", "Playfair Display", Georgia, serif',
            }}
            className={`font-cinzel whitespace-nowrap font-serif text-[clamp(3.5rem,15.2vw,17.5rem)] font-bold uppercase leading-none tracking-[0.03em] sm:tracking-[0.04em] ${
              welcomeTextAnimated
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-8 scale-[0.97] opacity-0"
            } select-none text-primary transition-all duration-1000 ease-out dark:bg-gradient-to-b dark:from-[#f0f8f4] dark:via-[#8bc7af] dark:to-[#578f7a] dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_4px_35px_rgba(139,199,175,0.22)]`}
          >
            Welcome
          </h1>
        </div>

        {/* Interactive Scroll to explore CTA - positioned down at bottom */}
        {welcomeTextAnimated && (
          <div className="animate-fadeIn animation-delay-600 absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center sm:bottom-12">
            <button
              type="button"
              onClick={startSmoothExit}
              onKeyDown={handleKeyDown}
              aria-label="Scroll to explore landing page"
              className="group flex flex-col items-center gap-2 rounded-xl p-2 transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {/* Modern Mouse Scroll Pill */}
              <div className="border-primary/40 dark:border-primary/50 flex h-8 w-5 items-start justify-center rounded-full border-2 p-1 shadow-sm transition-all group-hover:border-primary dark:shadow-[0_0_12px_rgba(139,199,175,0.15)] dark:group-hover:border-primary">
                <div className="animate-scrollWheel h-1.5 w-1 rounded-full bg-primary shadow-sm dark:bg-primary dark:shadow-[0_0_6px_rgba(139,199,175,0.8)]" />
              </div>

              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-on-surface-variant transition-colors group-hover:text-primary dark:text-on-surface-variant dark:group-hover:text-primary sm:text-sm">
                Scroll to explore
              </span>

              <ChevronDown className="animate-bounceArrow h-4 w-4 text-secondary transition-colors group-hover:text-primary dark:text-secondary" />
            </button>
          </div>
        )}
      </div>

      {/* Scrollable space */}
      <div className="h-[200vh]"></div>
    </div>
  );
}
