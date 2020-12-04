import React from "react";
import { Link } from "react-router-dom";
import duplex from "../../Assets/images/duplex.png";
import apartment from "../../Assets/images/apartment.png";
import bachelorhouse from "../../Assets/images/bachelorhouse.png";
import familyhouse from "../../Assets/images/familyhouse.png";
import forsale from "../../Assets/images/forsale.png";
import sublet from "../../Assets/images/sublet.png";
import './_catagory.scss'


const Catagory = ({ setCatagory }) => {
  return (
    <>
      <div id="catagory">
        <h2 className="title">Choose a catagory</h2>
        <div className="catagory-links">
          <Link to="#" id="duplex"  onClick={() => setCatagory('duplex')}>
            <span style={{ display: "flex", flexDirection: "column" }} >
              <img src={duplex} /> duplex
            </span>
          </Link>
          <Link to="#" onClick={() => setCatagory('apartment')}>
          <span style={{ display: "flex", flexDirection: "column" }} >
              <img src={apartment} /> apartment
            </span>
          </Link>
          <Link to="#" onClick={() => setCatagory('familyhouse')}>
          <span style={{ display: "flex", flexDirection: "column" }} >
              <img src={familyhouse} /> familyhouse
            </span>
          </Link>
        </div>
        <div className="catagory-links">
          <Link to="#" id="sublet" onClick={() => setCatagory('sublet')}>
            <img src={sublet} />
            <p>sublet</p>
          </Link>
          <Link to="#" id="bachelor" onClick={() => setCatagory('bachelor')}>
            <img src={bachelorhouse} />
            <p>Bachelor/Mass</p>
          </Link>
          <Link to="#" onClick={() => setCatagory('forsale')}>
            <img src={forsale} />
            <p>House for sale</p>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Catagory;
