import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './_location.scss'

const Location = ({ locationRef }) => {
  return (
    <select
      onChange={(e) => {
        locationRef(e.target.value);
      }}
      className="location-button--content"
    >

      <option>select city</option>
      <option>Dhaka</option>
      <option>Chittagong</option>
      <option>Rajshahi</option>
      <option>Commila</option>
      <option>Chadpur</option>
      <option>Bogura</option>
      <option>Rangpur</option>
      <option>Barishal</option>
    </select>
  );
};

export default Location;
