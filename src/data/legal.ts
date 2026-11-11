import type { Lang } from "./i18n";

type Localized = Record<Lang, string>;

export const host = {
  name: "",
  address: "",
  url: ""
};

export const legalUpdated: Localized = {
  fr: "mis à jour le 11 novembre 2026",
  en: "updated on 11 november 2026"
};

export const legalSections: { label: Localized; text: Localized }[] = [
  {
    label: { fr: "(éditeur)", en: "(publisher)" },
    text: {
      fr: "ce site est édité à titre personnel et non commercial par thomas perruchot (sidus), graphiste et étudiant en MMI à montbéliard.\ncontact : sidus.sidus@yahoo.com",
      en: "this website is published on a personal, non-commercial basis by thomas perruchot (sidus), graphic designer and MMI student in montbéliard, france.\ncontact: sidus.sidus@yahoo.com"
    }
  },
  {
    label: { fr: "(publication)", en: "(publication)" },
    text: {
      fr: "directeur de la publication : thomas perruchot.",
      en: "publication director: thomas perruchot."
    }
  },
  {
    label: { fr: "(propriété intellectuelle)", en: "(intellectual property)" },
    text: {
      fr: "les visuels, textes, photographies et l’identité sidus présentés sur ce site sont la propriété de thomas perruchot, sauf mention contraire. toute reproduction, diffusion ou réutilisation, totale ou partielle, sans autorisation écrite est interdite.\nles projets réalisés pour des artistes ou des tiers restent également soumis à leurs droits.",
      en: "the visuals, texts, photographs and the sidus identity shown on this website belong to thomas perruchot, unless stated otherwise. any reproduction, distribution or reuse, in whole or in part, without written permission is forbidden.\nprojects made for artists or third parties also remain subject to their rights."
    }
  },
  {
    label: { fr: "(données personnelles)", en: "(personal data)" },
    text: {
      fr: "les messages envoyés avec le formulaire de contact (nom, email, message) sont transmis jusqu’à ma boîte mail par le service web3forms, sans être stockés sur ce site. ils servent uniquement à vous répondre et ne sont jamais cédés à des tiers.\nconformément au RGPD, vous pouvez demander l’accès, la correction ou la suppression de vos données à l’adresse ci-dessus, et saisir la CNIL (cnil.fr) en cas de litige.",
      en: "messages sent with the contact form (name, email, message) are delivered to my inbox by the web3forms service, without being stored on this website. they are only used to reply to you and are never shared with third parties.\nunder the GDPR, you can ask to access, correct or delete your data at the address above, and contact the CNIL (cnil.fr) in case of dispute."
    }
  },
  {
    label: { fr: "(cookies)", en: "(cookies)" },
    text: {
      fr: "aucun cookie ni outil de mesure d’audience. le site garde seulement dans votre navigateur la vue choisie sur l’accueil et l’état de l’animation d’entrée. ces informations ne quittent jamais votre appareil.",
      en: "no cookies and no analytics. the website only keeps in your browser the view chosen on the home page and the state of the intro animation. this information never leaves your device."
    }
  },
  {
    label: { fr: "(crédits)", en: "(credits)" },
    text: {
      fr: "design et développement : sidus.\ntypographie : IBM Plex Mono, sous licence SIL Open Font License.\nconstruit avec astro, gsap et lenis.",
      en: "design and development: sidus.\ntypeface: IBM Plex Mono, under the SIL Open Font License.\nbuilt with astro, gsap and lenis."
    }
  }
];
