import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import img from "../../Assets/images/landingPage.jpg";
import "./_nearbyproperty.scss";
import Col from "react-bootstrap/Col";

const NearByProperties = ({ area, location, price }) => {
  return (
    <div className="nearbyproperty-main col-md-4">
      <div class="main-div">
        <Image src={img} className="image" alt="..." />
        <div className="details">
          <h5 className=""> Location:  <span style={{ fontWeight: 'bold', fontSize: '15px' }}> {location} </span> </h5>
          <div className='more-details'>
            <p class=""> Area: <span className='title'> {area} </span> </p>
            <p class=""> Rent: <span className='title'> {price} </span> </p>
            <Link href="#" className="button" >
            View details
          </Link>
          </div>

          
        </div>
      </div>
    </div>
  );
};

NearByProperties.propTypes = {};

export default NearByProperties;
