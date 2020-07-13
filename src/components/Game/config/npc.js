import NpcCatTexture from './assets/npc-cat-tileSheet.png';

export default [
  {
    name: 'cat',
    movement: {
      speedX: 10,
      speedY: 8,
    },
    texture: {
      source: NpcCatTexture,
      height: 64,
      width: 64,
      tileCols: 3,
      drawOffset: 0,
      drawHeightOffset: 1,
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
];
