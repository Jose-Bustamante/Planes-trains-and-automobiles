import { initialState } from "../reducer";
import mockApiResponse from "./mockApiResponse";
import * as selectors from "../selectors";

let mockState;

describe("PlanesTrainsCarsReducer Selectors", () => {
  beforeEach(() => {
    mockState = {
      PlanesTrainsCarsReducer: {
        ...initialState,
      },
    };
  });

  it("should select the domain", () => {
    expect(selectors.selectPlanesTrainsCarsDomain(mockState)).toEqual(
      mockState.PlanesTrainsCarsReducer
    );
  });

  it("should select the selectPlanesTrainsCarsFilters", () => {
    const expected = [{ filterBy: "color", value: "green" }];
    const result = selectors.selectPlanesTrainsCarsFilters({
      PlanesTrainsCarsReducer: {
        filterBy: expected,
      },
    });
    expect(result).toEqual(expected);
  });

  it("should select the selectIsLoadingPlanesTrainsCars", () => {
    expect(selectors.selectIsLoadingPlanesTrainsCars(mockState)).toEqual(false);
  });

  it("should select the selectPlanesTrainsCarsError", () => {
    const expected = "error";
    const result = selectors.selectPlanesTrainsCarsError({
      PlanesTrainsCarsReducer: {
        error: expected,
      },
    });
    expect(result).toEqual(expected);
  });

  it("should select the selectVehicleTypes", () => {
    const expected = ["car", "airplane", "train"];
    const result = selectors.selectVehicleTypes({
      PlanesTrainsCarsReducer: {
        data: [...mockApiResponse],
        filterBy: [],
      },
    });
    expect(result).toEqual(expected);
  });

  it("should select the selectVehicleColors", () => {
    const expected = ["red", "black", "yellow", "white", "green"];
    const result = selectors.selectVehicleColors({
      PlanesTrainsCarsReducer: {
        data: [...mockApiResponse],
        filterBy: [{ filterBy: "type", value: "car" }],
      },
    });
    expect(result).toEqual(expected);
  });

  it("should select the selectVehicleBrands", () => {
    const expected = [
      "Bugatti Veyron",
      "Boeing 787 Dreamliner",
      "Canadair North Star",
      "Airbus A400M Atlas",
      "Prairie 2-6-2",
      "Amer 4-4-0",
      "Ferrari F40",
    ];
    const result = selectors.selectVehicleBrands({
      PlanesTrainsCarsReducer: {
        data: [...mockApiResponse],
        filterBy: [{ filterBy: "color", value: "red" }],
      },
    });
    expect(result).toEqual(expected);
  });
});
