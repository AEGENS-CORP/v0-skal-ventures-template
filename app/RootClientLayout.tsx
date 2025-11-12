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
import { GL } from "@/components/gl"
import { CSSParticlesBackground } from "@/components/css-particles-background"
import { Suspense, useState, useEffect } from "react"

interface RootClientLayoutProps {
  children: React.ReactNode
  geistSans: { variable: string }
  geistMono: { variable: string }
  sourceSerif: { variable: string }
}

function GlobalBackground() {
  const { hovering, mousePosition, clickRipples, backgroundClickCenter, backgroundClickProgress } = useParticles()
  const [isIOS, setIsIOS] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    const platform = navigator.platform.toLowerCase()

    const iOS =
      /iphone|ipad|ipod/.test(userAgent) ||
      (/macintosh/.test(userAgent) && navigator.maxTouchPoints > 1) ||
      platform.includes("iphone") ||
      platform.includes("ipad") ||
      platform.includes("ipod")

    setIsIOS(iOS)
    setMounted(true)

    console.log("[v0] ===== iOS Detection =====")
    console.log("[v0] iOS detected:", iOS)
    console.log("[v0] User agent:", navigator.userAgent)
    console.log("[v0] Platform:", navigator.platform)
    console.log("[v0] Max touch points:", navigator.maxTouchPoints)
    console.log("[v0] Screen width:", window.innerWidth)
    console.log("[v0] ===========================")
  }, [])

  if (!mounted) {
    return (
      <div className="fixed inset-0 w-full h-full bg-black" style={{ zIndex: 0 }}>
        <CSSParticlesBackground />
      </div>
    )
  }

  return (
    <div
      className="fixed inset-0 w-full h-full bg-black"
      style={{ zIndex: 0, pointerEvents: "none", overflow: "hidden" }}
    >
      {isIOS ? (
        <>
          {console.log("[v0] Rendering CSS Particles for iOS")}
          <CSSParticlesBackground />
        </>
      ) : (
        <Suspense fallback={<CSSParticlesBackground />}>
          {console.log("[v0] Rendering WebGL for non-iOS")}
          <GL
            hovering={hovering}
            mousePosition={mousePosition}
            clickRipples={clickRipples}
            backgroundClickCenter={backgroundClickCenter}
            backgroundClickProgress={backgroundClickProgress}
          />
        </Suspense>
      )}
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
