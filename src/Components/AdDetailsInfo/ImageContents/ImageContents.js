import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../../../Assets/images/image1.jpg";
import img2 from "../../../Assets/images/image2.jpg";
import img3 from "../../../Assets/images/image3.jpg";
import img4 from "../../../Assets/images/image4.jpg";
import img5 from "../../../Assets/images/image5.jpg";
import "./_imageContents.scss";
const ImageContents = ({ setImage1, setImage2, setImage3, setImage4,imageFile }) => {
  return (
    <div className="image-content">
      <div className="image-content--large">
        <Image src={imageFile.bigImage} rounded className="big-image" />
      </div>

      <div className="image-content--small">
        <Image src={imageFile.smallImage1} rounded className="small-image" onClick={setImage1} />
        <Image src={imageFile.smallImage2} rounded className="small-image" onClick={setImage2} />
        <Image src={imageFile.smallImage3} rounded className="small-image" onClick={setImage3} />
        <Image src={imageFile.smallImage4} rounded className="small-image" onClick={setImage4} />
      </div>
    </div>
  );
};

ImageContents.propTypes = {};

export default ImageContents;
