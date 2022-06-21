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
import { Link } from "react-router-dom";
import "./_cardads.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import {Button} from "react-bootstrap";

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
  img,
}) => {
  const [viewImg, setViewimg] = useState(img[0].img);
  // const [photoIndex, setPhotoIndex] = useState(0);
  // const [isOpen, setIsopen] = useState(false);

  return (
    <>
      <div className="container-fluid my-4" id="card-container">
        <Card id="card-style">
          <div className="row card-div">
            <div className="col-6 pr-0">
              <img src={viewImg} style={{ width: "100%", maxHeight: "140px" }} alt={'img'} />
              <div className="specification-image">
                {/* <Cardads2  img={img} /> */}
                  {img.map((i, index) => {
                    return (
                          <img src={i.img} alt="img" onClick={() => setViewimg(i.img)} />
                    );
                  })}
              </div>
            </div>
            <div className="col-6 px-0">
              <div className={'d-block my-4 mx-5'}>
                <h4 className={'price-tag'}>{price}/- month</h4>
                <p className={'location'}>{location}</p>
                <p className={'description'}>{description}</p>
                <div className={'specification'}>
                  <p className={'mr-4'}>Bedroom: {specification.bedroom}</p>
                  <p>Bathroom: {specification.bathroom}</p>
                </div>
              </div>
              <div className={'text-left my-4 mx-5'}>
                <Button className={'button-default-style mr-2'}>Call</Button>
                <Link className={'button-default-style btn btn-primary'} to="/addetails">
                  View details
                </Link>
              </div>
            </div>
            {/* className='col-md-9'{" "} */}
          </div>
        </Card>
      </div>
    </>
  );
};

export default CardAds;
