import React from 'react';

import { Grid, Text } from 'components';

import {
  TextBoxContainer,
  TextBoxWrapper,
  TextBoxStyle,
  TextBoxButton,
} from './atoms';

interface GameTextBoxProps {
  event: any;
}

const TextBox: React.FC<GameTextBoxProps> = ({ event }) =>
  event && (
    <TextBoxContainer>
      <TextBoxWrapper width={[0.9, 0.8]}>
        <TextBoxStyle>
          <Grid.Box hide={[true]}>
            <img src={event.image}></img>
          </Grid.Box>
          <Grid.Box p='20px' flex={1}>
            <Text.Heading2>{event.text}</Text.Heading2>
          </Grid.Box>
        </TextBoxStyle>

        {event.onClick && (
          <TextBoxButton onClick={event.onClick.clickHandler}>
            {event.onClick.text}
          </TextBoxButton>
        )}
      </TextBoxWrapper>
    </TextBoxContainer>
  );

export default TextBox;
