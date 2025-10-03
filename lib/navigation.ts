import type { AeNavItem } from "./ae-site-structure"
import {
  aeFooterLegalLinks,
  aeMainNavigation,
  aePlusNavigation,
} from "./ae-site-structure"

export type NavItem = AeNavItem & {
  children?: { label: string; href: string }[]
}

export const primaryNav: NavItem[] = aeMainNavigation

export const plusNav: NavItem[] = aePlusNavigation

export const footerLinks: NavItem[] = aeFooterLegalLinks
