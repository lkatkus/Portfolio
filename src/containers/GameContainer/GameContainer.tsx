import * as React from 'react';
import styled from 'styled-components';
import { Game } from 'laikajs';

import { TextBox, TitleScreen } from './ui';
import * as config from './config';

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
  const canvasRef = React.useRef();
  const [gameLoaded, setGameLoaded] = React.useState(false);
  const [shouldLoadGame, setShouldLoadGame] = React.useState(false);
  const [activeEvent, setActiveEvent] = React.useState<Event>(null);

  React.useEffect(() => {
    if (shouldLoadGame && canvasRef) {
      new Game(
        {
          player: config.player,
          npc: config.npc,
          level: config.level,
          events: config.events(onOpenTab, setActiveEvent),
          canvas: canvasRef.current,
        },
        {
          onLoadGame: (game) => {
            game.startGame();
            setGameLoaded(true);
          },
        }
      );
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
      <StyledCanvas ref={canvasRef} />
    </React.Fragment>
  );
};

export default GameContainer;
