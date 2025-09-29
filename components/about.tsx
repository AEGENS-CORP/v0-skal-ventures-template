"use client"

import { useParticles } from "./particle-context"
import { Button } from "./ui/button"

export function About() {
  const { setHovering } = useParticles()

  return (
    <section className="py-24 bg-muted/30 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-sentient font-extralight mb-8">
            Allier innovation, durabilité et efficacité
          </h2>

          

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Notre agence se veut acteur de la transition alimentaire dans le domaine des produits de l'IA. Nous
            proposons des solutions durables au service des entreprises de demain, en alliant innovation technologique
            et responsabilité éthique.
          </p>

          <Button size="lg" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            Découvrir notre approche
          </Button>
        </div>
      </div>
    </section>
  )
}
