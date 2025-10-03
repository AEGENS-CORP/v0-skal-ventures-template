import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "@/styles/ae-overrides.css"
import { ParticleProvider } from "@/components/particle-context"
import { CookieBanner } from "@/components/cookie-banner"
import { BASE_URL } from "@/lib/site-structure"
import { StructuredData } from "@/components/structured-data"
import { HeadingIdProvider } from "@/components/heading-id-provider"
import { AeNavPortalMount } from "@/components/ae-nav-portal-mount"

const CANONICAL_URL = new URL("/", BASE_URL).toString()

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "AI Agency - Intelligence Artificielle",
    template: "%s | Aegens",
  },
  description: "Agence spécialisée en intelligence artificielle et solutions innovantes",
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
    title: "AI Agency - Intelligence Artificielle",
    description: "Agence spécialisée en intelligence artificielle et solutions innovantes",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agency - Intelligence Artificielle",
    description: "Agence spécialisée en intelligence artificielle et solutions innovantes",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr-FR" className="dark">
      <body className="antialiased ae-readable ae-dark" suppressHydrationWarning>
        <ParticleProvider>
          <AeNavPortalMount />
          <HeadingIdProvider />
          {children}
          <CookieBanner />
          <StructuredData />
        </ParticleProvider>
      </body>
    </html>
  )
}
