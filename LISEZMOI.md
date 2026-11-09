# GLPI — Démos interactives

Portail de démonstration aux couleurs de GLPI (charte 2025 et son complément), conçu pour des personnes qui ne connaissent pas GLPI. Chaque tuile ouvre une démo Arcade dans un lecteur.

## Contenu du dossier

```
index.html          la page (mise en page, styles, fonctionnement) : rien à modifier
demos.js            LA LISTE DES DÉMOS : le seul fichier à modifier
assets/img/         illustrations des tuiles (issues du kit GLPI)
assets/brush/       coups de pinceau de la charte
assets/logo-*.svg   logos GLPI (bleu et blanc)
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

## Lien direct vers une démo

`https://votre-site/index.html#demo-affecter-profil-groupe` ouvre directement le lecteur sur cette démo (pratique dans un mail ou une présentation).

## Mise en ligne

Copiez le dossier complet sur n'importe quel hébergement web statique (serveur interne, GitHub Pages, Netlify…). Aucun serveur applicatif ni base de données n'est nécessaire.
Le fichier s'ouvre aussi en double-cliquant sur `index.html`, mais certains navigateurs bloquent les Arcades hors connexion web : testez de préférence depuis un hébergement.

## Bon à savoir

- Les polices Poppins (titres) et Open Sans (textes) sont chargées depuis Google Fonts.
