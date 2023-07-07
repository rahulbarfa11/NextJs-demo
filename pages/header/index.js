import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <section className="navbar-area navbar-nine">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="index.html">
                                Next Demo
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNine"
                                aria-controls="navbarNine" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarNine">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a className="page-scroll active" href="#hero-area">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#about">About</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="page-scroll" href="#services">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>

                          
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header