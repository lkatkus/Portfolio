const getEventConfig = ({ app, game, assets }: any) => {
  return (gameObjects: any) => {
    return [
      {
        id: 'initialEvent',
        row: [40, 41],
        col: [5, 9],
        eventHandler: (playerRef: any) => {
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
        row: [40, 41],
        col: [14, 27],
        eventHandler: (playerRef: any) =>
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
          }),
        onLeave: app.clearEvent,
      },
      {
        id: 'moveUp',
        row: [40, 41],
        col: [35, 39],
        eventHandler: (playerRef: any) =>
          app.setEvent({
            text: playerRef?.canFly
              ? 'WOOF! WOOF! WOOF!'
              : 'You should try climbing up. Ohh... I mean - WOOF!',
            // image: 'dogImage',
          }),
        onLeave: app.clearEvent,
      },
      {
        id: 'webPortfolio',
        row: [34, 35],
        col: [35, 38],
        eventHandler: (playerRef: any) =>
          app.setEvent({
            text: 'Hmmm... Not too bad! I think that I should come back later.',
            image: playerRef?.canFly
              ? assets.roboImage.src
              : assets.playerImage.src,
            onClick: {
              text: 'Skills',
              clickHandler: () => app.openTab('skills'),
            },
          }),
        onLeave: app.clearEvent,
      },
      {
        id: 'gitRedirect',
        row: [34, 35],
        col: [40, 45],
        eventHandler: (playerRef: any) =>
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
        row: [34, 35],
        col: [47, 50],
        eventHandler: (playerRef: any) =>
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
        row: [32, 33],
        col: [13, 24],
        eventHandler: (playerRef: any) =>
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
        row: [0, 12],
        col: [35, 60],
        eventHandler: () =>
          app.setEvent({
            text: 'Eyes up, Guardian!',
            //  image: 'moonImage'
          }),
        onLeave: app.clearEvent,
      },
      {
        id: 'randomJoke',
        row: [23, 24],
        col: [25, 45],
        eventHandler: (playerRef: any) =>
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
                'A girl once told me that she wanted to see my python... I only knew javascript.',
                'What do you call a dog that does magic tricks?... A labracadabrador.',
                'Two windmills are standing in a field and one asks the other, “What kind of music do you like?”... The other says “I’m a big metal fan.”',
                'My girlfriend and I often laugh about how competitive we are… But I laugh more.',
                'My friend asked me to help him round up his 37 sheep... I said "40".',
                "Chuck Norris doesn't nead a gun he just neads a bullet and someone to make him angry",
                "You don't invite Chuck Norris. He invites himself.",
              ];

              return jokes[Math.floor(Math.random() * jokes.length)];
            })(),
            image: playerRef?.canFly
              ? assets.roboImage.src
              : assets.playerImage.src,
          }),
        onLeave: app.clearEvent,
      },
      {
        id: 'itsMeMario',
        row: [29, 30],
        col: [5, 10],
        eventHandler: (playerRef: any) =>
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
        row: [18, 19],
        col: [19, 25],
        eventHandler: (playerRef: any) =>
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
        row: [5, 6],
        col: [10, 13],
        eventHandler: (playerRef: any) => {
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
                clickHandler: () => {
                  game.levelUp(gameObjects);
                  game.disableControls(gameObjects);

                  app.setEvent({
                    text: 'What is this new power, that i feel?! Virtual DOM, Hooks, Redux, GraphQL, Node!',
                    image: assets.roboImage.src,
                    onClick: {
                      text: 'Try out this new power!',
                      clickHandler: () => {
                        game.enableControls(gameObjects);

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
  { openTab, openPage, setEvent }: any,
  { playerLeveledTexture }: any,
  assets: any
): any => {
  return getEventConfig({
    game: {
      levelUp: ({ player }: any) => {
        player.levelUp(
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
            speedX: Math.floor(player.level.TILE_SIZE / 0.12),
            speedY: Math.floor(player.level.TILE_SIZE / 0.12),
            textureWidth: playerLeveledTexture.height,
            textureHeight: playerLeveledTexture.width,
          }
        );
      },
      // @TODO add control handling
      disableControls: () => undefined,
      enableControls: () => undefined,
    },
    app: { openTab, openPage, setEvent, clearEvent: () => setEvent(null) },
    assets,
  });
};
