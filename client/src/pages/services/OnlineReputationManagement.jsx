import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../../styles/service-mobile.css';

const OnlineReputationManagement = () => {
    const [formData, setFormData] = useState({ name: '', mobile: '', service: '' });
    const [contactFormData, setContactFormData] = useState({
        username: '', company: '', contact: '', email: '', service: '', message: ''
    });

    useEffect(() => {
        if (window.$ && window.$.fn.owlCarousel) {
            window.$('.tw-testimonial-carousel').owlCarousel({ loop: true, margin: 10, nav: false, dots: true, autoplay: true, autoplayTimeout: 5000, responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } } });
        }
    }, []);

    const handleFormSubmit = (e) => { e.preventDefault(); alert('Form submitted!'); };
    const handleContactFormSubmit = (e) => { e.preventDefault(); alert('Contact form submitted!'); };

    return (
        <>
            <Helmet>
                <title>Online Reputation Management Services in Delhi | ORM Company</title>
                <meta name="description" content="Get best Online Reputation Management (ORM) services in Delhi. Protect and improve your online reputation with our expert ORM strategies." />
                <link rel="canonical" href="https://www.digitalmarketingking.in/orm.php" />
            </Helmet>

            <div id="banner-area" className="banner-area" style={{ backgroundImage: 'url(https://www.digitalmarketingking.in/images/banner/banner5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '100px' }}>
                <div className="container"><div className="row"><div className="col-sm-12"><div className="banner-heading"><h1 className="banner-title">Online Reputation Management</h1><ol className="breadcrumb"><li>Home</li><li><a href="#">Digital Marketing</a></li></ol></div></div></div></div>
            </div>

            <section className="r-bg-x sec-pad">
                <div className="container"><div className="row"><div className="col-lg-8"><div className="cta-heading-2 bx11">
                    <img src="https://www.digitalmarketingking.in/img/dm/online-reputation-management-company-in-delhi.webp" className="img-fluid" alt="Online Reputation Management" />
                    <h2>Online Reputation Management</h2>

                    <div className="contact-form-wrapper1 d-flex justify-content-center">
                        <form onSubmit={handleFormSubmit} className="contact-form1">
                            <h5 className="title">Connect with </h5><p className="description">Schedule A Call</p>
                            <div><input type="text" className="form-control1" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Name" required /></div>
                            <div><input type="text" className="form-control1" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} placeholder="Mobile Number" maxLength="12" required /></div>
                            <div><input type="text" className="form-control1" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} placeholder="Service" required /></div>
                            <div className="submit-button-wrapper"><input type="submit" value="Submit" /></div>
                        </form>
                    </div>

                    <p>Digital Marketing King is a leading Online Reputation Management company based in New Delhi, India. With the team of Best Digital Marketing professionals, Digital Marketing King help the companies to build, repair, manage and promote the Client's brand globally. Being the Best Online Reputation Defenders and profile Defenders firm, We provide tailor made solutions to the clients after analyzing their needs and requirements. Digital Marketing King is the Best ORM agency in Delhi, India.</p>

                    <p>The digital realm is full of chatter that surrounds your brand, whether it be customer feedback, news media or influencer content.

                        With Digital Marketing King's ORM capabilities, you can monitor and respond to customers on key social platforms and digital sources such as e-commerce sites or app review sections to help manage your brand's reputation in real-time. Engage with your customers, manage care teams, get reports & insights with Digital Marketing King's ORM platform.</p>

                    <p>Studying competitors, their customer-interactions and viewing what's being said about them is one of the most powerful ways of conducting effective online reputation management. Locobuzz's competition benchmarking abilities give you detailed insights on how competing brands operate and give you an edge to build your own strategic brand narrative. Digital Marketing King is a feature-rich & intuitive ORM platform to respond, engage, analyze & automate conversations.</p>

                    <p>Contact us 24*7. We are open with our customer support at any time. You can Drop us an e-mail at info@digitalmarketingking.in, Call at +91-9625505071</p>
                </div></div>

                    <div className="col-lg-4">
                        <div className="nav_menu bx11">
                            <h3>Let's Discuss Your Requirement</h3>
                            <span className="animate-border border-black"></span>
                            <ul className="sidebar">
                                <div className="mid-banfo" style={{ marginTop: '15px' }}>
                                    <div className="contact-form-wrapper1 d-flex justify-content-center">
                                        <form onSubmit={handleFormSubmit} className="contact-form1">
                                            <h5 className="title">Connect with our Digital Marketing Experts</h5>
                                            <p className="description">Schedule A Call</p>
                                            <div><input type="text" className="form-control1" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Name" required /></div>
                                            <div><input type="text" className="form-control1" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} placeholder="Mobile Number" maxLength="12" required /></div>
                                            <div><input type="text" className="form-control1" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} placeholder="Service" required /></div>
                                            <div className="submit-button-wrapper"><input type="submit" value="Submit" /></div>
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
            </section>

            <section id="tw-testimonial" className="tw-testimonial">
                <div className="container"><div className="row align-items-center">
                    <div className="col-md-6 wow fadeInLeft" data-wow-duration="1s">
                        <div className="tw-testimonial-content text-center"><h2 className="section-title">Review From Clients</h2><span className="animate-border border-green tw-mt-20 tw-mb-40 ml-auto mr-auto"></span></div>
                        <div className="tw-testimonial-carousel owl-carousel">
                            <div className="tw-testimonial-wrapper"><div className="testimonial-bg testimonial-bg-orange"><div className="testimonial-icon"><img src="https://www.digitalmarketingking.in/images/icon-image/testimonial1.png" alt="" className="img-fluid" /></div></div><div className="testimonial-text"><p>I already had one website which was not SEO-friendly and also not properly designed. It all started when I gave my project to one novice web designing company but this time, I'm out of words to express my gratitude to Digital Marketing King for such creative, apt and excellent work done just the way I wanted.</p><div className="testimonial-meta"><h4>Rahul Mittal <small>CEO Disha Fashion</small></h4><i className="icon icon-quote2"></i></div></div></div>
                            <div className="tw-testimonial-wrapper"><div className="testimonial-bg testimonial-bg-orange"><div className="testimonial-icon"><img src="https://www.digitalmarketingking.in/images/icon-image/testimonial1.png" alt="" className="img-fluid" /></div></div><div className="testimonial-text"><p>A heartfelt thanks to Digital Marketing King for bringing immense traffic, high ranking, boosted visibility and greater sales to my business.</p><div className="testimonial-meta"><h4>Kamal <small>CEO kamal Fine Art Institute</small></h4><i className="icon icon-quote2"></i></div></div></div>
                            <div className="tw-testimonial-wrapper"><div className="testimonial-bg testimonial-bg-orange"><div className="testimonial-icon"><img src="https://www.digitalmarketingking.in/images/icon-image/testimonial1.png" alt="" className="img-fluid" /></div></div><div className="testimonial-text"><p>Digital Marketing King is truly a King organization. Thanks for building a competent website for my business.</p><div className="testimonial-meta"><h4>Mohd. Arif <small>CEO Zoya Clothing</small></h4><i className="icon icon-quote2"></i></div></div></div>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeInRight" data-wow-duration="1s">
                        <div className="login-form box-shadow white-bg p-4 p-md-3 text-center">
                            <div className="tw-testimonial-content text-center"><h2 className="section-title myquiiee">Connect with our Digital Marketing Experts</h2><span className="animate-border border-green tw-mt-20 tw-mb-40 ml-auto mr-auto"></span></div>
                            <form onSubmit={handleContactFormSubmit}><div className="row">
                                <div className="col-md-6"><div className="form-group"><input type="text" name="username" className="form-control" placeholder="Name" value={contactFormData.username} onChange={(e) => setContactFormData({ ...contactFormData, username: e.target.value })} required /></div></div>
                                <div className="col-md-6"><div className="form-group"><input type="text" className="form-control" name="company" placeholder="Company Name" value={contactFormData.company} onChange={(e) => setContactFormData({ ...contactFormData, company: e.target.value })} required /></div></div>
                                <div className="col-md-6"><div className="form-group"><input type="tel" className="form-control" name="contact" placeholder="Mobile No." value={contactFormData.contact} onChange={(e) => setContactFormData({ ...contactFormData, contact: e.target.value })} required /></div></div>
                                <div className="col-md-6"><div className="form-group"><input type="email" className="form-control" name="email" placeholder="Email Address" value={contactFormData.email} onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })} required /></div></div>
                                <div className="col-md-12"><div className="form-group"><select name="service" className="form-control" value={contactFormData.service} onChange={(e) => setContactFormData({ ...contactFormData, service: e.target.value })}><option>Select Service</option><option>Website Designing</option><option>Web Development</option><option>E-Commerce Website</option><option>Web Application Development</option><option>Professional logo Designing</option><option>Social Media Optimization</option><option>Search Engine Optimization</option><option>Web Promotion</option><option>Others</option></select></div></div>
                                <div className="form-group col-md-12"><textarea className="form-control" name="message" rows="4" placeholder="Descriptions" value={contactFormData.message} onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}></textarea></div>
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
                </div></div>
            </section>

            <section id="tw-analysis" className="tw-analysis-area">
                <div className="container"><div className="row justify-content-center"><div className="col-md-10 text-center wow fadeInDown"><div className="analysis-form"><form className="form-vertical"><div className="row justify-content-center"><div className="col-lg-10 col-md-12 no-padding"><h2 className="column-title">Boost Your Brand Presence<span className="text-white">with India's Leading Digital Marketing Company</span></h2><p className="text-white">We design solution to perform with Excellence and Technical Upgradation. Our Products and Digital marketing Services are laced with rich experience of our company which makes your projects failure proof.</p></div><div className="col-lg-2 col-md-12 no-padding"><div className="form-group"><a href="/contact" className="btn btn-secondary mw-80 no-shadows">Let's Talk</a></div></div></div></form></div></div></div></div>
            </section>
        </>
    );
};

export default OnlineReputationManagement;
