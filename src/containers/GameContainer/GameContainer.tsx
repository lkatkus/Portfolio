import * as React from 'react';
import styled from 'styled-components';

import { TextBox, TitleScreen, ControlsProvider } from './ui';
import { initGame } from './config';

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

const GameContainer: React.FC<GameWrapperProps> = ({ onOpenTab }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>();

  const [game, setGame] = React.useState<any>(null);
  const [gameLoaded, setGameLoaded] = React.useState(false);
  const [shouldLoadGame, setShouldLoadGame] = React.useState(false);
  const [activeEvent, setActiveEvent] = React.useState<Event>(null);
  const [moveState, setMoveState] = React.useState<any>(null);

  React.useEffect(() => {
    if (shouldLoadGame && canvasRef) {
      const gl = canvasRef.current.getContext('webgl', {
        antialias: false,
        depth: false,
      });

      initGame(gl, {
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
        handleSetEvent: (eventData: any) => {
          setActiveEvent(eventData);
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

  return (
    <React.Fragment>
      <TitleScreen
        gameLoaded={gameLoaded}
        shouldLoadGame={shouldLoadGame}
        loadGame={() => setShouldLoadGame(true)}
      />

      <ControlsProvider isLoaded={gameLoaded} handleStateChange={setMoveState}>
        <TextBox event={activeEvent} />
        <StyledCanvas
          ref={canvasRef}
          width={window.innerWidth}
          height={window.innerHeight}
        />
      </ControlsProvider>
    </React.Fragment>
  );
};

export default GameContainer;
