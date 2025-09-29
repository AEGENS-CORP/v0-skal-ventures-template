"use client"

export function Resources() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sentient font-light mb-6">Ressources et expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Accédez à notre base de connaissances et bénéficiez de notre expertise technique approfondie
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-8 rounded-lg border">
            <h3 className="text-2xl font-semibold mb-4">Centre de formation</h3>
            <p className="text-muted-foreground mb-6">
              Programmes de formation personnalisés pour vos équipes sur les technologies d'intelligence artificielle et
              leur mise en œuvre pratique.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Formation aux outils d'IA générative
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Ateliers pratiques sur l'apprentissage automatique
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Certification en intelligence artificielle
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-lg border">
            <h3 className="text-2xl font-semibold mb-4">Support technique</h3>
            <p className="text-muted-foreground mb-6">
              Assistance technique dédiée pour garantir le bon fonctionnement et l'évolution de vos solutions d'IA.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Support 24/7 pour les systèmes critiques
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Monitoring proactif des performances
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Mises à jour et optimisations continues
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-muted/30 p-8 rounded-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-muted-foreground">Projets réalisés</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-muted-foreground">Taux de satisfaction client</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-muted-foreground">Années d'expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
