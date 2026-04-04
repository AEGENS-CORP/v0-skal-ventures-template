import { hubPages } from "@/content/site/hubs"
import {
  aProposPages,
  casClientsPages,
  expertisesPages,
  faqPages,
  offresPages,
  problematiquesPages,
  ressourcesPages,
  secteursPages,
} from "@/content/site/details"
import type { AePage, DetailPagesByHub, HubKey } from "@/content/site/types"

export const detailPagesByHub: DetailPagesByHub = {
  offres: offresPages,
  problematiques: problematiquesPages,
  expertises: expertisesPages,
  secteurs: secteursPages,
  ressources: ressourcesPages,
  "cas-clients": casClientsPages,
  "a-propos": aProposPages,
  faq: faqPages,
}

export type DetailHubKey = keyof typeof detailPagesByHub

export const findDetailPage = (hub: DetailHubKey, slug: string) =>
  detailPagesByHub[hub].find((page) => page.slug === slug)

const staticTopPages: AePage[] = [
  { path: "/", label: "Accueil", indexable: true },
  { path: "/contact", label: "Contact", indexable: true },
  { path: "/methode", label: "Méthode", indexable: true },
  { path: "/zones-dintervention", label: "Zones d’intervention", indexable: true },
  { path: "/modeles-checklists", label: "Modèles et checklists", indexable: true },
  { path: "/mentions-legales", label: "Mentions légales", indexable: true },
  { path: "/politique-de-confidentialite", label: "Politique de confidentialité", indexable: true },
  { path: "/plan-du-site", label: "Plan du site", indexable: true },
]

export const modelesChecklistsPages: AePage[] = [
  { path: "/modeles-checklists/trame-diagnostic-operationnel", label: "Trame de diagnostic opérationnel", indexable: true },
  { path: "/modeles-checklists/checklist-cadrage-projet-industriel", label: "Checklist cadrage projet industriel", indexable: true },
  { path: "/modeles-checklists/exemple-cahier-des-charges-fonctionnel", label: "Exemple de cahier des charges fonctionnel", indexable: true },
  { path: "/modeles-checklists/exemple-roadmap-projet", label: "Exemple de roadmap projet", indexable: true },
  { path: "/modeles-checklists/checklist-consultation-prestataires", label: "Checklist consultation prestataires", indexable: true },
  {
    path: "/modeles-checklists/matrice-criteres-choix-solution-ou-prestataire",
    label: "Matrice de critères de choix solution ou prestataire",
    indexable: true,
  },
]

const customIndexablePages: AePage[] = [
  {
    path: "/faq/faut-il-consulter-des-prestataires-avant-de-cadrer-le-besoin",
    label: "Faut-il consulter des prestataires avant de cadrer le besoin ?",
    indexable: true,
  },
  { path: "/secteurs/logistique", label: "Logistique", indexable: true },
  { path: "/secteurs/retail", label: "Retail", indexable: true },
]

const hubRoutePages: AePage[] = Object.values(hubPages).map((hub) => ({
  path: hub.path,
  label: hub.label,
  indexable: true,
}))

const detailRoutePages: AePage[] = (Object.entries(detailPagesByHub) as Array<[HubKey, (typeof detailPagesByHub)[HubKey]]>).flatMap(
  ([hub, pages]) =>
    pages.map((page) => ({
      path: `/${hub}/${page.slug}`,
      label: page.title,
      indexable: true,
    })),
)

const dedupeByPath = (pages: AePage[]) => {
  const byPath = new Map<string, AePage>()
  for (const page of pages) {
    byPath.set(page.path, page)
  }
  return Array.from(byPath.values())
}

export const optionAPages: AePage[] = dedupeByPath([
  ...staticTopPages,
  ...hubRoutePages,
  ...detailRoutePages,
  ...customIndexablePages,
  ...modelesChecklistsPages,
])

export const htmlSitemapEntries = optionAPages
  .filter((page) => page.indexable !== false)
  .map((page) => page.path)
  .sort((a, b) => a.localeCompare(b))

export const indexablePaths = new Set(optionAPages.filter((page) => page.indexable !== false).map((page) => page.path))

export const getPageLabel = (path: string) => optionAPages.find((page) => page.path === path)?.label ?? path

export const prioritizedLaunchPaths = [
  "/",
  "/methode",
  "/zones-dintervention",
  "/offres/diagnostic-fonctionnement-operationnel-pme-industrielle",
  "/offres/cadrage-projet-industriel-cahier-des-charges",
  "/offres/pilotage-mise-en-oeuvre-projet-industriel",
  "/problematiques/pertes-de-temps-entre-services-industrie",
  "/problematiques/projet-industriel-mal-cadre",
  "/problematiques/besoin-mal-defini-avant-consultation-prestataires",
  "/problematiques/choisir-solution-ou-prestataire-industriel",
  "/expertises/diagnostic-operationnel",
  "/expertises/cahier-des-charges-fonctionnel",
  "/expertises/pilotage-de-projet-industriel",
  "/cas-clients/diagnostic-et-cadrage-dun-projet-industriel",
  "/cas-clients/pilotage-de-mise-en-oeuvre-dun-projet-operationnel",
  "/a-propos/notre-methode",
  "/contact",
] as const
