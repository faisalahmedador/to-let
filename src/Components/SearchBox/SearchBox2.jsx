import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
  Form,
  Button,
} from "react-bootstrap";
import { useHistory } from "react-router";

const SearchBox2 = () => {

    const history = useHistory();

    const onSubmit = (v) => {
        console.log('onsubmit search', v );
        history.push('/searchresult');
    }

    return (
        <Form onSubmit={ onSubmit  } >
        <Container fluid 
        style={{ backgroundColor: 'rgba(255,255,255,.9)', padding: '10px 10px', borderRadius: '.5rem', boxShadow: '0 0 9px -2px rgba(0,0,0,.5)' }} >


        <Form.Row>
            <Col lg={4} xs={12} style={{ margin: '5px 0' }} >
                <p style={{ margin: '0', color: '#715EF1',fontWeight: 'bold' , textAlign: 'left' }} > Enter Area Name </p>
                <Form.Control placeholder={  `Enter Area Name` } size='lg' />
            </Col>

            <Col lg={4} xs={12} style={{ margin: '5px 0' }}  >
                <p style={{ margin: '0', color: '#715EF1',fontWeight: 'bold' , textAlign: 'left' }} > Select City </p>
                <Form.Control as="select" size="lg" placeholder='Select City'>
                    {/* <option> Select City </option> */}
                    <option> Dhaka </option>
                    <option> Chittagong </option>
                    <option> Rajshahi </option>
                    <option> Khulna </option>
                    <option> Sylet </option>
                    <option> Barishal </option>
                </Form.Control>
            </Col>

            <Col lg={4} xs={12} style={{ margin: '5px 0' }} >
                <p style={{ margin: '0', color: '#715EF1',fontWeight: 'bold' , textAlign: 'left' }} > Select Type </p>
                <Form.Control as="select" size="lg" placeholder='Select Type'>
                    {/* <option> Select Type </option> */}
                    <option>Duplex</option>
                    <option>Family house</option>
                    <option>Apartment</option>
                    <option>Office Space</option>
                    <option>Bachelor</option>
                    <option>Sublet</option>
                    <option>Sell Property</option>
                </Form.Control>
            </Col>

        </Form.Row>

        <Form.Row>

        <Col lg={3} xs={12} style={{ margin: '5px 0' }} >
        <p style={{ margin: '0', color: '#715EF1',fontWeight: 'bold' , textAlign: 'left' }} > Select Bed </p>
        <Form.Control as="select" size="lg" placeholder='Select Bed'>
            {/* <option> Select Bed </option> */}
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
        </Form.Control>
        </Col>

        <Col lg={3} xs={12} style={{ margin: '5px 0' }} >
        <p style={{ margin: '0', color: '#715EF1',fontWeight: 'bold' , textAlign: 'left' }} > Select Bath </p>
        <Form.Control as="select" size="lg" placeholder='Select Bath'>
            {/* <option> Select Bath </option> */}
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
        </Form.Control>
        </Col>

        <Col lg={3} xs={12} style={{ margin: '5px 0' }} >
        <p style={{ margin: '0', color: '#715EF1',fontWeight: 'bold' , textAlign: 'left' }} > Minimum Price </p>
        <Form.Control as="select" size="lg" placeholder='Minimum Price'>
            {/* <option>Min Price</option> */}
            <option>1000</option>
            <option>5000</option>
            <option>10000</option>
            <option>20000</option>
            <option>30000</option>
            <option>40000</option>
            <option>50000</option>              
        </Form.Control>
        </Col>

        <Col lg={3} xs={12} style={{ margin: '5px 0' }} >
        <p style={{ margin: '0', color: '#715EF1',fontWeight: 'bold' , textAlign: 'left' }} > Maximum Price </p>
        <Form.Control as="select" size="lg" placeholder='Maximum Price'>
            {/* <option>Max Price</option> */}
            <option>5000</option>
            <option>10000</option>
            <option>20000</option>
            <option>30000</option>
            <option>40000</option>
            <option>50000</option>            
        </Form.Control>
        </Col>

        </Form.Row>

        <Form.Row style={{ display: "flex", justifyContent: "center" }}>
          <Button type="submit" size="lg">
            Search
          </Button>
        </Form.Row>
      </Container>
    </Form>
  );
};

export default SearchBox2;
