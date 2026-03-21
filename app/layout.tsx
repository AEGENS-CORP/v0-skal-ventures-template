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
    default: "AEGENS | Accompagnement stratégique, pilotage, IA et automatisation",
    template: "%s | AEGENS",
  },
  description:
    "AEGENS accompagne les entreprises qui veulent prendre le virage de l'IA et des nouvelles technologies : vision, cockpit de pilotage, automatisation, audit et accompagnement terrain.",
  keywords: [
    "AEGENS",
    "accompagnement stratégique et opérationnel",
    "virage de l'IA",
    "nouvelles technologies",
    "cockpit de direction",
    "architecture de pilotage",
    "automatisation des processus",
    "assistants IA",
    "structuration des données",
    "audit des flux et processus",
    "pilotage d'activité",
    "transformation utile",
    "intervention sur site",
    "Vendée",
    "La Roche-sur-Yon",
    "La Rochelle",
    "Niort",
    "Nantes",
    "Poitiers",
    "Angoulême",
  ],
  authors: [{ name: "AEGENS" }],
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
    siteName: "AEGENS",
    url: CANONICAL_URL,
    title: "AEGENS | Accompagnement stratégique, pilotage, IA et automatisation",
    description:
      "AEGENS accompagne les entreprises qui veulent prendre le virage de l'IA et des nouvelles technologies : vision, cockpit de pilotage, automatisation, audit et accompagnement terrain.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AEGENS | Accompagnement stratégique, pilotage, IA et automatisation",
    description:
      "AEGENS accompagne les entreprises qui veulent prendre le virage de l'IA et des nouvelles technologies : vision, cockpit de pilotage, automatisation, audit et accompagnement terrain.",
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
