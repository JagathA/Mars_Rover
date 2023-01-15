import { Grid } from "./grid";
import { Rover } from "./rover";
import { ThingOnMars } from "./thing_on_mars";

import { XYPosition, RoverPosition, GridSize, Move } from "./types";

export function setPlateauSizeCmd(size: GridSize) {
  ThingOnMars.plateau.setSize(size);
}

export function placeRoverOnMarsCmd(position: RoverPosition): RoverPosition {
  const currentRover = new Rover(position);
  Rover.SetCurrentRover(currentRover);
  return currentRover.getPosition();
}

export function moveRoverCmd(cmd: Move[]): RoverPosition {
  return Rover.getCurrentRover().move(cmd);
}
