"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function CSSParticlesBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.log("[v0] CSS Particles Background mounted")
  }, [])

  if (!mounted) return null

  return (
    <div className="css-particles-wrapper">
      {Array.from({ length: 80 }).map((_, i) => {
        const size = 1 + Math.random() * 5
        const startX = Math.random() * 100
        const startY = Math.random() * 100
        const endX = Math.random() * 100
        const endY = Math.random() * 100
        const duration = 15 + Math.random() * 25
        const delay = Math.random() * 10

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
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                "--tx": `${endX}vw`,
                "--ty": `${endY}vh`,
                "--i": i,
              } as React.CSSProperties
            }
          />
        )
      })}
    </div>
  )
}
