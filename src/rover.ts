

import { RoverPosition } from "./types";


export class Rover {
    position : RoverPosition; 
   
    constructor(position : RoverPosition) {
      this.position = position;
    }

    getPosition () {
      return this.position;
    }
    
  }