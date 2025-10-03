"use client"

import { useParticles } from "./particle-context"

export function Services() {
  const { setHovering } = useParticles()

  const services = [
    {
      number: "01",
      title: "Intelligence Artificielle Générative",
      description:
        "Développement de solutions IA personnalisées utilisant les derniers modèles de langage et de génération de contenu pour automatiser et optimiser vos processus métier.",
    },
    {
      number: "02",
      title: "Automatisation Intelligente",
      description:
        "Implémentation de systèmes d'automatisation avancés qui apprennent et s'adaptent, réduisant les coûts opérationnels tout en améliorant l'efficacité.",
    },
    {
      number: "03",
      title: "Analyse Prédictive",
      description:
        "Exploitation de vos données pour créer des modèles prédictifs précis qui anticipent les tendances et optimisent la prise de décision stratégique.",
    },
    {
      number: "04",
      title: "Intégration & Déploiement",
      description:
        "Intégration transparente de solutions IA dans votre infrastructure existante avec un accompagnement complet pour maximiser l'adoption et les résultats.",
    },
  ]

  return (
    <section id="services" className="py-24 bg-background relative z-10" data-entity="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm text-muted-foreground mb-4 tracking-wider uppercase font-semibold">
            Nos expertises principales
          </h2>
          <h3 className="text-4xl md:text-5xl font-light">Services d'excellence</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              data-entity="service"
            >
              <div className="flex items-start gap-6">
                <span className="text-6xl font-sentient font-extralight text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                  {service.number}
                </span>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <small className="block text-muted-foreground leading-relaxed">{service.description}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
