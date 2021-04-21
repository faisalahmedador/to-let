import React, { useState } from "react";
import { FaChevronDown, FaLowVision, FaMedium } from "react-icons/fa";
import PriceRange from "./PriceRange/PriceRange";
import Location from "./Location/Location";
import Bed from "./Bed/Bed";
import Bath from "./Bath/Bath";
import Type from "./Type/Type";
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
  typeRef,
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
            placeholder={   `Enter Area Name..`  }
            onChange={setSearch}
          />

          <div className="location-button">
            <Location locationRef={locationRef}   />
          </div>

          <div className="type-button">
            <Type typeRef={typeRef} />
          </div>

          <Link to='/searchresult' className="button-default mobile-inactive">Search</Link>
          {/* <input type="submit" value="Search" className="button-default mobile-inactive " /> */}
        </div>
        {/* all 2nd line component */}
        <div className="all_dropdown">
          <div className="bed-button">
            <Bed bedRef={bedRef} />
          </div>

          <div className="bed-button">
            <Bath bathRef={bathRef} />
          </div>

          <div className="bed-button">

            <PriceRange priceRefMin={priceRefMin} priceRefMax={priceRefMax} />
          </div>
          <Link to='/searchresult' className="button-default mobile-active">Search</Link>
          {/* <input type="submit" value="Search" className="button-default mobile-active " /> */}
        </div>
      </div>
    </>
  );
};

export default SearchBox;
