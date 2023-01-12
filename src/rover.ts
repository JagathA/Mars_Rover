import { Grid } from "./grid";
import { setPlateauSizeCmd } from "./interface_controller";
import { RoverPosition, Move, Direction, Rotate } from "./types";

export class Rover {
  static plateau = new Grid();

  private readonly rotateRightDirn: Direction[] = 
    ["N", "E", "S", "W"];
    private readonly rotateLeftDirn: Direction[] = 
    ["N", "W", "S", "E"];
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
    cmd.forEach((moveCmd) => {
      if (moveCmd === "L") {
        console.log("******Turning left");
        this.rotateLeft();
      }
      // else if (moveCmd ==="R") {
      //   this.rotateRight();
      // }
      // else {move()};
    });
    //this.position = {x:5, y:4, facing:"N"}
    return this.position;
  }

  private rotateLeft() {

    // this.rotateLeftDirn.map((item, index) => {
    

    let index = this.rotateLeftDirn.indexOf(this.position.facing);
    // console.log(" facing ******=>", this.position.facing);
    // console.log(" index ******=>", index);
    index = (index+1)%this.rotateLeftDirn.length;
    // console.log(" index wrap ******=>", index);
    this.position.facing = this.rotateLeftDirn[index];
    

    // console.log(" new dirn ******=>", this.position.facing);
  }


  // private rotateRight() {
  //   //this.position.facing = this.rotate.map((item=>){

  //  // })
  //  this.position.facing = this.rotate[1][0];
  // }

  // private move(){

  // }
}
