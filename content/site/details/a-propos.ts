import type { DetailPage } from "@/content/site/types"

export const aProposPages: DetailPage[] = [
  {
    slug: "qui-nous-sommes",
    title: "Qui sommes-nous ?",
    intro:
      "AEGENS réunit deux profils complémentaires en audit, cadrage, gestion de projet, pilotage de prestataires, automatisation, IA et data pour faire avancer des sujets complexes.",
    metaTitle: "Qui sommes-nous ? | AEGENS",
    metaDescription:
      "AEGENS réunit deux profils complémentaires en audit, cadrage, gestion de projet, pilotage de prestataires, automatisation, IA et data pour faire avancer des sujets complexes.",
    sections: [
      { title: "Position", text: "Une posture d'appui décisionnel et opérationnel, ancrée dans la réalité terrain." },
      { title: "Engagement", text: "Clarté, méthode, exécution et résultats concrets." },
    ],
    relatedPaths: ["/a-propos/notre-approche", "/a-propos/notre-experience", "/offres", "/methode", "/cas-clients"],
  },
  {
    slug: "notre-approche",
    title: "Notre approche",
    intro:
      "Notre approche part d’une situation réelle pour la rendre plus lisible, plus structurée et plus exploitable avant décision et mise en œuvre.",
    metaTitle: "Notre approche | AEGENS",
    metaDescription:
      "Découvrez l’approche AEGENS : une intervention structurée pour analyser le fonctionnement opérationnel, cadrer les projets et sécuriser leur mise en œuvre.",
    sections: [
      { title: "Principe", text: "Observer, clarifier, structurer, puis exécuter avec rigueur." },
      { title: "Différence", text: "Nous ne vendons pas un outil; nous sécurisons le projet." },
    ],
    relatedPaths: ["/offres/diagnostic-fonctionnement-operationnel-pme-industrielle", "/offres/pilotage-mise-en-oeuvre-projet-industriel"],
  },
  {
    slug: "notre-experience",
    title: "Notre expérience",
    intro:
      "Découvrez l’expérience AEGENS : une pratique du diagnostic, du cadrage et du pilotage construite au contact des réalités opérationnelles et des projets structurants.",
    metaTitle: "Notre expérience | AEGENS",
    metaDescription:
      "Découvrez l’expérience AEGENS : une pratique du diagnostic, du cadrage et du pilotage construite au contact des réalités opérationnelles, des projets structurants et des environnements exigeants.",
    sections: [
      { title: "Discernement", text: "Lire une situation plus vite, plus justement et avec une hiérarchisation utile." },
      { title: "Continuité", text: "Relier diagnostic, cadrage et pilotage jusqu’à l’exécution réelle." },
    ],
    relatedPaths: [
      "/a-propos/qui-nous-sommes",
      "/a-propos/notre-approche",
      "/offres/diagnostic-fonctionnement-operationnel-pme-industrielle",
      "/offres/cadrage-projet-industriel-cahier-des-charges",
      "/offres/pilotage-mise-en-oeuvre-projet-industriel",
    ],
  },
  {
    slug: "notre-methode",
    title: "Notre méthode",
    intro: "Une méthode claire pour faire avancer les sujets complexes, du diagnostic à l’exécution.",
    metaTitle: "Notre méthode | AEGENS",
    metaDescription:
      "Découvrez la méthode AEGENS : audit, cadrage, cahier des charges, gestion de projet, pilotage de prestataires et mise en œuvre pour faire avancer les sujets complexes.",
    sections: [
      {
        title: "Comprendre le réel",
        text: "Observer la situation terrain, qualifier les blocages et objectiver les priorités de traitement.",
      },
      {
        title: "Clarifier et cadrer",
        text: "Transformer un besoin diffus en cadre exploitable : objectifs, périmètre, contraintes et attendus.",
      },
      {
        title: "Piloter l’exécution",
        text: "Coordonner les acteurs, traiter les dépendances et sécuriser la mise en œuvre jusqu’au résultat.",
      },
    ],
    relatedPaths: [
      "/offres/diagnostic-fonctionnement-operationnel-pme-industrielle",
      "/offres/cadrage-projet-industriel-cahier-des-charges",
      "/offres/pilotage-mise-en-oeuvre-projet-industriel",
    ],
  },
]
