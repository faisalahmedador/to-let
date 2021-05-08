import {
  SUBMIT_NEW_ADD_REQUEST,
  SUBMIT_NEW_ADD_SUCCESS,
  SUBMIT_NEW_ADD_FAILED,
} from "../Constants";
import axios from 'axios'
import { BASE_API_URL } from "../../Components/configs";

const adSubmitAction = (data) => async (dispatch) => {
  dispatch({ type: SUBMIT_NEW_ADD_REQUEST, payload: { data } });
  try {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiYTA0YWQ0N2M0NTJkNzUwM2U5ZWUyZWQzNTJkYzBmNTkxZGViNGEzNGI4OTZhZjFhMTBmOGZlZjgyODczYjdkZmM4OWE2NDhkM2IyOTIwMzUiLCJpYXQiOjE2MjAwNDE1ODMuMTg4ODI2LCJuYmYiOjE2MjAwNDE1ODMuMTg4ODM2LCJleHAiOjE2NTE1Nzc1ODMuMTMzMTg0LCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.Kti_QIKb7Rf5YngtBXj5Q4XVO6uSdkNfne3lLMiVuTCE7bj571PqWZvUn5usmZMlMsunnsKPzbZpYPKRBQYmCy0x3l7p-zyh_1FKHZEJ7AJx-7EU1scUNwLLkJ-b_HQsk9iFQcaFEvXOhoHQitt5yNsQvfaRDkyeEVr9qr6I-nwxCe0Eyi5sXL_UqN_M4_Y-bHH9je6l5Zb0RHHXTCWPvvIkzSMIwjMNZvubKX4CYr4Y7RfpPzWwe2g9MfEwqTFQbWMKyVkTk1FwBWcvjGEj8fNuLJNj8i0Z0lMY322a9YpEIG_x6C4Zip8aIKrBZ_Bd8iXhGoW7vX_ktzpTGZIbWKE3cH5ZzCcpj-BrMz2aKBKijuGPCLbXL4xoib6jyLvjxBk4lYxTIdx3nkkgbReoWl_27cobxL6qD8_JmNRoCNzQj5tr_iu8AGbtYwARMFw3qyOLbMsQdnLgQAzw4ldjXa3B3L6HZmJq8QqojPUKHkDZ7892z6K0RADe0_7TUBI8tuldatiInSdOssF1ljMQWKIl3H_VJ4Zqm7CmBanZHwDRepdqldmQD6JZ6cY261jWEDvTxCSPHD-s5dfHqPUbgP0z31UUOKPUJOkVlvkKedwImFMiZ_E8g6LTmt5n_KTP2lslSOWTpCWVIV7VxlTu08GswKF60bZi4vcG4T1IzsU";
    const response = await axios({
      method: "post",
      url: `${BASE_API_URL}/residence`,
      // url: 'http://baniqa.com/baniqa/public/api/addnewproduct',
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
