## Introduction

Développé par [Nicolas Brule](https://nicolas-brule.fr) de [Blackhole Agency](https://agence-seo-caen.fr), ce script amélioré vise à simplifier et automatiser le processus d'indexation des pages web sur Google. Grâce à cet outil, les utilisateurs peuvent soumettre en masse les URLs de leur site sans avoir à passer par l'interface manuelle de la Search Console.

## Prérequis

Avant de pouvoir utiliser ce script, assurez-vous d'avoir installé node.js sur votre machine. Si ce n'est pas le cas, vous pouvez le télécharger et l'installer depuis [ce lien](https://nodejs.org/en/download/).

## Configuration initiale

1. **Accès à l'Indexing API** : Pour commencer, il est nécessaire de configurer l'accès à l'Indexing API sur Google Cloud Platform. Suivez les instructions détaillées fournies [ici](https://developers.google.com/search/apis/indexing-api/v3/prereqs).

2. **Téléchargement des clés** : Une fois que vous avez accès à l'Indexing API, vous serez en mesure de télécharger un fichier JSON contenant une paire de clés publique/privée. Ce fichier, essentiel pour l'authentification, doit être enregistré sous le nom "service_account.json" dans le répertoire principal du script.

3. **Ajout des URLs** : Listez toutes les URLs que vous souhaitez indexer dans le fichier `urls.txt`. Chaque URL doit être sur une nouvelle ligne.

## Vérification de la propriété du site

Avant de pouvoir soumettre des URLs pour l'indexation, Google exige que vous vérifiiez la propriété de votre site. Voici comment procéder :

1. **Obtenir l'adresse e-mail du compte de service** : Ouvrez le fichier `service_account.json` et recherchez le champ `client_email`. Notez cette adresse e-mail, car elle sera nécessaire pour la vérification.

2. **Vérification sur Google Webmaster Central** :
   - Rendez-vous sur [Google Webmaster Central](https://www.google.com/webmasters/verification/home).
   - Sélectionnez votre propriété vérifiée (votre site web).
   - Descendez dans la page et cliquez sur 'Ajouter un propriétaire'.
   - Dans le champ prévu, entrez l'adresse e-mail de votre compte de service et validez.

## Limites d'utilisation

- **Par lot** : Vous pouvez soumettre jusqu'à 100 URLs en une seule demande.
- **Quotidien** : La limite quotidienne est fixée à 200 URLs.

## Conclusion

Cet outil est conçu pour rendre le processus d'indexation plus fluide et efficace, en éliminant la nécessité de soumissions manuelles répétées. Grâce à l'automatisation, vous pouvez vous assurer que votre contenu est rapidement visible sur Google.
