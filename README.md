# Niveau Supérieur Construction – Site Web

Un site vitrine moderne pour l'entreprise québécoise **Niveau Supérieur Construction**. L'application est construite avec Next.js 15 (App Router) et présente les services, réalisations et formulaires de contact de l'entreprise dans une expérience principalement francophone.

## 🚀 Fonctionnalités principales

- **Pages vitrines complètes** : accueil, services détaillés, réalisations filtrables, contact et demande de soumission multi-étapes.
- **Formulaire de soumission guidé** : 5 étapes avec validation côté client et suivi visuel de progression.
- **Formulaire de contact réactif** : confirmation d'envoi simulée et remise à zéro automatique.
- **Slider avant / après** : comparaison interactive pour les projets.
- **SEO de base** : métadonnées, balisage JSON-LD LocalBusiness/Organization, sitemap et robots dynamiques.
- **Thématisation claire/sombre** : persistance via localStorage et cookie pour éviter le clignotement au chargement.

## 🧱 Stack technique

- **Framework** : [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS v4 (classe utilitaires personnalisées)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Gestion de thème** : contexte React + CSS variables

## 📂 Structure du projet

```
app/
├── components/       # Header, Footer, slider avant/après, JSON-LD, ThemeProvider
├── (pages)/          # Pages vitrines (accueil, services, projets, etc.)
├── contexts/         # Contexte thème clair/sombre
├── globals.css       # Variables, thèmes, base Tailwind
├── layout.tsx        # Layout racine + métadonnées globales
├── robots.ts         # Déclaration robots.txt
└── sitemap.ts        # Génération sitemap.xml
```

`public/` contient les images de démonstration et les fichiers SEO (logo, favicon, etc.).

## 🛠️ Démarrage

1. **Installer les dépendances**
   ```bash
   npm install
   ```
2. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```
3. Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

### Scripts NPM

- `npm run dev` – démarre le serveur de développement avec Turbopack
- `npm run build` – génère la version de production
- `npm run start` – lance le serveur en mode production
- `npm run lint` – exécute ESLint (configuration Next.js 15)

## ✅ Bonnes pratiques de développement

- Préférer les composants fonctionnels et le typage explicite.
- Centraliser les données statiques (services, projets, témoignages) au début des composants.
- Respecter les classes utilitaires existantes (`container-custom`, `section-padding`, `heading-*`, etc.).
- Vérifier `npm run lint` et `npm run build` avant toute mise en production.

## 🧭 Feuille de route (court terme)

1. Internationalisation complète (next-intl) et contenu anglais.
2. Persistance réelle des formulaires (Supabase ou service tiers) et notifications internes.
3. Intégration d'avis clients (Google Reviews) et sections « preuves sociales » dynamiques.
4. Optimisations SEO avancées (balises hreflang, métadonnées dynamiques par page projet/service).
5. Tests d'accessibilité (focus, aria, contrastes) et automatisation Lighthouse.

## 📄 Licence

Projet propriétaire développé pour Niveau Supérieur Construction.

## 📞 Contact

- Téléphone : (514) 555-7890
- Courriel : info@niveausuperieur.ca
- Site : [niveausuperieur.ca](https://niveausuperieur.ca)
