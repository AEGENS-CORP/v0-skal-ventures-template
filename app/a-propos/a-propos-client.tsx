"use client"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { ParticleProvider } from "@/components/particle-context"
import { BackgroundClickHandler } from "@/components/background-click-handler"

export function AProposClient() {
  // useEffect(() => {
  //   const observer = new IntersectionObserver(...)
  // }, [])

  return (
    <ParticleProvider>
      <BackgroundClickHandler />
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "À propos" }]} />
        </div>
      </div>

      <div className="min-h-screen relative z-10">
        {/* Hero Section */}
        <section className="pt-12 md:pt-16 pb-12 px-4 sm:px-6 md:pb-16 lg:pt-20">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-[1.1] bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              À propos
            </h1>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed font-semibold">
                Faire de l'IA et de l'automatisation un levier opérationnel majeur pour les TPE/PME : des systèmes
                simples à exploiter, fiables, rentables, qui apportent des gains concrets et mesurables au quotidien,
                sans bouleverser les équipes.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed">
                Notre vision : une entreprise où les outils prennent en charge les tâches répétitives et la complexité,
                pour que les équipes se concentrent sur trois choses essentielles : la performance de la production, la
                qualité de la relation client et la décision.
              </p>
            </div>
          </div>
        </section>

        {/* Ce que nous faisons */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                Ce que nous faisons
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            </div>

            <div className="max-w-4xl mx-auto space-y-6 mb-12">
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                Solutions d'ingénierie IA et d'automatisation sur mesure pour TPE/PME.
                <br />
                Nous aidons les entreprises à :
              </p>
              <ul className="space-y-3 text-base sm:text-lg text-white/70 leading-relaxed pl-6">
                <li className="flex items-start gap-3">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Éliminer les tâches répétitives et les re-saisies,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Fiabiliser les processus critiques (production, administratif, relation client),</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/60 mt-1">•</span>
                  <span>
                    Obtenir un ROI rapide grâce à des systèmes IA adaptés à leur activité et à leurs outils existants.
                  </span>
                </li>
              </ul>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 scroll-reveal-right">
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed">Nous intervenons sur quatre piliers :</p>
              <ul className="space-y-3 text-base sm:text-lg text-white/70 leading-relaxed pl-6">
                <li className="flex items-start gap-3">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Automatisation de processus métiers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Assistants IA métier et RAG sur vos données</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Tableaux de bord et KPIs en temps réel</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Audit, cartographie, sécurité & conformité</span>
                </li>
              </ul>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-semibold pt-4">
                Toujours avec le même principe : partir du réel (vos flux, vos contraintes, vos équipes) et construire
                du sur-mesure utile, exploitable et rentable.
              </p>
            </div>
          </div>
        </section>

        {/* L'équipe fondatrice */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                L'équipe fondatrice
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            </div>

            {/* Adrien Retourne */}
            <div className="max-w-6xl mx-auto mb-16">
              <div className="bg-black/33 rounded-2xl p-6 sm:p-8 md:p-10 border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-4 border-white/30">
                      <Image
                        src="/images/photo-20adrien.png"
                        alt="Adrien Retourne, Cofondateur Aegens"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Adrien RETOURNE</h3>
                      <p className="text-xl text-white/70">Cofondateur</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Parcours</h4>
                      <ul className="space-y-2 text-base text-white/70 leading-relaxed">
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1">•</span>
                          <span>Ancien DSI en milieu industriel (3 ans)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1">•</span>
                          <span>Ingénieur IT (Bac+5)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1">•</span>
                          <span>
                            Pilotage de systèmes d'information complets : production, supply chain, qualité, finance,
                            commerce.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Expertises clés</h4>
                      <ul className="space-y-2 text-base text-white/70 leading-relaxed">
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1">•</span>
                          <span>Architecture SI et intégration (ERP, MES, WMS, CRM, outils métiers)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1">•</span>
                          <span>
                            Automatisation de processus à fort enjeu (production, logistique, ADV, back-office)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1">•</span>
                          <span>
                            Conception et déploiement d'assistants IA et de workflows LLM dans des environnements
                            contraints
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1">•</span>
                          <span>Sécurité, continuité de service, gouvernance des données</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1">•</span>
                          <span>Pilotage de projets transverses avec enjeux opérationnels et financiers</span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-base text-white/80 leading-relaxed italic">
                      Adrien apporte une vision "système global" : comment chaque automatisation ou assistant IA
                      s'insère dans l'existant, sans mettre en risque la production ni la donnée.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simon Leclair */}
            <div className="max-w-6xl mx-auto">
              <div className="bg-black/33 rounded-2xl p-6 sm:p-8 md:p-10 border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-4 border-white/30">
                      <Image
                        src="/images/photo-20simon.png"
                        alt="Simon Leclair, Cofondateur Aegens"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Simon LECLAIR</h3>
                      <p className="text-xl text-white/70">Cofondateur</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Parcours</h4>
                      <ul className="space-y-2 text-base text-white/70 leading-relaxed">
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1">•</span>
                          <span>Ingénieur IT (Bac+5)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1">•</span>
                          <span>
                            Expérience à la MAIF : gestion et analyse de données, fiabilisation et exploitation
                            opérationnelle
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1">•</span>
                          <span>
                            Forte expérience e-commerce et acquisition digitale (SEO, SEA, campagnes, conversion)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Expertises clés</h4>
                      <ul className="space-y-2 text-base text-white/70 leading-relaxed">
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1">•</span>
                          <span>
                            Data & analytics au service du pilotage (ventes, performance, comportement clients)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1">•</span>
                          <span>
                            Conception d'assistants IA métier et de systèmes RAG (recherche intelligente dans les
                            données internes)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1">•</span>
                          <span>SEO, SEA, tracking, optimisation de parcours et de taux de conversion</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1">•</span>
                          <span>
                            Automatisation des opérations commerciales et marketing (prospection, relances, reporting)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-base text-white/80 leading-relaxed italic">
                      Simon relie les données, la technique et le business : comment transformer l'information en
                      décisions, et les décisions en résultats chiffrés (CA, marge, coût d'acquisition, lifetime
                      value…).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notre façon de travailler */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                Notre façon de travailler
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            </div>

            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Terrain d'abord",
                  desc: "Observation des flux, échanges avec les équipes, compréhension des contraintes.",
                },
                {
                  title: "Cartographie claire",
                  desc: "Processus, outils, données, goulots d'étranglement.",
                },
                {
                  title: "Conception pragmatique",
                  desc: "Automatisations et IA là où elles ont un vrai impact.",
                },
                {
                  title: "Déploiement maîtrisé",
                  desc: "Pilote rapide, ajustements, puis généralisation.",
                },
                {
                  title: "Mesure continue",
                  desc: "Avant/après, KPIs suivis sur vos outils de référence.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`bg-black/33 rounded-xl p-6 border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ce qui nous différencie */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                Ce qui nous différencie
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              {[
                {
                  title: "ROI comme point de départ",
                  desc: "Chaque projet est cadré avec des objectifs chiffrés : temps gagné, erreurs réduites, capacité absorbée, impact sur le chiffre d'affaires ou la marge.",
                },
                {
                  title: "Sur-mesure",
                  desc: "Nous partons de vos outils (ERP, CRM, Excel, logiciels métiers, Drive, etc.) et de vos méthodes. Nous ajoutons de l'IA et de l'automatisation là où cela a un vrai intérêt, sans tout refaire.",
                },
                {
                  title: "Technologie maîtrisée (LLM, RAG, automatisation)",
                  desc: "Assistants métier, RAG sur vos bases documentaires, workflows complexes, intégrations API : nous assemblons les briques modernes de façon robuste, sécurisée et maintenable.",
                },
                {
                  title: "Exigence sécurité & conformité",
                  desc: "Prise en compte dès le départ des enjeux RGPD, bonnes pratiques ANSSI, référentiels type ISO 27001/27701, séparation des environnements, gestion des accès et des journaux.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`bg-black/33 rounded-xl p-6 sm:p-8 border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-base sm:text-lg text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Où nous intervenons */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                Où nous intervenons
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-black/33 rounded-2xl p-6 sm:p-8 md:p-10 border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                <p className="text-lg sm:text-xl text-white/80 leading-relaxed text-center">
                  Nous accompagnons principalement des TPE/PME industrielles, de services et de commerce B2B/B2C en{" "}
                  <span className="font-semibold text-white">Nouvelle-Aquitaine</span> et{" "}
                  <span className="font-semibold text-white">Pays de la Loire</span> (La Rochelle, Niort, Nantes,
                  Poitiers, La Roche-sur-Yon, Angoulême et alentours).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notre engagement */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                Notre engagement
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                "Projets cadrés, avec livrables clairs et calendrier réaliste",
                "Gains mesurés sur vos indicateurs, pas sur des slides",
                "Relation de long terme",
              ].map((item, i) => (
                <div
                  key={i}
                  className={`bg-black/33 rounded-xl p-6 border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <p className="text-lg sm:text-xl text-white leading-relaxed flex items-start gap-4">
                    <span className="text-white/60 text-2xl mt-[-4px]">✓</span>
                    <span>{item}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto mt-10">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed text-center font-semibold">
                Nous construisons des systèmes IA et des automatisations qui travaillent vraiment pour vous, au
                quotidien, et qui restent sous contrôle de vos équipes.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
          <Link href="/contact" className="block max-w-5xl mx-auto group no-underline">
            <div className="bg-black/33 backdrop-blur-xl rounded-3xl p-6 sm:p-10 md:p-16 lg:p-20 text-center border-4 border-white/30 border-t-white/60 border-l-white/50 hover:border-white/50 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),0_0_50px_rgba(255,255,255,0.2)] cursor-pointer">
              <div className="mb-8 sm:mb-0 sm:space-y-1 py-0.5">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.7)] transition-all duration-500 lg:text-4xl px-2 sm:px-8 lg:px-16 py-1.5">
                  Recevoir un diagnostic opérationnel + plan d'action et devis sous 48h
                </h2>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-3xl mx-auto group-hover:text-white/90 transition-colors duration-300">
                Nous analysons vos besoins, priorisons les leviers les plus rentables et proposons un plan d'action
                adapté à votre entreprise.
              </p>

              <div className="inline-flex items-center gap-3 text-xl font-bold text-white group-hover:gap-5 transition-all duration-300">
                <span className="group-hover:text-white/90">Demander un diagnostic IA & automatisation</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>
        </section>
      </div>
    </ParticleProvider>
  )
}
