"use client";
import { useState, useEffect } from "react";

export function useWelcomeScreen() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const hasVisited = sessionStorage.getItem("hasVisitedInSession");
      if (!hasVisited) {
        setShowWelcome(true);
        sessionStorage.setItem("hasVisitedInSession", "true");
      } else {
        setShowWelcome(false);
      }
    } catch {
      // Fallback in case sessionStorage is not available
      setShowWelcome(false);
    }
    setIsLoaded(true);
  }, []);

  const handleWelcomeExit = () => {
    setShowWelcome(false);
    try {
      sessionStorage.setItem("hasVisitedInSession", "true");
    } catch {
      // ignore
    }
  };

  return { showWelcome: isLoaded && showWelcome, handleWelcomeExit };
}
