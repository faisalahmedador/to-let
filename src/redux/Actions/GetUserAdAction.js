import {
    GET_USER_ADD_REQUEST,
    GET_USER_ADD_SUCCESS,
    GET_USER_ADD_FAILED,
  } from "../Constants";
  import axios from 'axios'
  import { BASE_API_URL } from "../../Components/configs";
  import Cookies from 'js-cookie';
  
  const getUserAdsAction = () => async (dispatch) => {
    dispatch({ type: GET_USER_ADD_REQUEST, payload: {} });
      try {
          const id = Cookies.get("userId");
          const apiKey = Cookies.get("userToken");
          const response = await axios({
              method: "get",
              url: `${BASE_API_URL}/user/ads`,
              params: { id },
              headers: { "Content-Type": "application/json"}
          });
          // const response = await axios.get(`${BASE_API_URL}/user/ads`, { params: { id: id } })



          if (response.data) {
              dispatch({ type: GET_USER_ADD_SUCCESS, payload: { response } });
          }
      } catch (error) {
          dispatch({ type: GET_USER_ADD_FAILED, payload: error.message });
      }
  };
  
  export { getUserAdsAction };