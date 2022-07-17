import {
    UPDATE_AD_REQUEST,
    UPDATE_AD_SUCCESS,
    UPDATE_AD_FAILED,
} from "../Constants";
import axios from 'axios'
import {BASE_API_URL} from "../../Components/configs";
import {getUserToken} from "../../helpers/localStorer";

const adUpdateAction = (data) => async (dispatch) => {
    dispatch({type: UPDATE_AD_REQUEST, payload: {data}});
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
            url: `${BASE_API_URL}/api/postUpdate/${data.id}`,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${getUserToken()}`
            },
        });

        if (response.data) {
            dispatch({type: UPDATE_AD_SUCCESS, payload: {response}});
        }
    } catch (error) {
        dispatch({type: UPDATE_AD_FAILED, payload: error.message});
    }
};

export {adUpdateAction};
