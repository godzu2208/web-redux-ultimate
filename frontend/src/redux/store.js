import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer.js";
// import counterReducer from "./reducers/counterReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeWithDevTools()
);

export default store;