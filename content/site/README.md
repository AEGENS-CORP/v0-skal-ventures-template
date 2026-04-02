# Workflow contenu (rapide)

Objectif: rédiger les pages vite, sans toucher au rendu ni à la DA.

## Où modifier le contenu

- Hubs (intro + SEO): `content/site/hubs.ts`
- Offres: `content/site/details/offres.ts`
- Problématiques: `content/site/details/problematiques.ts`
- Expertises: `content/site/details/expertises.ts`
- Secteurs: `content/site/details/secteurs.ts`
- Ressources: `content/site/details/ressources.ts`
- Cas clients: `content/site/details/cas-clients.ts`
- À propos: `content/site/details/a-propos.ts`
- FAQ: `content/site/details/faq.ts`

## Structure d'une page détail

Chaque entrée suit la même forme:

- `slug`
- `title`
- `intro`
- `metaTitle`
- `metaDescription`
- `sections[]` (titre + texte + bullets optionnels)
- `relatedPaths[]`

## Liens et plan du site

- Registre central: `content/site/registry.ts`
- Navigation secondaire/footer: `content/site/navigation.ts`

## Règle de sécurité

- Ne pas modifier `app/page.tsx` (accueil)
- Ne pas modifier les styles globaux pour la rédaction de contenu
- Modifier uniquement les fichiers `content/site/**` pour produire les pages
