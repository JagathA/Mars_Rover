
import { createPlateauCmd,placeRoverOnMars } from "./interface_controller";

describe("Check Plateau Creation cmd", () => {
  it("place rover", () => {
    expect(placeRoverOnMars({x:5,y:5,facing:"N" })).toEqual({x:5,y:5,facing:"N" });
  });
  
});
