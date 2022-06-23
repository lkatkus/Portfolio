import * as React from 'react';
import styled from 'styled-components';

import { TextBox, TitleScreen, ControlsProvider } from './ui';
import { initGame } from './config';
import { getCanvasContext } from './GameContainer.utils';

const StyledCanvas = styled('canvas')`
  width: 100%;
  height: 100%;
`;

interface GameWrapperProps {
  onOpenTab: (tab: string) => void;
  options: { audio: { music: { on: boolean }; sfx: { on: boolean } } };
}

interface Event {
  text: string;
  image: string;
  onClick?: {
    text: string;
    clickHandler: () => void;
  };
}

const GameContainer: React.FC<GameWrapperProps> = ({ onOpenTab, options }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>();

  const [game, setGame] = React.useState<any>(null);
  const [gameLoaded, setGameLoaded] = React.useState(false);
  const [shouldLoadGame, setShouldLoadGame] = React.useState(false);
  const [activeEvent, setActiveEvent] = React.useState<Event>(null);
  const [moveState, setMoveState] = React.useState<any>(null);

  React.useEffect(() => {
    if (shouldLoadGame && canvasRef) {
      const ctx = getCanvasContext(canvasRef.current, {
        antialias: false,
        depth: false,
      });

      if (!ctx) {
        throw new Error('Not supported browser');
      }

      initGame(ctx, {
        options,
        handleGameReady: (game) => {
          setGame(game);
          setGameLoaded(true);
        },
        handleOpenTab: (tab: any) => {
          onOpenTab(tab);
        },
        handleOpenPage: (pageUrl: string) => {
          window.open(pageUrl, '_blank').focus();
        },
        handleSetEvent: (event: any) => {
          setActiveEvent(event);
        },
      });
    }
  }, [shouldLoadGame, canvasRef]);

  React.useEffect(() => {
    if (game) {
      const { isMoving, movingDirection } = moveState;

      if (isMoving && movingDirection) {
        game.player.moveStart(movingDirection);
      } else {
        game.player.moveEnd();
      }
    }
  }, [moveState]);

  React.useEffect(() => {
    if (game) {
      if (options.audio) {
        game.audioPlayer.updateOptions(options.audio);
      }
    }
  }, [options]);

  return (
    <React.Fragment>
      <TitleScreen
        gameLoaded={gameLoaded}
        shouldLoadGame={shouldLoadGame}
        handleLoadGame={() => setShouldLoadGame(true)}
        handleOpenTab={onOpenTab}
      />

      <ControlsProvider isLoaded={gameLoaded} handleStateChange={setMoveState}>
        <StyledCanvas
          ref={canvasRef}
          width={window.innerWidth}
          height={window.innerHeight}
        />
        <TextBox event={activeEvent} />
      </ControlsProvider>
    </React.Fragment>
  );
};

export default GameContainer;
