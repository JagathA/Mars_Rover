import { GridSize, XYPosition } from "./types";

export class Grid {
  private size: GridSize;

  constructor(maxX: number=0, maxY: number=0) {
    this.size = { x: maxX, y: maxY };
  }

  setSize(size:GridSize){
    this.size = size;
  }
  
  getSize():GridSize{
    return (this.size)
  }

  isWithin(position: XYPosition): boolean {
    console.log("*****rover  postion =>",position );
    console.log("*****grid  size =>",this.size )

    return position.x < this.size.x && position.y < this.size.y;
  }
}
