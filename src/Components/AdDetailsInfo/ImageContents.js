import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img from "../../Assets/images/landingPage.jpg";
import "./_addetailsinfo.scss";
const ImageContents = () => {
  return (
    <div className="image-content">
      <div className="image-content--large" >
        <Image src={img} rounded className='big-image'/>
      </div>

      <div className="image-content--small">
        <Image src={img} rounded className='small-image'/>
        <Image src={img} rounded className='small-image'/>
        <Image src={img} rounded className='small-image'/>
        <Image src={img} rounded className='small-image'/>
      </div>
    </div>
  );
};

ImageContents.propTypes = {};

export default ImageContents;
