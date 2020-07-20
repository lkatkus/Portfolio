import React from 'react';

import { Grid, Text } from 'components';

const Other: React.FC = () => (
  <Grid.Container flexWrap='wrap'>
    <Grid.Box width={1}>
      <Text.Heading2>Other stuff</Text.Heading2>
      <Text.Body>
        Some other stuff (architectural design, photography and etc.) that I
        have done before.
      </Text.Body>
    </Grid.Box>
  </Grid.Container>
);

export default Other;
