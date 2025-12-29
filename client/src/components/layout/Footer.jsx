import { Link } from 'react-router-dom';

// Import Images
import footerLogo from '../../assets/images/other/footer_logo.png';
import awardImg from '../../assets/img/others/13th.webp';
import googlePartner from '../../assets/images/other/google-partner.png';
import metaPartner from '../../assets/images/other/meta-partner.jpg';
import clutch from '../../assets/images/other/clutch.png';
import shopifyPartner from '../../assets/images/other/shopify-partner.png';
import trustpilot from '../../assets/images/other/trustpilot.jpg';
import googleAnalytics from '../../assets/images/other/google-analytics.jpg';
import bing from '../../assets/images/other/bing.png';

const Footer = () => {
    return (
        <footer id="tw-footer" className="tw-footer footer-tag">
            <div className="container">
                {/* Services Grid Row */}
                <div className="row mt-5 pt-4">
                    <div className="col-md-12">
                        <div className="row">
                            {/* Website Designing Column */}
                            <div className="col-md-12 col-lg-3 mb-5">
                                <div className="footer-widget footer-left-widget">
                                    <div className="section-heading">
                                        <h3>Website Designing</h3>
                                        <span className="animate-border border-black"></span>
                                    </div>
                                    <ul>
                                        <li><Link to="/services/static-web-designing"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Static Website Designing</Link></li>
                                        <li><Link to="/services/dynamic-web-designing"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Dynamic Website Designing</Link></li>
                                        <li><Link to="/services/ecommerce-web-designing"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Ecommerce Website Designing</Link></li>
                                        <li><Link to="/services/custom-web-designing"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Custom Website Designing</Link></li>
                                        <li><Link to="/services/wordpress-web-designing"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Wordpress Website Designing</Link></li>
                                        <li><Link to="/services/landing-page-designing"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Landing Page Designing</Link></li>
                                        <li><Link to="/services/mlm-web-designing"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; MLM Website Designing</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Website Development Column */}
                            <div className="col-md-12 col-lg-3">
                                <div className="footer-widget">
                                    <div className="section-heading">
                                        <h3>Website Development</h3>
                                        <span className="animate-border border-black"></span>
                                    </div>
                                    <ul className="menu-col">
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; PHP Website Development</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Ecommerce Website Development</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Custom Website Development</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; MLM Software Development</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Multi Vendor Ecommerce Website</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Mobile App Development Column */}
                            <div className="col-md-12 col-lg-3">
                                <div className="footer-widget">
                                    <div className="section-heading">
                                        <h3>Mobile App Development</h3>
                                        <span className="animate-border border-black"></span>
                                    </div>
                                    <ul className="menu-col">
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Mobile App Development</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Android App development</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; IOS App Development</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Native App development</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Hybrid App development</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Digital Marketing Column */}
                            <div className="col-md-12 col-lg-3">
                                <div className="footer-widget">
                                    <div className="section-heading">
                                        <h3>Digital Marketing</h3>
                                        <span className="animate-border border-black"></span>
                                    </div>
                                    <ul className="menu-col">
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Search Engine Optimization</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Google Business Listing SEO</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Local SEO</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Google Ads</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Performance Marketing</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Facebook Marketing</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Instagram Marketing</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Google Promotion</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Info and Links Row */}
                <div className="row mt-5 pt-5">
                    {/* Logo and Contact Info */}
                    <div className="col-md-12 col-lg-4">
                        <div className="tw-footer-info-box">
                            <Link to="/" className="footer-logo">
                                <img src={footerLogo} alt="footer_logo" className="img-fluid" />
                            </Link>
                            <p>Design, Innovation and Growth</p>
                            <div className="contact-us contact-us-last mt-2">
                                <div className="contact-info">
                                    <h3><i className="fa fa-phone" aria-hidden="true"></i> <a href="tel:9910075663">+91-9910075663</a></h3>
                                    <h3><i className="fa fa-phone" aria-hidden="true"></i> <a href="tel:8130253578">+91-8130253578</a></h3>
                                    <h3><i className="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:info@digitalmarketingking.in">info@digitalmarketingking.in</a></h3>
                                    <h3><i className="fa fa-map-marker" aria-hidden="true"></i> Right Side Wing 3rd Floor, Raj Hospital Pillar No. 779 Dwarka Mor Metro Station, Dwarka Mor 110059, India</h3>
                                </div>
                            </div>
                            <div className="footer-social-link">
                                <h3>Follow us</h3>
                                <span className="animate-border border-black"></span>
                                <ul className="mt-4">
                                    <li><a href="https://www.facebook.com/digitalmarketingking.in/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/dmarketking" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/digitalmarketingking/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="https://www.instagram.com/digitalmarketingking.in/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="https://in.pinterest.com/digitalmarketingking/" target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links and Useful Links */}
                    <div className="col-md-12 col-lg-8">
                        <div className="row">
                            {/* Quick Links */}
                            <div className="col-md-12 col-lg-4">
                                <div className="footer-widget footer-left-widget mysuuu">
                                    <div className="section-heading">
                                        <h3>Quick Links</h3>
                                        <span className="animate-border border-black"></span>
                                    </div>
                                    <ul>
                                        <li><Link to="/"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp;Home</Link></li>
                                        <li><Link to="/about"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp;About us</Link></li>
                                        <li><Link to="/portfolio"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp;Portfolio</Link></li>
                                        <li><Link to="/blogs"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp;Blog</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp;FAQ</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp;Payment Option</Link></li>
                                        <li><Link to="/contact"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp;Contact us</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Useful Links */}
                            <div className="col-md-12 col-lg-4">
                                <div className="footer-widget">
                                    <div className="section-heading">
                                        <h3>Usefull Links</h3>
                                        <span className="animate-border border-black"></span>
                                    </div>
                                    <ul className="menu-col">
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp;Terms and Conditions</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp;Privacy Policy</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp;Policy</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp;Feedback</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp;Career</Link></li>
                                        <li><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp;Sitemap</Link></li>
                                        <li><a href="https://pmny.in/RrW0s4JFSwzj" target="_blank" rel="noopener noreferrer"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp;Pay Online</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Award Badge and CTA */}
                            <div className="col-md-12 col-lg-4">
                                <div className="footer-widgets">
                                    <p><img src={awardImg} className="footeraward" alt="13 Years Trusted Brand" /></p>
                                    <Link className="btn wobble-bottom btn-secondary" to="/contact" id="toppp" style={{ backgroundColor: '#fec658', borderColor: '#fec658' }}>
                                        Let's Discuss Your Project <i className="fa fa-arrow-right fa-btn"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Partner Logos and Copyright - White Background Section */}
            <div className="bg-white py-4 mt-5" style={{ backgroundColor: '#ffffff' }}>
                <div className="container">
                    <div className="footerLogos">
                        <div className="itemFooterLogo">
                            <img src={googlePartner} alt="Google Partner" />
                        </div>
                        <div className="itemFooterLogo">
                            <img src={metaPartner} alt="Meta Partner" />
                        </div>
                        <div className="itemFooterLogo">
                            <img src={clutch} alt="Clutch" />
                        </div>
                        <div className="itemFooterLogo">
                            <img src={shopifyPartner} alt="Shopify Partner" />
                        </div>
                        <div className="itemFooterLogo">
                            <img src={trustpilot} alt="Trustpilot" />
                        </div>
                        <div className="itemFooterLogo">
                            <img src={googleAnalytics} alt="Google Analytics" />
                        </div>
                        <div className="itemFooterLogo">
                            <img src={bing} alt="Bing" />
                        </div>
                    </div>

                    <div className="footer_copyright d-flex mb-2 align-items-center">
                        <div className="copyRightFooter">
                            <p className="text-center mt-2 text-dark">Copyright © 2011-2025. All Rights Reserved. <a href="https://www.digitalmarketingking.in" className="text-dark">Digital Marketing King®</a></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <div id="back-to-top" className="back-to-top">
                <button className="btn btn-dark" title="Back to Top">
                    <i className="fa fa-angle-up"></i>
                </button>
            </div>
        </footer>
    );
};

export default Footer;
