import React from 'react';
import styled from 'styled-components';

import { Button, Grid, Text } from 'components';

const TitleScreenWrapper = styled(Grid.Container)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(135, 206, 250, 1) 100%
  );
`;

interface TitleScreenProps {
  gameLoaded: boolean;
  shouldLoadGame: boolean;
  loadGame: () => void;
}

const TitleScreen: React.FC<TitleScreenProps> = ({
  loadGame,
  gameLoaded,
  shouldLoadGame,
}) =>
  !gameLoaded ? (
    <TitleScreenWrapper
      p='40px 20px'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <Grid.Container
        height='100%'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <Text.Heading1 mb='20px' textAlign='center'>
          My Super Javascript Adventure
        </Text.Heading1>

        <Grid.Box mb='20px'>
          <Text.Body mb='10px' textAlign='center'>
            Use arrow keys or swipe to move
          </Text.Body>
          <Text.Body textAlign='center'>
            View in landscape mode for best look
          </Text.Body>
        </Grid.Box>

        <Button onClick={loadGame} mt='20px' p='5px 10px'>
          <Text.Heading2>
            {!shouldLoadGame ? 'Load' : 'Loading...'}
          </Text.Heading2>
        </Button>
      </Grid.Container>

      <Text.SubBody>© 2020 Laimonas Katkus. All rights reserved.</Text.SubBody>
    </TitleScreenWrapper>
  ) : null;

export default TitleScreen;
