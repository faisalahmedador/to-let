import React, {useState, useRef } from 'react';
import { Form, Col, Button, Overlay, Tooltip } from 'react-bootstrap';
import { AiFillQuestionCircle } from 'react-icons/ai';
import ReactDate from 'react-date-picker';
import './Signup.scss';
import { API } from '../../util/api';
import { useHistory, Link } from 'react-router-dom'

const Signup = () => {

    const [val, setVal ] = useState({first_name: '', last_name: '', number: '', pass: '' })
    let history = useHistory()

    console.log('val', val ) ;

    const onSubmit = async(e) => {
        e.preventDefault();
        console.log('e', val );
        if(val.first_name != '' && val.last_name != '' && val.number != '' && val.pass != ''){

            if(val.number.length === 11 ){

            try{
                let values = {
                    first_name: val.first_name, 
                    last_name: val.last_name , 
                    number: val.number, 
                    password: val.pass
                }

                const { data } = await API.post('/signup', values );
                console.log('api data', data );
                localStorage.setItem('token', data.token )
                history.push('/home')

            }
            catch(err){
                alert(err?.response?.data?.message)
            }


    
            }
            else{
                alert('Please give valid number of 11 digit, don\'t add +88 in front')
            }

        }
        else{
            alert('please fill all field')
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} >

        <div className='signup-div' >
            <h1 style={{ color: '#715EF1' }} > Sign Up </h1>
            <Form onSubmit={ onSubmit } >
            <Form.Row style={{ marginBottom: '5px' }}>
                <Col>
                <Form.Control type='name' placeholder="First name" size='lg' onChange={ (e) => setVal( {...val, first_name: e.target.value }) }  />
                </Col>
                <Col>
                <Form.Control  type='name' placeholder="Last name" size='lg' onChange={ (e) => setVal( {...val, last_name: e.target.value }) }  />
                </Col>
            </Form.Row>

            <Form.Row  style={{ marginBottom: '5px' }} >
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline' }} >
                    <p style={{ fontWeight: 'bold', marginRight: '5px' }} > +88 </p>
                    <Form.Control type="number" placeholder="Enter your 11 digit Mobile Number"  size='lg'  onChange={ (e) => setVal( {...val, number: e.target.value }) }  />
                </Col>
            </Form.Row>

            <Form.Row style={{ marginBottom: '5px' }} >
                <Col>
                    <Form.Control type="password" placeholder="Password" size='lg' onChange={ (e) => setVal( {...val, pass: e.target.value }) } />
                </Col>
            </Form.Row>

            {/* <div>
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
            </Form.Row> */}

            <Button variant="primary" className='submit-btn' type="submit">
                Submit
            </Button>

            <span className="line">or</span>
            <Link className="button sign" to="/login">
                Login
            </Link>
            
            </Form>
        </div>
        </div>
    );
};

export default Signup;