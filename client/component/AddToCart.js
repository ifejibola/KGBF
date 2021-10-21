import React, { useState } from 'react';
import { useCart } from '../Hooks/Cart-Helper';
import { Redirect } from 'react-router-dom';
const initialItems = [{
    name: '',
    price: '',
    totalItems: '',
    totalCost: '',
    quantity: '',
    tax: '',
    img: ''
}];
function AddToCart(props) {

    const [redirect, setRedirect] = useState(false)

    const [items,
        totalItems,
        totalCost,
        tax,
        addOne,
        getCart,
        updateCart,
        removeItem,
        deleteCartItem,
        setCheckOut,] = useCart(initialItems);

    const addToCart = (e) => {
        // e.preventDefault();

        // addItems({ name: props.cart.product_name, price: props.cart.product_price })
        addOne({ id: props.cart.id, name: props.cart.product_name, price: props.cart.product_price, img: props.cart.img_path, quantity: 0 }, () => {
            setRedirect({ redirect: true })
        });
    }

    const { cart } = props;

    // console.log('cart leng', Object.keys(cart).length);

    // console.log('access hook: ', items);
    // console.log('access hook: ', totalItems);
    // console.log(typeof items);
    if (redirect) {
        return <Redirect to={'/shop'} />
    }

    return (

        <>
            {

                // cart.quantity === undefined ?
                Object.keys(cart).length >= 0 ?
                    <div className="offcanvas-wrap">

                        <div className="col">
                            <div className="d-grid">
                                <button className="btn btn-primary btn-lg rounded-pill" onClick={addToCart}>Add to cart!</button>
                            </div>
                        </div>
                    </div>

                    :
                    <div className="offcanvas-wrap">

                        <div className="col">
                            <div className="d-grid">
                                <button disabled className="btn btn-primary btn-lg rounded-pill" onClick={addToCart}>Add to cart</button>
                            </div>
                        </div>
                    </div>
            }
            {/* <div className="col-auto">
                <a href="" className="btn btn-outline-secondary btn-lg btn-icon rounded-circle"><i
                    className="bi bi-heart-fill"></i></a>
            </div> */}


        </>
    );
};

export default AddToCart;