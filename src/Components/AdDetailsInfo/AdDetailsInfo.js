import React from "react";
import PropTypes from "prop-types";
import "./_addetailsinfo.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img from "../../Assets/images/landingPage.jpg";

import ImageContents from "./ImageContents/ImageContents";
import DescriptionContents from "./DetailsContents/DescriptionContents";

const AdDetailsInfo = ({
  setImage1,
  setImage2,
  setImage3,
  setImage4,
  imageFile,
}) => {
  return (
    <div className="adDetails-info">
      <ImageContents
        setImage1={setImage1}
        setImage2={setImage2}
        setImage3={setImage3}
        setImage4={setImage4}
        imageFile={imageFile}
      />

      <DescriptionContents />
    </div>
  );
};

AdDetailsInfo.propTypes = {};

export default AdDetailsInfo;
