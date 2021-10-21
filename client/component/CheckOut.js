import React from 'react'
import {
    ElementsConsumer,
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
function Checkout(props) {
    return (
        <>

            <form className="row g-2" onSubmit={props.handleSubmit}>

                <div className="col-12">
                    <label htmlFor="inputCountry" className="form-label">Name</label>
                    <input type="text" className="form-control" name="customer_name" onChange={props.onChange} value={props.customer_name} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputCountry" className="form-label">Email</label>
                    <input type="text" className="form-control" name="customer_email" onChange={props.onChange} value={props.email} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="street" name="street" onChange={props.onChange} value={props.street} />
                </div>
                <div className="col-xl-8">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" placeholder="City" name="city" onChange={props.onChange} value={props.city} />
                </div>
                <div className="col-xl-4">
                    <label htmlFor="inputZip" className="form-label">Zip Code</label>
                    <input type="text" className="form-control" id="inputZip" placeholder="Zip Code" name="zipcode" onChange={props.onChange} value={props.zipcode} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputStateProvince" className="form-label">State / Province</label>
                    <input type="text" className="form-control" id="inputStateProvince" placeholder="State / Province" name="province" onChange={props.onChange} value={props.province} />
                </div>
                <div className="col-xl-4">
                    <label htmlFor="inputCountryCode" className="form-label">Country Code</label>
                    <input type="text" className="form-control" id="inputCountryCode" placeholder="Country Code" name="country" onChange={props.onChange} value={props.country} />
                </div>
                <div className="col-xl-8">
                    <label htmlFor="inputPhoneNumber" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="inputPhoneNumber" placeholder="Phone Number" name="phoneNumber" onChange={props.onChange} value={props.phoneNumber} />
                </div>

                {/* <button className="btn btn-dark btn-with-ball mt-20" type="button" name="button" onClick={props.handleSubmit}>submit</button> */}
                {/* <CardElement /> */}
                <section className="mt-10">
                    <h2 className="fw-bold">Billing</h2>
                    <ul className="nav nav-pills" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <label className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                type="button" role="tab" aria-controls="home" aria-selected="true" aria-readonly>Credit Card</label>
                        </li>

                    </ul>
                    <div className="tab-content mt-4" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row g-2">
                                <div className="col-12">
                                    <label htmlFor="inputCardNumber" className="form-label">Card Number</label>
                                    <CardElement />
                                </div>

                            </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                    </div>
                </section>



            </form>

        </>
    );
};

export default Checkout;