import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../../styles/service-mobile.css';

const GoogleMyBusiness = () => {
    const [formData, setFormData] = useState({ name: '', mobile: '', service: '' });
    const [contactFormData, setContactFormData] = useState({
        username: '', company: '', contact: '', email: '', service: '', message: ''
    });

    useEffect(() => {
        // Initialize Owl Carousel for testimonials
        if (window.$ && window.$.fn.owlCarousel) {
            window.$('.tw-testimonial-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                responsive: {
                    0: { items: 1 },
                    600: { items: 1 },
                    1000: { items: 1 }
                }
            });
        }
    }, []);

    const handleQuickFormSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted! Name: ' + formData.name);
    };

    const handleContactFormSubmit = (e) => {
        e.preventDefault();
        alert('Contact form submitted!');
    };

    return (
        <>
            <Helmet>
                <title>Google My Business Management Service | GMB Listing SEO</title>
                <meta name="description" content="Digital Marketing King is eminent and best Google My Business Listing Management Service Provider in Delhi, India. Get a Best GMB Listing SEO Service in Delhi. let's Discuss Your Project Now." />
                <link rel="canonical" href="https://www.digitalmarketingking.in/gmb-listing.php" />
            </Helmet>

            {/* Banner */}
            <div id="banner-area" className="banner-area" style={{ backgroundImage: 'url(https://www.digitalmarketingking.in/images/banner/banner5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '100px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="banner-heading">
                                <h1 className="banner-title">Google My Business Management Service</h1>
                                <ol className="breadcrumb">
                                    <li>Home</li>
                                    <li><a href="#">Digital Marketing</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section id="main-container" className="main-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <article className="post tw-news-post bx12">
                                <h3 className="ice">Give Us A Call</h3>
                                <div className="call-category">
                                    <div className="container text-center">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <a href="tel:+919910075663" className="blog-category-call">+91-9910075663</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="call-category-whatapp">
                                    <div className="container text-center">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <a href="https://api.whatsapp.com/send?phone=919910075663&text=Hey%20there" target="_blank" rel="noreferrer" className="blog-category-call-whatapp">WhatsApp us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="post-body">
                                    <h2>GMB Listing: A Treasure Trove For Every Online Business!</h2>
                                    <div className="entry-content">
                                        <img className="entry-img" alt="Google My Business Management Service" src="https://www.digitalmarketingking.in/img/dm/google-business-listing-optimization-company-in-delhi.webp" />

                                        <p>Visitors will initially rate your company based on its <b><a href="https://digitalmarketingking.in/gmb-listing.php">GMB listing</a></b>. Partnering with Modern Moves, such as a <b><a href="https://digitalmarketingking.in/gmb-listing.php">GMB listing service provider</a></b> can help you turn that favorable initial perception into a lasting relationship. Enhanced lead rate conversion, quicker acquiring clients, and steady growth will all be made possible by it.</p>

                                        {/* Quick Contact Form */}
                                        <div className="contact-form-wrapper1 d-flex justify-content-center">
                                            <form onSubmit={handleQuickFormSubmit} className="contact-form1">
                                                <h5 className="title">Connect with </h5>
                                                <p className="description">Schedule A Call</p>
                                                <div>
                                                    <input type="text" className="form-control1" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Name" required />
                                                </div>
                                                <div>
                                                    <input type="text" className="form-control1" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} placeholder="Mobile Number" maxLength="12" required />
                                                </div>
                                                <div>
                                                    <input type="text" className="form-control1" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} placeholder="Service" required />
                                                </div>
                                                <div className="submit-button-wrapper">
                                                    <input type="submit" value="Submit" />
                                                </div>
                                            </form>
                                        </div>

                                        <p>GMB listing service is a wonderful opportunity, so take full advantage of it by creating, validating, and correctly GMB listing optimization and GMB listing management. The top 5 reasons why selecting a <b><a href="https://digitalmarketingking.in/gmb-listing.php">Google my business listing service in India</a></b> can help you achieve your goals are listed below.</p>

                                        <ul>
                                            <li><b>Budget-Friendliness:</b> <b><a href="https://digitalmarketingking.in/gmb-listing.php">GMB ranking service</a></b> service gives prospective customers free, one-click access to your company's contact details, including Google business listing contact number, web page, and information. Your free Google local listing also gives customers an inside look at your business by providing your most active intervals as well as review ratings.</li><br />
                                            <li><b>Business Presence:</b> <b><a href="https://digitalmarketingking.in/gmb-listing.php">GMB SEO services</a></b> are quite visible in local search terms. GMB optimization is crucial if you want your business to make an impression and be more approachable to local clients.</li><br />
                                            <li><b>Improved ROI:</b> When a customer discovers a business through their <b><a href="https://digitalmarketingking.in/gmb-listing.php">GMB listing management</a></b>, they are more likely to make a purchase.</li><br />
                                            <li><b>Valuable Status:</b> Having accessibility to these potent tools not only enables you to rank and optimize your brand but also keeps your business current with emerging digital trends. That's why you should certainly invest in a professional <b><a href="https://digitalmarketingking.in/gmb-listing.php">GMB listing management service in Delhi</a></b>.</li><br />
                                            <li><b>Enriched Customer Engagement:</b> Customers are actually more likely to think highly of a brand if they can find it on Google. All such credit goes to <b><a href="https://digitalmarketingking.in/gmb-listing.php">google my business expert</a></b> for a valuable transformation to online businesses.</li><br />
                                        </ul>

                                        <h5>Last Words!</h5>
                                        <p>GMB listing optimization is one of the best tools for enhancing a business's online visibility and local search optimization. Create and verify a Google business listing account right away to increase the online presence of your business! With the right SEO strategies, you can strengthen your local web presence. <b><a href="https://digitalmarketingking.in">Digital Marketing King</a></b> is a full-service Google my business optimization service provider that employs authentic local SEO strategies, provides a complete report, and generates results that can be relied upon for your brand's online marketing.</p>

                                        <p>For the best Google business listing services, it is crucially significant to hire the right <b><a href="https://digitalmarketingking.in/gmb-listing.php">Google my business expert in India</a></b>. To get the most out of the benefits of an optimized GMB listing business solutions, stay connected with Digital Marketing King</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="tw-testimonial" className="tw-testimonial">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 wow fadeInLeft" data-wow-duration="1s">
                            <div className="tw-testimonial-content text-center">
                                <h2 className="section-title">Review From Clients</h2>
                                <span className="animate-border border-green tw-mt-20 tw-mb-40 ml-auto mr-auto"></span>
                            </div>
                            <div className="tw-testimonial-carousel owl-carousel">
                                <div className="tw-testimonial-wrapper">
                                    <div className="testimonial-bg testimonial-bg-orange">
                                        <div className="testimonial-icon">
                                            <img src="https://www.digitalmarketingking.in/images/icon-image/testimonial1.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="testimonial-text">
                                        <p>I already had one website which was not SEO-friendly and also not properly designed. It all started when I gave my project to one novice web designing company but this time, I'm out of words to express my gratitude to Digital Marketing King for such creative, apt and excellent work done just the way I wanted.</p>
                                        <div className="testimonial-meta">
                                            <h4>Rahul Mittal <small>CEO Disha Fashion</small></h4>
                                            <i className="icon icon-quote2"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="tw-testimonial-wrapper">
                                    <div className="testimonial-bg testimonial-bg-orange">
                                        <div className="testimonial-icon">
                                            <img src="https://www.digitalmarketingking.in/images/icon-image/testimonial1.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="testimonial-text">
                                        <p>A heartfelt thanks to Digital Marketing King for bringing immense traffic, high ranking, boosted visibility and greater sales to my business. Indeed, their Search Engine Optimization services are a boon for multiple leading IT firms and businesses. They strive to provide promising results within the committed duration. Keep it up and kudos to their team!</p>
                                        <div className="testimonial-meta">
                                            <h4>Kamal <small>CEO kamal Fine Art Institute</small></h4>
                                            <i className="icon icon-quote2"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="tw-testimonial-wrapper">
                                    <div className="testimonial-bg testimonial-bg-orange">
                                        <div className="testimonial-icon">
                                            <img src="https://www.digitalmarketingking.in/images/icon-image/testimonial1.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="testimonial-text">
                                        <p>Digital Marketing King is truly a King organization. Thanks for building a competent website for my business. I like the work and appreciate the team's coordinative effort. I'm glad to have shaken hands with this website designing service provider in a world full of incompetent and unauthentic agencies. Great work team!</p>
                                        <div className="testimonial-meta">
                                            <h4>Mohd. Arif <small>CEO Zoya Clothing</small></h4>
                                            <i className="icon icon-quote2"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 wow fadeInRight" data-wow-duration="1s">
                            <div className="login-form box-shadow white-bg p-4 p-md-3 text-center">
                                <div className="tw-testimonial-content text-center">
                                    <h2 className="section-title myquiiee">Connect with our Digital Marketing Experts</h2>
                                    <span className="animate-border border-green tw-mt-20 tw-mb-40 ml-auto mr-auto"></span>
                                </div>
                                <form onSubmit={handleContactFormSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    className="form-control"
                                                    placeholder="Name"
                                                    value={contactFormData.username}
                                                    onChange={(e) => setContactFormData({ ...contactFormData, username: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="company"
                                                    placeholder="Company Name"
                                                    value={contactFormData.company}
                                                    onChange={(e) => setContactFormData({ ...contactFormData, company: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    name="contact"
                                                    placeholder="Mobile No."
                                                    value={contactFormData.contact}
                                                    onChange={(e) => setContactFormData({ ...contactFormData, contact: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    placeholder="Email Address"
                                                    value={contactFormData.email}
                                                    onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <select
                                                    name="service"
                                                    className="form-control"
                                                    value={contactFormData.service}
                                                    onChange={(e) => setContactFormData({ ...contactFormData, service: e.target.value })}
                                                >
                                                    <option>Select Service</option>
                                                    <option>Website Designing</option>
                                                    <option>Web Development</option>
                                                    <option>E-Commerce Website</option>
                                                    <option>Web Application Development</option>
                                                    <option>Professional logo Designing</option>
                                                    <option>Social Media Optimization</option>
                                                    <option>Search Engine Optimization</option>
                                                    <option>Web Promotion</option>
                                                    <option>Others</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <textarea
                                                className="form-control"
                                                name="message"
                                                rows="4"
                                                placeholder="Descriptions"
                                                value={contactFormData.message}
                                                onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <button type="submit" className="btn btn-secondary submi-btn">
                                                <span>SUBMIT NOW</span>
                                            </button>
                                        </div>
                                        <div className="col-md-6">
                                            <button type="button" className="btn btn-secondary submi-btn" onClick={() => window.location.href = '/contact'}>
                                                <span>WRITE A REVIEW..</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="tw-analysis" className="tw-analysis-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 text-center wow fadeInDown">
                            <div className="analysis-form">
                                <form className="form-vertical">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10 col-md-12 no-padding">
                                            <h2 className="column-title">
                                                Boost Your Brand Presence
                                                <span className="text-white">with India's Leading Digital Marketing Company</span>
                                            </h2>
                                            <p className="text-white">We design solution to perform with Excellence and Technical Upgradation. Our Products and Digital marketing Services are laced with rich experience of our company which makes your projects failure proof.</p>
                                        </div>
                                        <div className="col-lg-2 col-md-12 no-padding">
                                            <div className="form-group">
                                                <a href="/contact" className="btn btn-secondary mw-80 no-shadows">Let's Talk</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GoogleMyBusiness;
