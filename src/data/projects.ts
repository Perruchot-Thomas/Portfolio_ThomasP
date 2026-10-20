import type { ImageMetadata } from "astro";
import type { Lang } from "./i18n";
import toughtPoster from "../assets/work/tought/poster.jpg";
import toughtMood from "../assets/work/tought/moodboard.jpg";
import toughtCut from "../assets/work/tought/dissection.png";
import corbeauPoster from "../assets/work/corbeau/poster.jpg";
import corbeauMood from "../assets/work/corbeau/moodboard.jpg";
import corbeauCut from "../assets/work/corbeau/dissection.png";
import urbanPoster from "../assets/work/urbanization/poster.jpg";
import urbanMood from "../assets/work/urbanization/moodboard.jpg";
import urbanCut from "../assets/work/urbanization/dissection.png";

type Localized = Record<Lang, string>;


export interface Project {
  slug: string;
  gallery?: string;
  name: string;
  title: string;
  by: string;
  tools: string;
  context: Localized;
  vision: Localized;
  poster: ImageMetadata;
  stream?: string;
  moodboard: { image: ImageMetadata; text: Localized };
  dissection: { image: ImageMetadata; blocks: Localized[] };
}

export const projects: Project[] = [
  {
    slug: "tought",
    name: "TOUGHT",
    gallery: "02-acab",
    title: "“TOUGHT”",
    by: "sidus",
    tools: "affinity",
    context: {
      en: "personal exploration / political statement",
      fr: "exploration personnelle / prise de position politique"
    },
    vision: {
      en: "a raw textural identity using street aesthetics to amplify a radical message.",
      fr: "une identité texturale brute qui puise dans l’esthétique de la rue pour amplifier un message radical."
    },
    poster: toughtPoster,
    moodboard: {
      image: toughtMood,
      text: {
        en: "i wanted the environment to feel immediately cold, raw, and urban, dominated by heavy grey tones. for me, it was essential to establish this visceral street atmosphere before even considering the final poster layout. this gritty background is not just a texture; it was specifically built to carry a message of revolt and a direct call to action. i wanted the message to be highly visual by placing direct references to popular revolt.",
        fr: "je voulais que l’environnement paraisse immédiatement froid, brut et urbain, dominé par des gris lourds. il était essentiel pour moi d’installer cette atmosphère de rue viscérale avant même de penser à la mise en page finale de l’affiche. ce fond granuleux n’est pas qu’une texture : il a été construit pour porter un message de révolte et un appel direct à l’action. je voulais un message très visuel, avec des références directes à la révolte populaire."
      }
    },
    dissection: {
      image: toughtCut,
      blocks: [
        {
          en: "“when words are not strong enough * actions are all we have left”.\n\ni placed this exact same sentence in the background, reversed, blurred, and distorted. by altering its position and breaking its legibility, i wanted to show that the text literally loses all its meaning. it is my way to visually prove that words alone are useless now.",
          fr: "“when words are not strong enough * actions are all we have left”.\n\nj’ai placé exactement la même phrase en arrière-plan, inversée, floutée et déformée. en modifiant sa position et en cassant sa lisibilité, je voulais montrer que le texte perd littéralement tout son sens. c’est ma façon de prouver visuellement que les mots seuls ne servent plus à rien."
        },
        {
          en: "the central title.\n\nfor the massive message in the middle, i embedded street tags, notably the word acab (1312). it accompanies the main idea: the need for physical protest. this street and urban aspect directly embodies popular action. the word “tought” itself is intentionally quite illegible, because i wanted to show that its true message is no longer found in the words.",
          fr: "le titre central.\n\npour le message massif au centre, j’ai intégré des tags de rue, notamment le mot acab (1312). il accompagne l’idée principale : la nécessité d’une contestation physique. cet aspect urbain incarne directement l’action populaire. le mot “tought” est volontairement peu lisible, car je voulais montrer que son vrai message ne se trouve plus dans les mots."
        },
        {
          en: "the grey matter.\n\nthe greyish background is primarily here to bring raw texture to the poster. i also used it to intentionally blur certain parts, like the main title, making it sink into the wall. these heavy grey tones define the urban atmosphere, directly echoing the street-level message of the piece.",
          fr: "la matière grise.\n\nle fond grisâtre est d’abord là pour apporter une texture brute à l’affiche. je m’en suis aussi servi pour flouter volontairement certaines parties, comme le titre principal, qui s’enfonce dans le mur. ces gris lourds définissent l’atmosphère urbaine, en écho direct au message de rue de la pièce."
        }
      ]
    }
  },
  {
    slug: "corbeau",
    name: "CORBEAU",
    title: "CORBEAU (GLIZ BORN)",
    by: "sidus",
    tools: "affinity",
    context: {
      en: "music industry / rap cover",
      fr: "industrie musicale / cover de rap"
    },
    vision: {
      en: "a dark, atmospheric composition merging human and animal silhouettes to reflect the raw identity of the track.",
      fr: "une composition sombre et atmosphérique qui fusionne silhouettes humaine et animale pour refléter l’identité brute du morceau."
    },
    poster: corbeauPoster,
    stream: "https://open.spotify.com/",
    moodboard: {
      image: corbeauMood,
      text: {
        en: "“corbeau” is the final track of “guilt”, a 10-track project carrying a core message: create and love yourself without guilt. the raven gives a physical form to gliz. while it usually brings bad omens, here it announces his raw arrival in the music world. to translate this, i built a moodboard around a dark, oppressive atmosphere: heavy skies, raw textures, and flying ravens.",
        fr: "“corbeau” est le dernier morceau de “guilt”, un projet de 10 titres porté par un message : créer et s’aimer sans culpabilité. le corbeau donne une forme physique à gliz. s’il annonce d’habitude le mauvais présage, ici il annonce son arrivée brute dans le monde de la musique. pour le traduire, j’ai construit un moodboard autour d’une atmosphère sombre et oppressante : ciels lourds, textures brutes et corbeaux en vol."
      }
    },
    dissection: {
      image: corbeauCut,
      blocks: [
        {
          en: "i chose to feature gliz in profile because it shows him looking toward a specific direction. here, it symbolizes his gaze fixed on his entry into the music industry. i used strict black and white to immediately establish the raw atmosphere of his mixtape and the exact dark vibe he wants to project.",
          fr: "j’ai choisi de montrer gliz de profil parce qu’il regarde dans une direction précise. ici, ce regard symbolise son entrée dans l’industrie musicale. j’ai utilisé un noir et blanc strict pour installer tout de suite l’atmosphère brute de sa mixtape et l’ambiance sombre qu’il veut dégager."
        },
        {
          en: "i designed the raven in profile as a pure vector silhouette, acting as a shadow that becomes an integral part of gliz. this visual choice comes from manga influences and the fact that a flying raven often just looks like a dark shape against the sky. in the composition, the bird looks toward the horizon in the exact same direction as the artist. going with a flat vector shadow was also a strict technical decision: my goal was to perfectly melt gliz and the raven together, forging them into one single entity.",
          fr: "j’ai dessiné le corbeau de profil comme une pure silhouette vectorielle, une ombre qui fait partie intégrante de gliz. ce choix vient d’influences manga et du fait qu’un corbeau en vol ressemble souvent à une simple forme sombre dans le ciel. dans la composition, l’oiseau regarde l’horizon exactement dans la même direction que l’artiste. l’ombre vectorielle en aplat était aussi un choix technique : je voulais fondre parfaitement gliz et le corbeau pour n’en faire qu’une seule entité."
        },
        {
          en: "the background is directly tied to the track’s themes, which speak heavily about storms and the sky. i built a dense, heavy environment, but i intentionally placed a subtle glow breaking through the clouds exactly where the raven and gliz are looking. this light creates a focal point, giving a clear direction and a glimmer of purpose within an otherwise oppressive atmosphere.",
          fr: "le fond est directement lié aux thèmes du morceau, qui parle beaucoup d’orage et de ciel. j’ai construit un environnement dense et lourd, mais j’ai placé volontairement une légère lueur qui perce les nuages exactement là où regardent le corbeau et gliz. cette lumière crée un point focal, une direction claire et une lueur d’espoir dans une atmosphère sinon oppressante."
        }
      ]
    }
  },
  {
    slug: "urbanization",
    name: "URBANIZATION",
    gallery: "07-desurbanisation",
    title: "URBANIZATION",
    by: "sidus",
    tools: "affinity",
    context: {
      en: "poster design / visual exploration",
      fr: "affiche / exploration visuelle"
    },
    vision: {
      en: "a graphic collision between a lush natural environment and the brutal intrusion of urban signage.",
      fr: "une collision graphique entre une nature luxuriante et l’intrusion brutale de la signalétique urbaine."
    },
    poster: urbanPoster,
    moodboard: {
      image: urbanMood,
      text: {
        en: "for the moodboard, i focused on the theme of urbanization, specifically looking at japan and its environmental struggles. nature protection versus concrete expansion is a massive issue there. to capture this tension, i leaned into an aesthetic heavily influenced by hayao miyazaki. i wanted to reflect his specific way of depicting the environment, showing the fragile beauty of nature being violently interrupted by human infrastructure.",
        fr: "pour le moodboard, je me suis concentré sur le thème de l’urbanisation, en regardant particulièrement le japon et ses luttes environnementales. protéger la nature face à l’expansion du béton y est un enjeu énorme. pour capter cette tension, je me suis appuyé sur une esthétique très influencée par hayao miyazaki. je voulais retrouver sa façon de représenter l’environnement : la beauté fragile de la nature, violemment interrompue par les infrastructures humaines."
      }
    },
    dissection: {
      image: urbanCut,
      blocks: [
        {
          en: "for the personal information on the poster, such as my name and the date, i decided to place the text vertically. this layout is a direct reference to traditional japanese writing. it physically embeds the japanese influences of the project straight into the typography and structure of the piece.",
          fr: "pour les informations personnelles de l’affiche, comme mon nom et la date, j’ai choisi de placer le texte à la verticale. cette mise en page fait directement référence à l’écriture japonaise traditionnelle. elle inscrit les influences japonaises du projet dans la typographie et la structure même de la pièce."
        },
        {
          en: "the poles featuring the stop sign and the red lights act as universal emblems of halting. i used them to create a double meaning: they represent either nature being forcibly stopped by concrete, or a direct call to stop urbanization altogether. by positioning these signs exactly on the border between the lush nature and the empty white background, they visually enforce a brutal, sudden stop to the landscape.\n\nthe intentional mix of japanese and english on the signage highlights that this environmental struggle is a global issue, not just an isolated one.",
          fr: "les poteaux avec le panneau stop et les feux rouges sont des emblèmes universels de l’arrêt. je m’en suis servi pour créer un double sens : la nature stoppée de force par le béton, ou un appel direct à arrêter l’urbanisation. placés exactement à la frontière entre la nature luxuriante et le fond blanc vide, ces panneaux imposent visuellement un arrêt brutal au paysage.\n\nle mélange volontaire de japonais et d’anglais sur la signalétique rappelle que cette lutte environnementale est un enjeu global, pas un cas isolé."
        },
        {
          en: "the lush nature is given an almost digital, timeless, and frozen aesthetic. i added these circular shapes like bubbles completely stopped in time. yet, even though they are physically frozen by the urban elements, they paradoxically bring a much more lively and dynamic feel to the atmosphere, breaking the rigid stillness of the signs.",
          fr: "la nature luxuriante prend une esthétique presque numérique, intemporelle et figée. j’ai ajouté ces formes circulaires comme des bulles arrêtées dans le temps. pourtant, même figées par les éléments urbains, elles apportent paradoxalement une sensation bien plus vivante et dynamique, qui casse l’immobilité rigide des panneaux."
        }
      ]
    }
  }
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

export const projectForGallery = (file: string) => projects.find((project) => project.gallery === file);
