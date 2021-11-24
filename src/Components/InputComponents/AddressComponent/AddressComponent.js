import { set } from "js-cookie";
import { React, useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as zilaList from '../../../Assets/locations/zilas.json';
import * as divisionList from '../../../Assets/locations/divisions.json';
import * as upazilaList from '../../../Assets/locations/upazilas.json';
import * as unionList from '../../../Assets/locations/unions.json';


const AddressComponent = ({ nextQuestion, id, setQuesSave }) => {
    console.log(nextQuestion);
    const [divisions, setDivision] = useState([]);
    const [zila, setZila] = useState([])
    const [upaZila, setUpaZila] = useState([])
    const [union, setUnion] = useState([]);

    const [selectedDiv, setSelectedDiv] = useState();
    const [selectedZila, setSelectedZila] = useState();
    const [selectedUpaZila, setSelectedUpaZila] = useState();
    const [selectedUnion, setSelectedUnion] = useState();
    const [road, setRoad] = useState();
    const [houseName, setHouseName] = useState();

    useEffect(() => {
        if(selectedDiv && selectedZila && houseName){
            let address = {
                division: selectedDiv,
                zila: selectedZila,
                upazila: selectedUpaZila,
                union: selectedUnion,
                road: road,
                houseName: houseName
            }

            setQuesSave(address);
        }
    }, [houseName, road, selectedDiv, selectedUpaZila, selectedZila, setQuesSave, union])

    const setLocation = (locationInfo, type) => {
        if (type === 'division') {
            console.log(locationInfo)
            setDivision(locationInfo)
        } else if (type === 'zilas') {
            setZila(locationInfo)
        } else if (type === 'upazilas') {
            setUpaZila(locationInfo.data);
        } else if (type === 'union') {
            setUnion(locationInfo.data)
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
                style={{ width: '100%' }}
                title={'city'}
                className='mb-3'
                onChange={e => {
                    let { id, name } = divisions.find(value => value.bn_name === e.target.value);
                    setSelectedDiv(name);
                    let zilaFinder = zilaList[0].data.filter(zilaItem => zilaItem.division_id === id)
                    setZila(zilaFinder, 'zilas');
                }}
            >
                <option disabled selected hidden>division</option>
                {
                    divisions.map(val => {
                        return (
                            <option > {val} </option>
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
                    let {id, name} = zila.find(value => value.bn_name === e.target.value);
                    setSelectedZila(name);
                    let upaZilaFinder = upazilaList[0].data.filter(upazilaItem => upazilaItem.district_id === id);
                    setUpaZila(upaZilaFinder, 'upazilas')
                }}
            >
                <option disabled selected hidden>Zilla</option>
                {
                    zila.length && zila.map(val => {
                        return (
                            <option id={val.id}  > {val.bn_name} </option>
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
                    let {id, name} = upaZila.find(value => value.bn_name === e.target.value);
                    setSelectedUpaZila(name);
                    let unionFinder = unionList[0].data.filter(unionItem => unionItem.upazilla_id === id);
                    console.log(unionFinder);
                    setUnion(unionFinder);
                }}
            >
                <option disabled selected hidden>Upozilla</option>
                {
                    upaZila.length && upaZila.map(val => {
                        return (
                            <option id={id}  > {val.bn_name} </option>
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
                    let {id, name} = union.find(value => value.bn_name === e.target.value);
                    setSelectedUnion(name);
                }}
            >
                <option disabled selected hidden>Union</option>
                {
                    union.length && union.map(val => {
                        return (
                            <option id={id}  > {val.bn_name} </option>
                        )
                    })
                }

            </Form.Control>

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

