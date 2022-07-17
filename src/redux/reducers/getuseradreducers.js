import {
    GET_USER_AD_REQUEST,
    GET_USER_AD_SUCCESS,
    GET_USER_AD_FAILED,
  } from "../Constants";
  
  function getUserAdsReducers(state = {}, action) {
    switch (action.type) {
      case GET_USER_AD_REQUEST:
        return { loading: true };
      case GET_USER_AD_SUCCESS:
        // SINGLEInfo(action.payload);
        return { loading: false, ads: action.payload };
  
      case GET_USER_AD_FAILED:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  }
  
  export {getUserAdsReducers}