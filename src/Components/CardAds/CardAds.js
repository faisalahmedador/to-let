import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import house from "../../Assets/images/duplex.png";
import Container from "react-bootstrap/Container";
import { FcApproval } from "react-icons/fc";
import { FcDisapprove } from "react-icons/fc";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "lightbox2/dist/js/lightbox-plus-jquery.js";
import "lightbox2/dist/css/lightbox.css";
import lightboxPlusJquery from "lightbox2/dist/js/lightbox-plus-jquery.js";

function controlPopup() {
  lightboxPlusJquery.option({
    resizeDuration: 100,
    wrapAround: true,
    alwaysShowNavOnTouchDevices: true,
  });
}

const CardAds = ({
  id,
  description,
  area,
  location,
  specification,
  price,
  available,
  contact,
  verified,
}) => {
  return (
    <>
      <Container fluid id="card-container">
        <Card id="card-style">
          <Row>
            <Col lg={3}>
              <Card.Img variant="top" src={house} />
            </Col>

            <Col lg={9}>
              <ListGroup>
                <ListGroup.Item className="details">
                  <h2 className="title">{description}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="specification">
                    <p>
                      <span>Location: </span>
                      {location}
                    </p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="details">
                  <div className="specification">
                    <p>
                      <span>Bedroom: </span>
                      {specification.bedroom}
                    </p>
                    <p>
                      <span>Bathroom: </span>
                      {specification.bathroom}
                    </p>
                    <p>
                      <span>Area: </span>
                      {area}
                    </p>
                    <p>
                      <span>Rent: </span>
                      {price}
                    </p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="specification">
                    <p>
                      <span>Available from: </span>
                      {available}
                    </p>
                    <p>
                      <span>User Verified: </span>
                      {!verified ? <FcDisapprove /> : <FcApproval />}
                    </p>
                    <p>
                      <span>Contact No: </span>
                      {contact}
                    </p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="details">
                  <div className="specification-image">
                    <div>
                      <a
                        className=""
                        href="http://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"
                        data-lightbox={id}
                        data-title="Click the right half of the image to move forward."
                        onClick={controlPopup()}
                      >
                        <img
                          className=""
                          src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-3.jpg"
                          alt="Golden Gate Bridge with San Francisco in distance"
                        />
                      </a>
                      <a
                        className=""
                        href={house}
                        data-lightbox={id}
                        data-title="Or press the right arrow on your keyboard."
                        onClick={controlPopup()}
                      >
                        <img
                          className=""
                          src={house}
                          alt="Forest with mountains behind"
                        />
                      </a>
                      <a
                        className=""
                        href="http://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg"
                        data-lightbox={id}
                        data-title="The next image in the set is preloaded as you're viewing."
                        onClick={controlPopup()}
                      >
                        <img
                          className=""
                          src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-5.jpg"
                          alt="Bicyclist looking out over hill at ocean"
                        />
                      </a>
                      <a
                        className=""
                        href="http://lokeshdhakar.com/projects/lightbox2/images/image-6.jpg"
                        data-lightbox={id}
                        data-title="Click anywhere outside the image or the X to the right to close."
                        onClick={controlPopup()}
                      >
                        <img
                          className=""
                          src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-6.jpg"
                          alt="Small lighthouse at bottom with ocean behind"
                        />
                      </a>
                    </div>
                    <input
                      type="submit"
                      value="View Details"
                      className="button-default--card"
                    />
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default CardAds;
