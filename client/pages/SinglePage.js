import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Product from '../component/SIngleProduct'
import ProductPage from '../component/ProductPage';
import { single_product } from '../actions/shopActions';
import { Link, useHistory, useLocation } from 'react-router-dom';

function Single(props) {


    const { product, image_two, image_three } = props;

    // console.log('props prod//;', product)
    // console.log('props prod//;', props.match.params.id)

    const location = useLocation();
    const history = useHistory();


    useEffect(() => {

        // history.go(location.pathname);

        props.single_product(props.match.params.id)

    }, [props.match.params.id]);

    return (
        // <>
        //     <div className="offcanvas-wrap">

        //         <section className="py-20">
        //             <div className="container mt-10">
        //                 <div className="row g-5 justify-content-center justify-content-lg-between">
        // {/* <div class="offcanvas-wrap"> */}

        // {/* <Product product={product} images={{ two: props.image_two, three: props.image_three }} /> */}
        <ProductPage product={product} images={{ two: props.image_two, three: props.image_three }} />
        // {/* </div> */}
        // {/* </div>
        //         </div>

        //     </section>
        // </div>


        // </> */}
    );
};

// function loadData(store) {
//     return store.dispatch(single_product());
// };

function mapStateToProps(state) {
    return {
        product: state.common.single_product,
        image_two: state.common.image_two,
        image_three: state.common.image_three
    };
};

export default {
    //  loadData: loadData,
    component: connect(mapStateToProps, { single_product })(Single)
};