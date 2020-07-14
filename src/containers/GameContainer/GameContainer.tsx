import * as React from 'react';
import styled from 'styled-components';
import { Game } from 'laikajs';

import { TextBox } from './TextBox';
import * as config from './config';

const StyledCanvas = styled('canvas')`
  width: 100%;
  height: 100%;
  background-color: skyblue;
`;

interface GameWrapperProps {
  onLoadGame: () => void;
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

const GameContainer: React.FC<GameWrapperProps> = ({
  onLoadGame,
  onOpenTab,
}) => {
  const canvasRef = React.useRef();
  const [activeEvent, setActiveEvent] = React.useState<Event>(null);

  React.useEffect(() => {
    new Game(
      {
        player: config.player,
        npc: config.npc,
        level: config.level,
        events: config.events(onOpenTab, setActiveEvent),
        canvas: canvasRef.current,
      },
      {
        onLoadGame: onLoadGame,
      }
    );
  }, [canvasRef]);

  return (
    <React.Fragment>
      <TextBox event={activeEvent} />
      <StyledCanvas ref={canvasRef} />
    </React.Fragment>
  );
};

export default GameContainer;
