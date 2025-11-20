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
      { label: "Assistants métier IA & RAG", href: "/services/assistant-ia-metier" },
      { label: "Tableaux de bord & KPIs", href: "/services/analyse-reporting" },
      { label: "Audit, cartographie & diagnostic", href: "/services/audit" },
      { label: "Croissance commerciale", href: "/services/vente-gestion" },
    ],
  },
  { label: "Sécurité & conformité", href: "/etudes-de-cas" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
]

export const footerLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Plan du site", href: "/plan-du-site" },
]
