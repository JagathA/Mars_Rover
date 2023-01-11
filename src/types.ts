// type Coords = number;
// type XCoords = Coords;
// type YCoords = Coords;

export interface XYPosition {
    x : number;
    y : number;
}

export interface GridSize {
    x : number;
    y : number;
}

export type Direction = "N" | "E" | "S" | "W";

export interface RoverPosition extends XYPosition {
    facing : Direction;
}
