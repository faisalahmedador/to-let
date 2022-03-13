import React, {useEffect} from "react";
import {Carousel} from 'react-carousel-minimal';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import './_advertisementDetails.scss';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {GoLocation} from 'react-icons/go'
import {AiOutlineLike, AiOutlineShareAlt, BsCheckCircle} from "react-icons/all";
import ListGroup from "react-bootstrap/ListGroup";
import {AdvertisementScrollControl} from "../../Shared/customHooks";

const AdvertisementDetails = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);
    const reachedBottom = AdvertisementScrollControl();
    console.log(reachedBottom);
    useEffect(() => {
      window.scrollTo(0, 0)
    }, []);
    const data = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
            caption: ""
        },
        {
            image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
            caption: ""
        },
        {
            image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
            caption: ""
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
            caption: ""
        },
        {
            image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
            caption: ""
        },
        {
            image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
            caption: ""
        },
        {
            image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
            caption: ""
        },
        {
            image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
            caption: ""
        },
        {
            image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
            caption: ""
        }
    ];

    return (
        <div id={"advertisement"} className="advertisement-main">
            <Container>
                <Row>
                    <Col md={8}>
                        <div className={'advertisement-main-header'}>
                            <h2>Lovely Furnished Apartment Of 2200 Sq Ft Is Up For Rent In Gulshan</h2>
                            <div className={'advertisement-main-header-type'}>
                                <Link className={'rent'} to={'/'}>RENT</Link>
                                <Link className={'apartment'} to={'/'}>APARTMENT</Link>
                            </div>
                            <h4 className={'location'}><GoLocation/> Gulshan, Dhaka-1212</h4>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className={'advertisement-main-header'}>
                            <div className={'d-flex justify-content-end align-items-center'}>
                                <AiOutlineLike className={'icons mr-2'}/>
                                <AiOutlineShareAlt className={'icons'}/>
                            </div>
                            <h2 className={'text-right'}>BDT 125, 000</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <div className="">
                            <div style={{textAlign: "center"}}>
                                <div>
                                    <Carousel
                                        data={data}
                                        time={0}
                                        width="850px"
                                        height="500px"
                                        radius="10px"
                                        automatic={false}
                                        caption={false}
                                        pauseIconColor="white"
                                        pauseIconSize="40px"
                                        slideBackgroundColor="darkgrey"
                                        slideImageFit="cover"
                                        thumbnails={true}
                                        thumbnailWidth="100px"
                                        style={{
                                            textAlign: "center",
                                            marginBottom: '40px',
                                        }}
                                    />
                                    <div className={'advertisement-details'}>
                                        <div className={'advertisement-details-header'}>
                                            <h2 style={{
                                                margin: '0',
                                                color: '#715EF1',
                                                fontWeight: 'bold',
                                            }}> Overview </h2>
                                            <h4 style={{
                                                margin: '0',
                                            }}> PT-10001 </h4>
                                        </div>
                                        <hr/>
                                        <div className={'advertisement-details-body'}>
                                            <ListGroup as="ol" numbered>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div
                                                        className="d-flex justify-content-between align-items-center w-100">
                                                        <h4 style={{fontWeight: 'bold'}}>Property type:</h4>
                                                        <h4>apartment</h4>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div
                                                        className="d-flex justify-content-between align-items-center w-100">
                                                        <h4 style={{fontWeight: 'bold'}}>Size</h4>
                                                        <h4>1200 sq. ft</h4>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div
                                                        className="d-flex justify-content-between align-items-center w-100">
                                                        <h4 style={{fontWeight: 'bold'}}>Bedroom</h4>
                                                        <h4>2</h4>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div
                                                        className="d-flex justify-content-between align-items-center w-100">
                                                        <h4 style={{fontWeight: 'bold'}}>Bathroom</h4>
                                                        <h4>1</h4>
                                                    </div>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </div>

                                    </div>

                                    <div className={'advertisement-details'}>
                                        <div className={'advertisement-details-header'}>
                                            <h2 style={{
                                                margin: '0',
                                                color: '#715EF1',
                                                fontWeight: 'bold',
                                            }}> Description </h2>
                                        </div>
                                        <hr/>
                                        <div className={'advertisement-details-body'}>
                                            <h4 className={'text-left'}>
                                                2245 Sq Ft Flat Is Available For Sale In Bashundhara R-a, Block
                                                B <br/><br/>
                                                Create a warm ambience in this home with your beloved family, located at
                                                Bashundhara
                                                R-A. With well-designed bedrooms, and washrooms, this home offers the
                                                perfect
                                                scope to
                                                create beautiful memories with your loved ones. You can avail an
                                                affordable
                                                living,
                                                enjoying all the features of a standard apartment.<br/><br/>

                                                So hurry up to make this flat your home and contact us.</h4>
                                            <br/><br/><br/>

                                            <ListGroup as="ol" numbered>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div
                                                        className="d-flex justify-content-between align-items-center w-100">
                                                        <h4 style={{fontWeight: 'bold'}}>Floor:</h4>
                                                        <h4>1st</h4>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div
                                                        className="d-flex justify-content-between align-items-center w-100">
                                                        <h4 style={{fontWeight: 'bold'}}>Rooms:</h4>
                                                        <h4>4</h4>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div
                                                        className="d-flex justify-content-between align-items-center w-100">
                                                        <h4 style={{fontWeight: 'bold'}}>Drawing & Dinning</h4>
                                                        <h4>Separate</h4>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div
                                                        className="d-flex justify-content-between align-items-center w-100">
                                                        <h4 style={{fontWeight: 'bold'}}>Master bedroom</h4>
                                                        <h4>2</h4>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div
                                                        className="d-flex justify-content-between align-items-center w-100">
                                                        <h4 style={{fontWeight: 'bold'}}>Balcony</h4>
                                                        <h4>2</h4>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div
                                                        className="d-flex justify-content-between align-items-center w-100">
                                                        <h4 style={{fontWeight: 'bold'}}>Gas</h4>
                                                        <h4>Lp</h4>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div
                                                        className="d-flex justify-content-between align-items-center w-100">
                                                        <h4 style={{fontWeight: 'bold'}}>Bachelor</h4>
                                                        <h4>Not allowed</h4>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div
                                                        className="d-flex justify-content-between align-items-center w-100">
                                                        <h4 style={{fontWeight: 'bold'}}>Rent pay</h4>
                                                        <h4>Before 10 </h4>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div
                                                        className="d-flex justify-content-between align-items-center w-100">
                                                        <h4 style={{fontWeight: 'bold'}}>Service charge</h4>
                                                        <h4>BDT 2,000</h4>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div
                                                        className="d-flex justify-content-between align-items-center w-100">
                                                        <h4 style={{fontWeight: 'bold'}}>Advance rent</h4>
                                                        <h4>BDT 10,000</h4>
                                                    </div>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </div>

                                    </div>

                                    <div className={'advertisement-details'}>
                                        <div className={'advertisement-details-header'}>
                                            <h2 style={{
                                                margin: '0',
                                                color: '#715EF1',
                                                fontWeight: 'bold',
                                            }}> Features </h2>
                                        </div>
                                        <hr/>
                                        <div className={'advertisement-details-body'}>
                                            <ListGroup as="ol" numbered>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <h4 style={{fontWeight: 'bold'}}><BsCheckCircle style={{color: '#715EF1'}}
                                                        className={'mr-3'}/> 24 Hour CC TV
                                                        coverage</h4>

                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <h4 style={{fontWeight: 'bold'}}><BsCheckCircle style={{color: '#715EF1'}}
                                                        className={'mr-3'}/> Prayer room facilities</h4>
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <h4 style={{fontWeight: 'bold'}}><BsCheckCircle style={{ color: '#715EF1'}}
                                                        className={'mr-3'}/> Security Gourd</h4>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </Col>

                    <Col md={4}>
                        <div className={reachedBottom ? 'position-relative' : 'position-fixed'}>
                            <h2>Send Owner a message</h2>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Row>
                                    <Col xs={8} style={{margin: '15px 0'}}>
                                        <p style={{
                                            margin: '0',
                                            color: '#715EF1',
                                            fontWeight: 'bold',
                                            textAlign: 'left'
                                        }}> Name </p>
                                        <Form.Control placeholder={`Name`} size='lg'
                                                      {...register("name", {
                                                          required: true,
                                                          maxLength: 80
                                                      })}/>
                                    </Col>
                                    <Col xs={8} style={{margin: '15px 0'}}>
                                        <p style={{
                                            margin: '0',
                                            color: '#715EF1',
                                            fontWeight: 'bold',
                                            textAlign: 'left'
                                        }}> Phone number </p>
                                        <Form.Control placeholder={`Phone`} size='lg'
                                                      {...register("phone", {
                                                          required: true,
                                                          maxLength: 80
                                                      })}/>
                                    </Col>
                                    <Col xs={8} style={{margin: '15px 0'}}>
                                        <p style={{
                                            margin: '0',
                                            color: '#715EF1',
                                            fontWeight: 'bold',
                                            textAlign: 'left'
                                        }}> Message </p>
                                        <Form.Control placeholder={`Message`} size='lg'
                                                      as="textarea" {...register("message", {
                                            required: true,
                                            maxLength: 80
                                        })} rows="5"/>
                                    </Col>
                                    <Col xs={8} style={{margin: '15px 0'}}>
                                        <div className={'d-flex justify-content-end'}>
                                            <Button type="submit" size="lg">
                                                Submit
                                            </Button>
                                        </div>
                                    </Col>
                                </Form.Row>
                            </Form>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>

    )
}

export default AdvertisementDetails;