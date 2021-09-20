import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { Search } from "./redux/reducers/landingpagereducers";
import { Header } from "./redux/reducers/headerreducers";
import { Add } from "./redux/reducers/addetailsreducers";
import {  adsubmitreducers} from './redux/reducers/adsubmitreducers'
// import ScrollToTop from './ScrollToTop';
//import './index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route, Router, Redirect } from "react-router-dom";
import Login from './Components/LogIn/LogIn';
import "./Style/main.scss";
import Signup from "./Components/Signup/Signup";

const logger = createLogger();
const reducerCombined = combineReducers({ Search, Header,Add,  adsubmitreducers });
const store = createStore(
  reducerCombined,
  applyMiddleware(thunkMiddleware, logger)
);
ReactDOM.render(
  <React.StrictMode>
    {/* <Router> */}
    
      {/* <ScrollToTop /> */}
      <Provider store={store}>
        {/* <App /> */}

        <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route path='/home' component={App} />

        </Switch>
        </BrowserRouter>
      
      </Provider>
    {/* </Router> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
