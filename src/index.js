import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

//Imports
import { Provider } from "react-redux";
import { createStore } from "redux";
// Actions
export const increment = () => {
  return {
    type: "INC",
  };
};
export const decrement = () => {
  return {
    type: "DEC",
  };
};
// Reducers
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
  }
  return state;
};

// Creating Store for Reducer
let store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
