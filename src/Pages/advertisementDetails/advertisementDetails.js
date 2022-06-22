import React from "react";
import { Carousel } from 'react-carousel-minimal';
import { Container, Row, Col } from 'react-bootstrap';
import './_advertisementDetails.scss';

const advertisementDetails = () => {

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

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    return (
        <Container fluid>
            <Row>
                <Col md={8}>
                    <div className="App">
                        <div style={{ textAlign: "center" }}>
                            <h2>React Carousel Minimal</h2>
                            <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
                            <div style={{
                                padding: "0 20px"
                            }}>
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
                                        maxWidth: "850px",
                                        maxHeight: "500px",
                                        margin: "40px auto",
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                </Col>

                <Col md={4}>

                </Col>

            </Row>
        </Container>
    )
}

export default advertisementDetails;
