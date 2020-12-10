import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import img from "../../Assets/images/landingPage.jpg";
import "./_nearbyproperty.scss";
import Col from "react-bootstrap/Col";

const NearByProperties = ({ area, location, price }) => {
  return (
    <Col className="nearbyproperty-main" lg={4}>
      <div class="main-div">
        <Image src={img} className="image" alt="..." />
        <div className="details">
          <h5 className=""><span className='title'>Location:</span> {location}</h5>
          <div className='more-details'>
            <p class=""><span className='title'>Area:</span>  {area}</p>
            <p class=""><span className='title'>Rent:</span> {price}</p>
            <Link href="#" className="button">
            View details
          </Link>
          </div>

          
        </div>
      </div>
    </Col>
  );
};

NearByProperties.propTypes = {};

export default NearByProperties;
