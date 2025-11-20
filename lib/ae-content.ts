export const SEO_INDEX_ALL = true as const

export type AePage = {
  path: string
  label: string
  indexable?: boolean
}

export const optionAPages: AePage[] = [
  { path: "/", label: "Accueil", indexable: true },
  { path: "/services", label: "Services", indexable: true },
  { path: "/services/automatisation", label: "Automatisation", indexable: true },
  { path: "/services/assistant-ia-metier", label: "Assistant IA Métier", indexable: true },
  { path: "/services/analyse-reporting", label: "Analyse & Reporting", indexable: true },
  { path: "/services/audit", label: "Audit", indexable: true },
  { path: "/services/vente-gestion", label: "Vente / Gestion", indexable: true },
  { path: "/etudes-de-cas", label: "Études de cas", indexable: true },
  { path: "/a-propos", label: "À propos", indexable: true },
  { path: "/contact", label: "Contact", indexable: true },
  { path: "/ville/angouleme", label: "Angoulême", indexable: true },
  { path: "/ville/la-roche-sur-yon", label: "La Roche-sur-Yon", indexable: true },
  { path: "/ville/la-rochelle", label: "La Rochelle", indexable: true },
  { path: "/ville/niort", label: "Niort", indexable: true },
  { path: "/ville/nantes", label: "Nantes", indexable: true },
  { path: "/ville/poitiers", label: "Poitiers", indexable: true },
  { path: "/mentions-legales", label: "Mentions légales", indexable: true },
  {
    path: "/politique-de-confidentialite",
    label: "Politique de confidentialité",
    indexable: true,
  },
]

export const htmlSitemapEntries = optionAPages
  .filter((page) => page.indexable !== false)
  .map((page) => page.path)
  .sort((a, b) => a.localeCompare(b))

export const indexablePaths = new Set(optionAPages.filter((page) => page.indexable !== false).map((page) => page.path))

export type AeNavLink = { label: string; href: string }

export const plusNavItems: AeNavLink[] = [
  { label: "Angoulême", href: "/ville/angouleme" },
  { label: "La Roche-sur-Yon", href: "/ville/la-roche-sur-yon" },
  { label: "La Rochelle", href: "/ville/la-rochelle" },
  { label: "Niort", href: "/ville/niort" },
  { label: "Nantes", href: "/ville/nantes" },
  { label: "Poitiers", href: "/ville/poitiers" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
]

export const footerLegalLinks: AeNavLink[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
]

export const NAP = {
  name: "Aegens",
  phone: "07 45 10 30 15",
  phoneLink: "tel:+33745103015",
  email: "contact@aegens.com",
  address: "18 Rue Ampère – ZI La Folie Sud",
  postalCode: "85310",
  city: "La Chaize-le-Vicomte",
  fullAddress: "18 Rue Ampère – ZI La Folie Sud, 85310 La Chaize-le-Vicomte",
  areaServed: ["Vendée", "La Roche-sur-Yon", "La Rochelle", "Niort", "Nantes", "Poitiers", "Angoulême"],
} as const

export const companyInfo = {
  name: NAP.name,
  phone: NAP.phone,
  phoneLink: NAP.phoneLink,
  email: NAP.email,
  address: {
    street: NAP.address,
    postalCode: NAP.postalCode,
    city: NAP.city,
    full: NAP.fullAddress,
  },
  areaServed: NAP.areaServed,
} as const

export const servicesSections = [
  {
    id: "automatisation",
    title: "Automatisation IA",
    description:
      "Réduisez la saisie manuelle et les erreurs de traitement grâce à l'automatisation intelligente de vos processus métier.",
    summary:
      "Automatisation des flux devis→compta, traitement de documents, extraction de données. Gains mesurables en 60 jours.",
    solutionLink: {
      href: "/services/automatisation",
      label: "Découvrir l'automatisation IA",
    },
  },
  {
    id: "assistant-ia-metier",
    title: "Assistant IA Métier",
    description:
      "Accélérez la recherche d'information et la prise de décision avec un assistant IA qui cite ses sources documentaires.",
    summary:
      "Assistant conversationnel sur vos documents internes, réponses sourcées, réduction du temps de recherche. ROI en 8 semaines.",
    solutionLink: {
      href: "/services/assistant-ia-metier",
      label: "Découvrir l'assistant IA",
    },
  },
  {
    id: "analyse-reporting",
    title: "Analyse & Reporting",
    description:
      "Tableaux de bord J+1, alertes automatiques, visualisation des KPIs pour piloter votre activité en temps réel.",
    summary: "Reporting automatisé, dashboards personnalisés, alertes intelligentes. Visibilité accrue en 2 mois.",
    solutionLink: {
      href: "/services/analyse-reporting",
      label: "Découvrir l'analyse & reporting",
    },
  },
  {
    id: "audit",
    title: "Audit 360°",
    description:
      "Audit sur site en 5 jours. Cartographie complète processus, SI, données, supply chain. Plan d'action 90/180/360 j basé sur KPI mesurables.",
    summary:
      "Vision claire en 5 jours. Priorités nettes. Plan d'exécution réaliste. Intégration sur mesure. ROI piloté.",
    solutionLink: {
      href: "/services/audit",
      label: "Découvrir l'audit 360°",
    },
  },
  {
    id: "vente-gestion",
    title: "Vente / Gestion",
    description:
      "Processus cadré du premier contact à l'exploitation. Décisions rapides, mise en production sans friction, accompagnement long terme.",
    summary:
      "Parcours complet: prospection, cadrage, pilote 30j, déploiement, exploitation. Gouvernance transparente. KPI suivis.",
    solutionLink: {
      href: "/services/vente-gestion",
      label: "Découvrir le processus complet",
    },
  },
] as const
