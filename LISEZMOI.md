# GLPI — Démos interactives

Portail de démonstration aux couleurs de GLPI (charte 2025 et son complément), conçu pour des personnes qui ne connaissent pas GLPI. Chaque tuile ouvre une démo Arcade dans un lecteur.

## Contenu du dossier

```
index.html          la page (mise en page, styles, fonctionnement) : rien à modifier
demos.js            LA LISTE DES DÉMOS : le seul fichier à modifier
assets/img/         illustrations des tuiles (issues du kit GLPI)
assets/brush/       coups de pinceau de la charte
assets/logo-*.svg   logos GLPI (bleu et blanc)
newsletter-mailpoet.css   style à coller dans MailPoet pour le formulaire newsletter
```

## Ajouter une Arcade dans un emplacement

1. Dans Arcade, ouvrez la démo, cliquez sur **Share** et copiez le lien
   (ex. `https://app.arcade.software/share/Z44FPk9y8lMZ6tIbc7Pf`).
2. Ouvrez `demos.js` avec un éditeur de texte (Bloc-notes, VS Code…).
3. Trouvez la démo voulue et collez le lien entre les guillemets :
   ```js
   arcade: "https://app.arcade.software/share/Z44FPk9y8lMZ6tIbc7Pf",
   ```
   Le lien de partage, le lien `demo.arcade.software/...` ou l'identifiant seul fonctionnent.
4. Enregistrez, rechargez la page. Le badge « Bientôt disponible » disparaît.

12 emplacements sont prévus. Un seul est rempli : « Affecter un profil à un groupe ».

## Ajouter, retirer ou réordonner des démos

- **Ajouter** : copiez un bloc `{ ... },` entier dans `demos`, collez-le où vous voulez, changez son `id` (unique, minuscules et tirets, sans accent), son titre, son résumé, etc.
- **Réordonner** : l'ordre des blocs dans `demos` est l'ordre des tuiles.
- **Retirer** : supprimez le bloc (et son `id` dans `parcours` s'il y figure).
- **Changer l'illustration** : déposez une image dans `assets/img/` et indiquez son chemin dans `image`.
- **Parcours** : listes d'`id` dans `parcours`. Les boutons Précédente / Suivante du lecteur suivent cet ordre.
- **Lexique** : les `mots` d'une démo doivent exister dans `lexique` pour s'afficher dans le lecteur.
- **Format de l'Arcade** : si une démo apparaît avec des bandes, ajoutez `ratio: "XX%"` en reprenant la valeur du code d'intégration Arcade (`padding-bottom: calc(XX% + 41px)`).

## Brancher la newsletter (MailPoet)

Le formulaire vient du site WordPress, où MailPoet est installé. Il s'affiche dans le portail en version iFrame : les inscrits arrivent directement dans les listes MailPoet habituelles.

1. Dans WordPress > MailPoet > Formulaires, créez (ou dupliquez) un formulaire avec : Prénom, Nom, Adresse e-mail, une case à cocher personnalisée « Vous êtes déjà client ? », la case de consentement RGPD et le bouton.
2. Collez le contenu de `newsletter-mailpoet.css` dans « CSS personnalisé » du formulaire : il reprend les couleurs et les polices du portail.
3. Dans « Placement du formulaire » > « Shortcode et autres », copiez le code de la version iFrame.
4. Collez-le dans `demos.js`, champ `newsletter.iframe`, et ajustez `hauteur` si le bouton est coupé.

Si le formulaire reste vide une fois en ligne, le site WordPress interdit peut-être l'affichage dans d'autres sites (réglage de sécurité, souvent appelé X-Frame-Options ou frame-ancestors). La personne qui administre WordPress doit alors autoriser l'adresse du portail.

## Visite guidée « Comment ça fonctionne ? »

Le bouton en haut à droite (et le lien sous les boutons de l'accueil) lance une visite guidée interactive en 13 étapes. Chaque étape met en lumière le vrai élément de la page ou du lecteur : filtres, tuile à cliquer, démo, bouton plein écran, infos de la démo, parcours, lexique, newsletter.
Aux étapes « Lancez une démo » et « Commencez un parcours », le visiteur clique lui-même sur l'élément (ou sur « Le faire pour moi »).
Les textes se modifient dans `index.html`, dans la liste `VISITE` (cherchez « Visite guidée interactive »).
Lien direct pour lancer la visite : `…/glpi-demos/#aide`.

Pour attirer l'œil des nouveaux venus, le bouton « Comment ça fonctionne ? » fait un petit mouvement 3 secondes après l'arrivée, puis toutes les minutes. Il s'arrête dès que le visiteur a lancé la visite une fois, et ne recommence pas à ses visites suivantes (mémorisé dans son navigateur).
Pour changer le rythme, modifiez `ATTENTION_INTERVALLE` dans `index.html` (en millisecondes : 60000 = 1 minute).

## Lien direct vers une démo

`https://votre-site/index.html#demo-affecter-profil-groupe` ouvre directement le lecteur sur cette démo (pratique dans un mail ou une présentation).

## Mise en ligne

Copiez le dossier complet sur n'importe quel hébergement web statique (serveur interne, GitHub Pages, Netlify…). Aucun serveur applicatif ni base de données n'est nécessaire.
Le fichier s'ouvre aussi en double-cliquant sur `index.html`, mais certains navigateurs bloquent les Arcades hors connexion web : testez de préférence depuis un hébergement.

## Bon à savoir

- Les polices Poppins (titres) et Open Sans (textes) sont chargées depuis Google Fonts.
