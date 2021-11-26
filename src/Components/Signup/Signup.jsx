import React, {useState, useRef, useEffect } from 'react';
import { Form, Col, Button, Overlay, Tooltip, Row } from 'react-bootstrap';
import { AiFillQuestionCircle } from 'react-icons/ai';
import ReactDate from 'react-date-picker';

import { API } from '../../util/api';
import { useHistory, Link } from 'react-router-dom'

import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signupAction } from "../../redux/Actions/SignupActions";

import RentalHome from '../../Assets/images/RentalHome.jpg'
import Cookies from "js-cookie";
import "./_signup.scss";

const Signup = () => {

  let history = useHistory();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const dispatch = useDispatch();
    
      const onSubmit = (data) => {
        console.log(data);
        dispatch(signupAction(data));
      };

      const { loading, success, error } = useSelector(
        (state) => state.signupReducer
      );

      useEffect(() =>{
        if(success){
          Cookies.set("userToken", success.response.data.token);
          Cookies.set("userId", success.response.data.user_info.id);
          history.push('/');
        }
      }, [success])

  return (
    <section id="signup-section" 
    style={{ backgroundImage: `url(${RentalHome})` ,
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
      width: '100%',
       height: '100vh'}}>
      <section className="signup-form">
        <div className="form-info">
          <h2>sign up</h2>

          <h5>Its quick and easy.</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={6} className='pr-0'>
            <input
              className="form-input"
              {...register("first_name", { required: true })}
              // onChange={(e) => setUser(e.target.value)}
              placeholder="First name"
            />
            </Col>

            <Col md={6}>
            <input
              className="form-input"
              {...register("last_name", { required: true })}
              // onChange={(e) => setUser(e.target.value)}
              placeholder="Last name"
            />
            </Col>

          </Row>

            <input
              className="form-input"
              placeholder="Number"
              {...register("phone_number", { required: true })}
              // onChange={(e) => setPass(e.target.value)}
            />

            <input
              className="form-input"
              placeholder="Password"
              {...register("password", { required: true })}
              // onChange={(e) => setPass(e.target.value)}
            />

            {error && "invalid email or password"}


            {(errors.email || errors.password) && console.log(errors.email)}
            <input className="button log" type="submit" value="Sign Up" />
          </form>

          <span className="line">or</span>
          <Link className="button sign" to="/logIn">
            Log In
          </Link>
        </div>
      </section>

      {/* <Footers /> */}
    </section>
  );
};

export default Signup;
