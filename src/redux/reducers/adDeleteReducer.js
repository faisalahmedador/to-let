import {
    DELETE_AD_REQUEST,
    DELETE_AD_SUCCESS,
    DELETE_AD_FAILED,
} from "../Constants";

function adDeleteReducer(state = {}, action) {
    switch (action.type) {
        case DELETE_AD_REQUEST:
            return { loading: true };
        case DELETE_AD_SUCCESS:
            // SINGLEInfo(action.payload);
            return { loading: false, deleted: action.payload };

        case DELETE_AD_FAILED:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export {adDeleteReducer}