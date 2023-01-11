import { Grid } from "./grid";
import { Rover } from "./rover";
//type Coords = number;
// type XCoords = Coords;
// type YCoords = Coords;

import {XYPosition,RoverPosition, GridSize} from "./types"





export function createPlateauCmd (size :GridSize) : Grid {
    return new Grid(size.x, size.y);
}

export function placeRoverOnMars(position : RoverPosition) : RoverPosition{
    const rover = new Rover(position);
    return rover.getPosition();
}