import PlayerTextureLeveled from './assets/player-tile-sheet-leveled.png';
import playerImage from './assets/animation-player.gif';
import catImage from './assets/animation-cat.gif';
import workerImage from './assets/animation-worker.gif';
import roboImage from './assets/animation-robo.gif';

const updateTextBox = ({ text, image, shouldUpdate }, siteAction) => () => {
  // const textBoxWrapper = document.getElementById('textBoxWrapper');
  const textBox = document.getElementById('textBox');
  // const imageBox = document.getElementById('textBoxImage');
  // const textBoxButton = document.getElementById('textBoxButton');

  if (textBoxWrapper.className !== 'open' || shouldUpdate) {
    // textBoxWrapper.className = 'open';
    textBox.innerHTML = text;
    // imageBox.src = image;

    // if (siteAction) {
    //   textBoxButton.classList.add('visible');
    //   textBoxButton.innerHTML = siteAction.name;
    //   textBoxButton.onclick = siteAction.callback;
    // } else {
    //   textBoxButton.classList.remove('visible');
    // }
  }
};

const GAME_EVENTS = {
  levelUp: ({ player }) =>
    player.levelUp(PlayerTextureLeveled, {
      tileCols: 3,
      canFly: true,
      speedX: 20,
      speedY: 20,
    }),
  enableControls: ({ player }) => player.enableControls(),
  disableControls: ({ player }) => player.disableControls(),
};

const getEventConfig = ({ game, page }) => (gameObjects) => [
  {
    id: 'initialEvent',
    row: [41, 41],
    col: [5, 9],
    eventHandler: () =>
      page.setEvent({
        text: 'Whoo... What is this place?',
        image: playerImage,
      }),
    onLeave: page.clearEvent,
  },
  {
    id: 'makeArchitectsGreatAgain',
    row: [41, 41],
    col: [14, 27],
    eventHandler: () =>
      page.setEvent({
        text:
          'I think that someone has told me that architects make great developers.',
        image: playerImage,
        onClick: {
          name: 'About',
          callback: () => page.openTab('contentAbout'),
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
    col: [35, 39],
    eventHandler: () =>
      page.setEvent({
        text: 'Hmmm... Not too bad! I think that I should come back later.',
        image: playerImage,
        onClick: {
          name: 'Portfolio',
          callback: () => page.openTab('contentPortfolio'),
        },
      }),
    onLeave: page.clearEvent,
  },
  {
    id: 'gitRedirect',
    row: [35, 35],
    col: [40, 45],
    eventHandler: () =>
      page.setEvent({
        text:
          '"In case of fire - git add -A, git commit -m "FIRE!", git push origin HEAD --force"',
        image: playerImage,
        onClick: {
          name: 'Github',
          callback: () => {
            window.open('https://github.com/lkatkus', '_blank');
          },
        },
      }),
    onLeave: page.clearEvent,
  },
  {
    id: 'miscPortfolio',
    row: [35, 35],
    col: [46, 50],
    eventHandler: () =>
      page.setEvent({
        text:
          'Autocad, Archicad, 3DS MAX, Photoshop, Illustrator, Nikon, Aperture, Bokeh and etc. Lots of fancy words, huh?',
        image: playerImage,
        onClick: {
          name: 'Other',
          callback: () => page.openTab('contentOther'),
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
    id: 'initialEvent',
    row: [5, 6],
    col: [10, 13],
    eventHandler: (playerRef) => {
      if (playerRef.canFly) {
        updateTextBox({
          text:
            '01010100 01101000 01100001 01101110 01101011 00100000 01111001 01101111 01110101 00100000 01100110 01101111 01110010 00100000 01110110 01101001 01110011 01101001 01110100 01101001 01101110 01100111 00100000 01101101 01111001 00100000 01110111 01100101 01100010 01110011 01101001 01110100 01100101 00100001',
          image: roboImage,
        })();
      } else {
        updateTextBox(
          {
            text:
              'That thing looks interesting...? It seems to be REACTing to something.',
            image: playerImage,
          },
          {
            name: 'Touch the strange thing',
            callback: () => {
              game.levelUp(gameObjects);
              game.disableControls(gameObjects);

              updateTextBox(
                {
                  text:
                    'What is this new power, that i feel?! Virtual DOM, Hooks, Redux, GraphQL, Node!',
                  image: roboImage,
                  shouldUpdate: true,
                },
                {
                  name: 'Try out this new power!',
                  callback: () => {
                    game.enableControls(gameObjects);

                    page.clearEvent();
                  },
                }
              )();
            },
          }
        )();
      }
    },
    onLeave: page.clearEvent,
  },
];

export default function (setEvent, clearEvent) {
  return getEventConfig({
    game: GAME_EVENTS,
    page: {
      setEvent,
      clearEvent,
    },
  });
}
