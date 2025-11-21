"use client"

import type React from "react"

import { useCallback, useRef } from "react"

interface BackgroundClickHandlerProps {
  children: React.ReactNode
}

export function BackgroundClickHandler({ children }: BackgroundClickHandlerProps) {
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleBackgroundClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    const isInteractiveElement = target.closest('button, a, input, textarea, select, [role="button"], [tabindex]')

    if (isInteractiveElement) {
      return
    }

    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current)
    }

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = 1 - (e.clientY - rect.top) / rect.height // Flip Y for WebGL coordinates

    const clickEvent = new CustomEvent("backgroundClick", {
      detail: { x, y, timestamp: Date.now() },
    })
    window.dispatchEvent(clickEvent)

    animationTimeoutRef.current = setTimeout(() => {
      const stopEvent = new CustomEvent("backgroundClickStop")
      window.dispatchEvent(stopEvent)
    }, 1500)
  }, [])

  return (
    null
  )
}
