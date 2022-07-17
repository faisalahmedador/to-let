import {
    GET_AD_DETAILS_REQUEST,
    GET_AD_DETAILS_SUCCESS,
    GET_AD_DETAILS_FAILED,
} from "../Constants";
import axios from 'axios'
import { BASE_API_URL } from "../../Components/configs";
import {getUserId, getUserToken} from "../../helpers/localStorer";

const getAdDetailsAction = (adId) => async (dispatch) => {
    dispatch({ type: GET_AD_DETAILS_REQUEST, payload: {adId} });
    try {
        const response = await axios({
            method: "get",
            url: `${BASE_API_URL}/api/postDetails/${adId}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getUserToken()}`
            }
        });
        // const response = await axios.get(`${BASE_API_URL}/user/ads`, { params: { id: id } })



        if (response.data) {
            dispatch({ type: GET_AD_DETAILS_SUCCESS, payload: { response } });
        }
    } catch (error) {
        dispatch({ type: GET_AD_DETAILS_FAILED, payload: error.message });
    }
};

export { getAdDetailsAction };