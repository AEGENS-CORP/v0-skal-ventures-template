import { createPageMetadata } from "@/lib/metadata"
import ContactPageClient from "./contact-page-client"

export const metadata = createPageMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Échangez sur votre situation : diagnostic du fonctionnement opérationnel, cadrage et pilotage de mise en œuvre pour PME industrielles.",
})

export default function ContactPage() {
  return <ContactPageClient />
}
