import { clear, print, askQuestion } from "./console";
import {
  setPlateauSizeCmd,
  placeRoverOnMarsCmd,
  moveRoverCmd,
} from "./src/interface_controller";
import {
  Direction,
  XYPosition,
  RoverPosition,
  Move,
  GridSize,
} from "./src/types";
import { Rover } from "./src/rover";
import { ThingOnMars } from "./src/thing_on_mars";

function runRovers(): void {
  let response: string = "";
  clear(false);
  print("--------------------------");
  print("| Rovers On ! |");
  print("--------------------------");
  print(" 0 = set Plateau Size");
  print(" 1 = set Rover Down");
  print(" 2 = move Rover");
  print(" 3 = Exit");

  askQuestion(`Enter Your choice (0 .. 3) `, selectOperation);
}

function selectOperation(choice: string) {
  switch (choice) {
    case "0":
      askQuestion(`Enter Plateau Size: X Y `, setPlateauDimensions);
      break;
    case "1":
      if (ThingOnMars.plateau) {
        const plateauSize: GridSize = ThingOnMars.plateau.getSize();
        print(`Plateau Size  : ${plateauSize.x}  ${plateauSize.y} `);
        askQuestion(`Enter Rover Inital Position: X Y L/R`, setRoverDown);
      } else {
        print(" Error : Plateau is not defined");
        askQuestion(`Press Enter to continue `, runRovers);
      }
      break;
    case "2":
      if (Rover.getCurrentRover() && ThingOnMars.plateau) {
        const roverPosition: RoverPosition =
          Rover.getCurrentRover().getPosition();
        const plateauSize: GridSize = ThingOnMars.plateau.getSize();
        print(`Plateau Size  : ${plateauSize.x}  ${plateauSize.y} `);
        print(
          `Current Rover is at : ${roverPosition.x}  ${roverPosition.y}  ${roverPosition.facing}`
        );

        askQuestion(`Enter Rover Move CMD L/R/M`, moveRover);
      } else if (!Rover.getCurrentRover()) {
        print(" Error :No current Rover defined. Place Rover first");
        askQuestion(`Press Enter to continue `, runRovers);
      } else if (!ThingOnMars.plateau) {
        print(" Error :Plateau is not defined");
        askQuestion(`Press Enter to continue `, runRovers);
      }
      break;
    case "E":
      break;
    default:
    //default block statement;
    
  }
}

function xyValid(str: string[]) {
  return !str.some((str) => isNaN(Number(str))) && str.length === 2;
}

function orientationValid(str: string): boolean {
  return str === "N" || str === "E" || str === "S" || str === "W";
}

function setPlateauDimensions(plateauSize: string) {
  const splitted = plateauSize.trim().split(" ");

  if (xyValid(splitted)) {
    setPlateauSizeCmd({ x: parseInt(splitted[0]), y: parseInt(splitted[1]) });
    askQuestion("Press ENTER to continue ! ", runRovers);
  } else {
    askQuestion("Incorrcet Input - Press Enter to try again", runRovers);
  }
}

function convertToDirection(str: string): Direction {
  let dirn: Direction = "N";
  switch (str) {
    case "N":
      dirn = "N";
      break;
    case "E":
      dirn = "E";
      break;
    case "S":
      dirn = "S";
      break;
    case "W":
      dirn = "W";
      break;
    default:
  }
  return dirn;
}

function setRoverDown(roverPosition: string) {
  const splitted = roverPosition.trim().split(" ");

  if (
    splitted.length === 3 &&
    xyValid(splitted.slice(0, 2)) &&
    orientationValid(splitted.slice(2, 3).join())
  ) {
    
    const roverPosition: RoverPosition = placeRoverOnMarsCmd({
      x: parseInt(splitted[0]),
      y: parseInt(splitted[1]),
      facing: convertToDirection(splitted[2]),
    });
    print(
      `Rover placed at : ${roverPosition.x}  ${roverPosition.y}  ${roverPosition.facing}`
    );
    askQuestion("Press ENTER to continue  ", runRovers);
  } else {
    askQuestion("Incorrcet Input - Press Enter to try again", runRovers);
  }
}

function moveRover(moveCmd: string) {
  const splitted: string[] = moveCmd.trim().split("");
  if (
    splitted.filter((item) => !(item === "L" || item === "R" || item === "M"))
      .length === 0 &&
    moveCmd.length !== 0
  ) {
    let moveCmd: Move[] = [];
    splitted.forEach((item) => {
      switch (item) {
        case "L":
          moveCmd.push("L");
          break;
        case "R":
          moveCmd.push("R");
          break;
        case "M":
          moveCmd.push("M");
          break;
        default:
      }
    });
    const roverPosition: RoverPosition = moveRoverCmd(moveCmd);
    print(
      `Rover moved to : ${roverPosition.x}  ${roverPosition.y}  ${roverPosition.facing}`
    );
    askQuestion("Press ENTER to continue  ", runRovers);
  } else {
    askQuestion("Incorrcet Input - Press Enter to try again", runRovers);
  }
}

runRovers();
