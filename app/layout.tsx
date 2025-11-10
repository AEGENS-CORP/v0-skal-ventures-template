import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "../styles/ae-overrides.css"

import { RootClientLayout } from "./RootClientLayout"
import { BASE_URL } from "@/lib/site-structure"

import { Geist, Geist_Mono, Source_Serif_4, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
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
