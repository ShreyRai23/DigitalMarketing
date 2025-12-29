import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/images/other/logo.webp';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showMegaMenu, setShowMegaMenu] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleMegaMenu = () => {
        setShowMegaMenu(!showMegaMenu);
    };

    const openOffCanvas = () => {
        document.querySelector('.offcanvas-menu').classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    return (
        <header style={{ position: 'fixed', top: 0, left: 0, right: 0, width: '100%', zIndex: 1000, backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <div className="tw-head">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white">
                        <Link className="navbar-brand tw-nav-brand" to="/">
                            <img
                                src={logo}
                                alt="Digital Marketing King Logo"
                                style={{ width: '200px' }}
                            />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={toggleMenu}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''
                                }`}
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" style={{ fontSize: '16px', fontWeight: '700' }}>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about" style={{ fontSize: '16px', fontWeight: '700' }}>
                                        About Us
                                    </Link>
                                </li>
                                <li
                                    className="nav-item dropdown tw-megamenu-wrapper"
                                    onMouseEnter={() => setShowMegaMenu(true)}
                                    onMouseLeave={() => setShowMegaMenu(false)}
                                >
                                    <a
                                        className="nav-link"
                                        onClick={toggleMegaMenu}
                                        style={{ cursor: 'pointer', fontSize: '16px', fontWeight: '700' }}
                                    >
                                        Our Services
                                        <span className="tw-indicator">
                                            <i className="fa fa-angle-down"></i>
                                        </span>
                                    </a>
                                    <div
                                        id="tw-megamenu"
                                        className={`dropdown-menu tw-mega-menu ${showMegaMenu ? 'show' : ''
                                            }`}
                                    >
                                        <div className="row">
                                            <div className="col-md-12 col-lg-3 no-padding">
                                                <ul style={{ paddingBottom: 0 }}>
                                                    <li className="tw-megamenu-title">
                                                        <h3>Website Designing</h3>
                                                        <span className="animate-border mr-auto"></span>
                                                    </li>
                                                    <li style={{ paddingBottom: '1px' }}>
                                                        <Link to="/services/static-website-designing" onClick={() => setShowMegaMenu(false)}>
                                                            Static Website Designing
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/dynamic-website-designing">
                                                            Dynamic Website Designing
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/ecommerce-website-designing">
                                                            Ecommerce Website Designing
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/custom-website-designing">
                                                            Custom Website Designing
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/wordpress-website-designing">
                                                            Wordpress Website Designing
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/landing-page-designing">
                                                            Landing Page Designing
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/mlm-website-designing">
                                                            MLM Website Designing
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/news-website-designing">
                                                            News Website Designing
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-12 col-lg-3 no-padding">
                                                <ul style={{ paddingBottom: 0 }}>
                                                    <li className="tw-megamenu-title">
                                                        <h3>Website Development</h3>
                                                        <span className="animate-border mr-auto"></span>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/php-website-development">
                                                            PHP Website Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/ecommerce-website-development">
                                                            Ecommerce Website Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/wordpress-website-development">
                                                            Wordpress Website Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/custom-website-development">
                                                            Custom Website Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/mlm-software-development">
                                                            MLM Software Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/payment-gateway-integration">
                                                            Payment Gateway Integration
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/multi-vendor-ecommerce-website">
                                                            Multi Vendor Ecommerce Website
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/cms-web-development">
                                                            CMS Web Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/web-portal-development">
                                                            Web Portal Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/crm-software-development">
                                                            CRM Software Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/news-portal-development">
                                                            News Portal Development
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-12 col-lg-3 no-padding">
                                                <ul style={{ paddingBottom: 0 }}>
                                                    <li className="tw-megamenu-title">
                                                        <h3>Mobile App Development</h3>
                                                        <span className="animate-border mr-auto"></span>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/android-app-development">
                                                            Android App Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/ios-app-development">
                                                            iOS App Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/native-app-development">
                                                            Native App Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/hybrid-app-development">
                                                            Hybrid App Development
                                                        </Link>
                                                    </li>
                                                    <li className="tw-megamenu-title mt-3">
                                                        <h3>Graphic Designing</h3>
                                                        <span className="animate-border mr-auto"></span>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/business-explainer-video">
                                                            Business Explainer Video
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/logo-designing">
                                                            Logo Designing
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/social-media-post-design">
                                                            Social Media Post Design
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-12 col-lg-3 no-padding">
                                                <ul style={{ paddingBottom: 0 }}>
                                                    <li className="tw-megamenu-title">
                                                        <h3>Digital Marketing</h3>
                                                        <span className="animate-border mr-auto"></span>
                                                    </li>
                                                    <li style={{ paddingBottom: '0px' }}>
                                                        <Link to="/services/search-engine-optimization" onClick={() => setShowMegaMenu(false)}>Search Engine Optimization</Link>
                                                    </li>
                                                    <li style={{ paddingBottom: '0px' }}>
                                                        <Link to="/services/google-my-business" onClick={() => setShowMegaMenu(false)}>Google My Business Service</Link>
                                                    </li>
                                                    <li style={{ paddingBottom: '0px' }}>
                                                        <Link to="/services/local-seo" onClick={() => setShowMegaMenu(false)}>Local SEO</Link>
                                                    </li>
                                                    <li style={{ paddingBottom: '0px' }}>
                                                        <Link to="/services/ecommerce-seo" onClick={() => setShowMegaMenu(false)}>E-Commerce SEO</Link>
                                                    </li>
                                                    <li style={{ paddingBottom: '0px' }}>
                                                        <Link to="/services/google-ads" onClick={() => setShowMegaMenu(false)}>Google Ads</Link>
                                                    </li>
                                                    <li style={{ paddingBottom: '0px' }}>
                                                        <Link to="/services/google-promotion" onClick={() => setShowMegaMenu(false)}>Google Promotion</Link>
                                                    </li>
                                                    <li style={{ paddingBottom: '0px' }}>
                                                        <Link to="/services/online-reputation-management" onClick={() => setShowMegaMenu(false)}>Online Reputation Management</Link>
                                                    </li>
                                                    <li style={{ paddingBottom: '0px' }}>
                                                        <Link to="/services/performance-marketing" onClick={() => setShowMegaMenu(false)}>Performance Marketing</Link>
                                                    </li>
                                                    <li style={{ paddingBottom: '0px' }}>
                                                        <Link to="/services/facebook-marketing" onClick={() => setShowMegaMenu(false)}>Facebook Marketing</Link>
                                                    </li>
                                                    <li style={{ paddingBottom: '0px' }}>
                                                        <Link to="/services/instagram-marketing" onClick={() => setShowMegaMenu(false)}>Instagram Marketing</Link>
                                                    </li>
                                                    <li style={{ paddingBottom: '0px' }}>
                                                        <Link to="/services/email-marketing" onClick={() => setShowMegaMenu(false)}>Email Marketing</Link>
                                                    </li>
                                                    <li style={{ paddingBottom: '0px' }}>
                                                        <Link to="/services/social-media-marketing" onClick={() => setShowMegaMenu(false)}>Social Media Marketing</Link>
                                                    </li>
                                                    <li style={{ paddingBottom: '0px' }}>
                                                        <Link to="/services/social-media-optimization" onClick={() => setShowMegaMenu(false)}>Social Media Optimization</Link>
                                                    </li>
                                                    <li style={{ paddingBottom: '0px' }}>
                                                        <Link to="/services/lead-generation" onClick={() => setShowMegaMenu(false)}>Lead Generation</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/portfolio" style={{ fontSize: '16px', fontWeight: '700' }}>
                                        Portfolio
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blogs" style={{ fontSize: '16px', fontWeight: '700' }}>
                                        Blogs
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact" style={{ fontSize: '16px', fontWeight: '700' }}>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
