import React from 'react';

import { Button, Grid, Text } from 'components';

import { TextBoxContainer, TextBoxWrapper, TextBoxStyle } from './atoms';

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
          <Grid.Box alignSelf='flex-end'>
            <Button
              mt='20px'
              p='5px 10px'
              onClick={event.onClick.clickHandler}
            >
              <Text.Heading2>{event.onClick.text}</Text.Heading2>
            </Button>
          </Grid.Box>
        )}
      </TextBoxWrapper>
    </TextBoxContainer>
  );

export default TextBox;
