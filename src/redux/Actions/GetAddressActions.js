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
import axios from 'axios'
import { BASE_API_URL } from "../../Components/configs";
import {getUserToken} from "../../helpers/localStorer";

const getDivisions = () => async (dispatch) => {
    dispatch({ type: GET_DIVISIONS_REQUEST, payload: {} });
    try {
        const response = await axios({
            method: "get",
            url: `${BASE_API_URL}/api/division`,
            headers: { "Content-Type": "application/json",
                        Authorization: `Bearer ${getUserToken()}`
            }
        });
        if (response.data) {
            dispatch({ type: GET_DIVISIONS_SUCCESS, payload: { response } });
        }
    } catch (error) {
        dispatch({ type: GET_DIVISIONS_FAILED, payload: error.message });
    }
};

const getDistricts = (division) => async (dispatch) => {
    dispatch({ type: GET_DISTRICTS_REQUEST, payload: {} });
    try {
        const response = await axios({
            method: "get",
            url: `${BASE_API_URL}/api/${division}/district`,
            headers: { "Content-Type": "application/json",
                Authorization: `Bearer ${getUserToken()}`
            }
        });
        // const response = await axios.get(`${BASE_API_URL}/user/ads`, { params: { id: id } })



        if (response.data) {
            dispatch({ type: GET_DISTRICTS_SUCCESS, payload: { response } });
        }
    } catch (error) {
        dispatch({ type: GET_DISTRICTS_FAILED, payload: error.message });
    }
};

const getThanas = (district) => async (dispatch) => {
    dispatch({ type: GET_THANAS_REQUEST, payload: {} });
    try {
        const response = await axios({
            method: "get",
            url: `${BASE_API_URL}/api/${district}/thana`,
            headers: { "Content-Type": "application/json",
                Authorization: `Bearer ${getUserToken()}`
            }
        });
        // const response = await axios.get(`${BASE_API_URL}/user/ads`, { params: { id: id } })



        if (response.data) {
            dispatch({ type: GET_THANAS_SUCCESS, payload: { response } });
        }
    } catch (error) {
        dispatch({ type: GET_THANAS_FAILED, payload: error.message });
    }
};

const getPostOffices = (thana) => async (dispatch) => {
    dispatch({ type: GET_POSTCODES_REQUEST, payload: {} });
    try {
        const response = await axios({
            method: "get",
            url: `${BASE_API_URL}/api/${thana}/subOffice`,
            headers: { "Content-Type": "application/json",
                Authorization: `Bearer ${getUserToken()}`
            }
        });
        // const response = await axios.get(`${BASE_API_URL}/user/ads`, { params: { id: id } })



        if (response.data) {
            dispatch({ type: GET_POSTCODES_SUCCESS, payload: { response } });
        }
    } catch (error) {
        dispatch({ type: GET_POSTCODES_FAILED, payload: error.message });
    }
};

export { getDivisions, getDistricts, getThanas, getPostOffices };