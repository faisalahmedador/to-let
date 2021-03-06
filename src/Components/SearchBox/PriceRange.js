import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RangeSlider from "react-bootstrap-range-slider";

const PriceRange = ({ priceRefMin, priceRefMax }) => {
  // const [value1, setValue1] = useState(1000);
  // const [value2, setValue2] = useState(10000000);

  return (
    <div className="price-button--content">
      <Form.Control
        as="select"
        onChange={(e) => {
          // setValue1(e.target.value);
          priceRefMin(e.target.value);
        }}
        size="lg"
        className="price-button--content1"
      >
        <option>Min Price</option>
        <option>1000</option>
        <option>5000</option>
        <option>10000</option>
        <option>20000</option>
        <option>30000</option>
        <option>40000</option>
        <option>50000</option>
      </Form.Control>

      <Form.Control
        as="select"
        onChange={(e) => {
          // setValue2(e.target.value);
          priceRefMax(e.target.value);
        }}
        size="lg"
        className="price-button--content2"
      >
        <option>Max Price</option>
        <option>5000</option>
        <option>10000</option>
        <option>20000</option>
        <option>30000</option>
        <option>40000</option>
        <option>50000</option>
      </Form.Control>
    </div>
  );
};

export default PriceRange;
