"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface ParticleContextType {
  hovering: boolean
  setHovering: (hovering: boolean) => void
  mousePosition: { x: number; y: number }
  clickRipples: Array<{ x: number; y: number; time: number }>
  backgroundClickCenter: { x: number; y: number } | null
  backgroundClickProgress: number
}

const ParticleContext = createContext<ParticleContextType | undefined>(undefined)

export function ParticleProvider({ children }: { children: ReactNode }) {
  const [hovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [clickRipples, setClickRipples] = useState<Array<{ x: number; y: number; time: number }>>([])
  const [backgroundClickCenter] = useState<{ x: number; y: number } | null>(null)
  const [backgroundClickProgress] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      }
      setMousePosition(newPosition)
    }

    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
        time: Date.now(),
      }
      setClickRipples((prev) => [...prev, newRipple])

      setTimeout(() => {
        setClickRipples((prev) => prev.filter((ripple) => ripple.time !== newRipple.time))
      }, 3000)
    }

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        const newRipple = {
          x: (touch.clientX / window.innerWidth) * 2 - 1,
          y: -(touch.clientY / window.innerHeight) * 2 + 1,
          time: Date.now(),
        }
        setClickRipples((prev) => [...prev, newRipple])

        setTimeout(() => {
          setClickRipples((prev) => prev.filter((ripple) => ripple.time !== newRipple.time))
        }, 3000)
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        setMousePosition({
          x: (touch.clientX / window.innerWidth) * 2 - 1,
          y: -(touch.clientY / window.innerHeight) * 2 + 1,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("click", handleClick)
    window.addEventListener("touchstart", handleTouchStart)
    window.addEventListener("touchmove", handleTouchMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("click", handleClick)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [])

  return (
    <ParticleContext.Provider
      value={{
        hovering,
        setHovering: () => {},
        mousePosition,
        clickRipples,
        backgroundClickCenter,
        backgroundClickProgress,
      }}
    >
      {children}
    </ParticleContext.Provider>
  )
}

export function useParticles() {
  const context = useContext(ParticleContext)
  if (context === undefined) {
    throw new Error("useParticles must be used within a ParticleProvider")
  }
  return context
}
