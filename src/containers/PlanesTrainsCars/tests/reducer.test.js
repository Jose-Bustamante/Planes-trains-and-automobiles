import reducer, { initialState } from "../reducer";
import * as types from "../constants";
import mockApiResponse from "./mockApiResponse";

describe("PlanesTrainsCarsReducer Container Reducer", () => {
  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_PLANES_TRAINS_CARS", () => {
    const action = {
      type: types.GET_PLANES_TRAINS_CARS,
    };
    const result = {
      ...initialState,
      loading: true,
    };
    expect(reducer(initialState, action)).toEqual(result);
  });

  it("should handle GET_PLANES_TRAINS_CARS_SUCCESS", () => {
    const action = {
      type: types.GET_PLANES_TRAINS_CARS_SUCCESS,
      payload: [...mockApiResponse],
    };
    const result = {
      ...initialState,
      data: [...mockApiResponse],
    };
    expect(reducer(initialState, action)).toEqual(result);
  });

  it("should handle GET_PLANES_TRAINS_CARS_FAIL", () => {
    const action = {
      type: types.GET_PLANES_TRAINS_CARS_FAIL,
      payload: "error",
      loading: false,
    };
    const result = {
      ...initialState,
      error: "error",
      loading: false,
    };
    expect(reducer(initialState, action)).toEqual(result);
  });

  it("should handle CHANGE_FILTER_PLANES_TRAINS_CARS_VALUE, the duplication should be sorted out", () => {
    const action = {
      type: types.CHANGE_FILTER_PLANES_TRAINS_CARS_VALUE,
      payload: { filterBy: "color", value: "blue" },
    };

    const state = {
      ...initialState,
      filterBy: [
        { filterBy: "color", value: "red" },
        { filterBy: "type", value: "car" },
      ],
    };

    const result = {
      ...initialState,
      filterBy: [
        { filterBy: "color", value: "blue" },
        { filterBy: "type", value: "car" },
      ],
    };

    expect(reducer(state, action)).toEqual(result);
  });

  it("should handle CLEAR_FILTERS_PLANES_TRAINS_CARS, should remove all filters", () => {
    const action = {
      type: types.CLEAR_FILTERS_PLANES_TRAINS_CARS,
    };

    const state = {
      ...initialState,
      filterBy: [
        { filterBy: "color", value: "red" },
        { filterBy: "type", value: "car" },
      ],
    };

    const result = {
      ...initialState,
      filterBy: [],
    };

    expect(reducer(state, action)).toEqual(result);
  });
});
