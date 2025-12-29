import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Import banner image
import banner5 from '../../assets/images/banner/banner5.jpg';
import testimonialIcon from '../../assets/images/icon-image/testimonial1.png';

const StaticWebDesigning = () => {
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

    const handleContactSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form submitted:', contactFormData);
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
                <title>Static Website Designing Company in Delhi | Digital Marketing King</title>
                <meta name="description" content="Professional static website designing services in Delhi. Fast, secure, and affordable static web development solutions." />
            </Helmet>

            <div className="static-web-designing-page">
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
                                    <h1 className="banner-title">Static Website Designing Company in Delhi</h1>
                                    <ol className="breadcrumb" style={{ background: 'transparent' }}>
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active">Website Designing</li>
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
                                                        WHATSAPP US
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Body */}
                                    <div className="post-body">
                                        <h2>Key Benefits Of Choosing The Static Website Designing Services!</h2>
                                        <div className="entry-content">
                                            <p>
                                                These days, <b><a href="https://digitalmarketingking.in/static-website-designing.php">static website designing</a></b> is the trend and is used by various small-scale and large-group organizations in the IT world. When it comes to choosing web designing services, online business owners have two options to choose from. First is the static website designing Services and the second one is Dynamic web designing services. Both of these website design types have their unique benefits and fulfilment purposes. This guide will talk more about static web design and the ultimate benefits of choosing it.
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
                                                        <input type="submit" name="submit" value="SUBMIT" />
                                                    </div>
                                                </form>
                                            </div>

                                            <p>
                                                The <b><a href="https://digitalmarketingking.in/static-website-designing.php">static website designing service in Delhi</a></b> encompasses no scripting and technologies such as CSS & HTML. On the other hand, technologies used in Dynamic website designing involve Javascript, Python, PHP, and many more. Typically, people opt for static website design services for creating a potent website with mere changes in the future. Any editions that are supposed to be made in static web development require page-to-page editing, or considerable manual efforts and time. Let us dig into its benefits and the reasons to choose this over dynamic web designing.
                                            </p>

                                            <h5>Why Choose A Static Website Design?</h5>
                                            <ul>
                                                <li>
                                                    <b>Speed:</b> When it comes to speed and quickness, static websites run way faster than dynamic ones because they are catered from the node nearest to the browser. Also, it obligates the entry of databases which makes them load in bare moments. That's why hiring a <b><a href="https://digitalmarketingking.in/static-website-designing.php">static website designing Company</a></b> is a must for you.
                                                </li><br />
                                                <li>
                                                    <b>Protection:</b> Another reason you should consult a static website development company right today is because of a static website's incredible safety and security. Yes, these websites are way more safer and protected in comparison to the dynamic ones because they don't involve intermediaries and thus the risk of code infusion is little to no in static websites.
                                                </li><br />
                                                <li>
                                                    <b>Technological Upliftment:</b> Unlike dynamic web designing, static website development does not include tedious and complex coding processes. Even these days static websites offer easy integration and free custom domains due to their technological upliftment. Therefore, you should not delay employing a real and certified <b><a href="https://digitalmarketingking.in/static-website-designing.php">static website designing Agency</a></b> to opt for this solution.
                                                </li><br />
                                                <li>
                                                    <b>Dependency:</b> Apparently, website hosting is not only cheap but also seamless in static website designing. Any error message is barely encountered in them because the basic HTML files can be hosted anywhere and do not affect the connection. The best part of static websites is they get connected to other nearest browsers when any attack on the server occurs. On the other hand, dynamic websites go down quickly in such scenarios which ultimately makes static websites a reliable option to go with.
                                                </li><br />
                                                <li>
                                                    <b>Price:</b> The <b><a href="https://digitalmarketingking.in/static-website-designing.php">static website design price</a></b> is less expensive than dynamic web designing. It is because static websites include HTML files which are basic and less spacious which eventually reduces the static website cost. The static website development cost involves affordable website hosting and helps companies to save maximum on this.
                                                </li><br />
                                            </ul>

                                            <h5>The Final Words!</h5>
                                            <p>
                                                We hope that the above mentioned information has been useful for you and convince you to choose static website designing. It has various different advantages and acts as a boon for your online business. Not only this, it helps you entice many more potential customers in the shortest span and improve your business visibility in the marketplace. For finding an authentic and reliable static website design company, stay connected with <b><a href="https://digitalmarketingking.in">Digital Marketing King</a></b>. It is a certified and adept IT firm with impeccable business solutions, serving all over the world with truly budget-friendly <b><a href="https://digitalmarketingking.in/static-website-designing.php">static website designing cost in India</a></b>.
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

export default StaticWebDesigning;
