export const getConfig = (
  catTextureAsset: HTMLImageElement,
  moonTextureAsset: HTMLImageElement,
  dogTextureAsset: HTMLImageElement
): any => [
  {
    name: 'cat',
    movement: {
      speedX: 0.7,
      speedY: 0.7,
    },
    texture: {
      source: catTextureAsset,
      height: 32,
      width: 32,
      tileCols: 3,
    },
    min: {
      row: 33,
      col: 12,
    },
    max: {
      row: 33,
      col: 24,
    },
  },
  {
    name: 'dog',
    movement: {
      speedX: 0.7,
      speedY: 0.7,
    },
    texture: {
      source: dogTextureAsset,
      height: 32,
      width: 32,
      tileCols: 5,
      drawOffset: 0.5,
      drawWidthOffset: 1.5,
      drawHeightOffset: 1.5,
    },
    min: {
      row: 41,
      col: 36,
    },
    max: {
      row: 41,
      col: 36,
    },
  },
  {
    name: 'moon',
    movement: {
      speedX: 4,
      speedY: 4,
    },
    texture: {
      source: moonTextureAsset,
      height: 256,
      width: 256,
      tileCols: 0,
      drawOffset: 6,
      drawWidthOffset: 18,
      drawHeightOffset: 18,
    },
    min: {
      row: 0,
      col: 35,
    },
    max: {
      row: 0,
      col: 50,
    },
  },
];
