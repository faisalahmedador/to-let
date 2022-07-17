import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { Search } from "./redux/reducers/landingpagereducers";
import { Add } from "./redux/reducers/addetailsreducers";
import { signinReducer} from "./redux/reducers/signinReducers";
import { signupReducer } from "./redux/reducers/SignupReducers";
import { adsubmitReducers } from "./redux/reducers/adsubmitreducers";
import { getUserAdsReducers } from "./redux/reducers/getuseradreducers";
import {adDeleteReducer} from "./redux/reducers/adDeleteReducer";
import { getThanaReducer, getDistrictReducer, getPostOfficeReducer, getDivisionReducer} from "./redux/reducers/getAddressReducers";
import {adUpdateReducer} from "./redux/reducers/adUpdateReducer";
import {getAdDetailsReducers} from "./redux/reducers/getAdDetailsReducer";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import SubmitQuestionProvider from "./Context/submitAdFormContext";

import "./Style/main.scss";

const logger = createLogger();
const reducerCombined = combineReducers({
  Search,
  Add,
  adsubmitReducers,
  signinReducer,
  signupReducer,
  getUserAdsReducers,
  getThanaReducer,
  getDistrictReducer,
  getPostOfficeReducer,
  getDivisionReducer,
  adDeleteReducer,
  adUpdateReducer,
  getAdDetailsReducers
});
const store = createStore(
  reducerCombined,
  applyMiddleware(thunkMiddleware, logger)
);
ReactDOM.render(
  <Provider store={store}>
    <SubmitQuestionProvider>
      <App />
    </SubmitQuestionProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
