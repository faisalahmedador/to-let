import React, { Component } from "react";
import { addDetails } from "../Assets/data/data";
// import Hero from '../Components/Hero/Hero'
import AdDetailsInfo from '../Components/AdDetailsInfo/AdDetailsInfo'
import NearByProperties from '../Components/NearByProperties/NearByProperties'

class adDetails extends Component {
  render() {
    return (
      <div style={{ marginTop: '42px'}}>
        <AdDetailsInfo />
        <NearByProperties />
      </div>
    );
  }
}

export default adDetails;
