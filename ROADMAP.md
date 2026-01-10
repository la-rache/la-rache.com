# Roadmap - la-rache.com

> Dernière mise à jour : 2026-01-10

## Vision

Maintenir et faire évoluer le site satirique de référence sur la méthodologie La RACHE, tout en perpétuant l'esprit parodique et humoristique du projet. Le site doit rester simple, accessible, et fidèle aux principes qu'il parodie.

## État actuel du projet

### ✅ Récemment complété (Janvier 2026)

**Phase 4 - Accessibilité** (10/01/2026)
- [x] **[A11y]** Support clavier complet (Escape pour fermer le menu)
  - Touche Escape ferme le burger menu et retourne le focus au bouton
  - Touches Enter/Space togglent le menu (support role="button")
  - Attributs role="button" et tabindex="0" ajoutés au label
  - Navigation clavier 100% fonctionnelle
- [x] **[A11y]** Ajouter `aria-expanded` sur le burger menu
  - Attribut aria-expanded="false" ajouté au label
  - Attribut aria-controls="side" pour lier au menu
  - JavaScript toggle aria-expanded en fonction de l'état du checkbox
  - Validation HTML : 0 erreurs
- [x] **[A11y]** Améliorer les textes alternatifs des images
  - 24 images analysées et alt texts améliorés
  - Alt texts descriptifs contextualisés pour lecteurs d'écran
  - 6 fichiers .njk mis à jour (images, presentation, faq, temoignages, index, sidebar)
  - Validation HTML : 0 erreurs

**Phase 3 - Modernisation technique** (10/01/2026)
- [x] **[Refactor]** Migration Grunt → Eleventy 3.1.2
  - Templates Nunjucks modulaires (base.njk, sidebar.njk, footer.njk)
  - 15 pages migrées (.html → .njk)
  - Build 50% plus rapide (0.10s vs 5-7s)
  - Taille réduite -41% (1.7M vs 2.9M)
  - Hot reload sur port 8042
  - Navigation active automatique
  - Workflow GitHub Actions adapté

**Phase 2 - Amélioration du contenu** (09/01/2026)
- [x] **[Feature]** Page "Histoire du port de Larache" (1670-2026, 8 périodes historiques)
- [x] **[Feature]** Timeline chronologique avec CSS (17 événements, style inline)
- [x] **[Feature]** Refonte page Formations (3 niveaux RACHE-FL/AP/EM + Docker Legacy Award)
- [x] **[Feature]** Success Stories (6 cas réels documentés : Knight Capital, GitLab, TSB, HealthCare.gov, AWS S3, Equifax)
- [x] **[Feature]** Ajout des 3 nouvelles pages au menu de navigation
- [x] **[Fix]** Correction "METODA Gilles" → "Gilles METODA"

**Phase 1 - Quick Wins** (09/01/2026)
- [x] **[Perf]** Lazy loading sur 18 images (-20-30% temps chargement)
- [x] **[Perf]** Version WebP de preview.jpg créée (174 KB → 82 KB, -53%)
- [x] **[Chore]** Suppression plugins.js obsolète (polyfill IE8)
- [x] **[Chore]** Installation dépendances Grunt (npm install)

**Contenu et infrastructure** (08/01/2026)
- [x] **[Chore]** Migration GitHub Actions vers v4 (Node.js 20.x)
- [x] **[Feature]** Ajout du témoignage d'amtins (certification)
- [x] **[Feature]** Section "Méthodes à Gilles" dans le lexique
- [x] **[Feature]** Définition D.O.C.K.E.R dans le lexique
- [x] **[Feature]** Section "Origines géographiques" avec port de Larache
- [x] **[Feature]** FAQ Docker/Kubernetes
- [x] **[Docs]** Template d'issue pour les témoignages
- [x] **[Chore]** Fermeture de toutes les issues ouvertes (6/6)
- [x] **[Chore]** Nettoyage traces (suppression fichiers internes)

## Prochaines étapes

### ~~Phase 1 : Quick Wins~~ ✅ COMPLÉTÉ (09/01/2026)

Tâches restantes (optionnelles) :
- [ ] **[Perf]** Optimiser booing.gif (261 KB) - WebP non efficace, nécessite gifsicle
- [ ] **[Perf]** Optimiser autres JPG/PNG avec compression moderne
- [ ] **[Fix]** Corriger `lang=""` → `lang="fr"` dans header.html

### ~~Phase 2 : Amélioration du contenu~~ ✅ COMPLÉTÉ (09/01/2026)

Tâches restantes (optionnelles) :
- [ ] **[Docs]** Guide de contribution pour les nouveaux témoignages
- [ ] **[Feature]** Badge "Certifié La RACHE" téléchargeable (SVG)

### ~~Phase 3 : Modernisation technique~~ ✅ COMPLÉTÉ (10/01/2026)

Tâches restantes (optionnelles) :
- [ ] **[Refactor]** Convertir CSS → SCSS
  - Remplacer `normalize.css` (424 lignes) par `modern-normalize` (24 lignes)
  - Consolider `main-responsive.css` avec mixins
  - Variables pour spacing, breakpoints
- [ ] **[Refactor]** Moderniser `certificat.js`
  - Remplacer `var xy = [Math.round(Math.random())]` par logique booléenne
  - Async/await propre (sans setTimeout fragile)
  - Gestion d'erreurs structurée

### Phase 4 : Accessibilité & SEO (Priorité basse)

- [x] **[A11y]** Améliorer les textes alternatifs des images
- [x] **[A11y]** Ajouter `aria-expanded` sur le burger menu
- [x] **[A11y]** Support clavier complet (Escape pour fermer modales)
- [ ] **[A11y]** Audit avec pa11y-ci
- [ ] **[SEO]** Rich snippets (JSON-LD pour articles)
- [ ] **[SEO]** Sitemap.xml généré automatiquement
- [ ] **[Perf]** Critical CSS inline dans `<head>`

### Phase 5 : Outillage & Qualité (Priorité basse)

- [ ] **[Chore]** Ajouter ESLint + Prettier
- [ ] **[Chore]** Pre-commit hooks avec lint-staged
- [ ] **[Test]** Tests de régression visuelle (Percy ou similaire)
- [ ] **[Perf]** Lighthouse CI dans GitHub Actions
- [ ] **[Docs]** Contribuer au guide (CONTRIBUTING.md)

## Idées et améliorations futures

### Contenu humoristique

- [ ] **[Feature]** Générateur de "Process La RACHE" aléatoire
- [ ] **[Feature]** Quiz "Êtes-vous conforme à La RACHE ?"
- [ ] **[Feature]** API REST à La RACHE (retourne des 200 avec erreurs dedans)
- [ ] **[Feature]** Diagrammes Mermaid parodiques (architectures absurdes)
- [ ] **[Feature]** "Hall of Shame" des pires pratiques observées
- [ ] **[Feature]** Newsletter "Les actualités de La RACHE"

### Technique

- [ ] **[Feature]** Mode sombre (ironiquement mal fait)
- [ ] **[Feature]** Internationalisation (EN, ES) avec traductions approximatives
- [ ] **[Perf]** Service Worker pour offline (mais bugué volontairement)
- [ ] **[Feature]** Easter eggs cachés dans le code source
- [ ] **[Chore]** Migration vers TypeScript (avec `any` partout)

### Communauté

- [ ] **[Docs]** Wiki communautaire des bonnes pratiques à La RACHE
- [ ] **[Feature]** Forum ou discussions GitHub
- [ ] **[Feature]** Badges contributeurs (style "all-contributors")
- [ ] **[Feature]** Sondage annuel "État de La RACHE"

## Historique des versions

### v3.0.0 - 2026-01-10
- Migration Grunt → Eleventy 3.1.2
- Templates Nunjucks modulaires (base.njk, sidebar.njk, footer.njk)
- 15 pages migrées (.html → .njk)
- Build 50% plus rapide, taille -41%
- Hot reload, navigation active automatique
- Workflow GitHub Actions mis à jour
- README.md modernisé

### v2.1.0 - 2026-01-09
- Phase 2 complète : 4 nouvelles pages (Histoire, Timeline, Formations, Success Stories)
- 521 lignes ajoutées (7 fichiers modifiés)
- Success Stories basées sur 6 incidents réels documentés
- Hooks Git améliorés (commit-msg + pre-commit)

### v2.0.0 - 2026-01-09
- Refonte complète avec contenu Docker/Larache
- Phase 1 Quick Wins : lazy loading, WebP, cleanup
- Ajout template d'issue témoignages
- Migration GitHub Actions v4
- 6 issues fermées
- ROADMAP.md créé

### v1.x - 2016-2024
- Site initial avec Grunt.js
- Pages principales (présentation, FAQ, lexique, témoignages)
- Générateur de certificats
- Déploiement GitHub Pages

## Métriques de succès

- **Performance** : Score Lighthouse > 90
- **Accessibilité** : WCAG 2.1 AA (ironiquement)
- **SEO** : Top 3 pour "méthodologie approximative"
- **Communauté** : 5+ témoignages/an
- **Build time** : < 5 secondes

## Notes

- Priorité sur la **simplicité** : pas de sur-ingénierie (fidèle à La RACHE)
- Garder l'**esprit satirique** dans toutes les évolutions
- Accepter les contributions communautaires via issues/PR
- Déploiement continu sur GitHub Pages (automatique)

---

**Contribuer** : Voir [CONTRIBUTING.md](CONTRIBUTING.md) (à créer)
**Issues** : https://github.com/la-rache/la-rache.com/issues
**Site live** : https://www.la-rache.com
