import React from "react";


function Footer() {

    return (
        <footer className="py-20 bg-black inverted">
            <div className="container">
                <div className="row g-2 g-lg-6 mb-8">
                    <div className="col-lg-6">
                        <h4>5th Avenue, New York <br />USA 10255</h4>
                    </div>
                    <div className="col-lg-6 text-lg-end">
                        <span className="h5">+1 (234) 567 890</span>
                    </div>
                </div>
                <div className="row mb-8">
                    <div className="col">
                        <hr />
                    </div>
                </div>
                <div className="row g-0 g-lg-6 text-secondary">
                    <div className="col-lg-6 text-lg-end order-lg-2">
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="" className="text-reset">facebook</a></li>
                            <li className="list-inline-item ms-1"><a href="" className="text-reset">twitter</a></li>
                            <li className="list-inline-item ms-1"><a href="" className="text-reset">linkedin</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <p>Copyrights © 2021</p>
                    </div>
                </div>
            </div>
        </footer>


    )
}

export default Footer;