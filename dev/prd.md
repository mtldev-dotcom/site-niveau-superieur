# 📑 PRD – Site Web Niveau Supérieur Construction (2025)

## 1. Contexte & vision
Niveau Supérieur Construction est un entrepreneur général opérant dans le Grand Montréal (résidentiel, commercial, rénovation). Le site a pour objectif de présenter l'entreprise et de générer des demandes de soumission ou de contact via une expérience haut de gamme, principalement en français. À court terme, l'accent est mis sur une vitrine crédible et sur des formulaires efficaces; à moyen terme, l'équipe souhaite activer une stratégie bilingue et connecter les leads à des outils internes.

## 2. Objectifs
- **Crédibilité** : rassurer sur la licence RBQ, l'expérience et la qualité des réalisations.
- **Acquisition** : collecter des leads qualifiés via la page soumission et le formulaire contact.
- **Visibilité** : consolider les bases SEO (métadonnées, sitemap, contenu structuré).
- **Expérience** : proposer une navigation fluide, responsive et accessible, cohérente avec l'identité rouge/noir.

## 3. Utilisateurs cibles
- **Propriétaires résidentiels** : rénovations majeures, agrandissements, constructions neuves.
- **Clients commerciaux** : commerces, bureaux, restaurants, projets industriels légers.
- **Prescripteurs** : architectes, designers, promoteurs qui évaluent un partenaire d'exécution.

## 4. Parcours utilisateur prioritaires
1. Arrivée sur la page d'accueil → lecture rapide (services, preuves sociales) → clic vers soumission/contact.
2. Exploration de la page Services → compréhension des expertises → prise de contact.
3. Consultation de la page Projets → filtrage → découverte des détails et slider avant/après → prise de contact.
4. Accès direct au formulaire Soumission (CTA Header/Footer) → remplissage guidé → confirmation.

## 5. Fonctionnalités (statut)

| Domaine | Fonctionnalité | Statut | Notes |
| --- | --- | --- | --- |
| Contenu | Pages principales (accueil, services, projets, à propos, contact) | ✅ | Contenu statique FR, données en mémoire.
| Conversion | Formulaire soumission multi-étapes | ✅ | Validation client, confirmation simulée, pas encore de backend.
| Conversion | Formulaire contact | ✅ | Envoi simulé, reset automatique, pas d'intégration externe.
| Preuve sociale | Témoignages statiques, statistiques clés | ✅ | Données fictives dans la page d'accueil/services.
| Preuve sociale | Intégration Google Reviews | 🔜 | À prioriser après mise en place backend.
| SEO | Métadonnées, JSON-LD, sitemap, robots | ✅ | JSON-LD LocalBusiness/Organization sur la page d'accueil.
| SEO | Contenu bilingue / hreflang | 🔜 | Dépend de l'activation next-intl et des traductions.
| Performance | Optimisation images via `next/image` | ✅ | Utilisé sur toutes les sections visuelles.
| Performance | Tests Lighthouse automatisés | 🔜 | À intégrer dans le pipeline CI/CD.
| Technique | Thème sombre/clair persistant | ✅ | Context + cookie + localStorage, toggle dans l'en-tête.
| Technique | Stockage des leads (Supabase / CRM) | 🔜 | Non implémenté, prévu dans la roadmap.

## 6. Identité visuelle
- **Couleurs** : Rouge glossy (#C20000 → #E00000) pour les accents/CTA, noir profond (#000000) pour les sections premium, gris acier (#555–#999) pour les textes secondaires, blanc (#FFFFFF) pour le contraste.
- **Typographies** : Montserrat (titres), Poppins (sous-titres), Open Sans (corps de texte).
- **Tonalité** : moderne, solide, premium, inspirée du luxe industriel.

## 7. Exigences techniques
- Next.js 15 (App Router) + React 19.
- TypeScript strict (config Next par défaut).
- Tailwind CSS v4 avec classes utilitaires custom dans `globals.css`.
- Composants côté client uniquement pour les interactions (formulaires, menu mobile, slider).
- Thème clair/sombre géré via contexte et cookie `theme`.
- Données statiques embarquées pour les sections de contenu.

## 8. Mesures de succès
- ≥ 5 demandes de soumission par mois via le site.
- Taux de conversion visite → lead ≥ 3% (soumission + contact).
- Score Lighthouse ≥ 90 (Performance, Accessibilité, SEO) sur desktop et mobile.
- Temps de réponse moyen aux demandes < 24h (via processus interne, non mesuré techniquement).

## 9. Roadmap proposée
1. **Sprint 1 – Consolidation** : audit accessibilité, nettoyage contenu, cohérence CTA, ajout analytics de base.
2. **Sprint 2 – Internationalisation** : intégration next-intl, rédaction contenu anglais, balises hreflang.
3. **Sprint 3 – Conversion** : branchement Supabase (stockage leads, pièces jointes), webhook vers outil interne (email/Slack/WhatsApp).
4. **Sprint 4 – Preuve sociale & SEO** : intégration avis clients, pages projets détaillées, métadonnées dynamiques.
5. **Sprint 5 – Automatisation** : tests Lighthouse CI, monitoring uptime, amélioration du reporting.

## 10. Risques & mitigations
- **Absence de backend** : leads non sauvegardés → prioriser l'intégration Supabase + alertes email.
- **Contenu bilingue incomplet** : SEO limité en anglais → planifier la traduction dès le Sprint 2.
- **Images non propriétaires** : risque de crédibilité → prévoir shooting photos ou banque d'images légitime.
- **Charge de maintenance** : données statiques à jour manuellement → envisager un CMS ou fichiers JSON externalisés.
