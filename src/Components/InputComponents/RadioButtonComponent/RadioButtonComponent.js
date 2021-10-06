import { React } from 'react';
import { InputGroup,Form } from 'react-bootstrap';

const RadioButtonComponent = ({ radioOptions, id }) => {

    return (
        <InputGroup className="mb-3 " key={id} style={{ display: 'grid', textAlign: 'left', fontSize: "1.5rem" }} >
            {radioOptions.map((v) => {
                return (
                    <div className="mb-3">
                        <Form.Check
                            type={'radio'}
                            id={v}
                            label={<span style={{ fontWeight: 'bold' }} >  {v}  </span>}
                            name={`group${id}`}
                        // onClick={ (e) => console.log('from radio', e ) }
                        />
                    </div>
                )
            })}
        </InputGroup>
    )
}

export default RadioButtonComponent;
