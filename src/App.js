import React, { Component } from "react";

import UpperHeader from "./Components/UpperHeader/UpperHeader";
import Header from "./Components/Header/Header";
import LandingPage from "./Pages/LandingPage";
import AdDetails from "./Pages/AdDetails";
import Default from "./Pages/Default";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import AdSubmitPage from "./Pages/AdSubmitPage";
import SearchResult from "./Pages/SearchResult";
import Login from './Components/LogIn/LogIn'


// import HeaderDiv from './Components/Header/HeaderDiv'

class App extends Component {
  render() {
    return (
      <>
        <UpperHeader />
        <Header />
        {/* <HeaderDiv /> */}
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/addetails"  component={AdDetails} />
            <Route path='/submitads'  component={AdSubmitPage} />
            <Route path= '/searchresult'  component={SearchResult} />
            <Route component={Default} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </>
    );
  }
}

export default App;
