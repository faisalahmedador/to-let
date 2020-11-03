import React, { Component } from "react";

import UpperHeader from "../Components/UpperHeader/UpperHeader";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import SearchBox from "../Components/SearchBox/SearchBox";
import Catagory from "../Components/Catagory/Catagory";
import PopularSearch from "../Components/PopularSearch/PopularSearch";
import CardAds from "../Components/CardAds/CardAds";
import { addDetails } from "../Assets/data/data";
import Footer from "../Components/Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class LandingPage extends Component {
  render() {
    return (
      <>
        <UpperHeader />
        <Header />
        <Hero max="true">
          <Container>
            <Row>
              <Col lg={6} md={12} sm={12} xs={12}>
                <Catagory />
              </Col>

              <Col lg={6} md={12} sm={12} xs={12}>
                <SearchBox />
              </Col>
            </Row>
          </Container>
        </Hero>
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

        <Footer />
      </>
    );
  }
}

export default LandingPage;
