import {
  playerTextureLeveled,
  playerImage,
  catImage,
  workerImage,
  roboImage,
} from './assets';

type Event = {
  text: string;
  image: string;
  onClick?: {
    text: string;
    clickHandler: () => void;
  };
};

type EventConfiguration = {
  id: string;
  row: [number, number];
  col: [number, number];
  eventHandler: (playerReference: { canFly: boolean }) => void;
  onLeave: () => void;
};

type PageActions = {
  setEvent: (event: Event) => void;
  clearEvent: () => void;
  openTab: (tab: string) => void;
};

type GameActions = {
  levelUp: (gameObjects: any) => void;
  enableControls: (gameObjects: any) => void;
  disableControls: (gameObjects: any) => void;
};

type Actions = {
  page: PageActions;
  game: GameActions;
};

type EventsConfig = (params: any) => EventConfiguration[];
type GetEventsConfig = (actions: Actions) => EventsConfig;

const getEventConfig: GetEventsConfig = ({ game, page }) => (gameObjects) => [
  {
    id: 'initialEvent',
    row: [41, 41],
    col: [5, 9],
    eventHandler: (playerRef) =>
      page.setEvent({
        text: 'Whoo... What is this place?',
        image: (() => (playerRef.canFly ? roboImage : playerImage))(),
      }),
    onLeave: page.clearEvent,
  },
  {
    id: 'makeArchitectsGreatAgain',
    row: [41, 41],
    col: [14, 27],
    eventHandler: (playerRef) =>
      page.setEvent({
        text:
          'I think that someone has told me that architects make great developers.',
        image: (() => (playerRef.canFly ? roboImage : playerImage))(),
        onClick: {
          text: 'About',
          clickHandler: () => page.openTab('about'),
        },
      }),
    onLeave: page.clearEvent,
  },
  {
    id: 'moveUp',
    row: [41, 41],
    col: [35, 39],
    eventHandler: () =>
      page.setEvent({
        text: 'You should try climbing up.',
        image: workerImage,
      }),
    onLeave: page.clearEvent,
  },
  {
    id: 'webPortfolio',
    row: [35, 35],
    col: [35, 38],
    eventHandler: (playerRef) =>
      page.setEvent({
        text: 'Hmmm... Not too bad! I think that I should come back later.',
        image: (() => (playerRef.canFly ? roboImage : playerImage))(),
        onClick: {
          text: 'Portfolio',
          clickHandler: () => page.openTab('skills'),
        },
      }),
    onLeave: page.clearEvent,
  },
  {
    id: 'gitRedirect',
    row: [35, 35],
    col: [40, 45],
    eventHandler: (playerRef) =>
      page.setEvent({
        text:
          '"In case of fire - git add -A, git commit -m "FIRE!", git push origin HEAD --force"',
        image: (() => (playerRef.canFly ? roboImage : playerImage))(),
        onClick: {
          text: 'Github',
          clickHandler: () => {
            window.open('https://github.com/lkatkus', '_blank');
          },
        },
      }),
    onLeave: page.clearEvent,
  },
  {
    id: 'miscPortfolio',
    row: [35, 35],
    col: [47, 50],
    eventHandler: (playerRef) =>
      page.setEvent({
        text:
          'Autocad, Archicad, 3DS MAX, Photoshop, Illustrator, Nikon, Aperture, Bokeh and etc. Lots of fancy words, huh?',
        image: (() => (playerRef.canFly ? roboImage : playerImage))(),
        onClick: {
          text: 'Other',
          clickHandler: () => page.openTab('other'),
        },
      }),
    onLeave: page.clearEvent,
  },
  {
    id: 'catSpeak',
    row: [33, 33],
    col: [13, 24],
    eventHandler: () => page.setEvent({ text: 'Meow!', image: catImage }),
    onLeave: page.clearEvent,
  },
  {
    id: 'randomJoke',
    row: [24, 24],
    col: [25, 45],
    eventHandler: (playerRef) =>
      page.setEvent({
        text: (() => {
          const jokes = [
            'Why arent koalas actual bears?... They dont meet the koalafications.',
            'How do trees get online?... They just log in.',
            'Why did the computer show up at work late?... It had a hard drive.',
            'Why was the cell phone wearing glasses?... Because it lost its contacts.',
            'What do you call a cow with a twitch?... Beef jerky.',
            'What do you call an alligator with a vest?... An investigator.',
            'I tried to sue the airport for misplacing my luggage... I lost my case.',
            'A girl once told me that she wanted to see my python... I only knew javascript.',
            'What do you call a dog that does magic tricks?... A labracadabrador.',
            'Two windmills are standing in a field and one asks the other, “What kind of music do you like?”... The other says “I’m a big metal fan.”',
            'My girlfriend and I often laugh about how competitive we are… But I laugh more.',
            'My friend asked me to help him round up his 37 sheep... I said "40".',
          ];

          return jokes[Math.floor(Math.random() * jokes.length)];
        })(),
        image: (() => (playerRef.canFly ? roboImage : playerImage))(),
      }),
    onLeave: page.clearEvent,
  },
  {
    id: 'randomJoke',
    row: [19, 19],
    col: [19, 23],
    eventHandler: (playerRef) =>
      page.setEvent({
        text: 'I can see my house, from here!',
        image: (() => (playerRef.canFly ? roboImage : playerImage))(),
      }),
    onLeave: page.clearEvent,
  },
  {
    id: 'initialEvent',
    row: [5, 6],
    col: [10, 13],
    eventHandler: (playerRef) => {
      if (playerRef.canFly) {
        page.setEvent({
          text:
            '01010100 01101000 01100001 01101110 01101011 00100000 01111001 01101111 01110101 00100000 01100110 01101111 01110010 00100000 01110110 01101001 01110011 01101001 01110100 01101001 01101110 01100111 00100000 01101101 01111001 00100000 01110111 01100101 01100010 01110011 01101001 01110100 01100101 00100001',
          image: roboImage,
          onClick: {
            text: 'Huh?',
            clickHandler: () => page.openTab('contacts'),
          },
        });
      } else {
        page.setEvent({
          text:
            'That thing looks interesting...? It seems to be REACTing to something.',
          image: playerImage,
          onClick: {
            text: 'Touch the strange thing',
            clickHandler: () => {
              game.levelUp(gameObjects);
              game.disableControls(gameObjects);

              page.setEvent({
                text:
                  'What is this new power, that i feel?! Virtual DOM, Hooks, Redux, GraphQL, Node!',
                image: roboImage,
                onClick: {
                  text: 'Try out this new power!',
                  clickHandler: () => {
                    game.enableControls(gameObjects);

                    page.clearEvent();
                  },
                },
              });
            },
          },
        });
      }
    },
    onLeave: page.clearEvent,
  },
];

const GAME_EVENTS = {
  levelUp: ({ player }) =>
    player.levelUp(playerTextureLeveled, {
      tileCols: 3,
      canFly: true,
      speedX: 12,
      speedY: 12,
    }),
  enableControls: ({ player }) => player.enableControls(),
  disableControls: ({ player }) => player.disableControls(),
};

export default (
  openTab: (tab: string) => void,
  setEvent: (event: Event) => void
): EventsConfig => {
  return getEventConfig({
    game: GAME_EVENTS,
    page: {
      openTab,
      setEvent,
      clearEvent: () => setEvent(null),
    },
  });
};
