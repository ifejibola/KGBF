import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { All_Products } from '../actions/shopActions'

function All(props) {

    useEffect(() => {
        props.All_Products();
    }, []);

    let { products } = props;
    console.log('jkfldj', products)
    return (
        <>
            {/* <!-- navbar --> */}
            <nav id="mainNav" class="navbar navbar-expand-lg navbar-sticky navbar-light border-bottom">
                <div class="container">
                    <a href="./index.html" class="navbar-brand"><img src="./assets/images/logo/logo-dark.svg" alt="Logo" /></a>

                    {/* <!-- secondary --> */}
                    <ul class="navbar-nav navbar-nav-secondary order-lg-3">
                        <li class="nav-item">
                            <a class="nav-link nav-icon" data-bs-toggle="offcanvas" href="#offcanvasCart" role="button"
                                aria-controls="offcanvasCart">
                                <i class="bi bi-cart2"></i>
                            </a>
                        </li>
                        <li class="nav-item d-lg-none">
                            <a class="nav-link nav-icon" href="" role="button" data-bs-toggle="collapse" data-bs-target="#userNav"
                                aria-expanded="false">
                                <i class="bi bi-person"></i>
                            </a>
                        </li>
                        <li class="nav-item dropdown dropdown-hover d-none d-lg-block">
                            <a class="nav-link nav-icon" role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="bi bi-person"></i>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item "
                                    href="./account.html">Dashboard</a></li>
                                <li><a class="dropdown-item "
                                    href="./account-settings.html">Settings</a></li>
                                <li><a class="dropdown-item "
                                    href="./account-orders.html">Orders</a></li>
                                <li><a class="dropdown-item "
                                    href="./account-billing.html">Billing</a></li>
                                <li><a class="dropdown-item text-red" href="#">Log Out</a></li>
                            </ul>
                        </li>
                        <li class="nav-item d-lg-none">
                            <a class="nav-link nav-icon" href="" role="button" data-bs-toggle="collapse" data-bs-target="#navbar"
                                aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="bi bi-list"></span>
                            </a>
                        </li>
                        <li class="nav-item d-none d-lg-block">
                            <a href="" class="btn btn-primary rounded-pill ms-2">
                                Buy Cube
                            </a>
                        </li>
                    </ul>

                    {/* <!-- primary --> */}
                    <div class="collapse navbar-collapse" id="navbar" data-bs-parent="#mainNav">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown dropdown-hover">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown-1" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Landings
                                </a>

                                <ul class="dropdown-menu dropdown-menu-md" aria-labelledby="navbarDropdown-1">
                                    <li><a class="dropdown-item "
                                        href="./startup.html">Startup</a></li>
                                    <li><a class="dropdown-item " href="./saas.html">Saas</a>
                                    </li>
                                    <li><a class="dropdown-item "
                                        href="./coworking.html">Coworking</a></li>
                                    <li><a class="dropdown-item "
                                        href="./job-board.html">Job Board</a></li>
                                    <li><a class="dropdown-item "
                                        href="./agency.html">Agency</a>
                                    </li>
                                    <li><a class="dropdown-item " href="./blog.html">Blog</a>
                                    </li>
                                    <li><a class="dropdown-item "
                                        href="./product.html">Product</a></li>
                                    <li><a class="dropdown-item " href="./app.html">App</a>
                                    </li>
                                    <li><a class="dropdown-item " href="./shop.html">Shop</a>
                                    </li>
                                    <li><a class="dropdown-item "
                                        href="./event.html">Event</a></li>
                                    <li><a class="dropdown-item "
                                        href="./course.html">Course</a>
                                    </li>
                                    <li><a class="dropdown-item "
                                        href="./service.html">Service</a></li>
                                    <li><a class="dropdown-item "
                                        href="./software.html">Software</a></li>
                                    <li><a class="dropdown-item "
                                        href="./documentation.html">Documentation</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown dropdown-hover">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown-2" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Pages
                                </a>
                                <div class="dropdown-menu dropdown-menu-custom" aria-labelledby="navbarDropdown-2">
                                    <div class="row g-0">
                                        <div class="col-6">
                                            <div class="p-4">
                                                <span class="dropdown-label">Company</span>
                                                <a class="dropdown-item "
                                                    href="./about.html">About</a>
                                                <a class="dropdown-item "
                                                    href="./pricing.html">Pricing</a>
                                                <a class="dropdown-item " href="./faq.html">FAQ</a>
                                                <a class="dropdown-item "
                                                    href="./terms.html">Terms</a>
                                                <a class="dropdown-item "
                                                    href="./services.html">Services</a>
                                                <a class="dropdown-item "
                                                    href="./job-listing.html">Job Listing</a>
                                                <a class="dropdown-item "
                                                    href="./job-post.html">Job Post</a>
                                                <span class="dropdown-label">Portfolio</span>
                                                <a class="dropdown-item "
                                                    href="./portfolio-grid.html">Grid</a>
                                                <a class="dropdown-item "
                                                    href="./portfolio-list.html">List</a>
                                                <a class="dropdown-item "
                                                    href="./case-study.html">Case Study</a>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="p-4">
                                                <span class="dropdown-label">Blog</span>
                                                <a class="dropdown-item "
                                                    href="./blog-listing.html">Listing</a>
                                                <a class="dropdown-item "
                                                    href="./blog-post.html">Post</a>
                                                <span class="dropdown-label">Contact</span>
                                                <a class="dropdown-item "
                                                    href="./contact.html">Classic</a>
                                                <a class="dropdown-item "
                                                    href="./contact-location.html">Location</a>
                                                <span class="dropdown-label">Utilities</span>
                                                <a class="dropdown-item " href="./404.html">404</a>
                                                <a class="dropdown-item "
                                                    href="./coming-soon.html">Coming Soon</a>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <a href="" class="card card-arrow inverted bg-green">
                                                <div class="card-footer mt-auto">
                                                    <h4 class="lead lh-3 fw-light">Buy Cube</h4>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown dropdown-hover">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown-3" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false" data-bs-auto-close="outside">
                                    Account
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown-3">
                                    <li><a class="dropdown-item "
                                        href="./account.html">Dashboard</a></li>
                                    <li><a class="dropdown-item "
                                        href="./account-settings.html">Settings</a></li>
                                    <li><a class="dropdown-item "
                                        href="./account-orders.html">Orders</a></li>
                                    <li><a class="dropdown-item "
                                        href="./account-billing.html">Billing</a></li>
                                    <li><a class="dropdown-item " href="./sign-in.html">Sign
                                        in</a></li>
                                    <li><a class="dropdown-item "
                                        href="./register.html">Register</a></li>
                                    <li><a class="dropdown-item "
                                        href="./forgot-password.html">Forgot Password</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown dropdown-hover">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown-4" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false" data-bs-auto-close="outside">
                                    Shop
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown-4">
                                    <li><a class="dropdown-item active"
                                        href="./shop-product.html">Product</a></li>
                                    <li class="dropend dropend-hover">
                                        <a class="dropdown-item dropdown-toggle  "
                                            href="#" id="navbarDropend-1" data-bs-toggle="dropdown" aria-expanded="false"
                                            data-bs-auto-close="outside">Listing</a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropend-1">
                                            <li><a class="dropdown-item "
                                                href="./shop-listing.html">Full width</a></li>
                                            <li><a class="dropdown-item "
                                                href="./shop-listing-sidebar.html">Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a class="dropdown-item "
                                        href="./shop-cart.html">Cart</a></li>
                                    <li><a class="dropdown-item "
                                        href="./shop-checkout.html">Checkout</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown dropdown-hover">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown-5" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Docs
                                </a>
                                <ul class="dropdown-menu dropdown-menu-detailed" aria-labelledby="navbarDropdown-5">
                                    <li><a class="dropdown-item " href="./docs/index.html">
                                        <span>
                                            <i class="bi bi-book"></i>
                                            Get Started
                                            <small>Customising and building</small>
                                        </span>
                                    </a>
                                    </li>
                                    <li><a class="dropdown-item "
                                        href="./docs/accordion.html">
                                        <span>
                                            <i class="bi bi-grid"></i>
                                            Components
                                            <small>Full list of components</small>
                                        </span>
                                    </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item d-lg-none">
                                <a href="https://themes.getbootstrap.com/product/cube-multipurpose-template-ui-kit/"
                                    class="nav-link text-primary">Buy Cube</a>
                            </li>
                        </ul>
                    </div>



                    {/* <!-- mobile user menu --> */}
                    <div class="collapse account-collapse" id="userNav" data-bs-parent="#mainNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link " href="#">Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#">Settings</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#">Orders</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#">Billing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-red" href="#">Log Out</a>
                            </li>
                        </ul>
                    </div>




                </div>
            </nav>


            {/* <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasCart" aria-labelledby="offcanvasCart">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasCartLabel">Shopping Cart</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="list-unstyled">
        <li>
          <div class="row g-2 g-lg-3 align-items-center">
            <a href="" class="col-3"><img class="img-fluid" src="./assets/images/products/product-1.jpg"
                alt="Product"/></a>
            <div class="col">
              <a href="" class="text-black text-primary-hover lead">Bluetooth Speaker</a>
              <ul class="list-inline text-muted">
                <li class="list-inline-item">Price: <span class="text-secondary">$90</span></li>
                <li class="list-inline-item">Color: <span class="text-secondary">Blue</span></li>
                <li class="list-inline-item">Qty:
                  <div class="counter text-secondary" data-counter="qty-1">
                    <span class="counter-minus bi bi-dash"></span>
                    <input type="number" name="qty-1" class="counter-value" value="0" min="0" max="10"/>
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
            <a href="" class="col-3"><img class="img-fluid" src="./assets/images/products/product-2.jpg"
                alt="Product"/></a>
            <div class="col">
              <a href="" class="text-black text-primary-hover lead">Bluetooth Speaker</a>
              <ul class="list-inline text-muted">
                <li class="list-inline-item">Price: <span class="text-secondary">$90</span></li>
                <li class="list-inline-item">Color: <span class="text-secondary">Blue</span></li>
                <li class="list-inline-item">Qty:
                  <div class="counter text-secondary" data-counter="qty-1">
                    <span class="counter-minus bi bi-dash"></span>
                    <input type="number" name="qty-1" class="counter-value" value="0" min="0" max="10"/>
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
            <a href="" class="col-3"><img class="img-fluid" src="./assets/images/products/product-3.jpg"
                alt="Product"/></a>
            <div class="col">
              <a href="" class="text-black text-primary-hover lead">Bluetooth Speaker</a>
              <ul class="list-inline text-muted">
                <li class="list-inline-item">Price: <span class="text-secondary">$90</span></li>
                <li class="list-inline-item">Color: <span class="text-secondary">Blue</span></li>
                <li class="list-inline-item">Qty:
                  <div class="counter text-secondary" data-counter="qty-1">
                    <span class="counter-minus bi bi-dash"></span>
                    <input type="number" name="qty-1" class="counter-value" value="0" min="0" max="10"/>
                    <span class="counter-plus bi bi-plus"></span>
                  </div>
                </li>
              </ul>
              <a href="" class="text-red underline">Remove</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="offcanvas-footer">
      <div class="d-grid gap-1">
        <a href="" class="btn btn-outline-light rounded-pill">View Cart</a>
        <a href="" class="btn btn-primary rounded-pill">Proceed to Checkout</a>
      </div>
    </div>
  </div>
 */}

            {/* <div class="offcanvas-wrap"> */}

            {/* <!-- presentation --> */}
            <section class="py-20">
                <div class="container mt-10">
                    <div class="row g-5 justify-content-center justify-content-lg-between">
                        <div class="col-lg-6 position-relative">
                            <div class="row g-1">
                                <div class="col-md-10 order-md-2">
                                    <div class="carousel">
                                        <div
                                            data-carousel='{"mouseDrag": true, "navContainer": "#nav-1", "gutter": 8, "loop": true, "items": 1}'>
                                            <div class="item">
                                                <img src="./assets/images/products/product-9.jpg" alt="Image" />
                                            </div>

                                            <div class="item">
                                                <img src="./assets/images/products/product-9-2.jpg" alt="Image" />
                                            </div>

                                            <div class="item">
                                                <img src="./assets/images/products/product-9-3.jpg" alt="Image" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2 order-md-1">
                                    <div class="carousel-thumbs d-flex flex-row flex-md-column" id="nav-1">
                                        <div>
                                            <img class="img-fluid" src="./assets/images/products/product-9.jpg" alt="Image" />
                                        </div>
                                        <div>
                                            <img class="img-fluid" src="./assets/images/products/product-9-2.jpg" alt="Image" />
                                        </div>
                                        <div>
                                            <img class="img-fluid" src="./assets/images/products/product-9-3.jpg" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-xl-5">
                            <h1 class="mb-1">Red Organic Cotton Sweater</h1>
                            <div class="fs-5 mb-3">$49 <s class="text-muted ms-1">$39</s></div>

                            <p class="text-secondary mb-3">This coat has a blazer silhouette with notched lapels and front welt pockets.
                                Transition into the new
                                season with this tailored outerwear piece and style it with a cropped tee and trousers. </p>

                            <div class="d-flex align-items-center mb-3">
                                <ul class="rating text-yellow me-2 fs-6">
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                </ul>
                                <a href="" class="underline action fs-sm text-black">Read all 4 reviews <i
                                    class="bi bi-arrow-right"></i></a>
                            </div>


                            <div class="accordion mb-3" id="accordion-1">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="heading-1-1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse-1-1" aria-expanded="false" aria-controls="collapse-1-1">
                                            Description
                                        </button>
                                    </h2>
                                    <div id="collapse-1-1" class="accordion-collapse collapse" aria-labelledby="heading-1-1"
                                        data-bs-parent="#accordion-1">
                                        <div class="accordion-body">
                                            <p class="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                                                voluptas. Quibusdam, quia. Accusantium, quo maxime est ullam at voluptas aspernatur. Iure
                                                assumenda labore esse vero ad. Deleniti ea totam dolorem.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="heading-1-2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse-1-2" aria-expanded="false" aria-controls="collapse-1-2">
                                            Aditional Information
                                        </button>
                                    </h2>
                                    <div id="collapse-1-2" class="accordion-collapse collapse" aria-labelledby="heading-1-2"
                                        data-bs-parent="#accordion-1">
                                        <div class="accordion-body">
                                            <p class="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                                                voluptas. Quibusdam, quia. Accusantium, quo maxime est ullam at voluptas aspernatur. Iure
                                                assumenda labore esse vero ad. Deleniti ea totam dolorem.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row g-1 align-items-center">
                                <div class="col">
                                    <div class="d-grid">
                                        <a href="" class="btn btn-primary btn-lg rounded-pill">Add to cart</a>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <a href="" class="btn btn-outline-secondary btn-lg btn-icon rounded-circle"><i
                                        class="bi bi-heart-fill"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



            {/* <!-- reviews --> */}
            {/* <section class="py-15 py-xl-20 bg-light">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-xl-5 mb-5 mb-xl-0">
            <h2 class="mb-2">Product Reviews</h2>
            <a href="" class="underline action">Write a review <i class="bi bi-arrow-right"></i></a>
          </div>
          <div class="col-xl-7">
            <div class="row g-2" data-masonry>
              <div class="col-md-6">
                <div class="card bg-white">
                  <div class="card-body">
                    <ul class="rating text-yellow fs-lg">
                      <li><i class="bi bi-star-fill"></i></li>
                      <li><i class="bi bi-star-fill"></i></li>
                      <li><i class="bi bi-star-fill"></i></li>
                      <li><i class="bi bi-star-fill"></i></li>
                      <li><i class="bi bi-star-fill"></i></li>
                    </ul>
                    <p class="fs-lg text-secondary my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                      quam
                      ipsa
                      dolorem et, consequatur ipsum</p>
                    <p class="lh-1 fs-lg">Michael Doe</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card bg-white">
                  <div class="card-body">
                    <ul class="rating text-yellow fs-lg">
                      <li><i class="bi bi-star-fill"></i></li>
                      <li><i class="bi bi-star-fill"></i></li>
                      <li><i class="bi bi-star-fill"></i></li>
                      <li><i class="bi bi-star-fill"></i></li>
                      <li><i class="bi bi-star"></i></li>
                    </ul>
                    <p class="fs-lg text-secondary my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <p class="lh-1 fs-lg">Michael Doe</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card bg-white">
                  <div class="card-body">
                    <ul class="rating text-yellow fs-lg">
                      <li><i class="bi bi-star-fill"></i></li>
                      <li><i class="bi bi-star-fill"></i></li>
                      <li><i class="bi bi-star-fill"></i></li>
                      <li><i class="bi bi-star-fill"></i></li>
                      <li><i class="bi bi-star-fill"></i></li>
                    </ul>
                    <p class="fs-lg text-secondary my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                      quam
                      ipsa
                      dolorem et, consequatur ipsum</p>
                    <p class="lh-1 fs-lg">Michael Doe</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card bg-white">
                  <div class="card-body">
                    <ul class="rating text-yellow fs-lg">
                      <li><i class="bi bi-star-fill"></i></li>
                      <li><i class="bi bi-star-fill"></i></li>
                      <li><i class="bi bi-star-fill"></i></li>
                      <li><i class="bi bi-star-fill"></i></li>
                      <li><i class="bi bi-star-fill"></i></li>
                    </ul>
                    <p class="fs-lg text-secondary my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <p class="lh-1 fs-lg">Michael Doe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 */}

            {/* <!-- product carousel --> */}
            <section class="py-15 py-xl-20 overflow-hidden">
                <div class="container">
                    <div class="row align-items-end mb-6">
                        <div class="col-lg-8">
                            <h2 class="fw-bold">You might also like</h2>
                        </div>
                    </div>
                    <div class="carousel carousel-visible">
                        <div
                            data-carousel='{"nav": false,"mouseDrag": true, "gutter": 32, "loop": true, "responsive": {"0": {"items": 1}, "768": {"items": 2}, "992": {"items": 2}, "1200": {"items": 3}}}'>
                            <div>
                                <div class="product">
                                    <figure class="product-image">
                                        <a href="#!">
                                            <img src="assets/images/products/product-1.jpg" alt="Image" />
                                            <img src="assets/images/products/product-1-2.jpg" alt="Image" />
                                        </a>
                                    </figure>
                                    <a class="product-title" href="#!">Watch</a>
                                    <span class="product-price">$100 </span>
                                </div>            </div>
                            <div>
                                <div class="product">
                                    <figure class="product-image">
                                        <a href="#!">
                                            <img src="assets/images/products/product-2.jpg" alt="Image" />
                                            <img src="assets/images/products/product-2-2.jpg" alt="Image" />
                                        </a>
                                    </figure>
                                    <a class="product-title" href="#!">Black Karlo Backpack</a>
                                    <span class="product-price">$88 </span>
                                </div>            </div>
                            <div>
                                <div class="product">
                                    <figure class="product-image">
                                        <a href="#!">
                                            <img src="assets/images/products/product-3.jpg" alt="Image" />
                                            <img src="assets/images/products/product-3-2.jpg" alt="Image" />
                                        </a>
                                    </figure>
                                    <a class="product-title" href="#!">Black Closca Helmet</a>
                                    <span class="product-price">$132 </span>
                                </div>            </div>
                            <div>
                                <div class="product">
                                    <figure class="product-image">
                                        <a href="#!">
                                            <img src="assets/images/products/product-4.jpg" alt="Image" />
                                            <img src="assets/images/products/product-4-2.jpg" alt="Image" />
                                        </a>
                                    </figure>
                                    <a class="product-title" href="#!">Speaker</a>
                                    <span class="product-price">$100 </span>
                                </div>            </div>
                            <div>
                                <div class="product">
                                    <figure class="product-image">
                                        <a href="#!">
                                            <img src="assets/images/products/product-5.jpg" alt="Image" />
                                            <img src="assets/images/products/product-5-2.jpg" alt="Image" />
                                        </a>
                                    </figure>
                                    <a class="product-title" href="#!">Gravel Black Sigg Water Bottle</a>
                                    <span class="product-price">$23 <s class="text-muted">$34</s></span>
                                </div>            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};


function loadData(store) {
    return store.dispatch(All_Products());
};

function mapStateToProps(state) {
    return {
        products: state.common.products
    };
};

export default { loadData: loadData, component: connect(mapStateToProps, { All_Products })(All) };