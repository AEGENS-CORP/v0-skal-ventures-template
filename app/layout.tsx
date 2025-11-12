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
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "600"], // Only load weights we actually use
  display: "swap",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400", "600", "700"], // Only load weights we actually use
  display: "swap",
})

const CANONICAL_URL = new URL("/", BASE_URL).toString()

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Intégrateur IA pour TPE PME | Automatisation assistants reporting",
    template: "%s | Aegens",
  },
  description:
    "Intégration et exploitation de solutions IA. Résultats rapides. Visite terrain et devis sous 48 h. Vendée, La Roche-sur-Yon, La Rochelle, Niort, Nantes, Poitiers, Angoulême.",
  keywords: [
    "intégrateur IA",
    "automatisation",
    "assistant IA",
    "reporting temps réel",
    "TPE PME",
    "Vendée",
    "La Roche-sur-Yon",
    "transformation digitale",
    "IA sur mesure",
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
    title: "Intégrateur IA pour TPE PME | Automatisation assistants reporting",
    description: "Intégration et exploitation de solutions IA. Résultats rapides. Visite terrain et devis sous 48 h.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intégrateur IA pour TPE PME | Automatisation assistants reporting",
    description: "Intégration et exploitation de solutions IA. Résultats rapides. Visite terrain et devis sous 48 h.",
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
