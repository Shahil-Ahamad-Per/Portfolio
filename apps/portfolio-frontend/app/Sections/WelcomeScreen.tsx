"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

interface WelcomeScreenProps {
  onExit: () => void
}

export default function WelcomeScreen({ onExit }: WelcomeScreenProps) {
  const [welcomeTextAnimated, setWelcomeTextAnimated] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Animate "Welcome" text
    const timer = setTimeout(() => setWelcomeTextAnimated(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      if (currentScrollY > window.innerHeight * 0.5) {
        onExit()
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [onExit])

  return (
    <div className="relative">
      <div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-cream-50 to-sage-50 dark:from-slate-900 dark:via-slate-800 dark:to-navy-900 transition-all duration-1000"
        style={{
          transform: `translateY(-${scrollY * 0.5}px)`,
          opacity: Math.max(0, 1 - scrollY / (window.innerHeight * 0.5)),
        }}
      >
        <div className="text-center">
          <h1
            className={`text-7xl md:text-9xl font-serif font-bold text-charcoal-800 dark:text-slate-100 mb-4 transition-opacity duration-1000 ${
              welcomeTextAnimated ? "opacity-100" : "opacity-0"
            }`}
          >
            Welcome
          </h1>
          <div className="w-48 h-1.5 bg-gradient-to-r from-sage-400 to-sage-600 dark:from-gold-400 dark:to-gold-600 mx-auto rounded-full animate-pulse mt-8" />
          {welcomeTextAnimated && (
            <div className="mt-12 flex flex-col items-center animate-fadeIn animation-delay-600">
              <ChevronDown className="h-10 w-10 text-sage-600 dark:text-gold-400 animate-bounceArrow" />
              <span className="text-lg font-medium text-charcoal-700 dark:text-slate-200 mt-2">
                Scroll to explore
              </span>
            </div>
          )}
        </div>
      </div>
      {/* Scrollable space */}
      <div className="h-[200vh]"></div>
    </div>
  )
}
