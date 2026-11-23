# Espace démo GLPI : consignes pour Claude

Portail statique de démos interactives GLPI (tuiles Arcade), pour un public qui **ne connaît pas GLPI**. Publié avec GitHub Pages. Tout le texte visible est en français, simple et sans jargon.

## Règles de travail (prioritaires)

- **Ne jamais commiter, pousser, créer de branche ou de PR sans l'accord explicite de l'utilisateur.** Montrer d'abord le diff, proposer la commande `git`, attendre le « ok ».
- Toujours repartir de l'état actuel du dépôt (`git status`, `git log`) : l'utilisateur modifie aussi les fichiers lui-même.
- Changer le minimum : ne pas reformater ni réorganiser ce qui n'est pas demandé.
- Le dépôt peut afficher de faux fichiers « modifiés » (droits de fichiers) : `git config core.fileMode false`.

## Structure

| Fichier | Rôle |
|---|---|
| `demos.js` | **Contenu** : catégories, tuiles (`demos`), parcours, lexique, newsletter. C'est le fichier que l'utilisateur modifie. |
| `index.html` | Mise en page, styles (variables CSS en tête de `<style>`) et logique (script en fin de fichier). |
| `assets/img/` | Illustrations des tuiles, en `.webp`, environ 520 px de côté maximum, moins de 60 Ko. |
| `assets/brush/` | Coups de pinceau de la charte (`vague-bleu.svg` dans l'en-tête de l'accueil). |
| `assets/logo-glpi*.svg`, `favicon.*`, `apple-touch-icon.png` | Logos et icônes. La favicon (carré jaune, triangle lecture bleu foncé) est volontairement différente du logo GLPI. |
| `newsletter-mailpoet.css` | CSS à coller dans MailPoet (WordPress), pas utilisé par la page. |
| `LISEZMOI.md` | Mode d'emploi pour l'utilisateur. À tenir à jour si le fonctionnement change. |

## Contenu (`demos.js`)

- **Tuile** : `id` (minuscules, tirets, sans accent ; sert aussi de lien direct `#demo-<id>`), `arcade` (lien de partage Arcade ; vide = « Bientôt disponible »), `titre`, `categorie`, `duree`, `image`, `resume`, `etapes`, `mots`, `ratio` (optionnel).
- **Cohérence à vérifier après chaque changement** :
  - chaque `id` cité dans `parcours[].demos` existe dans `demos` ;
  - chaque mot de `mots` existe dans `lexique` ;
  - le lexique reste trié par ordre alphabétique.
- Si une tuile change d'`id`, mettre à jour les parcours.
- Contrôle rapide : `node -e "global.window={};require('./demos.js');console.log(Object.keys(window.GLPI_DEMOS))"`.

## Fonctionnalités de `index.html` à connaître

- **Lecteur** : `<dialog id="lecteur">`, avec l'Arcade en iframe (`demo.arcade.software/<id>?embed…`), bouton « Plein écran » libellé (`#btnPleinEcran`) et lien « Voir en plein écran » sous la démo, panneau d'infos à droite, Précédente / Suivante (qui suivent l'ordre du parcours quand un parcours est lancé).
- **Visite guidée interactive** : liste `const VISITE` (cible mise en lumière, bulle, étapes « clic » où le visiteur clique lui-même). Lancée par le bouton « Comment ça fonctionne ? » (`#btnAide`), le lien de l'accueil ou `#aide`.
- **Bouton d'aide animé** : petit mouvement 3 s après l'arrivée puis toutes les minutes (`ATTENTION_INTERVALLE`), arrêté dès que la visite a été lancée une fois (localStorage `glpi-visite-faite`). Respecter `prefers-reduced-motion`.
- **Newsletter** : iFrame MailPoet configurée dans `demos.js` → `newsletter.iframe` et `hauteur`.
- Pas de suivi de progression (supprimé à la demande : l'espace est en libre accès).

## Charte GLPI (obligatoire pour tout visuel)

- **Couleurs** : bleu foncé `#1E2B62`, bleu `#00A5F3`, bleu clair `#98E0FF`, bleu ciel `#DAF4FF`, beige `#F2F2EE`, blanc. Accents : jaune `#FFE02E` (rare : bouton principal, surlignage), violet `#A498FF`.
- Une couleur vive se pose toujours sur une teinte neutre (bleu foncé, beige, bleu ciel).
- **Associations interdites côte à côte** : violet + vert, orange + vert, violet + orange, jaune + vert, jaune + orange.
- **Polices** : Poppins (titres), Open Sans (textes).
- Illustrations et pinceaux uniquement issus du kit GLPI. Ne pas inventer de personnages ni de logos.
- La couleur ne porte jamais seule une information : toujours un texte ou une icône à côté.

## Rédaction

- Phrases courtes, voix active, vocabulaire du visiteur (« ticket » expliqué dans le lexique, pas d'acronymes non expliqués).
- Les étapes d'une tuile décrivent ce que montre réellement l'Arcade : demander à l'utilisateur en cas de doute.
- Typographie française : apostrophe `’` et guillemets « » dans le texte affiché.

## Vérifier

- Ouvrir `index.html` dans un navigateur (les iframes Arcade ne se chargent qu'en ligne ou sur un vrai serveur).
- Tester la visite guidée de bout en bout et l'affichage mobile (environ 390 px de large).
