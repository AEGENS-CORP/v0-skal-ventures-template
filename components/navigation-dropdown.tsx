"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { createPortal } from "react-dom"
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"
import type { NavItem } from "@/lib/navigation"

type NavigationDropdownProps = {
  items: NavItem[]
}

export const NavigationDropdown = ({ items }: NavigationDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null)
  const [position, setPosition] = useState<{ top: number; right: number } | null>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof document === "undefined") {
      return
    }
    setPortalNode(document.getElementById("ae-nav-portal"))
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
    requestAnimationFrame(() => {
      buttonRef.current?.focus()
    })
  }, [])

  const updatePosition = useCallback(() => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const right = Math.max(window.innerWidth - rect.right, 16)
    setPosition({ top: rect.bottom + 8, right })
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    updatePosition()

    const handleResize = () => updatePosition()
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleResize, true)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleResize, true)
    }
  }, [isOpen, updatePosition])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node
      if (
        panelRef.current?.contains(target) ||
        buttonRef.current?.contains(target as Node)
      ) {
        return
      }
      closeMenu()
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        closeMenu()
        return
      }

      if (event.key === "Tab") {
        const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href]:not([tabindex="-1"])',
        )

        if (!focusable || focusable.length === 0) {
          return
        }

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)

    const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
      'a[href]:not([tabindex="-1"])',
    )
    focusable?.[0]?.focus()

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [closeMenu, isOpen])

  const renderPanel = useCallback((): ReactNode => {
    if (!portalNode || !isOpen || !position) {
      return null
    }

    return createPortal(
      <div
        ref={panelRef}
        className="ae-dropdown"
        id="ae-nav-dropdown-panel"
        style={{ top: `${position.top}px`, right: `${position.right}px` }}
        role="menu"
        aria-label="Menu complémentaire"
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="ae-focus-outline"
            onClick={closeMenu}
            role="menuitem"
          >
            {item.label}
          </Link>
        ))}
      </div>,
      portalNode,
    )
  }, [closeMenu, isOpen, items, portalNode, position])

  return (
    <div>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 text-lg font-semibold text-white/90 hover:text-white transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="ae-nav-dropdown-panel"
      >
        Plus
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {renderPanel()}
    </div>
  )
}
