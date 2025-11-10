import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Users, Target, Clock, Shield, Zap, TrendingUp } from "lucide-react"

export const metadata = createPageMetadata({
  title: "Vente et gestion — Du premier contact à l'exploitation",
  path: "/services/vente-gestion",
  description:
    "Processus cadré du premier contact à l'exploitation. Décisions rapides, mise en production sans friction, accompagnement long terme avec gouvernance transparente.",
})

export default function VenteGestionPage() {
  return (
    <SimplePageLayout
      title="Vente et gestion: du premier contact à l'exploitation"
      description="Processus cadré. Décisions rapides. Mise en production sans friction. Accompagnement long terme."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Vente / Gestion" },
      ]}
    >
      {/* Parcours */}
      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Parcours</h2>

        <div className="space-y-4">
          <div className="p-6 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Prospection & qualification</h3>
                <p className="text-white/70">
                  Ciblage ICP. Messages orientés gains. Go/No-Go sur douleur, sponsor, données, délai.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Audit & cadrage</h3>
                <p className="text-white/70">
                  Visite terrain. Baseline et KPI. Risques. Hypothèses. Note de cadrage 3–5 pages sous 48 h.{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    Sur devis
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  Pilote
                  <Zap className="w-5 h-5 text-yellow-400" />
                </h3>
                <p className="text-white/70">
                  30 jours. Un flux automatisé ou un assistant métier ou un tableau temps réel. Démos hebdo. Critères
                  d'acceptation.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Déploiement</h3>
                <p className="text-white/70">
                  Sécurité, accès par rôles, reprises, formation, runbook. Bascule progressive.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  Exploitation & valeur
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </h3>
                <p className="text-white/70">
                  Support/SLA, supervision, petites évolutions, QBR trimestriel. Rapport mensuel de valeur.
                  Réversibilité garantie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gouvernance et relation client */}
      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Gouvernance et relation client</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-white/10 rounded-lg bg-white/5">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Onboarding</h3>
            </div>
            <p className="text-white/70">2–4 semaines suivant périmètre</p>
          </div>
          <div className="p-6 border border-white/10 rounded-lg bg-white/5">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Revues hebdomadaires</h3>
            </div>
            <p className="text-white/70">Suivi delivery en continu</p>
          </div>
          <div className="p-6 border border-white/10 rounded-lg bg-white/5">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Support réactif</h3>
            </div>
            <p className="text-white/70">Prise en compte &lt; 4 h</p>
          </div>
          <div className="p-6 border border-white/10 rounded-lg bg-white/5">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Dashboard partagé</h3>
            </div>
            <p className="text-white/70">Avancement, risques, KPI en temps réel</p>
          </div>
        </div>
      </section>

      {/* Offres et modèle */}
      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Offres et modèle</h2>
        <div className="space-y-4">
          <div className="p-6 border border-white/10 rounded-lg bg-white/5">
            <h3 className="text-lg font-semibold mb-2">Intégration sur mesure</h3>
            <p className="text-white/70">
              <Link href="/contact" className="text-primary hover:underline">
                Sur devis
              </Link>{" "}
              après cadrage
            </p>
          </div>
          <div className="p-6 border border-white/10 rounded-lg bg-white/5">
            <h3 className="text-lg font-semibold mb-2">Opérations managées</h3>
            <p className="text-white/70">
              <Link href="/contact" className="text-primary hover:underline">
                Sur devis
              </Link>{" "}
              avec SLO/SLA
            </p>
          </div>
          <div className="p-6 border border-white/10 rounded-lg bg-white/5">
            <h3 className="text-lg font-semibold mb-2">Variable indexé sur gains réels</h3>
            <p className="text-white/70">Croissance ou économies, contractualisé (cas sélectionnés)</p>
          </div>
        </div>
      </section>

      {/* Cas d'usage transverses */}
      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Cas d'usage transverses</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-white/10 rounded-lg bg-white/5">
            <h3 className="text-lg font-semibold mb-2">Commercial/Marketing</h3>
            <p className="text-white/70">Devis→commande→facture, relances, RAG offres</p>
          </div>
          <div className="p-6 border border-white/10 rounded-lg bg-white/5">
            <h3 className="text-lg font-semibold mb-2">Production/Logistique</h3>
            <p className="text-white/70">TRS, retards, stocks, alertes</p>
          </div>
          <div className="p-6 border border-white/10 rounded-lg bg-white/5">
            <h3 className="text-lg font-semibold mb-2">Finance</h3>
            <p className="text-white/70">Rapprochements, DSO, prévision simple</p>
          </div>
          <div className="p-6 border border-white/10 rounded-lg bg-white/5">
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <p className="text-white/70">Tri tickets, réponses guidées, base RAG</p>
          </div>
          <div className="p-6 border border-white/10 rounded-lg bg-white/5">
            <h3 className="text-lg font-semibold mb-2">RH/Organisation</h3>
            <p className="text-white/70">Onboarding, notes de frais, comptes-rendus</p>
          </div>
        </div>
        <p className="text-white/70 italic">
          Tout est étudiable. Adaptation au secteur, à la maturité digitale, et aux objectifs.
        </p>
      </section>

      {/* Partenaires & écosystème */}
      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Partenaires & écosystème</h2>
        <p className="text-white/70 leading-relaxed">
          n8n, Odoo, API LLM, bases de données, hébergeurs, suites Google/Microsoft; spécialistes web/data/sécurité;
          alliances locales (CCI, BPI, pépinières). Intégrations déclarées. Aucune affiliation implicite.
        </p>
      </section>

      {/* Sécurité & conformité */}
      <section className="space-y-6">
        <div className="flex items-center justify-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Sécurité & conformité</h2>
        </div>
        <ul className="space-y-3 text-white/70">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span>DPA/RGPD disponible sur demande</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span>Journaux d'audit et traçabilité complète</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span>Cloisonnement strict des environnements</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span>Réversibilité et sortie sous 30 jours prévues au contrat</span>
          </li>
        </ul>
      </section>

      {/* KPI suivis */}
      <section className="space-y-6">
        <div className="flex items-center justify-center gap-3">
          <TrendingUp className="w-8 h-8 text-green-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">KPI suivis de bout en bout</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Taux RDV",
            "Délai devis",
            "Taux de signature",
            "Délai mise en prod",
            "Disponibilité indicateurs",
            "MTTR support",
            "Marge/ROI incrémental",
          ].map((kpi) => (
            <div key={kpi} className="p-4 border border-white/10 rounded-lg bg-white/5">
              <p className="text-white/70 font-medium">{kpi}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 pt-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Planifier une visite sur site</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            On observe. On mesure. Vous décidez avec un{" "}
            <Link href="/contact" className="text-primary hover:underline">
              plan et un devis
            </Link>{" "}
            sous 48 h.
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
            <Link href="/contact">Prendre rendez-vous</Link>
          </Button>
        </div>
      </section>
    </SimplePageLayout>
  )
}
