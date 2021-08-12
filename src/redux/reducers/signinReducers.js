import {
   SIGNIN_REQUEST,
   SIGNIN_SUCCESS,
   SIGNIN_FAILED,
  } from "../Constants";
  
  function signinReducer(state = {}, action) {
    switch (action.type) {
      case SIGNIN_REQUEST:
        return { loading: true };
      case SIGNIN_SUCCESS:
        // SINGLEInfo(action.payload);
        return { loading: false, success: action.payload };
  
      case SIGNIN_FAILED:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  }
  
  export {signinReducer}