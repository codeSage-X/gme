"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 20% of the page
      const scrolled = document.documentElement.scrollTop
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPercentage = (scrolled / maxHeight) * 100

      if (scrollPercentage > 20) {
        if (!isVisible && !isAnimating) {
          setIsVisible(true)
          setIsAnimating(true)
          // Reset animation state after animation completes
          setTimeout(() => setIsAnimating(false), 400)
        }
      } else {
        if (isVisible && !isAnimating) {
          setIsAnimating(true)
          // Hide element after animation completes
          setTimeout(() => {
            setIsVisible(false)
            setIsAnimating(false)
          }, 400)
        }
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [isVisible, isAnimating])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const getAnimationClass = () => {
    if (!isAnimating) return ""
    
    const scrolled = document.documentElement.scrollTop
    const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollPercentage = (scrolled / maxHeight) * 100
    
    return scrollPercentage > 20 ? "slide-up" : "slide-down"
  }

  return (
    <>
      {(isVisible || isAnimating) && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${getAnimationClass()}`}
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  )
}