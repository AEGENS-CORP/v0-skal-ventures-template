export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

export const primaryNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Offres",
    href: "/offres",
    children: [
      {
        label: "Toutes les offres",
        href: "/offres",
      },
      {
        label: "Diagnostic du fonctionnement opérationnel",
        href: "/offres/diagnostic-fonctionnement-operationnel-pme-industrielle",
      },
      {
        label: "Roadmap et cahier des charges",
        href: "/offres/cadrage-projet-industriel-cahier-des-charges",
      },
      {
        label: "Pilotage de mise en œuvre",
        href: "/offres/pilotage-mise-en-oeuvre-projet-industriel",
      },
    ],
  },
  {
    label: "Parcours",
    href: "/problematiques",
    children: [
      {
        label: "Problématiques",
        href: "/problematiques",
      },
      {
        label: "Cas clients",
        href: "/cas-clients",
      },
      {
        label: "Secteurs",
        href: "/secteurs",
      },
      {
        label: "Méthode",
        href: "/methode",
      },
    ],
  },
  {
    label: "Ressources",
    href: "/ressources",
    children: [
      {
        label: "Toutes les ressources",
        href: "/ressources",
      },
      {
        label: "FAQ",
        href: "/faq",
      },
      {
        label: "Plan du site",
        href: "/plan-du-site",
      },
    ],
  },
  {
    label: "À propos",
    href: "/a-propos",
    children: [
      {
        label: "À propos",
        href: "/a-propos",
      },
      {
        label: "Qui nous sommes",
        href: "/a-propos/qui-nous-sommes",
      },
      {
        label: "Notre approche",
        href: "/a-propos/notre-approche",
      },
      {
        label: "Zones d’intervention",
        href: "/zones-dintervention",
      },
      {
        label: "Notre méthode",
        href: "/a-propos/notre-methode",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
]

export const footerLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Plan du site", href: "/plan-du-site" },
]
