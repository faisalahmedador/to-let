import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { Search } from "./reducers/landingpagereducers";
import { Header } from "./reducers/headerreducers";
import { Add } from "./reducers/addetailsreducers";
//import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import "./Style/main.scss";

const logger = createLogger();
const reducerCombined = combineReducers({ Search, Header,Add });
const store = createStore(
  reducerCombined,
  applyMiddleware(thunkMiddleware, logger)
);
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
