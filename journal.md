# Journal de bord – Portfolio

## État actuel

Je suis parti sur une direction artistique différente de ma maquette d'origine. Je refais donc toute la maquette, et je reconstruis en parallèle la page d'accueil en code. Cette phase me sert aussi à tester les librairies d'animation avant de figer les choix techniques.

## Stack

- Astro 7 (site statique, routes `/en` et `/fr`)
- Tailwind CSS 4 (tokens de design dans `global.css`)
- GSAP 3 (ScrollTrigger, Draggable, Inertia, ScrambleText)
- Lenis (défilement fluide synchronisé avec ScrollTrigger)
- Bun comme gestionnaire de paquets

## Librairies testées

- **GSAP + ScrollTrigger** : épinglage de la section About, pixellisation progressive de la photo liée au scroll.
- **GSAP Draggable + Inertia** : images du hero déplaçables avec inertie et parallaxe de profondeur.
- **GSAP ScrambleText** : effet de brouillage sur le @sidus du header et le loader.
- **GSAP quickTo / delayedCall** : curseur personnalisé et défilement automatique des photos de la section Projets.
- **Lenis** : défilement fluide, branché sur le ticker de GSAP.
- **CSS** : `mix-blend-mode: difference` (curseur, header, images du hero), clip-path, container queries, texte vertical.

## Avancement de la page d'accueil

- [x] Header, menu déroulant en verre depuis le haut, bascule EN/FR
- [x] Loader d'intro
- [x] Hero : lettrage vectoriel issu de la maquette, 10 images déplaçables en mélange inversé
- [x] About : colonne photo épinglée avec pixellisation progressive, ABOUT vertical géant, bord déchiré, texte biographique élargi jusqu'à la photo
- [x] Projets : écran unique avec cadre orange, PROJECTS en haut et en bas, photos de projets attachées au curseur qui défilent automatiquement sans transition
- [ ] Pages About, Projets et Contact (encore vides)
- [ ] Maquette Figma refaite en entier
- [ ] Contenu final des projets

## Règles que je me fixe

- Deux styles de texte seulement, tous deux en Roboto : petit en casse normale, grand en majuscules
- Animations légères, pas de librairie lourde

## Mise à jour du 10 novembre 2026 — nouvelle structure

J'ai modifié toute la structure de ma maquette et du site. La direction artistique reste la même (noir, blanc et gris, petit texte en casse normale et grand texte en majuscules, crochets pour les actions, parenthèses pour les intitulés, vectoriel déchiré noir). Ce qui change, c'est la manière d'aller sur les informations : je veux que tout soit trouvé clairement et vite, sans avoir à chercher dans de longues pages.

### Ce qui a changé dans la façon de naviguer

- **Accueil** : la page d'accueil devient un seul écran fixe avec un carrousel de mes 12 projets, inspiré d'avea.studio. La molette fait tourner les projets au lieu de faire défiler la page. Trois vues des mêmes projets : [ showcase ] (anneau en 3D avec élan et inclinaison selon la vitesse), [ liste ] (noms à gauche, images au centre) et [ slider ] (bande horizontale). Les images gardent leur format d'origine et sont centrées sur leur milieu. Un clic sur le projet au centre ouvre sa page.
- **Projets** : seulement les filtres en haut (Tout, Affiches, Covers, Expérimentations). Deux vues : [ pile ], les images posées et déplaçables à la souris, et [ index ], une liste avec un aperçu de l'image qui suit le curseur.
- **Pages projets** (tought, corbeau, urbanization) : même mise en page que la page contact. Grand titre, infos rangées en colonnes (projet, par, outils, contexte, vision), affiche, puis moodboard et dissection.
- **About** : quatre parties avec chacune sa disposition : présentation avec mes photos qui défilent, chiffres (années, projets, outils, étapes), parcours en lignes qui passent au noir au survol avec un vectoriel qui se dessine, outils en très grand. Des bandeaux qui défilent font le lien entre les parties.
- **Contact** : formulaire visible en entier sans scroller.
- **Transitions** : entre chaque page, le vectoriel déchiré monte avec le nom de la page entre crochets au centre, puis repart par le haut. Depuis une zone noire, la transition est blanche.
- **Intro** : compteur 000 → 100 % en très grand au premier chargement.
- **Menu** : le menu « Pull me » en verre reste le même sur toutes les pages.

### Typographie et texte

- Passage de Roboto à **IBM Plex Mono** sur tout le site.
- Typos plus petites (texte courant à 14 px, grands titres réduits d'environ 30 %) et moins de texte en général : j'ai retiré les phrases qui se répétaient d'une page à l'autre.

### Inspirations et outils

- Sites étudiés : Obscura Studio, Kalinsky, Nexola et avea.studio.
- Création d'un skill qui copie le code d'un site public dans `inspirations/` et en fait une fiche d'analyse, pour comprendre comment un site est construit avant de m'en inspirer (le dossier n'est pas mis en ligne avec le portfolio).
- Maquette Figma refaite en entier sur la page « Site v2 » : accueil, projets, about, contact, menu et les trois pages projets. Elle ne reflète pas encore le nouveau carrousel d'accueil.

### Avancement

- [x] Pages About, Projets, Contact et pages projets
- [x] Transitions entre les pages et compteur d'intro
- [x] Nouvelle page d'accueil avec carrousel en trois vues
- [x] Maquette Figma « Site v2 »
- [ ] Reporter le carrousel d'accueil, l'IBM Plex Mono et les nouvelles tailles dans Figma
- [ ] Contenu final des autres projets
