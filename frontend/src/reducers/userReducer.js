// import { INCREMENT, DECREMENT } from '../actions/types.js';
import {
    FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_API_SUCCESS,
    CREATE_USER_ERROR, CREATE_USER_SUCCESS, CREATE_USER_REQUEST
} from '../actions/types.js';

const INITIAL_STATE = {
    listUsers: [],
    userListApi: [],
    isLoading: false,
    isError: false,
    isCreating: false,
};

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case FETCH_USER_REQUEST:
            // console.log("FETCH_USER_REQUEST :", action)
            return {
                ...state,
                isLoading: true,
                isError: false,

            };
        case FETCH_USER_API_SUCCESS:
            // console.log("FETCH_USER_API_SUCCESS : ", action)
            return {
                // isLoading: false,
                // isError: false,
                ...state,
                userListApi: action.dataUserApi,

            }
        case FETCH_USER_SUCCESS:
            return {

                ...state,

                listUsers: action.dataUsers,
                isLoading: false,
                isError: false,

            };

        case FETCH_USER_ERROR:
            console.log("FETCH_USER_ERROR :", action)
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        // Create a new user
        case CREATE_USER_REQUEST:
            return {
                ...state,
                isCreating: true
            }
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                isCreating: false
            }
        case CREATE_USER_ERROR:
            return {
                ...state,
                isCreating: false
            }
        default:
            return state;

    }

};

export default userReducer;