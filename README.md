# CentreSportifDePerwez

TFE sur le développement du site web du centre sportif de Perwez

# Recap pour Github

## Cloner le projet
### Pour chercher un projet sur github

--> copier le lien se trouvant sur le github et faire un git clone via Virtual studio code

## Vérifier la version principale ou aller sur une branche spécifique

### Pour aller chercher la version principale du projet

--> Git checkout master

### Pour aller chercher la version du projet venant d'une branche

--> Git checkout nomdelabranche

## Mettre à jour sa branche localement

### Pour mettre à jour la branche ou l'on travaille en la fusionnant avec le repot distant

--> Git pull nomdelabranche

Pull peut générer des conflits car il ne demande pas de validation des fichiers modifier avant de merge

### Pour mettre à jour la branche où l'on travaille sans fusionner avec le repot distant afin de voir les nouvelles modifications a merge

--> Git fetch

### Pour mettre à jour la branche où l'on travaille et fusionner avec le repot distant après avoir effectué le fetch

--> Git merge

## Mettre à jour sa branche sur Github ou localement en envoyant ses modifs

### Pour envoyer les modifications localement

--> Git commit

### Pour envoyer les modifications vers Github

--> Git push

### Files in case working in localhost

config.js
withdata.js
prisma.yml
-> secret : ${env:API_SECRET} /!\
variables.env

## Command to enter

npm run deploy

### add a new computer 

do the git commands
del the cookies if exist
write the env file
