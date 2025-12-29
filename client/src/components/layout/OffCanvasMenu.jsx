import { Link } from 'react-router-dom';

const OffCanvasMenu = () => {
    const closeOffCanvas = () => {
        document.querySelector('.offcanvas-menu').classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="offcanvas-menu">
            <div className="offcanvas-menu-overlay" onClick={closeOffCanvas}></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="offcanvas-wrapper">
                            <div className="offcanvas-inner">
                                <Link to="/" className="logo">
                                    <img src="/src/assets/img/logo.webp" alt="Digital Marketing King Logo" />
                                </Link>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="contact-us">
                                            <div className="contact-icon">
                                                <i className="icon icon-phone3"></i>
                                            </div>
                                            <div className="contact-info">
                                                <h3>+91-9910075663</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="contact-us">
                                            <div className="contact-icon">
                                                <i className="icon icon-envelope2"></i>
                                            </div>
                                            <div className="contact-info">
                                                <h3>Info@Digitalmarketingking.in</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="contact-us">
                                            <div className="contact-icon">
                                                <i className="icon icon-map2"></i>
                                            </div>
                                            <div className="contact-info">
                                                <h3>
                                                    Plot No.32, 2nd Floor, Sewak Park, Dwarka Mor, New
                                                    Delhi-110059, India
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-social-link">
                                    <ul>
                                        <li>
                                            <a
                                                href="https://www.facebook.com/digitalmarketingking.in/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://twitter.com/dmarketking"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.linkedin.com/company/digitalmarketingking/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.instagram.com/digitalmarketingking.in/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://in.pinterest.com/digitalmarketingking/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fa fa-pinterest"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button className="menu-close-btn" onClick={closeOffCanvas}>
                                <i className="fa fa-close"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OffCanvasMenu;
