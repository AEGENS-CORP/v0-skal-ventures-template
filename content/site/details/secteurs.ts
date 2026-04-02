import type { DetailPage } from "@/content/site/types"

export const secteursPages: DetailPage[] = [
  {
    slug: "agroalimentaire",
    title: "PME agroalimentaires",
    intro: "Contraintes de cadence, qualité et traçabilité : nous aidons à structurer les projets sans perturber l'exploitation.",
    metaTitle: "Diagnostic, cadrage et pilotage pour agroalimentaire",
    metaDescription:
      "Interventions dédiées aux PME agroalimentaires : diagnostic opérationnel, cadrage de projet et pilotage de mise en œuvre.",
    sections: [
      { title: "Enjeux fréquents", text: "Synchronisation des services, fiabilité des données et stabilité des décisions." },
      { title: "Intervention", text: "Cadre de projet clair et pilotage orienté continuité de production." },
    ],
    relatedPaths: ["/offres/diagnostic-fonctionnement-operationnel-pme-industrielle", "/offres/pilotage-mise-en-oeuvre-projet-industriel"],
  },
  {
    slug: "plasturgie",
    title: "PME de plasturgie",
    intro: "Nous intervenons pour clarifier les priorités de projet et améliorer l'exécution entre production, qualité et support.",
    metaTitle: "Pilotage de projets pour plasturgie | PME industrielle",
    metaDescription:
      "Structurer et piloter des projets opérationnels en plasturgie : méthode, cadrage et exécution maîtrisée.",
    sections: [
      { title: "Points d'attention", text: "Coordination interservices, visibilité des écarts et rythme de décision." },
      { title: "Apport", text: "Des projets mieux cadrés et une mise en œuvre tenue dans le temps." },
    ],
    relatedPaths: ["/offres/cadrage-projet-industriel-cahier-des-charges", "/expertises/pilotage-de-projet-industriel"],
  },
  {
    slug: "metal-mecanique",
    title: "PME métal-mécanique",
    intro: "Nous aidons à sécuriser les projets impliquant plusieurs ateliers, fonctions support et prestataires externes.",
    metaTitle: "Cadrage et pilotage pour PME métal-mécanique",
    metaDescription:
      "Diagnostic, cadrage et pilotage de projets pour PME métal-mécanique avec forte exigence opérationnelle.",
    sections: [
      { title: "Contexte", text: "Interdépendances fortes entre planification, exécution et qualité." },
      { title: "Méthode", text: "Cadre décisionnel clair et coordination continue jusqu'à stabilisation." },
    ],
    relatedPaths: ["/offres/pilotage-mise-en-oeuvre-projet-industriel", "/expertises/coordination-prestataires"],
  },
  {
    slug: "sous-traitance-industrielle",
    title: "PME de sous-traitance industrielle",
    intro: "Nous renforçons la robustesse opérationnelle pour absorber la variabilité de charge et fiabiliser les engagements client.",
    metaTitle: "Sous-traitance industrielle | Diagnostic et structuration projet",
    metaDescription:
      "Structurer les projets et améliorer l'exécution en sous-traitance industrielle grâce à un cadrage méthodique.",
    sections: [
      { title: "Enjeu", text: "Tenir les délais tout en conservant une organisation lisible." },
      { title: "Action", text: "Diagnostic ciblé, priorisation et pilotage de mise en œuvre." },
    ],
    relatedPaths: ["/offres/diagnostic-fonctionnement-operationnel-pme-industrielle", "/problematiques/pertes-de-temps-entre-services-industrie"],
  },
  {
    slug: "industrie-de-process",
    title: "Industrie de process",
    intro: "Nous cadrons et pilotons les projets qui touchent aux méthodes de travail et à l'organisation opérationnelle continue.",
    metaTitle: "Industrie de process | Pilotage de projets opérationnels",
    metaDescription:
      "Interventions en industrie de process : cadrage projet, coordination et pilotage de mise en œuvre.",
    sections: [
      { title: "Réalité terrain", text: "Décisions à fort impact et besoin de continuité d'exploitation." },
      { title: "Approche", text: "Exécution maîtrisée, suivi structuré et arbitrages rapides." },
    ],
    relatedPaths: ["/offres/cadrage-projet-industriel-cahier-des-charges", "/offres/pilotage-mise-en-oeuvre-projet-industriel"],
  },
  {
    slug: "logistique",
    title: "Logistique",
    intro: "Coordination des flux, fiabilité des statuts et tenue opérationnelle : nous aidons à structurer et piloter la mise en œuvre.",
    metaTitle: "Conseil et pilotage de projets en logistique",
    metaDescription:
      "Diagnostic, cadrage et pilotage de projets logistiques pour améliorer la lisibilité des flux et la robustesse d'exécution.",
    sections: [
      { title: "Enjeu clé", text: "La performance dépend autant des handoffs entre équipes que des outils utilisés." },
      { title: "Apport", text: "Un cadre plus lisible pour arbitrer, coordonner et tenir les engagements de service." },
    ],
    relatedPaths: [
      "/offres/diagnostic-fonctionnement-operationnel-pme-industrielle",
      "/offres/pilotage-mise-en-oeuvre-projet-industriel",
      "/problematiques/manque-de-visibilite-sur-les-processus",
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    intro: "Nous aidons les organisations retail à faire tenir les décisions centrales dans la réalité terrain.",
    metaTitle: "Conseil et pilotage de projets en retail",
    metaDescription:
      "AEGENS accompagne les entreprises retail sur des sujets de diagnostic, cadrage et pilotage liés aux flux, méthodes et coordination.",
    sections: [
      { title: "Contrainte", text: "Aligner siège, réseau et terrain sans dégrader la qualité d'exécution." },
      { title: "Résultat attendu", text: "Des méthodes plus homogènes et une mise en œuvre plus stable dans le temps." },
    ],
    relatedPaths: [
      "/offres/cadrage-projet-industriel-cahier-des-charges",
      "/offres/pilotage-mise-en-oeuvre-projet-industriel",
      "/problematiques/organisation-entre-services-inefficace",
    ],
  },
]
