# CREASTRA — Site vitrine bilingue

Site vitrine statique, sans framework ni étape de compilation. Il est conçu pour GitHub Pages et fonctionne sur ordinateur, tablette et mobile.

## Structure

```text
/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── creastra-logo.png
    ├── favicon.svg
    └── *.webp
```

## Publier sur GitHub Pages

1. Téléchargez et décompressez `creastra-site.zip`.
2. Ouvrez votre dépôt GitHub et placez **le contenu** du dossier directement à la racine du dépôt. `index.html`, `styles.css`, `script.js` et `assets/` doivent être côte à côte — ne placez pas le dossier complet à l'intérieur d'un sous-dossier.
3. Si le dépôt contient déjà un ancien `index.html`, remplacez-le par celui-ci.
4. Dans GitHub, ouvrez **Settings → Pages**.
5. Sous **Build and deployment**, choisissez **Deploy from a branch**, puis la branche principale (souvent `main`) et le dossier `/(root)`, puis enregistrez.
6. Attendez la fin du déploiement GitHub Pages et ouvrez l'URL affichée dans cette page de paramètres.

Aucun `npm install`, aucune commande de build et aucun serveur ne sont nécessaires.

## À personnaliser avant la mise en ligne

### 1. Activer le formulaire de contact

Dans `script.js`, tout en haut, remplacez :

```js
const CONTACT_EMAIL = "";
```

par votre adresse de réception réelle, par exemple :

```js
const CONTACT_EMAIL = "votre-adresse@votre-domaine.ma";
```

Le formulaire prépare un e-mail prérempli et ouvre l'application e-mail du visiteur. Il ne stocke pas les demandes et n'envoie rien vers un serveur. Pour recevoir les formulaires directement sans application e-mail chez le visiteur, il faudra relier un service de formulaire ou un backend.

### 2. Typographies

- Le français utilise **Sora**.
- Pour l'arabe, le site charge **Alexandria** depuis Google Fonts et place `Alexandra` en premier dans la pile de polices au cas où cette police serait installée localement. Le nom de la famille Google Fonts disponible est *Alexandria*. Si vous disposez d'un fichier précis nommé *Alexandra* (`.woff2` ou `.woff`), ajoutez-le dans `assets/fonts/` avec une déclaration `@font-face` dans `styles.css` pour l'utiliser chez tous les visiteurs.

Les deux familles Google Fonts nécessitent une connexion internet. Des polices de secours sont définies pour garder le site lisible si elles ne se chargent pas.

### 3. Projets et images

Les images fournies ont été optimisées en WebP pour accélérer le chargement. Les images et les textes des projets sont définis dans les cartes de `index.html`; les catégories, filtres et traductions françaises/arabees sont gérés par `script.js`.

## Fonctionnalités incluses

- Basculer français / arabe, avec direction RTL réelle et mémorisation de la langue choisie.
- Navigation mobile avec menu accessible.
- Filtrage des réalisations et aperçu en fenêtre modale.
- Formulaire de brief avec validation HTML.
- FAQ accordéon, liens d'appel à l'action et ancrages de navigation.
- Mise en page responsive, prise en charge de `prefers-reduced-motion`, balises SEO de base et images différées.

## Notes

Le formulaire doit être connecté à une adresse e-mail réelle avant la publication. Vérifiez également l'orthographe des textes, vos coordonnées et les autorisations d'utilisation des visuels avant d'ouvrir le site au public.
