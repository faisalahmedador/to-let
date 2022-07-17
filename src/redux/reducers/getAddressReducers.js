import {
    GET_DIVISIONS_REQUEST,
    GET_DIVISIONS_SUCCESS,
    GET_DIVISIONS_FAILED,
    GET_DISTRICTS_REQUEST,
    GET_DISTRICTS_SUCCESS,
    GET_DISTRICTS_FAILED,
    GET_POSTCODES_REQUEST,
    GET_POSTCODES_SUCCESS,
    GET_POSTCODES_FAILED,
    GET_THANAS_REQUEST,
    GET_THANAS_SUCCESS,
    GET_THANAS_FAILED,
} from "../Constants";

function getDivisionReducer(state = {}, action) {
    switch (action.type) {
        case GET_DIVISIONS_REQUEST:
            return { loading_divisions: true };
        case GET_DIVISIONS_SUCCESS:
            // SINGLEInfo(action.payload);
            return { loading_divisions: false, divisions: action.payload };

        case GET_DIVISIONS_FAILED:
            return { loading_divisions: false, error_divisions: action.payload };

        default:
            return state;
    }
}

function getDistrictReducer(state = {}, action) {
    switch (action.type) {
        case GET_DISTRICTS_REQUEST:
            return { loading_districts: true };
        case GET_DISTRICTS_SUCCESS:
            // SINGLEInfo(action.payload);
            return { loading_districts: false, districts: action.payload };

        case GET_DISTRICTS_FAILED:
            return { loading_districts: false, error_districts: action.payload };

        default:
            return state;
    }
}

function getThanaReducer(state = {}, action) {
    switch (action.type) {
        case GET_THANAS_REQUEST:
            return { loading_thanas: true };
        case GET_THANAS_SUCCESS:
            // SINGLEInfo(action.payload);
            return { loading_thanas: false, thanas: action.payload };

        case GET_THANAS_FAILED:
            return { loading_thanas: false, error_thanas: action.payload };

        default:
            return state;
    }
}

function getPostOfficeReducer(state = {}, action) {
    switch (action.type) {
        case GET_POSTCODES_REQUEST:
            return { loading_post_offices: true };
        case GET_POSTCODES_SUCCESS:
            // SINGLEInfo(action.payload);
            return { loading_post_offices: false, postOffices: action.payload };

        case GET_POSTCODES_FAILED:
            return { loading_post_offices: false, error_post_offices: action.payload };

        default:
            return state;
    }
}
export {getDivisionReducer, getThanaReducer, getPostOfficeReducer, getDistrictReducer}