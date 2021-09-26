import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { Search } from "./redux/reducers/landingpagereducers";
import { Header } from "./redux/reducers/headerreducers";
import { Add } from "./redux/reducers/addetailsreducers";
import { signinReducer, logoutReducer } from "./redux/reducers/signinReducers";
import { signupReducer } from "./redux/reducers/SignupReducers";
import { adsubmitreducers } from "./redux/reducers/adsubmitreducers";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import Popper from "popper.js";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./Style/main.scss";

const logger = createLogger();
const reducerCombined = combineReducers({
  Search,
  Header,
  Add,
  adsubmitreducers,
  signinReducer,
  logoutReducer,
  signupReducer
});
const store = createStore(
  reducerCombined,
  applyMiddleware(thunkMiddleware, logger)
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
