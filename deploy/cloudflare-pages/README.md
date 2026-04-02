# Déploiement Cloudflare Pages - AEGENS

Ce dossier contient la configuration prête pour déployer le site sur Cloudflare Pages.

## 1) Pré-requis

- Compte Cloudflare.
- Projet Cloudflare Pages créé.
- Node.js 20+.
- `pnpm` installé.

## 2) Variables d'environnement à définir dans Cloudflare Pages

Dans **Settings > Environment variables**, ajoute:

- `NEXT_PUBLIC_BASE_URL` = `https://aegens.com` (ou ton domaine final).

## 3) Déploiement via Git (recommandé)

Dans Cloudflare Pages:

1. Connecte ce repository.
2. Mets les settings suivants:
   - Framework preset: `None`
   - Build command: `pnpm cf:pages:build`
   - Build output directory: `.vercel/output/static`
   - Root directory: `/`

Cloudflare construira ensuite automatiquement le projet à chaque push.

## 4) Déploiement via CLI (alternative)

Depuis la racine du projet:

```bash
pnpm cf:pages:build
pnpm dlx wrangler pages deploy .vercel/output/static --project-name=aegens --branch=production
```

## 5) Vérifications après déploiement

Valider ces routes:

- `/`
- `/robots.txt`
- `/sitemap.xml`
- `/llms.txt`
- `/llms-full.txt`
- `/ressources/quand-faire-appel-a-un-regard-exterieur/`
- `/faq/faut-il-consulter-des-prestataires-avant-de-cadrer-le-besoin/`
- `/secteurs/logistique/`
- `/secteurs/retail/`

## 6) Fichiers utilisés

- `wrangler.toml` (compatibilité + output Pages + variables par défaut)
- `package.json` (`cf:pages:build`, `cf:pages:deploy`, `cf:pages:dev`)
- `.github/workflows/deploy-cloudflare-pages.yml` (déploiement automatique via GitHub Actions)

## 7) Secrets/variables GitHub pour le workflow

Dans GitHub (repo):

- `Settings > Secrets and variables > Actions > Secrets`
  - `CLOUDFLARE_API_TOKEN`
  - `CLOUDFLARE_ACCOUNT_ID`
- `Settings > Secrets and variables > Actions > Variables`
  - `CF_PAGES_PROJECT` = `aegens` (ou ton nom de projet Pages)
  - `NEXT_PUBLIC_BASE_URL` = `https://aegens.com` (ou ton domaine)
