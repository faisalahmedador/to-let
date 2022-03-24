import { React } from "react";
import { Form } from "react-bootstrap";

const RadioButtonComponent = ({ radioOptions, id, setQuesSave, quesSave}) => {

  const handleRadioOptions = (e) => {
    const {label} = radioOptions.find(value => value.id.toString() === e.target.id);
    setQuesSave(label);
  }

  return (
    <Form>
      {radioOptions.map((value, index) => {
        if (quesSave && (value.label === quesSave)) {
          console.log(quesSave);
          return (
            <div className="mb-3" key={index}>
              <Form.Check
                type="radio"
                id={value.id}
                checked
                label={
                  <span style={{ fontWeight: "600", marginLeft: "10px", fontSize: '1.5rem' }}>
                    {value.label_bn}
                  </span>
                }
                name={`group${id}`}
                onClick={(e) => handleRadioOptions(e)}
              />
            </div>
          );
        } else {
          return (
            <div className="mb-3" key={index}>
              <Form.Check
                type="radio"
                id={value.id}
                label={
                  <span style={{ fontWeight: "600", marginLeft: "10px", fontSize: '1.5rem' }}>
                    {value.label_bn}
                  </span>
                }
                name={`group${id}`}
                onClick={(e) => handleRadioOptions(e)}
              />
            </div>
          );
        }
      })}

    </Form>
  );
};

export default RadioButtonComponent;
