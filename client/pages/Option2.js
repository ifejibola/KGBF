import React from 'react';
import * as Icon from 'react-bootstrap-icons'


function option() {

    return (
        <>
            {/* <!-- navbar --> */}
            <nav className="navbar navbar-expand-lg navbar-sticky navbar-dark">
                <div className="container">
                    <a href="./index.html" className="navbar-brand"><img src="/images/logo/logo-light.svg" alt="Logo" /></a>

                    <ul className="navbar-nav navbar-nav-secondary order-lg-3">
                        <li className="nav-item">
                            <a className="nav-link nav-icon" data-bs-toggle="offcanvas" href="#offcanvasNav" role="button"
                                aria-controls="offcanvasNav">
                                <span className="bi bi-list"></span>
                            </a>
                        </li>
                    </ul>

                    {/* <!-- mobile user menu --> */}
                </div>
            </nav>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNav" aria-labelledby="offcanvasNavLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavLabel">Menu</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="nav nav-minimal" id="toc-nav">
                        <li className="nav-item">
                            <a className="nav-link fs-4" href="#menu-1" data-bs-toggle="collapse" role="button" aria-expanded="false"
                                aria-controls="menu-1">Landings</a>
                            <div className="collapse" id="menu-1" data-bs-parent="#toc-nav">
                                <ul className="nav nav-minimal nav-minimal-columns">
                                    <li className="nav-item">
                                        <a className="nav-link " href="./startup.html">Startup</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="./saas.html">Saas</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./coworking.html">Coworking</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="./job-listing.html">Job
                                            Listing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="./agency.html">Agency</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="./blog.html">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="./product.html">Product</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="./app.html">App</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="./shop.html">Shop</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="./event.html">Event</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="./course.html">Course</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="./service.html">Service</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./software.html">Software</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./documentation.html">Documentation</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-4" href="#menu-2" data-bs-toggle="collapse" role="button" aria-expanded="false"
                                aria-controls="menu-2">Pages</a>
                            <div className="collapse" id="menu-2" data-bs-parent="#toc-nav">
                                <ul className="nav nav-minimal nav-minimal-columns">
                                    <li className="nav-item">
                                        <span className="nav-label">Company</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="./about.html">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="./pricing.html">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="./faq.html">FAQ</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="./terms.html">Terms</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./services.html">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="./job-listing.html">Job
                                            Listing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="./job-post.html">Job
                                            Post</a>
                                    </li>

                                    <li className="nav-item">
                                        <span className="nav-label">Portfolio</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./portfolio-grid.html">Grid</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./portfolio-list.html">List</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="./case-study.html">Case
                                            Study</a>
                                    </li>

                                    <li className="nav-item">
                                        <span className="nav-label">Blog</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./blog-listing.html">Listing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./blog-post.html">Post</a>
                                    </li>

                                    <li className="nav-item">
                                        <span className="nav-label">Contact</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="./contact.html">classNameic</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./contact-location.html">Location</a>
                                    </li>

                                    <li className="nav-item">
                                        <span className="nav-label">Utilities</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="./404.html">404</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./coming-soon.html">Coming Soon</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-4" href="#menu-3" data-bs-toggle="collapse" role="button" aria-expanded="false"
                                aria-controls="menu-3">Account</a>
                            <div className="collapse" id="menu-3" data-bs-parent="#toc-nav">
                                <ul className="nav nav-minimal nav-minimal-columns">
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./account.html">Dashboard</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./account-settings.html">Settings</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./account-orders.html">Orders</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./account-billing.html">Billing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="./sign-in.html">Sign In</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./register.html">Register</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./forgot-password.html">Forgot Password</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-4" href="#menu-4" data-bs-toggle="collapse" role="button" aria-expanded="false"
                                aria-controls="menu-4">Shop</a>
                            <div className="collapse" id="menu-4" data-bs-parent="#toc-nav">
                                <ul className="nav nav-minimal nav-minimal-columns">
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./shop-product.html">Product</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./shop-listing.html">Listing Full</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./shop-listing-sidebar.html">Listing Sidebar</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./shop-cart.html">Cart</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./shop-checkout.html">Checkout</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-4" href="#menu-5" data-bs-toggle="collapse" role="button" aria-expanded="false"
                                aria-controls="menu-5">Docs</a>
                            <div className="collapse" id="menu-5" data-bs-parent="#toc-nav">
                                <ul className="nav nav-minimal nav-minimal-columns">
                                    <li className="nav-item">
                                        <a className="nav-link " href="./docs/index.html">Get
                                            Started</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="./docs/accordion.html">Components</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="offcanvas-footer">
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="" className="text-muted text-primary-hover"><i
                            className="bi bi-facebook fs-lg"></i></a></li>
                        <li className="list-inline-item ms-1"><a href="" className="text-muted text-primary-hover"><i
                            className="bi bi-twitter fs-lg"></i></a></li>
                        <li className="list-inline-item ms-1"><a href="" className="text-muted text-primary-hover"><i
                            className="bi bi-linkedin fs-lg"></i></a></li>
                    </ul>
                </div>
            </div>




            <div className="offcanvas-wrap">
                <div data-center-top="@className:inverted bg-color-active" data-bottom-bottom="@className:inverted bg-color-active"
                    data-edge-strategy="reset">
                    <span className="bg-color bg-black"></span>

                    <figure class="min-vh-25"
                        data-bottom-top="background-color: rgba(0,0,0,1)"
                        data-center-center="background-color: rgba(0,0,0,1)"
                        data-top-bottom="background-color: rgba(255,255,255,1)">
                        {/* <!-- hero --> */}
                        <section className="overflow-hidden bg-black inverted">
                            <div className="d-flex flex-column container py-20 min-vh-100 level-1">
                                <div className="row align-items-center justify-content-center justify-content-lg-end my-auto">
                                    <div className="col-md-8 col-lg-5 text-center text-lg-start">
                                        <span className="badge bg-opaque-yellow text-yellow rounded-pill">Extensive Interactions</span>
                                        <h1 className="display-2 fw-bold lh-sm my-2 my-xl-4">High-fidelity interactive design.</h1>
                                        <a href="" className="btn btn-with-icon btn-yellow rounded-pill">Get Started <i
                                            className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid back back-background">
                                <div className="row h-100">
                                    <div className="col-lg-6" data-aos="fade-in">
                                        <figure className="background" style={{ backgroundImage: "url('/images/product-1.jpg')", transform: "translateY(0%)", transform: "translateY(10%)" }}
                                            data-top-top="transform: translateY(0%)" data-top-bottom="transform: translateY(10%)"></figure>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- accordion --> */}
                        <section className="py-15 py-xl-20">
                            <div className="container">
                                <div className="row justify-content-center mb-8">
                                    <div className="col-lg-10">
                                        <h2 className="fw-bold"><span className="d-lg-block">Interface that works like magic.</span> Get things
                                            ready in minutes.</h2>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="accordion accordion-highlight" id="accordion-1">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading-1-1">
                                                    <button className="accordion-button fs-lg collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapse-1-1" aria-expanded="false" aria-controls="collapse-1-1">
                                                        <i className="bi bi-asterisk text-yellow fs-5 me-2"></i> Variable  OpenType fonts
                                                    </button>
                                                </h2>
                                                <div id="collapse-1-1" className="accordion-collapse collapse" aria-labelledby="heading-1-1"
                                                    data-bs-parent="#accordion-1">
                                                    <div className="accordion-body">
                                                        <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                                                            voluptas. Quibusdam, quia. Accusantium, quo maxime est ullam at voluptas aspernatur. Iure
                                                            assumenda labore esse vero ad. Deleniti ea totam dolorem.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading-1-2">
                                                    <button className="accordion-button fs-lg collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapse-1-2" aria-expanded="false" aria-controls="collapse-1-2">
                                                        <i className="bi bi-columns text-yellow fs-5 me-2"></i> Grids Layout
                                                    </button>
                                                </h2>
                                                <div id="collapse-1-2" className="accordion-collapse collapse" aria-labelledby="heading-1-2"
                                                    data-bs-parent="#accordion-1">
                                                    <div className="accordion-body">
                                                        <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                                                            voluptas. Quibusdam, quia. Accusantium, quo maxime est ullam at voluptas aspernatur. Iure
                                                            assumenda labore esse vero ad. Deleniti ea totam dolorem.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading-1-3">
                                                    <button className="accordion-button fs-lg collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapse-1-3" aria-expanded="false" aria-controls="collapse-1-3">
                                                        <i className="bi bi-palette2 text-yellow fs-5 me-2"></i> Color Variables Styles
                                                    </button>
                                                </h2>
                                                <div id="collapse-1-3" className="accordion-collapse collapse" aria-labelledby="heading-1-3"
                                                    data-bs-parent="#accordion-1">
                                                    <div className="accordion-body">
                                                        <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                                                            voluptas. Quibusdam, quia. Accusantium, quo maxime est ullam at voluptas aspernatur. Iure
                                                            assumenda labore esse vero ad. Deleniti ea totam dolorem.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading-1-4">
                                                    <button className="accordion-button fs-lg collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapse-1-4" aria-expanded="false" aria-controls="collapse-1-4">
                                                        <i className="bi bi-cloud-check text-yellow fs-5 me-2"></i> Cloud Sharing
                                                    </button>
                                                </h2>
                                                <div id="collapse-1-4" className="accordion-collapse collapse" aria-labelledby="heading-1-4"
                                                    data-bs-parent="#accordion-1">
                                                    <div className="accordion-body">
                                                        <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                                                            voluptas. Quibusdam, quia. Accusantium, quo maxime est ullam at voluptas aspernatur. Iure
                                                            assumenda labore esse vero ad. Deleniti ea totam dolorem.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <!-- features --> */}
                        <section className="inverted mx-xl-3 overflow-hidden">
                            <div className="d-flex flex-column container py-15 py-xl-20 min-vh-75 level-1">
                                <div className="row mb-8">
                                    <div className="col text-center">
                                        <h2 className="fs-1 fw-bold">Even more great stuff.</h2>
                                    </div>
                                </div>
                                <div className="row g-4 g-lg-5 justify-content-center align-items-center mt-auto">
                                    <div className="col-lg-3 text-center">
                                        <h4 className="text-muted lh-sm fw-normal"><span className="text-white">Components</span> & Blocks
                                        </h4>
                                    </div>
                                    <div className="col-4 col-md-2 col-lg-1">
                                        <img className="img-fluid px-2 px-lg-0" src="/images/svg/divider.svg" alt="Divider" />
                                    </div>
                                    <div className="col-lg-3 text-center">
                                        <h4 className="text-muted lh-sm fw-normal"><span className="text-white">Reusable</span> components</h4>
                                    </div>
                                    <div className="col-4 col-md-2 col-lg-1">
                                        <img className="img-fluid px-2 px-lg-0" src="/images/svg/divider.svg" alt="Divider" />
                                    </div>
                                    <div className="col-lg-3 text-center">
                                        <h4 className="text-muted lh-sm fw-normal"><span className="text-white">Prototyping</span> & Collaboration
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <figure className="background background-overlay" style={{ backgroundImage: "url('/images/product-2.jpg')" }}>
                            </figure>
                        </section>
                    </figure>

                </div>

                {/* <!-- image frame --> */}
                <section className="py-15 py-xl-20">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="frame">
                                    <img src="./assets/images/product-5.jpg" className="img-fluid" alt="" />
                                    <span></span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-5">
                                <h2 className="fw-bold">Get a working website via easy editing</h2>
                                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laborum animi non
                                    ut, ratione eos id? Dolore repellendus illum facilis et dolorum officiis totam similique consequuntur,
                                    magni
                                    nobis obcaecati voluptatibus!</p>
                            </div>
                        </div>
                    </div>
                </section>
                <figure class="min-vh-25"
                    data-bottom-top="background-color: rgba(44,73,244,1)"
                    data-center-center="background-color: rgba(235,60,39,1)"
                    data-top-bottom="background-color: rgba(44,73,244,1)">
                </figure>


                {/* <!-- carousel --> */}
                <section className="overflow-hidden">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-lg-6">
                                <span className="eyebrow mb-2 text-muted">Photo gallery</span>
                                <h2 className="fw-bold"><span className="d-lg-block">Your eyes can't lie.</span> Just look at this.</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-lg-8" data-aos="fade-left">
                                <div className="carousel carousel-visible carousel-big-controls gallery-1">
                                    <div data-carousel='{"mouseDrag": true, "gutter": 48, "loop": true, "items": 1, "nav": false}'>
                                        <div>
                                            <figure className="media media-image equal-16-10"
                                                data-bp='{"imgSrc": "/images/product-3.jpg" , "parentGalleryclassName": "gallery-1" }' >
                                                <span style={{ backgroundImage: "url('/images/product-3.jpg')" }}>
                                                </span>
                                            </figure>                </div>

                                        <div>
                                            <figure className="media media-image equal-16-10"
                                                data-bp='{"imgSrc": "/images/product-4.jpg" , "parentGalleryclassName": "gallery-1" }' >
                                                <span style={{ backgroundImage: "url('/images/product-4.jpg')" }}>
                                                </span>
                                            </figure>                </div>

                                        <div>
                                            <figure className="media media-image equal-16-10"
                                                data-bp='{"imgSrc": "/images/product-5.jpg" , "parentGalleryclassName": "gallery-1" }' >
                                                <span style={{ backgroundImage: "url('/images/product-5.jpg')" }}>
                                                </span>
                                            </figure>                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>



        </>
    )
}

export default {
    component: option
}