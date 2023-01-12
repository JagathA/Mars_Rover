import { Grid } from "./grid";
import { setPlateauSizeCmd } from "./interface_controller";
import { RoverPosition, Move, Direction, Rotate } from "./types";

export class Rover {
  static plateau = new Grid();

  private readonly rotateDirn: Direction[] = ["N", "E", "S", "W"];
  private readonly rotateLeftDirn: Direction[] = ["N", "W", "S", "E"];
  //[["N", "E"], ["E", "S"], ["S", "W"],["W", "N"]]

  position: RoverPosition;

  constructor(position: RoverPosition) {
    if (Rover.plateau.isWithin(position)) {
      //console.log(" *** Rover : Is withingrid => ",Rover.plateau.isWithin(position) )
      this.position = position;
    } else {
      this.position = { x: 0, y: 0, facing: position.facing };
    }
  }

  getPosition() {
    return this.position;
  }

  move(cmd: Move[]): RoverPosition {
    let nowPosition: RoverPosition;
    cmd.forEach((step) => {
      if (step === "L" || step === "R") {
        this.rotate(step);
      }
      // else {move()};
    });
    return this.position;
  }

  private rotate(dirn: Rotate) {
    let rotateOffset: number = 0;
    
    if (dirn === "R") {      // *** can improve here
      rotateOffset = 1;
    } else {
      rotateOffset = this.rotateDirn.length - 1;
    }

    let index = this.rotateDirn.indexOf(this.position.facing);
    index = (index + rotateOffset) % this.rotateDirn.length;
    this.position.facing = this.rotateDirn[index];
  }
}
