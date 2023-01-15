export interface XYPosition {
  x: number;
  y: number;
}

export interface GridSize {
  x: number;
  y: number;
}

export type Direction = "N" | "E" | "S" | "W";

export interface RoverPosition extends XYPosition {
  facing: Direction;
}

export type Rotate = "L" | "R";

export type Move = Rotate | "M";
