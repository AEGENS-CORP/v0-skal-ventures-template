"use client"

import type React from "react"

import { useState } from "react"
import { Phone } from "lucide-react"

interface PhoneLinkProps {
  phoneNumber: string
  displayNumber?: string
  className?: string
  showIcon?: boolean
}

export function PhoneLink({ phoneNumber, displayNumber, className = "", showIcon = false }: PhoneLinkProps) {
  const [copied, setCopied] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    // Detect if mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (!isMobile) {
      // On desktop, copy to clipboard
      e.preventDefault()
      const cleanNumber = phoneNumber.replace(/[^0-9+]/g, "")
      navigator.clipboard.writeText(cleanNumber).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    }
    // On mobile, let the tel: link work normally
  }

  const cleanPhoneNumber = phoneNumber.replace(/[^0-9+]/g, "")
  const display = displayNumber || phoneNumber

  return (
    <a
      href={`tel:${cleanPhoneNumber}`}
      onClick={handleClick}
      className={`inline-flex items-center gap-2 hover:text-yellow-400 transition-colors border-popover-foreground ${className}`}
      title={copied ? "Numéro copié !" : "Cliquer pour appeler (mobile) ou copier (PC)"}
    >
      {showIcon && <Phone className="w-4 h-4" />}
      <span>{copied ? "✓ Copié !" : display}</span>
    </a>
  )
}
