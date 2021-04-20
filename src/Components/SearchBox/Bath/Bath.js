import React, { useState } from "react";
import './_bath.scss'
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Bath = ({ bathRef}) => {
  
  return (
        
      <select
        as="select"
        onChange={(e) => {
          bathRef(e.target.value);
        }}
        className="bed-button--content"
      >
        <option>select bath</option>
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

export default Bath;
