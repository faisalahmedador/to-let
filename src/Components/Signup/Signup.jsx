import React, {useState, useRef, useEffect } from 'react';
import { Form, Col, Button, Overlay, Tooltip, Row } from 'react-bootstrap';
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
        dispatch(signupAction(data));
      };

      const { loading, success, error } = useSelector(
        (state) => state.signupReducer
      );

      useEffect(() =>{
        if(success){
          Cookies.set("userToken", success.response.token);
          Cookies.set("userId", success.response.data.id);
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
            <input
                className="form-input"
                {...register("name", { required: true })}
                // onChange={(e) => setUser(e.target.value)}
                placeholder="name"
            />

            <input
              className="form-input"
              placeholder="email"
              {...register("email", { required: true })}
              // onChange={(e) => setPass(e.target.value)}
            />

            <input
              className="form-input"
              placeholder="Password"
              type={'password'}
              {...register("password", { required: true })}
              // onChange={(e) => setPass(e.target.value)}
            />

            {error && "invalid email or password"}
            {(errors.email || errors.password) && console.log(errors.email)}
            <input className="btn border-1-primary button-default-style d-block w-100 my-2" type="submit" value="Sign Up" />
          </form>

          <span className="line">or</span>
          <Link className="btn border-1-primary button-default-style d-block w-100 my-2" to="/logIn">
            Log In
          </Link>
        </div>
      </section>

      {/* <Footers /> */}
    </section>
  );
};

export default Signup;
