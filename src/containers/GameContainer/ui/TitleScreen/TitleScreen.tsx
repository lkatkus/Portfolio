import React from 'react';
import styled from 'styled-components';

import { AnimatedText, Button, Grid, Text } from 'components';
import { getPixelBorder } from 'utils/style';
import { Curtain } from './atoms';

const TitleScreenWrapper = styled(Grid.Container)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(
    90deg,
    rgb(255, 255, 255) 0%,
    rgb(135, 206, 250) 100%
  );
  clip-path: url(#curtain);
  -webkit-clip-path: url(#curtain);
`;

const TitleWrapper = styled(Grid.Container)`
  background-color: white;

  ${getPixelBorder('black')}
`;

interface TitleScreenProps {
  gameLoaded: boolean;
  shouldLoadGame: boolean;
  handleLoadGame: () => void;
  handleOpenTab: (tab: string) => void;
}

const TitleScreen: React.FC<TitleScreenProps> = ({
  handleLoadGame,
  handleOpenTab,
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
      <Curtain curtainId='curtain' ref={animationRef} />

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
            p={['20px', '40px']}
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
          >
            <Grid.Box p={['10px', '0 20px']}>
              <Text.Heading1 textAlign='center'>
                <div>My Super</div>
                <div>
                  <AnimatedText text='Javascript' />
                </div>
                <div>Adventure</div>
              </Text.Heading1>
            </Grid.Box>

            <Grid.Container flexDirection='column'>
              <Button
                onClick={() => {
                  if (!shouldLoadGame) {
                    handleLoadGame();
                  }
                }}
                mt='40px'
                p='5px 20px'
              >
                <Text.Heading2>
                  {!shouldLoadGame ? 'Start game' : 'Loading...'}
                </Text.Heading2>
              </Button>

              <Button
                onClick={() => handleOpenTab('options')}
                mt='15px'
                p='5px 20px'
              >
                <Text.Heading2>Options</Text.Heading2>
              </Button>

              <Button
                onClick={() => handleOpenTab('about')}
                mt='15px'
                p='5px 20px'
              >
                <Text.Heading2>About</Text.Heading2>
              </Button>
            </Grid.Container>
          </TitleWrapper>
        </Grid.Container>

        <Text.SubBody>
          © {new Date().getFullYear()} Laimonas Katkus. All rights reserved.
        </Text.SubBody>
      </TitleScreenWrapper>
    </React.Fragment>
  ) : null;
};

export default TitleScreen;
