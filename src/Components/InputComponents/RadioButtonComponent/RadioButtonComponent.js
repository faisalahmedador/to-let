import { React } from "react";
import { Form } from "react-bootstrap";

const RadioButtonComponent = ({ radioOptions, id, setQuesSave }) => {
    let tag = radioOptions[0].value;
  return (
    <Form>
      {radioOptions.map((value) => {
        return (
          <div className="mb-3">
            <Form.Check
              type={"radio"}
              id={value.id}
              label={
                <span style={{ fontWeight: "bold", marginLeft: "10px" }}>
                  {" "}
                  {value.label}{" "}
                </span>
              }
              name={`group${id}`}
              onClick={(e) => setQuesSave(e.target.id)}
            />
          </div>
        );
      })}
    </Form>
  );
};

export default RadioButtonComponent;
