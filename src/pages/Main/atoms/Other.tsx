import React from 'react';

import { ImageGrid } from 'containers';
import { Grid, Text } from 'components';

import Image1 from 'assets/images/other/arch-1.jpg';
import Image2 from 'assets/images/other/arch-2.jpg';
import Image3 from 'assets/images/other/arch-3.jpg';
import Image4 from 'assets/images/other/arch-4.jpg';
import Image5 from 'assets/images/other/arch-5.jpg';
import Image6 from 'assets/images/other/arch-6.jpg';
import Image7 from 'assets/images/other/arch-7.jpg';
import Image8 from 'assets/images/other/arch-8.jpg';
import Image9 from 'assets/images/other/arch-9.jpg';

const Other: React.FC = () => (
  <Grid.Container flexWrap='wrap'>
    <Grid.Box width={1}>
      <Text.Heading2>Other stuff</Text.Heading2>
      <Text.Body mb='20px'>
        Some fancy words I know, from my previous endeavours - Autocad,
        Archicad, 3DS MAX, Archicad, Photoshop, Illustrator, Aperture, Bokeh.
      </Text.Body>
    </Grid.Box>
    <Grid.Box width={1}>
      <ImageGrid
        images={[
          Image1,
          Image2,
          Image3,
          Image4,
          Image5,
          Image6,
          Image7,
          Image8,
          Image9,
        ]}
      />
    </Grid.Box>
  </Grid.Container>
);

export default Other;
