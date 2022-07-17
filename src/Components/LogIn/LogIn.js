import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signinAction } from "../../redux/Actions/SigninActions";
import RentalHome from "../../Assets/images/RentalHome.jpg";
import Alert from 'react-bootstrap/Alert'
import "./_login.scss";
import {getUserToken, saveUserIdentity} from "../../helpers/localStorer";

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
      saveUserIdentity(success.response.data.token, success.response.data.data.id);
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
              type={'email'}
              {...register("email", { required: true })}
              // onChange={(e) => setUser(e.target.value)}
              placeholder="Email"
            />

            <input
              className="form-input"
              placeholder="Password"
              type={'password'}
              {...register("password", { required: true })}
            // onChange={(e) => setPass(e.target.value)}
            />

            {error && "invalid email or password"}

            <Link className="forgot" to="/forgotpassword">
              forgotten password?
            </Link>

            {(errors.email || errors.password) && console.log(errors.email)}
            <input className="btn border-1-primary button-default-style d-block w-100 my-2" type="submit" value="Log In" />
          </form>

          <span className="line">or</span>
          <Link className="btn border-1-primary button-default-style d-block w-100 my-2" to="/signup">
            Create an acount
          </Link>
        </div>
      </section>

      {/* <Footers /> */}
    </section>
  );
};

export default LogIn;
