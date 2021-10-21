function template() {

    return (
        <>
            {/* <!-- navbar --> */}
            <nav id="mainNav" class="navbar navbar-expand-lg navbar-sticky navbar-light border-bottom">
                <div class="container">
                    <a href="./index.html" class="navbar-brand"><img src="/images/logo/logo-dark.svg" alt="Logo" /></a>

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
                            <a href="" class="btn btn-outline-light rounded-pill ms-2">
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
                                    <li><a class="dropdown-item "
                                        href="./shop-product.html">Product</a></li>
                                    <li class="dropend dropend-hover">
                                        <a class="dropdown-item dropdown-toggle active "
                                            href="#" id="navbarDropend-1" data-bs-toggle="dropdown" aria-expanded="false"
                                            data-bs-auto-close="outside">Listing</a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropend-1">
                                            <li><a class="dropdown-item active"
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


            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasCart" aria-labelledby="offcanvasCart">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasCartLabel">Shopping Cart</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="list-unstyled">
                        <li>
                            <div class="row g-2 g-lg-3 align-items-center">
                                <a href="" class="col-3"><img class="img-fluid" src="/images/products/product-1.jpg"
                                    alt="Product" /></a>
                                <div class="col">
                                    <a href="" class="text-black text-primary-hover lead">Bluetooth Speaker</a>
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
                                <a href="" class="col-3"><img class="img-fluid" src="/images/products/product-2.jpg"
                                    alt="Product" /></a>
                                <div class="col">
                                    <a href="" class="text-black text-primary-hover lead">Bluetooth Speaker</a>
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
                                <a href="" class="col-3"><img class="img-fluid" src="/images/products/product-3.jpg"
                                    alt="Product" /></a>
                                <div class="col">
                                    <a href="" class="text-black text-primary-hover lead">Bluetooth Speaker</a>
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
                </div>
                <div class="offcanvas-footer">
                    <div class="d-grid gap-1">
                        <a href="" class="btn btn-outline-light rounded-pill">View Cart</a>
                        <a href="" class="btn btn-primary rounded-pill">Proceed to Checkout</a>
                    </div>
                </div>
            </div>


            <div class="offcanvas-wrap">

                <section class="py-15 py-xl-20">
                    <div class="container mt-5">
                        <div class="row g-3 g-md-5 align-items-end mb-5">
                            <div class="col-md-6">
                                <h1 class="mb-2">Equipment</h1>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#">Shop</a></li>
                                        <li class="breadcrumb-item"><a href="#">Category</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Equipment</li>
                                    </ol>
                                </nav>
                            </div>
                            <div class="col-md-6 text-md-end">
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <div class="dropdown">
                                            <a class="underline text-black" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Price high to low <i class="bi bi-chevron-down"></i>
                                            </a>

                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="list-inline-item ms-2">
                                        <a class=" underline text-black" data-bs-toggle="offcanvas" href="#offcanvasFilter" role="button"
                                            aria-controls="offcanvasFilter">
                                            Filters
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row g-3 g-lg-5 justify-content-between">
                            <div class="col-md-6 col-lg-4">
                                <div class="product">
                                    <figure class="product-image">
                                        <a href="#!">
                                            <img src="/images/products/product-1.jpg" alt="Image" />
                                            <img src="/images/products/product-1-2.jpg" alt="Image" />
                                        </a>
                                    </figure>
                                    <a class="product-title" href="#!">Watch</a>
                                    <span class="product-price">$100 </span>
                                </div>          </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="product">
                                    <figure class="product-image">
                                        <a href="#!">
                                            <img src="/images/products/product-2.jpg" alt="Image" />
                                            <img src="/images/products/product-2-2.jpg" alt="Image" />
                                        </a>
                                    </figure>
                                    <a class="product-title" href="#!">Black Karlo Backpack</a>
                                    <span class="product-price">$88 </span>
                                </div>          </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="product">
                                    <figure class="product-image">
                                        <a href="#!">
                                            <img src="/images/products/product-3.jpg" alt="Image" />
                                            <img src="/images/products/product-3-2.jpg" alt="Image" />
                                        </a>
                                    </figure>
                                    <a class="product-title" href="#!">Black Closca Helmet</a>
                                    <span class="product-price">$132 </span>
                                </div>          </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="product">
                                    <figure class="product-image">
                                        <a href="#!">
                                            <img src="/images/products/product-4.jpg" alt="Image" />
                                            <img src="/images/products/product-4-2.jpg" alt="Image" />
                                        </a>
                                    </figure>
                                    <a class="product-title" href="#!">Product Title</a>
                                    <span class="product-price">$100 </span>
                                </div>          </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="product">
                                    <figure class="product-image">
                                        <a href="#!">
                                            <img src="/images/products/product-5.jpg" alt="Image" />
                                            <img src="/images/products/product-5-2.jpg" alt="Image" />
                                        </a>
                                    </figure>
                                    <a class="product-title" href="#!">Gravel Black Sigg Water Bottle</a>
                                    <span class="product-price">$23 </span>
                                </div>          </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="product">
                                    <figure class="product-image">
                                        <a href="#!">
                                            <img src="/images/products/product-6.jpg" alt="Image" />
                                            <img src="/images/products/product-6-2.jpg" alt="Image" />
                                        </a>
                                    </figure>
                                    <a class="product-title" href="#!">Product Title</a>
                                    <span class="product-price">$100 </span>
                                </div>          </div>
                        </div>
                        <div class="row mt-6">
                            <div class="col text-center">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- footer --> */}
                <footer class="py-15 py-xl-20 border-top">
                    <div class="container">
                        <div class="row g-4 g-lg-5 mb-10">
                            <div class="col-md-3 text-center text-md-start">
                                <a href="./index.html" class="navbar-brand"><img src="/images/logo/logo-dark.svg" alt="Logo" /></a>
                            </div>
                            <div class="col-md-4 col-lg-5 text-center text-md-start">
                                <ul class="list-unstyled">
                                    <li class="mb-1"><a href="" class="text-reset text-primary-hover">documentation</a></li>
                                    <li class="mb-1"><a href="" class="text-reset text-primary-hover">components</a></li>
                                    <li class="mb-1"><a href="" class="text-reset text-primary-hover">blocks</a></li>
                                    <li class="mb-1"><a href="" class="text-reset text-primary-hover">changelog</a></li>
                                    <li><a href="" class="text-reset text-primary-hover">roadmap</a></li>
                                </ul>
                            </div>
                            <div class="col-md-5 col-lg-4">
                                <div class="grouped-inputs border p-1 rounded-pill">
                                    <div class="row">
                                        <div class="col">
                                            <input type="text" class="form-control rounded-pill px-3" aria-label="Text input"
                                                placeholder="Your email" />
                                        </div>
                                        <div class="col-auto">
                                            <a href="" class="btn btn-primary btn-icon rounded-circle"><i class="bi bi-arrow-return-left"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row align-items-center g-1 g-lg-6 text-muted">
                            <div class="col-md-6 col-lg-5 order-lg-2 text-center text-md-start">
                                <ul class="list-inline small">
                                    <li class="list-inline-item"><a href="" class="text-reset text-primary-hover">facebook</a></li>
                                    <li class="list-inline-item ms-1"><a href="" class="text-reset text-primary-hover">twitter</a></li>
                                    <li class="list-inline-item ms-1"><a href="" class="text-reset text-primary-hover">linkedin</a></li>
                                </ul>
                            </div>
                            <div class="col-md-6 col-lg-4 text-center text-md-end order-lg-3">
                                <span class="small">5th Avenue, New York USA 10255</span>
                            </div>
                            <div class="col-lg-3 order-lg-1 text-center text-md-start">
                                <p class="small">Copyrights © 2021</p>
                            </div>
                        </div>
                    </div>
                </footer>  </div>



            {/* <!-- offcanvas - filters --> */}
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasFilter" aria-labelledby="offcanvasFilterLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasFilterLabel">Filters</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">

                    <div class="widget">
                        <span class="d-flex eyebrow text-muted mb-2">Brands</span>
                        <ul class="list-unstyled">
                            <li>
                                <div class="form-check form-check-minimal">
                                    <input class="form-check-input" type="checkbox" value="" id="brand-1" />
                                    <label class="form-check-label" for="brand-1">
                                        Vans
                                    </label>
                                </div>
                            </li>
                            <li class="mt-1">
                                <div class="form-check form-check-minimal">
                                    <input class="form-check-input" type="checkbox" value="" id="brand-2" />
                                    <label class="form-check-label" for="brand-2">
                                        Carhart WIP
                                    </label>
                                </div>
                            </li>
                            <li class="mt-1">
                                <div class="form-check form-check-minimal">
                                    <input class="form-check-input" type="checkbox" value="" id="brand-3" />
                                    <label class="form-check-label" for="brand-3">
                                        Carhart WIP
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>


                    <div class="widget mt-5">
                        <span class="d-flex eyebrow text-muted mb-2">Color</span>
                        <ul class="list-unstyled">
                            <li>
                                <div class="form-check form-check-color">
                                    <input class="form-check-input" type="checkbox" value="" id="color-1" />
                                    <label class="form-check-label" for="color-1">
                                        <span class="bg-red"></span> Red
                                    </label>
                                </div>
                            </li>
                            <li class="mt-1">
                                <div class="form-check form-check-color">
                                    <input class="form-check-input" type="checkbox" value="" id="color-2" />
                                    <label class="form-check-label" for="color-2">
                                        <span class="bg-blue"></span> Blue
                                    </label>
                                </div>
                            </li>
                            <li class="mt-1">
                                <div class="form-check form-check-color">
                                    <input class="form-check-input" type="checkbox" value="" id="color-3" />
                                    <label class="form-check-label" for="color-3">
                                        <span class="bg-green"></span> Green
                                    </label>
                                </div>
                            </li>
                            <li class="mt-1">
                                <div class="form-check form-check-color">
                                    <input class="form-check-input" type="checkbox" value="" id="color-4" />
                                    <label class="form-check-label" for="color-4">
                                        <span class="bg-yellow"></span> Yellow
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="widget mt-5">
                        <span class="d-flex eyebrow text-muted mb-2">Price</span>
                        <div class="range-slider" data-range='{"decimals": 0,"step": 1,"connect": true, "start" : [20,80], "range" : {"min": 0, "max" :
          100}}'></div>
                        <div class="range-slider-selection">Price: <span class="range-slider-value" id="range-min"></span>
                            &mdash; <span class="range-slider-value" id="range-max"></span></div>
                    </div>

                </div>
            </div>



        </>
    )
}