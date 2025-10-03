"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { primaryNav } from "@/lib/navigation"

export const NavigationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = primaryNav.filter((item) => !["Accueil", "Services", "Ressources", "Contact"].includes(item.label))

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-lg font-semibold text-white/90 hover:text-white transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Plus
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full right-0 mt-4 w-72 bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl overflow-hidden z-50">
            <div className="py-2">
              {menuItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-4 text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200 border-b border-white/5 last:border-b-0"
                >
                  <span className="font-semibold text-lg">{item.label}</span>
                  {item.description && <span className="block text-base text-white/60 mt-1">{item.description}</span>}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
