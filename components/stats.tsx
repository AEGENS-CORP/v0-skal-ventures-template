"use client"

import { useParticles } from "./particle-context"

export function Stats() {
  const { setHovering } = useParticles()

  const stats = [
    {
      number: "150+",
      label: "Projets réalisés",
      description: "Solutions déployées avec succès",
    },
    {
      number: "98%",
      label: "Satisfaction client",
      description: "Taux de recommandation",
    },
    {
      number: "24/7",
      label: "Support technique",
      description: "Assistance continue",
    },
    {
      number: "5 ans",
      label: "D'expertise",
      description: "Dans l'IA et l'automatisation",
    },
  ]

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="text-5xl md:text-6xl font-sentient font-extralight text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <h4 className="text-xl font-sentient mb-2 group-hover:text-primary transition-colors">{stat.label}</h4>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
