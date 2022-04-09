import { Game, WebGlRenderer, CanvasRenderer } from 'laikajs';

import * as assets from './assets';
import * as sfx from './sfx';
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

// @TODO move to LaikaJS
class WebAudioPlayer {
  current: string;
  available: { [key: string]: { isLoaded: boolean; data: HTMLAudioElement } };

  constructor() {
    this.current = null;
    this.available = {};
  }

  load = async (name, src, options): Promise<void> => {
    if (this.available[name]) {
      return;
    }

    const data: HTMLAudioElement = await new Promise((res) => {
      const audio = new Audio(src);

      for (const key in options) {
        audio[key] = options[key];
      }

      audio.oncanplaythrough = () => {
        res(audio);
      };
    });

    this.available[name] = { isLoaded: true, data: data };
  };

  preload = (name, src, options) => {
    if (this.available[name]) {
      return;
    }

    const audio = new Audio(src);

    for (const key in options) {
      audio[key] = options[key];
    }

    this.available[name] = { isLoaded: false, data: null };

    audio.oncanplaythrough = () => {
      this.available[name] = { isLoaded: true, data: audio };
    };
  };

  play = (name) => {
    if (name === this.current) {
      return;
    }

    if (this.current) {
      this.available[this.current].data.pause();
    }

    if (this.available[name].data && this.available[name].isLoaded) {
      this.current = name;
      this.available[name].data.play();
    } else {
      const checker = setInterval(() => {
        if (this.available[name].data && this.available[name].isLoaded) {
          clearInterval(checker);

          this.play(name);
        }
      }, 500);
    }
  };

  pause = () => {
    if (!this.current) {
      return;
    }

    this.available[this.current].data.pause();
  };
}

export const initGame = async (
  ctx: RenderingContext,
  {
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

  const Renderer =
    ctx instanceof WebGLRenderingContext ? WebGlRenderer : CanvasRenderer;

  if (ctx instanceof CanvasRenderingContext2D) {
    ctx.imageSmoothingEnabled = false;
  }

  new Game(
    {
      initRenderer: () => new Renderer(ctx),
      initAudioPlayer: () => new WebAudioPlayer(),
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

        handlePlayerYProgress(playerYProgress);
      },
      onAfterInit: (game: any) => {
        game.audioPlayer.preload('main', sfx.MainTheme, { loop: true });
      },
      onLoadGame: (game: any) => {
        game.startGame();
        game.audioPlayer.play('main');

        handleGameReady(game);
      },
    }
  );
};
