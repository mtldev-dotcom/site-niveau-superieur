# 🔧 Guide de contribution & pratiques de développement

## 1. Prérequis
- Node.js 20+
- npm 10+
- Navigateur moderne pour les tests (Chrome ou Firefox)

## 2. Installation & scripts
```bash
npm install
npm run dev   # serveur de développement (http://localhost:3000)
npm run lint  # vérifier la qualité du code
npm run build # valider la compilation de production
```

## 3. Conventions de code
- Utiliser TypeScript avec des types explicites pour les props et l'état.
- Organiser les données statiques (listes de services, projets, témoignages) en haut du composant.
- Préférer les composants présentés dans `app/components` si le même bloc est utilisé sur plusieurs pages.
- Respecter le système de classes utilitaires global (`container-custom`, `section-padding`, `heading-*`, `card-shadow`, etc.).
- Pas de dépendances côté client non utilisées : retirer toute importation inutile.

## 4. Accessibilité & UX
- Vérifier la lisibilité des textes selon le thème clair/sombre.
- Ajouter des attributs `aria-label` pertinents pour les liens d'icônes.
- Maintenir un focus visible et cohérent sur les éléments interactifs.

## 5. Tests manuels recommandés
- Navigation complète desktop et mobile (menu burger, CTA, formulaires).
- Soumission du formulaire multi-étapes (validation par étape, progression, écran de confirmation).
- Formulaire de contact (affichage de l'état d'envoi et remise à zéro du formulaire).
- Changement de thème clair/sombre (persistance après rechargement).

## 6. Déploiement
- S'assurer que `npm run build` passe avant déploiement.
- Vérifier la génération de `sitemap.xml` et `robots.txt` dans `.next/` si le site est exporté.
- Configurer les variables d'environnement (ex. intégration Supabase) via Vercel ou le fournisseur de déploiement choisi.

## 7. Documentation
- Mettre à jour les fichiers du dossier `dev/` (PRD, backlog, description) lorsque des fonctionnalités clés sont livrées.
- Documenter tout nouveau composant partagé dans un README de dossier ou via commentaires JSDoc lorsque pertinent.
