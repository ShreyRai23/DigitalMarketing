import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { api } from '../../utils/api';

const SearchEngineOptimization = () => {
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
                <title>Best SEO Company in Delhi | Digital Marketing King</title>
                <meta name="description" content="Are You Looking For Reliable and Affordable SEO Service Provider in Delhi?. Digital Marketing King is Best Seo Company in Delhi. let's Discuss Your Project Now." />
                <link rel="canonical" href="https://www.digitalmarketingking.in/search-engine-optimization.php" />
            </Helmet>

            {/* Banner Area */}
            <div id="banner-area" className="banner-area" style={{ backgroundImage: 'url(https://www.digitalmarketingking.in/images/banner/banner5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '100px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="banner-heading">
                                <h1 className="banner-title">Seo Company in Delhi</h1>
                                <ol className="breadcrumb">
                                    <li>Home</li>
                                    <li><a href="/services/digital-marketing">Digital Marketing</a></li>
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
                                                <a href="https://api.whatsapp.com/send?phone=919910075663&text=Hey%20there" target="_blank" rel="noopener noreferrer" className="blog-category-call-whatapp">WhatsApp us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="post-body">
                                    <h2>Digital Marketing King: An Organic Marketing That Your Business Requires!</h2>
                                    <div className="entry-content">
                                        <img className="entry-img" alt="SEO Company in Delhi" src="https://www.digitalmarketingking.in/img/dm/seo-company-in-delhi.webp" />

                                        <p>Are you also the one hunting for organic marketing for your website ranking? Does the cut-throat competition in today's marketplace bother your business growth? Have you recently start-up your business or are looking for <b><a href="https://digitalmarketingking.in/blog/top-5-seo-company-in-delhi">top SEO experts</a></b> to help you gain prompt website optimization? Well, if your answer to all the above mentioned questions is affirmative, you've certainly turned up the right page.</p>

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

                                        <p>Digital Marketing King is a well-established SEO agency in Delhi, catering to all unique yet custom requirements of clients globally. With comprehensive IT business solutions at their best, we are recognized in the industry for splendid SEO-friendly work. If you seek to join hands with a popular, certified and experienced SEO company, we would be more than happy to assist you.</p>

                                        <h5>What is SEO?</h5>
                                        <p>SEO stands for Search Engine Optimization, which is a technical procedure to drive extensive yet organic traffic to a website and eventually improve its ranking on Google and other search channels. There are a lot of the <b><a href="https://digitalmarketingking.in/blog/top-5-seo-company-in-delhi">best SEO marketing companies</a></b> which deliver off-page optimization and cheap SEO packages to boost your brand visibility in the market. Before choosing any SEO marketing packages, it is advisable to profoundly and intensely understand what SEO is and how an SEO services provider could change your business presence and productivity.</p>

                                        <p>SEO basically helps a website to gain immense popularity with technical configuration by making it easily available for its target audience. It encompasses some technical work and software to target the customers with the right keyword by delivering relevant content as per their search queries. Search engine optimization services also result in website optimization and link popularity of a business page to benefit both the user and the business owner. With featured content, our SEO specialist will fulfill your web visitors' needs, ultimately rendering a better user experience for them.</p>

                                        <h5>Top 4 Types Of SEO That We Perform: </h5>
                                        <p>Google SEO is a major of four types. Digital Marketing King is a top-notch SEO specialist in Delhi and comparatively one of the <b><a href="https://digitalmarketingking.in/search-engine-optimization.php">best SEO companies for small business</a></b>. We perform all four types of SEO required for your recent start-up or already expanded business. By picking the most selective marketing strategy, and helping your customers navigate the business easily, our ultimate goal is to enhance your business's ROI and conversions. Here are four types which SEO services are divided into and each single type plays a significant role in your website SEO optimization and boosting its visibility of Search Engine Result Pages (SERPs).</p>

                                        <ul>
                                            <li><b>On-Page SEO:</b> The first SEO type is On-Page SEO. It is a standard yet mandatory aspect to boost a business site presence and is effortless in comparison to other types. It involves professional SEO services for web optimization by adding the right keywords in the meta titles and building appropriate backlinks for users' easy & quick navigation to the website. Typically, the prominent purpose of on-page SEO is to familiarize your audience with your offerings and it can be easily obtained by hiring the best SEO agency, such as Digital Marketing King.</li>
                                            <li><b>Off-Page SEO:</b> We're a trusted SEO consultant in the industry who employs seamless marketing and promotion methods to entice your target audience. Our off-page SEO encompasses all those activities that are taking place off the website or away from the site. The significant objective of Off-page SEO is to make your business site reliable and competent in front of your customers for better reach and connectivity. It, directly and indirectly, informs users via different search engines that your business webpage is reliable and useful. Ultimately, our search engine optimisation consultants help you boost your brand visibility with greater attention, top ranking, immense traffic and much credibility.</li>
                                            <li><b>Local SEO:</b> Having an offline or physical store is perfect for Local SEO. Because it involves targeting the local audience or customers of a specific region. The localization technique proves worthwhile when your audience can access it via the "near me" keyword while putting their query on search engines. Unlike on-page SEO, Local SEO is not done on a domestic or international level. Overall, Local SEO helps to boost the brand reputation in the market, especially for local brands. For flawless SEO service in Delhi, Digital Marketing King is always a fruitful decision.</li>
                                            <li><b>Technical SEO:</b> The last but not the least essential SEO type of Technical SEO, which is also known as the base of optimization. We are an adept SEO advertising company which performs the technical SEO initially while creating your website. Some of the crucial aspects such as web architecture, crawling, indexing, serving, etc., are covered under Technical SEO. From maintaining every step of the website to identifying the potential errors and fixing all of them right away lies in our expertise. Choosing our friendly SEO packages will definitely meet all your business requirements splendidly.</li>
                                        </ul>

                                        <h5>Why Choose Digital Marketing King For SEO Services? </h5>
                                        <p>Well, there are many reasons which make us feel grateful for being the ideal <b><a href="https://digitalmarketingking.in/search-engine-optimization.php">SEO services provider</a></b>. A few of them are stated below. </p>

                                        <ul>
                                            <li><b>Improved User Experience:</b> To diminish your website's bounce rates, we perform organic search engine optimization to identify the major reasons behind your webpage's lagging. Our SEO expert in Delhi will closely evaluate and make adjustments to your website to improve the overall user experience of your customers.</li>
                                            <li><b>Quality Backlinks:</b> The building of backlinks is easy for some while difficult for those who only aim for its quality. Our SEO company in Delhi will strive to create quality backlinks for your business by creating excellent content, submitting guest posts to other networking, and adding your web links to popular search engine profiles.</li>
                                            <li><b>Website Optimization:</b> Explore our SEO services list for impeccable website optimization. We are a reliable SEO agency which performs different types of SEO, such as on-page SEO, WordPress SEO, Shopify SEO, and so on to drive huge traffic on your website. Lastly, make it popular among your audience by improving its ranking on Google and other search channels. </li>
                                            <li><b>Keyword Analysis:</b> Digital Marketing King is recognized as the right SEO services provider in Delhi for in-depth and apt SEO keywords. You can join hands with us, the optimal SEO consultant in Delhi to obtain a competitive strategy for the appropriate keyword research, analysis and identification. </li>
                                        </ul>
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

export default SearchEngineOptimization;
