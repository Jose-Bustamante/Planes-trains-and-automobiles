import { createSelector } from "reselect";
import uniq from "lodash/uniq";
import filter from "lodash/filter";

const selectPlanesTrainsCarsDomain = (state) => state.PlanesTrainsCarsReducer;

// selects all active filters
const selectPlanesTrainsCarsFilters = createSelector(
  selectPlanesTrainsCarsDomain,
  ({ filterBy }) => filterBy
);

// selects all active filters
const selectPlanesTrainsCarsFilterByName = (name) => ({
  PlanesTrainsCarsReducer,
}) => {
  const filter = PlanesTrainsCarsReducer.filterBy.find(
    (el) => el.filterBy === name
  );
  if (filter) {
    return filter.value;
  }
  return "";
};

// returns all the results filtered by the active filters
const selectPlanesTrainsCars = createSelector(
  [selectPlanesTrainsCarsDomain, selectPlanesTrainsCarsFilters],
  ({ data }, filters) => {
    let filteredData = data;
    // we start filtering per active filter
    filters.forEach(({ filterBy, value }) => {
      // if the filter is by color, we have a different filtering since we need to dive in the array
      if (filterBy === "color") {
        filteredData = filteredData.filter((vehicle) => {
          return vehicle.colors.indexOf(value) >= 0;
        });
      } else {
        // if the filter doesn't require a deep dive on the object
        filteredData = filter(filteredData, [filterBy, value]);
      }
    });
    return filteredData;
  }
);

// is loading data
const selectIsLoadingPlanesTrainsCars = createSelector(
  selectPlanesTrainsCarsDomain,
  ({ loading }) => loading
);

// is there an error while loading the data
const selectPlanesTrainsCarsError = createSelector(
  selectPlanesTrainsCarsDomain,
  ({ error }) => error
);

const selectVehicleTypes = createSelector(selectPlanesTrainsCars, (data) =>
  // simple map array + remove already existing occurrences
  uniq(data.map((vehicle) => vehicle.type))
);

const selectVehicleBrands = createSelector(selectPlanesTrainsCars, (data) =>
  // simple map array + remove already existing occurrences
  uniq(data.map((vehicle) => vehicle.brand))
);

const selectVehicleColors = createSelector(selectPlanesTrainsCars, (data) => {
  const savedColors = [];
  // itinerate the array of vehicles
  data.forEach((vehicle) =>
    // dive into the vehicles colors, push every color in the new array
    vehicle.colors.forEach((color) => savedColors.push(color))
  );
  // clean up duplications within the array
  return uniq(savedColors);
});

export {
  selectPlanesTrainsCarsDomain,
  selectPlanesTrainsCars,
  selectIsLoadingPlanesTrainsCars,
  selectPlanesTrainsCarsError,
  selectVehicleTypes,
  selectVehicleBrands,
  selectVehicleColors,
  selectPlanesTrainsCarsFilters,
  selectPlanesTrainsCarsFilterByName,
};
