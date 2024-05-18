import { INCREMENT, DECREMENT } from './types.js';


export const increaseCounter = () => {
    return {
        type: INCREMENT,
        payload: { request: 'Buy Milk', address: 'in Vinmart' }
    };
};

export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    };
};