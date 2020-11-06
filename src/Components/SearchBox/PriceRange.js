import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RangeSlider from "react-bootstrap-range-slider";

const PriceRange = ({ priceRefMin, priceRefMax }) => {
  const [value1, setValue1] = useState(1000);
  const [value2, setValue2] = useState(10000000);

  return (
    <Form >
      <Form.Group as={Row}>
        <Col xs={6}>
          <Form.Group controlId="exampleForm.SelectCustomSizeLg">
            <Form.Label className='title--range'>Min value: {value1}</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => {
                setValue1(e.target.value);
                priceRefMin(e.target.value);
              }}
              size="lg"
              multiple

              className="price-button--content"
            >
              <option>1000</option>
              <option>5000</option>
              <option>10000</option>
              <option>20000</option>
              <option>30000</option>
              <option>40000</option>
              <option>50000</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group controlId="exampleForm.SelectCustomSizeLg">
            <Form.Label className='title--range'>Max value: {value2}</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => {
                setValue2(e.target.value);
                priceRefMax(e.target.value);
              }}
              size="lg"
              multiple
              className="price-button--content"
            >
              <option>5000</option>
              <option>10000</option>
              <option>20000</option>
              <option>30000</option>
              <option>40000</option>
              <option>50000</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default PriceRange;
