import { React } from 'react';
import { Dropdown,DropdownButton, ButtonGroup, Form  } from 'react-bootstrap';

const DropdownComponent = ({dropOptions,id, setQuesSave}) => {
    console.log(dropOptions);
    return (
        <Form.Control
            as='select'
            key={id}
            id={`city`}
            style={{ width: '100%' }}
            title={'city'}
            onChange={e => {
                let item = dropOptions.find(value => value.label === e.target.value);
                setQuesSave(item.id)
            }}
        >
            {
                dropOptions.map(val => {
                    return (
                        <option eventKey={val.id}  > {val.label} </option>
                    )
                })
            }

        </Form.Control>
    )
}

export default DropdownComponent;