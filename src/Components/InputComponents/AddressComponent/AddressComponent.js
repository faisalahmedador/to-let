import { React, useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
const AddressComponent = ({ nextQuestion, id, setQuesSave, quesSave }) => {
    const [divisions, setDivision] = useState([]);
    const [zila, setZila] = useState([])
    const [selectedDiv, setSelectedDiv] = useState();
    const [selectedZila, setSelectedZila] = useState();
    const [houseName, setHouseName] = useState();


    useEffect(() => {
        if (selectedDiv && selectedZila && houseName) {
            let address = {
                division: selectedDiv,
                zila: selectedZila,
                houseName: houseName
            }

            setQuesSave(address);
        }

    }, [houseName, selectedDiv, selectedZila, setQuesSave])


    useEffect(() => {
        fetch('http://barikoi.xyz/v1/api/MjY3NzpPOEJCNDNLSVZB/cities')
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                setDivision(response.places)
                if(quesSave && Object.keys(quesSave).length){
                    const { areas } = response.places.find(value => value.name === quesSave.division);
                    setZila(areas);
                }
            })
    }, [quesSave])

    const handleDivisionChange = (division) => {
        const { name, areas } = divisions.find(value => value.name === division);
        setSelectedDiv(name);
        setZila(areas);
        if(quesSave && Object.keys(quesSave).length){
            let address = {
                division: name,
                zila: quesSave.zila,
                houseName: quesSave.houseName
            }
            setQuesSave(address); 
        }
    }

    const handleZilaChange = zila => {
        setSelectedZila(zila);
        if(quesSave && Object.keys(quesSave).length){
            let address = {
                division: quesSave.division,
                zila: zila,
                houseName: quesSave.houseName
            }
            setQuesSave(address); 
        }
    }

    const handleHouseName = house => {
        setHouseName(house);
        if(quesSave && Object.keys(quesSave).length){
            let address = {
                division: quesSave.division,
                zila: quesSave.zila,
                houseName: house
            }
            setQuesSave(address); 
        }
    }




    return (
        <Form>
            <Form.Control
                as='select'
                key={id}
                id={`city`}
                style={{ fontSize: '1.5rem', fontWeight: '600' }}
                title={'city'}
                className='mb-3'
                onChange={e => handleDivisionChange(e.target.value)}
            >
                <option disabled selected={quesSave && Object.keys(quesSave).length ? false : true} hidden>division</option>
                {
                    divisions.map(val => {
                        if(quesSave && Object.keys(quesSave).length && val.name === quesSave.division){
                            return (
                                <option selected> {val.name} </option>
                            )
                        }else {
                            return (
                                <option > {val.name} </option>
                            )
                        }
                        
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
                onChange={e => handleZilaChange(e.target.value)}
            >
                <option disabled selected={quesSave && Object.keys(quesSave).length ? false : true} hidden>Zilla</option>
                {
                    zila.length && zila.map(val => {
                        if(quesSave && Object.keys(quesSave).length && val.name === quesSave.zila){
                            return (
                                <option selected> {val.name} </option>
                            )
                        }else {
                            return (
                                <option > {val.name} </option>
                            )
                        }
                       
                    })
                }

            </Form.Control>

            <Form.Group as={Row} className="mb-3" controlId="para">
                <Form.Label style={{ fontSize: '1.5rem', fontWeight: '600' }} column sm="4">
                    Address
                </Form.Label>
                <Col sm="8">
                    <Form.Control defaultValue={quesSave && quesSave.houseName ? quesSave.houseName : ''} type='text' style={{ fontSize: '1.5rem', fontWeight: '600' }} id={id} onChange={(e) => handleHouseName(e.target.value)} />
                </Col>
            </Form.Group>
        </Form>
    )
}

export default AddressComponent;

