import React, { Component } from "react";
import { addDetails } from "../Assets/data/data";
// import Hero from '../Components/Hero/Hero'
import { connect } from "react-redux";
import {
  setImage_1,
  setImage_2,
  setImage_3,
  setImage_4,
  //setUpdate,
} from "../redux/Actions/AdDetailsActions";
// import ScrollToTop from '../ScrollToTop'
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import AdDetailsInfo from "../Components/AdDetailsInfo/AdDetailsInfo";
import NearByProperties from "../Components/NearByProperties/NearByProperties";

const mapStateToProps = (state) => {
  return {
    imageFile: {
      bigImage: state.Add.bigImage,
      smallImage1: state.Add.smallImage1,
      smallImage2: state.Add.smallImage2,
      smallImage3: state.Add.smallImage3,
      smallImage4: state.Add.smallImage4,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetImage_1: (event) => {
      //console.log(event.target.src);
      dispatch(setImage_1(event.target.src));
    },
    onSetImage_2: (event) => {
      dispatch(setImage_2(event.target.src));
    },
    onSetImage_3: (event) => {
      dispatch(setImage_3(event.target.src));
    },
    onSetImage_4: (event) => {
      dispatch(setImage_4(event.target.src));
    },
    // onsetUpdateImage: (text) => {
    //   console.log(text);
    //   dispatch(setUpdate(text));
    // },
  };
};

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

class adDetails extends Component {
  render() {
    const {
      onSetImage_1,
      onSetImage_2,
      onSetImage_3,
      onSetImage_4,
      imageFile,
    } = this.props;

    return (
      <div style={{ marginTop: "42px" }}>
        <ScrollToTopOnMount />
        <Link to="/">
          <span>back to home</span>
        </Link>
        <AdDetailsInfo
          setImage1={onSetImage_1}
          setImage2={onSetImage_2}
          setImage3={onSetImage_3}
          setImage4={onSetImage_4}
          imageFile={imageFile}
        />
        {/* {addDetails.map((data) => {
          return{
            <NearByProperties />
          }
        })}
         */}
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            paddingLeft: "15px",
          }}
        >
          <h2 className="title">Near by Properties</h2>
        </div>
        <Container fluid>
          <Row>
            {addDetails.map((data) => {
              return (
                <NearByProperties
                  area={data.area}
                  price={data.price}
                  location={data.location}
                />
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(adDetails);
