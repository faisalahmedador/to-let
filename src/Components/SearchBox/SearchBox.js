import React, { useState } from "react";
import { FaChevronDown, FaLowVision, FaMedium } from "react-icons/fa";
import PriceRange from "./PriceRange";
import Location from "./Location";
import Bed from "./Bed";
import Bath from "./Bath";
import { Link } from "react-router-dom";
import "./_searchbox.scss";

const SearchBox = ({
  setSearch,
  locationRef,
  bedRef,
  bathRef,
  selectedBed,
  selectedBath,
  selectedLocation,
  selectedCatagory,
  priceRefMax,
  priceRefMin,
  selectedLowerPrice,
  selectedUpperPrice,
  priceUpdate,
  setCatagory,
}) => {
  // const [value1, setValue1] = useState('Dhaka');
  // const [min, setMin] = useState(null);
  // const [max, setMax] = useState("any");
  // const [priceUpdate, setPriceUpdate] = useState(false);

  // function locationRef(value){
  //   setValue1(value)
  // }

  // function priceRefMin(value){
  //   setPriceUpdate(true)
  //   setMin(value)
  // }

  // function priceRefMax(value){
  //   setPriceUpdate(true)
  //   setMax(value)
  // }
  return (
    <>
      <div id="search-box">
        <div className="search">
          <input
            className="search_input "
            type="text"
            placeholder="Enter Area Name.."
            onChange={setSearch}
          />

          <div className="location-button">
            <div className="location-button--button">
              {selectedLocation} <FaChevronDown />
            </div>
            <div className="location-button--dropdown">
              <Location locationRef={locationRef} />
            </div>
          </div>

          <div className="Typedown">
            <div className="Typebtn">
              {selectedCatagory} <FaChevronDown />
            </div>
            <div className="Typedown-content">
              <Link to="#" onClick={() => setCatagory("duplex")}>
                <span>duplex</span>
              </Link>
              <Link to="#" onClick={() => setCatagory("apartment")}>
                <span>apartment</span>
              </Link>
              <Link to="#" onClick={() => setCatagory("familyHouse")}>
                <span>family house</span>
              </Link>
              <Link to="#" onClick={() => setCatagory("sublet")}>
                <span>sublet</span>
              </Link>
              <Link to="#" onClick={() => setCatagory("bachelor")}>
                <span>bachelor</span>
              </Link>
              <Link to="#" onClick={() => setCatagory("forsale")}>
                <span>house for sale</span>
              </Link>
            </div>
          </div>

          <input type="submit" value="Search" className="button-default" />
        </div>
        {/* all 2nd line component */}
        <div className="all_dropdown">
          <div className="bed-button">
            <div className="bed-button--button">
              {selectedBed} <FaChevronDown />
            </div>
            <div className="bed-button--dropdown">
              <Bed bedRef={bedRef} />
            </div>
          </div>

          <div className="bath-button">
            <div className="bath-button--button">
              {selectedBath} <FaChevronDown />
            </div>
            <div className="bath-button--dropdown">
              <bath bathRef={bathRef} />
            </div>
          </div>

          <div className="price-button">
            <div className="price-button--button">
              {priceUpdate
                ? `${selectedLowerPrice} to ${selectedUpperPrice}`
                : "Price Range (BDT)"}{" "}
              <FaChevronDown />
            </div>
            <div className="price-button--dropdown">
              <PriceRange priceRefMin={priceRefMin} priceRefMax={priceRefMax} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
