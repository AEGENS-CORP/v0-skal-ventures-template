# Typographie & SEO Techniques

## Police et variables
- Les polices Helveticas sont déclarées dans `app/globals.css` via `@font-face` et les variables CSS `--font-*`.
- Des fichiers WOFF2 factices sont présents dans `public/fonts/` comme espaces réservés : remplacez-les par les versions officielles avant mise en production.
- Les composants héritent de la pile de fontes `--font-sans`. Ajustez la typographie globale en modifiant les variables `--h1` à `--h6`, `--body`, `--small` et les poids `--font-weight-*`.
- Pour ajouter une nouvelle graisse, placez le fichier WOFF2 dans `public/fonts/` puis ajoutez un bloc `@font-face` correspondant dans `app/globals.css`.

## Utilisation Tailwind / classes
- Les utilitaires Tailwind utilisent automatiquement la pile via `font-sans`. Les sections de navigation et boutons héritent d'un poids moyen grâce aux règles globales.

## Données structurées & SEO
- Les métadonnées par page sont générées via `createPageMetadata` (`lib/metadata.ts`).
- Les scripts JSON-LD globaux (Organization & WebSite) sont insérés dans `app/layout.tsx`.
- Les fils d'Ariane produisent un `BreadcrumbList` dans `components/breadcrumbs.tsx`.
- Les pages Service ajoutent un schéma `Service` (`app/services/[slug]/page.tsx`).
- La page FAQ expose `FAQPage` JSON-LD (`app/faq/page.tsx`).

## Identification des sections
- `SimplePageLayout` attribue automatiquement des identifiants d'ancre sur les titres (`slugifyHeading` dans `lib/seo-utils.ts`).
- Les sous-sections réutilisent `LinkSection` qui crée des `id` basés sur les titres et ajoute `data-section` pour les usages LLM.
