import { createPageMetadata } from "@/lib/metadata"
import LaRocheSurYonClientPage from "./la-roche-sur-yon-client"

export const metadata = createPageMetadata({
  title: "Intégrateur IA La Roche-sur-Yon | Automatisation PME Vendée | Assistant IA & Reporting",
  path: "/ville/la-roche-sur-yon",
  description:
    "Intégrateur IA pour TPE/PME à La Roche-sur-Yon. Automatisation des processus, assistant IA métier, reporting temps réel, audit 360°. Visite 60–90 min. Plan d'action et devis sous 48 h.",
})

export default function LaRocheSurYonPage() {
  return <LaRocheSurYonClientPage />
}
