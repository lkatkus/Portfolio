import {
  Game,
  WebGlRenderer,
  CanvasRenderer,
  AudioPlayer,
  IColor,
} from 'laikajs';

import * as assets from './assets';
import { music } from './audio';
import { getConfig as getPlayerConfig } from './configs/player';
import { getConfig as getLevelConfig } from './configs/level';
import { getConfig as getEventsConfig } from './configs/events';
import { getConfig as getNpcConfig } from './configs/npc';
import { IAudioPlayerOptions } from 'laikajs/lib/src/AudioPlayers';

const getDiff = (start: number, end: number, offset: number) => {
  const diff = (start - end) * offset;

  return start - diff;
};

const getColorDiff = (start: IColor, end: IColor, offset: number) => {
  return start.map((c1, i) => {
    return getDiff(c1, end[i], offset);
  });
};

const START_ROW = 24;
const END_ROW = 17;
const COLOR_TOP_START: IColor = [135, 206, 250];
const COLOR_TOP_END: IColor = [26, 26, 30];
const COLOR_BOTTOM_START: IColor = [255, 255, 255];
const COLOR_BOTTOM_END: IColor = [50, 76, 118];

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
  }: {
    options: {
      audio: IAudioPlayerOptions;
    };
    handleGameReady: (game: Game) => void;
    handleOpenTab: (tab: string) => void;
    handleOpenPage: (page: string) => void;
    handleSetEvent: (event: any) => void;
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
      initAudioPlayer: () => new AudioPlayer(Audio, options.audio),
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
        let offset = 0;

        const START_Y = START_ROW * game.level.tileSize;
        const END_Y = END_ROW * game.level.tileSize;

        if (game.player.row < START_ROW) {
          const diff = (START_Y - game.player.y) / (START_Y - END_Y);

          offset = diff > 1 ? 1 : Number(diff.toPrecision(2));
        }

        const colorTop = getColorDiff(COLOR_TOP_START, COLOR_TOP_END, offset);
        const colorBottom = getColorDiff(
          COLOR_BOTTOM_START,
          COLOR_BOTTOM_END,
          offset
        );

        const normalizedColorTop = colorTop.map((c) => c / 255) as IColor;
        const normalizedColorBottom = colorBottom.map((c) => c / 255) as IColor;

        game.renderer.skyRenderer.bgColor = {
          type: 'gradient',
          color: [normalizedColorTop, normalizedColorBottom],
        };
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
