import { combineReducers } from 'redux';
import userReducer from './userReducer.js';


// import counterReducer from './Counter/counter.reducer';


const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;