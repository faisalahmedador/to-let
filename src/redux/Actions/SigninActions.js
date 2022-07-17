import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILED,
  USER_LOGOUT, SIGNIN_LOGGEDOUT

} from "../Constants";
  import axios from 'axios'
  import { BASE_API_URL } from "../../Components/configs";

  const signinAction = (data) => async (dispatch) => {
    if(data === 'logged_out') {
      dispatch({ type: SIGNIN_LOGGEDOUT, payload: {data}})
      return;
    }
    dispatch({ type: SIGNIN_REQUEST, payload: { data } });
    try {
      const response = await axios({
        method: "post",
        url: `${BASE_API_URL}/api/authenticate`,
        data: JSON.stringify(data),
        headers: {
          "Content-Type": `application/json`,
          // Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.data) {
        dispatch({ type: SIGNIN_SUCCESS, payload: { response } });
      }
    } catch (error) {
      dispatch({ type: SIGNIN_FAILED, payload: error.message });
    }
  };

  export {signinAction}