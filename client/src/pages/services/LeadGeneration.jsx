import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const LeadGeneration = () => {
    const [formData, setFormData] = useState({ name: '', mobile: '', service: '' });
    const [contactFormData, setContactFormData] = useState({
        username: '', company: '', contact: '', email: '', service: '', message: ''
    });

    useEffect(() => {
        if (window.$ && window.$.fn.owlCarousel) {
            window.$('.tw-testimonial-carousel').owlCarousel({ loop: true, margin: 10, nav: false, dots: true, autoplay: true, autoplayTimeout: 5000, responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } } });
        }
    }, []);

    const handleQuickFormSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted! We will contact you soon.');
        setFormData({ name: '', mobile: '', service: '' });
    };

    const handleContactFormSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! We will get back to you shortly.');
        setContactFormData({ username: '', company: '', contact: '', email: '', service: '', message: '' });
    };

    return (
        <>
            <Helmet>
                <title>Lead Generation Services in Delhi | Digital Marketing King</title>
                <meta name="description" content="Digital Marketing King is eminent and best Lead Generation Agency in Delhi, India. Get a Best Lead Generation Service in Delhi. let's Discuss Your Project Now." />
                <link rel="canonical" href="https://www.digitalmarketingking.in/lead-generation.php" />
            </Helmet>

            <div id="banner-area" className="banner-area" style={{ backgroundImage: 'url(https://www.digitalmarketingking.in/images/banner/banner5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '100px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="banner-heading">
                                <h1 className="banner-title">Lead Generation Services</h1>
                                <ol className="breadcrumb">
                                    <li>Home</li>
                                    <li><a href="/services/digital-marketing">Digital Marketing</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="r-bg-x sec-pad">
                <div className="container">
                    <div className="ree new_bar">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="cta-heading-2 bx11">
                                    <img src="https://www.digitalmarketingking.in/img/dm/lead-generation-service-in-delhi.webp" className="img-fluid" alt="Lead Generation" />
                                    <h2>Lead Generation Services</h2>

                                    <div className="contact-form-wrapper1 d-flex justify-content-center">
                                        <form onSubmit={handleQuickFormSubmit} className="contact-form1">
                                            <h5 className="title">Connect with </h5>
                                            <p className="description">Schedule A Call</p>
                                            <div><input type="text" className="form-control1" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Name" required /></div>
                                            <div><input type="text" className="form-control1" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} placeholder="Mobile Number" maxLength="12" required /></div>
                                            <div><input type="text" className="form-control1" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} placeholder="Service" required /></div>
                                            <div className="submit-button-wrapper"><input type="submit" value="Submit" /></div>
                                        </form>
                                    </div>

                                    <p>Digital Marketing King leads generation services offer you increased number of targeted and qualified leads in B2B and B2C markets. In the world of digital marketing service, lead generation company can serve as your first step to get closer to the customer, based on the interest or inquiry of the products/services shown by them. Digital Marketing King helps in providing pay per lead services to help in growth of online businesses, either through paid promotions or organic optimisation of the website or service.</p>

                                    <p>Leads generation, being the first step in bringing customers to the company, is why it is paid great attention. The team helps in generating leads for the company to get more customers and the CRM team will convert those leads into customers. The campaigns used for generating leads are conceptualised by our team who implements them to gain validated leads.The qualified leads are then delivered to the clients or their marketing/sales manager through emails.</p>

                                    <p>The leads provided by Digital Marketing King are generated through unique web platforms owned and managed by Digital Marketing King. The leads go through a process of manual verification and qualification filter as per the BANT or other criteria set up at the start of campaign. All leads delivered by Digital Marketing King are guaranteed to be manually validated and with a genuine requirement. Digital Marketing King's support team offers consultation and clients can ask for replacement of leads on their leads panel.</p>

                                    <p>Contact us 24*7. We are open with our customer support at any time. You can Drop us an e-mail at info@digitalmarketingking.in, Call at +91-9625505071</p>
                                </div>
                            </div>

                            {/* Sidebar */}
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

            <section id="tw-testimonial" className="tw-testimonial">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 wow fadeInLeft" data-wow-duration="1s">
                            <div className="tw-testimonial-content text-center">
                                <h2 className="section-title">Review From Clients</h2>
                                <span className="animate-border border-green tw-mt-20 tw-mb-40 ml-auto mr-auto"></span>
                            </div>
                            <div className="tw-testimonial-carousel owl-carousel">
                                <div className="tw-testimonial-wrapper"><div className="testimonial-bg testimonial-bg-orange"><div className="testimonial-icon"><img src="https://www.digitalmarketingking.in/images/icon-image/testimonial1.png" alt="" className="img-fluid" /></div></div><div className="testimonial-text"><p>I already had one website which was not SEO-friendly and also not properly designed. It all started when I gave my project to one novice web designing company but this time, I'm out of words to express my gratitude to Digital Marketing King for such creative, apt and excellent work done just the way I wanted.</p><div className="testimonial-meta"><h4>Rahul Mittal <small>CEO Disha Fashion</small></h4><i className="icon icon-quote2"></i></div></div></div>
                                <div className="tw-testimonial-wrapper"><div className="testimonial-bg testimonial-bg-orange"><div className="testimonial-icon"><img src="https://www.digitalmarketingking.in/images/icon-image/testimonial1.png" alt="" className="img-fluid" /></div></div><div className="testimonial-text"><p>A heartfelt thanks to Digital Marketing King for bringing immense traffic, high ranking, boosted visibility and greater sales to my business.</p><div className="testimonial-meta"><h4>Kamal <small>CEO kamal Fine Art Institute</small></h4><i className="icon icon-quote2"></i></div></div></div>
                                <div className="tw-testimonial-wrapper"><div className="testimonial-bg testimonial-bg-orange"><div className="testimonial-icon"><img src="https://www.digitalmarketingking.in/images/icon-image/testimonial1.png" alt="" className="img-fluid" /></div></div><div className="testimonial-text"><p>Digital Marketing King is truly a King organization. Thanks for building a competent website for my business.</p><div className="testimonial-meta"><h4>Mohd. Arif <small>CEO Zoya Clothing</small></h4><i className="icon icon-quote2"></i></div></div></div>
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
                                        <div className="col-md-6"><div className="form-group"><input type="text" className="form-control" value={contactFormData.username} onChange={(e) => setContactFormData({ ...contactFormData, username: e.target.value })} placeholder="Name" required /></div></div>
                                        <div className="col-md-6"><div className="form-group"><input type="text" className="form-control" value={contactFormData.company} onChange={(e) => setContactFormData({ ...contactFormData, company: e.target.value })} placeholder="Company Name" required /></div></div>
                                        <div className="col-md-6"><div className="form-group"><input type="text" className="form-control" value={contactFormData.contact} onChange={(e) => setContactFormData({ ...contactFormData, contact: e.target.value })} pattern="[1-9]{1}[0-9]{9}" placeholder="Mobile No." required /></div></div>
                                        <div className="col-md-6"><div className="form-group"><input type="email" className="form-control" value={contactFormData.email} onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })} placeholder="Email Address" required /></div></div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <select className="form-control" value={contactFormData.service} onChange={(e) => setContactFormData({ ...contactFormData, service: e.target.value })}>
                                                    <option>Select Service</option>
                                                    <option>Lead Generation</option>
                                                    <option>Search Engine Optimization</option>
                                                    <option>Others</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <textarea className="form-control" rows="4" value={contactFormData.message} onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })} placeholder="Descriptions"></textarea>
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

            <section id="tw-analysis" className="tw-analysis-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 text-center wow fadeInDown">
                            <div className="analysis-form">
                                <form className="form-vertical">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10 col-md-12 no-padding">
                                            <h2 className="column-title">Boost Your Brand Presence <span className="text-white">with India's Leading Digital Marketing Company</span></h2>
                                            <p className="text-white">We design solution to perform with Excellence and Technical Upgradation.</p>
                                        </div>
                                        <div className="col-lg-2 col-md-12 no-padding">
                                            <div className="form-group"><a href="/contact" className="btn btn-secondary mw-80 no-shadows">Let's Talk</a></div>
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

export default LeadGeneration;
