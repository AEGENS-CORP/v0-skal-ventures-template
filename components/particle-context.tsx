"use client"

import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from "react"

interface ParticleContextType {
  hovering: boolean
  setHovering: (hovering: boolean) => void
  mousePosition: { x: number; y: number }
  clickRipples: Array<{ x: number; y: number; time: number }>
  backgroundClickCenter: { x: number; y: number } | null
  backgroundClickProgress: number
  addParticles: (count: number) => void
}

const ParticleContext = createContext<ParticleContextType | undefined>(undefined)

export function ParticleProvider({ children }: { children: ReactNode }) {
  const [hovering, setHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [clickRipples, setClickRipples] = useState<Array<{ x: number; y: number; time: number }>>([])
  const [backgroundClickCenter, setBackgroundClickCenter] = useState<{ x: number; y: number } | null>(null)
  const [backgroundClickProgress, setBackgroundClickProgress] = useState(0)
  const backgroundClickTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const animationFrameRef = useRef<number | null>(null)

  const easeOutCubic = (t: number): number => {
    return 1 - Math.pow(1 - t, 3)
  }

  const startBackgroundClickAnimation = (clickPosition: { x: number; y: number }) => {
    if (backgroundClickTimeoutRef.current) {
      clearTimeout(backgroundClickTimeoutRef.current)
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    setBackgroundClickCenter(clickPosition)
    setHovering(true)

    const startTime = Date.now()
    const duration = 1000 // Reduced duration to 1 second

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easedProgress = progress < 0.7 ? 1 : easeOutCubic((progress - 0.7) / 0.3)
      setBackgroundClickProgress(1 - easedProgress)

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        setHovering(false)
        setBackgroundClickCenter(null)
        setBackgroundClickProgress(0)
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)
  }

  const addParticles = (count: number) => {
    const centerX = Math.random() * 2 - 1
    const centerY = Math.random() * 2 - 1

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count
      const radius = Math.random() * 0.3
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius

      const newRipple = {
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
        time: Date.now() + i * 50, // Stagger the particles
      }

      setTimeout(() => {
        setClickRipples((prev) => [...prev, newRipple])
        setTimeout(() => {
          setClickRipples((prev) => prev.filter((ripple) => ripple.time !== newRipple.time))
        }, 3000)
      }, i * 50)
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractiveElement = target.closest(
        'button, a, input, textarea, select, [role="button"], [tabindex], .hover-card',
      )

      const newRipple = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
        time: Date.now(),
      }
      setClickRipples((prev) => [...prev, newRipple])

      if (!isInteractiveElement) {
        startBackgroundClickAnimation({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: -(e.clientY / window.innerHeight) * 2 + 1,
        })
      }

      setTimeout(() => {
        setClickRipples((prev) => prev.filter((ripple) => ripple.time !== newRipple.time))
      }, 3000)
    }

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        const target = e.target as HTMLElement
        const isInteractiveElement = target.closest(
          'button, a, input, textarea, select, [role="button"], [tabindex], .hover-card',
        )

        const newRipple = {
          x: (touch.clientX / window.innerWidth) * 2 - 1,
          y: -(touch.clientY / window.innerHeight) * 2 + 1,
          time: Date.now(),
        }
        setClickRipples((prev) => [...prev, newRipple])

        if (!isInteractiveElement) {
          startBackgroundClickAnimation({
            x: (touch.clientX / window.innerWidth) * 2 - 1,
            y: -(touch.clientY / window.innerHeight) * 2 + 1,
          })
        }

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
      if (backgroundClickTimeoutRef.current) {
        clearTimeout(backgroundClickTimeoutRef.current)
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <ParticleContext.Provider
      value={{
        hovering,
        setHovering,
        mousePosition,
        clickRipples,
        backgroundClickCenter,
        backgroundClickProgress,
        addParticles,
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

export function useParticleContext() {
  const context = useContext(ParticleContext)
  if (context === undefined) {
    throw new Error("useParticleContext must be used within a ParticleProvider")
  }
  return context
}
