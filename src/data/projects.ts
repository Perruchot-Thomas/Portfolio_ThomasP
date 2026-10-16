import type { Lang } from "./i18n";

type Localized = Record<Lang, string>;

export interface ProjectImage {
  src?: string;
  alt: string;
}

export interface DissectionBlock {
  text: Localized;
  image?: ProjectImage;
}

export interface Project {
  slug: string;
  title: string;
  by: string;
  tools: string;
  context: Localized;
  vision: Localized;
  poster: ProjectImage;
  moodboard: {
    text: Localized;
    images: ProjectImage[];
  };
  dissection: DissectionBlock[];
}

const pending: Localized = {
  en: "content coming soon.",
  fr: "contenu à venir."
};

export const projects: Project[] = [
  {
    slug: "tought",
    title: "\"TOUGHT\"",
    by: "sidus",
    tools: "affinity",
    context: {
      en: "personal exploration / political statement",
      fr: "exploration personnelle / prise de position politique"
    },
    vision: {
      en: "a raw textural identity using street aesthetics to amplify a radical message.",
      fr: "une identité texturale brute puisant dans l'esthétique de la rue pour amplifier un message radical."
    },
    poster: { alt: "Tought poster" },
    moodboard: {
      text: {
        en: "i wanted the environment to feel immediately cold, raw, and urban, dominated by heavy grey tones. for me, it was essential to establish this street atmosphere before even considering the final poster layout. this gritty background is not just a texture; it was specifically built to carry a message of revolt and a direct call to action. i wanted the message to be highly visual by placing direct references to popular revolt.",
        fr: "je voulais que l'environnement paraisse immédiatement froid, brut et urbain, dominé par des gris lourds. il était essentiel pour moi d'établir cette atmosphère de rue avant même de penser à la mise en page finale de l'affiche. ce fond brut n'est pas qu'une texture; il a été pensé pour porter un message de révolte et un appel direct à l'action. je voulais un message très visuel, en plaçant des références directes à la révolte populaire."
      },
      images: [
        { alt: "Moodboard graffiti wall" },
        { alt: "Moodboard concrete texture" },
        { alt: "Moodboard 1312 tag" },
        { alt: "Moodboard blurred grey" },
        { alt: "Moodboard mirrored title" }
      ]
    },
    dissection: [
      {
        text: {
          en: "\"when words are not strong enough * actions are all we have left\".\n\ni placed this exact same sentence in the background, reversed, blurred, and distorted. by altering its position and breaking its legibility, i wanted to show that the text literally loses all its meaning. it is my way to visually prove that words alone are useless now.",
          fr: "\"when words are not strong enough * actions are all we have left\".\n\nj'ai placé exactement la même phrase en arrière-plan, inversée, floutée et déformée. en altérant sa position et en brisant sa lisibilité, je voulais montrer que le texte perd littéralement tout son sens. c'est ma façon de prouver visuellement que les mots seuls sont désormais inutiles."
        },
        image: { alt: "Tought background sentence" }
      },
      {
        text: {
          en: "the central title.\n\nfor the massive message in the middle, i embedded street tags, notably the word acab(1312). it accompanies the main idea: the need for physical protest. this street and urban aspect directly embodies popular action. the word \"tought\" itself is intentionally quite illegible, because i wanted to show that its true message is no longer found in the words.",
          fr: "le titre central.\n\npour le message massif au centre, j'ai intégré des tags de rue, notamment le mot acab(1312). il accompagne l'idée principale: la nécessité de la protestation physique. cet aspect urbain incarne directement l'action populaire. le mot \"tought\" lui-même est volontairement peu lisible, car je voulais montrer que son vrai message ne se trouve plus dans les mots."
        },
        image: { alt: "Tought central title" }
      },
      {
        text: {
          en: "the grey matter.\n\nthe greyish background is primarily here to bring raw texture to the poster. i also used it to intentionally blur certain parts, like the main title, making it sink into the wall. these heavy grey tones define the urban atmosphere, directly echoing the street-level message of the piece.",
          fr: "la matière grise.\n\nle fond grisâtre est avant tout là pour apporter une texture brute à l'affiche. je l'ai aussi utilisé pour flouter volontairement certaines parties, comme le titre principal, qui s'enfonce dans le mur. ces gris lourds définissent l'atmosphère urbaine, en écho direct au message de rue de l'œuvre."
        },
        image: { alt: "Tought grey texture" }
      }
    ]
  },
  {
    slug: "corbeau",
    title: "\"CORBEAU\"",
    by: "sidus",
    tools: "photoshop",
    context: pending,
    vision: pending,
    poster: { alt: "Corbeau poster" },
    moodboard: {
      text: pending,
      images: [{ alt: "Corbeau moodboard 1" }, { alt: "Corbeau moodboard 2" }, { alt: "Corbeau moodboard 3" }]
    },
    dissection: [
      { text: pending, image: { alt: "Corbeau detail 1" } },
      { text: pending, image: { alt: "Corbeau detail 2" } }
    ]
  },
  {
    slug: "urbanization",
    title: "\"URBANIZATION\"",
    by: "sidus",
    tools: "photoshop",
    context: pending,
    vision: pending,
    poster: { alt: "Urbanization poster" },
    moodboard: {
      text: pending,
      images: [{ alt: "Urbanization moodboard 1" }, { alt: "Urbanization moodboard 2" }, { alt: "Urbanization moodboard 3" }]
    },
    dissection: [
      { text: pending, image: { alt: "Urbanization detail 1" } },
      { text: pending, image: { alt: "Urbanization detail 2" } }
    ]
  }
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
