import axios from 'axios';

const ADD_RATE = "ADD_RATE";
const REMOVE_RATE = "REMOVE_RATE";
const CHANGE_RATE_VALUE = "CHANGE_RATE_VALUE";
const SET_RATE_DATA = "SET_USER_DATA";
const ASYNC_SEND_RATES = "ASYNC_SEND_RATES";
const GET_RATES = "GET_RATES";

export const addRate = (row) => {
    return {type: ADD_RATE, payloads: row}
};

export const removeRate = (code) => {
    return {type: REMOVE_RATE, payloads: code}
};

export const changeRateValue = (row) => {
    return {type: CHANGE_RATE_VALUE, payloads: row}
};

export const setRateData = (data) => {
    return {type: SET_RATE_DATA, payloads: data}
};

export const getRates = () => {
    const request = axios.get("/admin/exchangeUserData");

    return dispatch => {
        request.then((response) => {
            dispatch({type: GET_RATES, payloads: response.data});
        })
    }
};


