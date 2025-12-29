const TopBar = () => {
    return (
        <div className="tw-top-bar">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <div className="top-contact-info">
                            <span>
                                <i className="icon icon-phone3"></i>
                                <a href="tel:9910075663">+91-9910075663</a>
                            </span>
                            <span>
                                <i className="icon icon-envelope"></i>
                                <a href="mailto:info@digitalmarketingking.in">
                                    Info@Digitalmarketingking.in
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-4 ml-auto text-right">
                        <div className="top-social-links">
                            <a href="https://pmny.in/RrW0s4JFSwzj" target="_blank" rel="noopener noreferrer" style={{ whiteSpace: 'nowrap' }}>
                                <i className="fa fa-dollar"></i> Pay Online
                            </a>
                            <a
                                href="https://www.facebook.com/digitalmarketingking.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a
                                href="https://twitter.com/dmarketking"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/digitalmarketingking/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/digitalmarketingking.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a
                                href="https://in.pinterest.com/digitalmarketingking/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-pinterest"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
