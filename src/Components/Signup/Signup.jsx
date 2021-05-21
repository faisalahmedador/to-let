import React, {useState, useRef } from 'react';
import { Form, Col, Button, Overlay, Tooltip } from 'react-bootstrap';
import { AiFillQuestionCircle } from 'react-icons/ai';
import ReactDate from 'react-date-picker';
import './Signup.scss';

const Signup = () => {

    const [show, setShow] = useState(false);
    const [ show2, setShow2 ] = useState(false)
    const target = useRef(null);
    const target2 = useRef(null);
    const [value, onChange] = useState(new Date());


    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} >

        <div className='signup-div' >
            <h1 style={{ color: '#715EF1' }} > Sign Up </h1>
            <Form>
            <Form.Row style={{ marginBottom: '5px' }}>
                <Col>
                <Form.Control type='name' placeholder="First name" size='lg' />
                </Col>
                <Col>
                <Form.Control  type='name' placeholder="Last name" size='lg' />
                </Col>
            </Form.Row>

            <Form.Row  style={{ marginBottom: '5px' }} >
                <Col>
                    <Form.Control type="email" placeholder="Mobile Number/Email Address"  size='lg' />
                </Col>
            </Form.Row>

            <Form.Row style={{ marginBottom: '5px' }} >
                <Col>
                    <Form.Control type="password" placeholder="Password" size='lg' />
                </Col>
            </Form.Row>

            <div>
            <p style={{ fontWeight: 'bold', color: '#715EF1', textAlign: 'left', display: 'flex', alignItems: 'center' }} > 
                Date of Birth        
                <Button  ref={target2} onClick={() => setShow2(!show2)} >
                <AiFillQuestionCircle   />
                </Button> 
            </p>

            <Overlay target={target2.current} show={show2} placement="right">
                {(props) => (
                <Tooltip id="overlay-example" {...props}>
                    Select your date of birth
                </Tooltip>
                )}
            </Overlay>
            </div>

            <Form.Row style={{ marginBottom: '5px' }} >
                <Col style={{ textAlign: 'left' }}>
                    <ReactDate
                    style={{ border: '1px solid #715EF1' }}
                    onChange={onChange}
                    value={value}
                    clearIcon={null}
                    />
                </Col>
            </Form.Row>
            
            <div>
            <p style={{ fontWeight: 'bold', color: '#715EF1', textAlign: 'left', display: 'flex', alignItems: 'center' }} > 
                Gender        
                <Button  ref={target} onClick={() => setShow(!show)} >
                <AiFillQuestionCircle   />
                </Button> 
            </p>

            <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                <Tooltip id="overlay-example" {...props}>
                    Check your Gender
                </Tooltip>
                )}
            </Overlay>
            </div>
            
            <Form.Row style={{ marginBottom: '5px', textAlign: 'left' }} >
                <Col>
                    <div key={`inline-radio`} className="mb-3">
                    <Form.Check inline label="Male" name="group1" type={'radio'} id={`inline-radio-1`} />
                    <Form.Check inline label="Female" name="group1" type={'radio'} id={`inline-radio-2`} />
                    <Form.Check inline label="Others" name="group1" type={'radio'} id={`inline-radio-3`} />
                    </div>
                </Col>
            </Form.Row>

            <Button variant="primary" className='submit-btn' type="submit">
                Submit
            </Button>
            
            </Form>
        </div>
        </div>
    );
};

export default Signup;