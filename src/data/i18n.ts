export const languages = ["en", "fr"] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = "en";

const en = {
  handle: "@sidus",
  menuLabel: "Menu",
  menuOpen: "menu",
  menuClose: "close",
  nav: {
    home: "Home",
    about: "About me",
    projects: "Projects",
    contact: "Contact"
  },
  hero: {
    labels: ["Portfolio 2026", "Identity", "Textural identity", "Research", "Experimentation", "Shaped", "Graphic design", "Typography", "Visual research", "Art direction"],
    title: ["TEXTURAL", "IDENTITY"],
    subtitle: "textural identity",
    titleRight: ["RESEARCH", "& SHAPED"],
    subtitleRight: "research & shaped",
    role: "Graphic designer",
    art: "Art direction",
    edition: "(portfolio — 2026)",
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
  showcase: {
    swipe: "swipe",
    views: ["showcase", "list", "slider"],
    identity: ["(sidus)", "Portfolio of Thomas Perruchot: textural identity, raw images and bold type."],
    jobs: ["(roles)", "Graphic designer · Art director"],
    status: ["(status)", "MMI student, Montbéliard — looking for an internship"],
    label: "(view)",
    works: "works",
    talk: "let’s talk",
    hint: "scroll",
    open: "open",
    go: "go to project"
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
    last: "PERRUCHOT",
    lines: ["LET’S TALK", "WITH ME"],
    kicker: "(contact)",
    city: "Montbéliard"
  },
  loader: {
    name: "Thomas Perruchot",
    role: "Graphic designer",
    loading: "Loading",
    year: "2026"
  },
  notFound: {
    label: "(lost)",
    text: "This page doesn't exist, or not anymore. Maybe it was moved, maybe it never existed.",
    path: "(you asked for)",
    home: "back home",
    contact: "tell me"
  },
  artGallery: {
    name: "Art gallery",
    label: "(everything else)",
    text: "Drawings, paintings, pastels and digital pieces. Everything I make outside of graphic design, all in one place.",
    pieces: "pieces",
    all: "all",
    open: "open the folder",
    types: { drawing: "drawings", painting: "paintings", pastel: "pastels", digital: "digital" }
  },
  footer: {
    top: "top",
    thanks: "THANKS FOR SCROLLING",
    credit: "@sidus / Thomas Perruchot / 2026",
    giant: "©SIDUS—2026",
    role: "Graphic designer & MMI student",
    navigate: "Navigate",
    language: "Language",
    tagline: "Textural identity, art direction & bold typography",
    rights: "© 2026 Thomas Perruchot",
    back: "back to top ↑",
    info: "(info)",
    internship: "(internship)",
    internshipText: "Looking for an internship in graphic design and art direction.",
    internshipLink: "get in touch",
    legal: "legal notice",
    legalTitle: "Legal notice",
    legalHost: "(hosting)",
    legalPending: "hosting provider specified when the website goes live.",
    unlock: "info & contact"
  },
  work: {
    labels: ["(project)", "(by)", "(tools)", "(context)", "(vision)"],
    status: "Case study — poster, moodboard & dissection.",
    back: "back",
    stream: "stream",
    site: "visit the site",
    moodboard: "(moodboard)",
    dissection: "(dissection)",
    detail: "(detail",
    next: "next project",
    year: "(year)",
    figure: "fig."
  },
  projectsPage: {
    covers: "Covers",
    posters: "Posters",
    experiments: "Experiments",
    web: "Websites",
    all: "All",
    scroll: "scroll",
    kicker: "(projects)",
    works: "works",
    hint: "Drag them, throw them, filter them.",
    shuffle: "shuffle",
    filter: "(filter)",
    pile: "pile",
    index: "index",
    view: "(view)"
  },
  aboutPage: {
    title: "About me",
    words: ["(I’M", "THOMAS", "PERRUCHOT", "(GRAPHIC", "DESIGNER)"],
    presents: ["Thomas Perruchot", "presents sixteen years of images, 2010—2026"],
    tools: "(tools)",
    role: ["Graphic designer & MMI student", "Art direction, textural identity,", "visual experimentation & bold type"],
    quote: "( open for internships & collaborations )",
    path: "(path)",
    range: "*( 2010—2026 )",
    sections: ["(about me)", "(in numbers)", "(path)", "(tools)"],
    facts: ["(years of images)", "(works)", "(tools)", "(milestones)"],
    hover: "hover a line",
    photo: "(me — 2026)",
    contactLabel: "(contact)"
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
    error: "something went wrong, write to me directly by email",
    sending: "sending…",
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
  menuOpen: "menu",
  menuClose: "fermer",
  nav: {
    home: "Accueil",
    about: "À propos",
    projects: "Projets",
    contact: "Contact"
  },
  hero: {
    labels: ["Design graphique", "Identité", "Identité texturale", "Recherche", "Direction artistique", "Forme", "Recherche visuelle", "Typographie", "Expérimentation", "Portfolio 2026"],
    title: ["TEXTURAL", "IDENTITY"],
    subtitle: "identité texturale",
    titleRight: ["RESEARCH", "& SHAPED"],
    subtitleRight: "recherche & forme",
    role: "Graphiste",
    art: "Direction artistique",
    edition: "(portfolio — 2026)",
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
  showcase: {
    swipe: "glisser",
    views: ["showcase", "liste", "slider"],
    identity: ["(sidus)", "Portfolio de Thomas Perruchot : identité texturale, images brutes et typographie affirmée."],
    jobs: ["(métiers)", "Graphiste · Directeur artistique"],
    status: ["(statut)", "Étudiant MMI, Montbéliard — en recherche de stage"],
    label: "(vue)",
    works: "projets",
    talk: "on se parle",
    hint: "défiler",
    open: "ouvrir",
    go: "voir le projet"
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
    last: "PERRUCHOT",
    lines: ["PARLONS", "ENSEMBLE"],
    kicker: "(contact)",
    city: "Montbéliard"
  },
  loader: {
    name: "Thomas Perruchot",
    role: "Graphiste",
    loading: "Chargement",
    year: "2026"
  },
  notFound: {
    label: "(perdu)",
    text: "Cette page n'existe pas, ou plus. Elle a peut-être bougé, peut-être qu'elle n'a jamais existé.",
    path: "(tu cherchais)",
    home: "retour à l'accueil",
    contact: "me prévenir"
  },
  artGallery: {
    name: "Galerie artistique",
    label: "(tout le reste)",
    text: "Dessins, peintures, pastels et pièces digitales. Tout ce que je fais en dehors du graphisme, réuni au même endroit.",
    pieces: "œuvres",
    all: "tout",
    open: "ouvrir le dossier",
    types: { drawing: "dessins", painting: "peintures", pastel: "pastels", digital: "digital" }
  },
  footer: {
    top: "haut",
    thanks: "MERCI D'AVOIR DÉFILÉ",
    credit: "@sidus / Thomas Perruchot / 2026",
    giant: "©SIDUS—2026",
    role: "Graphiste & étudiant en MMI",
    navigate: "Naviguer",
    language: "Langue",
    tagline: "Identité texturale, direction artistique & typographie affirmée",
    rights: "© 2026 Thomas Perruchot",
    back: "retour en haut ↑",
    info: "(infos)",
    internship: "(stage)",
    internshipText: "Je cherche un stage en graphisme et direction artistique.",
    internshipLink: "me contacter",
    legal: "mentions légales",
    legalTitle: "Mentions légales",
    legalHost: "(hébergement)",
    legalPending: "hébergeur précisé à la mise en ligne du site.",
    unlock: "infos & contact"
  },
  work: {
    labels: ["(projet)", "(par)", "(outils)", "(contexte)", "(vision)"],
    status: "Étude de cas — affiche, moodboard & dissection.",
    back: "retour",
    stream: "écouter",
    site: "voir le site",
    moodboard: "(moodboard)",
    dissection: "(dissection)",
    detail: "(détail",
    next: "projet suivant",
    year: "(année)",
    figure: "fig."
  },
  projectsPage: {
    covers: "Covers",
    posters: "Affiches",
    experiments: "Expérimentations",
    web: "Sites web",
    all: "Tout",
    scroll: "défiler",
    kicker: "(projets)",
    works: "projets",
    hint: "Attrape-les, lance-les, filtre-les.",
    shuffle: "mélanger",
    filter: "(filtre)",
    pile: "pile",
    index: "index",
    view: "(vue)"
  },
  aboutPage: {
    title: "À propos",
    words: ["(JE SUIS", "THOMAS", "PERRUCHOT", "(GRAPHISTE", "À PARIS)"],
    presents: ["Thomas Perruchot", "présente seize ans d’images, 2010—2026"],
    tools: "(outils)",
    role: ["Graphiste & étudiant en MMI", "Direction artistique, identité texturale,", "expérimentation visuelle & typographie affirmée"],
    quote: "( ouvert aux stages & collaborations )",
    path: "(parcours)",
    range: "*( 2010—2026 )",
    sections: ["(à propos)", "(en chiffres)", "(parcours)", "(outils)"],
    facts: ["(années d’images)", "(projets)", "(outils)", "(étapes)"],
    hover: "survole une ligne",
    photo: "(moi — 2026)",
    contactLabel: "(contact)"
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
    error: "une erreur est survenue, écris-moi directement par mail",
    sending: "envoi…",
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
