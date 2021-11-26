import { React } from 'react';
import { Form } from 'react-bootstrap';

const DropdownComponent = ({dropOptions,id, setQuesSave, value}) => {
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
            <option disabled selected hidden>{value}</option>
            {
                dropOptions.map(val => {
                    return (
                        <option eventKey={val.id}  > {val.label_bn} </option>
                    )
                })
            }

        </Form.Control>
        </Form>
    )
}

export default DropdownComponent;