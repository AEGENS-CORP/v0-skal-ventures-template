import { createPageMetadata } from "@/lib/metadata"
import PoitiersClientPage from "./PoitiersClientPage"

export const metadata = createPageMetadata({
  title: "Intégrateur IA Poitiers | Automatisation PME Vienne | Assistant IA & Reporting",
  path: "/ville/poitiers",
  description:
    "Intégrateur IA pour TPE/PME à Poitiers. Automatisation des processus, assistant IA métier, reporting temps réel, audit 360°. Visite 60–90 min. Plan d'action et devis sous 48 h.",
})

export default function PoitiersPage() {
  return <PoitiersClientPage />
}
