export const getCanvasContext = (
  canvas: HTMLCanvasElement,
  options: any
): RenderingContext => {
  const ctx =
    canvas.getContext('webgl', options) ||
    canvas.getContext('experimental-webgl', options) ||
    canvas.getContext('2d', options);

  return ctx;
};