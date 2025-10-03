export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://aegens.example"

export type RouteItem = {
  slug: string
  title: string
  description?: string
}

export type ServiceItem = RouteItem & {
  relatedCasUsage: string[]
  relatedSectors: string[]
}

export type CasUsageItem = RouteItem & {
  relatedServices: string[]
  relatedSector: string
}

export type SectorItem = RouteItem & {
  relatedCasUsage: string[]
  relatedServices: string[]
}

export const services: ServiceItem[] = [
  {
    slug: "audit-diagnostic",
    title: "Audit et diagnostic automation",
    relatedCasUsage: ["commercial-marketing", "finance-comptabilite"],
    relatedSectors: ["services-b2b", "industrie"],
  },
  {
    slug: "automatisation-ia",
    title: "Automatisation IA",
    relatedCasUsage: ["dsi-it", "rh"],
    relatedSectors: ["saas-editeurs", "telecom-medias"],
  },
  {
    slug: "rpa",
    title: "RPA",
    relatedCasUsage: ["finance-comptabilite", "production-qualite"],
    relatedSectors: ["banque-assurance", "industrie"],
  },
  {
    slug: "llm-rag",
    title: "LLM et RAG",
    relatedCasUsage: ["service-client", "juridique"],
    relatedSectors: ["sante", "collectivites-parapublic"],
  },
  {
    slug: "agents-ia",
    title: "Agents IA",
    relatedCasUsage: ["service-client", "commercial-marketing"],
    relatedSectors: ["retail-ecommerce", "saas-editeurs"],
  },
  {
    slug: "integration-donnees-etl-n8n",
    title: "Intégration de données ETL & n8n",
    relatedCasUsage: ["dsi-it", "supply-chain-logistique"],
    relatedSectors: ["transport-logistique", "energie-utilities"],
  },
  {
    slug: "erp-crm-dev",
    title: "ERP & CRM sur mesure",
    relatedCasUsage: ["commercial-marketing", "pmo-gestion-de-projets"],
    relatedSectors: ["agences-esn", "banque-assurance"],
  },
  {
    slug: "odoo-integration",
    title: "Intégration Odoo",
    relatedCasUsage: ["finance-comptabilite", "achats-approvisionnements"],
    relatedSectors: ["industrie", "retail-ecommerce"],
  },
  {
    slug: "crm-automation",
    title: "Automation CRM",
    relatedCasUsage: ["commercial-marketing", "service-client"],
    relatedSectors: ["saas-editeurs", "luxe-cosmetique"],
  },
  {
    slug: "ecommerce-automation",
    title: "Automation e-commerce",
    relatedCasUsage: ["commercial-marketing", "supply-chain-logistique"],
    relatedSectors: ["retail-ecommerce", "mode-textile"],
  },
  {
    slug: "marketing-automation",
    title: "Marketing automation",
    relatedCasUsage: ["commercial-marketing", "service-client"],
    relatedSectors: ["luxe-cosmetique", "tourisme-loisirs"],
  },
  {
    slug: "sales-ops",
    title: "Sales Ops",
    relatedCasUsage: ["commercial-marketing", "pmo-gestion-de-projets"],
    relatedSectors: ["services-b2b", "saas-editeurs"],
  },
  {
    slug: "service-client-helpdesk",
    title: "Service client & helpdesk",
    relatedCasUsage: ["service-client", "maintenance"],
    relatedSectors: ["telecom-medias", "sante"],
  },
  {
    slug: "bi-analytics-reporting",
    title: "BI, analytics & reporting",
    relatedCasUsage: ["finance-comptabilite", "pmo-gestion-de-projets"],
    relatedSectors: ["energie-utilities", "industrie"],
  },
  {
    slug: "data-engineering",
    title: "Data engineering",
    relatedCasUsage: ["dsi-it", "production-qualite"],
    relatedSectors: ["electronique", "energie-utilities"],
  },
  {
    slug: "mlops",
    title: "MLOps",
    relatedCasUsage: ["dsi-it", "production-qualite"],
    relatedSectors: ["pharma-medtech", "automobile-mobilite"],
  },
  {
    slug: "gestion-documentaire-ged",
    title: "Gestion documentaire GED",
    relatedCasUsage: ["juridique", "rh"],
    relatedSectors: ["collectivites-parapublic", "education"],
  },
  {
    slug: "governance-rgpd-ai-act",
    title: "Gouvernance RGPD & AI Act",
    relatedCasUsage: ["juridique", "securite"],
    relatedSectors: ["banque-assurance", "collectivites-parapublic"],
  },
  {
    slug: "securite",
    title: "Sécurité et conformité",
    relatedCasUsage: ["securite", "dsi-it"],
    relatedSectors: ["energie-utilities", "banque-assurance"],
  },
  {
    slug: "support-maintenance",
    title: "Support & maintenance",
    relatedCasUsage: ["maintenance", "service-client"],
    relatedSectors: ["automobile-mobilite", "industrie"],
  },
]

export const casUsage: CasUsageItem[] = [
  {
    slug: "commercial-marketing",
    title: "Cas d'usage Commercial & Marketing",
    relatedServices: ["crm-automation", "marketing-automation"],
    relatedSector: "retail-ecommerce",
  },
  {
    slug: "service-client",
    title: "Cas d'usage Service client",
    relatedServices: ["service-client-helpdesk", "agents-ia"],
    relatedSector: "telecom-medias",
  },
  {
    slug: "finance-comptabilite",
    title: "Cas d'usage Finance & Comptabilité",
    relatedServices: ["rpa", "bi-analytics-reporting"],
    relatedSector: "banque-assurance",
  },
  {
    slug: "achats-approvisionnements",
    title: "Cas d'usage Achats & Approvisionnements",
    relatedServices: ["integration-donnees-etl-n8n", "odoo-integration"],
    relatedSector: "industrie",
  },
  {
    slug: "supply-chain-logistique",
    title: "Cas d'usage Supply chain & logistique",
    relatedServices: ["ecommerce-automation", "integration-donnees-etl-n8n"],
    relatedSector: "transport-logistique",
  },
  {
    slug: "production-qualite",
    title: "Cas d'usage Production & Qualité",
    relatedServices: ["mlops", "data-engineering"],
    relatedSector: "industrie",
  },
  {
    slug: "maintenance",
    title: "Cas d'usage Maintenance",
    relatedServices: ["support-maintenance", "rpa"],
    relatedSector: "automobile-mobilite",
  },
  {
    slug: "rh",
    title: "Cas d'usage Ressources humaines",
    relatedServices: ["agents-ia", "gestion-documentaire-ged"],
    relatedSector: "education",
  },
  {
    slug: "juridique",
    title: "Cas d'usage Juridique",
    relatedServices: ["governance-rgpd-ai-act", "gestion-documentaire-ged"],
    relatedSector: "collectivites-parapublic",
  },
  {
    slug: "dsi-it",
    title: "Cas d'usage DSI & IT",
    relatedServices: ["automatisation-ia", "data-engineering"],
    relatedSector: "saas-editeurs",
  },
  {
    slug: "securite",
    title: "Cas d'usage Sécurité",
    relatedServices: ["securite", "governance-rgpd-ai-act"],
    relatedSector: "energie-utilities",
  },
  {
    slug: "pmo-gestion-de-projets",
    title: "Cas d'usage PMO & Gestion de projets",
    relatedServices: ["erp-crm-dev", "bi-analytics-reporting"],
    relatedSector: "services-b2b",
  },
]

export const casUsageTasks: RouteItem[] = [
  { slug: "prospection-multicanale-rgpd", title: "Prospection multicanale RGPD" },
  { slug: "qualification-mql-sql", title: "Qualification MQL à SQL" },
  { slug: "relances-automatiques", title: "Relances automatiques" },
  { slug: "onboarding-clients", title: "Onboarding clients" },
  { slug: "facturation-et-recouvrement", title: "Facturation et recouvrement" },
  { slug: "cloture-mensuelle-rapide", title: "Clôture mensuelle rapide" },
  { slug: "gestion-stocks", title: "Gestion des stocks" },
  { slug: "ordonnancement", title: "Ordonnancement" },
  { slug: "planification-tournees", title: "Planification des tournées" },
  { slug: "controle-qualite", title: "Contrôle qualité" },
  { slug: "maintenance-predictive", title: "Maintenance prédictive" },
  { slug: "onboarding-salaries", title: "Onboarding salariés" },
  { slug: "gestion-contrats", title: "Gestion des contrats" },
  { slug: "conformite-rgpd-ai-act", title: "Conformité RGPD et AI Act" },
  { slug: "ged-et-rag-documentaire", title: "GED et RAG documentaire" },
  { slug: "tableaux-de-bord-kpi", title: "Tableaux de bord KPI" },
]

export const sectors: SectorItem[] = [
  {
    slug: "industrie",
    title: "Secteur Industrie",
    relatedCasUsage: ["production-qualite", "maintenance"],
    relatedServices: ["rpa", "data-engineering"],
  },
  {
    slug: "agroalimentaire",
    title: "Secteur Agroalimentaire",
    relatedCasUsage: ["supply-chain-logistique", "production-qualite"],
    relatedServices: ["ecommerce-automation", "mlops"],
  },
  {
    slug: "pharma-medtech",
    title: "Secteur Pharma & Medtech",
    relatedCasUsage: ["production-qualite", "securite"],
    relatedServices: ["mlops", "governance-rgpd-ai-act"],
  },
  {
    slug: "sante",
    title: "Secteur Santé",
    relatedCasUsage: ["service-client", "juridique"],
    relatedServices: ["llm-rag", "service-client-helpdesk"],
  },
  {
    slug: "energie-utilities",
    title: "Secteur Énergie & Utilities",
    relatedCasUsage: ["securite", "dsi-it"],
    relatedServices: ["securite", "data-engineering"],
  },
  {
    slug: "transport-logistique",
    title: "Secteur Transport & Logistique",
    relatedCasUsage: ["supply-chain-logistique", "maintenance"],
    relatedServices: ["integration-donnees-etl-n8n", "support-maintenance"],
  },
  {
    slug: "automobile-mobilite",
    title: "Secteur Automobile & Mobilité",
    relatedCasUsage: ["maintenance", "production-qualite"],
    relatedServices: ["support-maintenance", "mlops"],
  },
  {
    slug: "construction-btp",
    title: "Secteur Construction & BTP",
    relatedCasUsage: ["pmo-gestion-de-projets", "maintenance"],
    relatedServices: ["erp-crm-dev", "support-maintenance"],
  },
  {
    slug: "immobilier",
    title: "Secteur Immobilier",
    relatedCasUsage: ["commercial-marketing", "juridique"],
    relatedServices: ["crm-automation", "governance-rgpd-ai-act"],
  },
  {
    slug: "recyclage-dechets",
    title: "Secteur Recyclage & Déchets",
    relatedCasUsage: ["maintenance", "supply-chain-logistique"],
    relatedServices: ["integration-donnees-etl-n8n", "support-maintenance"],
  },
  {
    slug: "chimie-materiaux",
    title: "Secteur Chimie & Matériaux",
    relatedCasUsage: ["production-qualite", "securite"],
    relatedServices: ["mlops", "securite"],
  },
  {
    slug: "electronique",
    title: "Secteur Électronique",
    relatedCasUsage: ["production-qualite", "dsi-it"],
    relatedServices: ["data-engineering", "mlops"],
  },
  {
    slug: "retail-ecommerce",
    title: "Secteur Retail & e-commerce",
    relatedCasUsage: ["commercial-marketing", "service-client"],
    relatedServices: ["ecommerce-automation", "marketing-automation"],
  },
  {
    slug: "luxe-cosmetique",
    title: "Secteur Luxe & Cosmétique",
    relatedCasUsage: ["commercial-marketing", "service-client"],
    relatedServices: ["marketing-automation", "crm-automation"],
  },
  {
    slug: "mode-textile",
    title: "Secteur Mode & Textile",
    relatedCasUsage: ["supply-chain-logistique", "commercial-marketing"],
    relatedServices: ["ecommerce-automation", "integration-donnees-etl-n8n"],
  },
  {
    slug: "tourisme-loisirs",
    title: "Secteur Tourisme & Loisirs",
    relatedCasUsage: ["service-client", "commercial-marketing"],
    relatedServices: ["marketing-automation", "agents-ia"],
  },
  {
    slug: "hotellerie-restauration",
    title: "Secteur Hôtellerie & Restauration",
    relatedCasUsage: ["service-client", "achats-approvisionnements"],
    relatedServices: ["service-client-helpdesk", "integration-donnees-etl-n8n"],
  },
  {
    slug: "banque-assurance",
    title: "Secteur Banque & Assurance",
    relatedCasUsage: ["finance-comptabilite", "securite"],
    relatedServices: ["rpa", "governance-rgpd-ai-act"],
  },
  {
    slug: "telecom-medias",
    title: "Secteur Télécom & Médias",
    relatedCasUsage: ["service-client", "dsi-it"],
    relatedServices: ["agents-ia", "automatisation-ia"],
  },
  {
    slug: "services-b2b",
    title: "Secteur Services B2B",
    relatedCasUsage: ["pmo-gestion-de-projets", "commercial-marketing"],
    relatedServices: ["erp-crm-dev", "sales-ops"],
  },
  {
    slug: "saas-editeurs",
    title: "Secteur SaaS & Éditeurs",
    relatedCasUsage: ["dsi-it", "commercial-marketing"],
    relatedServices: ["erp-crm-dev", "automatisation-ia"],
  },
  {
    slug: "agences-esn",
    title: "Secteur Agences & ESN",
    relatedCasUsage: ["pmo-gestion-de-projets", "dsi-it"],
    relatedServices: ["erp-crm-dev", "data-engineering"],
  },
  {
    slug: "education",
    title: "Secteur Éducation",
    relatedCasUsage: ["rh", "juridique"],
    relatedServices: ["gestion-documentaire-ged", "llm-rag"],
  },
  {
    slug: "collectivites-parapublic",
    title: "Secteur Collectivités & Parapublic",
    relatedCasUsage: ["juridique", "securite"],
    relatedServices: ["governance-rgpd-ai-act", "llm-rag"],
  },
]

export const sectorSubpages: RouteItem[] = [
  { slug: "processus-a-automatiser", title: "Processus à automatiser" },
  { slug: "integrations-outils", title: "Intégrations d'outils" },
  { slug: "kpi-a-optimiser", title: "KPI à optimiser" },
  { slug: "cas-pratiques", title: "Cas pratiques" },
  { slug: "conformite-reglementations", title: "Conformité et réglementations" },
  { slug: "templates-et-sop", title: "Templates et SOP" },
]

export const guides: RouteItem[] = [
  { slug: "checklist-audit-digital-pme", title: "Checklist audit digital PME" },
  { slug: "sop-relances-automatiques", title: "SOP relances automatiques" },
  { slug: "script-cold-email-rgpd", title: "Script cold email RGPD" },
  { slug: "modele-kpi-finance", title: "Modèle KPI finance" },
  { slug: "modele-kpi-production", title: "Modèle KPI production" },
  { slug: "modele-kpi-logistique", title: "Modèle KPI logistique" },
  { slug: "modele-kpi-commercial", title: "Modèle KPI commercial" },
  { slug: "template-spec-fonctionnelle-automation", title: "Template spec fonctionnelle automation" },
  { slug: "template-cahier-recette", title: "Template cahier de recette" },
]

export const questionHubEntries = [
  { category: "definition", slug: "llm-rag", title: "Définition LLM RAG" },
  { category: "definition", slug: "agent-ia", title: "Définition agent IA" },
  { category: "definition", slug: "rpa", title: "Définition RPA" },
  { category: "howto", slug: "automatiser-facturation-odoo", title: "Comment automatiser la facturation Odoo" },
  { category: "howto", slug: "rag-sur-documents-rh", title: "RAG sur documents RH" },
  { category: "howto", slug: "brancher-n8n-a-odoo", title: "Brancher n8n à Odoo" },
  { category: "cout", slug: "prix-projet-ia-pme", title: "Prix projet IA PME" },
  { category: "cout", slug: "budget-erp-crm-pme", title: "Budget ERP CRM PME" },
  { category: "top", slug: "meilleurs-outils-automatisation-pme", title: "Meilleurs outils d'automatisation PME" },
  { category: "alternatives", slug: "alternative-a-zapier", title: "Alternative à Zapier" },
  { category: "problemes", slug: "erreurs-deploiement-rpa", title: "Erreurs déploiement RPA" },
  { category: "tutoriels", slug: "workflow-n8n-email-vers-crm", title: "Tutoriel workflow n8n email vers CRM" },
  { category: "conformite", slug: "ai-act-entreprise", title: "AI Act pour l'entreprise" },
  { category: "conformite", slug: "rgpd-et-llm", title: "RGPD et LLM" },
]

export const comparatifs = [
  { category: "erp", slug: "odoo-vs-sap-business-one", title: "Odoo vs SAP Business One" },
  { category: "erp", slug: "odoo-vs-dolibarr", title: "Odoo vs Dolibarr" },
  { category: "erp", slug: "odoo-vs-zoho", title: "Odoo vs Zoho" },
  { category: "crm", slug: "hubspot-vs-odoo-crm", title: "HubSpot vs Odoo CRM" },
  { category: "crm", slug: "pipedrive-vs-hubspot", title: "Pipedrive vs HubSpot" },
  { category: "crm", slug: "salesforce-vs-odoo", title: "Salesforce vs Odoo" },
  { category: "ecommerce", slug: "shopify-vs-woocommerce-vs-magento", title: "Shopify vs WooCommerce vs Magento" },
  { category: "automatisation", slug: "n8n-vs-zapier-vs-make", title: "n8n vs Zapier vs Make" },
  { category: "automatisation", slug: "rpa-vs-llm-agents", title: "RPA vs LLM Agents" },
  { category: "bi", slug: "power-bi-vs-tableau-vs-looker", title: "Power BI vs Tableau vs Looker" },
]

export const glossaire = [
  { slug: "llm", title: "Glossaire LLM" },
  { slug: "rag", title: "Glossaire RAG" },
  { slug: "agent", title: "Glossaire Agent" },
  { slug: "prompt", title: "Glossaire Prompt" },
  { slug: "vector-store", title: "Glossaire Vector Store" },
  { slug: "etl", title: "Glossaire ETL" },
  { slug: "ipass", title: "Glossaire iPaaS" },
  { slug: "rpa", title: "Glossaire RPA" },
  { slug: "ai-act", title: "Glossaire AI Act" },
  { slug: "iso-27001", title: "Glossaire ISO 27001" },
  { slug: "rgpd", title: "Glossaire RGPD" },
  { slug: "erp", title: "Glossaire ERP" },
  { slug: "crm", title: "Glossaire CRM" },
  { slug: "wms-oms", title: "Glossaire WMS & OMS" },
  { slug: "bi", title: "Glossaire BI" },
]

export const outils = [
  { slug: "n8n", title: "Outil n8n" },
  { slug: "odoo", title: "Outil Odoo" },
  { slug: "hubspot", title: "Outil HubSpot" },
  { slug: "make", title: "Outil Make" },
  { slug: "zapier", title: "Outil Zapier" },
  { slug: "mistral", title: "Outil Mistral" },
  { slug: "openai", title: "Outil OpenAI" },
  { slug: "azure-openai", title: "Outil Azure OpenAI" },
  { slug: "power-bi", title: "Outil Power BI" },
  { slug: "tableau", title: "Outil Tableau" },
  { slug: "looker", title: "Outil Looker" },
  { slug: "airbyte", title: "Outil Airbyte" },
]

export const corePages: RouteItem[] = [
  { slug: "methode", title: "Méthode" },
  { slug: "tarifs", title: "Tarifs" },
  { slug: "faq", title: "FAQ" },
  { slug: "contact", title: "Contact" },
  { slug: "contact/merci", title: "Merci" },
  { slug: "mentions-legales", title: "Mentions légales" },
  { slug: "rgpd", title: "Politique de confidentialité" },
  { slug: "cookies", title: "Politique cookies" },
  { slug: "dpa", title: "DPA" },
  { slug: "conditions-generales", title: "Conditions générales" },
  { slug: "sitemap", title: "Plan du site" },
  { slug: "status", title: "Status" },
  { slug: "changelog", title: "Changelog" },
  { slug: "blog", title: "Blog" },
  { slug: "ressources/calculateur-roi", title: "Calculateur ROI" },
]

export const indexablePaths = new Set<string>([
  "/",
  "/tarifs",
  "/methode",
  "/faq",
  "/contact",
  "/sitemap",
  "/mentions-legales",
  "/rgpd",
  "/cookies",
  "/dpa",
  "/conditions-generales",
  "/services/audit-diagnostic",
  "/services/automatisation-ia",
  "/services/rpa",
  "/services/llm-rag",
  "/services/agents-ia",
])

export const homeRequiredLinks = {
  services: ["/services/audit-diagnostic", "/services/automatisation-ia", "/services/erp-crm-dev"],
  casUsage: [
    "/cas-usage/commercial-marketing",
    "/cas-usage/service-client",
    "/cas-usage/finance-comptabilite",
    "/cas-usage/achats-approvisionnements",
    "/cas-usage/supply-chain-logistique",
    "/cas-usage/production-qualite",
  ],
  sectors: [
    "/secteurs/industrie",
    "/secteurs/retail-ecommerce",
    "/secteurs/banque-assurance",
    "/secteurs/sante",
    "/secteurs/energie-utilities",
    "/secteurs/transport-logistique",
    "/secteurs/saas-editeurs",
    "/secteurs/services-b2b",
  ],
}

export const servicesMap = new Map(services.map((item) => [item.slug, item]))
export const casUsageMap = new Map(casUsage.map((item) => [item.slug, item]))
export const sectorsMap = new Map(sectors.map((item) => [item.slug, item]))
export const casUsageTasksMap = new Map(casUsageTasks.map((item) => [item.slug, item]))
export const sectorSubpagesMap = new Map(sectorSubpages.map((item) => [item.slug, item]))
export const guidesMap = new Map(guides.map((item) => [item.slug, item]))
export const glossaireMap = new Map(glossaire.map((item) => [item.slug, item]))
export const outilsMap = new Map(outils.map((item) => [item.slug, item]))
export const comparatifsMap = new Map(comparatifs.map((item) => [item.slug, item]))
export const questionHubMap = new Map(questionHubEntries.map((item) => [item.slug, item]))

export const getAllRoutes = () => {
  const routes = new Set<string>(["/"])

  corePages.forEach((page) => {
    routes.add(`/${page.slug}`)
  })

  routes.add("/services")
  services.forEach((service) => {
    routes.add(`/services/${service.slug}`)
  })

  routes.add("/cas-usage")
  casUsage.forEach((item) => {
    routes.add(`/cas-usage/${item.slug}`)
    casUsageTasks.forEach((task) => {
      routes.add(`/cas-usage/${item.slug}/${task.slug}`)
    })
  })

  routes.add("/secteurs")
  sectors.forEach((sector) => {
    routes.add(`/secteurs/${sector.slug}`)
    sectorSubpages.forEach((sub) => {
      routes.add(`/secteurs/${sector.slug}/${sub.slug}`)
    })
  })

  routes.add("/ressources")
  routes.add("/ressources/guides")
  guides.forEach((guide) => {
    routes.add(`/ressources/guides/${guide.slug}`)
  })

  routes.add("/ressources/question-hub-ia")
  questionHubEntries.forEach((entry) => {
    routes.add(`/ressources/qh/${entry.category}/${entry.slug}`)
  })

  routes.add("/ressources/comparatifs")
  const comparatifCategories = new Set<string>()
  comparatifs.forEach((entry) => {
    comparatifCategories.add(entry.category)
    routes.add(`/ressources/comparatifs/${entry.category}/${entry.slug}`)
  })
  comparatifCategories.forEach((category) => {
    routes.add(`/ressources/comparatifs/${category}`)
  })

  routes.add("/ressources/glossaire")
  glossaire.forEach((entry) => {
    routes.add(`/ressources/glossaire/${entry.slug}`)
  })

  routes.add("/ressources/outils")
  outils.forEach((entry) => {
    routes.add(`/ressources/outils/${entry.slug}`)
  })

  return Array.from(routes)
}
