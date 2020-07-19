import React from 'react';
import { Flex, Box } from '@rebass/grid';

import { Text } from 'components';

const Contacts: React.FC = () => (
  <Flex flexWrap='wrap' p='0 20px'>
    <Box width={1}>
      <Text.Heading2>Contacts</Text.Heading2>
      <Text.Body>You can find me on:</Text.Body>
      <Text.Body>Github</Text.Body>
      <Text.Body>DEV.to</Text.Body>
      <Text.Body>LinkedIn</Text.Body>
    </Box>
  </Flex>
);

export default Contacts;
