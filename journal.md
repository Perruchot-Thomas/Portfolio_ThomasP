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
