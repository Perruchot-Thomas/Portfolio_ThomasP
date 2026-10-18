export const languages = ["en", "fr"] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = "en";

const en = {
  handle: "@sidus",
  menuLabel: "Menu",
  nav: {
    home: "Home",
    about: "About me",
    projects: "Projects",
    contact: "Contact"
  },
  hero: {
    labels: ["Research", "Art direction", "Textural identity", "Shaped", "Typography", "Experimentation", "Graphic design", "Identity", "Visual research", "Portfolio 2026"],
    title: ["TEXTURAL", "IDENTITY"],
    subtitle: "textural identity",
    titleRight: ["RESEARCH", "& SHAPED"],
    subtitleRight: "research & shaped",
    role: "Graphic designer",
    art: "Art Direction",
    roleLeft: "Graphic Designer - (",
    roleRight: ") -  Art Direction",
    scroll: "scroll"
  },
  intro: {
    im: "I'M",
    name: "THOMAS PERRUCHOT",
    lines: [
      "A GRAPHIC DESIGNER AND MMI STUDENT",
      "WITH A FOCUS ON ART DIRECTION,",
      "TEXTURAL IDENTITY,",
      "VISUAL EXPERIMENTATION,",
      "AND BOLD TYPOGRAPHY."
    ],
    tools: ["Affinity", "Figma", "Photoshop", "Cavalery"]
  },
  projects: {
    blurb: "how i build my projects, from first sketch to final texture and beyond.",
    name: "Thomas Perruchot",
    role: ", Graphic Designer and MMI student",
    focus: "My work focuses on art direction, textural identity, visual experimentation and bold typography.",
    tools: ["Affinity", "Photoshop", "Cavalery", "Figma"],
    open: "I'm open for internships and collaborations.",
    go: "go to my page",
    archives: "Archives",
    examples: "Some project examples",
    methodA: "Each project begins with research,",
    methodB: "then takes shape through textural identity, visual experimentation and bold typography, always guided by art direction."
  },
  strip: {
    title: "ALL MY PROJECTS",
    more: "MORE PROJECTS",
    word: "projects",
    method: "Each project begins with research, then takes shape through textural identity, visual experimentation and bold typography, always guided by art direction."
  },
  cta: {
    title: "LET’S TALK",
    text: "Open for internships & collaborations.",
    intro: "Got a project, an idea or just want to say hi? Write me a few words.",
    go: "go to contact page",
    button: "Contact me",
    emailLabel: "Email",
    socialLabel: "Elsewhere",
    first: "THOMAS",
    last: "PERRUCHOT"
  },
  loader: {
    name: "Thomas Perruchot",
    role: "Graphic designer",
    loading: "Loading",
    year: "2026"
  },
  footer: {
    top: "top",
    thanks: "THANKS FOR SCROLLING",
    credit: "@sidus / Thomas Perruchot / 2026"
  },
  projectsPage: {
    covers: "Covers",
    posters: "Posters",
    all: "All",
    scroll: "scroll"
  },
  about: {
    title: "ABOUT",
    bioGroups: [
      ["THOMAS PERRUCHOT,", "GRAPHIC DESIGNER", "AND MMI STUDENT."],
      ["MY WORK|FOCUSES", "ON ART|DIRECTION,", "TEXTURAL IDENTITY,"],
      ["VISUAL", "EXPERIMENTATION", "AND BOLD", "TYPOGRAPHY."],
      ["I'M OPEN FOR", "INTERNSHIPS AND", "COLLABORATIONS."]
    ],
    bio: "Thomas Perruchot, graphic designer and MMI student. My work focuses on art direction, textural identity, visual experimentation and bold typography. I'm open for internships and collaborations.",
    toolsLabel: "Tools:",
    pathLabel: "Path",
    hint: "Drag any of the images around to customize your viewing experience",
    skills: [
      { label: "DRAWING", year: "2010" },
      { label: "PEN TABLET", year: "2018" },
      { label: "FIRST COLLAB", year: "2023" },
      { label: "T-SHIRT DESIGN", year: "2023" },
      { label: "PHOTOSHOP", year: "2024" },
      { label: "MMI DEGREE", year: "2026" }
    ]
  },
  contact: {
    title: "CONTACT",
    status: "Open for work",
    statement: ["OPEN FOR", "INTERNSHIPS &", "COLLABORATIONS."],
    copyright: "Thomas Perruchot ©2026",
    me: "me",
    email: "[your email]",
    name: "[your name]",
    message: "[your message]",
    send: "send",
    sent: "message sent",
    error: "something went wrong",
    or: "or",
    not: "not",
    lines: ["CON—", "TA", "CT."],
    kicker: "(contact)",
    intro: "If you have a project, an internship or a collaboration in mind, or just want to say hi, leave me a few words here. I read everything and answer as soon as I can.",
    forLabel: "(what for?)",
    forItems: ["Internships", "Collaborations", "Freelance projects", "Art direction", "Just saying hi"],
    notLabel: "(not for)",
    notItems: ["Spam", "Endless revisions", "Comic Sans"],
    nameLabel: "(who are you?)",
    emailLabel: "(how do I reach you?)",
    messageLabel: "(what's on your mind?)",
    namePlaceholder: "[ Your name ]",
    emailPlaceholder: "[ Your email ]",
    messagePlaceholder: "[ Your message ]",
    opening: "your mail app is opening…",
    subject: "Hello from your portfolio"
  },
  project: {
    labels: ["PROJECT", "BY", "TOOLS", "CONTEXT", "VISION"],
    back: "BACK",
    moodboard: "MOODBOARD",
    dissection: "DISSECTION",
    scroll: "scroll"
  }
};

const fr: typeof en = {
  handle: "@sidus",
  menuLabel: "Menu",
  nav: {
    home: "Accueil",
    about: "À propos",
    projects: "Projets",
    contact: "Contact"
  },
  hero: {
    labels: ["Recherche", "Direction artistique", "Identité texturale", "Forme", "Typographie", "Expérimentation", "Design graphique", "Identité", "Recherche visuelle", "Portfolio 2026"],
    title: ["TEXTURAL", "IDENTITY"],
    subtitle: "identité texturale",
    titleRight: ["RESEARCH", "& SHAPED"],
    subtitleRight: "recherche & forme",
    role: "Graphiste",
    art: "Direction artistique",
    roleLeft: "Graphiste - (",
    roleRight: ") -  Direction artistique",
    scroll: "défiler"
  },
  intro: {
    im: "JE SUIS",
    name: "THOMAS PERRUCHOT",
    lines: [
      "UN GRAPHISTE ET ÉTUDIANT EN MMI",
      "AXÉ SUR LA DIRECTION ARTISTIQUE,",
      "L'IDENTITÉ TEXTURALE,",
      "L'EXPÉRIMENTATION VISUELLE,",
      "ET LA TYPOGRAPHIE AUDACIEUSE."
    ],
    tools: ["Affinity", "Figma", "Photoshop", "Cavalery"]
  },
  projects: {
    blurb: "comment je construis mes projets, du premier croquis à la texture finale, et au-delà.",
    name: "Thomas Perruchot",
    role: ", graphiste et étudiant en MMI",
    focus: "Mon travail se concentre sur la direction artistique, l'identité texturale, l'expérimentation visuelle et la typographie affirmée.",
    tools: ["Affinity", "Photoshop", "Cavalery", "Figma"],
    open: "Je suis ouvert aux stages et aux collaborations.",
    go: "voir ma page",
    archives: "Archives",
    examples: "Quelques exemples de projets",
    methodA: "Chaque projet commence par la recherche,",
    methodB: "puis prend forme à travers l'identité texturale, l'expérimentation visuelle et la typographie affirmée, toujours guidée par la direction artistique."
  },
  strip: {
    title: "TOUS MES PROJETS",
    more: "PLUS DE PROJETS",
    word: "projets",
    method: "Chaque projet commence par la recherche, puis prend forme grâce à l'identité texturale, l'expérimentation visuelle et la typographie affirmée, toujours guidé par la direction artistique."
  },
  cta: {
    title: "PARLONS",
    text: "Ouvert aux stages et collaborations.",
    intro: "Un projet, une idée ou juste envie de dire bonjour ? Écris-moi quelques mots.",
    go: "aller à la page contact",
    button: "Me contacter",
    emailLabel: "Email",
    socialLabel: "Ailleurs",
    first: "THOMAS",
    last: "PERRUCHOT"
  },
  loader: {
    name: "Thomas Perruchot",
    role: "Graphiste",
    loading: "Chargement",
    year: "2026"
  },
  footer: {
    top: "haut",
    thanks: "MERCI D'AVOIR DÉFILÉ",
    credit: "@sidus / Thomas Perruchot / 2026"
  },
  projectsPage: {
    covers: "Covers",
    posters: "Affiches",
    all: "Tout",
    scroll: "défiler"
  },
  about: {
    title: "À PROPOS",
    bioGroups: [
      ["THOMAS PERRUCHOT,", "GRAPHISTE ET", "ÉTUDIANT EN MMI."],
      ["MON TRAVAIL|PORTE", "SUR LA|DIRECTION", "ARTISTIQUE,"],
      ["L'IDENTITÉ TEXTURALE,", "L'EXPÉRIMENTATION", "VISUELLE ET LA", "TYPOGRAPHIE AFFIRMÉE."],
      ["JE SUIS OUVERT", "AUX STAGES ET", "COLLABORATIONS."]
    ],
    bio: "Thomas Perruchot, graphiste et étudiant MMI. Mon travail se concentre sur la direction artistique, l'identité texturale, l'expérimentation visuelle et la typographie affirmée. Je suis ouvert aux stages et aux collaborations.",
    toolsLabel: "Outils :",
    pathLabel: "Parcours",
    hint: "Déplace les images pour personnaliser ton expérience",
    skills: [
      { label: "DESSIN", year: "2010" },
      { label: "TABLETTE GRAPHIQUE", year: "2018" },
      { label: "PREMIÈRE COLLAB", year: "2023" },
      { label: "CRÉATION DE T-SHIRT", year: "2023" },
      { label: "PHOTOSHOP", year: "2024" },
      { label: "DIPLÔME MMI", year: "2026" }
    ]
  },
  contact: {
    title: "CONTACT",
    status: "Disponible",
    statement: ["OUVERT AUX", "STAGES &", "COLLABORATIONS."],
    copyright: "Thomas Perruchot ©2026",
    me: "moi",
    email: "[ton email]",
    name: "[ton nom]",
    message: "[ton message]",
    send: "envoyer",
    sent: "message envoyé",
    error: "une erreur est survenue",
    or: "ou",
    not: "non",
    lines: ["CON—", "TA", "CT."],
    kicker: "(contact)",
    intro: "Si tu as un projet, un stage ou une collaboration en tête, ou juste envie de dire bonjour, laisse-moi quelques mots ici. Je lis tout et je réponds dès que possible.",
    forLabel: "(pour quoi ?)",
    forItems: ["Stages", "Collaborations", "Projets freelance", "Direction artistique", "Juste dire bonjour"],
    notLabel: "(pas pour)",
    notItems: ["Le spam", "Les retouches sans fin", "Comic Sans"],
    nameLabel: "(qui es-tu ?)",
    emailLabel: "(comment te répondre ?)",
    messageLabel: "(qu'as-tu en tête ?)",
    namePlaceholder: "[ Ton nom ]",
    emailPlaceholder: "[ Ton email ]",
    messagePlaceholder: "[ Ton message ]",
    opening: "ton application mail s'ouvre…",
    subject: "Bonjour depuis ton portfolio"
  },
  project: {
    labels: ["PROJET", "PAR", "OUTILS", "CONTEXTE", "VISION"],
    back: "RETOUR",
    moodboard: "MOODBOARD",
    dissection: "DISSECTION",
    scroll: "défiler"
  }
};

export const ui: Record<Lang, typeof en> = { en, fr };
