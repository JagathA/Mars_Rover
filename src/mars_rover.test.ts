import {
  setPlateauSizeCmd,
  placeRoverOnMarsCmd,
  moveRoverCmd,
} from "./interface_controller";
import { Rover } from "./rover";
import{Move} from "./types";

describe("Check Plateau Creation cmd", () => {
  it("create and size plateau", () => {
    setPlateauSizeCmd({ x: 5, y: 5 });

    expect(Rover.plateau.getSize()).toEqual({ x: 5, y: 5 });
  });
});

describe("Place Rover cmd", () => {
  it("Place Rover within plateau limits - North", () => {
    setPlateauSizeCmd({ x: 5, y: 5 });
    expect(placeRoverOnMarsCmd({ x: 4, y: 4, facing: "N" })).toEqual({
      x: 4,
      y: 4,
      facing: "N",
    });
  });

  it("Place Rover within plateau limits - North", () => {
    expect(placeRoverOnMarsCmd({ x: 0, y: 0, facing: "E" })).toEqual({
      x: 0,
      y: 0,
      facing: "E",
    });
  });

  it("Place Rover within plateau limits - West", () => {
    expect(placeRoverOnMarsCmd({ x: 0, y: 1, facing: "W" })).toEqual({
      x: 0,
      y: 1,
      facing: "W",
    });
  });

  it("Place Rover within plateau limits - South", () => {
    expect(placeRoverOnMarsCmd({ x: 3, y: 2, facing: "S" })).toEqual({
      x: 3,
      y: 2,
      facing: "S",
    });
  });

  it("Place Rover outside plateau limits - both X and Y exceed limit", () => {
    expect(placeRoverOnMarsCmd({ x: 6, y: 6, facing: "N" })).toEqual({
      x: 0,
      y: 0,
      facing: "N",
    });
  });

  it("Place Rover outside plateau limits -  X  exceed limit", () => {
    expect(placeRoverOnMarsCmd({ x: 6, y: 4, facing: "E" })).toEqual({
      x: 0,
      y: 0,
      facing: "E",
    });
  });

  it("Place Rover outside plateau limits -  X  exceed limit", () => {
    expect(placeRoverOnMarsCmd({ x: 0, y: 7, facing: "S" })).toEqual({
      x: 0,
      y: 0,
      facing: "S",
    });
  });
});

describe("Check Rover Rotate Left", () => {
  it("turn Rover Left from North", () => {
    placeRoverOnMarsCmd({ x: 0, y: 0, facing: "N" });
    expect(moveRoverCmd(["L"])).toEqual({ x: 0, y: 0, facing: "W" });
  });

  it("turn  Rover Left", () => {
    placeRoverOnMarsCmd({ x: 2, y: 3, facing: "W" });
    expect(moveRoverCmd(["L"])).toEqual({ x: 2, y: 3, facing: "S" });
  });

  it("turn  Rover Left", () => {
    placeRoverOnMarsCmd({ x: 4, y: 3, facing: "S" });
    expect(moveRoverCmd(["L"])).toEqual({ x: 4, y: 3, facing: "E" });
  });

  it("turn  Rover Left", () => {
    placeRoverOnMarsCmd({ x: 4, y: 4, facing: "E" });
    expect(moveRoverCmd(["L"])).toEqual({ x: 4, y: 4, facing: "N" });
  });
});

describe("Check Rover roatte Right", () => {
  it("turn Rover right from North", () => {
    placeRoverOnMarsCmd({ x: 1, y: 0, facing: "N" });
    expect(moveRoverCmd(["R"])).toEqual({ x: 1, y: 0, facing: "E" });
  });

  it("turn  Rover Left", () => {
    placeRoverOnMarsCmd({ x: 0, y: 3, facing: "W" });
    expect(moveRoverCmd(["R"])).toEqual({ x: 0, y: 3, facing: "N" });
  });

  it("turn  Rover Left", () => {
    placeRoverOnMarsCmd({ x: 2, y: 1, facing: "S" });
    expect(moveRoverCmd(["R"])).toEqual({ x: 2, y: 1, facing: "W" });
  });

  it("turn  Rover Left", () => {
    placeRoverOnMarsCmd({ x: 3, y: 1, facing: "E" });
    expect(moveRoverCmd(["R"])).toEqual({ x: 3, y: 1, facing: "S" });
  });
});


describe("Check Rover move ", () => {
  it("Move North", () => {
    placeRoverOnMarsCmd({ x: 1, y: 0, facing: "N" });
    expect(moveRoverCmd(["M"])).toEqual({ x: 1, y: 1, facing: "N" });
  });

  it("Move South", () => {
    placeRoverOnMarsCmd({ x: 3, y: 4, facing: "S" });
    expect(moveRoverCmd(["M"])).toEqual({ x: 3, y: 3, facing: "S" });
  });

  it("Move East", () => {
    placeRoverOnMarsCmd({ x: 3, y: 4, facing: "E" });
    expect(moveRoverCmd(["M"])).toEqual({ x: 4, y: 4, facing: "E" });
  });

  it("Move West", () => {
    placeRoverOnMarsCmd({ x: 1, y: 3, facing: "W" });
    expect(moveRoverCmd(["M"])).toEqual({ x: 0, y: 3, facing: "W" });
  });

  it("Move North  - dont go out of plateau limit", () => {
    placeRoverOnMarsCmd({ x: 5, y: 5, facing: "N" });
    expect(moveRoverCmd(["M"])).toEqual({ x: 5, y: 5, facing: "N" });
  });

  it("Move Esat  - dont go out of plateau limit", () => {
    placeRoverOnMarsCmd({ x: 5, y: 4, facing: "E" });
    expect(moveRoverCmd(["M"])).toEqual({ x: 5, y: 4, facing: "E" });
  });

  it("Move South - dont go out of plateau limit", () => {
    placeRoverOnMarsCmd({ x: 3, y: 0, facing: "S" });
    expect(moveRoverCmd(["M"])).toEqual({ x: 3, y: 0, facing: "S" });
  });

  it("Move West - dont go out of plateau limit", () => {
    placeRoverOnMarsCmd({ x: 0, y: 2, facing: "W" });
    expect(moveRoverCmd(["M"])).toEqual({ x: 0, y: 2, facing: "W" });
  });

});

describe("Check Rover move and Turn", () => {
  it("Move and Turn 1", () => {
    setPlateauSizeCmd({ x: 5, y: 5 })
    placeRoverOnMarsCmd({ x: 1, y: 2, facing: "N" });
    expect(moveRoverCmd(["L","M","L","M","L","M","L","M","M"])).toEqual({ x: 1, y: 3, facing: "N" });
  });

  it("Move and Turn 1", () => {
    setPlateauSizeCmd({ x: 5, y: 5 })
    placeRoverOnMarsCmd({ x: 3, y: 3, facing: "E" });
    expect(moveRoverCmd(["M","M","R","M","M","R","M","R","R","M"])).toEqual({ x: 5, y: 1, facing: "E" });
  });

});
