# **📑 PRD – Site Web Niveau Supérieur Construction**

## **1\. Contexte & Vision**

**Niveau Supérieur Construction** est une entreprise générale active dans le Grand Montréal (résidentiel, commercial, rénovation, excavation, domotique).  
 Objectif : créer un **site web bilingue FR/EN**, moderne et premium, qui reflète l’identité de marque et génère des leads (soumissions, appels, WhatsApp).

---

## **2\. Objectifs du projet**

* **Visibilité & crédibilité** : refléter professionnalisme, fiabilité et modernité.

* **Acquisition de clients** : formulaire de soumission et CTA clairs.

* **Mise en valeur** : portfolio projets (avant/après, galeries).

* **Bilingue** : contenu complet FR/EN, SEO optimisé.

* **Rapidité & accessibilité** : site mobile-first, optimisé Core Web Vitals.

---

## **3\. Utilisateurs cibles**

* **Particuliers** → propriétaires, familles, investisseurs.

* **Clients commerciaux** → PME, commerces de proximité, bureaux.

* **Prescripteurs** → architectes, designers, promoteurs.

👉 Attentes : site clair, infos rapides, preuve de sérieux (RBQ, réalisations, témoignages).

---

## **4\. Parcours utilisateur**

1. Arrivée sur la page d’accueil → Impact visuel (Hero \+ CTA directs).

2. Consultation rapide des **services** ou **réalisations**.

3. Vérification des **preuves sociales** (avis, RBQ, licences, photos avant/après).

4. Conversion via :

   * Formulaire de soumission (multi-step).

   * Tap-to-call / WhatsApp.

   * Rendez-vous / Contact simple.

---

## **5\. Fonctionnalités principales**

### **Pages & sections**

* **Accueil** : Hero avec transition checkerboard, CTA, services en vedette, projets récents, témoignages.

* **Services** : grille \+ pages détaillées (construction, rénovation, commercial, etc.).

* **Réalisations** : galerie avec filtres \+ pages projets (avant/après).

* **Soumission** : formulaire multi-étapes avec upload fichiers.

* **À propos** : mission, vision, équipe, licence RBQ.

* **Contact** : coordonnées, carte Google Map, formulaire rapide.

### **Modules clés**

* Formulaire soumission → intégration Supabase \+ webhook n8n (notification \+ CRM).

* Avant/Après slider interactif.

* Multi-langues (FR/EN) via Next-intl.

* SEO : sitemap auto, hreflang, meta dynamiques.

* Témoignages \+ Google Reviews (via n8n sync).

---

## **6\. Identité visuelle**

* **Couleurs** : Rouge glossy (\#C20000→\#E00000), Noir profond (\#000000), Gris acier (\#555–\#999), Blanc (\#FFFFFF).

* **Typographie** : Montserrat ExtraBold (titres), Poppins Medium (sous-titres), Open Sans Regular (texte courant).

* **Style** : moderne, robuste, haut de gamme, minimaliste.

---

## **7\. Exigences techniques**

* **Stack** :

  * Frontend : Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn/ui.

  * Backend : Supabase (auth, storage, DB).

  * Automatisation : n8n (webhooks soumission, Google Reviews, emails).

  * Déploiement : Vercel (site) \+ Supabase (DB).

* **Performance** :

  * Lighthouse \> 90 mobile/desktop.

  * Lazy loading images (next/image).

  * CDN \+ cache (Vercel edge).

* **Accessibilité** :

  * Contraste AA+, aria-labels, navigation clavier.

* **Sécurité** :

  * ReCAPTCHA/Turnstile sur formulaires.

  * Validation côté serveur (Zod).

---

## **8\. KPI de succès**

* Taux de conversion visiteurs → leads ≥ 5%.

* 50% des leads via formulaire, 50% via call/WhatsApp.

* Temps de chargement \< 2s mobile.

* SEO : Top 5 sur Google pour “entrepreneur général Montréal”.

---

## **9\. Roadmap & livrables**

### **Sprint 1 – Setup (1-2 semaines)**

* Setup repo (Next.js, Supabase, Tailwind).

* Layout \+ header/footer bilingue.

* Pages statiques (Accueil, Services, À propos).

### **Sprint 2 – Fonctionnalités (2 semaines)**

* Formulaire soumission multi-step \+ webhook n8n.

* Portfolio projets (grille \+ avant/après).

* SEO & sitemap.

### **Sprint 3 – Finitions & Go-live (1-2 semaines)**

* Optimisation performance.

* Accessibilité AA.

* Tests multi-devices.

* Déploiement prod (Vercel \+ domaine).

---

## **10\. Risques & mitigations**

* **Manque de contenu visuel** → Prévoir banque d’images (avant/après, stock premium).

* **Délais de traduction FR/EN** → Intégrer système CMS avec double champs.

* **Concurrence locale forte** → Mise en avant RBQ \+ témoignages \+ photos authentiques.

