import { React } from 'react';

const InputFieldComponent = ({ type, id }) => {

    return (
        <InputGroup className="mb-3 " onChange={(e) => saveFunc(e.target.value, quesNo)} >

            <FormControl
                type={type}
                key={quesNo}
                id={quesNo.toString()}
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
            />
        </InputGroup>)
}

export default InputFieldComponent;
