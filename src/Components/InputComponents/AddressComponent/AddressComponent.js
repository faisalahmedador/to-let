import { React, useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
const AddressComponent = ({ nextQuestion, id, setQuesSave }) => {
    console.log(nextQuestion);
    const [divisions, setDivision] = useState([]);
    const [zila, setZila] = useState([])


    const [selectedDiv, setSelectedDiv] = useState();
    const [selectedZila, setSelectedZila] = useState();
    const [houseName, setHouseName] = useState();

    useEffect(() => {
        if (selectedDiv, selectedZila, houseName) {
            let address = {
                division: selectedDiv,
                zila: selectedZila,
                houseName: houseName
            }
            console.log(address);

            setQuesSave(address);
        }

    }, [houseName, selectedDiv, selectedZila, setQuesSave])

    const setLocation = (locationInfo, type) => {
        if (type === 'division') {
            console.log(locationInfo)
            setDivision(locationInfo)
        } else if (type === 'zilas') {
            setZila(locationInfo)
        }
    }

    useEffect(() => {
        fetch('http://barikoi.xyz/v1/api/MjY3NzpPOEJCNDNLSVZB/cities')
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => setLocation(response.places, 'division'))
    }, [])


    return (
        <Form>
            <Form.Control
                as='select'
                key={id}
                id={`city`}
                style={{ fontSize: '1.5rem', fontWeight: '600' }}
                title={'city'}
                className='mb-3'
                onChange={e => {
                    let { name, areas } = divisions.find(value => value.name === e.target.value);
                    setSelectedDiv(name);
                    setZila(areas, 'zilas');
                }}
            >
                <option disabled selected hidden>division</option>
                {
                    divisions.map(val => {
                        return (
                            <option > {val.name} </option>
                        )
                    })
                }

            </Form.Control>

            <Form.Control
                as='select'
                key={id}
                id={`zilla`}
                style={{ fontSize: '1.5rem', fontWeight: '600' }}
                title={'zilla'}
                className='mb-3'
                onChange={e => {
                    setSelectedZila(e.target.value);
                }}
            >
                <option disabled selected hidden>Zilla</option>
                {
                    zila.length && zila.map(val => {
                        return (
                            <option id={val.id}  > {val.name} </option>
                        )
                    })
                }

            </Form.Control>

            <Form.Group as={Row} className="mb-3" controlId="para">
                <Form.Label column sm="4">
                    House name/ Holding number
                </Form.Label>
                <Col sm="8">
                    <Form.Control type='text' style={{ fontSize: '1.5rem', fontWeight: '600' }} id={id} onChange={(e) => setHouseName(e.target.value)} />
                </Col>
            </Form.Group>
        </Form>
    )
}

export default AddressComponent;

