import React, { useState, useEffect } from "react";
// import Headers from "../layout/Header/Headers";
// import Footers from "../layout/Footer/Footers";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { loginRequest } from "../../redux/actions/loginActions";
// import * as Auth from "../../helpers/auth";
import "./_login.scss";

const LogIn = () => {
  // let history = useHistory()
  
  return (
    <section id="login-section">
      {/* <div className="go_top">
            <i className="fa fa-angle-double-up" aria-hidden="true"></i>
          </div> */}

      {/* <Headers /> */}

      <section className="login-form">
        <div className="form-info">
          <h2>Login to continue</h2>
          <input
            className="form-input"
            type="text"
            name="User name"
            // onChange={(e) => setUser(e.target.value)}
            placeholder="User name or Email Address*"
          />
          <input
            className="form-input"
            type="password"
            placeholder="Password*"
            // onChange={(e) => setPass(e.target.value)}
          />
          <Link className="forgot" to="/login/forgotten">
            forgotten password?
          </Link>

          <button className='button log'>
            login
          </button>

          {/* <button className="button log" onClick={onSubmitHandler}>
            {loading === true ? (
              <span
                class="spinner-grow spinner-grow-sm pr-2"
                style={{ color: "#4f4f4f" }}
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              ""
            )}
            login
          </button> */}

          {/* {logged === false ? (
            <h5 className="registration-header-p" style={{ color: "red" }}>
              {loginInfo.response.data.message}
            </h5>
          ) : (
            ""
          )} */}
          {/* <a className="button fb" href="#">
            {" "}
            facebook
          </a> */}
          <span className="line">or</span>
          <Link className="button sign" to="/signup">
            sign up
          </Link>
        </div>
      </section>

      {/* <Footers /> */}
    </section>
  );
};

export default LogIn;
