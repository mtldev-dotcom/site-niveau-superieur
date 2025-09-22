# Guide de contribution et pratiques de développement

Ce guide fusionne et remplace l’ancien `.docs-dev/instructions.md`. Il définit les prérequis, scripts, conventions de code, bonnes pratiques d’accessibilité, tests manuels et déploiement pour ce projet.

## 1) Prérequis
- Node.js 20+
- npm 10+
- Navigateur moderne (Chrome/Firefox) pour tests manuels
- OS: Windows/macOS/Linux (développement vérifié sous Windows 11)

## 2) Installation et scripts
Installation initiale:
```bash
npm install
```

Scripts npm (source de vérité: package.json):
- Développement: `npm run dev`  (Next 15, Turbopack)
- Build: `npm run build`         (production, Turbopack)
- Démarrage: `npm start`         (serveur de production)
- Lint: `npm run lint`           (ESLint)

Accès local (par défaut): http://localhost:3000

## 3) Conventions de code
- TypeScript strict (types explicites pour props/états).
- Next.js 15 (App Router) + React 19.
- Tailwind CSS v4 (utilitaires + classes globales dans `app/globals.css`).
- Organiser les données statiques (listes services, projets, témoignages) en haut du composant, ou externaliser si réutilisées.
- Factoriser dans `app/components` tout bloc réutilisable; privilégier composants “présentationnels” + props.
- Respecter les classes utilitaires globales existantes: `container-custom`, `section-padding`, `heading-*`, `card-shadow`, etc.
- Nettoyer les imports inutilisés; éviter d’ajouter des dépendances côté client sans usage clair.
- Nommage clair, fonctions pures, éviter l’état global inutile; préférer contexte local ou props.

## 4) Accessibilité et UX
- Contraste AA+ minimum (voir guide de marque pour couleurs).
- Focus visible et cohérent sur tous les éléments interactifs.
- Attributs aria pertinents pour icônes/lien d’icône (aria-label).
- Mobile-first: tailles de cible tactiles suffisantes, interactivité claire.
- Respect des rôles/landmarks (header, main, footer), hiérarchie titres.

## 5) Tests manuels recommandés
- Navigation complète desktop et mobile (menu burger, CTA, formulaires).
- Formulaire de soumission multi-étapes:
  - Validation par étape
  - Progression correcte
  - Écran de confirmation
- Formulaire de contact:
  - Affichage de l’état d’envoi
  - Remise à zéro du formulaire
- Changement de thème clair/sombre:
  - Persistance après rechargement (cookie/localStorage)
- Audit rapide Lighthouse (Perf/Access/SEO) en local et préprod.

## 6) Déploiement
- S’assurer que `npm run build` passe sans erreur avant tout déploiement.
- Vérifier la génération de `sitemap.xml` et `robots.txt` (selon configuration Next).
- Variables d’environnement (ex: intégration Supabase) à configurer côté hébergeur (ex: Vercel).
- Après déploiement, valider pages principales, formulaires et tracking.

## 7) Documentation
- Dossier source: `docs/`
  - PRD: `docs/product/prd.md`
  - Guide de marque: `docs/brand/guide-marque.md`
  - Wireframes: `docs/design/wireframes.md`
  - Aperçu entreprise: `docs/overview.md`
  - Backlog: `docs/project/backlog.md`
  - Tâches & TODO: `docs/project/taches-todo.md`
- Mettre à jour PRD, Backlog et TODO à chaque livraison majeure.
- Les assets (logos, moodboards) résident dans `docs/assets/`.

## 8) Qualité et CI (recommandations)
- Lint à valider localement: `npm run lint`.
- Ajouter Lighthouse CI dans pipeline ultérieurement (voir PRD).
- Revue de code: exiger 1 approbation, vérifier accessibilité et performance.
