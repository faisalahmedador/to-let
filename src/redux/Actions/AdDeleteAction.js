import {
    DELETE_AD_REQUEST,
    DELETE_AD_SUCCESS,
    DELETE_AD_FAILED,
} from "../Constants";
import axios from 'axios'
import {BASE_API_URL} from "../../Components/configs";
import {getUserToken} from "../../helpers/localStorer";

const adDeleteAction = (adId) => async (dispatch) => {
    dispatch({type: DELETE_AD_REQUEST, payload: {adId}});
    try {
        const response = await axios({
            method: "delete",
            url: `${BASE_API_URL}/api/post/${adId}`,
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${getUserToken()}`
            },
        });

        if (response.data) {
            dispatch({type: DELETE_AD_SUCCESS, payload: {response}});
        }
    } catch (error) {
        dispatch({type: DELETE_AD_FAILED, payload: error.message});
    }
};

export {adDeleteAction};