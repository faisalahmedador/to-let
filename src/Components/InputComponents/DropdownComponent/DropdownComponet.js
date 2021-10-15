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
                let item = dropOptions.find(value => value.label === e.target.value);
                setQuesSave(item)
            }}
        >
            <option disabled selected hidden>{value}</option>
            {
                dropOptions.map(val => {
                    return (
                        <option eventKey={val.id}  > {val.label} </option>
                    )
                })
            }

        </Form.Control>
        </Form>
    )
}

export default DropdownComponent;