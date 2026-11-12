/* =====================================================================
   GLPI — Démos interactives : FICHIER DE CONFIGURATION
   ---------------------------------------------------------------------
   C'est le SEUL fichier à modifier pour ajouter, retirer ou réordonner
   les démos Arcade. Aucune connaissance en code n'est nécessaire :
   modifiez le texte entre guillemets et gardez les virgules.

   AJOUTER UNE ARCADE À UN EMPLACEMENT EXISTANT
   1. Dans Arcade, cliquez sur « Share » et copiez le lien de partage
      (ex. https://app.arcade.software/share/Z44FPk9y8lMZ6tIbc7Pf).
   2. Collez-le dans le champ  arcade: ""  de la démo voulue.
      Le lien complet, le lien "demo.arcade.software/..." ou l'identifiant
      seul (Z44FPk9y8lMZ6tIbc7Pf) fonctionnent tous les trois.
   3. Enregistrez et rechargez la page. Tant que  arcade  est vide,
      la tuile affiche « Bientôt disponible ».

   AJOUTER UN NOUVEL EMPLACEMENT
   Copiez un bloc { ... } complet dans la liste "demos", collez-le où
   vous voulez (l'ordre de la liste = l'ordre d'affichage) et changez
   son  id  (unique, en minuscules et tirets, sans accent).

   CHAMPS D'UNE DÉMO
   id         identifiant unique, sert aussi de lien direct (#demo-<id>)
   arcade     lien de partage Arcade (vide = emplacement réservé)
   titre      titre affiché sur la tuile et dans le lecteur
   categorie  une des valeurs de "categories" ci-dessous
   duree      durée indicative affichée ("2 min")
   image      illustration de la tuile (dossier assets/img/)
   resume     une ou deux phrases, en langage simple
   etapes     ce que l'on voit dans la démo (liste à puces du lecteur)
   mots       termes GLPI expliqués dans le lecteur (doivent exister
              dans "lexique" plus bas)
   ratio      (optionnel) hauteur/largeur de l'Arcade en %, par défaut
              "56.25%" (16:9). Reprenez la valeur du code d'intégration
              Arcade (padding-bottom: calc(XX% + 41px)) si besoin.
   ===================================================================== */

window.GLPI_DEMOS = {

  categories: [
    { id: "premiers-pas",   label: "Premiers pas" },
    { id: "assistance",     label: "Assistance" },
    { id: "parc",           label: "Parc informatique" },
    { id: "administration", label: "Administration" }
  ],

  demos: [
    {
      id: "decouvrir-interface",
      arcade: "https://app.arcade.software/share/sI8bRiItjZ8bNKrn6KBM",
      titre: "Découvrir l'interface de GLPI",
      categorie: "premiers-pas",
      duree: "2 min",
      image: "assets/img/interface.webp",
      resume: "Faites le tour de l'écran d'accueil : le menu principal, la recherche, le tableau de bord et vos préférences.",
      etapes: ["Les grandes rubriques du menu", "La recherche globale", "Le tableau de bord d'accueil", "Vos préférences personnelles"],
      mots: ["Tableau de bord", "Entité"]
    },
    {
      id: "creer-ticket",
      arcade: "https://app.arcade.software/share/oEmhKao3Trge2qrCjErQ",
      titre: "Déclarer un incident avec un ticket",
      categorie: "assistance",
      duree: "2 min",
      image: "assets/img/ticket.webp",
      resume: "Un utilisateur signale une panne en quelques clics et suit l'avancement de sa demande.",
      etapes: ["Ouvrir le formulaire de création", "Décrire le problème et joindre une capture", "Envoyer et suivre le ticket"],
      mots: ["Ticket"]
    },
    {
      id: "traiter-ticket",
      arcade: "https://app.arcade.software/share/ecdCDZQl4ofNXPdpi5Mp",
      titre: "Prendre en charge et résoudre un ticket",
      categorie: "assistance",
      duree: "3 min",
      image: "assets/img/support.webp",
      resume: "Côté technicien : s'attribuer une demande, échanger avec l'utilisateur et clôturer avec une solution.",
      etapes: ["Retrouver les tickets qui vous sont attribués", "Ajouter un suivi et une tâche", "Apporter la solution"],
      mots: ["Ticket", "Groupe"]
    },
    {
      id: "base-connaissances",
      arcade: "https://app.arcade.software/share/RCBZMrEG6mMO5I1HK0lW",
      titre: "Partager une procédure dans la base de connaissances",
      categorie: "assistance",
      duree: "2 min",
      image: "assets/img/kb.webp",
      resume: "Rédigez un article une fois, et laissez les utilisateurs trouver la réponse sans ouvrir de ticket.",
      etapes: ["Créer un article", "Choisir qui peut le lire", "Le retrouver depuis un ticket"],
      mots: ["Base de connaissances"]
    },
    {
      id: "formulaires",
      arcade: "https://app.arcade.software/share/mJ3kIHE9KLVweSMofFEl",
      titre: "Guider les demandes avec un formulaire",
      categorie: "assistance",
      duree: "3 min",
      image: "assets/img/forms.webp",
      resume: "Posez les bonnes questions dès le départ : le formulaire crée le ticket complet à la place de l'utilisateur.",
      etapes: ["Construire les questions", "Publier le formulaire", "Voir le ticket généré"],
      mots: ["Formulaire", "Ticket"]
    },
    {
      id: "sla",
      arcade: "",
      titre: "Garantir les délais avec les SLA",
      categorie: "assistance",
      duree: "2 min",
      image: "assets/img/sla.webp",
      resume: "Fixez un délai de prise en charge et de résolution, GLPI le surveille et alerte avant le dépassement.",
      etapes: ["Définir un SLA", "L'appliquer aux tickets", "Suivre les échéances"],
      mots: ["SLA", "Ticket"]
    },
    {
      id: "ajouter-ordinateur",
      arcade: "",
      titre: "Ajouter un ordinateur au parc",
      categorie: "parc",
      duree: "2 min",
      image: "assets/img/ordinateur-ajout.webp",
      resume: "Enregistrez un poste, son utilisateur et ses logiciels pour savoir à tout moment qui utilise quoi.",
      etapes: ["Créer la fiche de l'ordinateur", "L'affecter à un utilisateur", "Consulter ses composants et logiciels"],
      mots: ["Actif"]
    },
    {
      id: "inventaire-automatique",
      arcade: "",
      titre: "Automatiser l'inventaire avec l'agent GLPI",
      categorie: "parc",
      duree: "3 min",
      image: "assets/img/agent-robot.webp",
      resume: "L'agent installé sur les postes remonte tout seul le matériel et les logiciels : fini les tableurs à jour à la main.",
      etapes: ["Ce que remonte l'agent", "Voir un poste inventorié", "Repérer les changements"],
      mots: ["Agent GLPI", "Actif"]
    },
    {
      id: "creer-utilisateur",
      arcade: "",
      titre: "Créer un utilisateur",
      categorie: "administration",
      duree: "2 min",
      image: "assets/img/utilisateur.webp",
      resume: "Ajoutez une personne à GLPI et donnez-lui accès à ce dont elle a besoin, ni plus ni moins.",
      etapes: ["Renseigner la fiche utilisateur", "Lui attribuer un profil", "Le rattacher à une entité"],
      mots: ["Profil", "Entité"]
    },
    {
      id: "affecter-profil-groupe",
      arcade: "https://app.arcade.software/share/Z44FPk9y8lMZ6tIbc7Pf",
      titre: "Affecter un profil à un groupe",
      categorie: "administration",
      duree: "2 min",
      image: "assets/img/groupe.webp",
      resume: "Donnez les mêmes droits à toute une équipe en une seule fois, au lieu de les régler personne par personne.",
      etapes: ["Ouvrir la fiche du groupe", "Choisir le profil à appliquer", "Vérifier les droits obtenus"],
      mots: ["Groupe", "Profil"]
    },
    {
      id: "entites",
      arcade: "",
      titre: "Organiser GLPI en entités",
      categorie: "administration",
      duree: "3 min",
      image: "assets/img/entites.webp",
      resume: "Séparez vos sites, filiales ou clients : chacun ne voit que ses tickets et son matériel.",
      etapes: ["Créer une entité", "Y rattacher des utilisateurs", "Passer d'une entité à l'autre"],
      mots: ["Entité", "Profil"]
    },
    {
      id: "tableau-de-bord",
      arcade: "",
      titre: "Piloter l'activité avec les tableaux de bord",
      categorie: "premiers-pas",
      duree: "2 min",
      image: "assets/img/dashboard.webp",
      resume: "Visualisez d'un coup d'œil le volume de tickets, les délais et l'état du parc.",
      etapes: ["Lire les indicateurs clés", "Filtrer par période ou entité", "Ajouter un graphique"],
      mots: ["Tableau de bord"]
    }
  ],

  /* Parcours guidés : listes d'id de démos jouées dans l'ordre. */
  parcours: [
    {
      titre: "Je découvre GLPI",
      pour: "Pour avoir une vue d'ensemble en 10 minutes.",
      demos: ["decouvrir-interface", "creer-ticket", "ajouter-ordinateur", "tableau-de-bord"]
    },
    {
      titre: "J'organise le support",
      pour: "Pour les responsables et techniciens du service d'assistance.",
      demos: ["creer-ticket", "traiter-ticket", "base-connaissances", "sla", "formulaires"]
    },
    {
      titre: "J'administre la plateforme",
      pour: "Pour celles et ceux qui paramètrent GLPI.",
      demos: ["creer-utilisateur", "affecter-profil-groupe", "entites", "inventaire-automatique"]
    }
  ],

  /* Petit lexique affiché en bas de page et dans le lecteur. */
  lexique: [
    { mot: "Actif", def: "Tout élément du parc suivi dans GLPI : ordinateur, écran, téléphone, imprimante, logiciel…" },
    { mot: "Agent GLPI", def: "Petit programme installé sur les postes, qui envoie automatiquement leur inventaire à GLPI." },
    { mot: "Base de connaissances", def: "Bibliothèque d'articles (procédures, FAQ) pour trouver une réponse sans ouvrir de ticket." },
    { mot: "Entité", def: "Une partie de l'organisation (site, filiale, client) dont les données et les droits sont cloisonnés." },
    { mot: "Formulaire", def: "Page de demande guidée qui pose les bonnes questions et crée le ticket automatiquement." },
    { mot: "Groupe", def: "Un ensemble d'utilisateurs, souvent une équipe ou un service, à qui l'on confie des tickets ou des droits." },
    { mot: "Profil", def: "Le jeu de droits qui définit ce qu'un utilisateur peut voir et faire (Self-Service, Technicien, Super-Admin…)." },
    { mot: "SLA", def: "Engagement de délai (prise en charge, résolution) que GLPI applique et surveille sur les tickets." },
    { mot: "Tableau de bord", def: "Écran de synthèse composé d'indicateurs et de graphiques sur l'activité et le parc." },
    { mot: "Ticket", def: "Une demande ou un incident déclaré par un utilisateur, suivi jusqu'à sa résolution." }
  ],

  /* Newsletter : formulaire MailPoet du site WordPress, en version iFrame.
     1. WordPress > MailPoet > Formulaires > ouvrir le formulaire.
     2. Panneau « Placement du formulaire » > « Shortcode et autres » >
        copier le code de la version iFrame.
     3. Le coller ci-dessous entre les guillemets simples de  iframe  (le code
        complet <iframe ...></iframe> ou seulement l'adresse https://...).
     4. hauteur : hauteur du formulaire en pixels. Augmentez-la si le bouton
        d'inscription est coupé, diminuez-la s'il reste du blanc en bas.
     Tant que  iframe  est vide, l'encart affiche un emplacement réservé. */
  newsletter: {
    iframe: '',
    hauteur: 520
  }
};
