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
}

interface Event {}

const GameWrapper: React.FC<GameWrapperProps> = ({ onLoadGame }) => {
  const canvasRef = React.useRef();
  const [activeEvent, setActiveEvent] = React.useState<Event>(null);

  React.useEffect(() => {
    new Game(
      {
        player: config.player,
        npc: config.npc,
        level: config.level,
        events: config.events(
          (event: Object) => setActiveEvent(event),
          () => setActiveEvent(null)
        ),
        canvas: canvasRef.current,
      },
      {
        onLoadGame: onLoadGame,
      }
    );
  }, [canvasRef]);

  return (
    <div>
      <TextBox event={activeEvent} />
      <StyledCanvas ref={canvasRef} />
    </div>
  );
};

export default GameWrapper;
