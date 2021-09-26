import React, { Component } from "react";
import {Router} from 'react-router-dom'
import "./App.css";



import Routes from './Routes/routes'


// import HeaderDiv from './Components/Header/HeaderDiv'

class App extends Component {
  render() {
    return (
      <>
        <Routes />
      </>
    );
  }
}

export default App;
