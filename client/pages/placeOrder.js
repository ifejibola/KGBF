import React from 'react'
import {
    ElementsConsumer,
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { Link } from 'react-router-dom';
const CheckoutForm = (props) => {
    // Get a reference to stripe or Elements using hooks

    const stripe = useStripe();
    const elements = useElements();
};

{/* <CardElement id="card-element" options={cardStyle} onChange={props.handleChange} /> */ }
{/* <CardElement /> */ }

function PlaceOrder(props) {

    console.log('place order: ', props.totalItemCost)
    const { totalItemCost, cart, isDisabled, iSsucceeded } = props;

    console.log('cart length: ', cart.length);
    console.log(props.processingStat)

    return (



        <>
            <div className="col-xl-5 ps-xl-10">
                <div className="card bg-light sticky-top">
                    <div className="accordion accordion-classNameic" id="accordion-1">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-1-1">
                                <button className="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse-1-1" aria-expanded="false" aria-controls="collapse-1-1">
                                    {/* $249.99 */}
                                    ${totalItemCost}
                                </button>
                            </h2>
                            <div id="collapse-1-1" className="accordion-collapse collapse" aria-labelledby="heading-1-1"
                                data-bs-parent="#accordion-1">
                                <div className="accordion-body">
                                    <ol className="list-group list-group-minimal">
                                        <li className="list-group-item d-flex justify-content-between align-items-start text-secondary">
                                            Subtotal
                                            <span className="text-black">{totalItemCost}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start text-secondary">
                                            Delivery
                                            <span className="text-black">Free</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start text-secondary">
                                            Tax
                                            <span className="text-black">$10.00</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start text-secondary">
                                            Total
                                            <span className="text-black">$5.00</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        {/* <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-1-2">
                                <button className="accordion-button fs-lg collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse-1-2" aria-expanded="false" aria-controls="collapse-1-2">
                                    Delivery
                                </button>
                            </h2>
                            <div id="collapse-1-2" className="accordion-collapse collapse" aria-labelledby="heading-1-2"
                                data-bs-parent="#accordion-1">
                                <div className="accordion-body">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                            checked />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Standard ( within 2 weeks )
                                        </label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Express ( within 2 working days)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-1-3">
                                <button className="accordion-button fs-lg collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse-1-3" aria-expanded="false" aria-controls="collapse-1-3">
                                    Cart
                                </button>
                            </h2>
                            <div id="collapse-1-3" className="accordion-collapse collapse" aria-labelledby="heading-1-3"
                                data-bs-parent="#accordion-1">
                                <div className="accordion-body">
                                    <ol className="list-group list-group-minimal">
                                        <li className="list-group-item d-flex justify-content-between align-items-start text-black">
                                            <span>
                                                Analog Magazine Rack x2
                                                <span className="text-muted d-block">Blue</span>
                                            </span>
                                            $35.90
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start text-black">
                                            <span>
                                                Analog Magazine Rack x2
                                                <span className="text-muted d-block">Blue</span>
                                            </span>
                                            $35.90
                                        </li>
                                    </ol>
                                    <a href="" className="action underline mt-1">Edit Cart <i className="bi bi-arrow-right-short"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="d-grid text-center">
                            {
                                totalItemCost === 0 || cart.length <= 0 ? (


                                    <Link to="/shop" className="btn btn-lg btn-primary rounded-pill"
                                        style={{ color: 'white' }}>
                                        <button
                                            id="submit"
                                            className="btn btn-lg btn-primary rounded-pill"
                                            disabled
                                        >
                                            Shop Now
                                        </button>
                                    </Link>

                                )
                                    :
                                    (
                                        <>
                                            <button
                                                id="submit"
                                                className="btn btn-lg btn-primary rounded-pill"
                                                disabled={props.processingStat || isDisabled || iSsucceeded}
                                                onClick={props.handleSubmit}
                                            >
                                                { }
                                                Pay
                                            </button>

                                        </>
                                    )
                            }
                            {/* <button
                                disabled={props.processingStat || isDisabled || iSsucceeded}
                                id="submit"
                                className="btn btn-lg btn-primary rounded-pill"
                                onClick={props.handleSubmit}
                            >

                                <span id="button-text">
                                    {totalItemCost === 0 ? (

                                        <div className="spinner" id="spinner" disabled>Disabled</div>
                                        <span disabled={props.processingStat || isDisabled || iSsucceeded}
                                        >
                                            "Shop Now"
                                        </span>

                                    )
                                        : (
                                            "Pay now"
                                        )}
                                </span>
                            </button> */}
                            {/* <a href="" className="btn btn-lg btn-primary rounded-pill">Proceed to Checkout</a> */}
                            <span className="d-flex justify-content-center align-items-center text-muted mt-2"><i
                                className="bi bi-shield-lock fs-6 me-1"></i>
                                Secure Transaction</span>
                        </div>


                    </div>
                </div>
            </div>

        </>

    );

};

// const InjectedForm = () => {

//     <PlaceOrder stripe={ }>
// }

export default (PlaceOrder)