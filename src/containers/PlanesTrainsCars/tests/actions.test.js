import * as actions from "../actions";
import * as types from "../constants";
import mockResponse from "./mockApiResponse";

describe("PlanesTrainsCars Actions tests", () => {
  it("should create an action for getPlanesTrainsCars", () => {
    const expected = {
      type: types.GET_PLANES_TRAINS_CARS,
    };
    expect(actions.getPlanesTrainsCars()).toEqual(expected);
  });

  it("should create an action for getPlanesTrainsCarsSuccess", () => {
    const values = mockResponse;
    const expected = {
      type: types.GET_PLANES_TRAINS_CARS_SUCCESS,
      payload: values,
    };
    expect(actions.getPlanesTrainsCarsSuccess(values)).toEqual(expected);
  });

  it("should create an action for getPlanesTrainsCarsFail", () => {
    const values = "error";
    const expected = {
      type: types.GET_PLANES_TRAINS_CARS_FAIL,
      payload: values,
    };
    expect(actions.getPlanesTrainsCarsFail(values)).toEqual(expected);
  });

  it("should create an action for changeFilterPlanesTrainsCarsValue", () => {
    const values = { filterBy: "type", value: "car" };
    const expected = {
      type: types.CHANGE_FILTER_PLANES_TRAINS_CARS_VALUE,
      payload: values,
    };
    expect(actions.changeFilterPlanesTrainsCarsValue(values)).toEqual(expected);
  });

  it("should create an action for ClearFiltersPlanesTrainsCars", () => {
    const expected = {
      type: types.CLEAR_FILTERS_PLANES_TRAINS_CARS,
    };
    expect(actions.ClearFiltersPlanesTrainsCars()).toEqual(expected);
  });
});
