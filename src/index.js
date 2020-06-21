import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

//Imports
import { Provider } from "react-redux";
import { createStore } from "redux";
import { increment, decrement } from "./actions/counterAction";

import { counter } from "./reducers/counterReducer";
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
