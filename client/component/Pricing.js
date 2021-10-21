import React from 'react'
import { Link } from 'react-router-dom';
import ButtonMailto from './MailTo';

function Pricing() {

    return (
        <>
            {/* <!-- pricing --> */}
            <section className="py-15 py-xl-20">
                <div className="container mt-10">
                    <div className="row justify-content-center mb-10">
                        <div className="col-lg-8 text-center">
                            <h1 className="mb-2">Get started with Boxing</h1>
                            <p className="fs-lg text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint saepe, quae esse
                                accusantium unde, quidem eius officia incidunt, deserunt veritatis molestias et voluptates?
                            </p>
                        </div>
                    </div>
                    <div className="row g-3 g-xl-5 align-items-end">
                        <div className="col-lg-4">
                            <div className="card border bg-primary inverted">
                                <div className="card-body">
                                    <h1 className="fs-lg text-white">Childs Boxing</h1>
                                    <p className="fs-lg text-white">{"Monthly Fee, 4PM-6PM"}</p>
                                    <h2 className="h1 mb-4">$100</h2>
                                    <p className="text-muted mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    {/* <p className="text-muted mb-4">After Homework</p> */}
                                    <ul className="list-unstyled mb-4">
                                        <li className="py-1">Monday</li>
                                        <li className="py-1">Wednesday</li>
                                        <li className="py-1">Friday</li>
                                        <li className="py-1">{'.'}</li>
                                    </ul>
                                    <div className="d-grid">
                                        <Link to="https://themes.getbootstrap.com/product/cube-multipurpose-template-ui-kit/"
                                            className="btn btn-outline-white btn-lg rounded-pill btn-with-icon">Contact<i
                                                className="bi bi-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border">
                                <div className="card-body">
                                    <h1 className="fs-lg text-black">Personal Training</h1>
                                    <p className="fs-lg text-black">{"Monthly Fee, 4PM-6PM"}</p>
                                    <h2 className="h1 mb-4">$30/150</h2>
                                    <p className="text-muted mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <ul className="list-unstyled mb-4">
                                        <li className="py-1">$30/month - Drop In</li>
                                        <li className="py-1">$150/month - 1 day a week</li>
                                        <li className="py-1">$200/month - 2 day a week</li>
                                        <li className="py-1">$275/month - 4 day a week</li>
                                    </ul>
                                    <div className="d-grid">
                                        <Link to="https://themes.getbootstrap.com/product/cube-multipurpose-template-ui-kit/"
                                            className="btn btn-outline-primary btn-lg rounded-pill btn-with-icon">Contact <i
                                                className="bi bi-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border">
                                <div className="card-body">
                                    <span className="fs-lg text-black">Boxing</span>
                                    <p className="fs-lg text-black">{"Monthly Fee, 4PM-6PM"}</p>
                                    <h2 className="h1 mb-4">$449</h2>
                                    <p className="text-muted mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <ul className="list-unstyled mb-4">
                                        <li className="py-1">$50/month - Drop In</li>
                                        <li className="py-1">$175/month - 1 day a week</li>
                                        <li className="py-1">$275/month - 2 day a week</li>
                                        <li className="py-1">$375/month - 4 day a week</li>
                                    </ul>
                                    <div className="d-grid">
                                        <a href="mailto:kingdomsfitnessboxing@gmail.com?subject=Boxing Inquiry"
                                            className="btn btn-outline-primary btn-lg rounded-pill btn-with-icon">
                                            Contact
                                            <i className="bi bi-arrow-right"></i>
                                        </a>
                                        {/* <ButtonMailto label="Write me an E-Mail" mailto="kingdomsfitnessboxing@gmail.com?subject=Boxing Inquiry" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-15 py-xl-20 border-top">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-5 mb-5 mb-xl-0">
                            <h2 className="mb-2">What users think?</h2>
                            <Link to="" className="underline action">Write a review <i className="bi bi-arrow-right"></i></Link>
                        </div>
                        <div className="col-xl-7">
                            <div className="row g-2" data-masonry>
                                <div className="col-md-6">
                                    <div className="card bg-light">
                                        <div className="card-body">
                                            <i className="bi bi-twitter fs-5"></i>
                                            <p className="fs-lg text-secondary my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                                                quam
                                                ipsa
                                                dolorem et, consequatur ipsum</p>
                                            <p className="lh-1 fs-lg">Michael Doe</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card bg-light">
                                        <div className="card-body">
                                            <i className="bi bi-twitter fs-5"></i>
                                            <p className="fs-lg text-secondary my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                            <p className="lh-1 fs-lg">Michael Doe</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card bg-light">
                                        <div className="card-body">
                                            <i className="bi bi-bootstrap-fill fs-5"></i>
                                            <p className="fs-lg text-secondary my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                                                quam
                                                ipsa
                                                dolorem et, consequatur ipsum</p>
                                            <p className="lh-1 fs-lg">Michael Doe</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card bg-light">
                                        <div className="card-body">
                                            <i className="bi bi-twitter fs-5"></i>
                                            <p className="fs-lg text-secondary my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                            <p className="lh-1 fs-lg">Michael Doe</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- accordion --> */}
            {/* <section className="py-15 py-xl-20 bg-black inverted">
                <div className="container">
                    <div className="row align-items-end mb-5">
                        <div className="col-lg-8 mb-2 mb-lg-0">
                            <h2>Frequently asked questions</h2>
                        </div>
                        <div className="col-lg-4 text-lg-end">
                            <Link to="" className="underline action">View all questions <i className="bi bi-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="row mb-8">
                        <div className="col-12">
                            <div className="accordion accordion-highlight border-top border-bottom" id="accordion-1">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading-1-1">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse-1-1" aria-expanded="false" aria-controls="collapse-1-1">
                                            What is the difference between an editor and a viewer ?
                                        </button>
                                    </h2>
                                    <div id="collapse-1-1" className="accordion-collapse collapse" aria-labelledby="heading-1-1"
                                        data-bs-parent="#accordion-1">
                                        <div className="accordion-body">
                                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cumque quos
                                                libero, ratione non hic
                                                nisi autem dicta saepe asperiores repellendus quis ab est. Repellendus dicta itaque aliquid officiis
                                                animi?</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading-1-2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse-1-2" aria-expanded="false" aria-controls="collapse-1-2">
                                            What if more editors are added to my team each month ?
                                        </button>
                                    </h2>
                                    <div id="collapse-1-2" className="accordion-collapse collapse" aria-labelledby="heading-1-2"
                                        data-bs-parent="#accordion-1">
                                        <div className="accordion-body">
                                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam
                                                aut quod culpa fugit
                                                voluptatibus sunt, obcaecati eveniet impedit eligendi voluptatem reiciendis cum consequatur sit quia
                                                mollitia. Nam, tempora tempore!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading-1-3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse-1-3" aria-expanded="false" aria-controls="collapse-1-3">
                                            What payment methods do you offer ?
                                        </button>
                                    </h2>
                                    <div id="collapse-1-3" className="accordion-collapse collapse" aria-labelledby="heading-1-3"
                                        data-bs-parent="#accordion-1">
                                        <div className="accordion-body">
                                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ullam soluta
                                                ipsam, commodi atque
                                                tempore debitis quaerat molestias neque aperiam, doloribus vero? Suscipit et dignissimos minus, vel
                                                distinctio odit. Earum.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading-1-4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse-1-4" aria-expanded="false" aria-controls="collapse-1-4">
                                            What is your refund policy?
                                        </button>
                                    </h2>
                                    <div id="collapse-1-4" className="accordion-collapse collapse" aria-labelledby="heading-1-4"
                                        data-bs-parent="#accordion-1">
                                        <div className="accordion-body">
                                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ullam soluta
                                                ipsam, commodi atque
                                                tempore debitis quaerat molestias neque aperiam, doloribus vero? Suscipit et dignissimos minus, vel
                                                distinctio odit. Earum.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading-1-5">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse-1-5" aria-expanded="false" aria-controls="collapse-1-5">
                                            Do you have educational or non-profit discounts ?
                                        </button>
                                    </h2>
                                    <div id="collapse-1-5" className="accordion-collapse collapse" aria-labelledby="heading-1-5"
                                        data-bs-parent="#accordion-1">
                                        <div className="accordion-body">
                                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ullam soluta
                                                ipsam, commodi atque
                                                tempore debitis quaerat molestias neque aperiam, doloribus vero? Suscipit et dignissimos minus, vel
                                                distinctio odit. Earum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 */}

        </>
    )
}

export default { component: Pricing };