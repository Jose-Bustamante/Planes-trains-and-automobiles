import { compose, createStore } from "redux";

import rootReducer from "./reducers";

export default function configureStore(preloadedState) {
  // Enable DevTools
  const enhancers = [
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
