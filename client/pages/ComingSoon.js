import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Instagram from '../component/Instagram';

const array = [1, 2, 3, 4, 5, 6, 7]
const InstagramImages = [
    {

        image: 'CULT6VhPXg8'
    },
    { image: 'CUGhWyxMguj' },
    { image: 'CVDW7bigqFg' },
    { image: 'CTA32MMrMUJ' },
    { image: 'CS7LyhOHsT7' },
    { image: 'CShcbl-nIWn' },
];


function ComingSoon() {
    useEffect(() => {
        console.log('testing');
        // window.addEventListener("load", function loaded(params) {
        //     console.log('load param: ', params)

        // })
        window.onload = (() => {
            console.log('testing load:');
        })

    }, []);
    return (
        <>
            {/* <!-- navbar --> */}
            {/* <!-- hero --> */}
            <section className="cover overflow-hidden bg-black inverted">
                <div className="d-flex flex-column py-20 min-vh-100 container foreground">
                    <div className="row justify-content-center my-auto">
                        <div className="col-md-8 text-center">
                            <h1 className="fw-bold display-1">"We Gon' Float Like a Butterfly, Sting Like a Bee..."</h1>
                            <Link to="/shop" className="btn btn-white rounded-pill">Shop Now</Link>
                            {/* <Link to="" className="btn btn-white rounded-pill">Learn More</Link> */}
                        </div>
                    </div>
                </div>
                <div className="background background-overlay text-black" >
                    <video playsInline autoPlay loop muted data-video>

                        {/* <source src="videos/flash.mp4" type="video/mp4" /> */}
                        {/* <source src="https://vimeo.com/637288061" type="video/mp4" /> */}
                        {/* <source src="https://www.pexels.com/video/a-man-displaying-his-speed-in-punching-4761713/" type="video/mp4" /> */}
                        {/* <source src="videos/video-3.mp4" type="video/mp4" /> */}
                        {/* <source src="/video/video-3.mp4" type="video/mp4" /> */}
                    </video>
                </div>
                <span className="scroll-down"></span>
            </section>

            {/* <!-- logo list --> */}
            {/* <section className="py-15">
                <div className="container">
                    <div className="carousel carousel-align text-center">
                        <div
                            data-carousel='{"gutter": 48, "loop": false, "nav": false, "controls": false, "responsive": {"0": {"items": 2}, "768": {"items": 4}, "1200": {"items": 5}}}'>
                            <div>
                                <img src="/images/0001.jpg" alt="Logo" className="logo" />
                            </div>
                            <div>
                                <img src="/images/logo/logo-2.svg" alt="Logo" className="logo" />
                            </div>
                            <div>
                                <img src="/images/logo/logo-3.svg" alt="Logo" className="logo" />
                            </div>
                            <div>
                                <img src="/images/logo/logo-4.svg" alt="Logo" className="logo" />
                            </div>
                            <div>
                                <img src="/images/logo/logo-5.svg" alt="Logo" className="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <!-- features --> */}
            <section className="py-15 py-xl-20 overflow-hidden">
                <div className="container">
                    <div className="row justify-content-center position-relative">
                        <div className="col-xl-10">
                            <p className="fs-4">Placeat sed, fugiat dolores
                                officiis
                                delectus
                                quidem labore ipsum cum error aperiam, repellat itaque suscipit mollitia, dolorum voluptatibus magnam
                                voluptas pariatur. Esse!</p>
                            <div className="row g-3 g-md-5 mt-4">
                                <div className="col-md-6 col-lg-4">
                                    <span className="fs-2 lh-1 fw-bold">224ft</span>
                                    <p className="d-block text-muted fs-lg mt-1"> <span className="text-black">Coworking space</span> dolor sit amet
                                        consectetur adipisicing elit.</p>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <span className="fs-2 lh-1 fw-bold">300mb</span>
                                    <p className="d-block text-muted fs-lg mt-1"><span className="text-black">Internet speed</span> sit amet
                                        consectetur adipisicing elit.</p>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <span className="fs-2 lh-1 fw-bold">$14M</span>
                                    <p className="d-block text-muted fs-lg mt-1"><span className="text-black">Startups rised</span> dolor sit amet
                                        consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- gallery --> */}

            <section className="py-15 py-xl-20 overflow-hidden">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <h2>The Journey Starts Here.</h2>
                        </div>
                        <div className="col-lg-5">
                            <div className="accordion accordion-steps" id="accordion-steps" style={{ '--bs-primary': '#1d4b40' }}>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading-steps-1">
                                        <button className="accordion-button fs-5 collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse-steps-1" aria-expanded="false" aria-controls="collapse-steps-1">
                                            Choose A Services
                                        </button>
                                    </h2>
                                    <div id="collapse-steps-1" className="accordion-collapse collapse" aria-labelledby="heading-steps-1"
                                        data-bs-parent="#accordion-steps">
                                        <div className="accordion-body">
                                            <p className="text-secondary">Find a training that works for you.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading-steps-2">
                                        <button className="accordion-button fs-5 collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse-steps-2" aria-expanded="false" aria-controls="collapse-steps-2">
                                            CHOOSE A SCHEDULE
                                        </button>
                                    </h2>
                                    <div id="collapse-steps-2" className="accordion-collapse collapse" aria-labelledby="heading-steps-2"
                                        data-bs-parent="#accordion-steps">
                                        <div className="accordion-body">
                                            <p className="text-secondary">Choose a day to train.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading-steps-3">
                                        <button className="accordion-button fs-5 collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse-steps-3" aria-expanded="false" aria-controls="collapse-steps-3">
                                            START TRAINING
                                        </button>
                                    </h2>
                                    <div id="collapse-steps-3" className="accordion-collapse collapse" aria-labelledby="heading-steps-3"
                                        data-bs-parent="#accordion-steps">
                                        <div className="accordion-body">
                                            <p className="text-secondary">After you find a suitable schedule, you are good to go!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Virtual Training */}
            <section className="py-15 py-xl-20 bg-light">
                <div className="container">
                    <div className="row align-items-center justify-content-center justify-content-lg-between">
                        <div className="col-md-10 col-lg-6 mb-5 mb-lg-0">
                            <h2 className="lh-sm mb-5">Virtual training every week</h2>
                            <div className="row g-2">
                                <div className="col-md-6">
                                    <ul key={array} className="list-group list-group-minimal">
                                        <li className="list-group-item d-flex align-items-center mb-1">
                                            <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2"><i
                                                className="bi bi-check2 text-green"></i>
                                            </div>
                                            Powerfull Tools
                                        </li>
                                        <li className="list-group-item d-flex align-items-center mb-1">
                                            <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2"><i
                                                className="bi-check2 text-green"></i>
                                            </div>
                                            Online Booking
                                        </li>
                                        <li className="list-group-item d-flex align-items-center">
                                            {/* <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2"><i */}
                                            <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2"><i
                                                className="bi bi-alarm text-green"></i>
                                            </div>
                                            24/7 Availability
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul key={array} className="list-group list-group-minimal">
                                        <li className="list-group-item d-flex align-items-center mb-1">
                                            <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2"><i
                                                className="bi bi-check2 text-green"></i>
                                            </div>
                                            Quick delivery <span className="badge bg-green rounded-pill ms-2">New</span>
                                        </li>
                                        <li className="list-group-item d-flex align-items-center mb-1">
                                            <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2"><i
                                                className="bi bi-check2 text-green"></i>
                                            </div>
                                            100% Guarantee
                                        </li>
                                        <li className="list-group-item d-flex align-items-center">
                                            <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2"><i
                                                className="bi bi-check2 text-green"></i>
                                            </div>
                                            Disscounts
                                        </li>
                                    </ul>
                                    {/* <li className="nav-item d-none d-lg-block"> */}
                                    <Link to="#" className="btn btn-outline-black rounded-pill ms-2">
                                        Go Virtual
                                    </Link>
                                    {/* </li> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 col-lg-5 position-relative" data-aos='fade-up'>
                            <div className="equal-1-1 rounded-circle">
                                <figure className="background" style={{ backgroundImage: "url('/images/video0.svg')" }}></figure>
                                {/* <figure className="background" style={{ backgroundImage: "url('/images/boxingBag.jpg')" }}></figure> */}
                            </div>
                            <img className="position-absolute bottom-0 start-0 rotate" src="/images/svg/featured.svg" alt="" />
                            {/* <img className="position-absolute bottom-0 start-0 rotate" src="/images/video0.svg" alt="" /> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- events --> */}
            <section className="py-15 py-xl-20">
                <div className="container">
                    <div className="row g-3 g-xl-5 mb-5">
                        <div className="col-lg-6">
                            <h2>Upcoming events.</h2>
                        </div>
                    </div>
                    <div className="row g-3 g-xl-5">
                        <div className="col-md-6 col-lg-4" data-aos="fade-up">
                            <Link to="#" className="card border card-arrow">
                                <div className="card-header">
                                    <span className="badge bg-opaque-primary text-primary mb-3 rounded-pill">28 Aug</span>
                                    <h3 className="card-title">Everything you should know about Design Systems</h3>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex align-items-center">
                                        <span className="avatar">
                                            <img src="/images/users/user-1.jpg" className="rounded-circle" alt="Avatar" />
                                        </span>
                                        <div className="ms-2">
                                            <p className="mb-0 lh-1">Michael Doe</p>
                                            <small className="text-secondary">Creative Lead</small>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <Link to="#" className="card border card-arrow">
                                <div className="card-header">
                                    <span className="badge bg-opaque-primary text-primary mb-3 rounded-pill">28 Aug</span>
                                    <h3 className="card-title">Everything you should know about Design Systems</h3>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex align-items-center">
                                        <span className="avatar">
                                            <img src="/images/users/user-2.jpg" className="rounded-circle" alt="Avatar" />
                                        </span>
                                        <div className="ms-2">
                                            <p className="mb-0 lh-1">Michael Doe</p>
                                            <small className="text-secondary">Creative Lead</small>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                            <Link to="#" className="card border card-arrow">
                                <div className="card-header">
                                    <span className="badge bg-opaque-primary text-primary mb-3 rounded-pill">28 Aug</span>
                                    <h3 className="card-title">Everything you should know about Design Systems</h3>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex align-items-center">
                                        <span className="avatar">
                                            <img src="/images/users/user-3.jpg" className="rounded-circle" alt="Avatar" />
                                        </span>
                                        <div className="ms-2">
                                            <p className="mb-0 lh-1">Michael Doe</p>
                                            <small className="text-secondary">Creative Lead</small>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Instagram/> */}

            {/* <!-- instagram --> */}
            <section className="py-15 py-xl-20">
                <div className="container">
                    <div className="row g-0 gallery-1">
                        <div className="col-lg-3">

                            <Link to="#" className="card card-arrow card-hover-arrow equal-lg-1-1 text-white bg-black">
                                <div className="card-wrap">
                                    <div className="card-header pb-0">
                                        <i className="bi bi-instagram fs-3"></i>
                                    </div>
                                    <div className="card-footer mt-auto">
                                        <h5 className="fs-lg">@kingdomsfitnessboxing</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* {InstagramImages.map((data, i) => {
                            console.log('igimgs', data.image)
                            return (
                                < div className="col-lg-3" key={i} >
                                    <div to="#" className="card card-arrow card-hover-arrow equal-lg-1-1 text-white bg-black">
                                        <div className="card-wrap">
                                            <Instagram ig={data.image} />


                                        </div>
                                    </div>
                                </div>

                            )
                        })} */}
                        {/* <div className="col-lg-3">
                            <Link to="#" className="card card-arrow card-hover-arrow equal-lg-1-1 text-white bg-black">
                                <div className="card-wrap">
                                    <Instagram />

                                    <div className="card-header pb-0">
                                        <i className="bi bi-instagram fs-3"></i>
                                    </div>
                                    <div className="card-footer mt-auto">
                                        <h5 className="fs-lg">@kingdomsfitnessboxing</h5>
                                    </div>
                                </div>
                            </Link>
                        </div> */}

                    </div>
                </div>
            </section>

            {/* <!-- pricing --> */}
            <section className="py-15 py-xl-20">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center mb-8">
                            <span className="badge bg-opaque-primary text-primary mb-2 rounded-pill">Pricing Plans</span>
                            <h2 className="fw-bold">Get started with BOXING</h2>
                            <p className="text-secondary">Choose an option that fits your need, Boxing, Personal Training, Childrens Boxing</p>
                        </div>
                    </div>
                    <div className="row g-3 g-xl-5 align-items-end">
                        <div className="col-md-6 col-lg-4" data-aos="fade-up">
                            <div className="card border border-primary text-center">
                                <div className="card-body bg-primary inverted">
                                    <span className="fs-lg text-white">Personal Training</span>
                                    <p className="fs-lg text-white">starting at</p>
                                    <h2 className="h1 my-2">$</h2>
                                    <p className="text-secondary fs-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <div className="d-grid mt-5">
                                        <Link to="https://themes.getbootstrap.com/product/cube-multipurpose-template-ui-kit/"
                                            className="btn btn-white btn-lg rounded-pill">Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="card border text-center">
                                <div className="card-body">
                                    <span className="fs-lg text-primary">Open Area</span>
                                    <h2 className="h1 my-2">$39</h2>
                                    <p className="text-secondary fs-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <div className="d-grid mt-5">
                                        <Link to="https://themes.getbootstrap.com/product/cube-multipurpose-template-ui-kit/"
                                            className="btn btn-outline-primary btn-lg rounded-pill">Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="card border text-center">
                                <div className="card-body">
                                    <span className="fs-lg text-primary">Office</span>
                                    <h2 className="h1 my-2">$129</h2>
                                    <p className="text-secondary fs-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <div className="d-grid mt-5">
                                        <Link to="https://themes.getbootstrap.com/product/cube-multipurpose-template-ui-kit/"
                                            className="btn btn-outline-primary btn-lg rounded-pill">Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );

};

function loadData(store) {
    return ""
}

export default {
    loadData,
    component: ComingSoon
}