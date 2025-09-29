"use client"

import { useParticles } from "./particle-context"

export function Pricing() {
  const { setHovering } = useParticles()

  const plans = [
    {
      name: "Starter",
      price: "2,500",
      period: "projet",
      description: "Parfait pour les petites entreprises qui débutent",
      features: [
        "Consultation stratégique",
        "Développement MVP",
        "Support 30 jours",
        "Documentation complète",
        "Formation équipe",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "8,500",
      period: "projet",
      description: "Solution complète pour entreprises en croissance",
      features: [
        "Tout du plan Starter",
        "Architecture scalable",
        "Intégrations avancées",
        "Support 90 jours",
        "Monitoring & analytics",
        "Tests automatisés",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Sur mesure",
      period: "",
      description: "Solutions personnalisées pour grandes entreprises",
      features: [
        "Tout du plan Professional",
        "Architecture sur mesure",
        "Support prioritaire 24/7",
        "SLA garantis",
        "Équipe dédiée",
        "Maintenance continue",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/50 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-muted-foreground mb-4 tracking-wider uppercase">Nos tarifs</h2>
          <h3 className="text-4xl md:text-5xl font-light mb-6">Plans transparents</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez la solution qui correspond à vos besoins et votre budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                plan.popular ? "border-primary bg-primary/5 scale-105" : "border-white/10 bg-white/5 hover:bg-white/10"
              }`}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h4 className="text-xl font-medium mb-2">{plan.name}</h4>
                <div className="mb-2">
                  <span className="text-3xl font-light">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">€ / {plan.period}</span>}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Commencer
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
