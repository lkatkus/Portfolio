import React from 'react';
import { Flex, Box } from '@rebass/grid';

import { Text } from 'components';

const Other: React.FC = () => (
  <Flex flexWrap='wrap'>
    <Box width={1}>
      <Text.Heading2>Other stuff</Text.Heading2>
      <Text.Body>
        Some other stuff (architectural design, photography and etc.) that I
        have done before.
      </Text.Body>
    </Box>
  </Flex>
);

export default Other;
