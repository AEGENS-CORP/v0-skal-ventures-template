"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"

interface EmailLinkProps {
  email: string
  className?: string
  showIcon?: boolean
}

export function EmailLink({ email, className = "", showIcon = false }: EmailLinkProps) {
  const [copied, setCopied] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (!isMobile) {
      e.preventDefault()
      navigator.clipboard
        .writeText(email)
        .then(() => {
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        })
        .catch((err) => {
          console.error("Erreur lors de la copie:", err)
        })
    }
    // On mobile, let the mailto: link work normally to open email app
  }

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleClick}
      className={`relative inline-flex items-center gap-2 hover:text-yellow-400 transition-colors ${className}`}
      title={copied ? "Email copié !" : "Cliquer pour ouvrir l'email (mobile) ou copier (PC)"}
    >
      {showIcon && <Mail className="w-4 h-4" />}
      <span>{copied ? "✓ Copié !" : email}</span>
    </a>
  )
}
