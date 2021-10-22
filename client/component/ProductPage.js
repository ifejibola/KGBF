import React, { useEffect, useState } from 'react'
import { Link, NavLink, Redirect, useHistory, useLocation } from 'react-router-dom';
import AddToCart from './AddToCart';

function Product(props) {

    const { product, images } = props;
    const [redirect, setRedirect] = useState(false);
    const [loadStatus, setStatus] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        setStatus(true);
        window.scrollTo(0, 0);
        // window.location.reload();
        console.log('pathname-useLocation(): ', pathname)
        return false;
    }, [pathname])

    // if (!loadStatus) {
    //     console.log('page is still loading...')
    //     return null;
    //     return (
    //         <p>
    //             Page loading....
    //         </p>
    //     )
    // }



    return (
        <div className="offcanvas-wrap">
            <section className="py-20">
                <div className="container mt-10">
                    <div className="row g-5 justify-content-center justify-content-lg-between">
                        <div className="col-lg-6 position-relative">
                            <div className="row g-1">
                                <div className="col-md-10 order-md-2">
                                    <div className="carousel">
                                        <div className="tns-outer" id="tns1-ow">
                                            <div className="tns-controls" aria-label="Carousel Navigation" tabIndex="0">
                                                <button type="button" data-controls="prev" tabIndex="-1" aria-controls="tns1">
                                                    <div className="bi bi-arrow-left"></div>
                                                </button><button type="button" data-controls="next" tabIndex="-1" aria-controls="tns1">
                                                    <div className="bi bi-arrow-right"></div></button></div>
                                            <div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span className="current">2</span>  of 3</div>
                                            <div id="tns1-mw" className="tns-ovh"><div className="tns-inner" id="tns1-iw">

                                                <div data-carousel='{"mouseDrag": true, "navContainer": "#nav-1", "gutter": 8, "loop": true, "items": 1}'
                                                    style={{
                                                        verticalAlign: 'top', boxSizing: 'border-box', position: 'relative',
                                                        display: 'block', overflow: 'hidden'
                                                    }}>


                                                    <div className="item" style={{
                                                        verticalAlign: 'top', boxSizing: 'border-box',
                                                        overflow: 'hidden', display: 'inline-block'
                                                    }}>
                                                        <img src={product.default_image} alt="Image" style={{
                                                            boxSizing: 'border-box',
                                                            maxWidth: '100%', height: 'auto', position: 'relative',
                                                            overflow: 'absolute'
                                                        }} />
                                                    </div>

                                                    <div className="item" style={{ overflow: 'hidden', display: 'inline-block' }}>
                                                        <img src={images.two} alt="Image" style={{
                                                            maxWidth: '100%', height: 'auto',
                                                            position: 'absolute', boxSizing: 'border-box', overflow: 'hidden'
                                                        }} />
                                                    </div>

                                                    <div className="item" style={{ overflow: 'hidden', display: 'inline-block' }}>
                                                        <img src={images.three} alt="Image" style={{
                                                            maxWidth: '100%', height: 'auto',
                                                            boxSizing: 'border-box', position: 'absolute', overflow: 'hidden'
                                                        }} />
                                                    </div>

                                                </div>


                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 order-md-1">
                                    <div className="carousel-thumbs d-flex flex-row flex-md-column" id="nav-1" aria-label="Carousel Pagination">

                                        <div data-nav="0" aria-label="Carousel Page 1 (Current Slide)" aria-controls="tns1" className="tns-nav-active">
                                            <img className="img-fluid" src={product.default_image} alt="Image" />
                                        </div>
                                        <div data-nav="1" aria-label="Carousel Page 2 (Current Slide)" aria-controls="tns1" tabIndex="-1">
                                            <img className="img-fluid" src={images.two} alt="Image" />
                                        </div>
                                        <div data-nav="2" aria-label="Carousel Page 3 (Current Slide)" aria-controls="tns1" tabIndex="-1">
                                            <img className="img-fluid" src={images.three} alt="Image" />
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-5">
                            <h1 className="mb-1">{product.product_name}</h1>
                            <div className="fs-5 mb-3">${product.product_price} <s className="text-muted ms-1">$39</s></div>

                            <p className="text-secondary mb-3">
                                This coat has a blazer silhouette with notched lapels and front welt pockets.
                                Transition into the new
                                season with this tailored outerwear piece and style it with a cropped tee and trousers. </p>

                            <div className="d-flex align-items-center mb-3">
                                <ul className="rating text-yellow me-2 fs-6">
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                </ul>
                                <Link to="" className="underline action fs-sm text-black">Read all 4 reviews <div className="bi bi-arrow-right"></div></Link>
                            </div>


                            <div className="accordion mb-3" id="accordion-1">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading-1-1">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1-1" aria-expanded="false" aria-controls="collapse-1-1">
                                            Description
                                        </button>
                                    </h2>
                                    <div id="collapse-1-1" className="accordion-collapse collapse" aria-labelledby="heading-1-1" data-bs-parent="#accordion-1">
                                        <div className="accordion-body">
                                            <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                                                voluptas. Quibusdam, quia. Accusantium, quo maxime est ullam at voluptas aspernatur. Iure
                                                assumenda labore esse vero ad. Deleniti ea totam dolorem.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading-1-2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1-2" aria-expanded="false" aria-controls="collapse-1-2">
                                            Aditional Information
                                        </button>
                                    </h2>
                                    <div id="collapse-1-2" className="accordion-collapse collapse" aria-labelledby="heading-1-2" data-bs-parent="#accordion-1">
                                        <div className="accordion-body">
                                            <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                                                voluptas. Quibusdam, quia. Accusantium, quo maxime est ullam at voluptas aspernatur. Iure
                                                assumenda labore esse vero ad. Deleniti ea totam dolorem.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-1 align-items-center">
                                <AddToCart cart={{
                                    id: product.product_uuid, product_name: product.product_name, product_price:
                                        product.product_price, img_path: product.default_image
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Product;