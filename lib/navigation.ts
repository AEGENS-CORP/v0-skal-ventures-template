export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

export const primaryNav: NavItem[] = [
  { label: "Approche", href: "/services" },
  {
    label: "Offres",
    href: "/services",
    children: [
      { label: "Vision & décisions", href: "/services/audit" },
      { label: "Cockpit & architecture de pilotage", href: "/services/analyse-reporting" },
      { label: "IA, automatisation & déploiement", href: "/services/automatisation" },
      { label: "Transformation, sourcing & accompagnement terrain", href: "/services/assistant-ia-metier" },
    ],
  },
  { label: "Cas concrets", href: "/etudes-de-cas" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
]

export const footerLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Plan du site", href: "/plan-du-site" },
]
