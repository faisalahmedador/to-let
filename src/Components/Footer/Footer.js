import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsChevronRight } from "react-icons/bs";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagramSquare } from 'react-icons/fa'
import facebook from '../../Assets/images/facebook.jpg'
import linkin from '../../Assets/images/linkin.png'
import youtube from '../../Assets/images/youtube.png'
import instragram from '../../Assets/images/instragram.png'
// import audio from '../../Assets/record1.amr'
import './_footer.scss'

const Footer = () => {


  return (
    <>

      <Container fluid className="footer-main">
   
      {/* <button onClick={ () => onClick() }> click </button> */}
   
        <Row>
          <Col lg={3} className="footer-link-col">
            <div className="footer-link">
              <h2 className="title--footer">Helpful Links</h2>
              <div className="footerArea">
                <a href="#"><BsChevronRight />Submit an free ad</a>

                <a href="#"><BsChevronRight />Get flat near your location</a>

                <a href="#"><BsChevronRight />Contact us</a>
              </div>
            </div>
          </Col>
          <Col lg={3} >
            <Form.Group>
              <Form.Row>
                <Col>
                  <h2 className="title--footer">Give us a message</h2>
                  <Form.Control type="text" placeholder="Email" />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Col>
                  <Form.Control
                    type="text"
                    as="textarea"
                    placeholder="Please enter your message here"
                  />
                </Col>
              </Form.Row>
              <input
                type="submit"
                value="Submit"
                className="button-default--footer"
              />
            </Form.Group>
          </Col>
          <Col lg={3} >
            <div className='footer-link--catagories'>
              <h2 className="title--footer">Catagories</h2>
              <div className="footerArea--catagories">
                <a href="#"><BsChevronRight />family House</a>

                <a href="#"><BsChevronRight />Bachekor</a>

                <a href="#"><BsChevronRight />Sublet</a>

                <a href="#"><BsChevronRight />Apartment</a>

                <a href="#"><BsChevronRight />Duplex</a>
              </div>
            </div>
          </Col>

          <Col lg={3} >
            <div className='footer-link--social'>
              <h2 className="title--footer">Social Links</h2>
              <div className='footerArea--social'>
              <a href='#' >
                <FaFacebook className="footer-icon"   />
                {/* <img src={facebook} /> */}
              </a>

              <a href='#'> 
              {/* <img src={youtube} />  */}
              <FaYoutube className="footer-icon"   />
              </a>

              <a href='#'> 
              {/* <img  src={linkin} />  */}
              <FaLinkedin className="footer-icon"   />
              </a>

              <a href='#'> 
              {/* <img  src={instragram} />  */}
              <FaInstagramSquare className="footer-icon"   />
              </a>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Footer;
