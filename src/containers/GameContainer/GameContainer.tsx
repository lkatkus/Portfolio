import * as React from 'react';
import styled from 'styled-components';
import { Game, WebGlRenderer } from 'laikajs';

import { TextBox, TitleScreen } from './ui';
import * as assets from './config/assets';
import { getConfig as getPlayerConfig } from './config/player';
import { getConfig as getLevelConfig } from './config/level';
import { getConfig as getEventsConfig } from './config/events';

const StyledCanvas = styled('canvas')`
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(135, 206, 250, 1) 100%
  );
`;

interface GameWrapperProps {
  onOpenTab: (tab: string) => void;
}

interface Event {
  text: string;
  image: string;
  onClick?: {
    text: string;
    clickHandler: () => void;
  };
}

const loadAsset = (src): Promise<HTMLImageElement> => {
  return new Promise((res) => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      res(img);
    };
  });
};

const initGame = async (
  gl: WebGLRenderingContext,
  { handleGameReady, handleOpenTab, handleOpenPage, handleSetEvent }: any
) => {
  const [
    levelTextureAsset,
    playerTextureAsset,
    playerTextureLeveledAsset,
    playerImage,
    roboImage,
    catImage,
  ] = await Promise.all([
    loadAsset(assets.levelTileSheet),
    loadAsset(assets.playerTexture),
    loadAsset(assets.playerTextureLeveled),
    loadAsset(assets.playerImage),
    loadAsset(assets.roboImage),
    loadAsset(assets.catImage),
  ]);

  new Game(
    {
      initRenderer: () => new WebGlRenderer(gl, { clearColor: [0, 0, 0, 0] }),
      level: getLevelConfig(levelTextureAsset),
      player: getPlayerConfig(playerTextureAsset),
      // npc: getNpcConfig(catTextureAsset),
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
      onLoadGame: (game: any) => {
        game.startGame();
        handleGameReady(game);
      },
    }
  );
};

const GameContainer: React.FC<GameWrapperProps> = ({ onOpenTab }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>();
  const [gameLoaded, setGameLoaded] = React.useState(false);
  const [shouldLoadGame, setShouldLoadGame] = React.useState(false);
  const [activeEvent, setActiveEvent] = React.useState<Event>(null);

  React.useEffect(() => {
    if (shouldLoadGame && canvasRef) {
      const gl = canvasRef.current.getContext('webgl', {
        antialias: false,
        depth: false,
      });

      initGame(gl, {
        handleGameReady: (game) => {
          game.startGame();
          setGameLoaded(true);
        },
        handleOpenTab: (tab: any) => {
          onOpenTab(tab);
        },
        handleOpenPage: (pageUrl: string) => {
          console.log(pageUrl); // eslint-disable-line
        },
        handleSetEvent: (eventData: any) => {
          setActiveEvent(eventData);
        },
      });
    }
  }, [shouldLoadGame, canvasRef]);

  return (
    <React.Fragment>
      <TitleScreen
        gameLoaded={gameLoaded}
        shouldLoadGame={shouldLoadGame}
        loadGame={() => setShouldLoadGame(true)}
      />

      <TextBox event={activeEvent} />
      {/* @TODO add height and width */}
      <StyledCanvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </React.Fragment>
  );
};

export default GameContainer;
