import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "../styles/ae-overrides.css"

import { RootClientLayout } from "./RootClientLayout"
import { BASE_URL } from "@/lib/site-structure"

import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
})

const CANONICAL_URL = new URL("/", BASE_URL).toString()
const OG_IMAGE_URL = new URL("/logo-global.png", BASE_URL).toString()

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Diagnostic, cadrage et pilotage de projets pour PME industrielles",
    template: "%s | AEGENS",
  },
  applicationName: "AEGENS",
  creator: "AEGENS",
  publisher: "AEGENS",
  category: "Conseil en organisation et pilotage de projets",
  description:
    "AEGENS intervient auprès des PME industrielles pour poser un constat clair, cadrer les projets et sécuriser leur mise en œuvre.",
  keywords: [
    "AEGENS",
    "diagnostic fonctionnement opérationnel",
    "cadrage projet industriel",
    "cahier des charges fonctionnel",
    "pilotage projet industriel",
    "mise en œuvre projet industriel",
    "organisation opérationnelle",
    "PME industrielles",
    "coordination prestataires",
    "assistance maîtrise d'ouvrage industrie",
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
      "x-default": CANONICAL_URL,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/logo-global.png",
    shortcut: "/logo-global.png",
    apple: "/logo-global.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "AEGENS",
    url: CANONICAL_URL,
    title: "Diagnostic, cadrage et pilotage de projets pour PME industrielles | AEGENS",
    description:
      "AEGENS intervient auprès des PME industrielles pour poser un constat clair, cadrer les projets et sécuriser leur mise en œuvre.",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "AEGENS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagnostic, cadrage et pilotage de projets pour PME industrielles | AEGENS",
    description:
      "AEGENS intervient auprès des PME industrielles pour poser un constat clair, cadrer les projets et sécuriser leur mise en œuvre.",
    images: [OG_IMAGE_URL],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr-FR" className={`dark ${poppins.variable}`}>
      <body className="antialiased ae-readable ae-dark min-h-screen flex flex-col" suppressHydrationWarning>
        <RootClientLayout>{children}</RootClientLayout>
      </body>
    </html>
  )
}
