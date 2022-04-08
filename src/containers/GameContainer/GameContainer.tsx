import * as React from 'react';
import styled from 'styled-components';

import { TextBox, TitleScreen, ControlsProvider } from './ui';
import { initGame } from './config';
import { getCanvasContext } from './GameContainer.utils';

const StyledCanvas = styled('canvas')`
  width: 100%;
  height: 100%;
`;

const Background = styled('div')`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(135, 206, 250, 1) 100%
  );
`;

const DimBackground = styled('div')`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(10deg, #324c76 0%, #1a1a1e 100%);
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
  const [dim, setDim] = React.useState<number>(0);

  React.useEffect(() => {
    if (shouldLoadGame && canvasRef) {
      const ctx = getCanvasContext(canvasRef.current, {
        antialias: false,
        depth: false,
      });

      initGame(ctx, {
        handlePlayerYProgress: (progress: number) => {
          if (progress > 0.55) {
            const dimming = (progress - 0.55) * 5;
            setDim(dimming > 1 ? 1 : dimming);
          } else {
            setDim(0);
          }
        },
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
        handleLoadGame={() => setShouldLoadGame(true)}
        handleShowAbout={() => onOpenTab('about')}
      />

      <Background />
      <DimBackground style={{ opacity: dim }} />

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
