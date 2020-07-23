import { playerTexture } from './assets';

export default {
  name: 'player',
  movement: {
    speedX: 10,
    speedY: 12,
  },
  texture: {
    source: playerTexture,
    height: 200,
    width: 100,
    tileCols: 8,
    drawOffset: 1,
    drawHeightOffset: 2,
  },
};
