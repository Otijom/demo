# GLPI — Démos interactives

Portail de démonstration aux couleurs de GLPI (charte 2025 et son complément), conçu pour des personnes qui ne connaissent pas GLPI. Chaque tuile ouvre une démo Arcade dans un lecteur.

## Contenu du dossier

```
index.html          la page (mise en page, styles, fonctionnement) : rien à modifier
demos.js            LA LISTE DES DÉMOS : le seul fichier à modifier
assets/img/         illustrations des tuiles (issues du kit GLPI)
assets/brush/       coups de pinceau de la charte
assets/qr/          QR codes du bloc « Alors, conquis ? »
assets/logo-*.svg   logos GLPI (bleu et blanc)
newsletter-mailpoet.css   style à coller dans MailPoet pour habiller le formulaire newsletter
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

## Bloc « Alors, conquis ? »

Juste avant le pied de page, deux cartes invitent à passer à l'action : l'essai gratuit de 45 jours sur une instance GLPI Cloud, et la page des tarifs. Sur ordinateur, chaque carte n'affiche qu'un QR code, sans bouton : le visiteur scanne avec son téléphone et l'écran ne quitte jamais l'espace démo (utile sur un stand). Sur téléphone, c'est l'inverse : le QR code est masqué et un bouton ouvre le lien.

- Les adresses se changent dans `demos.js`, rubrique `conquis` (`essai.lien` et `tarifs.lien`).
- **Si vous changez une adresse, refaites le QR code correspondant**, sinon il continuera de pointer vers l'ancienne. N'importe quel générateur de QR code fait l'affaire : exportez en SVG (ou PNG), déposez le fichier dans `assets/qr/` et indiquez son chemin dans `qr`. Scannez-le avec un téléphone pour vérifier avant de publier.
- Pour retirer une carte, videz son `lien`. Les deux vides : le bloc et son étape dans la visite guidée sont masqués.
- Les textes des cartes se modifient dans `index.html` (cherchez « Alors, conquis »).

## Newsletter (MailPoet)

**Actuellement masquée** : glpi-project.org refuse pour l'instant d'être affiché dans une autre page. Le code iFrame est conservé dans `demos.js`, en commentaire juste au-dessus de `newsletter` : une fois le réglage fait par l'administrateur (voir la fin de cette section), recollez-le entre les accents graves de `iframe`.

Le formulaire MailPoet du site WordPress s'affiche dans l'encart newsletter, en version iFrame. Les inscrits arrivent directement dans MailPoet.

1. WordPress > MailPoet > Formulaires > le formulaire > « Placement du formulaire » > « Shortcode et autres » : copiez le code de la version iFrame.
2. Collez-le dans `demos.js`, champ `newsletter.iframe`, **entre les deux accents graves** `` ` `` (pas entre guillemets : le code contient lui-même des guillemets, ce qui casserait le fichier).
3. Le cadre prend automatiquement la hauteur du formulaire.
4. Pour l'habiller aux couleurs du portail, collez le contenu de `newsletter-mailpoet.css` dans le « CSS personnalisé » du formulaire MailPoet.

Sans iFrame, `newsletter.lien` peut recevoir l'adresse d'une page d'inscription : l'encart affiche alors un simple bouton. Attention, ce bouton ouvre le site glpi-project.org : à éviter sur l'écran du stand. Les deux champs vides : l'encart, son lien dans le menu et l'étape de la visite guidée sont masqués.

Si le formulaire reste vide une fois en ligne, le site WordPress refuse peut-être l'affichage dans un autre site (réglage de sécurité X-Frame-Options ou frame-ancestors) : l'administrateur du WordPress doit autoriser l'adresse du portail.

## Visite guidée « Comment ça fonctionne ? »

Le bouton en haut à droite (et le lien sous les boutons de l'accueil) lance une visite guidée interactive en 13 étapes (14 avec la newsletter). Chaque étape met en lumière le vrai élément de la page ou du lecteur : filtres, tuile à cliquer, démo, bouton plein écran, infos de la démo, parcours, lexique, bloc « Alors, conquis ? », newsletter si elle est activée.
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
- L'espace démo sert aussi d'écran de stand : il ne contient volontairement aucun lien qui fasse quitter la page (pied de page sans lien externe, pas de lien « ouvrir dans un nouvel onglet » sous les démos, QR codes sans bouton sur ordinateur).
