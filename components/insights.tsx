"use client"

export function Insights() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sentient font-light mb-6">Perspectives d'avenir</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les tendances qui façonnent l'intelligence artificielle et transforment les industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg border">
            <h3 className="text-2xl font-semibold mb-4">Automatisation intelligente</h3>
            <p className="text-muted-foreground mb-6">
              L'IA révolutionne les processus métier en automatisant les tâches complexes et en optimisant les flux de
              travail pour une efficacité maximale.
            </p>
            <div className="text-sm text-muted-foreground">Impact: Réduction de 60% du temps de traitement</div>
          </div>

          <div className="bg-card p-8 rounded-lg border">
            <h3 className="text-2xl font-semibold mb-4">Analyse prédictive</h3>
            <p className="text-muted-foreground mb-6">
              Les algorithmes d'apprentissage automatique permettent d'anticiper les tendances et de prendre des
              décisions éclairées basées sur les données.
            </p>
            <div className="text-sm text-muted-foreground">Précision: Jusqu'à 95% de fiabilité prédictive</div>
          </div>

          <div className="bg-card p-8 rounded-lg border">
            <h3 className="text-2xl font-semibold mb-4">Personnalisation avancée</h3>
            <p className="text-muted-foreground mb-6">
              L'IA permet de créer des expériences sur mesure qui s'adaptent aux besoins spécifiques de chaque
              utilisateur en temps réel.
            </p>
            <div className="text-sm text-muted-foreground">
              Engagement: Augmentation de 40% de la satisfaction client
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
