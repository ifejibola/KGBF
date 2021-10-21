import { ALL_PRODUCTS, SINGLE_PRODUCT } from '../actions/types';
const initialState = {
    appName: 'KingdomBoxing',
    products: [],
    single_product: []
}
export default (state = initialState, action) => {

    switch (action.type) {
        case ALL_PRODUCTS:
            // console.log('all products reducer: ', action.payload);
            return {
                ...state,
                products: action.payload.data
            };
        case SINGLE_PRODUCT:
            // console.log('reducer: ', action.payload.data[0])
            // console.log('reducer: ', action.payload.data[1].image_path)
            // console.log('reducer: ', action.payload.data[2].image_path)
            return {
                ...state,
                // single_product: action.payload.data
                single_product: action.payload.data[0],
                image_two: action.payload.data[1].image_path,
                image_three: action.payload.data[2].image_path
            }
        default:
            return state;
    }
};