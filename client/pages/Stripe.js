import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import Cart from '../component/Cart';
import Checkout from '../component/CheckOut';
import PlaceOrder from './placeOrder';
import { PayIntent } from '../actions/shopActions'

import { useCart } from '../Hooks/Cart-Helper'
import { Redirect } from 'react-router';
let initialItems = [{
    name: '',
    price: '',
    totalItems: '',
    totalCost: '',
    quantity: '',
    tax: '',
    img: ''
}];

// let order = {
//     customer_name: '',
//     customer_email: '',
//     country: '',
//     address: '',
//     city: '',
//     zip: '',
//     state: '',
//     country: '',
//     phoneNumber: ''
// }
const cardStyle = {
    style: {
        base: {
            color: "#32325d",
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#32325d"
            }
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
        }
    }
};

function Stripe(props) {
    //Keep track of the payjment, show errors, and manage the userinterface.
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const [message, setMsg] = useState('');
    // const [orders, setOrder] = useState(order)
    const stripe = useStripe();
    const elements = useElements();

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


    // const [cartItems, setItems] = useState(getCart());
    const [cartItems, setItems] = useState({
        checkoutDetails: {
            products: getCart(),
            customer_name: '',
            customer_email: '',
            street: '', city: '', province: '', zipcode: '', country: '',
            // deliveryInfo: {
            //     street: '', city: '', state: '', zipcode: '', country: ''
            // },
            error: '',
            total: calcTotalCost(),
        }
    });

    useEffect(async () => {
        // Create PaymentIntent as soon as the page laods

        console.log('cartItems: ', cartItems)
        props.PayIntent(cartItems);
        console.log('secret: ', props.secret);
        console.log(calcTotalCost())

        // await stripe.retrievePaymentIntent(props.secret).then(({ paymentIntent }) => {
        //     console.log('paymentint stat: ', paymentIntent.status)
        //     switch (paymentIntent.status) {
        //         case "succeeded":
        //             setMsg('Payment Succeeded!');
        //             break;
        //         case "processing":
        //             setMsg('Your payment is processing');
        //             break;
        //         case "requires_payment_method":
        //             setMsg('You payment was not successful, please try again.');
        //             break;
        //         default:
        //             setMsg('Something went wrong.');
        //             break;
        //     }
        // });
    }, [stripe]);

    const handleCustomerChange = name => e => {
        let checkoutDetails = cartItems.checkoutDetails

        checkoutDetails[name] = e.target.value || undefined
        setItems({ ...cartItems, checkoutDetails: checkoutDetails })
    }
    const handleChange = async (e) => {

        let setValue = e.target.value;
        let name = e.target.name;
        let cartName = cartItems.checkoutDetails;
        cartName[e.target.name] = e.target.value || undefined;

        // console.log('cartnAME: ', name)

        // console.log('cart value: ', setValue)
        setItems({
            ...cartItems,
            checkoutDetails: cartName
        });

        let checkoutDetails = cartItems.checkoutDetails

        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };



    const handleSubmit = async ev => {
        ev.preventDefault();
        setProcessing(true);

        console.log('state: ', cartItems);
        const payload = await stripe.confirmCardPayment(props.secret, {
            payment_method: {
                card: elements.getElement(CardElement)
            },
            receipt_email: cartItems.checkoutDetails.customer_email
        });
        stripe.retrievePaymentIntent(props.secret).then(({ paymentIntent }) => {
            console.log('paymentint stat: ', paymentIntent.status)
            switch (paymentIntent.status) {
                case "succeeded":
                    setMsg('Payment Succeeded!');
                    break;
                case "processing":
                    setMsg('Your payment is processing');
                    break;
                case "requires_payment_method":
                    setMsg('You payment was not successful, please try again.');
                    break;
                default:
                    setMsg('Something went wrong.');
                    break;
            }
        });
        console.log('payload:: ', payload)
        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {

            props.PayIntent(cartItems);
            empty();
            setError(null);
            // <Redirect to="/" />
            setProcessing(false);
            setSucceeded(true);
        }
    };

    // console.log(orders);
    return (

        <>

            <div className="offcanvas-wrap">
                <section className="py-15 py-xl-20">
                    <div className="container mt-5">
                        <div className="row justify-content-between">
                            <div className="col-xl-7 mb-5 mb-xl-0">
                                <section className="mt-4">
                                    <Checkout onChange={handleChange} handleSubmit={handleSubmit} />
                                </section>


                            </div>

                            <PlaceOrder handleSubmit={handleSubmit} totalItemCost={calcTotalCost()} cart={getCart()} processingStat={processing} isDisabled={disabled} iSsucceeded={succeeded} />
                            <p>{" "}</p>
                            <div>{error ? (<p className="alert alert-secondary" role="alert">{error}</p>) : ''}</div>
                            <p>{" "}</p>
                            <div>{message ? (<p className="alert alert-secondary" role="alert">{message}</p>) : ''}</div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        Intent: state.shop.Intent,
        secret: state.shop.sc
    }
};
export default { component: connect(mapStateToProps, { PayIntent })(Stripe) }