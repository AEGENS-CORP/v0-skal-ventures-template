# Ligne directrice typographie & SEO

## Polices et variables
- Les déclarations `@font-face` et l'ensemble des variables typographiques se trouvent dans `app/globals.css`.
- La police par défaut est `"Helvetica Neue"` avec fallbacks système. Les graisses principales sont mappées via `--font-weight-regular`, `--font-weight-medium` et `--font-weight-bold`.
- Les tailles fluides des titres (`--h1` → `--h6`) et du texte (`--body`, `--small`, `--xs`) sont centralisées dans la même section (`:root`).
- Pour ajouter une nouvelle graisse, déclarer un nouvel `@font-face` et compléter l'éventuel préchargement dans le layout si nécessaire.

## Mise à jour de l'échelle
- Les styles globaux des titres, paragraphes, petits textes et boutons sont définis directement dans `app/globals.css` (sections `html`, `body`, `h1`→`h6`, `p`, `small`, `.btn`).
- Les composants ajustent les poids au besoin via les classes Tailwind (`font-semibold`, etc.). Préférer les variables pour toute évolution globale.

## Données structurées & SEO
- Les métadonnées standards et l'URL canonique sont gérées par `app/layout.tsx` et `lib/metadata.ts`.
- Les scripts JSON-LD (Organization, WebSite, BreadcrumbList, Service, FAQ) sont générés par le composant `components/structured-data.tsx` monté dans le layout.
- Pour ajouter un nouveau schéma, étendre ce composant afin de générer un objet supplémentaire dans le tableau `jsonLdPayloads`.

## Ids d’ancre
- `components/heading-id-provider.tsx` crée automatiquement des `id` en kebab-case pour les `<h2>`/`<h3>`. Toute logique personnalisée peut être implémentée dans ce fichier.

## Accessibilité & performances
- Les images illustratives utilisent `loading="lazy"`, `decoding="async"` et une dimension par défaut dans leurs composants respectifs (`components/team.tsx`, `components/portfolio.tsx`).
- Les focus visibles sont gérés globalement dans `app/globals.css`. Ajuster cette règle pour renforcer encore l’accessibilité si nécessaire.
