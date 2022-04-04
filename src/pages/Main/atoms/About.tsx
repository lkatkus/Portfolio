import React from 'react';

import { Grid, Text } from 'components';

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
            The app itself was built using React and game logic is handled by my
            personal game engine - LaikaJS. Render engine is using WebGL. Assets
            were drawn using the amazing Aseprite editor.
          </Text.Body>
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
