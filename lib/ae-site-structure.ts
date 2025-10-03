import { BASE_URL } from "@/lib/site-structure"

export type AeNavItem = {
  label: string
  href: string
}

export type AeAnchorSection = {
  id: string
  title: string
  summary: string
  links: { label: string; href: string }[]
  entity: string
}

export const aeMainNavigation: AeNavItem[] = [
  { label: "Méthode", href: "/methode" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
]

export const aePlusNavigation: AeNavItem[] = [
  { label: "Contact", href: "/contact" },
  { label: "Ressources", href: "/ressources" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "FAQ", href: "/faq" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Conditions générales", href: "/conditions-generales" },
  { label: "Plan du site", href: "/sitemap" },
]

export const aeFooterLegalLinks: AeNavItem[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Conditions générales", href: "/conditions-generales" },
  { label: "Plan du site", href: "/sitemap" },
]

export const aeServicesSections: AeAnchorSection[] = [
  {
    id: "audit",
    title: "Audit & cadrage IA",
    summary:
      "Section de placeholder pour décrire le diagnostic initial et la priorisation des cas d'usage. Le contenu reste à compléter.",
    links: [
      { label: "Explorer la solution Commercial", href: "/solutions#commercial" },
      { label: "Contact", href: "/contact" },
    ],
    entity: "service",
  },
  {
    id: "automatisation-ia",
    title: "Automatisation IA",
    summary:
      "Bloc générique présentant les ateliers d'automatisation assistés par IA. Texte provisoire destiné à être enrichi ultérieurement.",
    links: [
      { label: "Solution Production", href: "/solutions#production" },
      { label: "Contact", href: "/contact" },
    ],
    entity: "service",
  },
  {
    id: "erp-crm-dev",
    title: "ERP & CRM sur-mesure",
    summary:
      "Gabarit à personnaliser pour les projets ERP et CRM. Cette zone illustre l'approche projet et restera en attente de contenu métier.",
    links: [
      { label: "Solution Logistique", href: "/solutions#logistique" },
      { label: "Contact", href: "/contact" },
    ],
    entity: "service",
  },
  {
    id: "formation",
    title: "Formation & accompagnement",
    summary:
      "Placeholder dédié aux dispositifs de formation et à la conduite du changement. Les détails seront ajoutés par la suite.",
    links: [
      { label: "Solution Finance", href: "/solutions#finance" },
      { label: "Contact", href: "/contact" },
    ],
    entity: "service",
  },
  {
    id: "support",
    title: "Support continu",
    summary:
      "Espace réservé pour présenter l'assistance opérationnelle continue. Ce texte de remplissage sera remplacé par les contenus finaux.",
    links: [
      { label: "Solution Industrie", href: "/solutions#industrie" },
      { label: "Contact", href: "/contact" },
    ],
    entity: "service",
  },
]

export const aeSolutionsSections: AeAnchorSection[] = [
  {
    id: "commercial",
    title: "Solution Commercial",
    summary:
      "Placeholder pour illustrer les parcours commerciaux augmentés par l'IA. Le détail des offres sera défini ultérieurement.",
    links: [
      { label: "Service Automatisation IA", href: "/services#automatisation-ia" },
      { label: "Service ERP & CRM", href: "/services#erp-crm-dev" },
      { label: "Tarifs", href: "/tarifs" },
    ],
    entity: "solution",
  },
  {
    id: "finance",
    title: "Solution Finance",
    summary:
      "Zone descriptive générique pour les usages financiers. Texte en attente de validation finale.",
    links: [
      { label: "Service Audit", href: "/services#audit" },
      { label: "Service Support", href: "/services#support" },
      { label: "Tarifs", href: "/tarifs" },
    ],
    entity: "solution",
  },
  {
    id: "production",
    title: "Solution Production",
    summary:
      "Module factice décrivant la supervision de production. Cette copie est un simple placeholder.",
    links: [
      { label: "Service Automatisation IA", href: "/services#automatisation-ia" },
      { label: "Service Support", href: "/services#support" },
      { label: "Tarifs", href: "/tarifs" },
    ],
    entity: "solution",
  },
  {
    id: "logistique",
    title: "Solution Logistique",
    summary:
      "Bloc fictif pour la logistique augmentée. Le contenu définitif sera intégré plus tard.",
    links: [
      { label: "Service ERP & CRM", href: "/services#erp-crm-dev" },
      { label: "Service Support", href: "/services#support" },
      { label: "Tarifs", href: "/tarifs" },
    ],
    entity: "solution",
  },
  {
    id: "rh",
    title: "Solution Ressources humaines",
    summary:
      "Section placeholder présentant la digitalisation RH. Le texte reste volontairement neutre.",
    links: [
      { label: "Service Formation", href: "/services#formation" },
      { label: "Service Support", href: "/services#support" },
      { label: "Tarifs", href: "/tarifs" },
    ],
    entity: "solution",
  },
  {
    id: "industrie",
    title: "Solution Industrie",
    summary:
      "Placeholder pour les ateliers industriels connectés. À personnaliser ultérieurement.",
    links: [
      { label: "Service Audit", href: "/services#audit" },
      { label: "Service Automatisation IA", href: "/services#automatisation-ia" },
      { label: "Tarifs", href: "/tarifs" },
    ],
    entity: "solution",
  },
  {
    id: "retail-ecommerce",
    title: "Solution Retail & e-commerce",
    summary:
      "Contenu de démonstration pour l'expérience client omnicanale. Informations définitives à venir.",
    links: [
      { label: "Service Automatisation IA", href: "/services#automatisation-ia" },
      { label: "Service Formation", href: "/services#formation" },
      { label: "Tarifs", href: "/tarifs" },
    ],
    entity: "solution",
  },
  {
    id: "services-b2b",
    title: "Solution Services B2B",
    summary:
      "Exemple de fiche pour les offres B2B. Cette description neutre sera remplacée.",
    links: [
      { label: "Service Audit", href: "/services#audit" },
      { label: "Service ERP & CRM", href: "/services#erp-crm-dev" },
      { label: "Tarifs", href: "/tarifs" },
    ],
    entity: "solution",
  },
  {
    id: "sante",
    title: "Solution Santé",
    summary:
      "Placeholder pour les parcours patients augmentés. Contenu à compléter.",
    links: [
      { label: "Service Formation", href: "/services#formation" },
      { label: "Service Support", href: "/services#support" },
      { label: "Tarifs", href: "/tarifs" },
    ],
    entity: "solution",
  },
  {
    id: "transport-energie",
    title: "Solution Transport & énergie",
    summary:
      "Fiche générique dédiée aux réseaux et infrastructures. Texte provisoire.",
    links: [
      { label: "Service Audit", href: "/services#audit" },
      { label: "Service Support", href: "/services#support" },
      { label: "Tarifs", href: "/tarifs" },
    ],
    entity: "solution",
  },
]

export const aeResourcesSections: AeAnchorSection[] = [
  {
    id: "blog",
    title: "Blog IA",
    summary:
      "Placeholder listant des articles à venir. Sert uniquement de repère structurel.",
    links: [
      { label: "Service Audit", href: "/services#audit" },
      { label: "FAQ", href: "/faq" },
    ],
    entity: "resource",
  },
  {
    id: "guides",
    title: "Guides pratiques",
    summary:
      "Texte temporaire pour annoncer une bibliothèque de guides téléchargeables.",
    links: [
      { label: "Solution Industrie", href: "/solutions#industrie" },
      { label: "FAQ", href: "/faq" },
    ],
    entity: "resource",
  },
  {
    id: "question-hub",
    title: "Question Hub IA",
    summary:
      "Gabarit pour centraliser les questions récurrentes. Contenu à ajouter.",
    links: [
      { label: "Solution Commercial", href: "/solutions#commercial" },
      { label: "Service Support", href: "/services#support" },
    ],
    entity: "resource",
  },
  {
    id: "glossaire",
    title: "Glossaire IA",
    summary:
      "Placeholder dédié aux définitions clés. À compléter avec les termes officiels.",
    links: [
      { label: "Service Formation", href: "/services#formation" },
      { label: "FAQ", href: "/faq" },
    ],
    entity: "resource",
  },
]

export const aeTariffPlans = [
  {
    id: "exploration",
    name: "Pack Exploration",
    price: "Sur devis",
    summary: "Forfait d'amorçage à compléter.",
    links: [
      { label: "Service Audit", href: "/services#audit" },
      { label: "Solution Commercial", href: "/solutions#commercial" },
    ],
  },
  {
    id: "acceleration",
    name: "Pack Accélération",
    price: "Sur devis",
    summary: "Offre modulaire placeholder.",
    links: [
      { label: "Service Automatisation IA", href: "/services#automatisation-ia" },
      { label: "Solution Production", href: "/solutions#production" },
    ],
  },
  {
    id: "continuite",
    name: "Pack Continuité",
    price: "Sur devis",
    summary: "Programme de support générique.",
    links: [
      { label: "Service Support", href: "/services#support" },
      { label: "FAQ", href: "/faq" },
    ],
  },
]

export const aeFaqItems = [
  {
    question: "Comment est structuré l'accompagnement IA ?",
    answer: "Réponse générique à étoffer avec les informations officielles.",
  },
  {
    question: "Quels sont les délais types ?",
    answer: "Durées indicatives à préciser. Placeholder neutre.",
  },
  {
    question: "Comment sont définis les tarifs ?",
    answer: "Structure tarifaire à détailler ultérieurement.",
  },
  {
    question: "Quels services sont inclus dans le support continu ?",
    answer: "Liste des services en cours de rédaction.",
  },
]

export const aePageTitles: Record<string, string> = {
  "/": "Accueil",
  "/methode": "Méthode",
  "/services": "Services",
  "/solutions": "Solutions",
  "/ressources": "Ressources",
  "/tarifs": "Tarifs",
  "/faq": "FAQ",
  "/contact": "Contact",
  "/mentions-legales": "Mentions légales",
  "/politique-de-confidentialite": "Politique de confidentialité",
  "/conditions-generales": "Conditions générales",
  "/sitemap": "Plan du site",
  "/404": "Page non trouvée",
}

export const aeSitemapEntries = [
  "/",
  "/methode",
  "/services",
  "/solutions",
  "/ressources",
  "/tarifs",
  "/faq",
  "/contact",
  "/mentions-legales",
  "/politique-de-confidentialite",
  "/conditions-generales",
  "/sitemap",
]

export const aeIndexablePaths = new Set<string>(aeSitemapEntries)

type Breadcrumb = { position: number; name: string; item: string }

export const buildAeBreadcrumbs = (pathname: string): Breadcrumb[] => {
  const segments = pathname.split("/").filter(Boolean)
  const items: Breadcrumb[] = []

  items.push({ position: 1, name: "Accueil", item: BASE_URL })

  if (segments.length === 0) {
    return items
  }

  segments.forEach((_, index) => {
    const path = `/${segments.slice(0, index + 1).join("/")}`
    const label = aePageTitles[path] ?? path.replace("/", "").replace(/-/g, " ")
    items.push({
      position: index + 2,
      name: label,
      item: new URL(path, BASE_URL).toString(),
    })
  })

  return items
}

export const aeCanonicalFor = (path: string) => new URL(path, BASE_URL).toString()
