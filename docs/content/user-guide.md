---
title: Guide Utilisateurice
description: Guide utilisateurice PluralKit contenant la procédure pas à pas des fonctionalités du bot, autant que comment les utiliser.
permalink: /guide

# Pour empêcher la sidebare d’être super longue
sidebarDepth: 1
---

# Guide Utilisateurice [Travail en cours]

## Ajouter le bot à votre serveur
Si vous voulez utiliser PluralKit sur votre serveur Discord, vous devez l’*ajouter* au serveur en question. Pour ça, vous aurez besoin de la permission *Gérer le serveur* sur ce même discord.

Utilisez ce lien pour ajouter le bot à votre serveur :

[https://discord.com/oauth2/authorize?client_id=466378653216014359&scope=bot&permissions=536995904](https://discord.com/oauth2/authorize?client_id=466378653216014359&scope=bot&permissions=536995904)

Une fois que vous avez parcouru l'assistant, le compte du bot rejoindra automatiquement le serveur que vous avez choisi. Veuillez vous assurer que le bot dispose des autorisations *Lire les messages*, *Envoyer des messages*, *Gérer les messages*, *Joindre des fichiers* et *Gérer les webhooks* dans les canaux sur lesquels vous souhaitez qu'il fonctionne.

## La gestion de système
Pour faire la plupart des choses avec le bot PluralKit, vous aurez besoin d'un système enregistré dessus. Un *système* est un ensemble de *membres du système* qui peuvent être utilisés par un ou plusieurs *comptes Discord*.

### Créer un système
Si vous n’avez pas déjà de système enregistré, utilisez la commande suivante pour en créer un :
`pk;system new`

Optionellement, vous pouvez définir un *nom de système*, qui sera affiché dans la carte d’informations, comme suit :
`pk;system new Mon Nom de Système`
    
### Voir les information à propos d’un système
Pour voir les informations à propos de votre propre système, tapez simplement :
`pk;system`

Pour voir les informations à propos d’un *système différent*, il y a plusieurs façon de faire. Vous pouvez soit renseigner le @mention, soit l’ID du compte discord, soit l’ID du système. Par exemple :
`pk;system @Craig#5432`
`pk;system 466378653216014359`
`pk;system abcde`

### Description de système
Si vous souhaitez ajouter une petite présentation à votre carte d'informations système, vous pouvez ajouter une *description du système*. Pour ce faire, utilisez la commande`pk;system description` comme suit :

`pk;system description Ceci est la description de mon système. Bonjour. Lorem ipsum dolor sit amet.`

Il y a une limite de 1000 charactères pour la description de votre système – Ce qui est beaucoup !

Si vous souhaitez supprimer la description de votre système, tapez simplement `pk;system description` sans texte supplémentaire.

### Avatars système
Si vous souhaitez que votre système ait un « avatar système » associé, affiché sur votre carte d'information système, vous pouvez ajouter un avatar système. Pour ce faire, utilisez la commande `pk;system avatar`. Vous pouvez soit lui fournir une URL directe vers une image, soit joindre une image au message contenant la commande. Par exemple.
`pk;system avatar http://placebeard.it/512.jpg`
`pk;system avatar` [avec une image attachée]
    
Pour retirer votre avatar, utiliser simplement `pk;system avatar` sans attachement, ni lien.

### Tags système

Votre balise système est un petit extrait de texte qui sera ajouté à la fin de tous les messages proxyés.
Par exemple, si vous voulez proxyer un membre nommé `John` et que votre tag système est `| Les Nones`, le nom affiché sera `John | Les Nones`. C’est très utile pour identifier votre système dans le chat. Et certains serveurs peuvent exiger que vous utilisiez les tags système. Notez que les émojis *sont* supportés ! Pour définir un tag système, utilisez la commande `pk;system tag` comme suit :

`pk;system tag | Les Nones`
`pk;system tag (Système de Test)`
`pk;system tag 🛰️`

Si vous voulez supprimer votre tag système, vous pouvez simplement taper `pk;system tag` sans rien derrière.

**NB :** Lors du proxy, le *nom d'utilisateur total du webhook* doit contenir au maximum 32 caractères. En tant que tel, si vous avez un nom système long, votre balise peut suffire pour le faire dépasser cette limite. PluralKit vous avertira si vous avez une combinaison nom / tag de membre qui amènera le nom d'utilisateur combiné au-dessus de la limite.
Vous pouvez raccourcir le nom du membre ou la balise système pour résoudre ce problème.
    
### Ajouter ou supprimer un compte discord à votre système
Si vous avez plusieurs comptes Discord sur lesquels vous voulez utiliser le même système, vous n’avez pas besoin de créer plusieurs systèmes. 
Vous pouvez simplement *lier* le même système à plusieurs comptes.

Partons du principe que le compte auquel vous voulez lier votre système est @Craig#5432. Vous le lierez à votre système *actuel* en utilisant la commande depuis un compte qui a accès au système :
`pk;link @Craig#5432`

PluralKit vous demandera de confirmer ce lien en cliquant sur une réaction *depuis l’autre compte* (@Craig#5432 dans ce cas).

Si vous voulez délier ce compte, utiliser la commande suivante :
`pk;unlink @Craig#5432`

Vous ne pouvez pas supprimer le seul compte ayant accès à un système, étant donné que ça rendrait ce système inacessible. Les commande `pk;link` ainsi que `pk;unlink` fonctionnent aussi bien avec l’ID du compte discord plutôt que la @mention.

[Pause Traduction]
### Setting a system time zone
PluralKit defaults to showing dates and times in [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). 
If you'd like, you can set a *system time zone*, and as such every date and time displayed in PluralKit
(on behalf of your system) will be in the system time zone. To do so, use the `pk;system timezone` command, like so:

    pk;system timezone Europe/Copenhagen
    pk;system timezone America/New_York
    pk;system timezone DE
    pk;system timezone 🇬🇧
    
You can specify time zones in various ways. In regions with large amounts of time zones (eg. the Americas, Europe, etc),
specifying an exact time zone code is the best way. To get your local time zone code, visit [this site](https://xske.github.io/tz).
You can see the full list [here, on Wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (see the column *TZ database name*).
You can also search by country code, either by giving the two-character [*ISO-3166-1 alpha-2* country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) (eg. `GB` or `DE`), or just by a country flag emoji.

To clear a time zone, type `pk;system timezone` without any parameters. 

### Deleting a system
If you want to delete your own system, simply use the command:

    pk;system delete
    
You will need to verify by typing the system's ID when the bot prompts you to - to prevent accidental deletions.

## Member management

In order to do most things related to PluralKit, you need to work with *system members*.

Most member commands follow the format of `pk;member MemberName verb Parameter`. Note that if a member's name has multiple words, you'll need to enclose it in "double quotes" throughout the commands below.

### Creating a member
You can't do much with PluralKit without having registered members with your system, but doing so is quite simple - just use the `pk;member new` command followed by the member's name, like so:

    pk;member new John
    pk;member new Craig Smith
    
As the one exception to the rule above, if the name consists of multiple words you must *not* enclose it in double quotes.

### Looking up member info
To view information about a member, there are a couple ways to do it. Either you can address a member by their name (if they're in your own system), by their 5-character *member ID*, or by their *display name*, like so:

    pk;member John
    pk;member qazws
    pk;member J

Member IDs are the only way to address a member in another system, and you can find it in various places - for example the system's member list, or on a message info card gotten by reacting to messages with a question mark.

### Listing system members
To list all the members in a system, use the `pk;system list` command. This will show a paginated list of all member names in the system. You can either run it on your own system, or another - like so:

    pk;system list
    pk;system @Craig#5432 list
    pk;system qazws list
    
If you want a more detailed list, with fields such as pronouns and description, add the word `full` to the end of the command, like so:

    pk;system list full
    pk;system @Craig#5432 list full
    pk;system qazws list full

### Member renaming
If you want to change the name of a member, you can use the `pk;member rename` command, like so:

    pk;member John rename Joanne
    pk;member "Craig Smith" rename "Craig Johnson"
    
### Member display names
Normally, when proxying a member, the name displayed in the proxied message will be the member's name. However, in some cases
you may want to display a different name. For example, you may want to include a member's pronouns inside the proxied name,
indicate a subsystem, include emojis or symbols that don't play nice with the command syntax, or just in general show a different name from the member's "canonical" name.

In such cases you can set the member's *display name*. Which will, well, display that name instead. You can set
a display name using the `pk;member displayname` command, like so:

    pk;member John displayname Jonathan
    pk;member Robert displayname Bob (he/him)
    
To remove a display name, just use the same command with no last parameter, eg:

    pk;member John displayname
    
This will remove the display name, and thus the member will be proxied with their canonical name.

### Member server display names
If you'd like to set a display name (as above), but only for a specific server, you can set the member's *server display name*.
This functions just like global display names, but only in the same server you set them in. For example:

    pk;member John servername AdminJohn
    
The server name applies to the same server you run the command in, so naturally this command doesn't function in DMs (as you cannot proxy in DMs).
    
### Member description
In the same way as a system can have a description, so can a member. You can set a description using the `pk;member description` command, like so:

    pk;member John description John is a very cool person, and you should give him hugs.
    
As with system descriptions, the member description has a 1000 character length limit. 
To clear a member description, use the command with no additional parameters (eg. `pk;member John description`).

### Member color
A system member can have an associated color value.
This color is *not* displayed as a name color on proxied messages due to a Discord limitation,
but it's shown in member cards, and it can be used in third-party apps, too.
To set a member color, use the `pk;member color` command with [a hexadecimal color code](https://htmlcolorcodes.com/), like so:

    pk;member John color #ff0000
    pk;member John color #87ceeb
    
To clear a member color, use the command with no color code argument (eg. `pk;member John color`).

### Member avatar
If you want your member to have an associated avatar to display on the member information card and on proxied messages, you can set the member avatar. To do so, use the `pk;member avatar` command. You can either supply it with an direct URL to an image, or attach an image directly. For example.

    pk;member John avatar http://placebeard.it/512.jpg
    pk;member "Craig Johnson" avatar   (with an attached image)
    
To preview the current avatar (if one is set), use the command with no arguments:

    pk;member John avatar
    
To clear your avatar, use the subcommand `avatar clear` (eg. `pk;member John avatar clear`).

### Member server avatar
You can also set an avatar for a specific server. This will "override" the normal avatar, and will be used when proxying messages and looking up member cards in that server. To do so, use the `pk;member serveravatar` command, in the same way as the normal avatar command above:

    pk;member John serveravatar
    pk;member John serveravatar http://placebeard.it/512.jpg
    pk;member "Craig Johnson" serveravatar   (with an attached image)
    pk;member John serveravatar clear

### Member pronouns
If you want to list a member's preferred pronouns, you can use the pronouns field on a member profile. This is a free text field, so you can put whatever you'd like in there (with a 100 character limit), like so:

    pk;member John pronouns he/him
    pk;member "Craig Johnson" pronouns anything goes, really
    pk;member Skyler pronouns xe/xir or they/them

To remove a member's pronouns, use the command with no pronoun argument (eg. `pk;member John pronouns`).

### Member birthdate 
If you want to list a member's birthdate on their information card, you can set their birthdate through PluralKit using the `pk;member birthdate` command. Please use [ISO-8601 format](https://xkcd.com/1179/) (`YYYY-MM-DD`) for best results, like so:

    pk;member John birthdate 1996-07-24
    pk;member "Craig Johnson" birthdate 2004-02-28
    
You can also set a birthdate without a year, either in `MM-DD` format or `Month Day` format, like so:

    pk;member John birthdate 07-24
    pk;member "Craig Johnson" birthdate Feb 28
    
To clear a birthdate, use the command with no birthday argument (eg. `pk;member John birthdate`).

### Deleting members
If you want to delete a member, use the `pk;member delete` command, like so:

    pk;member John delete
    
You'll need to confirm the deletion by replying with the member's ID when the bot asks you to - this is to avoid accidental deletion.

## Proxying
Proxying is probably the most important part of PluralKit. This allows you to essentially speak "as" the member,
with the proper name and avatar displayed on the message. To do so, you must at least [have created a member](#creating-a-system).

### Setting up proxy tags
You'll need to register a set of *proxy tags*, which are prefixes and/or suffixes you "enclose" the real message in, as a signal to PluralKit to indicate
which member to proxy as. Common proxy tags include `[square brackets]`, `{curly braces}` or `A:letter prefixes`.

To set a proxy tag, use the `pk;member proxy` command on the member in question. You'll need to provide a "proxy example", containing the word `text`.
For example, if you want square brackets, the proxy example must be `[text]`. If you want a letter prefix, make it something like `A:text`. For example:

    pk;member John proxy [text]
    pk;member "Craig Johnson" proxy {text}
    pk;member John proxy J:text
    
You can have any proxy tags you want, including one containing emojis.

You can now type a message enclosed in your proxy tags, and it'll be deleted by PluralKit and reposted with the appropriate member name and avatar (if set).

**NB:** If you want `<angle brackets>` as proxy tags, there is currently a bug where custom server emojis will (wrongly)
be interpreted as proxying with that member (see [issue #37](https://github.com/xSke/PluralKit/issues/37)). The current workaround is to use different proxy tags.

### Using multiple distinct proxy tag pairs
If you'd like to proxy a member in multiple ways (for example, a name or a nickname, uppercase and lowercase variants, etc), you can add multiple tag pairs.
When proxying, you may then use any of the tags to proxy for that specific member.

To add a proxy tag to a member, use the `pk;member proxy add` command:
    pk;member John proxy add {text}
    pk;member Craig proxy add C:text
    
To remove a proxy tag from a member, use the `pk;member proxy remove` command:
    pk;member John proxy remove {text}
    pk;member Craig proxy remove C:text

### Keeping your proxy tags
If you'd like your proxied messages to include the proxy tags, you can enable the "keep proxy tags" option for a given member, like so:

    pk;member John keepproxy on

Turning the option off is similar - replace "on" with "off" in the command. The default value for every member is off. When proxying
a member with multiple proxy tags, the proxy tag used to trigger a given proxy will be included.

The practical effect of this is:
* **Keep proxy tags on:** `[Message goes here]` -> [Message goes here]
* **Keep proxy tags off:** `[Message goes here]` -> Message goes here 

### Querying message information
If you want information about a proxied message (eg. for moderation reasons), you can query the message for its sender account, system, member, etc.

Either you can react to the message itself with the :grey_question: or :question: emoji, which will DM you information about the message in question, 
or you can use the `pk;message` command followed by [the message's ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).

### Pinging a specific user
If you'd like to "ping" the account behind a proxied message without having to query the message and ping them yourself,
you can react to the message with the :bell: or :exclamation: emoji (or even :ping_pong:), and PluralKit will ping the relevant member and account in the same
channel on your behalf with a link to the message you reacted to.

### Disabling proxying on a per-server basis
If you need to disable proxying messages for your system entirely in a specific server (for example, if you'd like to
use a different proxy bot there), you can type `pk;system proxy on/off` to do that.

### Deleting messages
Since the messages will be posted by PluralKit's webhook, there's no way to delete the message as you would a normal user message.
To delete a PluralKit-proxied message, you can react to it with the :x: emoji. Note that this only works if the message has
been sent from your own account.

## Autoproxy
The bot's *autoproxy* feature allows you to have messages be proxied without directly including the proxy tags. Autoproxy can be set up in various ways. There are three autoproxy modes currently implemented:

To see your system's current autoproxy settings, simply use the command:

    pk;autoproxy
    
To disable autoproxying for the current server, use the command:

    pk;autoproxy off
    
*(hint: `pk;autoproxy` can be shortened to `pk;ap` in all related commands)*

::: tip
To disable autoproxy for a single message, add a backslash (`\`) to the beginning of your message.
:::

#### Front mode
This autoproxy mode will proxy messages as the current *first* fronter of the system. If you register a switch with `Alice` and `Bob`, messages without proxy tags will be autoproxied as `Alice`.
To enable front-mode autoproxying for a given server, use the following command:

    pk;autoproxy front
    
#### Latch mode
This autoproxy mode will essentially "continue" previous proxy tags. If you proxy a message with `Alice`'s proxy tags, messages posted afterwards will be proxied as Alice. Proxying again with someone else's proxy tags, say, `Bob`, will cause messages *from then on* to be proxied as Bob.
In other words, it means proxy tags become "sticky". This will carry over across all channels in the same server.

To enable latch-mode autoproxying for a given server, use the following command:

    pk;autoproxy latch
    
#### Member mode 
This autoproxy mode will autoproxy for a specific selected member, irrelevant of past proxies or fronters.

To enable member-mode autoproxying for a given server, use the following command, where `<member>` is a member name (in "quotes" if multiple words) or 5-letter ID:

    pk;autoproxy <member>

### Changing the latch timeout duration
By default, latch mode times out after 6 hours. It is possible to change this:

    pk;autoproxy timeout <new duration>

To reset the duration, use the following command:

    pk;autoproxy timeout reset

To disable timeout (never timeout), use the following command:

    pk;autoproxy timeout disable

### Disabling front/latch autoproxy on a per-member basis
If a system uses front or latch mode autoproxy, but one member prefers to send messages through the account (and not proxy), you can disable the front and latch modes for that specific member.

    pk;member <name> autoproxy off

To re-enable front / latch modes for that member, use the following command:

    pk;member <name> autoproxy on

This will *not* disable member mode autoproxy. If you do not wish to autoproxy, please turn off autoproxy instead of setting autoproxy to a specific member.

### Disabling autoproxy per-account

It is possible to fully disable autoproxy for a certain account linked to your system. For example, you might want to do this if a specific member's name is shown on the account.

To disable autoproxy for the current account, use the following command:

    pk;autoproxy account disable

To re-enable autoproxy for the current account, use the following command:

    pk;autoproxy account enable

::: tip
This subcommand can also be run in DMs.
:::


## Managing switches
PluralKit allows you to log member switches through the bot.
Essentially, this means you can mark one or more members as *the current fronter(s)* for the duration until the next switch.
You can then view the list of switches and fronters over time, and get statistics over which members have fronted for how long.

### Logging switches
To log a switch, use the `pk;switch` command with one or more members. For example:

    pk;switch John
    pk;switch "Craig Johnson" John
    
Note that the order of members are preserved (this is useful for indicating who's "more" at front, if applicable).
If you want to specify a member with multiple words in their name, remember to encase the name in "double quotes".

### Switching out
If you want to log a switch with *no* members, you can log a switch-out as follows:

    pk;switch out

### Moving switches
If you want to log a switch that happened further back in time, you can log a switch and then *move* it back in time, using the `pk;switch move` command.
You can either specify a time either in relative terms (X days/hours/minutes/seconds ago) or in absolute terms (this date, at this time).
Absolute times will be interpreted in the [system time zone](#setting-a-system-time-zone). For example:

    pk;switch move 1h
    pk;switch move 4d12h
    pk;switch move 2 PM
    pk;switch move May 8th 4:30 PM

Note that you can't move a switch *before* the *previous switch*, to avoid breaking consistency. Here's a rough ASCII-art illustration of this:

           YOU CAN NOT               YOU CAN
            MOVE HERE               MOVE HERE       CURRENT SWITCH                 
                v                       v               START                   NOW
    [===========================]       |                 v                      v
                                 [=== PREVIOUS SWITCH ===]|                      |
                                 \________________________[=== CURRENT SWITCH ===]
                                                          
    ----- TIME AXIS ---->

### Delete switches
If you'd like to delete the most recent switch, use the `pk;switch delete` command. You'll need to confirm
the deletion by clicking a reaction.

If you'd like to clear your system's entire switch history, use the `pk;switch delete all` command. This isn't reversible!

### Querying fronter
To see the current fronter in a system, use the `pk;system fronter` command. You can use this on your current system, or on other systems. For example:

    pk;system fronter
    pk;system @Craig#5432 fronter
    pk;system qazws fronter

### Querying front history
To look at the front history of a system (currently limited to the last 10 switches). use the `pk;system fronthistory` command, for example:

    pk;system fronthistory
    pk;system @Craig#5432 fronthistory
    pk;system qazws fronthistory
    
### Querying front percentage
To look at the per-member breakdown of the front over a given time period, use the `pk;system frontpercent` command. If you don't provide a time period, it'll default to 30 days. For example:

    pk;system frontpercent
    pk;system @Craig#5432 frontpercent 7d
    pk;system qazws frontpercent 100d12h

Note that in cases of switches with multiple members, each involved member will have the full length of the switch counted towards it. This means that the percentages may add up to over 100%.

## Member groups
PluralKit allows you to categorize system members in different **groups**.
You can add members to a group, and each member can be in multiple groups.
The groups a member is in will show on the group card.

### Creating a new group
To create a new group, use the `pk;group new` command:

    pk;group new MyGroup
    
This will create a new group. Groups all have a 5-letter ID, similar to systems and members.

### Adding and removing members to groups
To add a member to a group, use the `pk;group <group> add` command, eg:

    pk;group MyGroup add Craig
    
You can add multiple members to a group by separating them with spaces, eg:

    pk;group MyGroup add Bob John Charlie

Similarly, you can remove members from a group, eg:

    pk;group MyGroup remove Bob Craig
    
### Listing members in a group
To list all the members in a group, use the `pk;group <group> list` command.
The syntax works the same as `pk;system list`, and also allows searching and sorting, eg:

    pk;group MyGroup list
    pk;group MyGroup list --by-message-count jo
    
### Listing all your groups
In the same vein, you can list all the groups in your system with the `pk;group list` command:

    pk;group list
    
### Group name, description, icon, delete
(TODO: write this better)

Groups can be renamed:

    pk;group MyGroup rename SuperCoolGroup

Groups can have icons that show in on the group card:
    
    pk;group MyGroup icon https://my.link.to/image.png
    
Groups can have descriptions:

    pk;group MyGroup description This is my cool group description! :)
    
Groups can be deleted:

    pk;group MyGroup delete

## Privacy
There are various reasons you may not want information about your system or your members to be public. As such, there are a few controls to manage which information is publicly accessible or not.

### System privacy
At the moment, there are four aspects of system privacy that can be configured.

- System description
- Current fronter
- Front history
- Member list

Each of these can be set to **public** or **private**. When set to **public**, anyone who queries your system (by account or system ID, or through the API), will see this information. When set to **private**, the information will only be shown when *you yourself* query the information. The cards will still be displayed in the channel the commands are run in, so it's still your responsibility not to pull up information in servers where you don't want it displayed.

To update your system privacy settings, use the following commands:

    pk;system privacy <subject> <level>
    
where `<subject>` is either `description`, `fronter`, `fronthistory` or `list`, corresponding to the options above, and `<level>` is either `public` or `private`. `<subject>` can also be `all` in order to change all subjects at once.

For example:

    pk;system privacy description private
    pk;system privacy fronthistory public
    pk;system privacy list private

When the **member list** is **private**, other users will not be able to view the full member list of your system, but they can still query individual members given their 5-letter ID. If **current fronter** is private, but **front history** isn't, someone can still see the current fronter by looking at the history (this combination doesn't make much sense).

### Member privacy
There are also seven options for configuring member privacy;

- Name
- Description
- Avatar
- Birthday
- Pronouns
- Metadata *(message count, creation date, etc)*
- Visibility *(whether the member shows up in member lists)*

As with system privacy, each can be set to **public** or **private**. The same rules apply for how they are shown, too. When set to **public**, anyone who queries your system (by account or system ID, or through the API), will see this information. When set to **private**, the information will only be shown when *you yourself* query the information. The cards will still be displayed in the channel the commands are run in, so it's still your responsibility not to pull up information in servers where you don't want it displayed.

However, there are two catches:
- When the **name** is set to private, it will be replaced by the member's **display name**, but only if they have one! If the member has no display name, **name privacy will not do anything**. PluralKit still needs some way to refer to a member by name :) 
- When **visibility** is set to private, the member will not show up in member lists unless `-all` is used in the command (and you are part of the system).

To update a members privacy you can use the command:

    member <member> privacy <subject> <level>

where `<member>` is the name or the id of a member in your system, `<subject>` is either `name`, `description`, `avatar`, `birthday`, `pronouns`, `metadata`, or `visiblity` corresponding to the options above, and `<level>` is either `public` or `private`. `<subject>` can also be `all` in order to change all subjects at once.  
`metadata` will affect the message count, the date created, the last fronted, and the last message information.

For example:

    pk;member John privacy visibility private
    pk;member "Craig Johnson" privacy description public
    pk;member Robert privacy birthday public
    pk;member Skyler privacy all private

## Importing and exporting data
If you're a user of another proxy bot (eg. Tupperbox), or you want to import a saved system backup, you can use the importing and exporting commands.

### Importing from Tupperbox
If you're a user of the *other proxying bot* Tupperbox, you can import system and member information from there. This is a fairly simple process:

1. Export your data from Tupperbox:
```
tul!export
```
2. Copy the URL for the data file (or download it)
3. Import your data into PluralKit:
```
pk;import https://link/to/the/data/file.json
```
*(alternatively, run `pk;import` by itself and attach the .json file)*

Note that while Tupperbox supports features such as multiple proxies per member, per-member system tags, and member groups, PluralKit does not.
PluralKit will warn you when you're importing a Tupperbox file that makes use of such features, as they will not carry over. 

### Importing from PluralKit
If you have an exported file from PluralKit, you can import system, member and switch information from there like so:
1. Export your data from PluralKit:
```
pk;export
```
2. Copy the URL for the data file (or download it)
3. Import your data into PluralKit:
```
pk;import https://link/to/the/data/file.json
```
*(alternatively, run `pk;import` by itself and attach the .json file)*

### Exporting your PluralKit data
To export all the data associated with your system, run the `pk;export` command. This will send you a JSON file containing your system, member, and switch information.
