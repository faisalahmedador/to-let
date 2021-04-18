import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './_type.scss'

const Type = ({ typeRef }) => {
  return (
    <select
      as="select"
      onChange={(e) => {
        typeRef(e.target.value);
      }}
      size="lg"
      className="type-button--content"
    >
      <option>select type</option>
      <option>Duplex</option>
      <option>Family house</option>
      <option>Apartment</option>
      <option>Office Space</option>
      <option>Bachelor</option>
      <option>Sublet</option>
      <option>Sell Property</option>
    </select>
  );
};

export default Type;
