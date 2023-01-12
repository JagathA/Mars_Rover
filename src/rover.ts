import { Grid } from "./grid";
import { setPlateauSizeCmd } from "./interface_controller";
import { XYPosition, RoverPosition, Move, Direction, Rotate } from "./types";

export class Rover {
  static plateau = new Grid();

  private readonly rotateDirn: Direction[] = ["N", "E", "S", "W"];

  position: RoverPosition;

  constructor(position: RoverPosition) {
    if (Rover.plateau.isWithin(position)) {
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
      } else {
        this.moveXY();
      }
    });
    return this.position;
  }

  private rotate(dirn: Rotate) {
    let rotateOffset: number = 0;

    if (dirn === "R") {
      // *** can improve here
      rotateOffset = 1;
    } else {
      rotateOffset = this.rotateDirn.length - 1;
    }

    let currentDirnIndex = this.rotateDirn.indexOf(this.position.facing);
    currentDirnIndex =
      (currentDirnIndex + rotateOffset) % this.rotateDirn.length;
    this.position.facing = this.rotateDirn[currentDirnIndex];
  }

  private moveXY() {
    let currentPosition: XYPosition = {
      x: this.position.x,
      y: this.position.y,
    };

    switch (this.position.facing) {
      case "N":
        currentPosition.y++;
        break;
      case "E":
        currentPosition.x++;
        break;
      case "S":
        currentPosition.y--;
        break;
      case "W":
        currentPosition.x--;
        break;
      default:
      //default block statement;
      //** raise error here */
    }

    this.position.x = currentPosition.x;
    this.position.y = currentPosition.y;
  }
}
