import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signinAction } from "../../redux/Actions/SigninActions";
import { Container, Col, Row } from "react-bootstrap";
import RentalHome from '../../Assets/images/RentalHome.jpg'
import "./_forgotPassword.scss";

const ForgotPassword = () => {
  // let history = useHistory()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(signinAction(data));
  };

  const { loading, success, error } = useSelector(
    (state) => state.signinReducer
  );

  if (error) {
    console.log(error);
  }


  return (
    <section id="forgot-section" 
    style={{ backgroundImage: `url(${RentalHome})` ,
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
      width: '100%',
       height: '100vh'}}>
      <section className="forgot-form">
        <div className="form-info">
          <h2>Find your account</h2>

          <h5>Please enter your email address or mobile number to search for your account.</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-input"
              {...register("email", { required: true })}
              // onChange={(e) => setUser(e.target.value)}
              placeholder="Mobile number"
            />

            {error && "invalid email or password"}

            {(errors.email || errors.password) && console.log(errors.email)}
            <input className="button log" type="submit" value="Search" />
          </form>

          <span className="line">or</span>
          <Link className="button sign" to="/logIn">
            Log in
          </Link>
        </div>
      </section>

      {/* <Footers /> */}
    </section>
  );
};

export default ForgotPassword;
