import React from 'react';

import { Button, Icons, Grid, Text } from 'components';

const Contacts: React.FC = () => (
  <Grid.Container flexWrap='wrap'>
    <Grid.Box width={1}>
      <Text.Heading2>Contacts</Text.Heading2>
      <Text.Body mb='20px'>Find me in:</Text.Body>
      <Grid.Container>
        <Button
          variant='icon'
          onClick={() => {
            window.open('https://github.com/lkatkus', '_blank');
          }}
        >
          <Icons.Github size={40} />
        </Button>
        <Button
          mx='20px'
          variant='icon'
          onClick={() => {
            window.open('https://dev.to/lkatkus', '_blank');
          }}
        >
          <Icons.DevTo size={40} />
        </Button>
        <Button
          variant='icon'
          onClick={() => {
            window.open(
              'https://www.linkedin.com/in/laimonas-katkus-ba334071/',
              '_blank'
            );
          }}
        >
          <Icons.LinkedIn size={40} />
        </Button>
      </Grid.Container>
    </Grid.Box>
  </Grid.Container>
);

export default Contacts;
