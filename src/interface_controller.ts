import { Grid } from "./grid";
import { Rover } from "./rover";
//type Coords = number;
// type XCoords = Coords;
// type YCoords = Coords;

import {XYPosition,RoverPosition, GridSize, Move} from "./types"

let currentRover : Rover;  // Bad !need to remove this global varaiable later

export function setPlateauSizeCmd (size :GridSize){
    Rover.plateau.setSize(size);
}

export function placeRoverOnMarsCmd(position : RoverPosition) : RoverPosition{
    currentRover = new Rover(position);
    return currentRover.getPosition();
}

export function moveRoverCmd(cmd : Move[]) : RoverPosition{
   
    return currentRover.move(cmd);
}