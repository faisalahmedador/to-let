import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Bath = ({ bathRef}) => {
  
  return (
        
      <Form.Control
        as="select"
        onChange={(e) => {
          bathRef(e.target.value);
        }}
        className="bath-button--content"
      >
        <option>select bath</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
      </Form.Control>
    
  );
};

export default Bath;
