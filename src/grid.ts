import { GridSize, XYPosition } from "./types";

export class Grid {
  private size: GridSize;

  constructor(maxX: number = 0, maxY: number = 0) {
    this.size = { x: maxX, y: maxY };
  }

  setSize(size: GridSize) {
    this.size = size;
  }

  getSize(): GridSize {
    return this.size;
  }

  isWithin(position: XYPosition): boolean {
    return (
      position.x <= this.size.x &&
      position.y <= this.size.y &&
      position.x >= 0 &&
      position.y >= 0
    );
  }
}
