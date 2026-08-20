"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

interface BackToTopProps {
  onScrollToTop: () => void;
}

export function BackToTop({ onScrollToTop }: BackToTopProps) {
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
      onClick={onScrollToTop}
      aria-label="Back to top"
      className="lg:hidden fixed bottom-6 right-5 z-40 p-3 rounded-full bg-sage-600/90 dark:bg-gold-500/90 text-white dark:text-slate-900 shadow-xl backdrop-blur-md border border-white/20 active:scale-90 transition-all duration-300 animate-fadeIn"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
