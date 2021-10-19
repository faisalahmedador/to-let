import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {Row, Col }  from "react-bootstrap";
// import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Carousel } from 'react-bootstrap';
import { GrNext, GrPrevious} from 'react-icons/gr'
import SliderImage from 'react-zoom-slider';
import img1 from "../../../Assets/images/image1.jpg";
import img2 from "../../../Assets/images/image2.jpg";
import img3 from "../../../Assets/images/image3.jpg";
import img4 from "../../../Assets/images/image4.jpg";
import img5 from "../../../Assets/images/image5.jpg";
import "./_imageContents.scss";



const ImageContents = ({ setImage1, setImage2, setImage3, setImage4,imageFile }) => {

  const [srcImg, setSrcimg] = useState(imageFile.smallImage1)

  return (
    // <div className="image-content">
    // <Row style={{ justifyContent: 'center' }} >
    // <Col lg={8} xs={12} className="image-content--large">  
    //   {/* <div className="image-content--large"> */}
    //     {/* <Image src={imageFile.bigImage} rounded className="big-image" /> */}
    //     <Image src={srcImg} rounded className="big-image" />
    //   {/* </div> */}
    // </Col>

    // <Col lg={3} xs={12} >
    //   {/* <div className="image-content--small"> */}
    //    <Row>
    //     <Col lg={12} xs={3} style={{ height: '12rem ', margin: '5px 0' }} >
    //       <Image src={imageFile.smallImage1} rounded className={srcImg === imageFile.smallImage1 ? "small-image active" : "small-image"  }  onClick={() => setSrcimg(imageFile.smallImage1)} />
    //     </Col>
    //     <Col lg={12} xs={3} style={{ height: '12rem', margin: '5px 0' }}  >
    //       <Image src={imageFile.smallImage2} rounded className={srcImg === imageFile.smallImage2 ? "small-image active" : "small-image"  } onClick={() => setSrcimg(imageFile.smallImage2)} />
    //     </Col>
    //     <Col lg={12} xs={3} style={{ height: '12rem', margin: '5px 0' }}  >
    //       <Image src={imageFile.smallImage3} rounded className={srcImg === imageFile.smallImage3 ? "small-image active" : "small-image"  } onClick={() => setSrcimg(imageFile.smallImage3)} />
    //     </Col>
    //     <Col lg={12} xs={3} style={{ height: '12rem', margin: '5px 0' }}  >
    //       <Image src={imageFile.smallImage4} rounded className={srcImg === imageFile.smallImage4 ? "small-image active" : "small-image"  } onClick={() => setSrcimg(imageFile.smallImage4)} />
    //     </Col>
    //    </Row>
    //   {/* </div> */}
    // </Col>
    // </Row>
    // </div>
    <Carousel /* activeIndex={index} onSelect={handleSelect} */  
    nextIcon={<GrNext size='2.5em' color='#715EF1' style={{backgroundColor: '#715EF1', padding: '4px 4px'}}/>} 
    prevIcon={<GrPrevious size='2.5em' color='#715EF1' style={{backgroundColor: '#715EF1', padding: '4px 4px'}} />  }
    >
      <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      style={{height: '50vh'}}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      style={{height: '50vh'}}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height: '50vh'}}
      src={img3}
      alt="First slide"
    />
  </Carousel.Item>
    </Carousel>
  );
};

ImageContents.propTypes = {};

export default ImageContents;
