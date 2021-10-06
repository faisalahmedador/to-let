import { React } from 'react';
import { Dropdown,DropdownButton, ButtonGroup  } from 'react-bootstrap';

const DropdownComponent = ({dropOptions,id}) => {

    return (
        <DropdownButton
            as={ButtonGroup}
            key={id}
            id={`city`}
            style={{ width: '100%' }}
            title={'city'}
            onSelect={e => saveFunc(e, quesNo)}
        >
            {
                dropOptions.map(val => {
                    return (
                        <Dropdown.Item eventKey={val}  > {val} </Dropdown.Item>
                    )
                })
            }

        </DropdownButton>
    )
}

export default DropdownComponent;