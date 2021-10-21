import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom';

function Shop(props) {

    let { products } = props;
    // console.log('props', props.context);

    let history = useHistory();

    console.log('history: ', history);

    return (
        <>
            <div className="offcanvas-wrap">
                <section className="py-15 py-xl-20">
                    <div className="container mt-5">
                        <div className="row g-3 g-md-5 align-items-end mb-5">
                            <div className="col-md-6">
                                <h1 className="mb-2">Shop</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item active" aria-current="page"><Link to="#">Shop</Link></li>
                                        {/* <li className="breadcrumb-item"><Link to="#">Category</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Equipment</li> */}
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-md-6 text-md-end">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <div className="dropdown">
                                            {/* <Link className="underline text-black" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Price high to low <i className="bi bi-chevron-down"></i>
                                            </Link>

                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                            </ul> */}
                                        </div>
                                    </li>
                                    <li className="list-inline-item ms-2">
                                        <Link className=" underline text-black" data-bs-toggle="offcanvas" to="#offcanvasFilter" role="button"
                                            aria-controls="offcanvasFilter">
                                            Filters
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row g-3 g-lg-5 justify-content-between">
                            {
                                products.map((data, i) => {
                                    // console.log("data: ", data);
                                    return (
                                        <div className="col-md-6 col-lg-4" key={i}>
                                            <div className="product">
                                                <figure className="product-image">
                                                    <Link to={`/product/${data.product_uuid}`} >
                                                        {/* {{ #each image }} */}
                                                        {/* <img src="images/products/product-1-2.jpg" alt="Image" /> */}
                                                        <img src={data.default_image} alt="Image" />
                                                        {/* {{/ each}} */}
                                                    </Link>
                                                </figure>
                                                <Link to={`/product/${data.product_uuid}`} className="product-title" >10 Ounce Gloves</Link>
                                                {/* <a href={`/product/${data.product_uuid}`} className="product-title" >10 Ounce Gloves</a> */}
                                                <span className="product-price">${data.product_price}</span>
                                            </div>
                                        </div>
                                    )

                                })
                            }

                        </div>

                    </div>
                </section>


            </div>
        </>
    );
};


export default Shop;