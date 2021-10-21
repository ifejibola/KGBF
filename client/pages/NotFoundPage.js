import React from 'react';
import { Link } from 'react-router-dom';


const NotFoundPage = ({ staticContext = {} }) => {
    console.log('staticContext: ', staticContext)
    staticContext.notFound = true;

    return (<>
        <div className="bg-red">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            Testing??

            <section className="inverted">
                <div className="d-flex flex-column container min-vh-100 py-20">
                    <div className="row align-items-center justify-content-center justify-content-lg-between my-auto">
                        <div className="col-lg-6 order-lg-2">
                            <img className="img-fluid" src="/images/svg/404.svg" alt="Figure" />
                        </div>
                        <div className="col-md-8 col-lg-5 order-lg-1 text-center text-lg-start">
                            <h1 className="display-2">Sorry, page not found.</h1>
                            <Link to="/" className="btn btn-rounded btn-outline-white rounded-pill">Go back to homepage</Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>);
};

export default {
    component: NotFoundPage
};