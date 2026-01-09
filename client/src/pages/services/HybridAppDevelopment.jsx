import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { api } from '../../utils/api';
import '../../styles/service-mobile.css';

const HybridAppDevelopment = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        service: ''
    });

    const [contactFormData, setContactFormData] = useState({
        username: '',
        company: '',
        contact: '',
        email: '',
        service: '',
        message: ''
    });

    useEffect(() => {
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

    const handleQuickFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleQuickFormSubmit = (e) => {
        e.preventDefault();
        console.log('Quick Form Data:', formData);
        alert('Thank you! We will contact you soon.');
        setFormData({ name: '', mobile: '', service: '' });
    };

    const handleContactFormChange = (e) => {
        setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
    };

    const handleContactFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await api.submitTestimonial(contactFormData);
            alert(result.message || 'Thank you for your review! It will be reviewed and published soon.');
            setContactFormData({
                username: '',
                company: '',
                contact: '',
                email: '',
                service: 'Select Service',
                message: ''
            });
        } catch (error) {
            alert('Failed to submit your review. Please try again later.');
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Helmet>
                <title>Hybrid App Development Agency in Delhi</title>
                <meta name="description" content="Digital Marketing King is eminent and best Hybrid App Development Agency in Delhi, India. Get a Best Hybrid App Development Service in Delhi. let's Discuss Your Project Now." />
                <link rel="canonical" href="https://www.digitalmarketingking.in/hybrid-app-development.php" />
            </Helmet>

            {/* Banner Area */}
            <div id="banner-area" className="banner-area" style={{ backgroundImage: 'url(https://www.digitalmarketingking.in/images/banner/banner5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '100px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="banner-heading">
                                <h1 className="banner-title">Hybrid App Development</h1>
                                <ol className="breadcrumb">
                                    <li>Home</li>
                                    <li><a href="/services/mobile-app-development">Mobile App Development</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className="r-bg-x sec-pad">
                <div className="container">
                    <div className="ree new_bar">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="cta-heading-2 bx11">
                                    <img src="https://www.digitalmarketingking.in/img/dm/hybrid-app-development-company-in-delhi.webp" className="img-fluid" alt="Hybrid App Development" />
                                    <h2>Hybrid App Development</h2>

                                    {/* Quick Form */}
                                    <div className="contact-form-wrapper1 d-flex justify-content-center">
                                        <form onSubmit={handleQuickFormSubmit} className="contact-form1">
                                            <h5 className="title">Connect with </h5>
                                            <p className="description">Schedule A Call</p>
                                            <div>
                                                <input
                                                    type="text"
                                                    className="form-control1"
                                                    name="name"
                                                    placeholder="Name"
                                                    value={formData.name}
                                                    onChange={handleQuickFormChange}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="tel"
                                                    className="form-control1"
                                                    name="mobile"
                                                    placeholder="Mobile Number"
                                                    maxLength="12"
                                                    value={formData.mobile}
                                                    onChange={handleQuickFormChange}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    className="form-control1"
                                                    name="service"
                                                    placeholder="Service"
                                                    value={formData.service}
                                                    onChange={handleQuickFormChange}
                                                    required
                                                />
                                            </div>
                                            <div className="submit-button-wrapper">
                                                <input type="submit" value="Submit" />
                                            </div>
                                        </form>
                                    </div>

                                    <p>With the proliferation of gadgets and technology in our lives, it is only imperative that all the information reaches us in digital forms either via apps or via websites. Gadgets run on various operating systems and therefore apps of the day, must be so built such that the users across platforms get a seamless experience. Hybrid Apps –a mix of components, techniques, and methods are the apps that can easily function on any platform. A blend of native and web solutions -these apps are designed to work on multiple platforms such as Android, iOS, Linux, and Windows. Furthermore, unlike native apps, hybrid apps are not strictly built on a given platform. They are a great alternative to web-based applications.</p>

                                    <p>Digital Marketing King – a hybrid app development company based out of Delhi with its extensive experience is well-positioned to cater to the ever-increasing demand of cross-platform apps. With an in-depth understanding of popular frameworks such as Flutter, Ionic, jQuery, Sencha, PhoneGap, Xamarin, and others, we build highly reliable and scalable apps that not only have very impressive UI/ UX but also give an immersive user experience.</p>

                                    <p>Our highly experienced team is dedicated to building award-winning apps. We analyze each and every minute detail of the client's mandate and then choose the technology stack that would be best suited to perform all the functions and yet be light on the operating system. Our team's extensive hands-on experience and knowledge of CSS, HTML5, and Javascript have helped us develop inventive and highly proficient apps that are able to meet client needs. Focusing primarily on user experience and performance our robust apps function seamlessly on multiple platforms. With the constant evolution in technology, we keep ourselves abreast with the latest features and impart frequent training to our team to enhance our skills. While we suggest a hybrid apps model for most purposes, we do not recommend using hybrid app models for gaming apps.</p>

                                    <p>Contact us 24*7. We are open with our customer support at any time. You can Drop us an e-mail at info@digitalmarketingking.in, Call at +91-9625505071</p>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="nav_menu bx11">
                                    <h3>Let's Discuss Your Requirement</h3>
                                    <span className="animate-border border-black"></span>
                                    <ul className="sidebar">
                                        <div className="mid-banfo" style={{ marginTop: '15px' }}>
                                            <div className="contact-form-wrapper1 d-flex justify-content-center">
                                                <form onSubmit={handleQuickFormSubmit} className="contact-form1">
                                                    <h5 className="title">Connect with our Digital Marketing Experts</h5>
                                                    <p className="description">Schedule A Call</p>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="form-control1"
                                                            name="name"
                                                            placeholder="Name"
                                                            value={formData.name}
                                                            onChange={handleQuickFormChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="tel"
                                                            className="form-control1"
                                                            name="mobile"
                                                            placeholder="Mobile Number"
                                                            maxLength="12"
                                                            value={formData.mobile}
                                                            onChange={handleQuickFormChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="form-control1"
                                                            name="service"
                                                            placeholder="Service"
                                                            value={formData.service}
                                                            onChange={handleQuickFormChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="submit-button-wrapper">
                                                        <input type="submit" value="Submit" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </ul>
                                </div>

                                <div className="nav_menu bx11 offcanvas-inner">
                                    <h3>Follow Us</h3>
                                    <div className="footer-social-link">
                                        <ul>
                                            <li><a href="https://www.facebook.com/digitalmarketingking.in/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com/dmarketking" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="https://www.linkedin.com/company/digitalmarketingking/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="https://www.instagram.com/digitalmarketingking.in/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
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
                                                    onChange={handleContactFormChange}
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
                                                    onChange={handleContactFormChange}
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
                                                    onChange={handleContactFormChange}
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
                                                    onChange={handleContactFormChange}
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
                                                    onChange={handleContactFormChange}
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
                                                onChange={handleContactFormChange}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="form-btn-group">
                                        <button className="btn-submit" type="submit">SUBMIT NOW</button>
                                        <a href="#" className="btn-review">WRITE A REVIEW..</a>
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
                                                <a href="/contact-us" className="btn btn-secondary mw-80 no-shadows">Let's Talk</a>
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

export default HybridAppDevelopment;
