import React, { useState } from 'react';
import {  Modal, Button, Form, InputGroup, FormControl, Dropdown,DropdownButton, ButtonGroup   } from 'react-bootstrap';
import { cities } from '../../util/dummyData'
import { API } from '../../util/api';

const AddModal = ({ show, setShow }) => {

    let quesarr = [
        {
            q: 'কি ভাড়া দিবেন ?',
            radioOptions: [ 'Flat', 'ApartMent', 'Male mess', 'Female mess', 'Sublet', 'Duplex', 'Foreigner Apartment', 'Paying Guest' ]

        },
        {
            q: 'বাসার এড্রেস (শহর)?'
        },
        {
            q: 'বাসার এড্রেস (এলাকা)?'
        },
        {
            q: 'কয় তলায় ?'
        },
        {
            q: 'টয়লেট/ওয়াশরুম কয়টি ?'
        },
        {
            q: 'এটাচ টয়লেটসহ বেডরুম কয়টি ?'
        },
        {
            q: 'বারান্দা কয়টি ?'
        },
        {
            q: 'ড্রয়িং/ডাইনিং এটাচ নাকি আলাদা ?',
            radioOptions: [ 'এটাচ', 'আলাদা' ] 
        },
        {
            q: 'এলপি গ্যাস নাকি লাইনের গ্যাস ?',
            radioOptions: [ 'এলপি', 'লাইন' ]
        },
        {
            q: 'মাসিক ভাড়া কত ?'
        },
        {
            q: 'এডভান্স কত ?'
        },
        {
            q: 'আপনার কন্টাক্ট নাম্বার দিন'
        }
    ]

    const [quesNo, setQuesno ] = useState(0)
    const [quesSave, setQuesSave] = useState({})

    const onHide = () => {
        setShow(false)
        setQuesno(0)
        setQuesSave({})
    }

    const saveFunc = (val, quesNo) => {
        console.log('value', val, quesNo );

        switch(quesNo){
            case 0 : setQuesSave( { ...quesSave, type:val.toString() } );
            break ;
            case 1 : setQuesSave( { ...quesSave, city:val.toString() } );
            break ;
            case 2 : setQuesSave( { ...quesSave, area:val.toString() } );
            break ;
            case 3 : setQuesSave( { ...quesSave, floor:val.toString() } );
            break ;
            case 4 : setQuesSave( { ...quesSave, toylet:val.toString() } );
            break ;
            case 5 : setQuesSave( { ...quesSave, attachtoylet:val.toString() } );
            break ;
            case 6 : setQuesSave( { ...quesSave, varanda:val.toString() } );
            break ;
            case 7 : setQuesSave( { ...quesSave, roomattach:val.toString() } );
            break ;
            case 8 : setQuesSave( { ...quesSave, gas:val.toString() } );
            break ;
            case 9 : setQuesSave( { ...quesSave, vara:parseInt(val) } );
            break ;
            case 10 : setQuesSave( { ...quesSave, advance:val.toString() } );
            break ;
            case 11 : setQuesSave( { ...quesSave, contact : val.toString() } );
            break ;
        }

    }
    
    const onSubmit = async() => {
        if(Object.keys(quesSave).length === 12 ){
            console.log('object', quesSave );
            setShow(false)
            setQuesno(0)
            setQuesSave({})

          const { data } = await API.post('/add/submit', {  type: quesSave.type, city: quesSave.city, area: quesSave.area, floor: quesSave.floor, toylet: quesSave.toylet, 
                                                            attachtoylet: quesSave.attachtoylet, varanda: quesSave.varanda, roomattach: quesSave.roomattach, gas: quesSave.gas, vara: quesSave.vara, 
                                                            advance: quesSave.advance, contact: quesSave.contact }  );

          console.log('data from submit add', data );

        }
        else{
            alert('You have to fill all questions, please go back in previous questions & fill them up')
        }
    }
    
    // console.log('ques save', quesSave );

    return (
        <div>
            <Modal show={show} onHide={ () => onHide() }  backdrop="static"  centered size="lg" >
                <Modal.Header closeButton >
                <Modal.Title style={{ fontWeight: 'bold' }} > { quesarr[quesNo].q } </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        quesarr[quesNo].radioOptions ?
                        <InputGroup className="mb-3 " onClick={ (e) => saveFunc(e.target.id, quesNo ) } style={{ display: 'grid', textAlign: 'left' }} >
                        { quesarr[quesNo].radioOptions.map((v) => {
                            return(
                                <Form.Check 
                                    // key={}
                                    type={'radio'}
                                    id={v}
                                    label={ <span style={{ fontWeight: 'bold', margin: '0 5px' }} >  { v }  </span> }
                                    name={`group${quesNo}`}
                                    // onClick={ (e) => console.log('from radio', e ) }
                                />
                            )
                        }) }
                        </InputGroup>
                        :
                        quesarr[quesNo].q == 'বাসার এড্রেস (শহর)?' ?
                       <DropdownButton
                            as={ButtonGroup}
                            // key={city}
                            id={`city`}
                            // variant={city.toLowerCase()}
                            title={'city'}
                            onSelect={ e => saveFunc(e, quesNo ) }
                        >
                            {
                                cities.map( val =>  {
                                    return(
                                        <Dropdown.Item eventKey={val}  > {val} </Dropdown.Item>
                                    )
                                })
                            }

                        </DropdownButton>
                        :
                        quesarr[quesNo].q == 'বাসার এড্রেস (এলাকা)?' ?
                        <InputGroup  className="mb-3 " onChange={(e) => saveFunc(e.target.value, quesNo ) } >
                            {/* <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text> */}
                            <FormControl
                            placeholder='Please write your correct area name'
                            key={quesNo}
                            id={quesNo.toString()}
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        :
                        <InputGroup  className="mb-3 " onChange={(e) => saveFunc(e.target.value, quesNo ) } >
                            {/* <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text> */}
                            <FormControl
                            type='number'
                            key={quesNo}
                            id={quesNo.toString()}
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    }
                </Modal.Body>
                <Modal.Footer>
                {
                quesNo < 11 ?
                <>
                {
                    quesNo > 0 &&
                    <Button variant="primary" onClick={ () => setQuesno( quesNo-1 ) } >
                        Previous
                    </Button>
                }
                <Button variant="primary" onClick={ () => setQuesno( quesNo+1 ) } >
                    Next
                </Button>
                </>
                :
                <>
                <Button variant="primary" onClick={ () => setQuesno( quesNo-1 ) } >
                    Previous
                </Button>
                <Button variant="primary" onClick={ () => onSubmit() }  >
                    Done
                </Button>
                </>
                }
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddModal;