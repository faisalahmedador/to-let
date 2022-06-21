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
import CardAds from "../Components/CardAds/CardAds";
import { addDetails } from "../Assets/data/data";
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

class SearchResult extends Component {
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
          {/* <Parallax>
            <Hero max="true">
              <Container style={{ width: "70%" }}> */}
              <div style={{ margin: '5% 10px 0 10px' }}>
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
                {/* <Row>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <Catagory setCatagory={onSetCatagory} />
                  </Col>

                  <Col lg={8} md={8} sm={12} xs={12}>
                    
                  </Col>
                </Row> */}
              {/* </Container>
            </Hero>
          </Parallax> */}
          {/* <Catagory setCatagory={onSetCatagory} />
          <PopularSearch /> */}
          <h1
            style={{
              paddingTop: "1%",
              display: "flex",
              justifyContent: "center",
            //   paddingLeft: "12%",    
            }}
          >
            Search result
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
