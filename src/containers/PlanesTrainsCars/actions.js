import {
  GET_PLANES_TRAINS_CARS,
  GET_PLANES_TRAINS_CARS_SUCCESS,
  GET_PLANES_TRAINS_CARS_FAIL,
  CHANGE_FILTER_PLANES_TRAINS_CARS_VALUE,
  CLEAR_FILTERS_PLANES_TRAINS_CARS,
  CLEAR_FILTER_PLANES_TRAINS_CARS_BY_NAME,
} from "./constants";

export const getPlanesTrainsCars = () => ({ type: GET_PLANES_TRAINS_CARS });
export const getPlanesTrainsCarsSuccess = (data) => ({
  type: GET_PLANES_TRAINS_CARS_SUCCESS,
  payload: data,
});
export const getPlanesTrainsCarsFail = (error) => ({
  type: GET_PLANES_TRAINS_CARS_FAIL,
  payload: error,
});
export const changeFilterPlanesTrainsCarsValue = (filter) => ({
  type: CHANGE_FILTER_PLANES_TRAINS_CARS_VALUE,
  payload: filter,
});
export const clearFilterPlanesTrainsCarsByName = (filter) => ({
  type: CLEAR_FILTER_PLANES_TRAINS_CARS_BY_NAME,
  payload: filter,
});
export const ClearFiltersPlanesTrainsCars = () => ({
  type: CLEAR_FILTERS_PLANES_TRAINS_CARS,
});
