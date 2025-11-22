"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollRevealController() {
  const pathname = usePathname()

  useEffect(() => {
    // Small delay to ensure DOM is ready after route change
    const timeoutId = setTimeout(() => {
      const observerOptions = {
        threshold: 0.15, // Increased threshold from 0.1 to 0.15 to ensure better visibility before trigger
        rootMargin: "0px 0px -50px 0px",
      }

      const observer = new IntersectionObserver((entries) => {
        // Sort entries by vertical position to ensure ordered reveal
        const intersectingEntries = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.y - b.boundingClientRect.y)

        intersectingEntries.forEach((entry, index) => {
          // Staggered delay: 100ms between items
          setTimeout(() => {
            entry.target.classList.add("visible")
          }, index * 100) // Reduced stagger from 120ms to 100ms for snappier sequence

          observer.unobserve(entry.target)
        })
      }, observerOptions)

      const selectors = [
        ".scroll-reveal",
        ".scroll-reveal-premium",
        ".scroll-reveal-premium-fast",
        ".scroll-reveal-left",
        ".scroll-reveal-right",
        ".scroll-reveal-scale",
        ".scroll-reveal-rotate",
      ]

      const elements = document.querySelectorAll(selectors.join(", "))
      elements.forEach((el) => observer.observe(el))

      return () => observer.disconnect()
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [pathname])

  return null
}
