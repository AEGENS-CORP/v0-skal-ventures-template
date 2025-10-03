"use client"

import Link from "next/link"
import { GL } from "./gl"
import { Button } from "./ui/button"
import { useParticles } from "./particle-context"
import { useScrollProgress } from "../hooks/use-scroll-progress"

export function Hero() {
  const { hovering, setHovering, mousePosition, clickRipples, backgroundClickCenter, backgroundClickProgress } =
    useParticles()
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
    <section className="relative flex flex-col h-screen justify-center items-center">
      <GL
        hovering={hovering}
        mousePosition={mousePosition}
        clickRipples={clickRipples}
        backgroundClickCenter={backgroundClickCenter}
        backgroundClickProgress={backgroundClickProgress}
      />

      <div className="text-center relative z-10 w-full pt-16">
        <h1 className="mb-6 w-full space-y-2" aria-label="Créer l'audacieux futur">
          <span
            aria-hidden
            className="block text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold transition-all duration-300 ease-out"
            style={{
              transform: line1Transform,
              opacity: textOpacity,
              filter: `blur(${textBlur}px)`,
            }}
          >
            Créer
          </span>
          <span
            aria-hidden
            className="block text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light italic transition-all duration-300 ease-out px-8 sm:px-12 md:px-16 lg:px-20"
            style={{
              transform: line2Transform,
              opacity: textOpacity,
              filter: `blur(${textBlur}px)`,
            }}
          >
            l'audacieux
          </span>
          <span
            aria-hidden
            className="block text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light transition-all duration-300 ease-out"
            style={{
              transform: line3Transform,
              opacity: textOpacity,
              filter: `blur(${textBlur}px)`,
            }}
          >
            futur
          </span>
        </h1>

        <div
          className="transition-all duration-300 ease-out max-w-2xl mx-auto px-4"
          style={{
            opacity: textOpacity,
            filter: `blur(${textBlur}px)`,
            transform: `translateY(${scrollProgress * 50}px)`,
          }}
        >
          <h3 className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed font-semibold">
            Nous transformons votre vision en solutions d'intelligence artificielle révolutionnaires qui redéfinissent
            votre industrie.
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center font-normal text-background">
            <Link href="#contact">
              <Button
                size="lg"
                className="px-8 py-6 text-lg"
                onMouseEnter={() => handleButtonHover(true)}
                onMouseLeave={() => handleButtonHover(false)}
              >
                Démarrer un projet
              </Button>
            </Link>
            <Link href="#services">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg bg-transparent"
                onMouseEnter={() => handleButtonHover(true)}
                onMouseLeave={() => handleButtonHover(false)}
              >
                Nos services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
