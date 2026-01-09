# Roadmap - la-rache.com

> Dernière mise à jour : 2026-01-09

## Vision

Maintenir et faire évoluer le site satirique de référence sur la méthodologie La RACHE, tout en perpétuant l'esprit parodique et humoristique du projet. Le site doit rester simple, accessible, et fidèle aux principes qu'il parodie.

## État actuel du projet

### ✅ Récemment complété (Janvier 2026)

- [x] **[Chore]** Migration GitHub Actions vers v4 (Node.js 20.x)
- [x] **[Feature]** Ajout du témoignage d'amtins (certification)
- [x] **[Feature]** Section "Méthodes à Gilles" dans le lexique
- [x] **[Feature]** Définition D.O.C.K.E.R dans le lexique
- [x] **[Feature]** Section "Origines géographiques" avec port de Larache
- [x] **[Feature]** FAQ Docker/Kubernetes
- [x] **[Docs]** Template d'issue pour les témoignages
- [x] **[Docs]** Création de CLAUDE.md
- [x] **[Chore]** Fermeture de toutes les issues ouvertes (6/6)

## Prochaines étapes

### Phase 1 : Quick Wins (Priorité haute)

- [ ] **[Perf]** Optimiser les images (conversion GIF → WebP)
  - `booing.gif` (261 KB) → WebP (~70-100 KB)
  - `preview.jpg` (174 KB) → WebP (~50-70 KB)
  - Autres JPG/PNG avec compression moderne
- [ ] **[Perf]** Ajouter `loading="lazy"` sur toutes les images
- [ ] **[Chore]** Supprimer `plugins.js` (polyfill console IE8 obsolète)
- [ ] **[Chore]** Mettre à jour toutes les dépendances Grunt vers latest
- [ ] **[Fix]** Corriger `lang=""` → `lang="fr"` dans les templates HTML

### Phase 2 : Amélioration du contenu (Priorité moyenne)

- [ ] **[Feature]** Page dédiée "Histoire du port de Larache"
- [ ] **[Feature]** Section "Formations certifiantes" avec humour sur les certifications
- [ ] **[Feature]** Galerie de "success stories" parodiques
- [ ] **[Feature]** Timeline historique de La RACHE (1670 → aujourd'hui)
- [ ] **[Docs]** Guide de contribution pour les nouveaux témoignages
- [ ] **[Feature]** Badge "Certifié La RACHE" téléchargeable (SVG)

### Phase 3 : Modernisation technique (Priorité moyenne)

- [ ] **[Refactor]** Migration Grunt → Eleventy
  - Remplacer système `{{TOKEN}}` par templates Nunjucks
  - Build incrémental plus rapide
  - Hot Module Replacement (HMR)
- [ ] **[Refactor]** Convertir CSS → SCSS
  - Remplacer `normalize.css` (424 lignes) par `modern-normalize` (24 lignes)
  - Consolider `main-responsive.css` avec mixins
  - Variables pour spacing, breakpoints
- [ ] **[Refactor]** Moderniser `certificat.js`
  - Remplacer `var xy = [Math.round(Math.random())]` par logique booléenne
  - Async/await propre (sans setTimeout fragile)
  - Gestion d'erreurs structurée

### Phase 4 : Accessibilité & SEO (Priorité basse)

- [ ] **[A11y]** Améliorer les textes alternatifs des images
- [ ] **[A11y]** Ajouter `aria-expanded` sur le burger menu
- [ ] **[A11y]** Support clavier complet (Escape pour fermer modales)
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

### v2.0.0 - 2026-01-09
- Refonte complète avec contenu Docker/Larache
- Ajout template d'issue témoignages
- Migration GitHub Actions v4
- 6 issues fermées
- CLAUDE.md et ROADMAP.md créés

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
