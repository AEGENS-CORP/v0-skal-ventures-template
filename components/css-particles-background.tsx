"use client"

import type React from "react"
import { useEffect, useState } from "react"

export function CSSParticlesBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="css-particles-wrapper">
      {Array.from({ length: 200 }).map((_, i) => {
        const size = 1 + Math.random() * 2
        const startX = Math.random() * 100
        const startY = Math.random() * 100
        const moveX = (Math.random() - 0.5) * 30
        const moveY = (Math.random() - 0.5) * 30
        const duration = 20 + Math.random() * 20
        const delay = Math.random() * 20
        const opacity = 0.3 + Math.random() * 0.4

        return (
          <div
            key={i}
            className="css-particle"
            style={
              {
                left: `${startX}%`,
                top: `${startY}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                "--move-x": `${moveX}vw`,
                "--move-y": `${moveY}vh`,
              } as React.CSSProperties
            }
          />
        )
      })}
    </div>
  )
}
