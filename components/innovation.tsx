"use client"

import { useParticles } from "./particle-context"

export function Innovation() {
  const { setHovering } = useParticles()

  const innovations = [
    {
      title: "Recherche & Développement",
      description:
        "Nos équipes travaillent en permanence sur les dernières avancées en IA générative, apprentissage automatique et traitement du langage naturel.",
      metrics: "15+ projets R&D actifs",
    },
    {
      title: "Laboratoire d'Innovation",
      description:
        "Un espace dédié à l'expérimentation de nouvelles technologies et à la création de prototypes révolutionnaires.",
      metrics: "50+ prototypes développés",
    },
    {
      title: "Veille Technologique",
      description:
        "Une surveillance continue des tendances émergentes pour anticiper les besoins futurs de nos clients.",
      metrics: "100+ technologies analysées",
    },
  ]

  return (
    <section className="py-24 bg-muted/30 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sentient font-extralight mb-4">Innovation Continue</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Notre engagement envers l'innovation nous permet de rester à la pointe de la technologie
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {innovations.map((item, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
              <div className="text-sm font-medium text-primary">{item.metrics}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
