import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Location = ({ locationRef }) => {
  return (
    <Form className="location-button--content">
      <Form.Group as={Row}>
        <Col xs={12}>
          <Form.Group controlId="exampleForm.SelectCustomSizeLg">
            <Form.Control
              as="select"
              onChange={(e) => {
                locationRef(e.target.value);
              }}
              size="lg"
              multiple
              className="location-button--content"
            >
              <option>Chittagong</option>
              <option>Rajshahi</option>
              <option>Commila</option>
              <option>Chadpur</option>
              <option>Bogura</option>
              <option>Rangpur</option>
              <option>Barishal</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Location;
