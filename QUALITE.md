# Qualité web – sidus

Cette grille porte sur mon site : un portfolio très visuel, avec un carrousel 3D, beaucoup d'images, des animations GSAP, deux langues et un formulaire de contact. J'ai donc surtout contrôlé ce qui peut coincer dans ce cas précis : le poids des images, le contraste du gris de ma charte, la navigation sans souris, les deux langues pour le référencement et les données du formulaire.

Mesures faites le 16 novembre 2026, avant et après corrections.

## Outils utilisés

- **Lighthouse 12** (Chrome, simulation mobile) : performance, accessibilité, bonnes pratiques et référencement, sur l'accueil, une page projet, à propos, contact, galerie et mentions légales.
- **Validateur W3C** (validator.w3.org/nu) : validité du HTML.
- **Navigateur et clavier** : test à la touche Tab, contraste calculé à partir des couleurs réelles de la page, contenu du stockage du navigateur.
- **Mode téléphone du navigateur** : affichage et gestes tactiles.
- **curl** : codes de réponse, robots.txt, sitemap et balises dans le code de la page.

## Résultats Lighthouse

| Page | Performance avant → après | Poids avant → après | Accessibilité | Bonnes pratiques | Référencement |
| --- | --- | --- | --- | --- | --- |
| Accueil | 74 → 77 | 1 126 Ko → 809 Ko | 96 | 100 | 100 |
| Projet (Biche) | 81 → 88 | 925 Ko → 565 Ko | 96 | 100 | 100 |
| À propos | 73 → 88 | 1 263 Ko → 793 Ko | 96 | 100 | 100 |
| Contact | 100 | 100 Ko | 96 | 100 | 100 |
| Galerie | 97 | – | 96 | 100 | 100 |
| Mentions légales | 98 | 241 Ko | 96 | 100 | 100 |

## 1. Accessibilité

| Critère | Ce que j'ai vérifié et comment | Ce que j'ai corrigé |
| --- | --- | --- |
| Contraste du texte gris | Les intitulés entre parenthèses, compteurs et légendes utilisent le gris de ma charte. Lighthouse et le calcul dans le navigateur donnaient 3,4:1 pour `#8c8c8c` sur blanc, sous le minimum de 4,5:1. | J'ai foncé le gris en `#767676` : 4,54:1 sur blanc et 4,6:1 sur noir. La DA reste la même. Lighthouse signale encore un contraste faible, mais il mesure pendant le fondu d'entrée de la page. Une fois la page affichée, j'ai vérifié 4,54:1. |
| Navigation au clavier | J'ai parcouru l'accueil, le menu et le contact à la touche Tab. Le carrousel se pilote avec les flèches et Entrée, et le menu « Pull me » s'ouvre au clavier. Les liens n'avaient presque aucun contour visible. | J'ai ajouté un contour fin de la couleur du texte sur tout élément qui reçoit le focus clavier, et un soulignement plus épais sur les champs du formulaire. |
| Textes alternatifs | Toutes les images d'un projet avaient le même texte alternatif, le nom du projet. | Chaque image dit maintenant ce qu'elle montre : « Bouche étoile, moodboard », « Bouche étoile, détail 02 », etc. Les photos empilées de la page à propos restent en `alt=""`, car elles sont décoratives et le texte de la page dit déjà qui je suis. |
| Animations | Le site bouge beaucoup : intro, transition entre pages, carrousel, texte qui se brouille. J'ai vérifié qu'une option du système qui réduit les animations est respectée. | Rien à corriger : `prefers-reduced-motion` coupe l'intro, la transition et les effets dans 11 fichiers. |
| Langue et titres | Les attributs `lang="fr"` et `lang="en"`, et un seul `h1` par page. | Rien à corriger. |
| Zones tactiles | Sur téléphone, les boutons et les liens font au moins 44 px, et les effets de survol ne restent pas collés après un toucher. | Fait lors du travail sur la version téléphone. |
| Formulaire | Chaque champ a un label, un type adapté (`email`) et l'autocomplétion. | Rien à corriger. |

**Limite connue :** le texte d'exemple des champs du formulaire est en gris clair (`#bec2c8`). Il disparaît dès qu'on écrit et ne porte aucune information obligatoire, puisque les labels sont au-dessus.

## 2. Sobriété et performance

| Critère | Ce que j'ai vérifié et comment | Ce que j'ai corrigé |
| --- | --- | --- |
| Poids des images de projet | Lighthouse : les images étaient envoyées en 1 600 px à tout le monde, même sur téléphone. | Chaque image existe maintenant en 4 tailles (480, 800, 1 200 et 1 600 px), et le navigateur choisit selon l'écran. Une page projet est passée de 925 à 565 Ko. |
| Poids de l'accueil | Les 13 covers du carrousel faisaient 900 px de large pour un affichage d'environ 190 px. | Je suis passé à 600 px : de 1 126 à 809 Ko. |
| Poids de la page à propos | 12 photos en 900 px, pour un affichage de 16 % de la largeur de l'écran. | Je suis passé à 640 px : de 1 263 à 793 Ko. |
| Format des images | J'ai vérifié que toutes les images sont converties au moment de la construction du site. | Elles sont toutes en WebP, générées par Astro à partir de mes fichiers d'origine. |
| Polices | Une seule famille (IBM Plex Mono) en deux graisses, hébergée sur mon serveur, sans Google Fonts. | La police principale est préchargée. |
| JavaScript | J'ai regardé ce qui est chargé et le temps de blocage. | Le temps de blocage est de 0 ms partout. Je n'utilise que GSAP et Lenis. Les pages sont générées à l'avance (HTML statique), le serveur ne calcule rien à chaque visite. |
| Stabilité de l'affichage | CLS (décalage de mise en page) mesuré par Lighthouse. | 0 sur toutes les pages : les images ont leurs dimensions. |

**Limites connues :**
- Le serveur répond en HTTP/1.1. Lighthouse estime qu'HTTP/2 ferait gagner environ 0,5 s. Cela se règle dans la configuration du serveur de l'IUT, pas dans mon code.
- Le temps d'affichage du plus grand élément (LCP) de l'accueil reste long (environ 6 s en simulation mobile). Il est surtout dû à l'animation d'intro, que j'ai choisie pour la DA et qui ne se joue qu'une fois par visite.

## 3. Référencement

| Critère | Ce que j'ai vérifié et comment | Ce que j'ai corrigé |
| --- | --- | --- |
| robots.txt et sitemap | curl : les deux adresses renvoyaient une erreur 404. | J'ai ajouté `robots.txt` et `sitemap.xml`, générés automatiquement : 28 adresses, chaque page dans les deux langues. Un nouveau projet y apparaît tout seul. |
| Deux langues | Rien n'indiquait à Google que `/fr/about` et `/en/about` sont la même page. | J'ai ajouté une balise `canonical` et des liens `hreflang` (fr, en, x-default) sur chaque page. |
| Titres et descriptions | Toutes les pages avaient la même description, en français, même sur les pages anglaises. Accueil, à propos et contact avaient le même titre. | Chaque page a son titre et sa description, dans sa langue. Une page projet reprend sa phrase de vision. |
| Partage sur les réseaux | Un lien partagé sur LinkedIn ou Instagram n'avait ni image ni description. | J'ai ajouté les balises Open Graph : titre, description, et une image (la cover du projet, ou mon logo sidus pour les autres pages). |
| Page 404 | Elle ne doit pas apparaître dans les résultats de recherche. | J'ai ajouté `noindex`. |
| Validité du HTML | Validateur W3C sur l'accueil, une page projet et le contact. | Accueil et projet : 0 erreur. Contact : 1 erreur (un attribut `autocomplete` sur le champ caché anti-spam), que j'ai corrigée. |

## 4. Conformité juridique

| Critère | Ce que j'ai vérifié et comment | Ce que j'ai corrigé |
| --- | --- | --- |
| Mentions légales | J'ai vérifié que l'éditeur, le directeur de la publication, l'hébergeur et le contact y figurent (loi pour la confiance dans l'économie numérique). L'hébergeur manquait : la page affichait « précisé à la mise en ligne ». | J'ai ajouté l'hébergeur : l'IUT Nord Franche-Comté, qui fournit le serveur, SERVERD SAS pour l'hébergement physique (trouvé à partir de l'adresse IP du serveur) et Infomaniak pour le nom de domaine. |
| Données du formulaire (RGPD) | Où partent les données, si elles sont stockées, et quels droits a le visiteur. | Les mentions légales le disent : les messages passent par Web3Forms jusqu'à ma boîte mail, ne sont pas stockés sur le site, et le visiteur peut demander l'accès, la correction ou la suppression, ou saisir la CNIL. |
| Cookies | J'ai regardé dans le navigateur ce que le site enregistre vraiment : aucun cookie, seulement deux informations gardées le temps de la visite (l'état de l'intro et le nom de la page pour la transition). | Le texte parlait encore d'une « vue choisie sur l'accueil » qui n'existe plus. Je l'ai réécrit pour qu'il décrive ce qui est vraiment enregistré. Sans cookie ni statistiques, aucun bandeau de consentement n'est nécessaire. |
| Droits sur les contenus | Toutes les images sont de moi, sauf les projets faits pour des artistes. | Les mentions légales précisent la propriété de mes visuels et que les projets réalisés pour des tiers restent soumis à leurs droits. |
| Licence de la police | IBM Plex Mono est sous licence SIL Open Font License, qui autorise l'usage web. | Elle est créditée dans les mentions légales, avec Astro, GSAP et Lenis. |
