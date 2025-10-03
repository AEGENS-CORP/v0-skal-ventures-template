import { footerLegalLinks, plusNavItems } from "./ae-content"

export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

const plusChildren: NavItem[] = plusNavItems.map((item) => ({ ...item }))

export const primaryNav: NavItem[] = [
  { label: "Méthode", href: "/methode" },
  { label: "Services", href: "/services" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Contact", href: "/contact" },
  { label: "Plus", href: "#plus", children: plusChildren },
]

export const footerLinks = footerLegalLinks
