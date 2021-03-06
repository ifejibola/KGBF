import React, { useState, useEffect } from 'react'
import { Cart } from 'react-bootstrap-icons';
import { useCart } from '../Hooks/Cart-Helper';
import { Link, useLocation, useHistory } from 'react-router-dom';

import uuid from 'uuid';
const initialItems = [{
    name: '',
    price: '',
    totalItems: '',
    totalCost: '',
    quantity: '',
    tax: '',
    img: ''
}];
function Menu() {

    const location = useLocation();
    const history = useHistory();
    const [items,
        totalItems,
        totalItemCost,
        tax,
        addOne,
        getCart,
        updateCart,
        removeItem,
        totalCartItems,
        calcTotalCost,
        // calcTotalItems,
        deleteCartItem,
        setCheckOut,
        empty
    ] = useCart(initialItems);

    const [cartItems, setCartItems] = useState(getCart());
    const [totalCartItem, setTotalItems] = useState(totalCartItems());


    const handleChange = index => e => {
        let updatedCart = cartItems;

        if (e.target.value == 0) {
            updatedCart[index].quantity = 1
        } else {
            updatedCart[index].quantity = e.target.value
        }
        setCartItems([...updatedCart]);
        updateCart(index, e.target.value);
    }

    const deleteItem = index => e => {
        e.preventDefault();
        let updatedCart = deleteCartItem(index)
        if (updateCart.length == 0) {
            setCheckOut(false);
        };
        setCartItems(updatedCart)
    };
    const linkTarget = {
        pathname: "/all",
        key: uuid(), // we could use Math.random, but that's not guaranteed unique.
        state: {
            applied: true
        }
    };

    return (
        <>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasCart" aria-labelledby="offcanvasCart">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasCartLabel">Shopping Cart</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {
                        getCart().map((data, i) => {
                            console.log('nav data', data)
                            return (
                                <ul className="list-unstyled" key={i}>
                                    <li>
                                        <div className="row g-2 g-lg-3 align-items-center">
                                            <Link to={`/product/${data.id}`} className="col-3"><img className="img-fluid" src={data.img}
                                                alt="Product" /></Link>
                                            <div className="col">
                                                <Link to={`/product/${data.id}`} className="text-black text-primary-hover lead">{data.name}</Link>
                                                <ul className="list-inline text-muted">
                                                    <li className="list-inline-item">Price: <span className="text-secondary">${data.price}</span></li>
                                                    <li className="list-inline-item">Qty:
                                                        <div className="counter text-secondary" data-counter="qty-1">
                                                            <span className="counter-minus bi bi-dash"></span>
                                                            <input type="number" name="quantity" className="counter-value" min="0" max="10" onChange={handleChange(i)} value={data.quantity} />
                                                            <span className="counter-plus bi bi-plus"></span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <Link to="#" className="text-red underline" onClick={deleteItem(i)}>Remove</Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            )

                        })
                    }
                </div>
                <div className="offcanvas-footer">
                    <div className="d-grid gap-1">
                        {/* <Link to="#" className="btn btn-outline-light rounded-pill">View Cart</Link> */}
                        <Link to="/checkout" className="btn btn-primary rounded-pill">Proceed to Checkout</Link>
                    </div>
                </div>
            </div>


            <nav id="mainNav" className="navbar navbar-expand-lg navbar-sticky navbar-dark" active="shop-product" shop='true'>
                <div className="container">
                    <Link to="/" className="navbar-brand">KINGDOM BOXING</Link>
                    {/* <Link to="" href="./index.html" className="navbar-brand"><img src="/pub/images/logo/logo-light.svg" alt="Logo" /></Link> */}

                    {/* <!-- secondary --> */}
                    <ul className="navbar-nav navbar-nav-secondary order-lg-3">
                        {/* Cart */}
                        <li className="nav-item">
                            <div className="nav-link nav-icon" data-bs-toggle="offcanvas" href="#offcanvasCart" role="button" aria-controls="offcanvasCart">
                                <div className="bi bi-cart2"></div>
                            </div>
                        </li>
                        <li className="nav-item d-lg-none">
                            <Link to="#" className="nav-link nav-icon" role="button" data-bs-toggle="collapse" data-bs-target="#navbar"
                                aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="bi bi-list"></span>
                            </Link>
                        </li>
                        {/* Cart
                        <li className="nav-item">
                            <div className="nav-link nav-icon" data-bs-toggle="offcanvas" href="#offcanvasCart" role="button" aria-controls="offcanvasCart">
                                <i className="bi bi-cart2"></i>
                            </div>
                        </li> */}
                        <li className="nav-item d-none d-lg-block">

                            <Link to="/shop" className="btn btn-outline-white rounded-pill ms-2">
                                SHOP
                            </Link>
                        </li>
                    </ul>

                    {/* <!-- primary --> */}
                    <div className="collapse navbar-collapse" id="navbar" data-bs-parent="#mainNav">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {/* <Link to="/" className="nav-link dropdown-toggle" href="#" id="navbarDropdown-1" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false"> */}
                                <Link to="/" className="nav-link" role="button"
                                    aria-expanded="false">
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                {/* <Link to="/all" className="nav-link" role="button" */}
                                {/* <Link to={linkTarget} className="nav-link" role="button" */}
                                <Link to={`/price`} key={uuid()} className="nav-link" role="button"
                                    aria-expanded="false">
                                    Services
                                </Link>
                            </li>

                            <li className="nav-item d-lg-none">
                                <Link to="/shop"
                                    className="nav-link text-primary">Shop</Link>
                            </li>
                        </ul>

                    </div>
                    {/* <!-- mobile user menu --> */}
                </div>
            </nav>


        </>
    )
};

export default Menu;