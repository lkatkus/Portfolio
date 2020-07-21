import React from 'react';

import Grid from './../Grid';
import { Image } from './../Image';

interface ImageGridProps {
  images: any[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => (
  <Grid.Container flexWrap='wrap'>
    {images.map((image, index) => (
      <Grid.Box key={index} width={[1, 0.5, 1 / 3]}>
        <Image src={image} />
      </Grid.Box>
    ))}
  </Grid.Container>
);
export default ImageGrid;
