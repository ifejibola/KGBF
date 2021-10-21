import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux';
import FormData from 'form-data'

import { newProduct } from '../actions/shopActions'

let state = {
    product_name: '',
    product_price: '',
    photo: ''
};

function NewProduct(props) {
    return (
        <>
            <div className="offcanvas-wrap">
                <section className="py-15 py-xl-20">
                    <div className="container mt-5">
                        <div className="row justify-content-between">
                            <div className="col-xl-7 mb-5 mb-xl-0">
                                <section className="mt-4">
                                    <h2 className="fw-bold">New Product</h2>
                                    <form className="row g-2">
                                        <div className="col-12">
                                            <label htmlFor="inputCountry" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="inputCountry" placeholder="Featured Hoodie" name="product_name" value={props.product_name} onChange={props.onChange} />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="price" className="form-label">Price</label>
                                            <input type="number" className="form-control" id="inputAddress" placeholder="Address" min="1" step="any" name="product_price" value={props.product_price} onChange={props.onChange} />
                                        </div>
                                        <div className="col-xl-8">
                                            {/* <input className="checkbox-btn" type="file" name="photo" id="checkbox&lt;10000" accept='image/*' multiple />
                                            <label htmlFor="checkbox&lt;10000"><span>&lt;Upload</span></label> */}

                                            <br />
                                            <label htmlFor="inputCity" className="form-label">Upload Images</label>
                                            <input type="file" className="form-control" id="inputCity" name="photo" onChange={props.onChange} value={props.photo} accept='image/*' multiple />
                                        </div>
                                        <div className="d-grid text-center">
                                            {/* <a href="" class="btn btn-lg btn-primary rounded-pill">Add Product</a> */}
                                            <button className="btn btn-lg btn-primary rounded-pill" name="button" onClick={props.onclick}>Add Product</button>
                                            <span className="d-flex justify-content-center align-items-center text-muted mt-2"><i
                                                className="bi bi-shield-lock fs-6 me-1"></i>
                                                Secure Transaction</span>
                                        </div>

                                    </form>

                                </section>
                            </div>
                        </div>
                    </div>

                </section>
            </div>

        </>
    );
};

function NewProductPage(props) {

    let [product, setProduct] = useState(state);


    function handleSubmit(e) {

        console.log(e);

        let setValues = e.target.type === 'file' ? e.target.files : e.target.value;
        let name = e.target.name;

        setProduct({
            ...product,
            [name]: setValues
        })
    };

    function buttenHandle(e) {
        e.preventDefault();


        let formData = new FormData();

        formData.append('product_name', product.product_name);
        formData.append('product_price', product.product_price);
        for (const key of Object.keys(product.photo)) {
            formData.append('photo', product.photo[key])
        };

        props.newProduct(formData);
    };

    return (
        <NewProduct onChange={handleSubmit} onclick={buttenHandle} />
    )

}

export default { component: connect(null, { newProduct })(NewProductPage) };