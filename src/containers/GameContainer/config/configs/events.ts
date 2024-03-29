import { Game, Player, IEvent, IEventsManagerConfig } from 'laikajs';

import { music, sfx } from '../audio';

const getEventConfig = ({
  app,
  game,
  assets,
}: any): ((game: Game) => IEvent[]) => {
  return (gameApi: Game) => {
    return [
      {
        id: 'musicPreloadSpace',
        row: [23, 28],
        col: [18, 22],
        eventHandler: () => {
          gameApi.audioPlayer.preload('space', music.SpaceTheme, {
            loop: true,
          });
          gameApi.audioPlayer.preload('levelUp', sfx.levelUp, {
            volume: 0.5,
          });
        },
      },
      {
        id: 'initialEvent',
        row: [46, 47],
        col: [12, 15],
        eventHandler: (playerRef: Player) => {
          app.setEvent({
            text: 'Whoo... What is this place?',
            image: playerRef?.canFly
              ? assets.roboImage.src
              : assets.playerImage.src,
          });
        },
        onLeave: app.clearEvent,
      },
      {
        id: 'makeArchitectsGreatAgain',
        row: [46, 47],
        col: [20, 30],
        eventHandler: (playerRef: Player) => {
          app.setEvent({
            text: 'I think that someone has told me that architects make great developers.',
            image: playerRef?.canFly
              ? assets.roboImage.src
              : assets.playerImage.src,
            onClick: {
              text: 'Profile',
              clickHandler: () => {
                app.openTab('profile');
              },
            },
          });
        },
        onLeave: app.clearEvent,
      },
      {
        id: 'moveUp',
        row: [46, 47],
        col: [42, 44],
        eventHandler: (playerRef: Player) => {
          app.setEvent({
            text: playerRef?.canFly
              ? 'WOOF! WOOF! WOOF!'
              : 'You should try climbing up. Ohh... I mean - WOOF!',
            image: assets.dogImage.src,
          });
        },
        onLeave: app.clearEvent,
      },
      {
        id: 'webPortfolio',
        row: [40, 41],
        col: [42, 45],
        eventHandler: (playerRef: Player) => {
          app.setEvent({
            text: 'Hmmm... Not too bad! I think that I should come back later.',
            image: playerRef?.canFly
              ? assets.roboImage.src
              : assets.playerImage.src,
            onClick: {
              text: 'Skills',
              clickHandler: () => app.openTab('skills'),
            },
          });
        },
        onLeave: app.clearEvent,
      },
      {
        id: 'gitRedirect',
        row: [40, 41],
        col: [48, 50],
        eventHandler: (playerRef: Player) =>
          app.setEvent({
            text: '"In case of fire - git add -A, git commit -m "FIRE!", git push origin HEAD --force"',
            image: playerRef?.canFly
              ? assets.roboImage.src
              : assets.playerImage.src,
            onClick: {
              text: 'Github',
              clickHandler: () => app.openPage('https://github.com/lkatkus'),
            },
          }),
        onLeave: app.clearEvent,
      },
      {
        id: 'miscPortfolio',
        row: [40, 41],
        col: [53, 57],
        eventHandler: (playerRef: Player) =>
          app.setEvent({
            text: 'Autocad, Archicad, 3DS MAX, Photoshop, Illustrator, Nikon, Aperture, Bokeh and etc. Lots of fancy words, huh?',
            image: playerRef?.canFly
              ? assets.roboImage.src
              : assets.playerImage.src,
            onClick: {
              text: 'Other',
              clickHandler: () => app.openTab('other'),
            },
          }),
        onLeave: app.clearEvent,
      },
      {
        id: 'catSpeak',
        row: [38, 39],
        col: [19, 30],
        eventHandler: (playerRef: Player) =>
          app.setEvent({
            text: playerRef?.canFly
              ? 'All your base are belong to us!'
              : 'Meow!',
            image: assets.catImage.src,
          }),
        onLeave: app.clearEvent,
      },
      {
        id: 'moonSpeak',
        row: [5, 15],
        col: [45, 65],
        eventHandler: () =>
          app.setEvent({
            text: 'Eyes up, Guardian!',
            image: assets.ghostImage.src,
          }),
        onLeave: app.clearEvent,
      },
      {
        id: 'randomJoke',
        row: [29, 30],
        col: [28, 40],
        eventHandler: () =>
          app.setEvent({
            text: (() => {
              const jokes = [
                'Why arent koalas actual bears?... They dont meet the koalafications.',
                'How do trees get online?... They just log in.',
                'Why did the computer show up at work late?... It had a hard drive.',
                'Why was the cell phone wearing glasses?... Because it lost its contacts.',
                'What do you call a cow with a twitch?... Beef jerky.',
                'What do you call an alligator with a vest?... An investigator.',
                'I tried to sue the airport for misplacing my luggage... I lost my case.',
                'A girl once told me that she wanted to see my python... I only knew JavaScript.',
                'What do you call a dog that does magic tricks?... A labracadabrador.',
                'Two windmills are standing in a field and one asks the other, “What kind of music do you like?”... The other says “I’m a big metal fan.”',
                'My girlfriend and I often laugh about how competitive we are… But I laugh more.',
                'My friend asked me to help him round up his 37 sheep... I said "40".',
                "Chuck Norris doesn't need a gun, he just needs a bullet and someone to make him angry.",
                "You don't invite Chuck Norris. He invites himself.",
              ];

              return jokes[Math.floor(Math.random() * jokes.length)];
            })(),
            image: assets.workerImage.src,
          }),
        onLeave: app.clearEvent,
      },
      {
        id: 'itsMeMario',
        row: [35, 36],
        col: [11, 16],
        eventHandler: (playerRef: Player) =>
          app.setEvent({
            text: 'I think, that you need a plumber for that...',
            image: playerRef?.canFly
              ? assets.roboImage.src
              : assets.playerImage.src,
          }),
        onLeave: app.clearEvent,
      },
      {
        id: 'seeHome',
        row: [23, 24],
        col: [22, 30],
        eventHandler: (playerRef: Player) =>
          app.setEvent({
            text: 'I can see my house, from here!',
            image: playerRef?.canFly
              ? assets.roboImage.src
              : assets.playerImage.src,
          }),
        onLeave: app.clearEvent,
      },
      {
        id: 'monolith',
        row: [5, 10],
        col: [15, 18],
        eventHandler: (playerRef: Player) => {
          if (playerRef.canFly) {
            app.setEvent({
              text: '01010100 01101000 01100001 01101110 01101011 00100000 01111001 01101111 01110101 00100000 01100110 01101111 01110010 00100000 01110110 01101001 01110011 01101001 01110100 01101001 01101110 01100111 00100000 01101101 01111001 00100000 01110111 01100101 01100010 01110011 01101001 01110100 01100101 00100001',
              image: assets.roboImage.src,
              onClick: {
                text: 'Huh?',
                clickHandler: () => app.openTab('contacts'),
              },
            });
          } else {
            app.setEvent({
              text: 'That thing looks interesting...? It seems to be REACTing to something.',
              image: assets.playerImage.src,
              onClick: {
                text: 'Touch the strange thing',
                clickHandler: async () => {
                  app.clearEvent();
                  game.disableControls(gameApi);

                  await game.levelUp(gameApi);

                  gameApi.audioPlayer.play('space');

                  app.setEvent({
                    text: 'What is this new power, that i feel?! Virtual DOM, Hooks, Redux, GraphQL, Node!',
                    image: assets.roboImage.src,
                    onClick: {
                      text: 'Try out this new power!',
                      clickHandler: () => {
                        game.enableControls(gameApi);

                        app.clearEvent();
                      },
                    },
                  });
                },
              },
            });
          }
        },
        onLeave: app.clearEvent,
      },
    ];
  };
};

export const getConfig = (
  {
    openTab,
    openPage,
    setEvent,
  }: {
    openTab: (tab: string) => void;
    openPage: (page: string) => void;
    setEvent: (event: {
      text: string;
      image: string;
      onClick: {
        text: string;
        clickHandler: () => void;
      };
    }) => void;
  },
  assets: {
    playerLeveledTexture: HTMLImageElement;
    playerImage: HTMLImageElement;
    roboImage: HTMLImageElement;
    catImage: HTMLImageElement;
    dogImage: HTMLImageElement;
    workerImage: HTMLImageElement;
    ghostImage: HTMLImageElement;
  }
): IEventsManagerConfig => {
  return getEventConfig({
    game: {
      levelUp: (game: Game) => {
        const { playerLeveledTexture } = assets;

        return new Promise<void>((res) => {
          game.player.levelUp(
            {
              src: playerLeveledTexture,
              height: playerLeveledTexture.height / 4,
              width: playerLeveledTexture.width / 4,
              tileCols: 3,
              drawHeightOffset: 4,
              drawWidthOffset: 2,
            },
            {
              tileCols: 3,
              canFly: true,
              speedXOffset: 0.12,
              speedYOffset: 0.12,
              speedX: Math.floor(game.player.level.tileSize / 0.12),
              speedY: Math.floor(game.player.level.tileSize / 0.12),
              textureWidth: playerLeveledTexture.height,
              textureHeight: playerLeveledTexture.width,
            }
          );

          game.audioPlayer.play(
            'levelUp',
            () => {
              res();
            },
            true
          );
        });
      },
      // @TODO add control handling
      disableControls: () => undefined,
      enableControls: () => undefined,
    },
    app: {
      openTab,
      openPage,
      setEvent,
      clearEvent: () => {
        setEvent(null);
      },
    },
    assets,
  });
};
