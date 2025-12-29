import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Import banner image
import banner5 from '../../assets/images/banner/banner5.jpg';
import testimonialIcon from '../../assets/images/icon-image/testimonial1.png';

// Use image URL from the actual website
const newsPortalDevImage = 'https://www.digitalmarketingking.in/img/dm/news-portal-development-company-in-delhi.webp';

const NewsPortalDevelopment = () => {
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
                <title>News Portal Development Company in Delhi</title>
                <meta name="description" content="Digital Marketing King is a professional News Portal Development Company in Delhi, India. We create feature-rich news portal websites. Contact us now!" />
            </Helmet>

            <div className="news-portal-development-page">
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
                                    <h1 className="banner-title">News Portal Development</h1>
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
                                        <h2>Digital Marketing King: Professional News Portal Development Company In Delhi!</h2>
                                        <div className="entry-content">
                                            <img className="entry-img" alt="Best News Portal Development Company in Delhi" src={newsPortalDevImage} />

                                            <p>
                                                In the digital age, news consumption has shifted dramatically from traditional print media to online platforms. A well-designed news portal can help you reach millions of readers instantly and establish your brand as a credible news source. <b><a href="https://digitalmarketingking.in/news-portal-development.php">News Portal Development Service in Delhi</a></b> by Digital Marketing King offers comprehensive solutions to create powerful, feature-rich news portals that engage readers and drive traffic.
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

                                            <h5>Why Choose Our News Portal Development Services?</h5>

                                            <p>
                                                <b><a href="https://digitalmarketingking.in/">Digital Marketing King</a></b> is a leading <b><a href="https://digitalmarketingking.in/news-portal-development.php">News Portal Development company in Delhi</a></b> with extensive experience in building news portals for various media organizations, journalists, and content creators. Here's why you should choose us:
                                            </p>

                                            <ul>
                                                <li><b>Custom Design:</b> We create unique, visually appealing designs that reflect your brand identity and appeal to your target audience.</li><br />
                                                <li><b>Content Management System:</b> Easy-to-use CMS that allows you to publish, edit, and manage news articles effortlessly.</li><br />
                                                <li><b>Multi-Category Organization:</b> Organize news into multiple categories, sections, and tags for better user navigation.</li><br />
                                                <li><b>SEO Optimization:</b> Built-in SEO features to ensure your news articles rank well on search engines and drive organic traffic.</li><br />
                                                <li><b>Responsive Design:</b> Fully responsive portals that work seamlessly across all devices and screen sizes.</li>
                                            </ul>

                                            <h5>Key Features of Our News Portal</h5>

                                            <ul>
                                                <li><b>Breaking News Alerts:</b> Push notifications and alerts to keep readers updated with the latest news</li><br />
                                                <li><b>Article Management:</b> Comprehensive article publishing system with scheduling, drafts, and version control</li><br />
                                                <li><b>Multimedia Support:</b> Integration of images, videos, audio, and interactive media in articles</li><br />
                                                <li><b>User Comments & Engagement:</b> Enable reader interaction through comments, ratings, and social sharing</li><br />
                                                <li><b>Advertisement Management:</b> Built-in ad management system to monetize your news portal</li><br />
                                                <li><b>Analytics & Reporting:</b> Track article performance, user engagement, and traffic statistics</li><br />
                                                <li><b>Social Media Integration:</b> Automatic sharing to social media platforms for wider reach</li><br />
                                                <li><b>Multi-Language Support:</b> Publish news in multiple languages to reach diverse audiences</li><br />
                                                <li><b>Live News Feed:</b> Real-time news updates and live streaming capabilities</li>
                                            </ul>

                                            <h5>Advantages of News Portal Development</h5>

                                            <p>
                                                Our <b><a href="https://digitalmarketingking.in/news-portal-development.php">News Portal Development agency in Delhi</a></b> helps you leverage these advantages:
                                            </p>

                                            <ul>
                                                <li><b>Anytime Service:</b> Your news portal is accessible 24/7, allowing readers to stay informed at their convenience.</li><br />
                                                <li><b>Better Audience Engagement:</b> Interactive features like comments, polls, and social sharing encourage active reader participation.</li><br />
                                                <li><b>Prompt Phone Updates & Alerts:</b> Mobile-optimized design and push notifications ensure your readers never miss important news.</li><br />
                                                <li><b>Revenue Generation:</b> Multiple monetization options including display ads, sponsored content, and subscriptions.</li><br />
                                                <li><b>Global Reach:</b> Break geographical barriers and reach readers across the world instantly.</li><br />
                                                <li><b>Real-Time Updates:</b> Publish breaking news instantly without waiting for print deadlines.</li>
                                            </ul>

                                            <h5>Our Development Process</h5>

                                            <p>
                                                At <b><a href="https://digitalmarketingking.in/">Digital Marketing King</a></b>, we follow a systematic approach:
                                            </p>

                                            <ul>
                                                <li><b>Requirement Analysis:</b> We understand your news portal requirements, target audience, and content strategy.</li><br />
                                                <li><b>Design & Prototyping:</b> Create wireframes and design prototypes for your approval.</li><br />
                                                <li><b>Development:</b> Build your news portal using the latest technologies and best practices.</li><br />
                                                <li><b>Content Migration:</b> If you have existing content, we'll help migrate it to your new portal.</li><br />
                                                <li><b>Testing:</b> Rigorous testing to ensure flawless functionality and performance.</li><br />
                                                <li><b>Launch & Training:</b> Deploy your portal and train your team on content management.</li><br />
                                                <li><b>Ongoing Support:</b> Continuous maintenance and technical support.</li>
                                            </ul>

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

export default NewsPortalDevelopment;
