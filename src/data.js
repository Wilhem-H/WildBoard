import logoSlack from "./assets/logoSlack.png";
import logoMeet from "./assets/logoMeet.png";
import logoGithub from "./assets/LogoGithub.png";
import logoDrive from "./assets/logoDrive.png";
import logoFigma from "./assets/logoFigma.png";
import logoTrello from "./assets/logoTrello.png";

const student = [
  {
    Name: "Nicolas W",
    mail: "wilhem.hafsa@outlook.fr",
    phone: "0618109927",
    github: "https://github.com/nimser",
    picture: "https://www.rts.ch/2018/10/02/10/53/9887001.image?mw=1280",
    linkedin: "",
  },
  {
    Name: "Cathy",
    mail: "wilhem.hafsa@outlook.fr",
    phone: "0618109927",
    github: "https://github.com/121019",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxm48yfV2hY_bCu74edFCBs-Giw45AlQ8nUA&usqp=CAU",
    linkedin: "",
  },
  {
    Name: "Alex",
    mail: "wilhem.hafsa@outlook.fr",
    phone: "0618109927",
    github: "https://github.com/alexdubrulle",
    picture: "https://m.media-amazon.com/images/I/61udo428pbL.jpg",
    linkedin: "",
  },
  {
    Name: "Waheb",
    mail: "wilhem.hafsa@outlook.fr",
    phone: "0618109927",
    github: "https://github.com/Waheb26",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRprhwAKuiHQSPXJ9ITbV9rG2g-NHDBVcJ7xA&usqp=CAU",
    linkedin: "https://www.linkedin.com/in/waheb-cheraifia-58a314269/",
  },
  {
    Name: "Nicolas R",
    mail: "wilhem.hafsa@outlook.fr",
    phone: "+33686537628",
    github: "https://github.com/TaupeHumide",
    picture:
      "https://ec56229aec51f1baff1d-185c3068e22352c56024573e929788ff.ssl.cf1.rackcdn.com/attachments/large/0/6/4/005335064.jpg",
    linkedin: "",
  },
  {
    Name: "Nils",
    mail: "wilhem.hafsa@outlook.fr",
    phone: "0618109927",
    github: "https://github.com/Stagy73",
    picture: "https://m.media-amazon.com/images/I/61I89ByVTXL.jpg",
    linkedin: "https://www.linkedin.com/in/nils-mehlhorn-51152823b",
  },
  {
    Name: "Thomas D",
    mail: "wilhem.hafsa@outlook.fr",
    phone: "0618109927",
    github: "https://github.com/ThomasD26",
    picture: "https://m.media-amazon.com/images/I/41gN2BoklqL.jpg",
    linkedin: "",
  },
  {
    Name: "Fabien",
    mail: "wilhem.hafsa@outlook.fr",
    phone: "0618109927",
    github: "https://github.com/fabienchbd",
    picture: "https://m.media-amazon.com/images/I/61FibcdkZmL.jpg",
    linkedin: "https://www.linkedin.com/in/fabien-c-012658b3",
  },
  {
    Name: "Thomas V",
    mail: "wilhem.hafsa@outlook.fr",
    phone: "0618109927",
    github: "https://github.com/Thomas-VWD",
    picture: "https://www.canalbd.net/img/couvpage/54/9782012245549_cg.jpg",
    linkedin: "https://www.linkedin.com/in/thomas-verwaerde-758a60131/",
  },
  {
    Name: "Laeticia",
    mail: "wilhem.hafsa@outlook.fr",
    phone: "0618109927",
    github: "https://github.com/Laetitia-gb",
    picture:
      "https://images2.medimops.eu/product/20e2e1/M02012248233-source.jpg",
    linkedin: "",
  },
  {
    Name: "Amaury",
    mail: "wilhem.hafsa@outlook.fr",
    phone: "0618109927",
    github: "https://github.com/AmauryClt",
    picture: "https://m.media-amazon.com/images/I/41jA9VxLV9L.jpg",
    linkedin: "https://www.linkedin.com/in/amaury-c-483030251",
  },
  {
    Name: "Julien",
    mail: "wilhem.hafsa@outlook.fr",
    phone: "0618109927",
    github: "https://github.com/julien-lad",
    picture: "https://m.media-amazon.com/images/I/41CVnDZLLbL.jpg",
    linkedin: "https://www.linkedin.com/in/jl26",
  },
  {
    Name: "Delphine",
    mail: "wilhem.hafsa@outlook.fr",
    phone: "0618109927",
    github: "https://github.com/Delphine2669",
    picture:
      "https://www.letelegramme.fr/images/2021/01/29/madame-invention-a-rejoint-la-grande-famille-des-monsieur_5508117.jpg",
    linkedin: "https://www.linkedin.com/in/delphine-thevenet-66520a130/",
  },
  {
    Name: "Wilhem",
    mail: "wilhem.hafsa@outlook.fr",
    phone: "0681019972",
    github: "https://github.com/Wilhem-H",
    picture:
      "https://www.hachette.fr/sites/default/files/images/livres/couv/9782017129936-001-T.jpeg",
    linkedin: "https://www.linkedin.com/in/wilhem-hafsa/",
  },
  {
    Name: "Bryan",
    mail: "wilhem.hafsa@outlook.fr",
    phone: "0618109927",
    github: "https://Plus-parmis-nous",
    picture: "https://m.media-amazon.com/images/I/41K17ZTSB5L.jpg",
    linkedin: "",
  },
  {
    Name: "Laurence",
    mail: "wilhem.hafsa@outlook.fr",
    phone: "0618109927",
    github: "https://Plus-parmis-nous",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjNgqQYnuAW-5xJfXxdMV8jVTmUv24bw3c1g&usqp=CAU",
    linkedin: "",
  },
];

const links = [
  {
    name: "Silent Teacher ",
    link: "https://silentteacher.toxicode.fr/",
    type: "Pratique / Exercices",
    category: "Algo",
    desc: "Interface web ludique pour vous aider à comprendre quelques bases JS/Algo.",
  },
  {
    name: "Scrimba",
    link: "https://scrimba.com/learn/learnreact/",
    type: "Cours alternatif",
    category: "React",
    desc: "Un cours bien construit (en anglais) avec de l'interactivité pour appliquer les concepts",
  },
  {
    name: "Re-size pixel",
    link: "https://www.resizepixel.com/fr/resize-image/",
    type: "Images et Vidéos",
    category: "CSS",
    desc: "pour redimensionner des photos et réduire la qualité",
  },
  {
    name: "Exercism",
    link: "https://exercism.org",
    type: "Pratique / Exercices",
    category: "JS",
    desc: "Des challenge JS avec une progression en difficulté, accès a des mentor pour review votre code gratuitement",
  },
  {
    name: "CodeWars",
    link: "https://codewars.com",
    type: "Pratique / Exercices",
    category: "JS",
    desc: "Plus de katas JS ",
  },
  {
    name: "Condingame",
    link: "https://www.codingame.com",
    type: "Pratique / Exercices",
    category: "JS",
    desc: "Plateforme de jeux algorithmiques aussi utilisée pour les tests techniques en entreprise",
  },
  {
    name: "Grafikart",
    link: "https://grafikart.fr/tutoriels",
    type: "Cours alternatif",
    category: "JS",
    desc: "énormement de cours vidéo différents",
  },
  {
    name: "Caniuse",
    link: "https://caniuse.com/",
    type: "Autres",
    category: "Autre",
    desc: "pour savoir si une fonctionnalité est gérée par les navigateurs",
  },
  {
    name: "Pexels",
    link: "https://www.pexels.com/fr-fr/",
    type: "Images et Vidéos",
    category: "UX/UI",
    desc: "images libre de droit/ banque d'images et photos gratuite",
  },
  {
    name: "Freepik",
    link: "https://fr.freepik.com/",
    type: "Images et Vidéos",
    category: "UX/UI",
    desc: "images libre de droit/ images vectorielles, psd et photos",
  },
  {
    name: "Unsplash",
    link: "https://unsplash.com/fr",
    type: "Images et Vidéos",
    category: "UX/UI",
    desc: "images libre de droit",
  },
  {
    name: "Logo ipsum",
    link: "https://logoipsum.com/",
    type: "Conception UI",
    category: "UI / UX",
    desc: "faire un mockup de logo",
  },
  {
    name: "React",
    link: "https://react.gg/ ",
    type: "Resource interactive",
    category: "React",
    desc: "Un site interactif qui présente brièvement React, d'une manière intéressante",
  },
  {
    name: "Github storybook JS",
    link: "https://github.com/storybookjs/storybook",
    type: "Outil de dev",
    category: "React",
    desc: "Un outil pour créer votre propre bibliothèque de composants de manière à pouvoir les réutiliser d'un projet à l'autre",
  },
  {
    name: "Wattenberger",
    link: "https://wattenberger.com/blog/react-hooks",
    type: "Article",
    category: "React",
    desc: "Un article intéressant sur les Hooks React, qui compare l'utilisation en mode traditionel (dans une classe) et avec les composants fonctionels.",
  },
  {
    name: "Tympanus",
    link: "https://tympanus.net/codrops/",
    type: "Resource interactive",
    category: "CSS",
    desc: "Examples d'animations avancées CSS/JS, avec explications, lien vers les dépots Gits etc...",
  },
  {
    name: "Anthony gorski promesses et async/await",
    link: "https://anthony-gorski.notion.site/Asynchrone-9c3cc619bd4c42559019f927b7d3fe3f",
    type: "Article",
    category: "JS",
    desc: "Article d'un autre enseignant de la Wild sur le thème des promesses (objet Promise) et async/await",
  },
  {
    name: " En.rakko",
    link: "https://en.rakko.tools/tools/9/",
    type: "Outil de dev",
    category: "UI/UX",
    desc: "Permet de tester comment seraient affichées les métadonnées opengraph d'une URL donnée",
  },
  {
    name: "Opengraph",
    link: "https://www.opengraph.io/",
    type: "API",
    category: "UI/UX",
    desc: "API pour obtenir les métadonnées opengraph d'une URL donnée",
  },
  {
    name: "embed.rocks",
    link: "https://embed.rocks/docs",
    type: "API",
    category: "JS",
    desc: "API pour obtenir les métadonnées opengraph d'une URL donnée",
  },
  {
    name: "React icons",
    link: "https://react-icons.github.io/react-icons/ ",
    type: "Images et Vidéos",
    category: "React",
    desc: "De quoi inclure des incones dans vos applis React",
  },
  {
    name: "Futurpedia",
    link: "https://www.futurepedia.io/",
    type: "Site Répertoire",
    category: "Autre",
    desc: "Un site qui repertorie plein d'outils IA plus ou moins utiles, gratuites ou payantes ",
  },
  {
    name: "The Odin Project",
    link: "https://www.theodinproject.com/",
    type: "Cours alternatif",
    category: "Autre",
    desc: "Un  cours qui reprend tout ce que lon a vu et fait: avec des nouvelles quests pour par refaire les memes",
  },
  {
    name: "Dailydev",
    link: "https://app.daily.dev/popular",
    type: "Veille techno",
    category: "Veille techno",
    desc: "site d'infos sur le code et la tech, veille technologique en anglais",
  },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
  //   { name: "", link: "", type: "", category: "", desc: "" },
];

const tools = [
  {
    name: "Odyssey",
    link: "https://odyssey.wildcodeschool.com/",
    img: "https://www.wildcodeschool.com/assets/wildcodeschool-logo-meta-image-f6f2f7f52b82bfc419f031f6a989020a8b094d7a4e6676ab6f0dff0b0f470da9.png",
  },
  {
    name: "Slack",
    link: "https://app.slack.com/client/T6SG2QGG2/C04QMQPS0MA/thread/C04QMQPS0MA-1682777525.981379",
    img: logoSlack,
  },
  {
    name: "Google meet",
    link: "https://meet.google.com/qki-zcjy-wsf?pli=1",
    img: logoMeet,
  },
  { name: "Github", link: "https://github.com/", img: logoGithub },
  {
    name: "Google Drive",
    link: "https://drive.google.com/drive/folders/14tXIpvlHcrW_U5f_yyGYSQ6EGb2s47D3",
    img: logoDrive,
  },
  { name: "Figma", link: "https://www.figma.com/fr/", img: logoFigma },
  { name: "Trello", link: "https://trello.com/fr", img: logoTrello },
];

export default student;
export { tools, links };
