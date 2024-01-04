# la-rache.com

[![Build Status](https://travis-ci.org/la-rache/la-rache.com.svg)](https://travis-ci.org/la-rache/la-rache.com)

Voici comment contribuer au site web [la-rache.com](https://www.la-rache.com)

Installation de l'environnement de travail
------------------------------------------
* Forkez le projet : https://github.com/la-rache/la-rache.com
* Clonez votre fork : ```git clone https://github.com/<votre_user_github>/la-rache.com.git```
* Allez dans le répertoire de travail : ```cd la-rache.com```
* Installez Grunt : ```npm install -g grunt-cli```
* Installez les dépendances du projet : ```npm install```
* Lancer le serveur local : ```npm run serve```
  *  cela ouvrira la page http://localhost:8042
  *  et rechargera automatiquement la page à chaque changement de code (livereload)

Modification des sources
------------------------
* Éditez le début de page et le pied de page dans ```src/parts```
* Éditez les corps des pages dans ```src/*.html```
* Éditez les images dans ```src/img```
* Éditez les css dans ```src/css```
* Éditez les js dans ```src/js```

Génération du code HTML
-----------------------
* ```npm run build```

Visualisation du code compilé
---------------------
* Ouvrez ```build/index.html``` avec votre navigateur préféré

Partage de vos modifications
----------------------------
* Si vous avez ajouté de nouveaux fichiers : ```git add <fichier>```
* Commentez vos modifications : ```git commit -am "<votre commentaire sur vos modifications"```
* Poussez les dans votre repo ```git push```
* Depuis votre espace GitHub faites un pull request


