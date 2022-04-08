import { Game, WebGlRenderer, CanvasRenderer } from 'laikajs';

import * as assets from './assets';
import { getConfig as getPlayerConfig } from './configs/player';
import { getConfig as getLevelConfig } from './configs/level';
import { getConfig as getEventsConfig } from './configs/events';
import { getConfig as getNpcConfig } from './configs/npc';

const loadAsset = (src): Promise<HTMLImageElement> => {
  return new Promise((res) => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      res(img);
    };
  });
};

export const initGame = async (
  ctx: RenderingContext,
  {
    isWebGlSupported,
    handleGameReady,
    handleOpenTab,
    handleOpenPage,
    handleSetEvent,
    handlePlayerYProgress,
  }: any
): Promise<any> => {
  const [
    levelTextureAsset,
    playerTextureAsset,
    playerTextureLeveledAsset,
    catTextureAsset,
    dogTextureAsset,
    moonTextureAsset,
    playerImage,
    roboImage,
    catImage,
  ] = await Promise.all([
    loadAsset(assets.levelTileSheet),
    loadAsset(assets.playerTexture),
    loadAsset(assets.playerTextureLeveled),
    loadAsset(assets.catTexture),
    loadAsset(assets.dogTexture),
    loadAsset(assets.moonTexture),
    loadAsset(assets.playerImage),
    loadAsset(assets.roboImage),
    loadAsset(assets.catImage),
  ]);

  const Renderer = isWebGlSupported ? WebGlRenderer : CanvasRenderer;

  new Game(
    {
      initRenderer: () => new Renderer(ctx),
      level: getLevelConfig(levelTextureAsset),
      player: getPlayerConfig(playerTextureAsset),
      npc: getNpcConfig(catTextureAsset, moonTextureAsset, dogTextureAsset),
      events: getEventsConfig(
        {
          openTab: handleOpenTab,
          openPage: handleOpenPage,
          setEvent: handleSetEvent,
        },
        {
          playerLeveledTexture: playerTextureLeveledAsset,
        },
        { playerImage, roboImage, catImage }
      ),
    },
    {
      onDraw: (game: any) => {
        const worldHeight = game.level.levelLayout.y;
        const playerY = game.player.y;
        const playerYProgress = Number(
          (worldHeight - playerY) / worldHeight
        ).toPrecision(2);

        handlePlayerYProgress(playerYProgress); // eslint-disable-line
      },
      onLoadGame: (game: any) => {
        game.startGame();
        handleGameReady(game);
      },
    }
  );
};
