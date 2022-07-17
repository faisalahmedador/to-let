import {
    SUBMIT_NEW_AD_REQUEST,
    SUBMIT_NEW_AD_SUCCESS,
    SUBMIT_NEW_AD_FAILED,
} from "../Constants";
import axios from 'axios'
import {BASE_API_URL} from "../../Components/configs";
import {getUserId, getUserToken} from "../../helpers/localStorer";

const adSubmitAction = (data) => async (dispatch) => {
    dispatch({type: SUBMIT_NEW_AD_REQUEST, payload: {data}});
    try {
        let formData = new FormData();
        for (let entries in data) {
            if (entries === "images") {
                let images = data[entries];
                for (let image in images) {
                    formData.append(`image_${image}`, images[image]);
                }
            } else {
                formData.append(entries, data[entries])
            }
        }
        console.log(formData.entries());

        const response = await axios({
            method: "post",
            url: `${BASE_API_URL}/api/postAdd/${getUserId()}`,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${getUserToken()}`
            },
        });

        if (response.data) {
            dispatch({type: SUBMIT_NEW_AD_SUCCESS, payload: {response}});
        }
    } catch (error) {
        dispatch({type: SUBMIT_NEW_AD_FAILED, payload: error.message});
    }
};

export {adSubmitAction};
