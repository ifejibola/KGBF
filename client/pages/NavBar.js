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
    console.log(history.location.pathname)
    console.log(history.location.state)
    console.log('locationnn: ', location)

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
    // const [cartTotal, setCartTotal] = useState(calcTotalItems());

    useEffect(() => {
        // const preTax = calcPreTaxCost()
        // const tax$ = calculateTax(preTax).subscribe(

        // )
        // console.log('check', calcTotalCost())

        // console.log('tax!', tax)
        // console.log('cartItems state changed!')
        // console.log('object:  ', calcTotalItems())



    }, [cartItems]);
    // console.log('check3', totalItemCost)
    // console.log('check', calcTotalCost())


    useEffect(() => {
        // const preTax = calcPreTaxCost()
        // const tax$ = calculateTax(preTax).subscribe(

        // )
        // console.log('totalCartItem state changed!')
        // console.log('toalItems: ', totalCartItem);
        // console.log('object:  ', calcTotalItems())

    }, [totalCartItem]);

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
    // console.log('cartitems: ', cartItems);
    // console.log('object', calcTotalItems())
    return (
        <>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasCart" aria-labelledby="offcanvasCart">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasCartLabel">Shopping Cart</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="list-unstyled">
                        {
                            getCart().map((data, i) => {
                                // cartItems.map((data, i) => {
                                console.log('nav data', data)
                                return (
                                    <li key={i}>
                                        <div className="row g-2 g-lg-3 align-items-center">
                                            <Link to={`/product/${data.id}`} className="col-3"><img className="img-fluid" src={data.img}
                                                alt="Product" /></Link>
                                            <div className="col">
                                                <Link to={`/product/${data.id}`} className="text-black text-primary-hover lead">{data.name}</Link>
                                                <ul className="list-inline text-muted">
                                                    <li className="list-inline-item">Price: <span className="text-secondary">${data.price}</span></li>
                                                    {/* <li className="list-inline-item">Color: <span className="text-secondary">Blue</span></li> */}
                                                    <li className="list-inline-item">Qty:
                                                        <div className="counter text-secondary" data-counter="qty-1">
                                                            {/* <span className="counter-minus bi bi-dash"></span> */}
                                                            {/* <input type="number" name="quantity" className="counter-value" min={data.quantity} max="10" onChange={handleChange(i)} /> */}
                                                            <input type="number" name="quantity" className="counter-value" min="0" max="10" onChange={handleChange(i)} value={data.quantity} />
                                                            {/* <span className="counter-plus bi bi-plus"></span> */}
                                                        </div>
                                                    </li>
                                                </ul>
                                                <Link to="#" className="text-red underline" onClick={deleteItem(i)}>Remove</Link>
                                            </div>
                                        </div>
                                    </li>
                                )

                            })
                        }
                        {/* <li className="mt-4">
                            <div className="row g-2 g-lg-3 align-items-center">
                                <a href="" className="col-3"><img className="img-fluid" src="/images/products/product-2.jpg"
                                    alt="Product" /></a>
                                <div className="col">
                                    <a href="" className="text-black text-primary-hover lead">Bluetooth Speaker</a>
                                    <ul className="list-inline text-muted">
                                        <li className="list-inline-item">Price: <span className="text-secondary">$90</span></li>
                                        <li className="list-inline-item">Color: <span className="text-secondary">Blue</span></li>
                                        <li className="list-inline-item">Qty:
                                            <div className="counter text-secondary" data-counter="qty-1">
                                                <span className="counter-minus bi bi-dash"></span>
                                                <input type="number" name="qty-1" className="counter-value" min="0" max="10" />
                                                <span className="counter-plus bi bi-plus"></span>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="" className="text-red underline">Remove</a>
                                </div>
                            </div>
                        </li>
                        <li className="mt-4">
                            <div className="row g-2 g-lg-3 align-items-center">
                                <a href="" className="col-3"><img className="img-fluid" src="/images/products/product-3.jpg"
                                    alt="Product" /></a>
                                <div className="col">
                                    <a href="" className="text-black text-primary-hover lead">Bluetooth Speaker</a>
                                    <ul className="list-inline text-muted">
                                        <li className="list-inline-item">Price: <span className="text-secondary">$90</span></li>
                                        <li className="list-inline-item">Color: <span className="text-secondary">Blue</span></li>
                                        <li className="list-inline-item">Qty:
                                            <div className="counter text-secondary" data-counter="qty-1">
                                                <span className="counter-minus bi bi-dash"></span>
                                                <input type="number" name="qty-1" className="counter-value" min="0" max="10" />
                                                <span className="counter-plus bi bi-plus"></span>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="" className="text-red underline">Remove</a>
                                </div>
                            </div>
                        </li> */}
                    </ul>
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
                        <li className="nav-item d-lg-none">
                            <Link to="#" className="nav-link nav-icon" role="button" data-bs-toggle="collapse" data-bs-target="#navbar"
                                aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="bi bi-list"></span>
                            </Link>
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <span className="btn btn-outline-white rounded-pill ms-2">
                                <div className="nav-icon" data-bs-toggle="offcanvas" href="#offcanvasCart" role="button"
                                    aria-controls="offcanvasCart">
                                    {/* <div className="bi bi-cart2"> {totalCartItem}</div> */}
                                    <div className="bi bi-cart2"></div>
                                </div>

                            </span>
                            {/* <Link to="#" className="btn btn-outline-white rounded-pill ms-2">
                                <div className="nav-link nav-icon" data-bs-toggle="offcanvas" href="#offcanvasCart" role="button"
                                    aria-controls="offcanvasCart">
                                    <div className="bi bi-cart2"> {totalCartItem}</div>
                                </div>

                            </Link> */}
                            {
                                // cartItems.length === 0 ?
                                //     ""
                                //     :
                                //     (
                                //         <span className="btn btn-outline-white rounded-pill ms-2">
                                //             <div className="nav-icon" data-bs-toggle="offcanvas" href="#offcanvasCart" role="button"
                                //                 aria-controls="offcanvasCart">
                                //                 <div className="bi bi-cart2"> {totalCartItem}</div>
                                //                 <div className="bi bi-cart2"></div>
                                //             </div>

                                //         </span>
                                //     )
                            }
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
                                <Link to={`/all`} key={uuid()} className="nav-link" role="button"
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