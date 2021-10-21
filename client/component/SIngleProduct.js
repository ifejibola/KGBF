import React, { useEffect, useState } from 'react'
import { Link, NavLink, Redirect, useHistory, useLocation } from 'react-router-dom';
import AddToCart from './AddToCart';


function Product(props) {

    const [redirect, setRedirect] = useState(false);

    const { product, images } = props;
    const history = useHistory();
    const location = useLocation();
    console.log('single product hist:', history);
    console.log('single::::::', product)
    console.log('location', location);
    let currentLocation = location.pathname;
    console.log(currentLocation);

    useEffect(() => {
        setRedirect({ redirect: true });
    }, [])
    // history.push(currentLocation);
    // history.go();
    // console.log('single::::::', product.default_image)

    // if (redirect) {

    //     <Redirect to={currentLocation} />
    // };
    return (

        <>

            {/* Carousel */}
            <div className="col-lg-6 position-relative">
                <div className="row g-1">
                    <div className="col-md-10 order-md-2">
                        <div className="carousel">
                            <div class="tns-outer" id="tns1-ow">
                                <div class="tns-controls" aria-label="Carousel Navigation" tabindex="0">
                                    <button type="button"
                                        data-controls="prev" tabindex="-1" aria-controls="tns1"><i class="bi bi-arrow-left"></i></button><button
                                            type="button" data-controls="next" tabindex="-1" aria-controls="tns1"><i
                                                class="bi bi-arrow-right"></i>
                                    </button>
                                </div>
                                <div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">
                                    "slide"
                                    <span class="current">2</span>" of 3"

                                </div>
                                <div id="tns1-mw" class="tns-ovh">
                                    <div class="tns-inner" id="tns1-iw">
                                        <div data-carousel="{&quot;mouseDrag&quot;: true, &quot;navContainer&quot;: &quot;#nav-1&quot;, &quot;gutter&quot;: 8, &quot;loop&quot;: true, &quot;items&quot;: 1}"
                                            class="tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" >
                                            <div className="item">
                                                <img src={product.default_image} />
                                            </div>
                                            <div className="item">
                                                <img src={images.two} />
                                            </div>
                                            <div className="item">
                                                <img src={images.three} alt="Image" />
                                            </div>
                                            {/* <div class="item tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
                                            </div> */}
                                            {/* <div class="item tns-item " id="tns1-item0" aria-hidden="true" tabindex="-1">
                                                <img src={product.default_image} alt="Image" />
                                            </div>

                                            <div class="item tns-item" id="tns1-item1" aria-hidden="true" tabindex="-1">
                                                <img src={images.two} alt="Image" />
                                            </div>
                                            <div class="item tns-item" id="tns1-item2" aria-hidden="true" tabindex="-1">
                                                <img src={images.three} alt="Image" />
                                            </div> */}
                                            {/* <div class="item tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
                                                <img src={product.default_image} alt="Image" />
                                            </div> */}
                                            {/* 
                     <div
                        data-carousel='{"mouseDrag": true, "navContainer": "#nav-1", "gutter": 8, "loop": true, "items": 1}'>
                        */}
                                            {/* 
                        <div className="item">
                           <img src={product.default_image} />
                        </div>
                        <div className="item">
                           <img src={images.two} />
                        </div>
                        <div className="item">
                           <img src={images.three} alt="Image" />
                        </div>
                        */}
                                            {/* 
                     </div>
                     */}
                                            {/* 
                     <div class="item tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
                        <img alt="Image" />
                     </div>
                     */}
                                            {/* <div class="item tns-item tns-slide-active" id="tns1-item0">
                                                <img src={product.default_image} alt="Image" tabIndex="-1" />
                                            </div>
                                            <div class="item tns-item" id="tns1-item1" aria-hidden="true" tabindex="-1">
                                                <img src={images.three} alt="Image" />
                                            </div>
                                            <div class="item tns-item" id="tns1-item2" aria-hidden="true" tabindex="-1">
                                                <img alt="Image" src={images.three} alt="Image" />
                                            </div> */}
                                            {/* 
                     <div class="item tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
                        <img />
                     </div>
                     */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 order-md-1">
                        <div className="carousel-thumbs d-flex flex-row flex-md-column" id="nav-1">
                            <div data-nav="0" >
                                <img className="img-fluid " src={product.default_image} alt="Image" />
                            </div>
                            <div data-nav="1" >
                                <img data-nav="1" className="img-fluid" src={images.two} alt="Image" />
                            </div>
                            <div data-nav="2" >
                                <img data-nav="2" className="img-fluid" src={images.three} alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xl-5">
                <h1 className="mb-1">{product.product_name}</h1>
                <div className="fs-5 mb-3">${product.product_price} <s className="text-muted ms-1">$39</s></div>
                <p className="text-secondary mb-3">This coat has a blazer silhouette with notched lapels and front welt pockets.
                    Transition into the new
                    season with this tailored outerwear piece and style it with a cropped tee and trousers.
                </p>
                <div className="d-flex align-items-center mb-3">
                    {/* 
      <ul className="rating text-yellow me-2 fs-6">
         <li><i className="bi bi-star-fill"></i></li>
         <li><i className="bi bi-star-fill"></i></li>
         <li><i className="bi bi-star-fill"></i></li>
         <li><i className="bi bi-star-fill"></i></li>
         <li><i className="bi bi-star-fill"></i></li>
      </ul>
      */}
                    <a href="" className="underline action fs-sm text-black">Read all 4 reviews <i
                        className="bi bi-arrow-right"></i></a>
                </div>
                <div className="accordion mb-3" id="accordion-1">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading-1-1">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse-1-1" aria-expanded="false" aria-controls="collapse-1-1">
                                Description
                            </button>
                        </h2>
                        <div id="collapse-1-1" className="accordion-collapse collapse" aria-labelledby="heading-1-1"
                            data-bs-parent="#accordion-1">
                            <div className="accordion-body">
                                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                                    voluptas. Quibusdam, quia. Accusantium, quo maxime est ullam at voluptas aspernatur. Iure
                                    assumenda labore esse vero ad. Deleniti ea totam dolorem.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading-1-2">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse-1-2" aria-expanded="false" aria-controls="collapse-1-2">
                                Aditional Information
                            </button>
                        </h2>
                        <div id="collapse-1-2" className="accordion-collapse collapse" aria-labelledby="heading-1-2"
                            data-bs-parent="#accordion-1">
                            <div className="accordion-body">
                                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                                    voluptas. Quibusdam, quia. Accusantium, quo maxime est ullam at voluptas aspernatur. Iure
                                    assumenda labore esse vero ad. Deleniti ea totam dolorem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-1 align-items-center">
                    <AddToCart cart={{ id: product.product_uuid, product_name: product.product_name, product_price: product.product_price, img_path: product.default_image }} />
                </div>
            </div>

        </>
    );
};

export default Product;