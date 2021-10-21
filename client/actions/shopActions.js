import axios from 'axios'
import { PAY_INTENT, NEW_PRODUCT, ALL_PRODUCTS, SINGLE_PRODUCT } from './types';

export const PayIntent = (item) => async (dispatch, getState, api) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify(item);

    console.log('item action: ', body)
    const res = await api.post('/intent', body, config);

    dispatch({
        type: PAY_INTENT,
        payload: res,
    });
};

export const newProduct = (product) => async (dispatch, getState, api) => {

    console.log('action: ', product)
    const res = await api.post('/new', product);


    dispatch({
        type: NEW_PRODUCT,
        payload: res,
    });
};

export const All_Products = () => async (dispatch, getState, api) => {

    const res = await api.get('/allproducts');

    dispatch({
        type: ALL_PRODUCTS,
        payload: res
    });
};

export const single_product = (param) => async (dispatch, getState, api) => {


    // console.log('getState', getState);
    await api.get(`/single/${param}`,
        //  {
        //     proxy: {
        //         host: `http://localhost:`,
        //         // host: 'http://blog-deployer.herokuapp.com'
        //         port: 35
        //     }
        // }
    )
        .then((res) => {
            console.log('Single Product action: ', res);
            dispatch({
                type: SINGLE_PRODUCT,
                payload: res
            });
        });
};