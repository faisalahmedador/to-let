import React, { Component } from "react";

import UpperHeader from "./Components/UpperHeader/UpperHeader";
import Header from "./Components/Header/Header";
import LandingPage from "./Pages/LandingPage";
import AdDetails from "./Pages/AdDetails";
import Default from "./Pages/Default";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <>
        <UpperHeader />
        
          <Header />
          <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/addetails" exact component={AdDetails} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
