import { React, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

const DropdownComponent = ({dropOptions,id, setQuesSave, value, quesSave}) => {
    const [dropValue, setDropValue] = useState(false);

    // useEffect(() => {
    //     if(quesSave)
    // }, [quesSave])
    return (
        <Form>
        <Form.Control
            as='select'
            key={id}
            id={`city`}
            style={{ width: '100%', fontSize: '1.5rem', fontWeight: '600' }}
            title={'city'}
            onChange={e => {
                let {label} = dropOptions.find(value => value.label_bn === e.target.value);
                setQuesSave(label)
            }}
        >
            
            {<option disabled selected={Object.keys(quesSave).length ? false : true} hidden>{value}</option>}

            {
                dropOptions.map(val => {
                    if( (Object.keys(quesSave).length && val.label === quesSave)){
                        return (
                            <option eventKey={val.id} selected> {val.label_bn} </option>
                        )
                    }else {
                        return (
                            <option eventKey={val.id}  > {val.label_bn} </option>
                        )
                    }
                    
                })
            }
             
            
            

        </Form.Control>
        </Form>
    )
}

export default DropdownComponent;