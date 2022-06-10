export const getCanvasContext = (
  canvas: HTMLCanvasElement,
  options: { antialias: boolean; depth: boolean }
): WebGLRenderingContext | CanvasRenderingContext2D | null => {
  const ctx =
    canvas.getContext('webgl', options) ||
    canvas.getContext('experimental-webgl', options) ||
    canvas.getContext('2d', options);

  if (
    ctx instanceof WebGLRenderingContext ||
    ctx instanceof CanvasRenderingContext2D
  ) {
    return ctx;
  }

  return;
};
