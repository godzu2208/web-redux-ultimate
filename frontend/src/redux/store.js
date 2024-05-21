import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer.js";
import thunkMiddleware from 'redux-thunk'
// import counterReducer from "./reducers/counterReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default store;