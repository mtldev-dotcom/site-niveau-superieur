# 📋 Backlog – Site Web Niveau Supérieur Construction (Q1 2025)

## ✅ Livré
- Pages vitrines FR : accueil, services, projets, à propos, contact.
- Formulaire de soumission multi-étapes (validation client, écran de confirmation).
- Formulaire de contact avec accusé d'envoi simulé.
- Composants partagés : en-tête collant, pied de page, slider avant/après, toggle de thème.
- SEO de base : métadonnées, JSON-LD, sitemap, robots.

## 🔜 Priorités
1. **Internationalisation (FR/EN)**
   - Activer `next-intl`, définir l'architecture des namespaces.
   - Traduire les contenus clés (pages, formulaires, navigation).
   - Ajouter les balises `hreflang` et routes `/en/*`.

2. **Gestion réelle des leads**
   - Brancher le formulaire de soumission à Supabase (table `leads`, stockage des fichiers).
   - Ajouter un webhook (email/Slack/WhatsApp) pour alerter l'équipe.
   - Mettre en place une page de confirmation avec numéro de référence persisté.

3. **Confiance & preuve sociale**
   - Intégrer les avis Google via API ou synchronisation n8n.
   - Ajouter une section certifications/partenaires.
   - Préparer des études de cas détaillées (page projet dédiée).

4. **Accessibilité & performance**
   - Audit Lighthouse (desktop/mobile) et correctifs (focus, aria, contrastes).
   - Mettre en place un script CI pour `npm run lint` + Lighthouse.
   - Optimiser les images manquantes (placeholder blur, tailles adaptées).

## 🧭 Backlog secondaire
- Chat WhatsApp flottant.
- Module blog/actualités (planification de contenu SEO).
- Intégration Google Maps sur la page contact.
- Ajout d'un mode « client portal » (auth + suivi de projet) – étude préliminaire.
- Migration éventuelle vers un CMS headless (Sanity/Strapi) pour éditer le contenu.
