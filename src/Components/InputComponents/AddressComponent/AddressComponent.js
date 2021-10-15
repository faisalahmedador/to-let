import { set } from "js-cookie";
import { React, useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";


const AddressComponent = ({ nextQuestion, id, setQuesSave }) => {
    console.log(nextQuestion);
    const divisions = nextQuestion.dropOptionsDivision;
    const [zilla, setZilla] = useState([])
    const [upoZilla, setUpoZilla] = useState([])

    const [selectedDiv, setSelectedDiv] = useState({});
    const [selectedZilla, setSelectedZilla] = useState({});
    const [selectedUpoZilla, setSelectedUpoZilla] = useState({});
    const [union, setUnion] = useState({});
    const [road, setRoad] = useState({});
    const [houseName, setHouseName] = useState({});

    useEffect(() => {
        if(selectedDiv && selectedZilla && houseName){
            let address = {
                division: selectedDiv,
                zilla: selectedUpoZilla,
                upozilla: selectedUpoZilla,
                union: union,
                road: road,
                houseName: houseName
            }

            setQuesSave(address);
        }
    }, [houseName, road, selectedDiv, selectedUpoZilla, selectedZilla, setQuesSave, union])


    return (
        <Form>
            <Form.Control
                as='select'
                key={id}
                id={`city`}
                style={{ width: '100%' }}
                title={'city'}
                className='mb-3'
                onChange={e => {
                    let item = divisions.find(value => value.label === e.target.value);
                    let zillaFinder = nextQuestion.dropOptionsZilla.find(zillas => zillas.id === item.id)
                    console.log(zillaFinder);
                    if (zillaFinder) {
                        setZilla(zillaFinder.districts)
                    }else{
                        setZilla({})
                    }
                    setSelectedDiv(item ? item : {});
                }}
            >
                <option disabled selected hidden>division</option>
                {
                    divisions.map(val => {
                        return (
                            <option eventKey={val.id}  > {val.label} </option>
                        )
                    })
                }

            </Form.Control>

            <Form.Control
                as='select'
                key={id}
                id={`city`}
                style={{ width: '100%' }}
                title={'city'}
                className='mb-3'
                onChange={e => {
                    let item = zilla.find(value => value.label === e.target.value);
                    let upoZillaFinder = nextQuestion.dropOptionsUpoZilla.find(upoZillas => upoZillas.SubId === item.SubId)
                    if (upoZillaFinder) {
                        setUpoZilla(upoZillaFinder.upozillas)
                    }else{
                        setUpoZilla({})
                    }
                    setSelectedZilla(item ? item : {});
                }}
            >
                <option disabled selected hidden>Zilla</option>
                {
                    zilla.length && zilla.map(val => {
                        return (
                            <option eventKey={val.subId}  > {val.label} </option>
                        )
                    })
                }

            </Form.Control>

            <Form.Control
                as='select'
                key={id}
                id={`city`}
                style={{ width: '100%' }}
                title={'city'}
                className='mb-3'
                onChange={e => {
                    let item = upoZilla.find(value => value.label === e.target.value);
                    setSelectedUpoZilla(item ? item : {});
                }}
            >
                <option disabled selected hidden>Upozilla</option>
                {
                    upoZilla.length && upoZilla.map(val => {
                        return (
                            <option eventKey={val.subIdUpo}  > {val.label} </option>
                        )
                    })
                }

            </Form.Control>

            <Form.Group as={Row} className="mb-3" controlId="para">
                <Form.Label column sm="4">
                    Union/Block/Para/Ward
                </Form.Label>
                <Col sm="8">
                    <Form.Control type='text' style={{ fontSize: '1.5rem', fontWeight: '600' }} id={id} onChange={(e) => setUnion(e.target.value)} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="para">
                <Form.Label column sm="4">
                    Road No
                </Form.Label>
                <Col sm="8">
                    <Form.Control type='number' style={{ fontSize: '1.5rem', fontWeight: '600' }} id={id} onChange={(e) => setRoad(e.target.value)} />
                </Col>
            </Form.Group>

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

