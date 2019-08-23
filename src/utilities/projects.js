import gloomhavenMobileView from './../assets/screenshots/gloomhaven-assist-mobile.PNG';
import gloomhavenLargeView from './../assets/screenshots/gloomhaven-assist-large-view.PNG';
import scheduleItMain from './../assets/screenshots/schedule-it-main.PNG';
import scheduleItEditting from './../assets/screenshots/schedule-it-editting.PNG';
import scheduleItCatalog from './../assets/screenshots/schedule-it-catalog.PNG';

const projects = [
  {
    title: 'Adventure Game',
    id: 'adventure-game',
    date: 'Spring 2017',
    images: [
      {
        src: 'https://raw.githubusercontent.com/AaronMelhaff/AdventureProgram/master/src/resources/screenshots/fighting-monsters.PNG',
        caption: 'Fighting a monster in the game.'
      },
      {
        src: 'https://raw.githubusercontent.com/AaronMelhaff/AdventureProgram/master/src/resources/screenshots/picking-a-character.PNG',
        caption: 'Picking a character at the start of the game.'
      },
      {
        src: 'https://raw.githubusercontent.com/AaronMelhaff/AdventureProgram/master/src/resources/screenshots/using-map.PNG',
        caption: 'Opening the game map. X is your current location.'
      },
    ],
    desc: 'This is an example of an text adventure game I wrote for one of my Java courses. The topic of the assignment was array traversals, so I made a game about traversing a 2d array and fighting monsters.',
    repository: 'https://github.com/AaronMelhaff/AdventureProgram',
    tags: ['java']
  },
  {
    title: 'Hunger Games',
    id: 'hunger-games',
    date: 'Spring 2017',
    desc: 'This was a program that I wrote as my final project for Java 2. I had a bunch of characters that would traverse a node graph. Whenever a character encountered another, they would battle. This would happen until there was only a survivor. At the end, you could look at the log and see all of the battles that occured.',
    repository: 'https://github.com/AaronMelhaff/HungerGames',
    tags: ['java', 'data-structures', 'file io']
  },
  {
    title: 'Web Crawler',
    id: 'web-crawler',
    date: 'Fall 2017',
    desc: 'I made this webcrawler for my Systems Programming class. It jumps from site to site using anchor tags.',
    repository: 'https://github.com/AaronMelhaff/WebCrawler',
    tags: ['java']
  },
  {
    title: 'Chat Program',
    id: 'chat-program',
    date: 'Fall 2017',
    desc: 'This was a small Java Swing app that allowed users to connect to a server and chat with each other.',
    repository: 'https://github.com/AaronMelhaff/ChatProgram',
    tags: ['java', 'sockets']
  },
  {
    title: 'Assassin Program',
    id: 'assassin-program',
    date: 'Spring 2017',
    desc: 'This was a program I made for my Java 2 course in order to demonstrate a circular linked list.',
    repository: 'https://github.com/AaronMelhaff/AssassinManager',
    tags: ['java', 'data-structures']
  },
  {
    title: 'Name Registry',
    id: 'name-registry',
    date: 'Spring 2017',
    desc: 'This is a basic program I wrote to demonstrate file IO with Java',
    repository: 'https://github.com/AaronMelhaff/NameRegistry',
    tags: ['java', 'file io']
  },
  {
    title: 'Note Taker',
    id: 'note-taker',
    date: 'Fall 2018',
    desc: 'I wrote this JavaFX program for my design patterns class. It allows users to take different kinds of notes.',
    repository: 'https://github.com/AaronMelhaff/NoteTaker',
    tags: ['java', 'design-patterns', 'java-fx']
  },
  {
    title: 'Paint Program',
    id: 'paint-program',
    date: 'Fall 2018',
    desc: 'I wrote this JavaFX program for my design patterns class. It works like MS Paint.',
    repository: 'https://github.com/AaronMelhaff/PaintProgram',
    tags: ['java', 'design-patterns', 'java-fx']
  },
  {
    title: 'My Portfolio',
    id: 'bootstrap-portfolio',
    date: 'Spring 2019',
    desc: 'This is my current rendition of my portfolio. I made it using React and Bootstrap.',
    repository: 'https://github.com/AaronMelhaff/Bootstrap-Portfolio',
    tags: ['javascript', 'react', 'web-development', 'bootstrap', 'front-end', 'sass']
  },
  {
    title: 'Gloomtility',
    id: 'gloomtility',
    date: 'Spring 2019',
    images: [
      {
        src: gloomhavenMobileView,
        caption: 'App in a mobile screen size.'
      },
      {
        src: gloomhavenLargeView,
        caption: 'App viewed in large window.'
      }
    ],
    desc: 'An interactive web-app I made with other students to create a mobile-friendly token management web app for the popular tabletop game Gloomhaven.  The tool uses a React/Redux web application interacting with a Spring Boot API, all hosted on AWS platform. ',
    tags: ['javascript', 'java','web-development', 'front-end', 'restful', 'api', 'json', 'postgresql', 'full-stack', 'aws', 'react', 'redux', 'spring', 'spring-boot', 'sass']
  },
  {
    title: 'Schedule-IT',
    id: 'schedule-it',
    date: 'Summer 2018',
    images: [
      {
        src: scheduleItMain,
        caption: 'Main page of the schedule.'
      },
      {
        src: scheduleItEditting,
        caption: 'Demonstration of content editting.'
      },
      {
        src: scheduleItCatalog,
        caption: 'Demonstration of catalog view.'
      }
    ],
    desc: 'An app I developed to assist instructors with class scheduling. The app replaces the previous method of manually filling out spreadsheets. Used a JavaScript/jQuery front end application styled with Bootstrap and SASS, and PHP with a MySQL database for the backend.',
    tags: ['javascript', 'jquery', 'web-development', 'front-end', 'sass', 'php', 'api', 'mysql', 'sql', 'full-stack', 'json', 'bootstrap', 'rest']
  }
];

export default projects;