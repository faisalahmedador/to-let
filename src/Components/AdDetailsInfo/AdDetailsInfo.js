import React from "react";
import PropTypes from "prop-types";
import "./_addetailsinfo.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img from "../../Assets/images/landingPage.jpg";

import ImageContents from './ImageContents'
import DescriptionContents from './DescriptionContents'

const AdDetailsInfo = () => {
  return (
    <div className="adDetails-info">
      <Row>
        <Col lg={6}>
          <ImageContents />
        </Col>

        <Col lg={6}>
            <DescriptionContents />
          
        </Col>
      </Row>
    </div>
  );
};

AdDetailsInfo.propTypes = {};

export default AdDetailsInfo;
