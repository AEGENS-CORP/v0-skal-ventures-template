"use client"

import { useParticles } from "./particle-context"

export function News() {
  const { setHovering } = useParticles()

  const articles = [
    {
      title: "L'avenir de l'IA générative dans l'entreprise",
      excerpt: "Comment les modèles de langage transforment les processus métier et créent de nouvelles opportunités.",
      date: "15 Mars 2024",
      category: "Tendances",
    },
    {
      title: "Éthique et IA : Notre approche responsable",
      excerpt: "Les principes qui guident notre développement d'solutions IA éthiques et transparentes.",
      date: "8 Mars 2024",
      category: "Éthique",
    },
    {
      title: "Cas d'usage : Automatisation intelligente",
      excerpt: "Retour d'expérience sur l'implémentation d'une solution d'automatisation pour un client Fortune 500.",
      date: "1 Mars 2024",
      category: "Cas Client",
    },
  ]

  const updates = [
    "Nouvelle certification AWS AI/ML obtenue",
    "Partenariat stratégique avec une université de renom",
    "Lancement de notre programme de recherche en IA quantique",
    "Expansion de l'équipe avec 10 nouveaux experts IA",
  ]

  return (
    <section className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-extralight mb-4">Actualités & Insights</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Restez informé de nos dernières innovations et réflexions sur l'IA
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="text-xs text-primary font-medium mb-2">{article.category}</div>
              <h3 className="text-lg font-semibold mb-3 line-clamp-2">{article.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{article.excerpt}</p>
              <div className="text-xs text-muted-foreground">{article.date}</div>
            </div>
          ))}
        </div>

        <div className="bg-muted/30 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-sans font-light mb-6 text-center">Dernières Actualités</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {updates.map((update, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{update}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
