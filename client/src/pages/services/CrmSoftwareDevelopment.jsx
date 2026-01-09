import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { api } from '../../utils/api';
import '../../styles/service-mobile.css';

// Import banner image
import banner5 from '../../assets/images/banner/banner5.jpg';
import testimonialIcon from '../../assets/images/icon-image/testimonial1.png';

// Use image URL from the actual website
const crmSoftwareDevImage = 'https://www.digitalmarketingking.in/img/dm/crm-software-development-company-in-delhi.webp';

const CrmSoftwareDevelopment = () => {
    const [quickFormData, setQuickFormData] = useState({
        name: '',
        mobile: '',
        website: ''
    });

    const [contactFormData, setContactFormData] = useState({
        username: '',
        company: '',
        contact: '',
        email: '',
        service: 'Select Service',
        message: ''
    });

    const handleQuickFormChange = (e) => {
        const { name, value } = e.target;
        setQuickFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleContactFormChange = (e) => {
        const { name, value } = e.target;
        setContactFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleQuickSubmit = (e) => {
        e.preventDefault();
        console.log('Quick form submitted:', quickFormData);
    };

    const handleContactSubmit = async (e) => {
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

    const testimonials = [
        {
            name: 'Rahul Mittal',
            company: 'CEO Disha Fashion',
            text: "I already had one website which was not SEO-friendly and also not properly designed. It all started when I gave my project to one novice web designing company but this time, I'm out of words to express my gratitude to Digital Marketing King for such creative, apt and excellent work done just the way I wanted."
        },
        {
            name: 'Kamal',
            company: 'CEO kamal Fine Art Institute',
            text: "A heartfelt thanks to Digital Marketing King for bringing immense traffic, high ranking, boosted visibility and greater sales to my business. Indeed, their Search Engine Optimization services are a boon for multiple leading IT firms and businesses. They strive to provide promising results within the committed duration. Keep it up and kudos to their team!"
        },
        {
            name: 'Mohd. Arif',
            company: 'CEO Zoya Clothing',
            text: "Digital Marketing King is truly a King organization. Thanks for building a competent website for my business. I like the work and appreciate the team's coordinative effort. I'm glad to have shaken hands with this website designing service provider in a world full of incompetent and unauthentic agencies. Great work team!"
        }
    ];

    useEffect(() => {
        // Initialize owl carousel for testimonials
        if (window.jQuery && window.jQuery('.tw-testimonial-carousel').length) {
            window.jQuery('.tw-testimonial-carousel').owlCarousel({
                loop: true,
                margin: 30,
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

    return (
        <>
            <Helmet>
                <title>CRM Software Development Company in Delhi</title>
                <meta name="description" content="Digital Marketing King is a leading CRM Software Development Company in Delhi, India. Get customized CRM solutions for your business. Contact us now!" />
            </Helmet>

            <div className="crm-software-development-page">
                {/* Banner Area */}
                <div
                    id="banner-area"
                    className="banner-area"
                    style={{
                        backgroundImage: `url(${banner5})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        paddingTop: '100px'
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="banner-heading">
                                    <h1 className="banner-title">CRM Software Development</h1>
                                    <ol className="breadcrumb" style={{ background: 'transparent' }}>
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active">Website Development</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Section */}
                <section id="main-container" className="main-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <article className="post tw-news-post bx12">
                                    {/* Give Us A Call Section */}
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

                                    <div className="call-category-whatapp" style={{ marginTop: '20px' }}>
                                        <div className="container text-center">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <a
                                                        href="https://api.whatsapp.com/send?phone=919910075663&text=Hey%20there"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="blog-category-call-whatapp"
                                                    >
                                                        WhatsApp us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Body */}
                                    <div className="post-body">
                                        <h2>Digital Marketing King: Leading CRM Software Development Company In Delhi!</h2>
                                        <div className="entry-content">
                                            <img className="entry-img" alt="Best CRM Software Development Company in Delhi" src={crmSoftwareDevImage} />

                                            <p>
                                                Customer Relationship Management (CRM) software has become an indispensable tool for businesses looking to maintain strong relationships with their customers and streamline their sales processes. At <b><a href="https://digitalmarketingking.in/crm-software-development.php">CRM Software Development Service in Delhi</a></b>, we understand that every business has unique customer management needs. That's why we specialize in developing customized CRM solutions that align perfectly with your business objectives.
                                            </p>

                                            {/* Connect With Form */}
                                            <div className="contact-form-wrapper1 d-flex justify-content-center" style={{ margin: '30px 0' }}>
                                                <form method="post" className="contact-form1" onSubmit={handleQuickSubmit}>
                                                    <h5 className="title">Connect with</h5>
                                                    <p className="description">Schedule A Call</p>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="form-control1"
                                                            name="name"
                                                            placeholder="Name"
                                                            value={quickFormData.name}
                                                            onChange={handleQuickFormChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="form-control1"
                                                            name="mobile"
                                                            placeholder="Mobile Number"
                                                            maxLength="12"
                                                            value={quickFormData.mobile}
                                                            onChange={handleQuickFormChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="form-control1"
                                                            name="website"
                                                            placeholder="Service"
                                                            value={quickFormData.website}
                                                            onChange={handleQuickFormChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="submit-button-wrapper">
                                                        <input type="submit" name="submit" value="Submit" />
                                                    </div>
                                                </form>
                                            </div>

                                            <h5>Why Your Business Needs CRM Software</h5>

                                            <p>
                                                In today's competitive business environment, managing customer relationships effectively is crucial for success. <b><a href="https://digitalmarketingking.in/">Digital Marketing King</a></b>, a premier <b><a href="https://digitalmarketingking.in/crm-software-development.php">CRM Software Development company in Delhi</a></b>, offers comprehensive CRM solutions that help businesses:
                                            </p>

                                            <ul>
                                                <li><b>Centralize Customer Data:</b> Store all customer information in one accessible location, making it easy for your team to access and update customer details.</li><br />
                                                <li><b>Improve Sales Efficiency:</b> Track leads, manage sales pipelines, and automate repetitive tasks to boost your sales team's productivity.</li><br />
                                                <li><b>Enhance Customer Service:</b> Provide better customer support with complete customer history and interaction records at your fingertips.</li><br />
                                                <li><b>Make Data-Driven Decisions:</b> Generate insightful reports and analytics to understand customer behavior and make informed business decisions.</li><br />
                                                <li><b>Increase Revenue:</b> Identify upselling and cross-selling opportunities, improve customer retention, and ultimately drive more revenue.</li>
                                            </ul>

                                            <h5>Our CRM Development Services</h5>

                                            <p>
                                                As a leading <b><a href="https://digitalmarketingking.in/crm-software-development.php">CRM Software Development agency in Delhi</a></b>, we offer:
                                            </p>

                                            <ul>
                                                <li><b>Custom CRM Development:</b> We build CRM solutions tailored to your specific business processes and requirements.</li><br />
                                                <li><b>CRM Integration:</b> Seamlessly integrate your CRM with existing business applications like email, accounting software, and marketing tools.</li><br />
                                                <li><b>Cloud-Based CRM:</b> Access your CRM from anywhere with our secure cloud-based solutions.</li><br />
                                                <li><b>Mobile CRM:</b> Manage customer relationships on-the-go with our mobile-responsive CRM applications.</li><br />
                                                <li><b>CRM Customization:</b> Modify and enhance existing CRM systems to better suit your evolving business needs.</li><br />
                                                <li><b>CRM Migration:</b> Safely migrate your data from legacy systems to modern CRM platforms.</li>
                                            </ul>

                                            <h5>Key Features of Our CRM Software</h5>

                                            <ul>
                                                <li><b>Contact Management:</b> Comprehensive customer profiles with complete interaction history</li><br />
                                                <li><b>Lead Management:</b> Track and nurture leads through the entire sales funnel</li><br />
                                                <li><b>Sales Pipeline Management:</b> Visualize and manage your sales process effectively</li><br />
                                                <li><b>Task & Activity Management:</b> Schedule and track follow-ups, meetings, and tasks</li><br />
                                                <li><b>Email Integration:</b> Send and track emails directly from the CRM</li><br />
                                                <li><b>Reporting & Analytics:</b> Generate customizable reports and dashboards</li><br />
                                                <li><b>Workflow Automation:</b> Automate routine tasks and business processes</li><br />
                                                <li><b>Multi-Channel Communication:</b> Manage customer interactions across email, phone, chat, and social media</li>
                                            </ul>

                                            <h5>Why Choose Digital Marketing King?</h5>

                                            <p>
                                                <b><a href="https://digitalmarketingking.in/">Digital Marketing King</a></b> has extensive experience in delivering successful CRM solutions across various industries. We combine technical expertise with business acumen to create CRM software that truly transforms your customer relationship management.
                                            </p>

                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials & Contact Form Section */}
                <section id="tw-testimonial" className="tw-testimonial">
                    <div className="container">
                        <div className="row align-items-center">
                            {/* Testimonials Left Side */}
                            <div className="col-md-6 wow fadeInLeft" data-wow-duration="1s">
                                <div className="tw-testimonial-content text-center">
                                    <h2 className="section-title">Review From Clients</h2>
                                    <span className="animate-border border-green tw-mt-20 tw-mb-40 ml-auto mr-auto"></span>
                                </div>
                                <div className="tw-testimonial-carousel owl-carousel">
                                    {testimonials.map((testimonial, index) => (
                                        <div key={index} className="tw-testimonial-wrapper">
                                            <div className="testimonial-bg testimonial-bg-orange">
                                                <div className="testimonial-icon">
                                                    <img src={testimonialIcon} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="testimonial-text">
                                                <p>{testimonial.text}</p>
                                                <div className="testimonial-meta">
                                                    <h4>
                                                        {testimonial.name} <small>{testimonial.company}</small>
                                                    </h4>
                                                    <i className="fa fa-quote-right" style={{ fontSize: '36px', color: '#fec658', opacity: 0.8 }}></i>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Form Right Side */}
                            <div className="col-md-6 wow fadeInRight" data-wow-duration="1s">
                                <div className="login-form box-shadow white-bg p-4 p-md-3 text-center">
                                    <div className="tw-testimonial-content text-center">
                                        <h2 className="section-title myquiiee">Connect with our Digital Marketing Experts</h2>
                                        <span className="animate-border border-green tw-mt-20 tw-mb-40 ml-auto mr-auto"></span>
                                    </div>
                                    <form method="post" onSubmit={handleContactSubmit}>
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
                                                        style={{ backgroundColor: '#fff', border: '2px solid #fec658' }}
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
                                                        style={{ backgroundColor: '#fff', border: '2px solid #fec658' }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="contact"
                                                        pattern="[1-9]{1}[0-9]{9}"
                                                        placeholder="Mobile No."
                                                        value={contactFormData.contact}
                                                        onChange={handleContactFormChange}
                                                        required
                                                        style={{ backgroundColor: '#fff', border: '2px solid #fec658' }}
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
                                                        style={{ backgroundColor: '#fff', border: '2px solid #fec658' }}
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
                                                        style={{ backgroundColor: '#fff', border: '2px solid #fec658' }}
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
                                                    cols="40"
                                                    placeholder="Descriptions"
                                                    value={contactFormData.message}
                                                    onChange={handleContactFormChange}
                                                    style={{ backgroundColor: '#fff', border: '2px solid #fec658' }}
                                                />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-secondary submi-btn" style={{ marginRight: '10px', display: 'inline-block' }}>
                                            <span>Submit Now</span>
                                        </button>
                                        <Link to="/contact" className="btn btn-secondary mw-80 no-shadows" style={{ display: 'inline-block', textDecoration: 'none' }}>
                                            Write A Review..
                                        </Link>
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
                                                    <span className="text-white"> with India's Leading Digital Marketing Company</span>
                                                </h2>
                                                <p className="text-white">
                                                    We design solution to perform with Excellence and Technical Upgradation.
                                                    Our Products and Digital marketing Services are laced with rich experience
                                                    of our company which makes your projects failure proof.
                                                </p>
                                            </div>
                                            <div className="col-lg-2 col-md-12 no-padding">
                                                <div className="form-group">
                                                    <Link to="/contact" className="btn btn-secondary mw-80 no-shadows">
                                                        Let's Talk
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default CrmSoftwareDevelopment;
