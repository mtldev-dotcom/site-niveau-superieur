# **📋 Backlog Structuré – Site Web *Niveau Supérieur Construction***

## **🟢 Épic 1 – Fondations techniques**

**User Story :** En tant que visiteur, je veux un site rapide et bilingue pour naviguer facilement.

### **Tâches :**

* Créer repo GitHub (Next.js 15 \+ TypeScript \+ Tailwind \+ shadcn/ui).

* Configurer Supabase (DB, auth, storage).

* Configurer environnement (Vercel \+ variables d’env).

* Mettre en place l’internationalisation (next-intl avec FR/EN).

* Créer layout global (Header \+ Footer \+ switch FR/EN).

---

## **🟢 Épic 2 – Pages principales**

**User Story :** En tant que visiteur, je veux voir les infos principales (services, équipe, contact) pour comprendre l’entreprise.

### **Tâches :**

* Page **Accueil** : Hero (checkerboard transition), Services, Projets récents, Témoignages, CTA.

* Page **Services** : Grille 6 cartes \+ détail service.

* Page **Réalisations** : Galerie filtrable \+ avant/après.

* Page **À propos** : Mission, vision, équipe, licence RBQ.

* Page **Contact** : formulaire simple \+ Google Map \+ coordonnées.

---

## **🟢 Épic 3 – Conversion (Leads)**

**User Story :** En tant que client, je veux envoyer une demande de soumission complète pour être recontacté.

### **Tâches :**

* Formulaire multi-step (coordonnées → projet → budget/échéancier → upload fichiers).

* Validation client \+ serveur (Zod).

* Intégrer Supabase (table leads \+ storage fichiers).

* Webhook n8n → Notification Telegram/WhatsApp \+ email interne.

* Page de confirmation avec numéro de référence.

---

## **🟢 Épic 4 – Preuve sociale**

**User Story :** En tant que prospect, je veux voir des preuves (avis clients, RBQ, réalisations) pour avoir confiance.

### **Tâches :**

* Module témoignages (slider avec 3-5 avis).

* Intégration Google Reviews (via n8n → Supabase).

* Avant/Après slider interactif sur projets.

* Ajout Licence RBQ et assurances visibles sur site.

---

## **🟢 Épic 5 – SEO & Performance**

**User Story :** En tant qu’entreprise, je veux que le site soit optimisé pour générer du trafic et apparaître sur Google.

### **Tâches :**

* Générer sitemap & robots.txt.

* Implémenter balises hreflang (FR/EN).

* Meta dynamiques (next-seo).

* Schema.org (LocalBusiness \+ Services \+ Project).

* Optimisation images (next/image, lazy-load).

* Lighthouse audit \> 90 mobile/desktop.

---

## **🟢 Épic 6 – Branding & UI**

**User Story :** En tant que visiteur, je veux une interface moderne et claire alignée avec la marque.

### **Tâches :**

* Appliquer palette (rouge glossy, noir, gris, blanc).

* Typographies Montserrat / Poppins / Open Sans.

* Boutons CTA (rouge glossy, radius 12px, hover dégradé).

* Uniformiser composants (cartes services, projets, formulaires).

* Transitions modernes (checkerboard flip, fade-in).

---

## **🟢 Épic 7 – QA & Déploiement**

**User Story :** En tant que responsable, je veux un site testé et déployé sans bug.

### **Tâches :**

* Tests responsives (mobile, tablette, desktop).

* Accessibilité (contraste, aria-labels, focus visible).

* Sécurité formulaires (CAPTCHA, anti-spam).

* Mise en production (Vercel, domaine, SSL).

* Guide de mise à jour contenu (README ou Notion).

