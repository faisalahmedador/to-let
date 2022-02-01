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

    const [searchObj, setSearchobj] = useState({})
    const history = useHistory();

    
    const onSubmit = async (v) => {
        v.preventDefault()
        console.log('onsubmit search', v.target );  
        console.log('search object', searchObj );

        const { data } = await API.post('/search', {  searchObj }  );

        console.log('data from submit add', data );

        // history.push('/searchresult');
    }

    return (
        <Form onSubmit={ onSubmit  } >
        <Container fluid 
        style={{ backgroundColor: 'rgba(255,255,255,.9)', padding: '10px 10px', borderRadius: '.5rem', boxShadow: '0 0 9px -2px rgba(0,0,0,.5)' }} >


        <Form.Row>
            <Col lg={4} xs={12} style={{ margin: '5px 0' }} >
                <p style={{ margin: '0', color: '#715EF1',fontWeight: 'bold' , textAlign: 'left' }} > Enter Area Name </p>
                <Form.Control placeholder={  `Enter Area Name` } size='lg' onChange={(e) => setSearchobj({ ...searchObj, area: e.target.value })  } />
            </Col>

            <Col lg={4} xs={12} style={{ margin: '5px 0' }}  >
                <p style={{ margin: '0', color: '#715EF1',fontWeight: 'bold' , textAlign: 'left' }} > Select City </p>
                <Form.Control as="select" size="lg" placeholder='Select City' onChange={ e => setSearchobj({ ...searchObj, city: e.target.value }) } >
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
                <Form.Control as="select" size="lg" placeholder='Select Type' onChange={ e => setSearchobj({ ...searchObj, type: e.target.value }) } >
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
        <Form.Control as="select" size="lg" placeholder='Select Bed' onChange={ e => setSearchobj({ ...searchObj, bed: e.target.value }) } >
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
        <Form.Control as="select" size="lg" placeholder='Select Bath' onChange={ e => setSearchobj({ ...searchObj, bath: e.target.value }) } >
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
        <Form.Control as="select" size="lg" placeholder='Minimum Price' onChange={ e => setSearchobj({ ...searchObj, min: e.target.value }) } >
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
        <Form.Control as="select" size="lg" placeholder='Maximum Price' onChange={ e => setSearchobj({ ...searchObj, max: e.target.value }) } >
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
