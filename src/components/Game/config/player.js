import PlayerTexture from './assets/player-tile-sheet.png';

export default {
  name: 'player',
  movement: {
    speedX: 8,
    speedY: 8,
  },
  texture: {
    source: PlayerTexture,
    height: 200,
    width: 100,
    tileCols: 8,
    drawOffset: 1,
    drawHeightOffset: 2,
  },
};
