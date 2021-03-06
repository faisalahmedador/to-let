import React, { Component, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import house from "../../Assets/images/duplex.png";

const Cardads2 = ({img}) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsopen] = useState(false);

  const images = [
    "//placekitten.com/1500/500",
    "//placekitten.com/4000/3000",
    "//placekitten.com/800/1200",
    "//placekitten.com/1500/1500",
  ];

  return (
    <div>
      <a className="" href='#' onClick={() => {setIsopen(true)}}>
        <img
          className=""
          src={img.one}
          alt="Golden Gate Bridge with San Francisco in distance"
        />
      </a>

      <a className="" href='#' onClick={() => {setIsopen(true)}}>
        <img
          className=""
          src={img.two}
          alt="Golden Gate Bridge with San Francisco in distance"
        />
      </a>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => {
            setIsopen(false);
          }}
          onMovePrevRequest={() => {
            setPhotoIndex((photoIndex + images.length - 1) % images.length);
          }}
          onMoveNextRequest={() => {
            setPhotoIndex((photoIndex + 1) % images.length);
          }}
        />
      )}
    </div>
  );
};

Cardads2.propTypes = {};

export default Cardads2;
