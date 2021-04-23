import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setPropertyType,
  setSearchField,
  setLocation,
  setBath,
  setBed,
  setLowerLimit,
  setUpperLimit,
} from "../redux/Actions/LandingPageActions";

// import UpperHeader from "../Components/UpperHeader/UpperHeader";
// import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import SearchBox from "../Components/SearchBox/SearchBox";
import Catagory from "../Components/Catagory/Catagory";
import PopularSearch from "../Components/PopularSearch/PopularSearch";
import CardAds from "../Components/CardAds/CardAds";
import Parallax from "../Components/Parallax/Parallax";
import { addDetails } from "../Assets/data/data";
// import Footer from "../Components/Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import SearchBox2 from "../Components/SearchBox/SearchBox2";

const mapStateToProps = (state) => {
   console.log(state.Search);
  return {
    searchField: state.Search.searchField,
    catagory: state.Search.catagory,
    location: state.Search.location,
    lower_limit: state.Search.lower_limit,
    upper_limit: state.Search.upper_limit,
    priceUpdate: state.Search.priceUpdate,
    bed: state.Search.bed,
    bath: state.Search.bath,
  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    onSetSearch: (event) => {
      dispatch(setSearchField(event.target.value));
    },
    onSetCatagory: (text) => {
      dispatch(setPropertyType(text));
    },

    onSetLocation: (text) => {
      dispatch(setLocation(text));
    },

    onSetBed: (text) => {
      dispatch(setBed(text));
    },

    onSetBath: (text) => {
      dispatch(setBath(text));
    },

    onSetLowerLimit: (text) => {
      dispatch(setLowerLimit(text));
    },
    onSetUpperLimit: (text) => {
      // console.log(text)
      dispatch(setUpperLimit(text));
    },
  };
};

class LandingPage extends Component {
  render() {
    const {
      onSetSearch,
      onSetCatagory,
      onSetLocation,
      onSetLowerLimit,
      onSetUpperLimit,
      onSetBed,
      onSetBath,
      searchField
    } = this.props;

   
    return (
      <>
        {/* <UpperHeader /> */}
        <div>
          {/* <Header /> */}
          <Parallax>
            <Hero max="true">
              <div style={{ width: "70%", marginTop: '15%' }}>
                {/* <SearchBox
                  setSearch={onSetSearch}
                  locationRef={onSetLocation}
                  bedRef={onSetBed}
                  bathRef={onSetBath}
                  selectedLocation={this.props.location}
                  selectedCatagory={this.props.catagory}
                  selectedBed={this.props.bed}
                  selectedBath={this.props.bath}
                  priceRefMin={onSetLowerLimit}
                  priceRefMax={onSetUpperLimit}
                  selectedLowerPrice={this.props.lower_limit}
                  selectedUpperPrice={this.props.upper_limit}
                  priceUpdate={this.props.priceUpdate}
                  typeRef={onSetCatagory}
                /> */}

                <SearchBox2/>

              </div>
            </Hero>
          </Parallax>
          <Catagory setCatagory={onSetCatagory} />
          <PopularSearch />
          <h1
            style={{
              paddingTop: "1%",
              display: "flex",
              justifyContent: "left",
              paddingLeft: "12%",
            }}
          >
            Recent Ads
          </h1>
          {addDetails.map((data) => {
            return (
              <CardAds
                id={data.id}
                description={data.description}
                area={data.area}
                location={data.location}
                specification={data.specification}
                price={data.price}
                available={data.available}
                contact={data.contact}
                verified={data.verified}
                img={data.img}
              />
            );
          })}
          

          {/* <Footer /> */}
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
