import {
    FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_API_SUCCESS,
    CREATE_USER_ERROR, CREATE_USER_REQUEST, CREATE_USER_SUCCESS
} from './types.js';
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

export const fetchUserRequestApi = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUserRequest())
        try {
            const resApi = await axios.get('https://reqres.in/api/users?page=1')
            const resApi2 = await axios.get('https://reqres.in/api/users?page=2')
            // const dataApi = resApi && resApi.data ? resApi.data : [];
            // Check if the responses have data and merge them
            const dataApi1 = resApi && resApi.data && resApi.data.data ? resApi.data.data : [];
            const dataApi2 = resApi2 && resApi2.data && resApi2.data.data ? resApi2.data.data : [];
            const dataApi = [...dataApi1, ...dataApi2];
            console.log("dataApi : ", dataApi);
            dispatch(fetchUserApiSuccess(dataApi));
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
export const fetchUserApiSuccess = (data) => {
    return {
        type: FETCH_USER_API_SUCCESS,
        dataUserApi: data,
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

// Start create new user
export const createNewUserRedux = (email, password, username) => {
    return async (dispatch, getState) => {
        dispatch(createUserRequest());
        try {
            const res = await axios.post('http://localhost:8080/users/create', { email, password, username })
            if (res && res.data.errCode === 0) {
                dispatch(createUserSuccess());
                dispatch(fetchAllUsers());
            }
            // dispatch(fetchAllUsers());
        } catch (error) {
            dispatch(createUserError(error));
        }
    }
}
// -------------
export const createUserRequest = () => {
    return {
        type: CREATE_USER_REQUEST
    }
}

export const createUserSuccess = (data) => {
    return {
        type: CREATE_USER_SUCCESS,
        dataUsers: data,
    }
}

export const createUserError = () => {
    return {
        type: CREATE_USER_ERROR,

    }
}