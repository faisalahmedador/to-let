import {
    UPDATE_AD_REQUEST,
    UPDATE_AD_SUCCESS,
    UPDATE_AD_FAILED,
} from "../Constants";

function adUpdateReducer(state = {}, action) {
    switch (action.type) {
        case UPDATE_AD_REQUEST:
            return { loading: true };
        case UPDATE_AD_SUCCESS:
            // SINGLEInfo(action.payload);
            return { loading: false, updated_post: action.payload };

        case UPDATE_AD_FAILED:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export {adUpdateReducer}
