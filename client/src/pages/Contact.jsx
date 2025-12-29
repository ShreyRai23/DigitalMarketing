import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Import banner image
import banner5 from '../assets/images/banner/banner5.jpg';

const Contact = () => {
    const [formData, setFormData] = useState({
        username: '',
        company: '',
        contact: '',
        email: '',
        service: 'Select Service',
        message: ' Descriptions'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };

    const stats = [
        { icon: 'fa-users', title: 'Active clients', count: '200', suffix: '+' },
        { icon: 'fa-briefcase', title: 'Projects Done', count: '570', suffix: '+' },
        { icon: 'fa-line-chart', title: 'Success Rate', count: '98', suffix: '%' },
        { icon: 'fa-trophy', title: 'Awards', count: '50', suffix: '+' }
    ];

    return (
        <>
            <Helmet>
                <title>Contact Us | Digital Marketing King</title>
                <meta name="description" content="In this page you are Going to find contact details of Digital Marketing King. You May Contact Digital Marketing King Via Contact Details Avaiable on this section" />
            </Helmet>

            <div className="contact-page">
                {/* Banner Area */}
                <div
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
                            <div className="col-sm-12 text-center">
                                <div className="banner-heading">
                                    <h1 className="banner-title" style={{ fontSize: '42px' }}>Contact us</h1>
                                    <ol className="breadcrumb justify-content-center" style={{ background: 'transparent' }}>
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Contact us</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form and Info Section */}
                <section id="tw-testimonial">
                    <div className="container">
                        <div className="row align-items-center">
                            {/* Contact Form - Left Side */}
                            <div className="col-md-6 wow fadeInRight" data-wow-duration="1s">
                                <div className="login-form box-shadow white-bg p-4 p-md-3 text-center">
                                    <div className="tw-testimonial-content text-center">
                                        <h2 className="section-title myquiiee">Let's Lalk About Your Idea</h2>
                                        <span className="animate-border border-green tw-mt-20 tw-mb-40 ml-auto mr-auto"></span>
                                    </div>
                                    <form method="post" onSubmit={handleSubmit} id="my_captcha_form">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        className="form-control"
                                                        placeholder="Name"
                                                        value={formData.username}
                                                        onChange={handleChange}
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
                                                        value={formData.company}
                                                        onChange={handleChange}
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
                                                        value={formData.contact}
                                                        onChange={handleChange}
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
                                                        value={formData.email}
                                                        onChange={handleChange}
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
                                                        value={formData.service}
                                                        onChange={handleChange}
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
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    style={{ backgroundColor: '#fff', border: '2px solid #fec658' }}
                                                />
                                            </div>
                                        </div>
                                        <button type="submit" name="adding" value="add" className="btn btn-secondary submi-btn">
                                            <span>Submit Now</span>
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Contact Info - Right Side */}
                            <div className="col-md-6 wow fadeInLeft" data-wow-duration="1s">
                                <div className="tw-contact-box">
                                    <div className="contact-heading">
                                        <i className="fa fa-building" style={{ fontSize: '40px', color: '#fec658' }}></i>
                                        <h3>Digital Marketing King</h3>
                                    </div>
                                    <div className="contact-info-box-content">
                                        <i className="fa fa-phone"></i>
                                        <p><a href="tel:919910075663">+91-9910075663</a></p>
                                        <i className="fa fa-phone"></i>
                                        <p><a href="tel:918130253578">+91-8130253578</a></p>
                                        <i className="fa fa-whatsapp"></i>
                                        <p>
                                            <a href="https://api.whatsapp.com/send/?phone=919910075663&text=Let%27s+Discuss+my+Requirement&type=phone_number&app_absent=0">
                                                +91-9910075663
                                            </a>
                                        </p>
                                        <i className="fa fa-envelope"></i>
                                        <p><a href="mailto:info@digitalmarketingking.in">info@digitalmarketingking.in</a></p>
                                        <i className="fa fa-map-marker"></i>
                                        <p>
                                            Right Side Wing 3rd Floor, Raj Hospital Pillar No. 779 Dwarka Mor Metro Station,
                                            Dwarka Mor 110059, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats/Facts Section */}
                <section id="tw-facts" className="tw-facts">
                    <div className="container">
                        <div className="row">
                            {stats.map((stat, index) => (
                                <div key={index} className="col-md-3 text-center">
                                    <div className="tw-facts-box">
                                        <div className="facts-img wow zoomIn" data-wow-duration="1s">
                                            <i
                                                className={`fa ${stat.icon}`}
                                                style={{ fontSize: '60px', color: '#fec658' }}
                                            ></i>
                                        </div>
                                        <div className="facts-content wow fadeInUp" data-wow-duration="1s">
                                            <h4 className="facts-title">{stat.title}</h4>
                                            <span className="counter">{stat.count}</span>
                                            <sup>{stat.suffix}</sup>
                                        </div>
                                    </div>
                                </div>
                            ))}
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

export default Contact;
