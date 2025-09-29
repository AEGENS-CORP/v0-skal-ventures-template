"use client"

export function Methodology() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sentient font-light mb-6">Notre méthodologie</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une approche structurée pour garantir le succès de vos projets d'intelligence artificielle
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Analyse et diagnostic</h3>
                <p className="text-muted-foreground">
                  Évaluation complète de vos besoins, contraintes techniques et objectifs métier pour définir la
                  stratégie optimale.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Conception et prototypage</h3>
                <p className="text-muted-foreground">
                  Développement de prototypes fonctionnels pour valider les concepts et affiner les solutions avant le
                  déploiement.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Déploiement et optimisation</h3>
                <p className="text-muted-foreground">
                  Mise en production sécurisée avec monitoring continu et optimisations basées sur les performances
                  réelles.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg border">
            <h3 className="text-2xl font-semibold mb-6">Garanties de qualité</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span>Tests automatisés</span>
                <span className="text-muted-foreground">100%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span>Documentation technique</span>
                <span className="text-muted-foreground">Complète</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span>Support post-déploiement</span>
                <span className="text-muted-foreground">12 mois</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span>Maintenance évolutive</span>
                <span className="text-muted-foreground">Continue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
