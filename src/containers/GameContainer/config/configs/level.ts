import { ILevelManagerConfig } from 'laikajs';

import * as LevelMap from './level-map.json';

const mapLayerDataToLayout = (data: any[], height: number, width: number) => {
  const layout = [];

  for (let i = 0; i < height; i++) {
    const offset = i * width;

    layout.push(data.slice(offset, offset + width));
  }

  return layout;
};

const getLayerConfig = (layers: any[], layerName: string) => {
  const layerConfig = layers.find(({ name }) => name === layerName);

  if (!layerConfig) {
    return null;
  }

  const { height, width, data } = layerConfig;

  return mapLayerDataToLayout(data, height, width);
};

const SPAWN_MARKER = 400;
const TILES_CLIMBABLE = [21, 22, 23];
const TILES_NON_TEXTURE = [SPAWN_MARKER, -1, 0];
const TILES_SOLID = [
  1,
  2,
  3,
  4,
  5,
  52,
  53,
  54,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  ...TILES_CLIMBABLE,
];

const LEVEL_LAYOUT = getLayerConfig(LevelMap.layers, 'Stage');
const BACKGROUND_LAYOUT = getLayerConfig(LevelMap.layers, 'Background');
const FOREGROUND_LAYOUT = getLayerConfig(LevelMap.layers, 'Foreground');

export const getConfig = (
  levelTextureAsset: HTMLImageElement
): ILevelManagerConfig => ({
  stageLayout: LEVEL_LAYOUT,
  backgroundLayout: BACKGROUND_LAYOUT,
  foregroundLayout: FOREGROUND_LAYOUT,
  // parallaxScaling: { x: 1 },
  spawnMarker: SPAWN_MARKER,
  tileSheet: {
    src: levelTextureAsset,
    tilesPerRow: 12,
    spriteSize: levelTextureAsset.width / 20,
    cols: 20,
    types: {
      solid: TILES_SOLID,
      climbable: TILES_CLIMBABLE,
      nonTexture: TILES_NON_TEXTURE,
    },
  },
});
