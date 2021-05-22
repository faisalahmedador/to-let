import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap'

const ProfilePage = () => {
    return (
        <Container fluid  style={{ margin: '224px 0 194px 0' }} >
        <Row style={{ justifyContent: 'center' }} >
            <Col lg='4'>
            <p style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '20px' }} > Name </p>
            <Alert variant='primary' style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '20px' }} >
                Sharif Himu
            </Alert>
            </Col>
        </Row>        
        <Row style={{ justifyContent: 'center' }} >
            <Col lg='4'>
            <p style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '20px' }} > E-mail </p>
            <Alert variant='primary' style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '20px' }} >
                Sharif_Himu@gmail.com
            </Alert>
            </Col>
        </Row>

        <Row style={{ justifyContent: 'center' }} >
            <Col lg='4'>
            <p style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '20px' }} > Phone No </p>
            <Alert variant='primary' style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '20px' }} >
                +88 01 780 005 957
            </Alert>
            </Col>
        </Row>

        </Container>
    );
};

export default ProfilePage;