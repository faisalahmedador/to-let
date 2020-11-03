import React from "react";
import { Link } from "react-router-dom";
import duplex from "../../Assets/images/duplex.png";
import apartment from "../../Assets/images/apartment.png";
import bachelorhouse from "../../Assets/images/bachelorhouse.png";
import familyhouse from "../../Assets/images/familyhouse.png";
import forsale from "../../Assets/images/forsale.png";
import sublet from "../../Assets/images/sublet.png";

const Catagory = () => {
  return (
    <>
        
      <div id="catagory">
      <h2 className='title'>Choose a catagory</h2>
        <div className='catagory-links'>
          <a href="#">
            <img src={duplex} />
            <p>Duplex House</p>
          </a>
          <a href="#">
            <img src={apartment} />
            <p>Apartment</p>
          </a>
          <a href="#">
            <img src={familyhouse} />
            <p>Family House</p>
          </a>
          
        </div>
        <div className='catagory-links'>
          <a href="#" id='sublet'>
            <img src={sublet} />
            <p>sublet</p>
          </a>
          <a href="#" id='bachelor'>
            <img src={bachelorhouse} />
            <p>Bachelor/Mass</p>
          </a>
          <a href="#">
            <img src={forsale} />
            <p>House for sale</p>
          </a>
          
        </div>
      </div>
    </>
  );
};
export default Catagory;
