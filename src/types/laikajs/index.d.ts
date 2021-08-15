declare module 'laikajs' {
  interface Player {
    name: String;
    movement: Object;
    texture: Object;
  }

  interface Npc {
    name: String;
    movement: Object;
    texture: Object;
    min: Object;
    max: Object;
  }

  interface Level {
    layout: any[][];
    spawnMarker: any;
    tileSheet: {
      src: any;
      tilesPerRow: Number;
      spriteSize: Number;
      width: Number;
      height: Number;
      rows: Number;
      cols: Number;
      types: {
        solid: Number[];
        climbable: Number[];
      };
    };
  }

  interface Events {}

  interface GameConfig {
    player: Player;
    npc: Npc[];
    level: Level;
    events: Events;
    canvas: HTMLCanvasElement;
  }

  interface ActionConfig {
    onLoadGame?: (game: any) => void;
    onDraw?: () => void;
  }

  export class Game {
    constructor(config: GameConfig, action: ActionConfig);
  }
}
