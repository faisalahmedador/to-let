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

class App extends Component {
  render() {
    return (
      <>
        <UpperHeader />
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/addetails" exact component={AdDetails} />
            <Route path='/submitads' exact component={AdSubmitPage} />
            <Route component={Default} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </>
    );
  }
}

export default App;
