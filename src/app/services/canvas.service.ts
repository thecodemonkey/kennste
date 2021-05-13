
export class CanvasService {

  constructor(private ctx?: OffscreenCanvasRenderingContext2D) { }

  getPixelColor(x: number, y: number, size: number): string {
    const p = this.ctx.getImageData(x, y, size, size).data;
    return '#' + ('000000' + this.rgbToHex(p[0], p[1], p[2])).slice(-6);
  }

  rgbToHex(r: number, g: number, b: number): string {
    if (r > 255 || g > 255 || b > 255) {
      throw Error('Invalid color component');
    }

    // tslint:disable-next-line:no-bitwise
    return ((r << 16) | (g << 8) | b).toString(16);
  }
}
