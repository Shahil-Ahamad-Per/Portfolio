"use client"
import { useState, useEffect } from "react"

export function useWelcomeScreen() {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedBefore")
    if (hasVisited) {
      setShowWelcome(false)
    }
  }, [])

  const handleWelcomeExit = () => {
    setShowWelcome(false)
    localStorage.setItem("hasVisitedBefore", "true")
  }

  return { showWelcome, handleWelcomeExit }
}
