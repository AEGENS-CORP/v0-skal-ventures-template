"use client"

import { useParticles } from "./particle-context"

export function Process() {
  const { setHovering } = useParticles()

  const steps = [
    {
      step: "01",
      title: "Analyse & Stratégie",
      description: "Audit complet de vos besoins et définition de la roadmap optimale",
      duration: "1-2 semaines",
    },
    {
      step: "02",
      title: "Conception & Prototypage",
      description: "Création des maquettes et validation des concepts avec votre équipe",
      duration: "2-3 semaines",
    },
    {
      step: "03",
      title: "Développement",
      description: "Implémentation des solutions avec méthodologie agile et tests continus",
      duration: "4-8 semaines",
    },
    {
      step: "04",
      title: "Déploiement & Formation",
      description: "Mise en production sécurisée et formation de vos équipes",
      duration: "1-2 semaines",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background/50 to-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-sans text-muted-foreground mb-4 tracking-wider uppercase">Notre méthodologie</h2>
          <h3 className="text-4xl md:text-5xl font-sentient font-extralight mb-6">Processus éprouvé</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une approche structurée pour garantir le succès de votre projet
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-8 mb-12 last:mb-0 group cursor-pointer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-primary/30 bg-primary/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300">
                  <span className="text-primary font-sans font-bold">{step.step}</span>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <div className="flex items-center gap-4 mb-3">
                  <h4 className="text-xl font-sentient group-hover:text-primary transition-colors">{step.title}</h4>
                  <span className="text-sm text-muted-foreground font-sans px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {step.duration}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
