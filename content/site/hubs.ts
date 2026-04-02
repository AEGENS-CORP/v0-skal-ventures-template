import type { HubKey, HubPage } from "@/content/site/types"

export const hubPages: Record<HubKey, HubPage> = {
  offres: {
    key: "offres",
    path: "/offres",
    label: "Offres",
    title: "Offres",
    intro:
      "Trois interventions complémentaires pour clarifier une situation, structurer un projet et sécuriser son exécution.",
    metaTitle: "Offres | Diagnostic, cadrage et pilotage de projets industriels",
    metaDescription:
      "Découvrez nos 3 offres pour PME industrielles : diagnostic du fonctionnement opérationnel, cadrage projet et pilotage de mise en œuvre.",
  },
  problematiques: {
    key: "problematiques",
    path: "/problematiques",
    label: "Problématiques",
    title: "Problématiques",
    intro:
      "Nous intervenons sur des situations concrètes : pertes de temps, besoins mal formalisés, projets mal cadrés et exécution qui ralentit.",
    metaTitle: "Problématiques opérationnelles en industrie, logistique et retail | AEGENS",
    metaDescription:
      "Identifier les problématiques opérationnelles qui justifient un diagnostic, un cadrage ou un pilotage de projet : pertes de temps, ressaisies, manque de visibilité, coordination et structuration.",
  },
  expertises: {
    key: "expertises",
    path: "/expertises",
    label: "Expertises",
    title: "Expertises",
    intro:
      "Nos expertises couvrent le diagnostic opérationnel, le cadrage et le pilotage de mise en œuvre avec une logique terrain.",
    metaTitle: "Expertises | Diagnostic, cadrage et pilotage de projet industriel",
    metaDescription:
      "Audit organisationnel, cahier des charges, roadmap, coordination de prestataires et pilotage de projet industriel.",
  },
  secteurs: {
    key: "secteurs",
    path: "/secteurs",
    label: "Secteurs",
    title: "Secteurs",
    intro:
      "Nous travaillons avec des PME industrielles aux contraintes de production fortes, avec des enjeux d'organisation et d'exécution.",
    metaTitle: "Secteurs | PME industrielles accompagnées",
    metaDescription:
      "Agroalimentaire, plasturgie, métal-mécanique, sous-traitance et industrie de process : secteurs couverts.",
  },
  ressources: {
    key: "ressources",
    path: "/ressources",
    label: "Ressources",
    title: "Ressources",
    intro:
      "Des contenus utiles pour décider, cadrer et piloter un projet industriel sans flou méthodologique.",
    metaTitle: "Ressources | Diagnostic, cadrage et pilotage de projets | AEGENS",
    metaDescription:
      "Guides, repères et contenus utiles pour comprendre, cadrer et piloter un projet en industrie, logistique et retail.",
  },
  "cas-clients": {
    key: "cas-clients",
    path: "/cas-clients",
    label: "Cas clients",
    title: "Cas clients",
    intro:
      "Exemples d'interventions menées sur des contextes industriels réels, avec un cap clair et une exécution tenue.",
    metaTitle: "Cas clients | AEGENS",
    metaDescription:
      "Découvrez des cas clients AEGENS autour du diagnostic, du cadrage et du pilotage de mise en œuvre dans l’industrie, la logistique et le retail.",
  },
  "a-propos": {
    key: "a-propos",
    path: "/a-propos",
    label: "À propos",
    title: "À propos",
    intro:
      "Une équipe orientée terrain, méthode et exécution, dédiée aux projets opérationnels des PME industrielles.",
    metaTitle: "À propos | Positionnement et méthode AEGENS",
    metaDescription:
      "Qui nous sommes, notre approche et notre méthode pour transformer un besoin en actions structurées et résultats concrets.",
  },
  faq: {
    key: "faq",
    path: "/faq",
    label: "FAQ",
    title: "FAQ",
    intro:
      "Réponses courtes et concrètes sur le diagnostic, le cadrage et le pilotage de projet en PME industrielle.",
    metaTitle: "FAQ | Diagnostic, cadrage et pilotage de projets industriels",
    metaDescription:
      "Quand faire un diagnostic, combien de temps dure un cadrage, que contient un cahier des charges et quand piloter en externe.",
  },
}
