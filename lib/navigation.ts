import { casUsage, sectors, services } from "./site-structure"

export type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export const primaryNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Méthode", href: "/methode" },
  {
    label: "Services",
    href: "/services",
    children: services.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
  },
  {
    label: "Cas d'usage",
    href: "/cas-usage",
    children: casUsage.map((item) => ({
      label: item.title,
      href: `/cas-usage/${item.slug}`,
    })),
  },
  {
    label: "Secteurs",
    href: "/secteurs",
    children: sectors.map((item) => ({
      label: item.title,
      href: `/secteurs/${item.slug}`,
    })),
  },
  {
    label: "Ressources",
    href: "/ressources",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/ressources/guides" },
      { label: "Question-Hub IA", href: "/ressources/question-hub-ia" },
      { label: "Comparatifs", href: "/ressources/comparatifs" },
      { label: "Glossaire", href: "/ressources/glossaire" },
      { label: "Outils", href: "/ressources/outils" },
      { label: "Calculateur ROI", href: "/ressources/calculateur-roi" },
    ],
  },
  { label: "Tarifs", href: "/tarifs" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export const footerLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique RGPD", href: "/rgpd" },
  { label: "Cookies", href: "/cookies" },
  { label: "DPA", href: "/dpa" },
  { label: "Conditions générales", href: "/conditions-generales" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Status", href: "/status" },
  { label: "Changelog", href: "/changelog" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Tarifs", href: "/tarifs" },
]

