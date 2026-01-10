# la-rache.com

[![Build & deploy](https://github.com/la-rache/la-rache.com/actions/workflows/npm-grunt.yml/badge.svg)](https://github.com/la-rache/la-rache.com/actions/workflows/npm-grunt.yml)

Voici comment contribuer au site web [la-rache.com](https://www.la-rache.com)

Installation de l'environnement de travail
------------------------------------------
* Forkez le projet : https://github.com/la-rache/la-rache.com
* Clonez votre fork : ```git clone https://github.com/<votre_user_github>/la-rache.com.git```
* Allez dans le répertoire de travail : ```cd la-rache.com```
* Installez les dépendances du projet : ```npm install```
* Lancer le serveur local : ```npm run dev```
  *  cela ouvrira la page http://localhost:8042
  *  et rechargera automatiquement la page à chaque changement de code (hot reload)

Modification des sources
------------------------
* Éditez les templates (header, sidebar, footer) dans ```src/_includes/partials/```
* Éditez le layout principal dans ```src/_includes/layouts/base.njk```
* Éditez les pages dans ```src/*.njk```
* Éditez les images dans ```src/img```
* Éditez les css dans ```src/css```
* Éditez les js dans ```src/js```

Génération du code HTML
-----------------------
* ```npm run build```

Visualisation du code compilé
---------------------
* Ouvrez ```_site/index.html``` avec votre navigateur préféré

Partage de vos modifications
----------------------------
* Si vous avez ajouté de nouveaux fichiers : ```git add <fichier>```
* Commentez vos modifications : ```git commit -am "<votre commentaire sur vos modifications"```
* Poussez les dans votre repo ```git push```
* Depuis votre espace GitHub faites un pull request


