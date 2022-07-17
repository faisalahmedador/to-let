import {
    GET_USER_AD_REQUEST,
    GET_USER_AD_SUCCESS,
    GET_USER_AD_FAILED,
  } from "../Constants";
  import axios from 'axios'
  import { BASE_API_URL } from "../../Components/configs";
import {getUserId, getUserToken} from "../../helpers/localStorer";
  
  const getUserAdsAction = () => async (dispatch) => {
    dispatch({ type: GET_USER_AD_REQUEST, payload: {} });
      try {
          const response = await axios({
              method: "get",
              url: `${BASE_API_URL}/api/post/${getUserId()}`,
              headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${getUserToken()}`
              }
          });
          // const response = await axios.get(`${BASE_API_URL}/user/ads`, { params: { id: id } })



          if (response.data) {
              dispatch({ type: GET_USER_AD_SUCCESS, payload: { response } });
          }
      } catch (error) {
          dispatch({ type: GET_USER_AD_FAILED, payload: error.message });
      }
  };
  
  export { getUserAdsAction };