import React, { useState } from 'react';
import {  Modal, Button, Form, InputGroup, FormControl   } from 'react-bootstrap';

const AddModal = ({ show, setShow }) => {

    let quesarr = [
        {
            q: 'কি ভাড়া দিবেন ?',
            radioOptions: [ 'Flat', 'ApartMent', 'Male mess', 'Female mess', 'Sublet', 'Duplex', 'Foreigner Apartment', 'Paying Guest' ]

        },
        {
            q: 'বাসার এড্রেস ?'
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
        console.log('value', val );

        switch(quesNo){
            case 0 : setQuesSave( { ...quesSave, type:val } );
            break ;
            case 1 : setQuesSave( { ...quesSave, address:val } );
            break ;
            case 2 : setQuesSave( { ...quesSave, floor:val } );
            break ;
            case 3 : setQuesSave( { ...quesSave, toylet:val } );
            break ;
            case 4 : setQuesSave( { ...quesSave, attachtoylet:val } );
            break ;
            case 5 : setQuesSave( { ...quesSave, varanda:val } );
            break ;
            case 6 : setQuesSave( { ...quesSave, roomattach:val } );
            break ;
            case 7 : setQuesSave( { ...quesSave, gas:val } );
            break ;
            case 8 : setQuesSave( { ...quesSave, vara:val } );
            break ;
            case 9 : setQuesSave( { ...quesSave, advance:val } );
            break ;
            case 10 : setQuesSave( { ...quesSave, contact : val } );
            break ;
        }

    }
    
    console.log('ques save', quesSave );

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
                        <InputGroup className="mb-3 " onChange={(e) => saveFunc(e.target.value, quesNo ) } >
                            {/* <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text> */}
                            <FormControl
                            id={quesNo.toString()}
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    }
                </Modal.Body>
                <Modal.Footer>
                {
                quesNo < 10 ?
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
                <Button variant="primary" onClick={ () => onHide() }  >
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