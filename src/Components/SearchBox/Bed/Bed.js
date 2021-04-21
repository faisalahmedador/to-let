import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './_bed.scss'

const Bed = ({ bedRef }) => {
  return (
    <select
      onChange={(e) => {
        bedRef(e.target.value);
      }}
      size="lg"
      className="bed-button--content"
    >
      <option>select bed</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
    </select>
  );
};

export default Bed;
