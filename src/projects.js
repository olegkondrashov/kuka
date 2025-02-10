// Importiere die Bilder direkt, damit der Bundler die Pfade auflöst
import imgSprachcafe from './assets/sprachcafe-bg.webp';
import imgComputer from './assets/computer.jpg';
import imgDeutsch from './assets/deutsch/deutsch3.jpg';
import imgNachhilfe from './assets/nachhilfe.webp';
import imgBasteln from './assets/basteln.jpg';
import imgDance from './assets/dance.jpg';

const projects = [
  {
    id: 1,
    img: imgSprachcafe,
    title: 'Sprachcafe',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ullam maxime...',
    link: '/sprachcafe'
  },
  {
    id: 2,
    img: imgComputer,
    title: 'Computer für Alle',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ullam maxime...',
    link: '/computer-fuer-alle'
  },
  {
    id: 3,
    img: imgDeutsch,
    title: 'Deutschkurse',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ullam maxime...',
    link: '/deutschkurse'
  },
  {
    id: 4,
    img: imgNachhilfe,
    title: 'Lernförderung',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ullam maxime...',
    link: '/learning-page'
  },
  {
    id: 5,
    img: imgBasteln,
    title: 'Bastelwerkstatt',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ullam maxime...',
    link: '/bastelwerkstatt'
  },
  {
    id: 6,
    img: imgDance,
    title: 'Dance-Academy',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ullam maxime...',
    link: '/dance-academy'
  },
  {
    id: 7,
    img: imgNachhilfe,
    title: 'Lernförderung',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ullam maxime...',
    link: '/learning-page'
  },
  {
    id: 8,
    img: imgComputer,
    title: 'Computer für Alle',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ullam maxime...',
    link: '/computer-fuer-alle'
  }
];

export default projects;
