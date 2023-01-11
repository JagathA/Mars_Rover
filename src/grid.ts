
import { GridSize } from "./types";


export class Grid {
    size : GridSize;  
   
    constructor(maxX : number , maxY : number) {
      this.size = {x:maxX, y:maxY};
    }
  }