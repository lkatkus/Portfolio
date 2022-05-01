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

const SPAWN_MARKER = 'x';
const TILES_CLIMBABLE = [21, 22, 23];
const TILES_NON_TEXTURE = [SPAWN_MARKER, -1, 0];
const TILES_SOLID = [
  1,
  2,
  3,
  4,
  5,
  181,
  182,
  183,
  201,
  202,
  203,
  204,
  205,
  206,
  207,
  208,
  209,
  210,
  237,
  ...TILES_CLIMBABLE,
];

const LEVEL_LAYOUT = getLayerConfig(LevelMap.layers, 'Stage');
LEVEL_LAYOUT[44][15] = SPAWN_MARKER;

const BACKGROUND_LAYOUT = getLayerConfig(LevelMap.layers, 'Background');
const FOREGROUND_LAYOUT = getLayerConfig(LevelMap.layers, 'Foreground');

export const getConfig = (levelTextureAsset: HTMLImageElement): any => ({
  layout: LEVEL_LAYOUT,
  bgLayout: BACKGROUND_LAYOUT,
  fgLayout: FOREGROUND_LAYOUT,
  parallaxScaling: { x: 1.2 },
  spawnMarker: SPAWN_MARKER,
  tileSheet: {
    src: levelTextureAsset,
    tilesPerRow: 15,
    spriteSize: levelTextureAsset.width / 20,
    cols: 20,
    types: {
      solid: TILES_SOLID,
      climbable: TILES_CLIMBABLE,
      nonTexture: TILES_NON_TEXTURE,
    },
  },
});
