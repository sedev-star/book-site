export type Language = "nl" | "fr";

export type StepContent = {
  id: string;
  title: string;
  description: string;
  mainImage: string;
  images: string[];
};

export type ProductLink = {
  title: string;
  description: string;
  href?: string;
  buttonLabel: string;
  type: "external" | "popup" | "coming-soon";
};

export type PageContent = {
  languageName: string;
  otherLanguageLabel: string;
  heroBadge: string;
  heroTitle: string;
  heroText: string;
  heroImage: string;
  heroImageAlt: string;
  navStory: string;
  navLinks: string;
  stepsTitle: string;
  stepsText: string;
  processTitle: string;
  processParagraphs: string[];
  linksTitle: string;
  linksText: string;
  productLinks: ProductLink[];
  popupTitle: string;
  popupSteps: string[];
  popupImages: string[];
  popupClose: string;
  galleryClose: string;
  galleryHint: string;
  footer: string;
};

export const amazonBookUrl = "https://www.amazon.nl/"; // Remplace par la vraie URL Amazon du livre.

export const rainbowPopupImages = [
  "/images/book1_rainbow_1.jpg",
  "/images/book1_rainbow_2.jpg",
];

export const stepImages = {
  brainstorming: {
    mainImage: "/images/brainstorming_1.jpg",
    images: [
      "/images/brainstorming_1.jpg",
      "/images/brainstorming_2.jpg",
      "/images/brainstorming_3.jpg",
      "/images/brainstorming_4.jpg",
    ],
  },
  writing: {
    mainImage: "/images/writing_2.jpg",
    images: [
      "/images/writing_2.jpg",
      "/images/writing_1.jpg",
      "/images/writing_3.jpg",
      "/images/writing_4.jpg",
      "/images/writing_5.jpg",
      "/images/book_writing_1.jpg",
      "/images/book_writing_2.jpg",
      "/images/book_writing_3.jpg",
    ],
  },
  bookCreation: {
    mainImage: "/images/book_creation_0.jpg",
    images: [
      "/images/book_creation_0.jpg",
      "/images/book_creation_2.jpg",
      "/images/book_creation_1.jpg",
      "/images/book_creation_3.jpg",
      "/images/book_creation_4.jpg",
    ],
  },
};

export const content: Record<Language, PageContent> = {
  nl: {
    languageName: "Nederlands",
    otherLanguageLabel: "Français",
    heroBadge: "Mijn allereerste boek",
    heroTitle: "Hoe ik als 6-jarige mijn eerste boek maakte",
    heroText:
      "Hallo, ik ben Anaïs. Op deze pagina leg ik uit hoe ik op het idee kwam, hoe ik het verhaal maakte en hoe mijn boek gepubliceerd werd.",
    heroImage: "/images/book1_photo.jpg",
    heroImageAlt: "Foto van het kinderboek met regenboog",
    navStory: "Ontdek het verhaal",
    navLinks: "Bekijk meer",
    stepsTitle: "Hoe ik mijn boek maakte",
    stepsText: "Dit zijn de belangrijkste stappen in het maken van mijn boek.",
    processTitle: "Hoe ik op het idee kwam",
    processParagraphs: [
      "Ik lees erg graag en nadat ik een boek uit de bibliotheek had gelezen dat ik niet zo leuk vond, wilde ik zelf mijn eigen verhaal schrijven en een boek maken.",
      "Als het regent en tegelijk de zon schijnt, kijk ik steeds of er een regenboog tevoorschijn komt. Daarom staan regenbogen centraal in mijn boek. En omdat ik erg veel van alle kleuren hou, moest mijn boek kleurrijk worden.",
      "Romi en Mira zijn genoemd naar de K-Pop Demon Hunters, mijn favoriete animatie die ik heb leren kennen door het liedje Golden. Tulpie is een naam die ik heb afgeleid van Derpy, de kat uit K-Pop Demon Hunters.",
      "Het boek 'Mira het regenboogpoesje' is voor kinderen vanaf 6 jaar.",
    ],
    linksTitle: "Het boek en de kleine extra’s",
    linksText:
      "Hier vind je nuttige links rond mijn boek en een leuke activiteit om thuis te proberen.",
    productLinks: [
      {
        title: "Schrijf een review van mijn boek op Amazon",
        description:
          "Vond je mijn boek leuk? Dan zou ik het superfijn vinden als je een review achterlaat op Amazon.",
        // href: amazonBookUrl,
        buttonLabel: "Naar Amazon",
        type: "coming-soon",
      },
      {
        title: "Maak thuis zelf een regenboog",
        description:
          "Ontdek hoe je met een zaklamp, een spiegeltje en een glas water zelf een regenboog kan maken.",
        buttonLabel: "Bekijk de uitleg",
        type: "popup",
      },
    ],
    popupTitle: "Hoe maak je thuis een kleine regenboog?",
    popupImages: rainbowPopupImages,
    popupSteps: [
      "Zoek een zaklamp, een klein spiegeltje en een kom.",
      "Vul de kom met water en leg het spiegeltje er schuin in.",
      "Ga naar een donkere kamer.",
      "Richt de zaklamp op het spiegeltje in het water en zorg dat het licht op een witte muur valt.",
      "Beweeg de zaklamp of kantel het spiegeltje tot je de regenboog op de muur ziet verschijnen.",
      "Vraag altijd hulp aan een volwassene als je water en elektrische spullen gebruikt.",
    ],
    popupClose: "Sluiten",
    galleryClose: "Galerij sluiten",
    galleryHint: "Klik op de foto om meer beelden van deze stap te zien.",
    footer: "Copyright 2026",
  },
  fr: {
    languageName: "Français",
    otherLanguageLabel: "Nederlands",
    heroBadge: "Mon tout premier livre",
    heroTitle: "Comment j’ai fait mon premier livre à 6 ans",
    heroText:
      "Salut, je m'appelle Anaïs. Sur cette page, j’explique comment j’ai eu l’idée, comment j’ai construit l’histoire et comment j’ai publié mon livre.",
    heroImage: "/images/book1_photo.jpg",
    heroImageAlt: "Photo du livre pour enfants avec arc-en-ciel",
    navStory: "Découvrir l’histoire",
    navLinks: "Voir les liens",
    stepsTitle: "Comment j’ai fait mon livre",
    stepsText: "Voici les étapes clés de la création de mon livre.",
    processTitle: "Comment j’ai eu l’idée",
    processParagraphs: [
      "J’aime beaucoup lire et après avoir lu un livre à la bibliothèque que je n’aimais pas trop, j’ai voulu écrire ma propre histoire et faire mon propre livre.",
      "Quand il pleut et que le soleil brille en même temps, je regarde toujours s’il y a un arc-en-ciel. C’est pour ça que les arcs-en-ciel sont au cœur de mon livre. Et comme j’aime vraiment toutes les couleurs, mon livre devait être coloré.",
      "Romi et Mira sont nommées d’après les K-Pop Demon Hunters, mon animation préférée que j’ai découverte grâce à la chanson Golden. Tulpie est un nom que j’ai inventé à partir de Derpy, le chat des K-Pop Demon Hunters.",
      "Le livre ‘Mira le petit chat arc-en-ciel’ est fait pour des enfants à partir de 6 ans.",
    ],
    linksTitle: "Le livre et les petits bonus",
    linksText:
      "Voici les liens utiles autour de mon livre et une petite activité à essayer à la maison.",
    productLinks: [
      {
        title: "Fais une review de mon livre sur Amazon",
        description:
          "Si tu as aimé mon livre, tu peux laisser un petit avis sur Amazon.",
        // href: amazonBookUrl,
        buttonLabel: "Aller sur Amazon",
        type: "coming-soon",
      },
      {
        title: "Comment faire un arc-en-ciel à la maison",
        description:
          "Découvre comment faire un arc-en-ciel avec une lampe de poche, un petit miroir et un bol d’eau.",
        buttonLabel: "Voir l’explication",
        type: "popup",
      },
    ],
    popupTitle: "Comment faire un petit arc-en-ciel à la maison ?",
    popupImages: rainbowPopupImages,
    popupSteps: [
      "Cherche une lampe de poche, un petit miroir et un bol.",
      "Remplis le bol d’eau et pose le miroir dedans en l’inclinant légèrement.",
      "Va dans une pièce sombre.",
      "Dirige la lampe de poche vers le miroir dans l’eau et assure-toi que la lumière tombe sur un mur blanc.",
      "Bouge la lampe de poche ou incline le miroir jusqu’à voir l’arc-en-ciel apparaître sur le mur.",
      "Demande toujours l’aide d’un adulte quand tu utilises de l’eau et des objets électriques.",
    ],
    popupClose: "Fermer",
    galleryClose: "Fermer la galerie",
    galleryHint: "Clique sur la photo pour voir plus d’images de cette étape.",
    footer: "Copyright 2026",
  },
};

export const steps: Record<Language, StepContent[]> = {
  nl: [
    {
      id: "brainstorming",
      title: "Brainstormen",
      description:
        "Ik leerde eerst wat een personage is en hoe een verhaal wordt opgebouwd. Ik dacht na over de personages: de namen, de figuren, de kleuren, alles tot in detail. Daarna schreef ik samen met mijn mama alle ideeën op post-its en dacht ik na over de verhaallijn.",
      ...stepImages.brainstorming,
    },
    {
      id: "writing",
      title: "Schrijven",
      description:
        "Stap voor stap bouwde ik mijn verhaal op. Ik las elke zin en ik zocht naar de juiste woorden. Daarna typte ik het hele verhaal zelf uit, letter per letter. De tekst op de enveloppe en het briefje voor Tulpie schreef ik helemaal zelf met de hand.",
      ...stepImages.writing,
    },
    {
      id: "bookCreation",
      title: "Het boek samenstellen",
      description:
        "Ik dacht na over de illustraties op elke pagina: de personages, de kleuren, de sfeer en de details. Mijn papa bracht alles tot leven. Het regenboogpoesje in het begin van het boek heb ik zelf getekend. Ik had ook het idee om onderaan elke pagina de vooruitgang te tonen zodat andere kindjes zelf kunnen zien hoe ver ze al zijn in het verhaal.",
      ...stepImages.bookCreation,
    },
  ],
  fr: [
    {
      id: "brainstorming",
      title: "Brainstorming",
      description:
        "J’ai d’abord appris ce qu’est un personnage et comment une histoire est construite. J’ai réfléchi aux personnages: les noms, les caractères, les couleurs, tout dans les détails. Ensuite, j’ai écrit toutes mes idées sur des post-its avec ma maman et j’ai réfléchi à l’histoire.",
      ...stepImages.brainstorming,
    },
    {
      id: "writing",
      title: "Écriture",
      description:
        "J’ai construit mon histoire étape par étape. J’ai relu chaque phrase et cherché les bons mots. Ensuite, j’ai tapé toute l’histoire moi-même, lettre par lettre. J'ai écrit entièrement à la main le texte sur l’enveloppe et la lettre pour Tulpie.",
      ...stepImages.writing,
    },
    {
      id: "bookCreation",
      title: "Composition du livre",
      description:
        "J’ai réfléchi aux illustrations sur chaque page: les personnages, les couleurs, l’ambiance et les détails. Mon papa leur a donné vie. J'ai dessiné moi-même le petit chat arc-en-ciel au début du livre. J’ai aussi eu l’idée de montrer la progression en bas de chaque page pour que d'autres enfants puissent voir où ils en sont dans l’histoire.",
      ...stepImages.bookCreation,
    },
  ],
};
