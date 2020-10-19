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
          <button type="submit" className="button_input ">
            search
          </button>
        </div>
        <div className="all_dropdown">
          <div class="Thanadown">
            <button class="Thanabtn">Select Thana <FaChevronDown /></button>
            <div class="Thanadown-content">
              <a href="#">Mirpur</a>
              <a href="#">Uttora</a>
              <a href="#">Ajimpur</a>
            </div>
          </div>

          <div class="Zilladown">
            <button class="Zillabtn">Select Zilla <FaChevronDown /></button>
            <div class="Zilladown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

          <div class="Typedown">
            <button class="Typebtn">Select property Type <FaChevronDown /></button>
            <div class="Typedown-content">
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
