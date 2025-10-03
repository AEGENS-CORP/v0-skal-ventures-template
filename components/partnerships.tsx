"use client"

import { useParticles } from "./particle-context"

export function Partnerships() {
  const { setHovering } = useParticles()

  const partners = [
    {
      category: "Partenaires Technologiques",
      description: "Collaborations stratégiques avec les leaders de l'industrie",
      count: "25+ partenaires",
    },
    {
      category: "Institutions Académiques",
      description: "Recherche collaborative avec les universités de renom",
      count: "10+ universités",
    },
    {
      category: "Startups Innovantes",
      description: "Accompagnement et co-développement avec l'écosystème startup",
      count: "40+ startups",
    },
  ]

  const clients = ["Fortune 500", "Scale-ups", "PME Innovantes", "Institutions Publiques"]

  return (
    <section className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Écosystème Partenaires</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Un réseau de partenaires stratégiques pour maximiser l'impact de nos solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors cursor-pointer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <h3 className="text-xl font-semibold mb-4">{partner.category}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{partner.description}</p>
              <div className="text-sm font-medium text-primary">{partner.count}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Nos Clients</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((client, index) => (
              <div key={index} className="px-6 py-3 bg-muted/50 rounded-full text-sm font-medium">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
