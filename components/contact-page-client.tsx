"use client"

import type React from "react"
import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { AeBreadcrumbs } from "@/components/ae-breadcrumbs"
import {
  AlertTriangle,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  Send,
  Twitter,
} from "lucide-react"

const SUBJECT_OPTIONS = ["", "Web", "Cloud", "Data", "IA", "Autre"] as const
const CONTACT_EMAIL = "contact@aegens.com"

type FormState = {
  nameCompany: string
  email: string
  subject: string
  message: string
}

type FormStatus = "idle" | "loading" | "success" | "error"

const INITIAL_STATE: FormState = {
  nameCompany: "",
  email: "",
  subject: "",
  message: "",
}

export default function ContactPageClient() {
  const [formState, setFormState] = useState<FormState>(INITIAL_STATE)
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [emailCopied, setEmailCopied] = useState(false)

  const isLoading = status === "loading"
  const isSuccess = status === "success"
  const isError = status === "error"

  const canReset = useMemo(() => Object.values(formState).some((value) => value.length > 0), [formState])

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setStatus("idle")
      }, 6000)

      return () => clearTimeout(timer)
    }
    return undefined
  }, [isSuccess])

  useEffect(() => {
    if (!emailCopied) {
      return undefined
    }

    const timer = setTimeout(() => setEmailCopied(false), 2400)
    return () => clearTimeout(timer)
  }, [emailCopied])

  const updateField = (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { value } = event.target
      setFormState((previous) => ({ ...previous, [field]: value }))
    }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isLoading) {
      return
    }

    setStatus("loading")
    setErrorMessage(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null
        setStatus("error")
        setErrorMessage(payload?.error ?? "Échec de l'envoi, réessayez plus tard.")
        return
      }

      setStatus("success")
      setFormState(INITIAL_STATE)
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire de contact", error)
      setStatus("error")
      setErrorMessage("Échec de l'envoi, réessayez plus tard.")
    }
  }

  const handleEmailCopy = async () => {
    if (typeof navigator === "undefined" || !navigator.clipboard) {
      return
    }

    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setEmailCopied(true)
    } catch (error) {
      console.warn("Impossible de copier l'adresse email", error)
    }
  }

  return (
    <main className="relative isolate overflow-hidden">
      <div className="ae-contact-background" aria-hidden="true">
        <span className="ae-contact-orb ae-contact-orb--cyan" />
        <span className="ae-contact-orb ae-contact-orb--magenta" />
        <span className="ae-contact-gridlines" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <AeBreadcrumbs pathname="/contact" />

        <header className="max-w-3xl space-y-4">
          <p className="uppercase tracking-[0.32em] text-sm text-cyan-300/70">Contact</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Parlons de vos projets
          </h1>
          <p className="text-lg text-white/70 sm:text-xl">
            Écrivez autant ou aussi peu que vous voulez. Chaque message est traité avec une attention artisanale,
            qu'il s'agisse d'un mot rapide ou d'un plan de transformation complet.
          </p>
        </header>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <section className="space-y-10">
            <div className="ae-contact-panel">
              <h2 className="text-2xl font-semibold text-white">Canal direct</h2>
              <p className="mt-3 text-white/70">
                Nous restons joignables sur les canaux qui comptent : choisissez ce qui vous convient, sans contrainte.
              </p>
              <div className="mt-6 space-y-4">
                <Link
                  href={`mailto:${CONTACT_EMAIL}`}
                  onClick={handleEmailCopy}
                  className="group flex items-center justify-between gap-6 rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition duration-500 hover:border-cyan-300/60 hover:bg-cyan-500/10"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-wide text-white/50">Email direct</p>
                      <p className="text-lg font-semibold text-white">{CONTACT_EMAIL}</p>
                    </div>
                  </div>
                  <span
                    className={`text-sm font-semibold transition ${
                      emailCopied ? "text-emerald-300" : "text-cyan-200/80 group-hover:text-cyan-100"
                    }`}
                    aria-live="polite"
                  >
                    {emailCopied ? "Copié !" : "Copier"}
                  </span>
                </Link>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com",
                      label: "LinkedIn",
                    },
                    {
                      icon: Github,
                      href: "https://github.com",
                      label: "GitHub",
                    },
                    {
                      icon: Twitter,
                      href: "https://twitter.com",
                      label: "X / Twitter",
                    },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition duration-500 hover:border-cyan-300/60 hover:bg-cyan-500/10"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-cyan-200 transition group-hover:text-cyan-100">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <span className="font-semibold text-white">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="ae-contact-panel">
              <h2 className="text-2xl font-semibold text-white">Accès rapide</h2>
              <p className="mt-3 text-white/70">
                Préparez votre échange ou explorez nos offres avant d'écrire :
              </p>
              <div className="mt-6 grid gap-4">
                {[
                  { href: "/services", label: "Services" },
                  { href: "/solutions", label: "Solutions" },
                  { href: "/tarifs", label: "Tarifs" },
                  { href: "/faq", label: "FAQ" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent px-5 py-4 text-white transition duration-500 hover:border-cyan-300/60 hover:from-cyan-500/15"
                  >
                    <span className="text-lg font-semibold">{link.label}</span>
                    <span className="text-sm uppercase tracking-[0.2em] text-white/50">Explorer</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="ae-contact-form">
            <div className="mb-8 space-y-3">
              <h2 className="text-2xl font-semibold text-white">Écrivez un mot, une vision ou un plan complet</h2>
              <p className="text-white/60">
                Tous les champs sont optionnels : vous pouvez simplement dire « bonjour » ou détailler chaque étape de votre projet.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6" aria-live="polite">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold uppercase tracking-wide text-white/60">Nom / Entreprise</span>
                  <input
                    className="ae-contact-input"
                    type="text"
                    name="nameCompany"
                    autoComplete="name"
                    value={formState.nameCompany}
                    onChange={updateField("nameCompany")}
                    placeholder="Votre nom, votre structure ou un pseudonyme"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold uppercase tracking-wide text-white/60">Email</span>
                  <input
                    className="ae-contact-input"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formState.email}
                    onChange={updateField("email")}
                    placeholder="Pour recevoir une réponse (optionnel)"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold uppercase tracking-wide text-white/60">Sujet</span>
                <select
                  className="ae-contact-input"
                  name="subject"
                  value={formState.subject}
                  onChange={updateField("subject")}
                >
                  {SUBJECT_OPTIONS.map((option) => (
                    <option key={option || "none"} value={option}>
                      {option === "" ? "Laissez-nous choisir" : option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold uppercase tracking-wide text-white/60">Message</span>
                <textarea
                  className="ae-contact-input min-h-[200px]"
                  name="message"
                  value={formState.message}
                  onChange={updateField("message")}
                  placeholder="Partagez une idée, une contrainte, une ambition ou un simple mot."
                />
              </label>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="ae-contact-button"
                  disabled={isLoading}
                >
                  <span className="flex items-center gap-3">
                    <Send className="h-5 w-5" />
                    {isLoading ? "Envoi en cours..." : "Envoyer"}
                  </span>
                </button>

                {canReset && (
                  <button
                    type="button"
                    onClick={() => setFormState(INITIAL_STATE)}
                    className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40 transition hover:text-white/70"
                  >
                    Effacer
                  </button>
                )}
              </div>

              <div className="min-h-[48px]" aria-live="polite" aria-atomic="true">
                {isSuccess && (
                  <div className="ae-contact-toast" role="status">
                    <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                    <span>Message envoyé avec succès.</span>
                  </div>
                )}
                {isError && (
                  <div className="ae-contact-toast ae-contact-toast--error" role="alert">
                    <AlertTriangle className="h-5 w-5 text-amber-300" />
                    <span>{errorMessage ?? "Échec de l'envoi, réessayez plus tard."}</span>
                  </div>
                )}
              </div>
            </form>
          </section>
        </div>

        <section className="mt-20">
          <div className="ae-contact-map">
            <div className="ae-contact-map-overlay" />
            <div className="relative z-10 space-y-6 p-10 sm:p-14">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Chaque projet est une opportunité d’explorer les limites du possible.
              </h2>
              <p className="max-w-2xl text-lg text-white/70">
                Conçue comme un hub créatif, cette page est votre passerelle vers les expériences numériques les plus ambitieuses.
                Nous synchronisons design, IA et ingénierie pour transformer l'intuition en réalisations concrètes.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
