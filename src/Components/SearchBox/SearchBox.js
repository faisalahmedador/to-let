import React from "react";
import { FaChevronDown } from "react-icons/fa";

const SearchBox = () => {
  return (
    <>
      <div id="search-box">
        <div className="search">
          <input
            className="search_input "
            type="text"
            placeholder="Enter Area Name.."
          />
          <input type="submit" value='Search' className="button-default" />
            
        </div>
        <div className="all_dropdown">
          <div className="Thanadown">
            <button className="Thanabtn">Select Thana <FaChevronDown /></button>
            <div className="Thanadown-content">
              <a href="#">Mirpur</a>
              <a href="#">Uttora</a>
              <a href="#">Ajimpur</a>
            </div>
          </div>

          <div className="Zilladown">
            <button className="Zillabtn">Select Zilla <FaChevronDown /></button>
            <div className="Zilladown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

          <div className="Typedown">
            <button className="Typebtn">Select property Type <FaChevronDown /></button>
            <div className="Typedown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
