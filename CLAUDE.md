# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**la-rache.com** is a satirical website for the "International Institute of La RACHE" (IILaR), promoting a tongue-in-cheek software development methodology. This is a static site built with Grunt.js and vanilla JavaScript.

**Repository**: https://github.com/la-rache/la-rache.com
**License**: LPRàB (Licence Publique Rien À Branler)
**Deployment**: GitHub Pages (automated via GitHub Actions)

## Development Commands

### Local Development
```bash
npm install          # Install dependencies
npm run serve        # Start dev server at http://localhost:8042 with live reload
```

### Building
```bash
npm run build        # Build production files to build/ directory
npm test             # Run HTML validation
```

### Direct Grunt Commands
```bash
grunt                # Full production build (clean, compile, minify, cache-bust)
grunt test           # HTML validation only
grunt serve          # Dev server with watch and live reload
```

## Architecture

### Build System (Grunt.js)

The build process uses Grunt with the following pipeline:

1. **Template System**: HTML files in `src/*.html` use a custom templating system via `{{TOKEN}}` placeholders
   - `{{HEADER}}` → injects `src/parts/header.html`
   - `{{FOOTER}}` → injects `src/parts/footer.html`
   - Processed by `grunt-text-replace` plugin (Gruntfile.js:6-33)

2. **Build Pipeline** (default task):
   - `clean`: Delete build/ directory
   - `replace`: Process HTML templates, inject header/footer
   - `copy`: Copy JS, CSS, images, favicon to build/
   - `cacheBust`: Add hash to asset filenames, update references
   - `uglify`: Minify JavaScript
   - `cssmin`: Minify CSS
   - `htmlmin`: Minify HTML

3. **Dev Server** (serve task):
   - Runs on `localhost:8042`
   - Live reload enabled
   - Watches `src/**/*.*` for changes
   - Only runs `replace` and `copy` tasks (no minification)

### Directory Structure

```
src/
├── parts/           # Reusable HTML fragments (header, footer)
├── *.html           # Page templates (use {{HEADER}}/{{FOOTER}} tokens)
├── css/             # Stylesheets
├── js/              # JavaScript (certificat.js, main.js, plugins.js)
├── img/             # Images
├── favicon/         # Favicon variants
└── others/          # Miscellaneous files

build/               # Generated output (gitignored)
```

### Key Pages

- `index.html`: Homepage
- `presentation.html`: Methodology presentation
- `certificat.html`: Certificate generator (uses dom-to-image.min.js)
- `faq.html`: Frequently asked questions
- `lexique.html`: Glossary
- `temoignages.html`: Testimonials
- `formations.html`: Training offerings
- `consulting.html`: Consulting services
- `publications.html`: Publications
- `liens.html`: Links
- `images.html`: Image gallery

## Deployment

**Automatic**: Pushes to `master` branch trigger GitHub Actions workflow (`.github/workflows/npm-grunt.yml`)
- Runs `npm install && grunt` to build
- Deploys `build/` directory to GitHub Pages

**Manual**: Build locally with `npm run build`, then deploy the `build/` directory to your hosting provider.

## Development Notes

- The site is in French (`lang=""` in HTML)
- Cache busting is enabled in production builds (deletes original assets)
- Dev server does not minify or cache-bust for faster iteration
- HTML validation is available via `npm test` (uses grunt-html)
- JavaScript is not minified with name mangling (`mangle: false` in uglify config)
