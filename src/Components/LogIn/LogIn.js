import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../../util/api";
import { useForm } from "react-hook-form";
import { signinAction } from "../../redux/Actions/SigninActions";
import { Container, Col, Row } from "react-bootstrap";
import RentalHome from "../../Assets/images/RentalHome.jpg";
import Cookies from 'js-cookie'
import Alert from 'react-bootstrap/Alert'
import "./_login.scss";

const LogIn = () => {
  let history = useHistory();
  const location = useLocation();
  const [show,setShow] = useState(true);
  console.log(location);

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


  useEffect(() => {
    if (success) {
      Cookies.set("userToken", success.response.data.token);
      Cookies.set("userId", success.response.data.user_info.id);
      history.push('/');
    }
  }, [success])


  return (
    <section
      id="login-section"
      style={{
        backgroundImage: `url(${RentalHome})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
      }}
    >
      <section className="login-form">
        <div className="form-info">
          {location.state && location.state.msg && show ? 
          <Alert variant="warning" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>You need to login/signup first to continue.</Alert.Heading>
        </Alert> : ''}
          <h2>Login to continue</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-input"
              {...register("phone_number", { required: true })}
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
