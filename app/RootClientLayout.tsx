"use client"

import type React from "react"
import { ParticleProvider, useParticles } from "@/components/particle-context"
import { CookieBanner } from "@/components/cookie-banner"
import { StructuredData } from "@/components/structured-data"
import { HeadingIdProvider } from "@/components/heading-id-provider"
import { AeNavPortalMount } from "@/components/ae-nav-portal-mount"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollRevealController } from "@/components/scroll-reveal-controller"
import dynamic from "next/dynamic"
import { Suspense } from "react"

const GL = dynamic(() => import("@/components/gl").then((mod) => ({ default: mod.GL })), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black" />,
})

interface RootClientLayoutProps {
  children: React.ReactNode
  geistSans: { variable: string }
  geistMono: { variable: string }
  sourceSerif: { variable: string }
}

function GlobalBackground() {
  const { hovering, mousePosition, clickRipples, backgroundClickCenter, backgroundClickProgress } = useParticles()

  return (
    <div className="fixed inset-0 w-full h-full bg-black" style={{ zIndex: 0, pointerEvents: "none" }}>
      <Suspense fallback={<div className="w-full h-full bg-black" />}>
        <GL
          hovering={hovering}
          mousePosition={mousePosition}
          clickRipples={clickRipples}
          backgroundClickCenter={backgroundClickCenter}
          backgroundClickProgress={backgroundClickProgress}
        />
      </Suspense>
    </div>
  )
}

export function RootClientLayout({ geistSans, geistMono, sourceSerif, children }: RootClientLayoutProps) {
  return (
    <html lang="fr-FR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} antialiased ae-readable ae-dark min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <AeNavPortalMount />
        <ParticleProvider>
          <HeadingIdProvider />
          <ScrollToTop />
          <ScrollRevealController />
          <GlobalBackground />
          <div className="relative" style={{ zIndex: 50 }}>
            <Header />
          </div>
          <main className="flex-1 relative" style={{ zIndex: 10 }}>
            {children}
          </main>
          <div className="relative" style={{ zIndex: 50 }}>
            <Footer />
          </div>
          <CookieBanner />
          <StructuredData />
        </ParticleProvider>
      </body>
    </html>
  )
}
