"use client"

import Link from "next/link"
import { useParticles } from "./particle-context"
import type { ReactNode } from "react"

interface InteractiveLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function InteractiveLink({ href, children, className, onClick }: InteractiveLinkProps) {
  const { setHovering } = useParticles()

  return (
    <Link
      href={href}
      className={className}
      onClick={onClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {children}
    </Link>
  )
}
