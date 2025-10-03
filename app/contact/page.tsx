import ContactPageClient from "@/components/contact-page-client"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Parlons de vos projets : laissez un mot ou décrivez un projet complet, toutes les informations sont optionnelles.",
})

export default function ContactPage() {
  return <ContactPageClient />
}
