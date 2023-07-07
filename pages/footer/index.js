import React from 'react'

const Footer = () => {
    return (
        <footer className="footer-area footer-eleven">
            <div className="footer-top">
                <div className="container">
                    <div className="inner-content">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-widget f-about">
                                    <div className="logo">
                                        <a href="index.html">
                                            Next JS Demo
                                        </a>
                                    </div>
                                    <p>
                                        Making the world a better place through constructing elegant
                                        hierarchies.
                                    </p>
                                    <p className="copyright-text">
                                        <span>© 2023 RAM Team.</span>Designed and Developed by 
                                        <a href="javascript:void(0)" rel="nofollow"> RAM & Team </a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-12">
                                <div className="footer-widget f-link">
                                    <h5>Solutions</h5>
                                    <ul>
                                        <li><a href="javascript:void(0)">Marketing</a></li>
                                        <li><a href="javascript:void(0)">Analytics</a></li>
                                        <li><a href="javascript:void(0)">Commerce</a></li>
                                        <li><a href="javascript:void(0)">Insights</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-12">
                                <div className="footer-widget f-link">
                                    <h5>Support</h5>
                                    <ul>
                                        <li><a href="javascript:void(0)">Pricing</a></li>
                                        <li><a href="javascript:void(0)">Documentation</a></li>
                                        <li><a href="javascript:void(0)">Guides</a></li>
                                        <li><a href="javascript:void(0)">API Status</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-widget newsletter">
                                    <h5>Subscribe</h5>
                                    <p>Subscribe to our newsletter for the latest updates</p>
                                    <form action="#" method="get" target="_blank" className="newsletter-form">
                                        <input name="EMAIL" placeholder="Email address" required="required" type="email" />
                                        <div className="button">
                                            <button className="sub-btn">
                                                <i className="lni lni-envelope"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer