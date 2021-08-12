import {
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNIN_FAILED,
  } from "../Constants";
  import axios from 'axios'
  import { BASE_API_URL } from "../../Components/configs";

  const signupAction = (data) => async (dispatch) => {
    dispatch({ type: SIGNIN_REQUEST, payload: { data } });
    try {
      const response = await axios({
        method: "post",
        url: `${BASE_API_URL}/login`,
        // url: 'http://baniqa.com/baniqa/public/api/addnewproduct',
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

  export {signupAction}