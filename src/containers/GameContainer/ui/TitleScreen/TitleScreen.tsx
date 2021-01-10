import React from 'react';
import styled from 'styled-components';

import { Button, Grid, Text } from 'components';

import { Curtain } from './atoms';

const TitleScreenWrapper = styled(Grid.Container)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const TitleWrapper = styled(Grid.Container)`
  background-color: white;
  border: 1px solid black;
  -webkit-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.4);
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
}) => {
  const animationRef = React.useRef<any>(null);
  const [animationFinished, setAnimationFinished] = React.useState(false);

  React.useEffect(() => {
    if (gameLoaded && animationRef && animationRef.current) {
      animationRef.current.beginElement();
      animationRef.current.addEventListener('endEvent', () => {
        setAnimationFinished(true);
      });
    }
  }, [gameLoaded]);

  return !animationFinished ? (
    <React.Fragment>
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
          <TitleWrapper
            p='40px 20px'
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
                {!shouldLoadGame ? 'Start game' : 'Loading...'}
              </Text.Heading2>
            </Button>
          </TitleWrapper>
        </Grid.Container>

        <Text.SubBody>
          © 2020 Laimonas Katkus. All rights reserved.
        </Text.SubBody>
      </TitleScreenWrapper>

      <Curtain ref={animationRef} />
    </React.Fragment>
  ) : null;
};

export default TitleScreen;
