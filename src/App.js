import React from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import PlanesTrainsCars from "./containers/PlanesTrainsCars";

const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <PlanesTrainsCars />
    </Provider>
  );
};

export default App;
