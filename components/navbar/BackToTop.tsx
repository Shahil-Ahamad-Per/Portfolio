"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

interface BackToTopProps {
  readonly onScrollToTop: () => void;
}

export function BackToTop({ onScrollToTop }: Readonly<BackToTopProps>) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={onScrollToTop}
      aria-label="Back to top"
      className="animate-fadeIn fixed bottom-6 right-5 z-40 rounded-full border border-white/20 bg-sage-600/90 p-3 text-white shadow-xl backdrop-blur-md transition-all duration-300 active:scale-90 dark:bg-gold-500/90 dark:text-slate-900 lg:hidden"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
