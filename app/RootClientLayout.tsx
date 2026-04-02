"use client"

import type React from "react"
import { ParticleProvider } from "@/components/particle-context"
import { CookieBanner } from "@/components/cookie-banner"
import { StructuredData } from "@/components/structured-data"
import { HeadingIdProvider } from "@/components/heading-id-provider"
import { AeNavPortalMount } from "@/components/ae-nav-portal-mount"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollRevealController } from "@/components/scroll-reveal-controller"
import { ChunkRecovery } from "@/components/chunk-recovery"

function GlobalBackground() {
  return (
    <div className="fixed inset-0 w-full h-full bg-black" style={{ zIndex: 0, pointerEvents: "none" }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-14%,rgba(140,148,160,0.18),transparent_44%),radial-gradient(circle_at_15%_105%,rgba(41,211,140,0.1),transparent_32%),linear-gradient(180deg,#040506_0%,#020304_100%)]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(120deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:18px_18px]" />
    </div>
  )
}

export function RootClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AeNavPortalMount />
      <ChunkRecovery />
      <ParticleProvider>
        <HeadingIdProvider />
        <ScrollToTop />
        <ScrollRevealController />
        <GlobalBackground />
        <div className="ae-contrast-overlay" />
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
    </>
  )
}
