import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsChevronRight } from "react-icons/bs";
import './_popularsearch.scss'


const PopularSearch = () => {
  return (
    <>
    <div className='container-fluid'>
      <div id="popular-search">
      <h2  className='title'>Popular Search</h2>
        <ul className="popular-search-areas">
          <li>
            <h3>Dhaka</h3>
          </li>
          <li>
            <a href="#">
              <BsChevronRight />
              Mirpur
            </a>
          </li>
          <li>
            <a href="#">
              <BsChevronRight />
              Uttora
            </a>
          </li>
          <li>
            <a href="#">
              <BsChevronRight />
              Mohammadpur
            </a>
          </li>
        </ul>
        <ul className="popular-search-areas">
          <li>
            <h3>Chittagong</h3>
          </li>
          <li>
            <a href="#">
              <BsChevronRight />
              Khulsi
            </a>
          </li>
          <li>
            <a href="#">
              <BsChevronRight />
              Nasirabad
            </a>
          </li>
          <li>
            <a href="#">
              <BsChevronRight />
              Halisohor
            </a>
          </li>
        </ul>

        <ul className="popular-search-areas">
          <li>
            <h3>Khulna</h3>
          </li>
          <li>
            <a href="#">
              <BsChevronRight />
              Khulsi
            </a>
          </li>
          <li>
            <a href="#">
              <BsChevronRight />
              Nasirabad
            </a>
          </li>
          <li>
            <a href="#">
              <BsChevronRight />
              Halisohor
            </a>
          </li>
        </ul>
        <ul className="popular-search-areas">
          <li>
            <h3>Rajshahi</h3>
          </li>
          <li>
            <a href="#">
              <BsChevronRight />
              Khulsi
            </a>
          </li>
          <li>
            <a href="#">
              <BsChevronRight />
              Nasirabad
            </a>
          </li>
          <li>
            <a href="#">
              <BsChevronRight />
              Halisohor
            </a>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
};
export default PopularSearch;
