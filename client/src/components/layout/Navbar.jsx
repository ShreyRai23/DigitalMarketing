import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../../assets/images/other/logo.webp';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const [showRightSlider, setShowRightSlider] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleMegaMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowMegaMenu(!showMegaMenu);
    };

    const toggleRightSlider = () => {
        setShowRightSlider(!showRightSlider);
        if (!showRightSlider) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const megaMenu = document.getElementById('tw-megamenu');
            const servicesLink = event.target.closest('.tw-megamenu-wrapper');

            if (showMegaMenu && !servicesLink && !megaMenu?.contains(event.target)) {
                setShowMegaMenu(false);
            }
        };

        if (showMegaMenu) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showMegaMenu]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    // Track window width for responsive button visibility
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 991);
        };

        // Set initial value
        handleResize();

        // Add resize listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const openOffCanvas = () => {
        document.querySelector('.offcanvas-menu').classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    return (
        <header className="main-header" style={{ position: 'fixed', top: 0, left: 0, right: 0, width: '100%', zIndex: 1000, backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <div className="tw-head">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white">
                        <Link className="navbar-brand tw-nav-brand" to="/">
                            <img
                                src={logo}
                                alt="Digital Marketing King Logo"
                                style={{
                                    width: '200px',
                                    maxWidth: '100%'
                                }}
                                className="navbar-logo"
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
                                                        <Link to="/services/dynamic-website-designing" onClick={() => setShowMegaMenu(false)}>
                                                            Dynamic Website Designing
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/ecommerce-website-designing" onClick={() => setShowMegaMenu(false)}>
                                                            Ecommerce Website Designing
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/custom-website-designing" onClick={() => setShowMegaMenu(false)}>
                                                            Custom Website Designing
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/wordpress-website-designing" onClick={() => setShowMegaMenu(false)}>
                                                            Wordpress Website Designing
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/landing-page-designing" onClick={() => setShowMegaMenu(false)}>
                                                            Landing Page Designing
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/mlm-website-designing" onClick={() => setShowMegaMenu(false)}>
                                                            MLM Website Designing
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/news-website-designing" onClick={() => setShowMegaMenu(false)}>
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
                                                        <Link to="/services/php-website-development" onClick={() => setShowMegaMenu(false)}>
                                                            PHP Website Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/ecommerce-website-development" onClick={() => setShowMegaMenu(false)}>
                                                            Ecommerce Website Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/wordpress-website-development" onClick={() => setShowMegaMenu(false)}>
                                                            Wordpress Website Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/custom-website-development" onClick={() => setShowMegaMenu(false)}>
                                                            Custom Website Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/mlm-software-development" onClick={() => setShowMegaMenu(false)}>
                                                            MLM Software Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/payment-gateway-integration" onClick={() => setShowMegaMenu(false)}>
                                                            Payment Gateway Integration
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/multi-vendor-ecommerce-website" onClick={() => setShowMegaMenu(false)}>
                                                            Multi Vendor Ecommerce Website
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/cms-web-development" onClick={() => setShowMegaMenu(false)}>
                                                            CMS Web Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/web-portal-development" onClick={() => setShowMegaMenu(false)}>
                                                            Web Portal Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/crm-software-development" onClick={() => setShowMegaMenu(false)}>
                                                            CRM Software Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/news-portal-development" onClick={() => setShowMegaMenu(false)}>
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
                                                        <Link to="/services/android-app-development" onClick={() => setShowMegaMenu(false)}>
                                                            Android App Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/ios-app-development" onClick={() => setShowMegaMenu(false)}>
                                                            iOS App Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/native-app-development" onClick={() => setShowMegaMenu(false)}>
                                                            Native App Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/hybrid-app-development" onClick={() => setShowMegaMenu(false)}>
                                                            Hybrid App Development
                                                        </Link>
                                                    </li>
                                                    <li className="tw-megamenu-title mt-3">
                                                        <h3>Graphic Designing</h3>
                                                        <span className="animate-border mr-auto"></span>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/business-explainer-video" onClick={() => setShowMegaMenu(false)}>
                                                            Business Explainer Video
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/logo-designing" onClick={() => setShowMegaMenu(false)}>
                                                            Logo Designing
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services/social-media-post-design" onClick={() => setShowMegaMenu(false)}>
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

                        {/* Black Pill Hamburger Button - Only show on desktop */}
                        {isDesktop && (
                            <button
                                onClick={toggleRightSlider}
                                style={{
                                    backgroundColor: '#000',
                                    border: 'none',
                                    borderRadius: '50px',
                                    padding: '12px 18px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '4px',
                                    marginLeft: '15px',
                                    transition: 'all 0.3s ease'
                                }}
                                aria-label="Open contact menu"
                            >
                                <span style={{
                                    width: '24px',
                                    height: '2px',
                                    backgroundColor: '#fff',
                                    display: 'block',
                                    borderRadius: '2px'
                                }}></span>
                                <span style={{
                                    width: '24px',
                                    height: '2px',
                                    backgroundColor: '#fff',
                                    display: 'block',
                                    borderRadius: '2px'
                                }}></span>
                                <span style={{
                                    width: '24px',
                                    height: '2px',
                                    backgroundColor: '#fff',
                                    display: 'block',
                                    borderRadius: '2px'
                                }}></span>
                            </button>
                        )}

                    </nav>
                </div>
            </div>

            {/* Right Slider */}
            {showRightSlider && (
                <>
                    {/* Overlay */}
                    <div
                        onClick={toggleRightSlider}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 9998,
                            animation: 'fadeIn 0.3s ease'
                        }}
                    ></div>

                    {/* Slider Panel */}
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        width: '400px',
                        maxWidth: '100vw',
                        height: '100vh',
                        backgroundColor: '#fff',
                        zIndex: 9999,
                        boxShadow: '-2px 0 10px rgba(0,0,0,0.2)',
                        overflowY: 'auto',
                        animation: 'slideInRight 0.3s ease',
                        padding: '30px 25px'
                    }} className="right-slider-panel">
                        {/* Close Button */}
                        <button
                            onClick={toggleRightSlider}
                            style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                background: 'none',
                                border: 'none',
                                fontSize: '28px',
                                cursor: 'pointer',
                                color: '#000',
                                lineHeight: '1',
                                padding: '0',
                                width: '30px',
                                height: '30px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            aria-label="Close menu"
                        >
                            ×
                        </button>

                        {/* Logo */}
                        <div style={{
                            textAlign: 'center',
                            marginBottom: '40px',
                            marginTop: '80px'
                        }}>
                            <img
                                src={logo}
                                alt="Digital Marketing King"
                                style={{
                                    maxWidth: '280px',
                                    width: '100%',
                                    height: 'auto'
                                }}
                            />
                        </div>

                        {/* Contact Info */}
                        <div style={{ marginBottom: '30px' }}>
                            {/* Phone */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '25px',
                                gap: '15px'
                            }}>
                                <div style={{
                                    width: '45px',
                                    height: '45px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#0056d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <a href="tel:+919910075663" style={{
                                    color: '#0056d2',
                                    textDecoration: 'none',
                                    fontSize: '18px',
                                    fontWeight: '600'
                                }}>
                                    +91-9910075663
                                </a>
                            </div>

                            {/* Email */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '25px',
                                gap: '15px'
                            }}>
                                <div style={{
                                    width: '45px',
                                    height: '45px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#ffc658" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 6L12 13L2 6" stroke="#ffc658" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <a href="mailto:Info@Digitalmarketingking.in" style={{
                                    color: '#0056d2',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    wordBreak: 'break-all'
                                }}>
                                    Info@Digitalmarketingking.in
                                </a>
                            </div>

                            {/* Address */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                marginBottom: '25px',
                                gap: '15px'
                            }}>
                                <div style={{
                                    width: '45px',
                                    height: '45px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#ffc658" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#ffc658" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p style={{
                                    color: '#0056d2',
                                    fontSize: '15px',
                                    fontWeight: '600',
                                    margin: 0,
                                    lineHeight: '1.6'
                                }}>
                                    Plot No.32, 2nd Floor,<br />
                                    Sewak Park, Dwarka Mor,<br />
                                    New Delhi-110059, India
                                </p>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '15px',
                            marginBottom: '30px',
                            flexWrap: 'wrap'
                        }}>
                            <a href="https://www.facebook.com/digitalmarketingking.in/" target="_blank" rel="noopener noreferrer" style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                backgroundColor: '#3b5998',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                fontSize: '22px',
                                textDecoration: 'none',
                                transition: 'transform 0.3s ease'
                            }}>
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="https://twitter.com/dmarketking" target="_blank" rel="noopener noreferrer" style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                backgroundColor: '#1da1f2',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                fontSize: '22px',
                                textDecoration: 'none',
                                transition: 'transform 0.3s ease'
                            }}>
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/digitalmarketingking/" target="_blank" rel="noopener noreferrer" style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                backgroundColor: '#0077b5',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                fontSize: '22px',
                                textDecoration: 'none',
                                transition: 'transform 0.3s ease'
                            }}>
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a href="https://www.instagram.com/digitalmarketingking.in/" target="_blank" rel="noopener noreferrer" style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                backgroundColor: '#e4405f',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                fontSize: '22px',
                                textDecoration: 'none',
                                transition: 'transform 0.3s ease'
                            }}>
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="https://in.pinterest.com/digitalmarketingking/" target="_blank" rel="noopener noreferrer" style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                backgroundColor: '#000',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                fontSize: '22px',
                                textDecoration: 'none',
                                transition: 'transform 0.3s ease'
                            }}>
                                <i className="fa fa-pinterest"></i>
                            </a>
                        </div>



                        {/* Add animations and responsive styles */}
                        <style>{`
                            @keyframes fadeIn {
                                from { opacity: 0; }
                                to { opacity: 1; }
                            }
                            @keyframes slideInRight {
                                from { 
                                    transform: translateX(100%);
                                }
                                to { 
                                    transform: translateX(0);
                                }
                            }
                            
                            /* Mobile Responsive Styles */
                            @media (max-width: 767px) {
                                /* Hide right slider button on mobile */
                                .right-slider-toggle {
                                    display: none !important;
                                }
                                
                                /* Reduce logo size on mobile */
                                .navbar-logo {
                                    width: 150px !important;
                                }
                                
                                /* Full width slider on mobile */
                                .right-slider-panel {
                                    width: 100% !important;
                                    max-width: 100vw !important;
                                }
                                
                                /* Adjust navbar spacing */
                                .navbar {
                                    padding: 8px 0 !important;
                                }
                                
                                .navbar-toggler {
                                    padding: 6px 10px;
                                }
                            }
                            
                            @media (min-width: 768px) and (max-width: 991px) {
                                /* Tablet: Hide right slider button */
                                .right-slider-toggle {
                                    display: none !important;
                                }
                                
                                /* Tablet: slightly reduce logo */
                                .navbar-logo {
                                    width: 180px !important;
                                }
                                
                                /* Tablet: 80% width slider */
                                .right-slider-panel {
                                    width: 350px !important;
                                }
                            }
                        `}</style>
                    </div>
                </>
            )}
        </header>
    );
};

export default Navbar;
