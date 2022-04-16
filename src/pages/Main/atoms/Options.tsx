import React from 'react';

import { Button, Grid, Text } from 'components';

const Options: React.FC<any> = ({ options, onOptionsChange }) => {
  const { audio: audioOptions } = options;

  const handleAudioOptionChange = (updatedAudioOptions) => {
    onOptionsChange({
      ...options,
      audio: {
        ...audioOptions,
        ...updatedAudioOptions,
      },
    });
  };

  return (
    <Grid.Container>
      <Grid.Box width={1}>
        <Grid.Container>
          <Grid.Box width={1} mb='20px'>
            <Grid.Box width={1} mb='20px'>
              <Text.Heading2 mb='10px'>Options</Text.Heading2>
            </Grid.Box>

            <Grid.Box width={1} mb='20px'>
              <Text.Heading2 mb='10px'>Controls</Text.Heading2>
              <Text.Body mb='10px'>
                Use arrow keys on keyboard or press anywhere on the screen on
                mobile, swipe and hold a bit in the direction you want to move.
              </Text.Body>
            </Grid.Box>

            <Grid.Box width={1} mb='20px'>
              <Text.Heading2 mb='10px'>Audio</Text.Heading2>

              <Grid.Container>
                <Grid.Box width={[0.8, 0.9]}>
                  <Text.Body>Music</Text.Body>
                </Grid.Box>
                <Grid.Box width={[0.2, 0.1]}>
                  <Button
                    onClick={() =>
                      handleAudioOptionChange({
                        music: { on: !audioOptions.music.on },
                      })
                    }
                    p='5px 10px'
                  >
                    <Text.Heading2>
                      {audioOptions.music.on ? 'On' : 'Off'}
                    </Text.Heading2>
                  </Button>
                </Grid.Box>
              </Grid.Container>

              <Grid.Container flexWrap='wrap'>
                <Grid.Box width={[0.8, 0.9]}>
                  <Text.Body>SFX</Text.Body>
                </Grid.Box>
                <Grid.Box width={[0.2, 0.1]}>
                  <Button
                    onClick={() =>
                      handleAudioOptionChange({
                        sfx: { on: !audioOptions.sfx.on },
                      })
                    }
                    p='5px 10px'
                  >
                    <Text.Heading2>
                      {audioOptions.sfx.on ? 'On' : 'Off'}
                    </Text.Heading2>
                  </Button>
                </Grid.Box>
              </Grid.Container>
            </Grid.Box>

            <Grid.Box width={1}>
              <Text.Heading2 mb='10px'>Video</Text.Heading2>
              <Text.Body>Coming soon...</Text.Body>
            </Grid.Box>
          </Grid.Box>
        </Grid.Container>
      </Grid.Box>
    </Grid.Container>
  );
};

export default Options;
