import { PAY_INTENT, NEW_PRODUCT } from "../actions/types";

let initialState = {
    products: '',
};
export default (state = initialState, action) => {

    switch (action.type) {

        case PAY_INTENT:
            console.log('pay intent: ', action.payload);
            // console.log('pay intent sc: ', action.payload.data.clientSecret);
            return {
                ...state,
                Intent: action.payload.data,
                sc: action.payload.data.clientSecret
            }
        case NEW_PRODUCT:
            // console.log('new_product: ', action.payload)
            return {
                ...state
            }
        default:
            return state
    };
};
