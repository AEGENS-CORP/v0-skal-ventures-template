"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { createPortal } from "react-dom"
import { ChevronDown } from "lucide-react"
import { plusNavItems } from "@/lib/ae-content"

type DropdownPosition = {
  top: number
  left: number
  width: number
}

const getPortalElement = () => (typeof document !== "undefined" ? document.getElementById("ae-nav-portal") : null)

export const NavigationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState<DropdownPosition | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)

  const updatePosition = useCallback(() => {
    if (!buttonRef.current) {
      return
    }

    const rect = buttonRef.current.getBoundingClientRect()
    setPosition({
      top: rect.bottom + 12,
      left: Math.min(rect.left, Math.max(16, window.innerWidth - 320)),
      width: rect.width,
    })
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    updatePosition()

    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        closeMenu()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        closeMenu()
      }

      if (event.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>("a, button")
        if (focusable.length === 0) {
          return
        }

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        }
      }
    }

    const handleResize = () => {
      updatePosition()
    }

    document.addEventListener("mousedown", handleClick)
    document.addEventListener("keydown", handleKeyDown)
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleResize, true)

    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleResize, true)
    }
  }, [closeMenu, isOpen, updatePosition])

  useEffect(() => {
    if (!isOpen || !panelRef.current) {
      return
    }

    const focusable = panelRef.current.querySelectorAll<HTMLElement>("a, button")
    focusable[0]?.focus()
  }, [isOpen])

  const portal = useMemo(() => getPortalElement(), [])

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => {
          if (isOpen) {
            closeMenu()
            return
          }
          setIsOpen(true)
          requestAnimationFrame(() => {
            updatePosition()
          })
        }}
        className="flex items-center gap-2 text-lg font-semibold text-white/90 hover:text-white transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="ae-nav-dropdown"
      >
        Plus
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && portal && position &&
        createPortal(
          <div
            id="ae-nav-dropdown"
            ref={panelRef}
            role="menu"
            className="ae-dropdown"
            style={{ top: position.top, left: position.left, minWidth: Math.max(position.width, 240) }}
          >
            {plusNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                onClick={() => closeMenu()}
              >
                {item.label}
              </Link>
            ))}
          </div>,
          portal,
        )}
    </div>
  )
}
