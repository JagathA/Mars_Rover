import { Grid } from "./grid";
import { Rover } from "./rover";
//type Coords = number;
// type XCoords = Coords;
// type YCoords = Coords;

import {XYPosition,RoverPosition, GridSize} from "./types"

export function setPlateauSizeCmd (size :GridSize){
    Rover.plateau.setSize(size);
}

export function placeRoverOnMarsCmd(position : RoverPosition) : RoverPosition{
    const rover = new Rover(position);
    return rover.getPosition();
}