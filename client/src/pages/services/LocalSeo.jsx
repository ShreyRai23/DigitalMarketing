import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../../styles/service-mobile.css';

const LocalSeo = () => {
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

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!');
    };

    const handleContactFormSubmit = (e) => {
        e.preventDefault();
        alert('Contact form submitted!');
    };

    return (
        <>
            <Helmet>
                <title>Local SEO Services in Delhi | Digital Marketing King</title>
                <meta name="description" content="Get best Local SEO services in Delhi, India. Digital Marketing King provides Local SEO optimization to boost your local business visibility." />
                <link rel="canonical" href="https://www.digitalmarketingking.in/local-seo.php" />
            </Helmet>

            <div id="banner-area" className="banner-area" style={{ backgroundImage: 'url(https://www.digitalmarketingking.in/images/banner/banner5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '100px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="banner-heading">
                                <h1 className="banner-title">Local SEO Services</h1>
                                <ol className="breadcrumb">
                                    <li>Home</li>
                                    <li><a href="#">Digital Marketing</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="r-bg-x sec-pad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="cta-heading-2 bx11">
                                <img src="https://www.digitalmarketingking.in/img/dm/local-seo-services-in-delhi.webp" className="img-fluid" alt="Local SEO" />
                                <h2>Local SEO</h2>

                                <div className="contact-form-wrapper1 d-flex justify-content-center">
                                    <form onSubmit={handleFormSubmit} className="contact-form1">
                                        <h5 className="title">Connect with </h5>
                                        <p className="description">Schedule A Call</p>
                                        <div><input type="text" className="form-control1" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Name" required /></div>
                                        <div><input type="text" className="form-control1" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} placeholder="Mobile Number" maxLength="12" required /></div>
                                        <div><input type="text" className="form-control1" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} placeholder="Service" required /></div>
                                        <div className="submit-button-wrapper"><input type="submit" value="Submit" /></div>
                                    </form>
                                </div>

                                <p>Search trends are changing with the advancement in the globalization of map results and local listing. Search engines are trying to provide more localized results and a person is more likely to contact a nearby product or service provider rather than a far one.</p>

                                <p>Around 40% of all searches on Google are local searches. For example, if a person searches best salon and if he is in Delhi, then he will prefer the result based in Delhi only. He will not contact a salon in Mumbai. So if a website ranks on local searches then there is a high possibility of relevant traffic and more conversions. So, if you are not found on local searches you are missing a lot of business. It has also been observed that more and more traffic going to websites like Justdial because people can easily find the local results. Local listing and map results in search engines are also a very good option for bringing local traffic to your website.</p>

                                <p>Digital Marketing King is an expert agency in local SEO services. If you are looking for Local SEO companies, get in touch with our consultants today for more information. We will not only optimize your website in Google business listing and maps but also in organic results. Our team of experts will analyze your product and services and fabricate search terms with a high possibility of a buyer to search.</p>

                                <p>The local SEO service is a method to attract the local audience to your business. Local SEO is a part of Search Engine Optimization, wherein the website of the organization or a business is optimized so as to reflect in the local searches done on the search engine by the users. To get the maximum profits from the digital platform, it is very important to remain visible in potential searches done by the targeted audience. The benefits of the local SEO strategies could be availed by anyone, including the service providers like plumbers to car service station. We at Digital Marketing King are the experts in terms of offering the affordable local SEO services to our clients with the main focus of giving them the visibility in front of their local audience. The local traffic plays a major role in boosting the sales of any business. We, as a local SEO company, are the top players in this field. With our years of experience and the team of qualified professionals, we reach out the customers of our clients who usually look out for the service providers at their neighboring areas.</p>

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
                                        <p>A heartfelt thanks to Digital Marketing King for bringing immense traffic, high ranking, boosted visibility and greater sales to my business. Indeed, their Search Engine Optimization services are a boon for multiple leading IT firms and businesses.</p>
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
                                        <p>Digital Marketing King is truly a King organization. Thanks for building a competent website for my business. I like the work and appreciate the team's coordinative effort.</p>
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
                                                <input type="text" name="username" className="form-control" placeholder="Name" value={contactFormData.username} onChange={(e) => setContactFormData({ ...contactFormData, username: e.target.value })} required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="company" placeholder="Company Name" value={contactFormData.company} onChange={(e) => setContactFormData({ ...contactFormData, company: e.target.value })} required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="tel" className="form-control" name="contact" placeholder="Mobile No." value={contactFormData.contact} onChange={(e) => setContactFormData({ ...contactFormData, contact: e.target.value })} required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" placeholder="Email Address" value={contactFormData.email} onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })} required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <select name="service" className="form-control" value={contactFormData.service} onChange={(e) => setContactFormData({ ...contactFormData, service: e.target.value })}>
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
                                            <textarea className="form-control" name="message" rows="4" placeholder="Descriptions" value={contactFormData.message} onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}></textarea>
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
            </section >

            {/* CTA Section */}
            < section id="tw-analysis" className="tw-analysis-area" >
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
            </section >
        </>
    );
};

export default LocalSeo;
