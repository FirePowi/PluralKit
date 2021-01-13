---
layout: default
title: Liste des Commandes
permalink: /commands
description: La liste complète de toutes les commandes dans PluralKit ainsi qu’une brève description de ce qu’elles font.
nav_order: 3
---

# Comment lire ça ?
Les mots entre **\<chevrons>** ou **[crochets]** signifient que vous devez les modifier. Les crochets signifient que c’est optionnel. N’incluez pas les chevrons et crochets.

# Commandes
## Commandes système
*Optionnellement, remplacez `[système]` par une @mention, un ID de compte discord, l’ID à 5 caractères. Pour la plupart des commandes, ajouter `-clear` supprimera/effacera les champs.*
- `pk;system [système]` - Affiche les informations à propos du système.
- `pk;system new [nom]` - Créer un nouveau système enregistré à votre compte.
- `pk;system rename [nouveau nom]` - Change le nom de votre système.
- `pk;system description [description]` - Change la description de votre système
- `pk;system avatar [url de l'avatar]` - Change l’avatar de votre système.
- `pk;system privacy` - Affiche les paramètres de confidentialité de votre système.
- `pk;system privacy <sujet> <public|private>` - Change les paramètres de confidentialité de votre système
- `pk;system tag [tag]` - Change le tag système de votre système
- `pk;system timezone [lieu]` - Change la timezone de votre système.
- `pk;system proxy [on|off]` - Bascule (on/off) le proxying pour un serveur spécifique.
- `pk;system delete` - Supprime votre système.
- `pk;system [système] fronter` - Affiche le front actuelle d'un système.
- `pk;system [système] fronthistory` - Affiche les 10 derniers fronts de votre système.
- `pk;system [système] frontpercent [timeframe]` - Affiche l'historique de front agrégé d'un système dans un laps de temps donné.
- `pk;system [système] list` - Affiche une liste paginée des membres d'un système.
- `pk;system [système] list -full` - Affiche une liste paginée des membres d'un système, avec plus de détails.
- `pk;find <search term>` - Cherche un membre par nom.
- `pk;system [système] find <search term>` - Cherche un membre par nom, pour un système donné.
- `pk;autoproxy [off|front|latch|member]` - Modifie le paramètre d’autoproxy pour ce serveur discord ([désactivé|front|verouillé|\<membre>]).
- `pk;link <compte>` - Lie ce système à un compte discord différent.
- `pk;unlink [compte]` - Délie ce système d’un compte discord.

## Commandes membre
*Remplacer `<membre>` par le nom d’un membre ou son ID a 5 caractères. Pour la plupart des commandes, ajouter `-clear` effacera/supprimera le champ.*
- `pk;member <membre>` - Affiche les informations à propos d’un membre.
- `pk;member new <nom>` - Créer un nouveau membre du système.
- `pk;member <membre> rename <nouveau nom>` - Change le nom d’un membre.
- `pk;member <membre> displayname <nouveau nom affiché>` - Change le nom affiché d’un membre.
- `pk;member <membre> servername <nouveau nom affiché>` - Change le nom affiché d’un membre, seulement pour le serveur actuel.
- `pk;member <membre> description [description]` - Change la description d’un membre.
- `pk;member <membre> avatar <url de l'avatar|@mention>` - Change l’avatar d’un membre.
- `pk;member <membre> serveravatar <url de l'avatar|@mention>` - Change l’avatar d’un membre, seulement pour le serveur actuel.
- `pk;member <membre> privacy` - Affiche les paramètres de confidentialité d’un membre.
- `pk;member <membre> privacy <sujet> <public|private>` - Change les paramètres de confidentialité d’un membre.
- `pk;member <membre> proxy [tags]` - Change le tag proxy d’un membre. Ajouter `add/remove` pour ajouter/supprimer des tags.
- `pk;member <membre> proxy add [tags]` - Ajouter un/des tags proxy à un membre.
- `pk;member <membre> proxy remove [tags]` - Supprimer le/des tags proxy d’un membre.
- `pk;member <membre> autoproxy [on|off]` - Définit si un membre sera autoproxié lorsque autoproxy est défini sur verouillé (latch) ou front.
- `pk;member <membre> keepproxy [on|off]` - Définit s'il faut inclure les balises proxy d'un membre dans le message mandaté.
- `pk;member <membre> pronouns [pronouns]` - Change les pronoms d’un membre.
- `pk;member <membre> color [color]` - Change la couleur d’un membre.
- `pk;member <membre> birthdate [birthdate]` - Change l’anniversaire d’un membre.
- `pk;member <membre> delete` - Supprime un membre.

## Commandes de groupe
*Remplacer `<groupe>` par le nom d’un groupe ou son ID a 5 caractères. Pour la plupart des commandes, ajouter `-clear` effacera/supprimera le champ.*
- `pk;group <groupe>` - Affiche les informations à propos d’un groupe.
- `pk;group new <nom>` - Créer un nouveau groupe.
- `pk;group list` - Liste tous les groupes de votre système.
- `pk;group <groupe> list` - Liste tous les membres d’un groupe.
- `pk;group <groupe> random` - Affiche les informations d’un membre aléatoirement selectionné dans un groupe.
- `pk;group <groupe> rename <nouveau nom>` - Renommer un groupe.
- `pk;group <groupe> displayname [nom affiché]` - Affiche ou modifie le nom affiché du groupe.
- `pk;group <groupe> description [description]` - Affiche ou modifie la description d’un groupe.
- `pk;group <groupe> add <membre> [membre 2] [membre 3...]` - Ajoute un ou plusieurs membres à un groupe.
- `pk;group <groupe> remove <membre> [membre 2] [membre 3...]` - Supprime un ou plusieurs membres d’un groupe.
- `pk;group <groupe> privacy <description|icon|visibility|all> <public|private>` - Change les paramètres de confidentialité d’un groupe. (\<description|icône|visibilité|tout>)
- `pk;group <groupe> icon [icône]` - Affiche on change l’icône d’un groupe.
- `pk;group <groupe> delete` - Supprime un groupe.

## Commandes de switch
- `pk;switch [membre...]` - Enregistre un switch avec les membres donnés.
- `pk;switch move <time>` - Déplace le switch en arrière dans le temps.
- `pk;switch delete` - Supprime le dernier switch.
- `pk;switch delete all` - Supprime tous les switchs loggués.
- `pk;switch out` - Enregirste un 'switch-out' – Un switch sans membre associé.

## Commandes d’autoproxy
- `pk;autoproxy [off|front|latch|<membre>]` - Modifie le paramètre d’autoproxy pour ce serveur discord ([désactivé|front|verouillé|\<membre>]).
- `pk;autoproxy timeout [<durée>|off|reset]` - Définit la durée du délai de verrouillage pour votre système.
- `pk;autoproxy account [on|off]` - Active / désactive globalement l'autoproxy pour le compte actuel.

## Server owner commands
*(Toutes ces commandes requièrent la permission « Gérer le serveur »)*
- `pk;log channel <salon>` - Paramètre un salon où logguer tous les messages proxiés.
- `pk;log channel -clear` - Nettoie l’actuel salon de log.
- `pk;log disable <#salon> [#salon...]` - Désactive le log des messages postés dans un ou plusieurs salons (utile pour les salons d’admins et autres).
- `pk;log enable <#salon> [#salon...]` - Réactiver le log des messages postés dans un ou plusieeurs salons.
- `pk;logclean <on/off>` - Active ou désactive [log cleanup](./staff/compatibility.md#log-cleanup).
- `pk;blacklist add <#salon> [#salon...]` - Ajouter les salons donnés à la blacklist proxy (le proxy sera désactivé dans ces salons).
- `pk;blacklist remove <#salon> [#salon...]` - Retire les salons donnés de la blacklist proxy.

## Utilitaire
- `pk;random [-group]` - Affiche la carte d’informations d’un membre [ou groupe] sélectionné aléatoirement dans votre système.
- `pk;message <id du message / lien du message>` - Affiche les informations à propos d’un message proxyé à partir de son ID ou de son lien.
- `pk;invite` - Envoie le lien d’invitation de PluralKit.
- `pk;import` - Importe des données depuis PluralKit ou Tupperbox.
- `pk;export` - Exporte un fichier de données contener les information de votre système.
- `pk;permcheck [id du serveur]` - [Vérifie le paramétrage des permissions du serveur donné](./staff/permissions.md#permission-checker-command) pour voir s’il est compatible avec PluralKit.

## API
*(pour utiliser l’[API PluralKit](./api-documentation.md), utile pour les développeurses)*
- `pk;token` - Vous envoie un DM contenant le token pour utiliser l’API PluralKit.
- `pk;token refresh` - Met à jour votre token API et désactive l’ancien.

## Aide
- `pk;help` - Affiche un message d’aide basique, en anglais, décrivant comment utiliser le bot.
- `pk;help proxy` - Vous dirige vers la version anglaise de [cette page](./user-guide.md#proxying).
- `pk;system help` - Liste les commandes liées au système.
- `pk;member help` - Liste les commandes liées aux membres.
- `pk;switch help` - Liste les commandes liées aux switchs.
- `pk;commands` - Vous dirige vers la version anglaise de cette page.
