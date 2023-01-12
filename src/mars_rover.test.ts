import {
  setPlateauSizeCmd,
  placeRoverOnMarsCmd,
  moveRoverCmd,
} from "./interface_controller";
import { Rover } from "./rover";

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
    expect(placeRoverOnMarsCmd({ x: 5, y: 5, facing: "N" })).toEqual({
      x: 0,
      y: 0,
      facing: "N",
    });
  });

  it("Place Rover outside plateau limits -  X  exceed limit", () => {
    expect(placeRoverOnMarsCmd({ x: 5, y: 4, facing: "E" })).toEqual({
      x: 0,
      y: 0,
      facing: "E",
    });
  });

  it("Place Rover outside plateau limits -  X  exceed limit", () => {
    expect(placeRoverOnMarsCmd({ x: 0, y: 6, facing: "S" })).toEqual({
      x: 0,
      y: 0,
      facing: "S",
    });
  });
});

describe("Check Rover move", () => {
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
