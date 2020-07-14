import React from 'react';

import {
  TextBoxWrapper,
  TextBoxContainer,
  TextBox,
  TextBoxButton,
} from './atoms';

interface GameTextBoxProps {
  event: any;
}

const GameTextBox: React.FC<GameTextBoxProps> = ({ event }) =>
  event && (
    <TextBoxWrapper>
      <TextBoxContainer>
        <img src={event.image}></img>
        <TextBox>{event.text}</TextBox>
      </TextBoxContainer>
      {event.onClick && (
        <TextBoxButton onClick={event.onClick.clickHandler}>
          {event.onClick.text}
        </TextBoxButton>
      )}
    </TextBoxWrapper>
  );
export default GameTextBox;
