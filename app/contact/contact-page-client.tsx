"use client"

import type React from "react"
import { useState } from "react"
import { Loader2, MapPin, Mail, Phone, ClipboardCheck } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { EmailLink } from "@/components/email-link"
import { PhoneLink } from "@/components/phone-link"

type FormStatus = "idle" | "loading" | "success" | "error"

export default function ContactPageClient() {
  const [status, setStatus] = useState<FormStatus>("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      let data: { ok?: boolean } | null = null
      try {
        data = await res.json()
      } catch {
        data = null
      }

      if (!res.ok || !data?.ok) {
        setStatus("error")
        return
      }

      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 pt-20 pb-4 px-4 sm:px-6 border-b border-slate-300/18">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Contact" }]} />
        </div>
      </div>

      <section className="relative z-10 pt-12 md:pt-16 pb-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="ae-surface-strong ae-industrial-block ae-tone-silver scroll-reveal-premium rounded-[22px] p-6 sm:p-8 md:p-10 text-center space-y-5">
            <h1 className="ae-hero-title text-[clamp(2rem,5.2vw,4rem)] font-bold leading-[1.06]">Parlons de votre projet</h1>
            <p className="ae-hero-intro text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              Diagnostic, cadrage et pilotage de mise en œuvre pour PME industrielles.
            </p>
            <p className="ae-text text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Partagez votre situation. Nous revenons vers vous avec un premier cadre de discussion clair.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="order-2 lg:order-1 ae-surface-strong ae-industrial-block ae-tone-gold scroll-reveal-left rounded-3xl p-6 md:p-8">
            <h2 className="ae-heading text-2xl md:text-3xl font-bold mb-6">Votre besoin</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm md:text-base font-medium mb-2 text-slate-100">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full px-4 py-3 bg-slate-950/72 border border-slate-300/30 rounded-lg focus:outline-none focus:border-slate-200/70 focus:ring-2 focus:ring-slate-200/25 transition-all text-base text-white placeholder:text-slate-300/60"
                  placeholder="Nom Prénom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm md:text-base font-medium mb-2 text-slate-100">
                  Email professionnel *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-950/72 border border-slate-300/30 rounded-lg focus:outline-none focus:border-slate-200/70 focus:ring-2 focus:ring-slate-200/25 transition-all text-base text-white placeholder:text-slate-300/60"
                  placeholder="nom@entreprise.fr"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm md:text-base font-medium mb-2 text-slate-100">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-slate-950/72 border border-slate-300/30 rounded-lg focus:outline-none focus:border-slate-200/70 focus:ring-2 focus:ring-slate-200/25 transition-all text-base text-white placeholder:text-slate-300/60"
                  placeholder="06 00 00 00 00"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm md:text-base font-medium mb-2 text-slate-100">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-slate-950/72 border border-slate-300/30 rounded-lg focus:outline-none focus:border-slate-200/70 focus:ring-2 focus:ring-slate-200/25 transition-all text-base text-white placeholder:text-slate-300/60"
                  placeholder="Nom de votre PME"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm md:text-base font-medium mb-2 text-slate-100">
                  Situation à clarifier *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-slate-950/72 border border-slate-300/30 rounded-lg focus:outline-none focus:border-slate-200/70 focus:ring-2 focus:ring-slate-200/25 transition-all resize-none text-base text-white placeholder:text-slate-300/60"
                  placeholder="Décrivez le contexte, les points de blocage et l'objectif du projet..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[linear-gradient(165deg,rgba(232,241,251,0.97)_0%,rgba(191,208,227,0.95)_45%,rgba(158,177,199,0.96)_100%)] text-slate-950 border border-slate-200/60 text-base md:text-lg px-8 py-4 font-semibold rounded-lg transition-all duration-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),inset_0_-1px_0_rgba(107,126,147,0.28),0_10px_24px_rgba(0,0,0,0.35)] hover:brightness-105 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" /> Envoi en cours...
                  </span>
                ) : (
                  "Envoyer"
                )}
              </button>

              {status === "success" && <p className="text-green-400 text-center">Message envoyé avec succès.</p>}
              {status === "error" && <p className="text-red-400 text-center">Une erreur est survenue. Merci de réessayer.</p>}
            </form>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="ae-surface ae-industrial-block ae-tone-bronze scroll-reveal-right rounded-3xl p-6 md:p-8">
              <h2 className="ae-heading text-2xl md:text-3xl font-bold mb-6">Ce que nous faisons en premier</h2>
              <ul className="space-y-3 ae-text">
                <li className="flex items-start gap-3">
                  <ClipboardCheck className="w-5 h-5 mt-1 ae-icon-accent" />
                  <span>Clarifier le besoin et les objectifs de décision.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ClipboardCheck className="w-5 h-5 mt-1 ae-icon-accent" />
                  <span>Identifier les priorités opérationnelles à traiter.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ClipboardCheck className="w-5 h-5 mt-1 ae-icon-accent" />
                  <span>Poser un cadre de travail concret pour la suite.</span>
                </li>
              </ul>
            </div>

            <div className="ae-surface ae-industrial-block ae-tone-silver scroll-reveal-right rounded-3xl p-6 md:p-8 space-y-4">
              <div className="flex items-start gap-3 ae-text">
                <Mail className="w-5 h-5 mt-1 ae-icon-accent" />
                <EmailLink email="contact@aegens.com" className="text-base md:text-lg" />
              </div>
              <div className="flex items-start gap-3 ae-text">
                <Phone className="w-5 h-5 mt-1 ae-icon-accent" />
                <PhoneLink
                  phoneNumber="+33745103015"
                  displayNumber="07 45 10 30 15"
                  className="text-base md:text-lg"
                />
              </div>
              <div className="flex items-start gap-3 ae-text">
                <MapPin className="w-5 h-5 mt-1 ae-icon-accent" />
                <span>18 Rue Ampère, ZI La Folie Sud, 85310 La Chaize-le-Vicomte</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
