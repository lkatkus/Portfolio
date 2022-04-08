import React from 'react';

import { Button, Icons, Grid, Text } from 'components';

const About: React.FC = () => (
  <Grid.Container flexWrap='wrap'>
    <Grid.Box width={1}>
      <Grid.Container flexWrap='wrap'>
        <Grid.Box width={1} mb='20px'>
          <Text.Heading2 mb='10px'>About</Text.Heading2>
          <Text.Body mb='10px'>
            This is my personal world created with JavaScript. This is meant to
            be a learning project to be shared with friends and colleagues.
          </Text.Body>
          <Text.Body mb='10px'>
            The site was built using React and the game itself is handled by my
            personal game engine - LaikaJS. Rendering can be handle with both
            Canvas 2d or WebGl if it is supported. Assets were drawn by me using
            the amazing Aseprite editor.
          </Text.Body>
        </Grid.Box>

        <Grid.Box width={1} mb='20px'>
          <Text.Heading2 mb='10px'>Mobile App</Text.Heading2>
          <Grid.Container>
            <Grid.Box width={0.7}>
              <Text.Body mb='10px'>
                Through the power of React Native, this world is also available
                on mobile. Currently only on Android, but you never know. Check
                out the Github repo of download the app.
              </Text.Body>
            </Grid.Box>
            <Grid.Box width={0.3}>
              <Grid.Container
                height='100%'
                alignItems='center'
                justifyContent='center'
                flexWrap='wrap'
              >
                <Button
                  mx='20px'
                  variant='icon'
                  onClick={() => {
                    window.open(
                      'https://github.com/lkatkus/PortfolioNative',
                      '_blank'
                    );
                  }}
                >
                  <Icons.Github size={40} />
                </Button>
                <Button
                  mx='20px'
                  variant='icon'
                  onClick={() => {
                    window.open(
                      'https://play.google.com/store/apps/details?id=eu.katkus.MySuperJavaScriptAdventure',
                      '_blank'
                    );
                  }}
                >
                  <Icons.GooglePlay size={40} />
                </Button>
              </Grid.Container>
            </Grid.Box>
          </Grid.Container>
        </Grid.Box>

        <Grid.Box width={1}>
          <Text.Heading2 mb='10px'>Controls</Text.Heading2>
          <Text.Body mb='10px'>
            Use arrow keys on keyboard or press anywhere on the screen on
            mobile, swipe and hold a bit in the direction you want to move.
          </Text.Body>
        </Grid.Box>
      </Grid.Container>
    </Grid.Box>
  </Grid.Container>
);

export default About;
