import { INpcConfig } from 'laikajs';

export const getConfig = (
  catTextureAsset: HTMLImageElement,
  moonTextureAsset: HTMLImageElement,
  dogTextureAsset: HTMLImageElement
): INpcConfig[] => [
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
      tileCols: 8,
      drawOffset: 1,
      drawWidthOffset: 2,
      drawHeightOffset: 2,
    },
    min: {
      row: 39,
      col: 18,
    },
    max: {
      row: 39,
      col: 30,
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
      tileCols: 8,
      drawOffset: 1,
      drawWidthOffset: 2,
      drawHeightOffset: 2,
    },
    min: {
      row: 47,
      col: 42,
    },
    max: {
      row: 47,
      col: 42,
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
      row: 2,
      col: 35,
    },
    max: {
      row: 2,
      col: 50,
    },
  },
];
