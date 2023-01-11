import { Grid } from "./grid";
import { setPlateauSizeCmd } from "./interface_controller";
import { RoverPosition } from "./types";

export class Rover {
  static plateau = new Grid();

  position: RoverPosition;

  constructor(position: RoverPosition) {
    if (Rover.plateau.isWithin(position)) {
      console.log(" *** Rover : Is withingrid => ",Rover.plateau.isWithin(position) )
      this.position = position;
    } else {
      this.position = { x: 0, y: 0, facing: position.facing };
    }
  }

  getPosition() {
    return this.position;
  }
}
