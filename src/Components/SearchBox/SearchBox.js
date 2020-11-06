import React, {useState}  from "react";
import { FaChevronDown, FaLowVision, FaMedium } from "react-icons/fa";
import PriceRange from './PriceRange'
import Location from './Location'




const SearchBox = () =>{
  const [value1, setValue1] = useState('Dhaka');
  const [min, setMin] = useState(null);
  const [max, setMax] = useState('any')
  const [priceUpdate, setPriceUpdate] = useState(false)

  function locationRef(value){
    setValue1(value)
  }

  function priceRefMin(value){
    setPriceUpdate(true)
    setMin(value)
  }

  function priceRefMax(value){
    setPriceUpdate(true)
    setMax(value)
  }
  return(
    <>
        <div id="search-box">
          <div className="search">
            <input
              className="search_input "
              type="text"
              placeholder="Enter Area Name.."
            />
            <input type="submit" value="Search" className="button-default" />
          </div>
          <div className="all_dropdown">
          <div className="location-button">
              <button className="location-button--button" >
                {value1} <FaChevronDown />
              </button>
              <div className="location-button--dropdown">
                <Location locationRef={locationRef} />
              </div>
            </div>        

            <div className="price-button">
              <button className="price-button--button" >
                {priceUpdate ? `${min} to ${max}`   : 'Price Range (BDT)'} <FaChevronDown />
              </button>
              <div className="price-button--dropdown">
                <PriceRange priceRefMin = {priceRefMin} priceRefMax ={priceRefMax}  />
              </div>
            </div>

            <div className="Typedown">
              <button className="Typebtn">
                 property Type <FaChevronDown />
              </button>
              <div className="Typedown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}





export default SearchBox;
