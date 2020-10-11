import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import trafficMeister from "../../services/SytacMockService";

import * as selectors from "./selectors";
import * as action from "./actions";
import Icon from "../../components/Icon";
import ErrorIconAndMessage from "../../components/ErrorIconAndMessage";
import DropDown from "../../components/DropDown";
import VehiclesList from "../../components/VehiclesList";
import { ReactComponent as LoadingIcon } from "../../assets/loading.svg";

import { PlanesTrainsCarsWrapper, FormWrapper, StyledButton } from "./styles";

const PlanesTrainsCars = () => {
  // initialize the dispatch and the selectors
  const dispatch = useDispatch();
  const planesTrainsCars = useSelector(selectors.selectPlanesTrainsCars);
  const vehicleTypes = useSelector(selectors.selectVehicleTypes);
  const vehicleBrands = useSelector(selectors.selectVehicleBrands);
  const vehicleColors = useSelector(selectors.selectVehicleColors);
  const planesTrainsCarsError = useSelector(
    selectors.selectPlanesTrainsCarsError
  );
  const isLoadingPlanesTrainsCars = useSelector(
    selectors.selectIsLoadingPlanesTrainsCars
  );

  // This is my fake middleware, looking at scaling I would go for thunks for small app or sagas for a larger one.
  const handleSearch = () => {
    // eslint-disable-next-line no-undef
    trafficMeister.fetchData((error, data) => {
      if (error) {
        dispatch(action.getPlanesTrainsCarsFail(error));
      } else {
        dispatch(action.getPlanesTrainsCarsSuccess(data));
      }
    });
  };

  // first load of the component, we want to get the data
  useEffect(() => {
    dispatch(action.getPlanesTrainsCars());
    if (!isLoadingPlanesTrainsCars) {
      handleSearch(dispatch);
    }
  }, []);

  return (
    <PlanesTrainsCarsWrapper>
      <FormWrapper>
        <DropDown
          name="type"
          data-testid="type"
          options={vehicleTypes}
          onSelect={(data) =>
            dispatch(action.changeFilterPlanesTrainsCarsValue(data))
          }
          onClean={(filterName) =>
            dispatch(action.clearFilterPlanesTrainsCarsByName(filterName))
          }
          value={useSelector(
            selectors.selectPlanesTrainsCarsFilterByName("type")
          )}
        />
        <DropDown
          name="brand"
          data-testid="brand"
          options={vehicleBrands}
          onSelect={(data) =>
            dispatch(action.changeFilterPlanesTrainsCarsValue(data))
          }
          onClean={(filterName) =>
            dispatch(action.clearFilterPlanesTrainsCarsByName(filterName))
          }
          value={useSelector(
            selectors.selectPlanesTrainsCarsFilterByName("brand")
          )}
        />
        <DropDown
          name="color"
          data-testid="color"
          options={vehicleColors}
          onSelect={(data) =>
            dispatch(action.changeFilterPlanesTrainsCarsValue(data))
          }
          onClean={(filterName) =>
            dispatch(action.clearFilterPlanesTrainsCarsByName(filterName))
          }
          value={useSelector(
            selectors.selectPlanesTrainsCarsFilterByName("color")
          )}
        />
        {!isLoadingPlanesTrainsCars && !planesTrainsCarsError && (
          <StyledButton
            data-testid="button-clear"
            onClick={() => dispatch(action.ClearFiltersPlanesTrainsCars())}
          >
            Clear filters
          </StyledButton>
        )}
      </FormWrapper>
      {isLoadingPlanesTrainsCars && (
        <Icon as={LoadingIcon} height="200px" width="200px" />
      )}
      {planesTrainsCarsError && (
        <ErrorIconAndMessage message={planesTrainsCarsError} />
      )}
      <VehiclesList planesTrainsCars={planesTrainsCars} />
    </PlanesTrainsCarsWrapper>
  );
};

export default PlanesTrainsCars;
