"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const STORAGE_KEY = "cookie-consent"

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null
    setVisible(!stored)
  }, [])

  const handleConsent = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(STORAGE_KEY, value)
    setVisible(false)
  }

  if (!visible) {
    return null
  }

  return (
    <div className="fixed bottom-4 inset-x-0 px-4 z-[9999]">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-white shadow-lg">
        <h2 className="text-lg font-semibold mb-2">Cookies</h2>
        <p className="text-sm text-white/80">
          Nous utilisons des cookies nécessitant votre consentement pour les mesures d'audience et le marketing. Vous pouvez en
          savoir plus dans notre <Link className="underline" href="/cookies">politique cookies</Link>.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={() => handleConsent("accepted")}
            className="px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-white/80 transition"
          >
            Accepter
          </button>
          <button
            onClick={() => handleConsent("rejected")}
            className="px-4 py-2 rounded-full border border-white/40 hover:border-white/70 transition"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  )
}
