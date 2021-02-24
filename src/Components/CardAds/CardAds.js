import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import house from "../../Assets/images/duplex.png";
import Container from "react-bootstrap/Container";
import { FcApproval } from "react-icons/fc";
import { FcDisapprove } from "react-icons/fc";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cardads2 from "../Cardads2/Cardads2";
import {Link} from 'react-router-dom'
import './_cardads.scss'
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

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
  img
}) => {

  const [viewImg, setViewimg] = useState(img[0].img)
  // const [photoIndex, setPhotoIndex] = useState(0);
  // const [isOpen, setIsopen] = useState(false);

  return (
    <>
      <Container fluid id="card-container">
        <Card id="card-style">
          <Row  className="card-div" >
            <Col lg={3}>
              <Card.Img variant="top" src={viewImg}  style={{ minWidth: '36rem' }} />
            </Col>

            <Col lg={9}>
              <ListGroup>
                <ListGroup.Item className="details">
                  <h2 className="title">{description}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="specification">
                    <p>
                      Location:
                      <span> {location}  </span>
                    </p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="details">
                  <div className="specification">
                    <p>
                      Bedroom: 
                      <span>{specification.bedroom}</span>
                    </p>
                    <p>
                      Bathroom: 
                      <span> {specification.bathroom}</span>
                    </p>
                    <p>
                      Area: 
                      <span> {area}</span>
                    </p>
                    <p>
                      Rent:
                      <span> {price} </span>
                    </p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="specification">
                    <p>
                      Available from: 
                      <span>{available}</span>
                    </p>
                    <p>
                      User Verified: 
                      <span> {!verified ? <FcDisapprove style={{ fontSize: '15px' }}  /> : <FcApproval style={{ fontSize: '15px' }}  />}</span>
                    </p>
                    <p>
                      Contact No:
                      <span> {contact} </span>
                    </p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="details">
                  <div className="specification-image">
                    {/* <Cardads2  img={img} /> */}
                    <div>
                      {
                        img.map((i, index) => {
                            return(
                              <a onClick={() => {setViewimg(i.img)}} style={{ cursor: 'pointer' }}>
                                <img
                                  src={i.img}
                                  alt="img"
                                />
                              </a>                              
                            )
                        })
                      }
                    </div>
                    <Link className='button-default--card' to='/addetails'>
                      View details
                    </Link>
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
