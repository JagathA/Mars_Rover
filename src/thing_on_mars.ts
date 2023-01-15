import { Grid } from "./grid";
import { XYPosition } from "./types";

export abstract class ThingOnMars {
  static plateau = new Grid();

  position: XYPosition;

  constructor(position: XYPosition) {
    if (ThingOnMars.plateau.isWithin(position)) {
      this.position = position;
    } else {
      this.position = { x: 0, y: 0 };
    }
  }
}
