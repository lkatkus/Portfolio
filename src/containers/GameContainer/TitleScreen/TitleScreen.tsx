import React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';

import { Button, Text } from 'components';

const TitleScreenWrapper = styled(Flex)`
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
      <Flex
        height='100%'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <Text.Heading1>My Super Javascript Adventure</Text.Heading1>

        <Text.Body mt='20px'>Use arrow keys for controls</Text.Body>
        <Text.Body>View in landscape mode for best look</Text.Body>

        <Button onClick={loadGame} mt='20px' p='5px 10px'>
          <Text.Heading2>
            {!shouldLoadGame ? 'Load' : 'Loading...'}
          </Text.Heading2>
        </Button>
      </Flex>

      <Text.Body>© 2020 Laimonas Katkus. All rights reserved.</Text.Body>
    </TitleScreenWrapper>
  ) : null;

export default TitleScreen;
