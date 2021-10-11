import { React } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const InputFieldComponent = ({ type, id,setQuesSave }) => {
  return (
    <InputGroup
      className="mb-3 "
      onChange={(e) => setQuesSave(e.target.value)}
    >
      <FormControl
        type={type}
        key={id}
        id={id.toString()}
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </InputGroup>
  );
};

export default InputFieldComponent;
