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
    <div className="fixed bottom-3 left-3 right-3 z-[9999] sm:left-auto sm:right-4 sm:max-w-[430px]">
      <div className="bg-[linear-gradient(132deg,rgba(226,237,251,0.12)_0%,rgba(255,255,255,0)_32%),repeating-linear-gradient(104deg,rgba(255,255,255,0.028)_0_1px,rgba(0,0,0,0)_1px_9px),linear-gradient(165deg,rgba(11,18,29,0.96)_0%,rgba(5,10,18,0.98)_100%)] backdrop-blur-xl border border-slate-300/32 rounded-2xl p-4 sm:p-5 text-white shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
        <h2 className="text-base font-semibold mb-2">Cookies</h2>
        <p className="text-sm text-slate-200/85 leading-relaxed">
          Nous utilisons des cookies pour les mesures d'audience et le marketing. Détails dans notre{" "}
          <Link className="underline text-slate-100 hover:text-white" href="/politique-de-confidentialite#cookies">
            politique de confidentialité
          </Link>
          .
        </p>
        <div className="mt-3 flex flex-wrap gap-2.5">
          <button
            onClick={() => handleConsent("accepted")}
            className="px-4 py-2 rounded-full bg-slate-100 text-slate-950 font-semibold hover:bg-white transition-colors"
          >
            Accepter
          </button>
          <button
            onClick={() => handleConsent("rejected")}
            className="px-4 py-2 rounded-full border border-slate-300/40 text-slate-100 hover:border-slate-200/70 transition-colors"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  )
}
