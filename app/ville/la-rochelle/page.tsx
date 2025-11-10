import { createPageMetadata } from "@/lib/metadata"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PhoneLink } from "@/components/phone-link"

export const metadata = createPageMetadata({
  title: "Intégrateur IA La Rochelle | Automatisation PME Charente-Maritime | Assistant IA & Reporting",
  path: "/ville/la-rochelle",
  description:
    "Intégrateur IA pour TPE/PME à La Rochelle. Automatisation des processus, assistant IA métier, reporting temps réel, audit 360°. Visite 60–90 min. Plan d'action et devis sous 48 h.",
})

export default function LaRochellePage() {
  return (
    <div className="min-h-screen text-white">
      {/* JSON-LD LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Aegens",
            url: "https://aegens.com",
            image: "https://aegens.com/og.jpg",
            telephone: "+33745103015",
            address: {
              "@type": "PostalAddress",
              streetAddress: "18 Rue Ampère – ZI La Folie Sud",
              addressLocality: "La Chaize-le-Vicomte",
              postalCode: "85310",
              addressCountry: "FR",
            },
            areaServed: ["La Rochelle", "Charente-Maritime", "Nouvelle-Aquitaine"],
            sameAs: [],
          }),
        }}
      />

      {/* JSON-LD FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Faut-il changer d'outils pour automatiser ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Non par défaut. Nous connectons vos ERP, CRM, comptabilité, e-commerce, WMS/MES et GED existants. Une alternative n'est proposée que si le ROI est clair.",
                },
              },
              {
                "@type": "Question",
                name: "Le reporting est-il en temps réel à La Rochelle ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui quand la source le permet ; sinon latence minute/heure définie au cadrage, avec sources de vérité tracées.",
                },
              },
              {
                "@type": "Question",
                name: "Quand voit-on un premier résultat ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un pilote ciblé peut livrer des résultats en environ 30 jours selon périmètre et accès.",
                },
              },
              {
                "@type": "Question",
                name: "Comment gérez-vous les données sensibles ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Accès par rôles, cloisonnement, journaux d'audit. Hébergement UE possible. DPA/RGPD sur demande.",
                },
              },
            ],
          }),
        }}
      />

      {/* JSON-LD Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://aegens.com/" },
              {
                "@type": "ListItem",
                position: 2,
                name: "La Rochelle",
                item: "https://aegens.com/ville/la-rochelle",
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-52 md:pt-56 lg:pt-60 pb-12 px-4 sm:px-6 md:pb-0">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 text-balance leading-[1.1]">
            Intégrateur IA à La Rochelle (Charente-Maritime)
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 mb-10 md:mb-12 leading-relaxed max-w-4xl mx-auto">
            Automatisation, assistants métier, analyse & reporting, audit 360°
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90 text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 h-auto w-full sm:w-auto transition-all duration-300 hover:scale-[1.02] shadow-xl"
          >
            <Link href="/contact" className="block">
              <span className="font-semibold flex items-center gap-2 justify-center">
                <Zap className="w-5 h-5 text-yellow-400" />
                Planifier une visite sur site
              </span>
              <span className="block text-xs sm:text-sm font-normal mt-2 opacity-80">
                Visite 60–90 min. Plan d'action et devis sous 48 h.
              </span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Pourquoi cette page */}
      <section className="py-12 px-4 sm:px-6 bg-white/5 md:py-3.5">
        <div className="max-w-5xl mx-auto">
          <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
            Vous cherchez un intégrateur IA à La Rochelle pour automatiser vos flux, déployer un assistant IA métier sur
            vos documents et livrer un reporting temps réel connecté à vos outils. Intervention prioritaire pour TPE/PME
            rochelaises avec approche terrain, sur-mesure, croissance/ROI.
          </p>
        </div>
      </section>

      {/* Services IA pour TPE/PME */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
            Services IA pour TPE/PME à La Rochelle
          </h2>
          <div className="space-y-6 md:space-y-8">
            {[
              {
                title: "Automatisation des processus",
                desc: "ERP, CRM, compta, e-commerce, WMS/MES, GED.",
                examples:
                  "Exemples: devis→commande→facture, OCR factures fournisseurs avec contrôles, relances clients pilotées.",
                link: "/services/automatisation",
                linkText: "Voir Automatisation",
                icon: <Zap className="w-6 h-6 text-yellow-400" />,
              },
              {
                title: "Assistant IA métier sur vos documents",
                desc: "RAG sécurisé, réponses sourcées.",
                examples: "Exemples: réponse client assistée, tri/solutions tickets, synthèse de contrats.",
                link: "/services/assistant-ia-metier",
                linkText: "Voir Assistant IA Métier",
                icon: null,
              },
              {
                title: "Analyse & Reporting en temps réel",
                desc: "Quand la source le permet.",
                examples: "Exemples: tableaux direction et ateliers, alertes seuil, drill-down client/produit/canal.",
                link: "/services/analyse-reporting",
                linkText: "Voir Analyse & Reporting",
                icon: <TrendingUp className="w-6 h-6 text-green-400" />,
              },
              {
                title: "Audit 360° en 5 jours",
                desc: "Processus, SI, données, supply chain.",
                examples: "Livrables: blueprint as-is→to-be, backlog priorisé, business case, roadmap 90/180/360 j.",
                link: "/services/audit",
                linkText: "Voir Audit",
                icon: null,
              },
              {
                title: "Vente / Gestion",
                desc: "Parcours complet jusqu'au support/SLA.",
                examples: "",
                link: "/services/vente-gestion",
                linkText: "Voir Vente / Gestion",
                icon: null,
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 md:p-8 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4 flex items-center gap-3">
                  {service.title}
                  {service.icon}
                </h3>
                <p className="text-white/70 text-base md:text-lg mb-2">{service.desc}</p>
                {service.examples && <p className="text-white/60 text-sm md:text-base mb-4">{service.examples}</p>}
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors text-sm md:text-base font-semibold"
                >
                  {service.linkText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cas d'usage locaux */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
            Cas d'usage locaux (La Rochelle et agglomération)
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Nautisme / industries portuaires",
                desc: "La Pallice, Chef-de-Baie: traçabilité lots, stocks et approvisionnements, planification interventions, alertes dérives.",
              },
              {
                title: "Logistique / transport",
                desc: "Synchronisation WMS↔ERP, OTD, rupture et réassort dynamiques.",
              },
              {
                title: "Agro / IAA",
                desc: "Enregistrements qualité, contrôles, reporting ateliers en direct.",
              },
              {
                title: "Tourisme / hôtellerie-restauration",
                desc: "Assistant FAQ interne, gestion demandes multicanal, tableaux de réservation/ROAS.",
              },
              {
                title: "Services B2B / agences / cabinets",
                desc: "Assistant documentaire sourcé, saisies automatisées, SLA support.",
              },
              {
                title: "Retail / e-commerce",
                desc: "Catalogue propre, commandes→expédition→facture, dashboards marketing.",
              },
            ].map((useCase, i) => (
              <div
                key={i}
                className="p-6 md:p-7 border border-white/10 rounded-xl bg-black/50 hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 leading-tight">{useCase.title}</h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-white/60 text-center mt-10 md:mt-12 italic text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Tout est étudiable. Pas de refonte lourde par défaut. On part de vos idées et de votre contexte (Périgny,
            Lagord, Aytré, Dompierre, etc.).
          </p>
        </div>
      </section>

      {/* Comment on travaille */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
            Comment on travaille (local et pragmatique)
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {[
              {
                num: "1",
                title: "Visite sur site à La Rochelle",
                desc: "60–90 min, observation des flux et exceptions.",
              },
              {
                num: "2",
                title: "Cadrage sous 48 h",
                desc: "Objectifs, KPI, jalons, responsabilités, risques.",
              },
              {
                num: "3",
                title: "Pilote 30 jours",
                desc: "Un flux automatisé ou un assistant ou un tableau temps réel.",
              },
              {
                num: "4",
                title: "Mise en production",
                desc: "Sécurité, formation, bascule progressive, runbook.",
              },
              {
                num: "5",
                title: "Ops managées",
                desc: "Supervision, petites évolutions, revues régulières.",
              },
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center text-xl md:text-2xl font-bold mb-4 md:mb-6 border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  {step.num}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 leading-tight">{step.title}</h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Résultats attendus et mesure */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center flex items-center justify-center gap-3">
            <TrendingUp className="w-10 h-10 text-green-400" />
            Résultats attendus et mesure
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 lg:p-10">
            <ul className="space-y-4 md:space-y-5 text-white/70 text-base md:text-lg">
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-1" />
                <span>Objectifs chiffrés validés au cadrage.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-1" />
                <span>Mesure avant/après sur source de vérité (ERP, CRM, WMS/MES, compta).</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-1" />
                <span>
                  Focus: temps de saisie, erreurs, délais, disponibilité temps réel selon sources, adoption par équipe.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Études de cas */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">Études de cas</h2>
          <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-8">
            Démos reproductibles et exemples anonymisés au lancement. Publication des cas validés client ensuite avec
            tableaux avant/après.
          </p>
          <Link
            href="/etudes-de-cas"
            className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors text-base md:text-lg font-semibold"
          >
            Voir Études de cas
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-12 text-center">FAQ — La Rochelle</h2>
          <Accordion type="single" collapsible className="space-y-4 md:space-y-5">
            <AccordionItem
              value="item-1"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Faut-il changer d'outils pour automatiser ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Non par défaut. On connecte l'existant. Alternative proposée seulement si ROI évident.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Reporting temps réel ou J+1 ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Temps réel quand la source le permet. Sinon latence minute/heure définie au cadrage.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Premier résultat sous quel délai ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Typiquement 30 jours sur le périmètre pilote, selon accès et volumes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Données sensibles et RGPD ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Accès par rôles, cloisonnement, journaux. Hébergement UE possible. DPA/RGPD sur demande.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Comment démarrer à La Rochelle ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Planifiez la visite. Vous recevez un plan et un devis sous 48 h.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Coordonnées */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-10 text-center">Coordonnées</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 lg:p-10 text-center">
            <p className="text-2xl md:text-3xl font-bold mb-4">Aegens</p>
            <p className="text-base md:text-lg text-white/80 mb-2">
              18 Rue Ampère – ZI La Folie Sud, 85310 La Chaize-le-Vicomte
            </p>
            <p className="text-base md:text-lg text-white/80 mb-6">
              Tél. <PhoneLink phoneNumber="+33745103015" displayNumber="07 45 10 30 15" />
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors text-base md:text-lg font-semibold"
            >
              Voir Contact
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Maillage interne */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
            Découvrez nos services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { label: "Accueil", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Automatisation", href: "/services/automatisation" },
              { label: "Assistant IA", href: "/services/assistant-ia-metier" },
              { label: "Analyse & Reporting", href: "/services/analyse-reporting" },
              { label: "Audit", href: "/services/audit" },
              { label: "Études de cas", href: "/etudes-de-cas" },
              { label: "À propos", href: "/a-propos" },
              { label: "Contact", href: "/contact" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="p-4 md:p-5 border border-white/10 rounded-lg bg-black/50 hover:bg-white/5 hover:border-white/20 transition-all duration-300 text-center text-sm md:text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-white/10 via-white/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-balance leading-tight flex items-center justify-center gap-3">
            <Zap className="w-12 h-12 text-yellow-400" />
            Planifier une visite sur site
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-2xl mx-auto">
            Visite 60–90 min. Plan d'action et devis sous 48 h.
            <br />
            <span className="text-white/70">Orienté solution sur mesure et croissance ROI</span>
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90 text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 lg:px-16 py-5 sm:py-6 md:py-7 lg:py-8 h-auto hover:scale-105 transition-all duration-300 shadow-2xl w-full sm:w-auto"
          >
            <Link href="/contact">Prendre contact</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
