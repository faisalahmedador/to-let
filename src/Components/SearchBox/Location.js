import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Location = ({ locationRef }) => {
  return (
    <Form.Control
      as="select"
      onChange={(e) => {
        locationRef(e.target.value);
      }}
      size="lg"
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
    </Form.Control>
  );
};

export default Location;
