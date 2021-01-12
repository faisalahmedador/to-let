import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Bath = ({ bathRef }) => {
  return (
    <Form className="Bath-button--content">
      <Form.Group as={Row}>
        <Col xs={12}>
          <Form.Group controlId="exampleForm.SelectCustomSizeLg">
            <Form.Control
              as="select"
              onChange={(e) => {
                bathRef(e.target.value);
              }}
              size="lg"
              multiple
              className="Bath-button--content"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Bath;