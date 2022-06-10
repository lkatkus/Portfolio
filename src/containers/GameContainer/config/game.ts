import { Game, WebGlRenderer, CanvasRenderer, WebAudioPlayer } from 'laikajs';

import * as assets from './assets';
import { music } from './audio';
import { getConfig as getPlayerConfig } from './configs/player';
import { getConfig as getLevelConfig } from './configs/level';
import { getConfig as getEventsConfig } from './configs/events';
import { getConfig as getNpcConfig } from './configs/npc';
import { IWebAudioPlayerOptions } from 'laikajs/lib/src/AudioPlayers';

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
  ctx: WebGLRenderingContext | CanvasRenderingContext2D,
  {
    options,
    handleGameReady,
    handleOpenTab,
    handleOpenPage,
    handleSetEvent,
    handlePlayerYProgress,
  }: {
    options: {
      audio: IWebAudioPlayerOptions;
    };
    handleGameReady: (game: Game) => void;
    handleOpenTab: (tab: string) => void;
    handleOpenPage: (page: string) => void;
    handleSetEvent: (event: any) => void;
    handlePlayerYProgress: (progress: number) => void;
  }
): Promise<void> => {
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
    dogImage,
    workerImage,
    ghostImage,
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
    loadAsset(assets.dogImage),
    loadAsset(assets.workerImage),
    loadAsset(assets.ghostImage),
  ]);

  if (ctx instanceof CanvasRenderingContext2D) {
    ctx.imageSmoothingEnabled = false;
  }

  new Game(
    {
      initRenderer: (config) => {
        if (ctx instanceof WebGLRenderingContext) {
          return new WebGlRenderer(ctx, config);
        }

        return new CanvasRenderer(ctx, config);
      },
      initAudioPlayer: () => new WebAudioPlayer(options.audio),
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
          playerImage,
          roboImage,
          catImage,
          dogImage,
          workerImage,
          ghostImage,
          playerLeveledTexture: playerTextureLeveledAsset,
        }
      ),
    },
    {
      onDraw: (game) => {
        const worldHeight = game.level.levelLayout.y;
        const playerY = game.player.y;
        const playerYProgress = (
          (worldHeight - playerY) /
          worldHeight
        ).toPrecision(2);

        handlePlayerYProgress(Number(playerYProgress));
      },
      onAfterInit: (game) => {
        game.audioPlayer.preload('main', music.MainTheme, {
          loop: true,
          volume: 0.4,
        });
      },
      onLoadGame: (game) => {
        game.startGame();
        game.audioPlayer.play('main');

        handleGameReady(game);
      },
    }
  );
};
