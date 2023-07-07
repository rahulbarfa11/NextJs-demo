import Image from 'next/image'
import React from 'react'

const HomeSection = () => {
    return (
        <>
            <section id="hero-area" className="header-area header-eight">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="header-content">
                                <h1>What is Lorem Ipsum?</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <div className="button">
                                    <a href="javascript:void(0)" className="btn primary-btn">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="header-image">
                                <Image src="/images/header/hero-image.jpg" width="546" height="436" alt="#" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>            
        </>
    )
}

export default HomeSection