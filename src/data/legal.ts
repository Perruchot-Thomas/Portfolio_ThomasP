import type { Lang } from "./i18n";

type Localized = Record<Lang, string>;

export const host: Record<Lang, { name: string; address: string; url: string }> = {
  fr: {
    name: "serveur mis à disposition par l’IUT Nord Franche-Comté (université Marie et Louis Pasteur), département MMI, 4 place Tharradin, 25200 Montbéliard, france.",
    address: "hébergement physique : SERVERD SAS, 10 rue de Penthièvre, 75008 Paris, france.",
    url: "nom de domaine : Infomaniak Network SA, rue Eugène-Marziano 25, 1227 Genève, suisse."
  },
  en: {
    name: "server provided by the IUT Nord Franche-Comté (université Marie et Louis Pasteur), MMI department, 4 place Tharradin, 25200 Montbéliard, france.",
    address: "physical hosting: SERVERD SAS, 10 rue de Penthièvre, 75008 Paris, france.",
    url: "domain name: Infomaniak Network SA, rue Eugène-Marziano 25, 1227 Geneva, switzerland."
  }
};

export const legalUpdated: Localized = {
  fr: "mis à jour le 16 novembre 2026",
  en: "updated on 16 november 2026"
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
      fr: "aucun cookie ni outil de mesure d’audience. le site garde seulement, le temps de la visite, l’état de l’animation d’entrée et le nom de la page vers laquelle vous allez, pour la transition. ces informations restent dans votre navigateur et disparaissent quand vous fermez l’onglet.",
      en: "no cookies and no analytics. for the length of your visit, the website only keeps the state of the intro animation and the name of the page you are going to, for the transition. this information stays in your browser and is erased when you close the tab.",
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
