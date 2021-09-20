import React, { useState, useEffect } from "react";
// import Headers from "../layout/Header/Headers";
// import Footers from "../layout/Footer/Footers";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { API } from '../../util/api';
// import { loginRequest } from "../../redux/actions/loginActions";
// import * as Auth from "../../helpers/auth";
import "./_login.scss";

const LogIn = () => {
  let history = useHistory()

  const [logInfo, setLoginfo ] = useState({ number: '', pass: '' })

  console.log(logInfo );
  
  const loginFunc = async() => {
    if( logInfo.number != '' && logInfo.pass != '' ){
      if(logInfo.number.length === 11 ){
        
        try{
          
          const { data } = await API.post('/login', { number: logInfo.number, pass: logInfo.pass  } );
            console.log('its called');
            console.log('data from  login', data );
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
      alert('You have to give both of your credentials')
    }
  }

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
            type="number"
            name="User name"
            onChange={(e) =>  setLoginfo({ ...logInfo, number:  e.target.value }) }
            placeholder="enter your mobile number"
          />
          <input
            className="form-input"
            type="password"
            placeholder="Password*"
            onChange={(e) => setLoginfo({ ...logInfo, pass: e.target.value  }) }
          />
          <Link className="forgot" to="/login/forgotten">
            forgotten password?
          </Link>

          <button className='button log' onClick={ () => loginFunc() } >
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
