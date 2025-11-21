import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "../styles/ae-overrides.css"

import { RootClientLayout } from "./RootClientLayout"
import { BASE_URL } from "@/lib/site-structure"

import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "500", "600", "700"], // Only load weights we actually use
  display: "swap", // Improve FCP
  preload: true,
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "600"], // Only load weights we actually use
  display: "swap",
  preload: true,
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400", "600", "700"], // Only load weights we actually use
  display: "swap",
  preload: true,
})

const CANONICAL_URL = new URL("/", BASE_URL).toString()

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Aegens – Ingénierie IA & Automatisation pour TPE/PME",
    template: "%s | Aegens",
  },
  description:
    "Aegens accompagne les TPE/PME dans l'intégration d'IA sur mesure : automatisation des processus, assistants métier IA, tableaux de bord temps réel, audit et diagnostic. ROI en 4 mois. Vendée, La Roche-sur-Yon, La Rochelle, Niort, Nantes, Poitiers, Angoulême.",
  keywords: [
    "Aegens",
    "ingénierie IA",
    "intégrateur IA",
    "automatisation",
    "assistant IA métier",
    "assistants IA",
    "reporting temps réel",
    "tableaux de bord",
    "audit IA",
    "TPE PME",
    "Vendée",
    "La Roche-sur-Yon",
    "La Rochelle",
    "Niort",
    "Nantes",
    "Poitiers",
    "Angoulême",
    "transformation digitale",
    "IA sur mesure",
    "ROI rapide",
  ],
  authors: [{ name: "Aegens" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      "fr-FR": CANONICAL_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Aegens",
    url: CANONICAL_URL,
    title: "Aegens – Ingénierie IA & Automatisation pour TPE/PME",
    description:
      "Aegens accompagne les TPE/PME dans l'intégration d'IA sur mesure : automatisation des processus, assistants métier IA, tableaux de bord temps réel. ROI en 4 mois.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aegens – Ingénierie IA & Automatisation pour TPE/PME",
    description:
      "Aegens accompagne les TPE/PME dans l'intégration d'IA sur mesure : automatisation des processus, assistants métier IA, tableaux de bord temps réel. ROI en 4 mois.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <RootClientLayout geistSans={geistSans} geistMono={geistMono} sourceSerif={sourceSerif}>
      {children}
    </RootClientLayout>
  )
}
