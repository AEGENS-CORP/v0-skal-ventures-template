import { LaRochelleClientPage } from "./la-rochelle-client-page"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Intégrateur IA La Rochelle | Automatisation PME Charente-Maritime | Assistant IA & Reporting",
  path: "/ville/la-rochelle",
  description:
    "Intégrateur IA pour TPE/PME à La Rochelle. Automatisation des processus, assistant IA métier, reporting temps réel, audit 360°. Visite 60–90 min. Plan d'action et devis sous 48 h.",
})

export default function LaRochellePage() {
  return <LaRochelleClientPage />
}
