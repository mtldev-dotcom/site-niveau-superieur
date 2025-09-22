# Backlog — Niveau Supérieur Construction (Q1 2025)

Source consolidée depuis `.docs-dev/task.md`. Cette page suit l’état d’avancement produit/technique et sert de boussole de planification.

## ✅ Livré
- Pages vitrines FR : accueil, services, projets, à propos, contact.
- Formulaire de soumission multi-étapes (validation client, écran de confirmation).
- Formulaire de contact avec accusé d'envoi simulé.
- Composants partagés : en-tête collant, pied de page, slider avant/après, toggle de thème.
- SEO de base : métadonnées, JSON-LD, sitemap, robots.

## 🔜 Priorités (prochain(s) sprint(s))
1) Internationalisation (FR/EN)
- [ ] Activer `next-intl` et structurer les namespaces/i18n routing.
- [ ] Traduire contenus clés (pages, formulaires, navigation).
- [ ] Ajouter balises `hreflang` et routes `/en/*`.
- [ ] Définir process d’ajout/MAJ de traductions.

2) Gestion réelle des leads
- [ ] Créer table `leads` sous Supabase (RLS + schéma).
- [ ] Brancher le formulaire de soumission (stockage + pièces jointes).
- [ ] Ajouter un webhook (email/Slack/WhatsApp) pour alerte interne.
- [ ] Page de confirmation avec numéro de référence persisté.

3) Confiance & preuve sociale
- [ ] Intégrer Google Reviews (API ou sync n8n).
- [ ] Section certifications/partenaires.
- [ ] Études de cas détaillées (pages projets dédiées).

4) Accessibilité & performance
- [ ] Audit Lighthouse (desktop/mobile) et correctifs focus/aria/contrast.
- [ ] Script CI pour `npm run lint` + Lighthouse.
- [ ] Optimiser les images manquantes (placeholder blur, tailles adaptées).

## 🧭 Backlog secondaire
- [ ] Chat WhatsApp flottant.
- [ ] Module blog/actualités (plan de contenu SEO).
- [ ] Intégration Google Maps sur page contact.
- [ ] Exploration “client portal” (auth + suivi projet) — cadrage.
- [ ] Étude migration CMS headless (Sanity/Strapi) pour édition contenu.

## 🔄 Règles de gestion du backlog
- Prioriser items avec impact direct sur conversion et preuve sociale.
- Tirer 1–2 items d’i18n + 1 item conversion + 1 item accessibilité par sprint court.
- Clore systématiquement les issues via PR référencée et lien vers livrable.
