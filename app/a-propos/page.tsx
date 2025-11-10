import { createPageMetadata } from "@/lib/metadata"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, TrendingUp, CheckCircle, Shield, Users, Target, LineChart, FileText } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = createPageMetadata({
  title: "À propos d'Aegens | Partenaire durable IA et automatisation, orienté ROI",
  path: "/a-propos",
  description:
    "Intégration et gestion technologique sur mesure pour TPE/PME. Gouvernance claire, sécurité intégrée, indicateurs mesurés. Visite terrain et devis sous 48 h.",
})

export default function AProposPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "À propos" }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-12 md:pb-16 px-4 sm:px-6 pt-52">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-[1.1]">
            À propos
          </h1>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed font-semibold">
              Partenaire durable dans l'intégration et la gestion des nouvelles technologies pour TPE/PME.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed">
              Solutions sur mesure. Croissance et ROI. Exécution pragmatique. Résultats mesurés.
            </p>
          </div>
        </div>
      </section>

      {/* Ce qui nous différencie */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-12 text-center">
            Ce qui nous différencie
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Impact mesuré",
                desc: "KPI cadrés, mesure avant/après incluse.",
                iconColor: "text-green-400",
              },
              {
                icon: Target,
                title: "Sur-mesure industrialisable",
                desc: "Briques réutilisables adaptées à vos flux.",
                iconColor: "text-white/60",
              },
              {
                icon: CheckCircle,
                title: "Agnostique outils",
                desc: "ERP, CRM, compta, e-commerce, WMS/MES, GED, ITSM.",
                iconColor: "text-white/60",
              },
              {
                icon: LineChart,
                title: "Gouvernance claire",
                desc: "Rôles, jalons, critères d'acceptation, suivi partagé.",
                iconColor: "text-white/60",
              },
              {
                icon: Shield,
                title: "Sécurité intégrée",
                desc: "Accès par rôles, environnements séparés, réversibilité.",
                iconColor: "text-white/60",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 md:p-8 border border-white/10 rounded-xl hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <item.icon
                    className={`w-10 h-10 md:w-12 md:h-12 ${item.iconColor} flex-shrink-0 group-hover:brightness-110 transition-all`}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl md:text-2xl font-semibold leading-tight">{item.title}</h3>
                </div>
                <p className="text-base md:text-lg text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-10 text-center flex items-center justify-center gap-4">
            <Zap className="w-12 h-12 md:w-14 md:h-14 text-yellow-400" />
            Mission
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 text-lg md:text-xl lg:text-2xl leading-relaxed text-white/80">
            <p>
              Relier vos outils. Supprimer la ressaisie. Fiabiliser la donnée. Mettre des indicateurs en temps réel
              quand les sources le permettent.
            </p>
            <p className="text-white/90 font-semibold">
              Donner au dirigeant un plan d'exécution simple et piloté par les faits.
            </p>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-10 text-center">Équipe</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-white/80">
            <p>
              <span className="font-semibold text-white/90">Aegens, 2 ingénieurs.</span> Intégration systèmes,
              IA/automatisation, data, produit.
            </p>
            <p>Réseau de spécialistes validés (web, n8n, Odoo/ERP, data, sécurité) sous pilotage Aegens.</p>
          </div>
        </div>
      </section>

      {/* Gouvernance et cadence */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-12 text-center">
            Gouvernance et cadence
          </h2>
          <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
            {[
              {
                icon: Zap,
                text: "Onboarding 2–4 semaines selon périmètre.",
                iconColor: "text-yellow-400",
              },
              {
                icon: Users,
                text: "Rituels: stand-up hebdo 20 min, point risques, démo courte.",
                iconColor: "text-white/60",
              },
              {
                icon: LineChart,
                text: "Tableau de bord partagé: avancement, incidents, dette, KPI.",
                iconColor: "text-white/60",
              },
              {
                icon: TrendingUp,
                text: "QBR trimestriel: valeur créée, arbitrages, feuille de route 90/180/360 jours.",
                iconColor: "text-green-400",
              },
              {
                icon: FileText,
                text: "Réversibilité documentée. Sortie propre prévue au contrat.",
                iconColor: "text-white/60",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 md:gap-5 p-6 md:p-8 bg-white/15 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <item.icon
                  className={`w-10 h-10 md:w-12 md:h-12 ${item.iconColor} flex-shrink-0 mt-1`}
                  strokeWidth={1.5}
                />
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards d'exécution */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-12 text-center">
            Standards d'exécution
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="p-6 md:p-8 border border-white/10 rounded-xl hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white/90">Definition of Done</h3>
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                Critères d'acceptation signés, jeux de tests, doc utilisateur, runbook d'exploitation.
              </p>
            </div>

            <div className="p-6 md:p-8 border border-white/10 rounded-xl hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white/90">Observabilité</h3>
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                Journaux d'exécution, alertes utiles, métrologie minimale.
              </p>
            </div>

            <div className="p-6 md:p-8 border border-white/10 rounded-xl hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white/90">Qualité</h3>
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                Revue croisée, recette dédiée, bascule progressive.
              </p>
            </div>

            <div className="p-6 md:p-8 border border-white/10 rounded-xl hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white/90">Adoption</h3>
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                Formation ciblée, gabarits, checklists, ownership côté client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Écosystème et partenaires */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-12 text-center">
            Écosystème et partenaires
          </h2>
          <div className="max-w-5xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white/90">Briques</h3>
              <p className="text-base md:text-lg leading-relaxed text-white/70">
                n8n, Odoo, suites Google/Microsoft, API LLM, bases SQL, Shopify/Presta/Woo,
                HubSpot/Pipedrive/Salesforce, GED/ITSM.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white/90">Partenaires</h3>
              <p className="text-base md:text-lg leading-relaxed text-white/70">
                Spécialistes ERP/CRM, data, sécurité. Alliances locales (CCI, BPI, pépinières).
              </p>
            </div>

            <p className="text-sm md:text-base italic text-white/50">
              Aucune affiliation implicite. Intégrations explicitées au cadrage.
            </p>
          </div>
        </div>
      </section>

      {/* Ce que nous ne faisons pas */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-12 text-center">
            Ce que nous ne faisons pas
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              "Refontes « big-bang » par défaut.",
              "Empilement d'outils non maîtrisés.",
              "Promesses chiffrées sans hypothèses signées.",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 md:p-8 rounded-xl border border-white/10 hover:bg-white/15 transition-all duration-300"
              >
                <span className="text-white/30 text-2xl mt-1">×</span>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Démarrer avec Aegens */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-12 text-center">
            Démarrer avec Aegens
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              "Visite terrain courte.",
              "Cadrage en 48 h.",
              "Pilote 30 j ciblé.",
              "Mise en production sécurisée.",
              "Ops managées pour faire vivre la solution.",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 md:p-7 bg-gradient-to-br from-white/20 to-white/15 rounded-xl border border-white/20 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold mb-3 text-white/80">{i + 1}</div>
                <p className="text-sm md:text-base leading-relaxed text-white/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-10 flex items-center justify-center gap-4">
            <Zap className="w-12 h-12 md:w-14 md:h-14 text-yellow-400" />
            Planifier une visite sur site
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto">
            Visite 60–90 min. Plan d'action et{" "}
            <Link href="/contact" className="underline hover:text-white transition-colors font-semibold">
              devis
            </Link>{" "}
            sous 48 h.
            <br />
            <span className="block mt-2">Orienté solution sur mesure et croissance ROI</span>
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90 text-lg sm:text-xl px-10 sm:px-12 md:px-16 py-6 sm:py-7 md:py-8 h-auto hover:scale-105 transition-all duration-300 shadow-2xl w-full sm:w-auto"
          >
            <Link href="/contact">Prendre contact</Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-12 text-center">FAQ</h2>
          <Accordion type="single" collapsible className="space-y-4 md:space-y-5">
            <AccordionItem
              value="item-1"
              className="border border-white/10 rounded-xl px-5 md:px-6 hover:bg-white/15 transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Êtes-vous une « agence IA » ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Non. Intégrateur-opérateur orienté résultats et exploitation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-white/10 rounded-xl px-5 md:px-6 hover:bg-white/15 transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Faut-il changer d'outils ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Non par défaut. Nous connectons l'existant. Alternatives proposées si le ROI est clair.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-white/10 rounded-xl px-5 md:px-6 hover:bg-white/15 transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Comment garantissez-vous l'adoption ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Cas d'usage priorisés, gabarits, formation courte, mesures d'usage, itérations rapides.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-white/10 rounded-xl px-5 md:px-6 hover:bg-white/15 transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Si le pilote n'atteint pas les critères ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Itérations ciblées ou ajustement de périmètre selon critères d'acceptation signés.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}
