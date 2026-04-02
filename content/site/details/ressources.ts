import type { DetailPage } from "@/content/site/types"

export const ressourcesPages: DetailPage[] = [
  {
    slug: "diagnostic-fonctionnement-operationnel-pme-industrielle",
    title: "Diagnostic du fonctionnement opérationnel en PME industrielle",
    intro: "Ce guide explique ce qu'un diagnostic doit produire pour être utile à la décision.",
    metaTitle: "Guide diagnostic fonctionnement opérationnel PME industrielle",
    metaDescription:
      "Méthode de diagnostic du fonctionnement opérationnel : objectifs, étapes, livrables et résultats attendus.",
    sections: [
      { title: "À retenir", text: "Un diagnostic utile met en évidence les priorités, pas une liste de symptômes." },
      { title: "Livrables attendus", text: "Constat, priorités et plan d'actions actionnable à court terme." },
    ],
    relatedPaths: ["/offres/diagnostic-fonctionnement-operationnel-pme-industrielle", "/expertises/diagnostic-operationnel"],
  },
  {
    slug: "comment-cadrer-un-projet-industriel",
    title: "Comment cadrer un projet industriel",
    intro: "Méthode claire pour cadrer un projet industriel : besoin, périmètre, objectifs, parties prenantes, risques, priorités et conditions de mise en œuvre.",
    metaTitle: "Comment cadrer un projet industriel | AEGENS",
    metaDescription:
      "Méthode claire pour cadrer un projet industriel : besoin, périmètre, objectifs, parties prenantes, risques, priorités et conditions de mise en œuvre.",
    sections: [
      { title: "Étapes", text: "Objectif, périmètre, contraintes, critères de choix, planification." },
      { title: "Point de vigilance", text: "Ne pas lancer la consultation avant formalisation du besoin." },
    ],
    relatedPaths: ["/offres/cadrage-projet-industriel-cahier-des-charges", "/ressources/checklist-cadrage-projet-industriel"],
  },
  {
    slug: "comment-rediger-un-cahier-des-charges-fonctionnel",
    title: "Comment rédiger un cahier des charges fonctionnel",
    intro:
      "Méthode claire pour rédiger un cahier des charges fonctionnel utile : objectifs, périmètre, besoins, contraintes, parties prenantes, critères de choix et erreurs à éviter.",
    metaTitle: "Comment rédiger un cahier des charges fonctionnel | AEGENS",
    metaDescription:
      "Méthode claire pour rédiger un cahier des charges fonctionnel utile : objectifs, périmètre, besoins, contraintes, parties prenantes, critères de choix et erreurs à éviter.",
    sections: [
      { title: "Structure recommandée", text: "Contexte, objectifs, périmètre, exigences, critères d'acceptation." },
      { title: "Erreur à éviter", text: "Confondre expression de besoin et solution imposée trop tôt." },
    ],
    relatedPaths: [
      "/offres/cadrage-projet-industriel-cahier-des-charges",
      "/ressources/comment-cadrer-un-projet-industriel",
      "/ressources/cahier-des-charges-vs-expression-de-besoin",
      "/modeles-checklists/exemple-cahier-des-charges-fonctionnel",
      "/cas-clients/structuration-dun-besoin-avant-consultation",
    ],
  },
  {
    slug: "comment-piloter-un-projet-industriel-en-pme",
    title: "Comment piloter un projet industriel en PME",
    intro:
      "Méthode claire pour piloter un projet industriel en PME : gouvernance, rythme, arbitrages, coordination, KPI, risques et conditions de mise en œuvre.",
    metaTitle: "Comment piloter un projet industriel en PME | AEGENS",
    metaDescription:
      "Méthode claire pour piloter un projet industriel en PME : gouvernance, rythme, arbitrages, coordination, KPI, risques et conditions de mise en œuvre.",
    sections: [
      { title: "Rythme de pilotage", text: "Rituels courts, arbitrages clairs et suivi des engagements." },
      { title: "Indicateurs utiles", text: "Avancement réel, risques ouverts, décisions prises, écarts." },
    ],
    relatedPaths: [
      "/offres/pilotage-mise-en-oeuvre-projet-industriel",
      "/modeles-checklists/checklist-consultation-prestataires",
      "/modeles-checklists/matrice-criteres-choix-solution-ou-prestataire",
      "/cas-clients/pilotage-de-mise-en-oeuvre-dun-projet-operationnel",
      "/contact",
    ],
  },
  {
    slug: "comment-choisir-un-prestataire-pour-un-projet-industriel",
    title: "Comment choisir un prestataire pour un projet industriel",
    intro:
      "Méthode claire pour choisir un prestataire sur un projet industriel : besoin, critères, consultation, comparaison des offres, risques et erreurs à éviter.",
    metaTitle: "Comment choisir un prestataire pour un projet industriel | AEGENS",
    metaDescription:
      "Méthode claire pour choisir un prestataire sur un projet industriel : besoin, critères, consultation, comparaison des offres, risques et erreurs à éviter.",
    sections: [
      { title: "Critères", text: "Compréhension du besoin, méthode de déploiement, capacité d'exécution, gouvernance." },
      { title: "Comparaison", text: "Comparer sur une base commune avec critères pondérés." },
    ],
    relatedPaths: [
      "/offres/cadrage-projet-industriel-cahier-des-charges",
      "/offres/pilotage-mise-en-oeuvre-projet-industriel",
      "/modeles-checklists/checklist-consultation-prestataires",
      "/modeles-checklists/matrice-criteres-choix-solution-ou-prestataire",
      "/cas-clients/structuration-dun-besoin-avant-consultation",
      "/contact",
    ],
  },
  {
    slug: "comment-structurer-un-besoin-avant-consultation",
    title: "Comment structurer un besoin avant consultation",
    intro:
      "Méthode claire pour structurer un besoin avant consultation : objectif, périmètre, contraintes, critères, livrables attendus et erreurs à éviter.",
    metaTitle: "Comment structurer un besoin avant consultation | AEGENS",
    metaDescription:
      "Méthode claire pour structurer un besoin avant consultation : objectif, périmètre, contraintes, critères, livrables attendus et erreurs à éviter.",
    sections: [
      {
        title: "Préparer avant de consulter",
        text: "La qualité d'une consultation dépend d'abord de la qualité de structuration du besoin.",
      },
      {
        title: "Ce qu'il faut poser",
        text: "Contexte, objectif, périmètre, contraintes, attendus et critères de comparaison.",
      },
    ],
    relatedPaths: [
      "/offres/cadrage-projet-industriel-cahier-des-charges",
      "/ressources/comment-choisir-un-prestataire-pour-un-projet-industriel",
      "/modeles-checklists/checklist-cadrage-projet-industriel",
      "/modeles-checklists/matrice-criteres-choix-solution-ou-prestataire",
      "/cas-clients/structuration-dun-besoin-avant-consultation",
      "/contact",
    ],
  },
  {
    slug: "quand-faire-appel-a-un-regard-exterieur",
    title: "Quand faire appel à un regard extérieur",
    intro:
      "Repérer le bon moment pour solliciter un appui externe avant qu’un sujet opérationnel ne se fragilise dans l’exécution.",
    metaTitle: "Quand faire appel à un regard extérieur ? | AEGENS",
    metaDescription:
      "Repères concrets pour savoir quand un regard extérieur devient utile sur un sujet de diagnostic, cadrage ou pilotage.",
    sections: [
      {
        title: "Signal principal",
        text: "Le sujet est réel, mais trop flou pour décider proprement entre ajustement local, cadrage ou projet structuré.",
      },
      {
        title: "Valeur attendue",
        text: "Obtenir une lecture plus claire du réel, hiérarchiser les priorités et sécuriser la séquence de décision.",
      },
    ],
    relatedPaths: [
      "/offres/diagnostic-fonctionnement-operationnel-pme-industrielle",
      "/faq/quand-faire-un-diagnostic-operationnel",
      "/modeles-checklists/trame-diagnostic-operationnel",
      "/contact",
    ],
  },
  {
    slug: "audit-organisationnel-vs-audit-si",
    title: "Audit organisationnel vs audit SI",
    intro:
      "Comprendre la différence entre audit organisationnel et audit SI : périmètre, objectifs, livrables, cas d’usage, points de recouvrement et erreurs à éviter.",
    metaTitle: "Audit organisationnel vs audit SI : quelle différence ? | AEGENS",
    metaDescription:
      "Comprendre la différence entre audit organisationnel et audit SI : périmètre, objectifs, livrables, cas d’usage, points de recouvrement et erreurs à éviter.",
    sections: [
      { title: "Différence clé", text: "Le premier part du travail réel, le second de l'environnement technique." },
      { title: "Quand choisir", text: "Si le blocage est opérationnel, commencer par l'organisation." },
    ],
    relatedPaths: [
      "/offres/diagnostic-fonctionnement-operationnel-pme-industrielle",
      "/ressources/quand-faire-appel-a-un-regard-exterieur",
      "/ressources/comment-cadrer-un-projet-industriel",
      "/contact",
    ],
  },
  {
    slug: "cadrage-vs-gestion-de-projet",
    title: "Cadrage vs gestion de projet",
    intro:
      "Comprendre la différence entre cadrage et gestion de projet : objectifs, périmètre, livrables, temporalité, responsabilités et erreurs fréquentes.",
    metaTitle: "Cadrage vs gestion de projet : quelle différence ? | AEGENS",
    metaDescription:
      "Comprendre la différence entre cadrage et gestion de projet : objectifs, périmètre, livrables, temporalité, responsabilités et erreurs fréquentes.",
    sections: [
      { title: "Cadrage", text: "Clarifier le besoin, le périmètre, les critères de décision." },
      { title: "Gestion de projet", text: "Piloter l'avancement, coordonner, traiter les écarts." },
    ],
    relatedPaths: [
      "/offres/cadrage-projet-industriel-cahier-des-charges",
      "/offres/pilotage-mise-en-oeuvre-projet-industriel",
      "/ressources/comment-cadrer-un-projet-industriel",
      "/ressources/comment-piloter-un-projet-industriel-en-pme",
      "/modeles-checklists/checklist-cadrage-projet-industriel",
      "/contact",
    ],
  },
  {
    slug: "cahier-des-charges-vs-expression-de-besoin",
    title: "Cahier des charges vs expression de besoin",
    intro:
      "Comprendre la différence entre expression de besoin et cahier des charges : rôle, niveau de précision, moment d’usage, contenu attendu et erreurs à éviter.",
    metaTitle: "Cahier des charges vs expression de besoin : quelle différence ? | AEGENS",
    metaDescription:
      "Comprendre la différence entre expression de besoin et cahier des charges : rôle, niveau de précision, moment d’usage, contenu attendu et erreurs à éviter.",
    sections: [
      { title: "Expression de besoin", text: "Décrit le problème à résoudre et le résultat attendu." },
      { title: "Cahier des charges", text: "Cadre les exigences, la consultation et la mise en œuvre." },
    ],
    relatedPaths: [
      "/offres/cadrage-projet-industriel-cahier-des-charges",
      "/ressources/comment-cadrer-un-projet-industriel",
      "/ressources/comment-rediger-un-cahier-des-charges-fonctionnel",
      "/modeles-checklists/exemple-cahier-des-charges-fonctionnel",
      "/contact",
    ],
  },
  {
    slug: "amoe-moe-moa-quelle-difference",
    title: "AMOE, MOE, MOA : quelle différence",
    intro: "Clarifier les rôles évite les confusions de responsabilité pendant l'exécution.",
    metaTitle: "AMOE, MOE, MOA : quelle différence ? | AEGENS",
    metaDescription:
      "Comprendre la différence entre MOA, MOE et AMOE : rôles, responsabilités, limites, points de recouvrement et erreurs fréquentes dans les projets.",
    sections: [
      { title: "Rôles", text: "MOA porte le besoin, MOE réalise, AMOE organise l'exécution côté projet." },
      { title: "Point clé", text: "Des responsabilités claires réduisent fortement les dérives." },
    ],
    relatedPaths: [
      "/offres/diagnostic-fonctionnement-operationnel-pme-industrielle",
      "/offres/cadrage-projet-industriel-cahier-des-charges",
      "/offres/pilotage-mise-en-oeuvre-projet-industriel",
      "/methode",
      "/contact",
    ],
  },
  {
    slug: "exemple-cahier-des-charges-fonctionnel",
    title: "Exemple de cahier des charges fonctionnel",
    intro: "Un exemple de structure pour cadrer un projet industriel sans angle mort.",
    metaTitle: "Exemple cahier des charges fonctionnel industriel",
    metaDescription:
      "Exemple de trame de cahier des charges fonctionnel pour un projet industriel en PME.",
    sections: [
      { title: "Trame", text: "Contexte, besoins, exigences, critères d'acceptation, planning et gouvernance." },
      { title: "Utilisation", text: "Base de consultation et de pilotage pendant la mise en œuvre." },
    ],
    relatedPaths: ["/expertises/cahier-des-charges-fonctionnel", "/ressources/comment-rediger-un-cahier-des-charges-fonctionnel"],
  },
  {
    slug: "checklist-cadrage-projet-industriel",
    title: "Checklist cadrage projet industriel",
    intro: "Une checklist opérationnelle pour valider la qualité du cadrage avant lancement.",
    metaTitle: "Checklist cadrage projet industriel",
    metaDescription: "Checklist pratique pour cadrer un projet industriel avant consultation et lancement de mise en œuvre.",
    sections: [
      { title: "Vérifications", text: "Objectifs, périmètre, contraintes, critères de choix, risques, gouvernance." },
      { title: "Décision", text: "Go / no-go sur des éléments factuels et partagés." },
    ],
    relatedPaths: ["/offres/cadrage-projet-industriel-cahier-des-charges", "/problematiques/besoin-mal-defini-avant-consultation-prestataires"],
  },
  {
    slug: "checklist-consultation-prestataires",
    title: "Checklist consultation prestataires",
    intro: "Une grille simple pour structurer une consultation exploitable et comparable.",
    metaTitle: "Checklist consultation prestataires projet industriel",
    metaDescription:
      "Checklist pour préparer une consultation de prestataires sur un projet industriel avec critères clairs et comparables.",
    sections: [
      { title: "Préparation", text: "Besoin, périmètre, attendus, critères d'évaluation, planning de réponse." },
      { title: "Comparaison", text: "Matrice de décision et scénario de déploiement." },
    ],
    relatedPaths: ["/problematiques/choisir-solution-ou-prestataire-industriel", "/ressources/matrice-criteres-choix-solution-ou-prestataire"],
  },
  {
    slug: "matrice-criteres-choix-solution-ou-prestataire",
    title: "Matrice de critères de choix solution ou prestataire",
    intro: "Un outil d'arbitrage pour choisir avec méthode et objectivité.",
    metaTitle: "Matrice critères choix solution ou prestataire industriel",
    metaDescription:
      "Construire une matrice de critères pour choisir une solution ou un prestataire en projet industriel.",
    sections: [
      { title: "Critères recommandés", text: "Valeur opérationnelle, faisabilité, délai, coût total, risque, capacité d'exécution." },
      { title: "Usage", text: "Outil d'aide à la décision pour comités de pilotage." },
    ],
    relatedPaths: ["/offres/cadrage-projet-industriel-cahier-des-charges", "/offres/pilotage-mise-en-oeuvre-projet-industriel"],
  },
]
