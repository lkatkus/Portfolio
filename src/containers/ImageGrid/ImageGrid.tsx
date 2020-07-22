import React from 'react';

import { Grid, Image } from 'components';

const ImageGrid: React.FC<{ images: string[] }> = ({ images }) => (
  <Grid.Container flexWrap='wrap'>
    {images.map((image, index) => (
      <Grid.Box key={index} width={[1, 0.5, 1 / 3]}>
        <Image src={image} />
      </Grid.Box>
    ))}
  </Grid.Container>
);
export default ImageGrid;
