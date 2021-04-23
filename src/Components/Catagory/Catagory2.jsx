import React from 'react';
import { Container, Row, Col,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Catagory2.scss';

const Catagory2 = ( { setCatagory } ) => {
    return (
        <Container fluid style={{ margin: '20px', width: 'auto'  }} className='catagories-div' >

            <h5 style={{ fontWeight: 'bold', textAlign: 'center' }} >Catagories</h5>

            <Row >
                <Col xs={12} lg={2}>
                <Link to="#" className='link' onClick={() => setCatagory("duplex")}>
                    duplex
                </Link>
                </Col>

                <Col xs={12} lg={2}>
                <Link to="#" className='link' onClick={() => setCatagory("apartment")}>
                     apartment
                </Link>
                </Col>

                <Col xs={12} lg={2}>
                <Link to="#" className='link' onClick={() => setCatagory("Familyhouse")}>
                    Familyhouse
                </Link>
                </Col>

                <Col xs={12} lg={2}>
                <Link to="#" className='link' onClick={() => setCatagory("sublet")}>
                    sublet
                </Link>
                </Col>

                <Col xs={12} lg={2}>
                <Link to="#" className='link' onClick={() => setCatagory("bachelor")}>
                    bachelor
                </Link>
                </Col>

                <Col xs={12} lg={2}>
                <Link to="#" className='link' onClick={() => setCatagory("forsale")}>
                    forsale
                </Link>
                </Col>

            </Row>
        </Container>
    );
};

export default Catagory2;