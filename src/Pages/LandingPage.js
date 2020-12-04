import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setPropertyType,
  setSearchField,
  setLocation,
  setLowerLimit,
  setUpperLimit,
} from "../Actions/LandingPageActions";

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

const mapStateToProps = (state) => {
  // console.log(state.searchField);
  return {
    searchField: state.Search.searchField,
    catagory: state.Search.catagory,
    location: state.Search.location,
    lower_limit: state.Search.lower_limit,
    upper_limit: state.Search.upper_limit,
    priceUpdate: state.Search.priceUpdate
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
    } = this.props;
    return (
      <>
        {/* <UpperHeader /> */}
        <div>
          {/* <Header /> */}
          <Parallax>
            <Hero max="true">
              <Container>
                <Row>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <Catagory setCatagory={onSetCatagory} />
                  </Col>

                  <Col lg={6} md={6} sm={12} xs={12}>
                    <SearchBox
                      setSearch={onSetSearch}
                      locationRef={onSetLocation}
                      selectedLocation={this.props.location}
                      priceRefMin={onSetLowerLimit}
                      priceRefMax={onSetUpperLimit}
                      selectedLowerPrice ={this.props.lower_limit}
                      selectedUpperPrice ={this.props.upper_limit}
                      priceUpdate ={this.props.priceUpdate}
                      setCatagory = {onSetCatagory}
                    />
                  </Col>
                </Row>
              </Container>
            </Hero>
          </Parallax>
          <PopularSearch />
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
