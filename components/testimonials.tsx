"use client"

import { useParticles } from "./particle-context"

export function Testimonials() {
  const { setHovering } = useParticles()

  const testimonials = [
    {
      quote:
        "L'équipe a transformé notre vision en une solution IA révolutionnaire. Les résultats dépassent nos attentes les plus optimistes.",
      author: "Marie Dubois",
      role: "Directrice Innovation, TechCorp",
    },
    {
      quote:
        "Grâce à leur expertise, nous avons automatisé 70% de nos processus tout en améliorant la qualité de service. Un partenariat exceptionnel.",
      author: "Jean-Pierre Martin",
      role: "CEO, InnovateLab",
    },
    {
      quote:
        "Leur approche éthique de l'IA et leur accompagnement personnalisé font toute la différence. Une équipe de rêve !",
      author: "Sophie Laurent",
      role: "CTO, FutureScale",
    },
  ]

  return (
    <section className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight space-y-2">
            <div className="text-left ml-12 sm:ml-20 md:ml-32 lg:ml-40 font-sans font-light">Une approche</div>
            <div className="text-center px-8 sm:px-12 md:px-16 lg:px-20 font-serif font-normal">globale</div>
            <div className="text-right mr-12 sm:mr-20 md:mr-32 lg:mr-40 font-mono font-light italic">pour l'avenir</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors cursor-pointer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="w-8 h-8 bg-primary rounded-full mb-6 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                </svg>
              </div>

              <blockquote className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>

              <div>
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
