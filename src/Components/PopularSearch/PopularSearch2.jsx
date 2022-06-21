import React from 'react';
import {Container, Row, Col,} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {BsChevronRight} from "react-icons/bs";
import './_popularsearch.scss';

const PopularSearch2 = () => {

    const dhakaarea = [
        {id: 1, name: 'Mirpur'},
        {id: 2, name: 'Uttora'},
        {id: 3, name: 'Rajarbag'},
        {id: 4, name: 'Mohammadpur'},
    ]

    const ctgarea = [
        {id: 1, name: 'GEC'},
        {id: 2, name: 'Cornel hat'},
        {id: 3, name: '2No Gate'},
        {id: 4, name: 'Hathazari'},
        {id: 5, name: 'Potenga'},
        {id: 6, name: 'Najirhat'},
        {id: 7, name: 'Ak Khan'},

    ]

    return (
        <Container fluid className="popular-search-div">
            <h2 className='header'> Popular Searches </h2>

            <Row className={'justify-content-center'}>

                <Col lg={3} xs={6} className={'d-flex flex-column align-items-center mb-2'}>
                    <div>
                        <h4 className={'sub-header'}> Dhaka </h4>
                        {
                            dhakaarea.map((v, i) => {
                                return (
                                    <div key={i} className="per-link"><Link href='/'> <BsChevronRight/> {v.name} </Link>
                                        <br/></div>
                                )
                            })
                        }
                    </div>
                </Col>

                <Col lg={3} xs={6} className={'d-flex flex-column align-items-center mb-2'}>
                    <div>
                        <h4 className={'sub-header'}> Chittagong </h4>
                        {
                            ctgarea.map((v, i) => {
                                return (
                                    <div key={i} className="per-link"><Link href='/'> <BsChevronRight/> {v.name} </Link>
                                        <br/></div>
                                )
                            })
                        }
                    </div>
                </Col>

                <Col lg={3} xs={6} className={'d-flex flex-column align-items-center mb-2'}>
                    <div>
                        <h4 className={'sub-header'}> Khulna </h4>
                        {
                            dhakaarea.map((v, i) => {
                                return (
                                    <div key={i} className="per-link"><Link href='/'> <BsChevronRight/> {v.name} </Link>
                                        <br/></div>
                                )
                            })
                        }
                    </div>
                </Col>

                <Col lg={3} xs={6} className={'d-flex flex-column align-items-center mb-2'}>
                    <div>
                        <h4 className={'sub-header'}> Rajshahi </h4>
                        {
                            ctgarea.map((v, i) => {
                                return (
                                    <div key={i} className="per-link"><Link href='/'> <BsChevronRight/> {v.name} </Link>
                                        <br/></div>
                                )
                            })
                        }
                    </div>
                </Col>

                <Col lg={3} xs={6} className={'d-flex flex-column align-items-center mb-2'}>
                    <div>
                        <h4 className={'sub-header'}> Sylhet </h4>
                        {
                            dhakaarea.map((v, i) => {
                                return (
                                    <div key={i} className="per-link"><Link href='/'> <BsChevronRight/> {v.name} </Link>
                                        <br/></div>
                                )
                            })
                        }
                    </div>
                </Col>

                <Col lg={3} xs={6} className={'d-flex flex-column align-items-center mb-2'}>
                    <div>
                        <h4 className={'sub-header'}> Barisal </h4>
                        {
                            dhakaarea.map((v, i) => {
                                return (
                                    <div key={i} className="per-link"><Link href='/'> <BsChevronRight/> {v.name} </Link>
                                        <br/></div>
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