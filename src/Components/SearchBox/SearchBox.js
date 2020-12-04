import React, { useState } from "react";
import { FaChevronDown, FaLowVision, FaMedium } from "react-icons/fa";
import PriceRange from "./PriceRange";
import Location from "./Location";
import { Link } from "react-router-dom";
import "./_searchbox.scss";

const SearchBox = ({
  setSearch,
  locationRef,
  selectedLocation,
  priceRefMax,
  priceRefMin,
  selectedLowerPrice,
  selectedUpperPrice,
  priceUpdate,
  setCatagory 
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
          <input type="submit" value="Search" className="button-default" />
        </div>
        <div className="all_dropdown">
          <div className="location-button">
            <button className="location-button--button">
              {selectedLocation} <FaChevronDown />
            </button>
            <div className="location-button--dropdown">
              <Location locationRef={locationRef} />
            </div>
          </div>

          <div className="price-button">
            <button className="price-button--button">
              {priceUpdate ? `${selectedLowerPrice} to ${selectedUpperPrice}` : "Price Range (BDT)"}{" "}
              <FaChevronDown />
            </button>
            <div className="price-button--dropdown">
              <PriceRange priceRefMin={priceRefMin} priceRefMax={priceRefMax} />
            </div>
          </div>

          <div className="Typedown">
            <button className="Typebtn">
              property Type <FaChevronDown />
            </button>
            <div className="Typedown-content">
              <Link to='#' onClick={() => setCatagory('duplex')}><span>duplex</span></Link>
              <Link to='#' onClick={() => setCatagory('apartment')}><span>apartment</span></Link>
              <Link to='#' onClick={() => setCatagory('familyHouse')}><span>family house</span></Link>
              <Link to='#' onClick={() => setCatagory('sublet')}><span>sublet</span></Link>
              <Link to='#' onClick={() => setCatagory('bachelor')}><span>bachelor</span></Link>
              <Link to='#' onClick={() => setCatagory('forsale')}><span>house for sale</span></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
