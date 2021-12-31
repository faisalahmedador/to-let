import { React } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const InputFieldComponent = ({ type, id, setQuesSave, quesSave, value}) => {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="para" key={id}>
        <Form.Label column sm="4" >
          {value}
        </Form.Label>
        <Col sm="8">
          <Form.Control style={{fontSize: '1.5rem', fontWeight: '600'}} defaultValue={quesSave}
          type={type} id={id} onChange={(e) => setQuesSave(e.target.value)} />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default InputFieldComponent;
