export const SEO_INDEX_ALL = false as const

export type AePage = {
  path: string
  label: string
  indexable?: boolean
}

export const optionAPages: AePage[] = [
  { path: "/", label: "Accueil", indexable: true },
  { path: "/methode", label: "Méthode", indexable: true },
  { path: "/services", label: "Services", indexable: true },
  { path: "/solutions", label: "Solutions", indexable: true },
  { path: "/ressources", label: "Ressources", indexable: true },
  { path: "/tarifs", label: "Tarifs", indexable: true },
  { path: "/faq", label: "FAQ", indexable: true },
  { path: "/contact", label: "Contact", indexable: true },
  { path: "/mentions-legales", label: "Mentions légales", indexable: true },
  {
    path: "/politique-de-confidentialite",
    label: "Politique de confidentialité",
    indexable: true,
  },
  { path: "/conditions-generales", label: "Conditions générales", indexable: true },
  { path: "/sitemap", label: "Plan du site", indexable: true },
]

export const htmlSitemapEntries = optionAPages
  .filter((page) => page.indexable !== false)
  .map((page) => page.path)
  .sort((a, b) => a.localeCompare(b))

export const indexablePaths = new Set(optionAPages.filter((page) => page.indexable !== false).map((page) => page.path))

export type AeNavLink = { label: string; href: string }

export const plusNavItems: AeNavLink[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Ressources", href: "/ressources" },
  { label: "FAQ", href: "/faq" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Conditions générales", href: "/conditions-generales" },
  { label: "Plan du site", href: "/sitemap" },
]

export const footerLegalLinks: AeNavLink[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Conditions générales", href: "/conditions-generales" },
  { label: "Plan du site", href: "/sitemap" },
]

export type AeServiceSection = {
  id: string
  title: string
  description: string
  summary: string
  solutionLink: AeNavLink
}

export const servicesSections: AeServiceSection[] = [
  {
    id: "audit",
    title: "Audit & Diagnostic IA",
    description: "Texte de placeholder pour présenter un diagnostic stratégique futur.",
    summary: "Synthèse provisoire décrivant la préparation d'un audit IA.",
    solutionLink: { href: "/solutions#finance", label: "Voir la solution Finance" },
  },
  {
    id: "automatisation-ia",
    title: "Automatisation IA",
    description: "Contenu temporaire détaillant les parcours d'automatisation à définir.",
    summary: "Résumé fictif sur la mise en place d'automatisations pilotées par l'IA.",
    solutionLink: { href: "/solutions#logistique", label: "Explorer la solution Logistique" },
  },
  {
    id: "erp-crm-dev",
    title: "ERP & CRM sur mesure",
    description: "Placeholder décrivant une future offre d'intégration métier personnalisée.",
    summary: "Aperçu fictif d'un socle ERP/CRM évolutif pour les équipes.",
    solutionLink: { href: "/solutions#commercial", label: "Accéder à la solution Commerciale" },
  },
  {
    id: "formation",
    title: "Formation & Adoption",
    description: "Brouillon de texte indiquant l'arrivée prochaine d'un catalogue de formations.",
    summary: "Capsule fictive sur l'accompagnement pédagogique en continu.",
    solutionLink: { href: "/solutions#rh", label: "Solutions Ressources humaines" },
  },
  {
    id: "support",
    title: "Support & Pilotage",
    description: "Placeholder pour décrire une gouvernance et un support évolutif.",
    summary: "Note synthétique en attente sur le suivi opérationnel.",
    solutionLink: { href: "/solutions#services-b2b", label: "Solutions Services B2B" },
  },
]

export type AeSolutionSection = {
  id: string
  title: string
  description: string
  summary: string
  relatedServices: string[]
}

export const solutionsSections: AeSolutionSection[] = [
  {
    id: "commercial",
    title: "Solutions Commercial",
    description: "Placeholder décrivant les parcours commerciaux à définir.",
    summary: "Vue provisoire d'une orchestration des cycles commerciaux.",
    relatedServices: ["erp-crm-dev", "automatisation-ia"],
  },
  {
    id: "finance",
    title: "Solutions Finance",
    description: "Texte temporaire dédié aux prochaines offres financières.",
    summary: "Aperçu fictif de la consolidation et du reporting automatisé.",
    relatedServices: ["audit", "support"],
  },
  {
    id: "production",
    title: "Solutions Production",
    description: "Placeholder sur la digitalisation des opérations de production.",
    summary: "Extrait provisoire sur un pilotage d'ateliers augmentés.",
    relatedServices: ["automatisation-ia", "support"],
  },
  {
    id: "logistique",
    title: "Solutions Logistique",
    description: "Texte temporaire sur l'optimisation de la chaîne logistique.",
    summary: "Synthèse fictive des flux synchronisés et automatisés.",
    relatedServices: ["automatisation-ia", "formation"],
  },
  {
    id: "rh",
    title: "Solutions Ressources humaines",
    description: "Placeholder dédié aux prochaines offres RH.",
    summary: "Note provisoire sur le suivi des talents et de l'expérience collaborateur.",
    relatedServices: ["formation", "support"],
  },
  {
    id: "industrie",
    title: "Solutions Industrie",
    description: "Texte temporaire pour un dispositif industriel modulable.",
    summary: "Aperçu fictif d'une usine connectée à venir.",
    relatedServices: ["audit", "automatisation-ia"],
  },
  {
    id: "retail-ecommerce",
    title: "Solutions Retail & e-commerce",
    description: "Placeholder décrivant la personnalisation omnicanale envisagée.",
    summary: "Vue provisoire sur des parcours clients synchronisés.",
    relatedServices: ["erp-crm-dev", "formation"],
  },
  {
    id: "services-b2b",
    title: "Solutions Services B2B",
    description: "Texte temporaire autour d'une future plateforme de services.",
    summary: "Synthèse fictive d'un dispositif B2B orchestré.",
    relatedServices: ["support", "audit"],
  },
  {
    id: "sante",
    title: "Solutions Santé",
    description: "Placeholder sur les parcours patients augmentés en préparation.",
    summary: "Note provisoire sur la coordination des soins et la conformité.",
    relatedServices: ["formation", "support"],
  },
  {
    id: "transport-energie",
    title: "Solutions Transport & Énergie",
    description: "Texte temporaire concernant l'optimisation des réseaux.",
    summary: "Synthèse fictive d'une supervision énergétique augmentée.",
    relatedServices: ["automatisation-ia", "support"],
  },
]

export type AeResourceSection = {
  id: string
  title: string
  description: string
  summary: string
  links: AeNavLink[]
  showFaqLink?: boolean
}

export const resourcesSections: AeResourceSection[] = [
  {
    id: "blog",
    title: "Blog",
    description: "Placeholder pour les articles à venir.",
    summary: "Teaser fictif de futurs billets d'inspiration.",
    links: [{ href: "/solutions#commercial", label: "Solutions Commercial" }],
    showFaqLink: true,
  },
  {
    id: "guides",
    title: "Guides",
    description: "Texte temporaire pour des parcours guidés à concevoir.",
    summary: "Sommaire fictif de guides pratiques.",
    links: [{ href: "/services#audit", label: "Service Audit" }],
    showFaqLink: true,
  },
  {
    id: "question-hub",
    title: "Question Hub",
    description: "Placeholder pour un centre de questions IA.",
    summary: "Aperçu provisoire de futures réponses détaillées.",
    links: [{ href: "/solutions#rh", label: "Solutions RH" }],
    showFaqLink: true,
  },
  {
    id: "glossaire",
    title: "Glossaire",
    description: "Texte temporaire présentant un lexique à venir.",
    summary: "Note fictive sur un vocabulaire IA unifié.",
    links: [{ href: "/services#automatisation-ia", label: "Service Automatisation" }],
    showFaqLink: false,
  },
]

export type AeOffer = {
  id: string
  title: string
  description: string
  price: string
  serviceLinks: string[]
  solutionLinks: string[]
}

export const offerCatalog: AeOffer[] = [
  {
    id: "atelier",
    title: "Atelier découverte",
    description: "Formule fictive pour cadrer un projet IA.",
    price: "À partir de 2 000 €",
    serviceLinks: ["audit"],
    solutionLinks: ["commercial"],
  },
  {
    id: "programme",
    title: "Programme accélération",
    description: "Offre temporaire pour prototyper et automatiser.",
    price: "À partir de 6 500 €",
    serviceLinks: ["automatisation-ia", "formation"],
    solutionLinks: ["production"],
  },
  {
    id: "accompagnement",
    title: "Accompagnement continu",
    description: "Offre fictive pour piloter et maintenir les initiatives IA.",
    price: "Sur mesure",
    serviceLinks: ["support", "erp-crm-dev"],
    solutionLinks: ["services-b2b"],
  },
]

export type AeFaqItem = {
  question: string
  answer: string
}

export const faqItems: AeFaqItem[] = [
  {
    question: "Comment préparer un cadrage IA ?",
    answer: "Réponse temporaire renvoyant vers l'audit et la méthode en construction.",
  },
  {
    question: "Quel est le rythme d'un projet pilote ?",
    answer: "Texte fictif évoquant un déroulé type à préciser bientôt.",
  },
  {
    question: "Comment sont construits les tarifs ?",
    answer: "Placeholder renvoyant vers les options du catalogue tarifaire.",
  },
  {
    question: "Quelles ressources seront disponibles ?",
    answer: "Réponse temporaire indiquant la publication progressive des ressources.",
  },
]

export const faqAnchors = faqItems.map((item, index) => ({
  id: `question-${index + 1}`,
  title: item.question,
}))

export const anchorScrollMargin = "120px"
