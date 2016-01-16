# la-rache.com

[![Build Status](https://travis-ci.org/la-rache/la-rache.com.svg)](https://travis-ci.org/la-rache/la-rache.com)

Voici comment contribuer au site web [la-rache.com](http://www.la-rache.com)

Installation de l'environnement de travail
------------------------------------------
* Forkez le projet : https://github.com/la-rache/la-rache.com
* Clonez votre fork : ```git clone https://github.com/<votre_user_github>/la-rache.com.git```
* Allez dans le répertoire de travail : ```cd la-rache.com```
* Installez NPM ```apt-get install npm```
* Installez les dépendances : ```npm install```

Modification des sources
------------------------
* Éditez le début de page et le pied de page dans ```src/parts```
* Éditez les corps des pages dans ```src/*.html```
* Éditez les images dans ```src/img```
* Éditez les css dans ```src/css```
* Éditez les js dans ```src/js```

Génération du code HTML
-----------------------
* ```./node_modules/grunt-cli/bin/grunt```

Visualisation du code
---------------------
* Ouvrez ```build/index.html``` avec votre navigateur préféré

Partage de vos modifications
----------------------------
* Si vous avez ajouté de nouveaux fichiers : ```git add <fichier>```
* Commentez vos modifications : ```git commit -am "<votre commentaire sur vos modifications"```
* Poussez les dans votre repo ```git push```
* Depuis votre espace GitHub faites un merge request


