import { React } from "react";
import { Form } from "react-bootstrap";

const RadioButtonComponent = ({ radioOptions, id, setQuesSave}) => {

  const handleRadioOptions = (e) => {
    let item = radioOptions.find(value => value.id.toString() === e.target.id);
    console.log(item);
    setQuesSave(item);
  }

  return (
    <Form>
      {radioOptions.map((value, index) => {
        return (
          <div className="mb-3" key={index}>
            <Form.Check
              type="radio"
              id={value.id}
              label={
                <span style={{ fontWeight: "600", marginLeft: "10px", fontSize: '1.5rem' }}>
                  {value.label}
                </span>
              }
              name={`group${id}`}
              onClick={(e) => handleRadioOptions(e)}
            />
          </div>
        );
      })}

    </Form>
  );
};

export default RadioButtonComponent;
