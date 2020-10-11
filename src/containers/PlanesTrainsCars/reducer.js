import uniqBy from "lodash/uniqBy";

import {
  GET_PLANES_TRAINS_CARS,
  GET_PLANES_TRAINS_CARS_SUCCESS,
  GET_PLANES_TRAINS_CARS_FAIL,
  CHANGE_FILTER_PLANES_TRAINS_CARS_VALUE,
  CLEAR_FILTERS_PLANES_TRAINS_CARS,
  CLEAR_FILTER_PLANES_TRAINS_CARS_BY_NAME,
} from "./constants";

export const initialState = { loading: false, data: [], filterBy: [] };

export default function PlanesTrainsCarsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLANES_TRAINS_CARS:
      return { ...state, loading: true };
    case GET_PLANES_TRAINS_CARS_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case GET_PLANES_TRAINS_CARS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case CHANGE_FILTER_PLANES_TRAINS_CARS_VALUE:
      return {
        ...state,
        filterBy: uniqBy([action.payload, ...state.filterBy], "filterBy"),
      };
    case CLEAR_FILTERS_PLANES_TRAINS_CARS:
      return {
        ...state,
        filterBy: [],
      };
    case CLEAR_FILTER_PLANES_TRAINS_CARS_BY_NAME:
      return {
        ...state,
        filterBy: state.filterBy.filter((el) => el.filterBy !== action.payload),
      };
    default:
      return state;
  }
}
