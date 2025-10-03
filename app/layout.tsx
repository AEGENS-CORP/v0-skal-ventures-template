import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ParticleProvider } from "@/components/particle-context"
import { CookieBanner } from "@/components/cookie-banner"

export const metadata: Metadata = {
  title: "AI Agency - Intelligence Artificielle",
  description: "Agence spécialisée en intelligence artificielle et solutions innovantes",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark">
      <body className="antialiased" suppressHydrationWarning>
        <ParticleProvider>
          {children}
          <CookieBanner />
        </ParticleProvider>
      </body>
    </html>
  )
}
