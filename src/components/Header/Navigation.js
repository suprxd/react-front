import React from 'react';

export const HeaderNavigation = () => {
    return (
        <div className="navgition navgition-transparent">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="/#">
                                <img src="assets/images/logo.svg" alt="Logo" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon" />
                                <span className="toggler-icon" />
                                <span className="toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarOne">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item active">
                                        <a className="page-scroll" href="#home">HOME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#service">SERVICES</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#pricing">PRICING</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#testimonial">Testimonial</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">CONTACT</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar-social d-none d-sm-flex align-items-center">
                                <span>FOLLOW US</span>
                                <ul>
                                    <li><a href="/#"><i className="lni-facebook-filled" /></a></li>
                                    <li><a href="/#"><i className="lni-twitter-original" /></a></li>
                                    <li><a href="/#"><i className="lni-instagram-original" /></a></li>
                                    <li><a href="/#"><i className="lni-linkedin-original" /></a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}