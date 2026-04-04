import type { AeNavLink } from "@/content/site/types"
import { offresPages } from "@/content/site/details/offres"

export const plusNavItems: AeNavLink[] = [
  { label: "FAQ", href: "/faq" },
  { label: "Méthode", href: "/methode" },
  { label: "Cas clients", href: "/cas-clients" },
  { label: "Ressources", href: "/ressources" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
]

export const footerLegalLinks: AeNavLink[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Plan du site", href: "/plan-du-site" },
]

export const primaryOfferLinks = offresPages.map((page) => ({
  label: page.title,
  href: `/offres/${page.slug}`,
}))
