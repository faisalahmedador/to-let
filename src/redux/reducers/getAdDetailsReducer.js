import {
    GET_AD_DETAILS_REQUEST,
    GET_AD_DETAILS_SUCCESS,
    GET_AD_DETAILS_FAILED,
} from "../Constants";

function getAdDetailsReducers(state = {}, action) {
    switch (action.type) {
        case GET_AD_DETAILS_REQUEST:
            return { loading: true };
        case GET_AD_DETAILS_SUCCESS:
            // SINGLEInfo(action.payload);
            return { loading: false, ad_details: action.payload };

        case GET_AD_DETAILS_FAILED:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export {getAdDetailsReducers}
