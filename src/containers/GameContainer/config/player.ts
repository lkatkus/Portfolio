import { playerTexture } from './assets';

export const getConfig = (playerTextureAsset: HTMLImageElement): any => ({
  name: 'player',
  movement: {
    speedX: 0.18,
    speedY: 0.2,
    speedFallY: 12,
  },
  texture: {
    source: playerTextureAsset,
    // @TODO add proper configuring flow
    height: 32,
    width: 32,
    tileCols: 7,
    drawOffset: 1,
    drawHeightOffset: 2,
    drawWidthOffset: 2,
  },
});

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
