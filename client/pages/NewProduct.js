import react from 'react'


function NewProduct() {
    return (
        <>
            <div className="offcanvas-wrap">
                <section className="py-15 py-xl-20">
                    <div className="container mt-5">
                        <div className="row justify-content-between">
                            <div className="col-xl-7 mb-5 mb-xl-0">
                                <section className="mt-4">
                                    <h2 className="fw-bold">Address</h2>
                                    <form className="row g-2">
                                        <div className="col-12">
                                            <label for="inputCountry" className="form-label">Country</label>
                                            <input type="email" className="form-control" id="inputCountry" placeholder="Country" value="Germany" />
                                        </div>
                                        <div className="col-12">
                                            <label for="inputAddress" className="form-label">Address</label>
                                            <input type="password" className="form-control" id="inputAddress" placeholder="Address" />
                                        </div>
                                        <div className="col-xl-8">
                                            <label for="inputCity" className="form-label">City</label>
                                            <input type="text" className="form-control" id="inputCity" placeholder="City" value="Munich" />
                                        </div>
                                        <div className="col-xl-4">
                                            <label for="inputZip" className="form-label">Zip Code</label>
                                            <input type="text" className="form-control" id="inputZip" placeholder="Zip Code" />
                                        </div>
                                        <div className="col-12">
                                            <label for="inputStateProvince" className="form-label">State / Province</label>
                                            <input type="text" className="form-control" id="inputStateProvince" placeholder="State / Province" />
                                        </div>
                                        <div className="col-xl-4">
                                            <label for="inputCountryCode" className="form-label">Country Code</label>
                                            <input type="text" className="form-control" id="inputCountryCode" placeholder="Country Code" />
                                        </div>
                                        <div className="col-xl-8">
                                            <label for="inputPhoneNumber" className="form-label">Phone Number</label>
                                            <input type="text" className="form-control" id="inputPhoneNumber" placeholder="Phone Number" />
                                        </div>
                                        <div className="col-12">
                                            <ul className="list-unstyled mt-2">
                                                <li className="mb-2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                        <label className="form-check-label" for="gridCheck">
                                                            My billing and delivery information are the same
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="gridCheck2" />
                                                        <label className="form-check-label" for="gridCheck2">
                                                            Please send me emails with exclusive offers and updates
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </form>
                                </section>

                                <section className="mt-10">
                                    <h2 className="fw-bold">Billing</h2>
                                    <ul className="nav nav-pills" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                                type="button" role="tab" aria-controls="home" aria-selected="true">Credit Card</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"
                                                role="tab" aria-controls="profile" aria-selected="false">Paypal</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content mt-4" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <form className="row g-2">
                                                <div className="col-12">
                                                    <label for="inputCardNumber" className="form-label">Card Number</label>
                                                    <input type="text" className="form-control" id="inputCardNumber" placeholder="Card Number" />
                                                </div>
                                                <div className="col-xl-6">
                                                    <label for="inputCardName" className="form-label">Name on Card</label>
                                                    <input type="text" className="form-control" id="inputCardName" placeholder="Name on card" />
                                                </div>
                                                <div className="col-xl-3">
                                                    <label for="inputCardMonth" className="form-label">Month</label>
                                                    <input type="text" className="form-control" id="inputCardMonth" placeholder="Month" />
                                                </div>
                                                <div className="col-xl-3">
                                                    <label for="inputCardCVV" className="form-label">CVV</label>
                                                    <input type="text" className="form-control" id="inputCardCVV" placeholder="CVV" />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-xl-5 ps-xl-10">
                                <div className="card bg-light sticky-top">
                                    <div className="accordion accordion-classic" id="accordion-1">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="heading-1-1">
                                                <button className="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapse-1-1" aria-expanded="false" aria-controls="collapse-1-1">
                                                    $249.99
                                                </button>
                                            </h2>
                                            <div id="collapse-1-1" className="accordion-collapse collapse" aria-labelledby="heading-1-1"
                                                data-bs-parent="#accordion-1">
                                                <div className="accordion-body">
                                                    <ol className="list-group list-group-minimal">
                                                        <li className="list-group-item d-flex justify-content-between align-items-start text-secondary">
                                                            Subtotal
                                                            <span className="text-black">$35.90</span>
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
                                                            Insurance
                                                            <span className="text-black">$5.00</span>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
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
                                                        <label className="form-check-label" for="flexRadioDefault1">
                                                            Standard ( within 2 weeks )
                                                        </label>
                                                    </div>
                                                    <div className="form-check mt-1">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                        <label className="form-check-label" for="flexRadioDefault2">
                                                            Express ( within 2 working days)
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                                    <Link to="" href="" className="action underline mt-1">Edit Cart <i className="bi bi-arrow-right-short"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-grid text-center">
                                            <Link to="" href="" className="btn btn-lg btn-primary rounded-pill">Proceed to Checkout</Link>
                                            <span className="d-flex justify-content-center align-items-center text-muted mt-2"><i
                                                className="bi bi-shield-lock fs-6 me-1"></i>
                                                Secure Transaction</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </div>

        </>
    );
};

export default NewProduct;