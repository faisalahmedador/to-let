import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signupAction } from "../../redux/Actions/SigninActions";
import { Container, Col, Row } from "react-bootstrap";
import RentalHome from '../../Assets/images/RentalHome.jpg'
import cookies from "js-cookie";
import "./_login.scss";

const LogIn = () => {
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
    dispatch(signupAction(data));
  };

  const { loading, success, error } = useSelector(
    (state) => state.signinReducer
  );

  if (error) {
    console.log(error);
  }

  // useEffect(() =>{
  //   if(success.token){
  //     cookies.set('token', success.token)
  //   }
  // }, [success])

  return (
    <section id="login-section" 
    style={{ backgroundImage: `url(${RentalHome})` ,
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
      width: '100%',
       height: '100vh'}}>
      <section className="login-form">
        <div className="form-info">
          <h2>Login to continue</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-input"
              {...register("email", { required: true })}
              // onChange={(e) => setUser(e.target.value)}
              placeholder="User name or Email or Phone"
            />

            <input
              className="form-input"
              placeholder="Password*"
              {...register("password", { required: true })}
              // onChange={(e) => setPass(e.target.value)}
            />

            {error && "invalid email or password"}

            <Link className="forgot" to="/forgotpassword">
              forgotten password?
            </Link>

            {(errors.email || errors.password) && console.log(errors.email)}
            <input className="button log" type="submit" value="Log In" />
          </form>

          <span className="line">or</span>
          <Link className="button sign" to="/signup">
            Create an acount
          </Link>
        </div>
      </section>

      {/* <Footers /> */}
    </section>
  );
};

export default LogIn;
