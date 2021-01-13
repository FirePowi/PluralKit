---
title: Bien débuter
description: Un tutoriel basique pour comprendre comment paramétrer le bot.
permalink: /start

# La page précédente de la barre latérale est le lien d'invitation, empêchez-le de s'afficher ici
prev: false
---

# Démarrage rapide

Cette page vous permettra de démarrer :zap: en un éclair :zap: avec le bot. Vous aurez besoin des étapes suivantes :

## Créer un système
En premier, **créer un système** avec la commande suivante :
`pk;system new`

::: tip
Vous pouvez spécifier un nom de système si vous voulez :

    pk;system new Mon nom de système

:::

## Créer un membre

En second, **créer un membre** avec la commande suivante, en donnant le nom du membre :

    pk;member new MonMembre

::: tip
Vous pouvez mettre des espaces, des ponctuations ou des symboles dans le nom de votre membre. Cependant, vous devrez écrire le nom `"entre guillemets"` à chaque fois que vous y ferez référence.

À la place, vous pouvez donner un nom simple et facile à taper au membre, puis paramétrer le [nom affiché](./user-guide.md#member-display-names) pour une version plus complexe. Ça affichera le nom choisi quand proxyé et les commandes seront toujours facile à taper.
::: 

## Définir des tags proxy
Maintenant, vous aller devoir dire à PluralKit comment vous voulez déclencher le proxy en utilisant les **proxy tags**. Souvent, c’est une paire de crochet, un prefix emoji ou quelque chose de similaire.

Pour définir le tag proxy d’un membre, vous aurez besoin de faire comme si vous demandiez à proxyer le mot `text` – juste le mot lui-même, tout en minuscule. C’est souvent un peu confusant, donc prenons quelques exemples avec différents modèles :
`pk;member MomMembre proxy J:text`
`pk;member MomMembre proxy [text]`
`pk;member MomMembre proxy 🌸text`
`pk;member MomMembre proxy text -Q`

::: tip
Vous n’êtes pas limité-es aux différents types de tags proxy ci-dessus. Vous pouvez définir ce que vous voulez autour du mot `text` (avant, après, ou les deux) et PluralKit comprendra.
Soyez créativfes !
:::

## Définir un avatar (facultatif)
Si vous voulez qu’un avatar soit affiché, utilisez la commande suivante :
`pk;member MonMembre avatar https://lien.vers.votre/avatar.png`

::: tip
Si vous n’avez pas de lien, vous pouvez à la place **attacher** une image au message de commande lui-même.
PluralKit se servira du lien de l’image attachée et l’utilisera à la place.
:::

::: warning
Les avatars ont quelques restrictions : 
- L’image doit être en format **.jpg**, **.png**, ou **.webp**.
- L’image doit faire moins de **1024 Ko**.
- La résolution de l’image ne doit pas dépasser **1024 pixels** de largeur et de longueur.
- Les GIFs animés **ne** sont **pas** supporté (même si vous avez Nitro).
:::

## Et ensuite ?

Vous pouvez…
- [définir le profile de votre membre, avec sa description, des pronoms, etc.](./user-guide.md#member-management)
- [logguer vos switchs](./user-guide.md#managing-switches)
- [configurer vos paramètres de confidentialité](./user-guide.md#privacy)
- Ou autre !

Lisez le [Guide Utilisateur](./user-guide.md) pour une explication plus complète des fonctionalités du bot.
