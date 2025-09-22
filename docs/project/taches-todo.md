# Tâches & TODO — Niveau Supérieur Construction

Checklists opérationnelles consolidées pour guider l’exécution par sprint. Mettre à jour après chaque livraison.

## 0) Définition du Done (DoD)
- [ ] Code compilable (`npm run build`) et lint propre (`npm run lint`)
- [ ] UX accessible (contraste AA+, focus visible, aria de base)
- [ ] Tests manuels passés (navigation, formulaires, thème)
- [ ] SEO de base vérifié (titres, meta, JSON-LD, sitemap/robots)
- [ ] Docs mises à jour (PRD, Backlog, TODO)
- [ ] PR approuvée et liée aux issues

---

## 1) Internationalisation (FR/EN)
- [ ] Ajouter next-intl et configurer le routing i18n
- [ ] Définir structure des namespaces (common, home, services, projects, about, contact, quote)
- [ ] Extraire chaînes FR des pages et composants
- [ ] Créer fichiers de traduction EN (min viable)
- [ ] Ajouter balises hreflang et alternates
- [ ] Mettre en place stratégie fallback et validation ICU
- [ ] Checklist de revue i18n (contenu, liens, routes, SEO)

## 2) Leads: Persistance & Alertes
- [ ] Schéma Supabase: table `leads` (RLS, indexes), table `lead_files` (stockage)
- [ ] Brancher formulaire soumission (écriture DB, upload pièces jointes)
- [ ] Brancher formulaire contact (écriture DB)
- [ ] Générer un numéro de référence et page de confirmation persistée
- [ ] Webhook: email/Slack/WhatsApp à la création d’un lead
- [ ] Page admin minimaliste (protégée) ou export CSV
- [ ] Politique de confidentialité (LI) et bannière consentement si tracking

## 3) Confiance & Preuve sociale
- [ ] Intégration Google Reviews (API ou sync via n8n)
- [ ] Affichage carrousel + note moyenne
- [ ] Section “Certifications & partenaires”
- [ ] Études de cas détaillées (modèle de page + 1 exemple)
- [ ] Maillage interne depuis Accueil/Services vers pages Cas

## 4) Accessibilité & Performance
- [ ] Audit Lighthouse (Desktop/Mobile) et suivi > 90
- [ ] Revue focus/aria (icônes, liens, boutons)
- [ ] Vérification contrastes via tokens de thème
- [ ] Optimisation images manquantes (taille, blur placeholder)
- [ ] Lazy-loading sélectif et réduction JS inutile
- [ ] Test clavier complet (navigation, formulaires)

## 5) SEO & Contenu
- [ ] Méta dynamiques par page (title/description)
- [ ] JSON-LD: LocalBusiness/Organization + Project/Service si pertinent
- [ ] Sitemap & Robots valides en prod
- [ ] Plan éditorial (blog/actualités) – structure et 3 sujets
- [ ] Liens internes et ancres CTA cohérentes
- [ ] 404/500 personnalisées avec CTA de retour/Contact

## 6) Analytics & Observabilité
- [ ] Installer analytics (ex: Vercel Analytics/GA4)
- [ ] Événements clés: clic CTA, soumission formulaire, ouverture WhatsApp
- [ ] Dashboard minimal: vues, conversion, top pages
- [ ] Monitoring uptime (ping) et alerting basique

## 7) Qualité & CI/CD
- [ ] Pipeline: lint + build + (future) Lighthouse CI
- [ ] Préview déploiement pour PR
- [ ] Checklist de revue: accessibilité, perf, i18n, SEO
- [ ] Versioning sémantique pour releases

## 8) Housekeeping
- [ ] Nettoyage assets inutilisés (images, icônes)
- [ ] Documentation à jour (PRD, Backlog, Guide de contribution)
- [ ] Sauvegarde/migration des images propriétaires
- [ ] Vérification licences (fonts, icônes, photos)

---

## Release checklist (avant mise en prod)
- [ ] `npm run build` OK, sans warnings bloquants
- [ ] Pages clés testées (Accueil, Services, Projets, Soumission, Contact)
- [ ] Formulaires envoyés et messages confirmés (et/ou DB écrite)
- [ ] SEO rapide: titles/descriptions non vides, JSON-LD valide
- [ ] Images optimisées et favicon/logo corrects
- [ ] Documentation changelog et mise à jour Backlog/TODO
