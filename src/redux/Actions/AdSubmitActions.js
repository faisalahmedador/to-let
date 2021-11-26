import {
  SUBMIT_NEW_ADD_REQUEST,
  SUBMIT_NEW_ADD_SUCCESS,
  SUBMIT_NEW_ADD_FAILED,
} from "../Constants";
import axios from 'axios'
import { BASE_API_URL } from "../../Components/configs";
import Cookies from 'js-cookie';

const adSubmitAction = (data) => async (dispatch) => {
  data.user_id = Cookies.get("userId");
  dispatch({ type: SUBMIT_NEW_ADD_REQUEST, payload: { data } });
  try {
    const token = Cookies.get("userToken");
    const response = await axios({
      method: "post",
      url: `${BASE_API_URL}/add/submit`,
      data: JSON.stringify(data),
      headers: {
        "Content-Type": `application/json`,
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data) {
      dispatch({ type: SUBMIT_NEW_ADD_SUCCESS, payload: { response } });
    }
  } catch (error) {
    dispatch({ type: SUBMIT_NEW_ADD_FAILED, payload: error.message });
  }
};

export { adSubmitAction };
