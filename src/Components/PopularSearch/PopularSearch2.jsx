import React from 'react';
import { Container, Row, Col,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsChevronRight } from "react-icons/bs";
import './_popularsearch.scss';

const PopularSearch2 = () => {

    const dhakaarea = [
    { id: 1, name: 'Mirpur' },
    { id: 2, name: 'Uttora' },
    { id: 3, name: 'Rajarbag' },
    { id: 4, name: 'Mohammadpur' },
    ]

    const ctgarea = [
        { id: 1, name: 'GEC' },
        { id: 2, name: 'Cornel hat' },
        { id: 3, name: '2No Gate' },
        { id: 4, name: 'Hathazari' },
        { id: 5, name: 'Potenga' },
        { id: 6, name: 'Najirhat' },
        { id: 7, name: 'Ak Khan' },

    ]

    return (
        <Container fluid className="popular-search-div"  >
            <h2 style={{ textDecoration: 'underline', fontWeight: 'bold', fontSize: '20px', color: 'rgba(0,0,0,.8)', margin: '0 0 30px 0' }} > Popular Searches </h2>
           
            <Row>
            
                <Col lg={4} xs={12}>
                    <h4 style={{ textDecoration: 'underline', fontWeight: 'bold', fontSize: '20px', color: 'rgba(0,0,0,.8)', margin: '10px  0 10px 0', textAlign: 'center' }} > Dhaka </h4>
                    <div >
                    { 
                    dhakaarea.map((v, i) => {
                        return(
                            <div key={i} className="per-link" > <Link href='/'  > <BsChevronRight/>  {v.name} </Link> <br/> </div>
                            )
                    })
                    }
                    </div>
                </Col>

                <Col lg={4} xs={12}>
                    <h4 style={{ textDecoration: 'underline', fontWeight: 'bold', fontSize: '20px', color: 'rgba(0,0,0,.8)', margin: '10px  0 10px 0', textAlign: 'center' }} > Chittagong </h4>
                    <div >
                    { 
                    ctgarea.map((v, i) => {
                        return(
                            <div key={i} className="per-link" > <Link href='/'  > <BsChevronRight/>  {v.name} </Link> <br/> </div>
                            )
                    })
                    }
                    </div>
                </Col>

                <Col lg={4} xs={12}>
                    <h4 style={{ textDecoration: 'underline', fontWeight: 'bold', fontSize: '20px', color: 'rgba(0,0,0,.8)', margin: '10px  0 10px 0', textAlign: 'center' }} > Khulna </h4>
                    <div >
                    { 
                    dhakaarea.map((v, i) => {
                        return(
                            <div key={i} className="per-link" > <Link href='/'  > <BsChevronRight/>  {v.name} </Link> <br/> </div>
                            )
                    })
                    }
                    </div>
                </Col>
            
            </Row>

            <Row>

            <Col lg={4} xs={12}>
                <h4 style={{ textDecoration: 'underline', fontWeight: 'bold', fontSize: '20px', color: 'rgba(0,0,0,.8)', margin: '10px  0 10px 0', textAlign: 'center' }} > Rajshahi </h4>
                <div >
                { 
                ctgarea.map((v, i) => {
                    return(
                        <div key={i} className="per-link" > <Link href='/'  > <BsChevronRight/>  {v.name} </Link> <br/> </div>
                        )
                })
                }
                </div>
            </Col>

            <Col lg={4} xs={12}>
                <h4 style={{ textDecoration: 'underline', fontWeight: 'bold', fontSize: '20px', color: 'rgba(0,0,0,.8)', margin: '10px  0 10px 0', textAlign: 'center' }} > Sylhet </h4>
                <div >
                { 
                dhakaarea.map((v, i) => {
                    return(
                        <div key={i} className="per-link" > <Link href='/'  > <BsChevronRight/>  {v.name} </Link> <br/> </div>
                        )
                })
                }
                </div>
            </Col>

            <Col lg={4} xs={12}>
                <h4 style={{ textDecoration: 'underline', fontWeight: 'bold', fontSize: '20px', color: 'rgba(0,0,0,.8)', margin: '10px  0 10px 0', textAlign: 'center' }} > Barisal </h4>
                <div >
                { 
                dhakaarea.map((v, i) => {
                    return(
                        <div key={i} className="per-link" > <Link href='/'  > <BsChevronRight/>  {v.name} </Link> <br/> </div>
                        )
                })
                }
                </div>
            </Col>
        
        </Row>

        </Container>
    );
};

export default PopularSearch2;