import { playerTexture } from './assets';

export default {
  name: 'player',
  movement: {
    speedX: 10,
    speedY: 12,
  },
  texture: {
    source: playerTexture,
    height: 160,
    width: 160,
    tileCols: 7,
    drawOffset: 1,
    drawHeightOffset: 2,
    drawWidthOffset: 2
  },
};
