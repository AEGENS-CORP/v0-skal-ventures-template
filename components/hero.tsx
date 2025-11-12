"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { useParticles } from "./particle-context"
import { useScrollProgress } from "../hooks/use-scroll-progress"
import { Zap, TrendingUp } from "lucide-react"

export function Hero() {
  const { setHovering } = useParticles()
  const scrollProgress = useScrollProgress()

  const handleButtonHover = (isHovering: boolean) => {
    setHovering(isHovering)
  }

  const line1Transform = `translateX(${scrollProgress * 200}px)`
  const line2Transform = `translateX(${scrollProgress * -200}px)`
  const line3Transform = `translateX(${scrollProgress * 200}px)`
  const textOpacity = Math.max(0, 1 - scrollProgress * 2)
  const textBlur = scrollProgress * 10

  return (
    <section className="relative flex flex-col h-screen justify-start items-center">
      <div className="text-center relative z-10 w-full px-4 pt-48">
        <div className="flex justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-sm border-2 border-white/40 rounded-full font-semibold text-xs">
            <Zap className="w-4 h-4 text-yellow-400" />
            Résultats visibles en 1 mois
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-sm border-2 border-white/40 rounded-full font-semibold text-xs">
            <TrendingUp className="w-4 h-4 text-green-400" />
            ROI mesurable
          </div>
        </div>

        <h1
          className="mb-8 w-full space-y-2"
          aria-label="Partenaire durable pour l'intégration et la gestion des nouvelles technologies en TPE/PME"
        >
          <span
            aria-hidden
            className="block text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold transition-all duration-500 ease-out"
            style={{
              transform: line1Transform,
              opacity: textOpacity,
              filter: `blur(${textBlur}px)`,
            }}
          >
            Partenaire durable
          </span>
          <span
            aria-hidden
            className="block text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light transition-all duration-500 ease-out px-8 sm:px-12 md:px-16 lg:px-20"
            style={{
              transform: line2Transform,
              opacity: textOpacity,
              filter: `blur(${textBlur}px)`,
            }}
          >
            pour l'intégration
          </span>
          <span
            aria-hidden
            className="block text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light transition-all duration-500 ease-out"
            style={{
              transform: line3Transform,
              opacity: textOpacity,
              filter: `blur(${textBlur}px)`,
            }}
          >
            des nouvelles technologies
          </span>
        </h1>

        <div
          className="transition-all duration-500 ease-out max-w-4xl mx-auto"
          style={{
            opacity: textOpacity,
            filter: `blur(${textBlur}px)`,
            transform: `translateY(${scrollProgress * 50}px)`,
          }}
        >
          <h2 className="text-xl sm:text-2xl text-foreground/90 mb-6 leading-relaxed">
            Automatisation, assistants, reporting, audit.
          </h2>

          <div className="space-y-4 mb-6 max-w-2xl mx-auto">
            <p className="text-base text-muted-foreground tracking-normal font-sans">
              Visite 60–90 min.{" "}
              <Link href="/contact" className="text-primary hover:underline font-semibold">
                Plan d'action et devis
              </Link>{" "}
              sous 48 h.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-base font-semibold transition-all duration-500"
                onMouseEnter={() => handleButtonHover(true)}
                onMouseLeave={() => handleButtonHover(false)}
              >
                Planifier une visite sur site
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">Orienté solution sur mesure et croissance ROI</p>
        </div>
      </div>
    </section>
  )
}
