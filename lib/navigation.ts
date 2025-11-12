export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

export const primaryNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Automatisation", href: "/services/automatisation" },
      { label: "Assistant IA Métier", href: "/services/assistant-ia-metier" },
      { label: "Analyse & Reporting", href: "/services/analyse-reporting" },
      { label: "Audit", href: "/services/audit" },
      { label: "Vente / Gestion", href: "/services/vente-gestion" },
    ],
  },
  { label: "Études de cas", href: "/etudes-de-cas" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
]

export const footerLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Carte de visite", href: "/carte-de-visite" },
  { label: "Plan du site", href: "/plan-du-site" },
]
