import React from 'react';

import { Grid, Text } from 'components';

const Contacts: React.FC = () => (
  <Grid.Container flexWrap='wrap' p='0 20px'>
    <Grid.Box width={1}>
      <Text.Heading2>Contacts</Text.Heading2>
      <Text.Body>You can find me on:</Text.Body>
      <Text.Body>Github</Text.Body>
      <Text.Body>DEV.to</Text.Body>
      <Text.Body>LinkedIn</Text.Body>
    </Grid.Box>
  </Grid.Container>
);

export default Contacts;
