
import React from 'react'
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
function Cart() {

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

    return (
        <section class="py-15 py-xl-20">
            <div class="container mt-5">
                <div class="row justify-content-between">
                    <div class="col-lg-7 mb-5 mb-lg-0">
                        <h1 class="fs-2 my-4">Shopping Cart</h1>
                        <ul class="list-unstyled">
                            <li>
                                <div class="row g-2 g-lg-3 align-items-center">
                                    <a href="" class="col-3 col-md-2"><img class="img-fluid" src="./assets/images/products/product-1.jpg"
                                        alt="Product" /></a>
                                    <div class="col">
                                        <a href="" class="text-black text-hover-primary lead">Bluetooth Speaker</a>
                                        <ul class="list-inline text-muted">
                                            <li class="list-inline-item">Price: <span class="text-secondary">$90</span></li>
                                            <li class="list-inline-item">Color: <span class="text-secondary">Blue</span></li>
                                            <li class="list-inline-item">Qty:
                                                <div class="counter text-secondary" data-counter="qty-1">
                                                    <span class="counter-minus bi bi-dash"></span>
                                                    <input type="number" name="qty-1" class="counter-value" value="0" min="0" max="10" />
                                                    <span class="counter-plus bi bi-plus"></span>
                                                </div>
                                            </li>
                                        </ul>
                                        <a href="" class="text-red underline">Remove</a>
                                    </div>
                                </div>
                            </li>
                            <li class="mt-4">
                                <div class="row g-2 g-lg-3 align-items-center">
                                    <a href="" class="col-3 col-md-2"><img class="img-fluid" src="./assets/images/products/product-2.jpg"
                                        alt="Product" /></a>
                                    <div class="col">
                                        <a href="" class="text-black text-hover-primary lead">Bluetooth Speaker</a>
                                        <ul class="list-inline text-muted">
                                            <li class="list-inline-item">Price: <span class="text-secondary">$90</span></li>
                                            <li class="list-inline-item">Color: <span class="text-secondary">Blue</span></li>
                                            <li class="list-inline-item">Qty:
                                                <div class="counter text-secondary" data-counter="qty-1">
                                                    <span class="counter-minus bi bi-dash"></span>
                                                    <input type="number" name="qty-1" class="counter-value" value="0" min="0" max="10" />
                                                    <span class="counter-plus bi bi-plus"></span>
                                                </div>
                                            </li>
                                        </ul>
                                        <a href="" class="text-red underline">Remove</a>
                                    </div>
                                </div>
                            </li>
                            <li class="mt-4">
                                <div class="row g-2 g-lg-3 align-items-center">
                                    <a href="" class="col-3 col-md-2"><img class="img-fluid" src="./assets/images/products/product-3.jpg"
                                        alt="Product" /></a>
                                    <div class="col">
                                        <a href="" class="text-black text-hover-primary lead">Bluetooth Speaker</a>
                                        <ul class="list-inline text-muted">
                                            <li class="list-inline-item">Price: <span class="text-secondary">$90</span></li>
                                            <li class="list-inline-item">Color: <span class="text-secondary">Blue</span></li>
                                            <li class="list-inline-item">Qty:
                                                <div class="counter text-secondary" data-counter="qty-1">
                                                    <span class="counter-minus bi bi-dash"></span>
                                                    <input type="number" name="qty-1" class="counter-value" value="0" min="0" max="10" />
                                                    <span class="counter-plus bi bi-plus"></span>
                                                </div>
                                            </li>
                                        </ul>
                                        <a href="" class="text-red underline">Remove</a>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <a href="" class="underline mt-5">Back to shopping</a>
                    </div>
                    <div class="col-lg-5 ps-xl-10">
                        <div class="card bg-light sticky-top">
                            <div class="accordion accordion-classic" id="accordion-1">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="heading-1-1">
                                        <button class="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse-1-1" aria-expanded="false" aria-controls="collapse-1-1">
                                            $249.99
                                        </button>
                                    </h2>
                                    <div id="collapse-1-1" class="accordion-collapse collapse" aria-labelledby="heading-1-1"
                                        data-bs-parent="#accordion-1">
                                        <div class="accordion-body">
                                            <ol class="list-group list-group-minimal">
                                                <li class="list-group-item d-flex justify-content-between align-items-start text-secondary">
                                                    Subtotal
                                                    <span class="text-black">$35.90</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between align-items-start text-secondary">
                                                    Delivery
                                                    <span class="text-black">Free</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between align-items-start text-secondary">
                                                    Tax
                                                    <span class="text-black">$10.00</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between align-items-start text-secondary">
                                                    Insurance
                                                    <span class="text-black">$5.00</span>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="heading-1-2">
                                        <button class="accordion-button fs-lg collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse-1-2" aria-expanded="false" aria-controls="collapse-1-2">
                                            Delivery
                                        </button>
                                    </h2>
                                    <div id="collapse-1-2" class="accordion-collapse collapse" aria-labelledby="heading-1-2"
                                        data-bs-parent="#accordion-1">
                                        <div class="accordion-body">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                                    checked />
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    Standard ( within 2 weeks )
                                                </label>
                                            </div>
                                            <div class="form-check mt-1">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                <label class="form-check-label" for="flexRadioDefault2">
                                                    Express ( within 2 working days)
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="heading-1-3">
                                        <button class="accordion-button fs-lg collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse-1-3" aria-expanded="false" aria-controls="collapse-1-3">
                                            Promo Code
                                        </button>
                                    </h2>
                                    <div id="collapse-1-3" class="accordion-collapse collapse" aria-labelledby="heading-1-3"
                                        data-bs-parent="#accordion-1">
                                        <div class="accordion-body">
                                            <p class="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                                                voluptas. Quibusdam, quia. Accusantium, quo maxime est ullam at voluptas aspernatur. Iure
                                                assumenda labore esse vero ad. Deleniti ea totam dolorem.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="d-grid text-center">
                                    <a href="" class="btn btn-lg btn-primary rounded-pill">Proceed to Checkout</a>
                                    <span class="d-flex justify-content-center align-items-center text-muted mt-2"><i
                                        class="bi bi-shield-lock fs-6 me-1"></i>
                                        Secure Transaction</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Cart;