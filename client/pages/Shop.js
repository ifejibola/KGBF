import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { All_Products } from '../actions/shopActions';

//Shop Component
import Shop from "../component/Shop";

function ShopPage(props) {

    useEffect(() => {
        props.All_Products();
    }, []);

    let { products } = props;
    console.log('jkfldj', products)
    return (
        <>
            <Shop products={products} />
        </>
    );
};


function loadData(store) {
    return store.dispatch(All_Products());
};

function mapStateToProps(state) {
    return {
        products: state.common.products
    };
};

export default { loadData: loadData, component: connect(mapStateToProps, { All_Products })(ShopPage) };