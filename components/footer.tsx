"use client"

import Link from "next/link"
import { footerLinks } from "@/lib/navigation"
import { useParticles } from "./particle-context"

export function Footer() {
  const { setHovering } = useParticles()

  return (
    <footer className="bg-black/90 border-t border-white/10 relative z-10 text-white">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        <div>
          <h3 className="text-2xl font-semibold">Skal Ventures</h3>
          <p className="text-white/60 text-sm">Contenu à venir.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="text-white/70 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-white/60">© {new Date().getFullYear()} Skal Ventures.</div>
      </div>
    </footer>
  )
}

