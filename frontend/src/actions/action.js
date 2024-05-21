import { FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from './types.js';
import axios from 'axios';


// start doing fetch data
export const fetchAllUsers = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUserRequest());
        try {
            const res = await axios.get('http://localhost:8080/users/all')
            const data = res && res.data ? res.data : [];
            dispatch(fetchUserSuccess(data));
        } catch (error) {
            console.log(error)
            dispatch(fetchUserError())
        }

    }
}
export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (data) => {
    return {
        type: FETCH_USER_SUCCESS,
        dataUsers: data,
    }
}

export const fetchUserError = () => {
    return {
        type: FETCH_USER_ERROR,

    }
}
