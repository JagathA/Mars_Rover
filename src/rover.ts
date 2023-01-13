import { Grid } from "./grid";
//import { setPlateauSizeCmd } from "./interface_controller";
import { XYPosition, RoverPosition, Move, Direction, Rotate } from "./types";
import{ ThingOnMars} from"./thing_on_mars";

export class Rover extends ThingOnMars{
  static currentRover : Rover;

  private readonly rotateDirn: Direction[] = ["N", "E", "S", "W"];

  static getCurrentRover(): Rover {
    return Rover.currentRover;
  }

  static SetCurrentRover(rover:Rover) {
    Rover.currentRover = rover;
  }

  facing : Direction;


  constructor(position: RoverPosition) {
    let InitialPosition : XYPosition = {x: position.x, y:position.y};
    super(InitialPosition);
    this.facing = position.facing;
    Rover.currentRover = this;
  }

  getPosition() : RoverPosition{
    return {x:this.position.x, y:this.position.y, facing:this.facing};
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
    return {x:this.position.x, y:this.position.y, facing:this.facing};
  }

  private rotate(dirn: Rotate) {
    let rotateOffset: number = 0;

    if (dirn === "R") {
      // *** can improve here
      rotateOffset = 1;
    } else {
      rotateOffset = this.rotateDirn.length - 1;
    }

    let currentDirnIndex = this.rotateDirn.indexOf(this.facing);
    currentDirnIndex =
      (currentDirnIndex + rotateOffset) % this.rotateDirn.length;
    this.facing = this.rotateDirn[currentDirnIndex];
  }

  private moveXY() {
    let currentPosition: XYPosition = {
      x: this.position.x,
      y: this.position.y,
    };

    switch (this.facing) {
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

    if (Rover.plateau.isWithin(currentPosition)) {
      this.position.x = currentPosition.x;
      this.position.y = currentPosition.y;
    } else {
      // out of limits - raise error ?
    }
  }
}
