import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED,
   } from "../Constants";
   
   function signupReducer(state = {}, action) {
     switch (action.type) {
       case SIGNUP_REQUEST:
         return { loading: true };
       case SIGNUP_SUCCESS:
        
         return { loading: false, success: action.payload };
   
       case SIGNUP_FAILED:
         return { loading: false, error: action.payload };
   
       default:
         return state;
     }
   }
   
   export {signupReducer}