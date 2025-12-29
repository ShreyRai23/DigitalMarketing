import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import banner5 from '../assets/images/banner/banner5.jpg';
import googlePartnerImg from '../assets/images/other/Google-partner-digital-marketing-king.webp';
// Mission Images
import mission1 from '../assets/img/others/our_mission_1.png';
import mission2 from '../assets/img/others/our_mission_2.png';
import mission3 from '../assets/img/others/our_mission_3.png';
// Testimonial Images
import testimonialImg from '../assets/images/icon-image/testimonial1.png';

const About = () => {
    const [formData, setFormData] = useState({
        username: '',
        company: '',
        contact: '',
        email: '',
        service: '',
        message: ''
    });

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('About Form submitted:', formData);
        alert('Thank you for your message! We will contact you soon.');
        setFormData({
            username: '',
            company: '',
            contact: '',
            email: '',
            service: '',
            message: ''
        });
    };

    useEffect(() => {
        // Initialize Owl Carousel and Timeline interactions
        if (window.jQuery) {
            const $ = window.jQuery;

            // Mission Carousel
            $('.mission-carousel').owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                dots: true,
                nav: false,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                mouseDrag: false,
                touchDrag: true
            });

            // Testimonial Carousel
            $('.tw-testimonial-carousel').owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                dots: true,
                nav: false,
                autoplayTimeout: 5000,
                autoplayHoverPause: true
            });

            // Timeline Interactive Hover - from main.js
            $('.timeline-wrapper .row').hover(function () {
                $('.timeline-item').find('.timeline-badge').removeClass('active');
                $(this).find('.timeline-badge').addClass('active');
            });
            $('.timeline-wrapper .row').hover(function () {
                $('.timeline-item').find('.timeline-date').removeClass('active');
                $(this).find('.timeline-date').addClass('active');
            });
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>About Us - Digital Marketing King</title>
                <meta
                    name="description"
                    content="Digital Marketing King offers varied digital marketing services to enrich your business growth and brand visibility in the competitive world."
                />
            </Helmet>

            <div className="about-page">
                {/* Banner Area */}
                <div className="banner-area" style={{ backgroundImage: `url(${banner5})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '100px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <h1 style={{ fontSize: '42px' }}>About Us</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center" style={{ background: 'transparent' }}>
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">About us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Container - Intro */}
                <section id="main-container" className="main-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="tw-about-bin">
                                    <div className="section-heading">
                                        <h2>
                                            Digital Marketing King - Your True Google Promotion Partner!
                                            <span className="animate-border tw-mt-20 tw-mb-35"></span>
                                        </h2>
                                    </div>
                                    <p>Digital Marketing King was built to cater to all client requirements with 100% accuracy, efficiency and productivity. We provide a wider spectrum of Information Technology business solutions that meets every business entrepreneur’s custom requirements. We aim to enrich your organisation with intensive growth and impeccable, lasting results. We always adopt a strategic process to process our business operations. With 100% transparency in the deal, contracting with us would be your choice, but our commitment is to you. </p>
                                    <p>Our 360-degree IT business solutions include everything that you, being the most concerned and responsible person of your business, could reckon of. We serve value to you in the form of potent web development, app development, UI/UX designing, graphic designing, digital marketing, Google map listing, and many more worthwhile IT business services. That’s why we are renowned as the Best Digital Marketing Agency In India.</p>
                                </div>
                            </div>
                            <div className="col-md-6 align-self-md-center">
                                <img width="100%" height="400px" src={googlePartnerImg} alt="Google Partner" />
                            </div>
                            <div className="col-md-12 mt-4">
                                <p className="para">Not only this, but as we all know that today’s advancements have reached the pinnacle, and so has our adept team. We’re fully updated with the latest technologies and trending approaches to aid leading and new companies in meeting their business goals strategically. To serve you flawlessly, we employ smart applications and devices that render organic results in little to no time with high accuracy and efficiency. We also assist you with the planning strategy so as to eliminate the cut-throat market competition and stand outside the crowd. </p>
                                <p className="para">Employing the ideal working strategies, our dedicated and hard-working team is ambitious and leads one another to produce truly impressive outcomes. We are so sure that working with us would be your best business decision and we promise you never to disappoint in any way.
                                    With hands-on experience in the respective niche and skills at peak, we’ve served many customers worldwide. We’re ecstatic to complete more than 100 successful projects, and the number is still counting. Our support team is cooperative and conscious of every query or doubt you may have before, during or after the project completion. They are readily available to provide outstanding results and complete customer satisfaction by promptly listening, responding and resolving all your issues.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section id="tw-mission" className="tw-mission testimonial-default-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mission-carousel owl-carousel carousel-black-dots">
                                    {/* Mission Item 1 */}
                                    <div className="row">
                                        <div className="col-md-6 mr-auto align-self-md-center">
                                            <img src={mission1} alt="Our Mission" className="img-fluid" />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mission-body">
                                                <div className="mission-title tw-mb-40">
                                                    <h2 className="column-title text-black">Our Mission</h2>
                                                    <span className="animate-border bg-white border-yellow tw-mt-20"></span>
                                                </div>
                                                <p>
                                                    Digital Marketing King always opts for the latest tools and advanced techniques to deliver clients the best results. On the other hand, our professional digital marketers and web developers thoroughly analyse the requirements and prepare an outline to show clients any changes if required by their end. We are the Best Digital Marketing Agency In India who aim to succeed in our niche by making our clients excel in their businesses. By saving our client’s maximum cost and time, we ensure complete transparency during the project and open discussion to serve value.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Mission Item 2 */}
                                    <div className="row">
                                        <div className="col-md-6 mr-auto align-self-md-center">
                                            <img src={mission2} alt="Our Vision" className="img-fluid" />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mission-body">
                                                <div className="mission-title tw-mb-40">
                                                    <h2 className="column-title text-black">Our Vision</h2>
                                                    <span className="animate-border bg-white border-yellow tw-mt-20"></span>
                                                </div>
                                                <p>
                                                    We all know the importance of flexibility in today’s time, so we persistently strive for software development up-gradation along with innovative digital marketing & promotional approaches. We, the Best Digital Marketing Agency In India, closely understand all possible concerns of our clients and, thus, attempt to content them by providing 360-degree assistance before, during and even after the completion of their projects.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Mission Item 3 */}
                                    <div className="row">
                                        <div className="col-md-6 mr-auto align-self-md-center">
                                            <img src={mission3} alt="Our Culture" className="img-fluid" />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mission-body">
                                                <div className="mission-title tw-mb-40">
                                                    <h2 className="column-title text-black">Our Culture</h2>
                                                    <span className="animate-border bg-white border-yellow tw-mt-20"></span>
                                                </div>
                                                <p>
                                                    With an aesthetic work culture and environment, we ensure all our team members face safety, comfort and value while working with us. We take care of every small and possible aspect to ensure our employees don’t feel discomfort. To ensure upliftment in our knowledge and skills, we also conduct various skilful activities routinely to ensure each of our employees experiences equal endeavours to excel in their domain. We’ve served numerous companies, and the number is still counting, which overall makes us the Best Digital Marketing Agency In India. We are ecstatic to have helped renowned businesses achieve excellence with our optimal digital marketing solutions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section id="tw-timeline" className="tw-timeline">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-wrapper">
                                    {/* Step 1: Analysis */}
                                    <div className="row">
                                        <div className="col-md-6 timeline-item left-part">
                                            <div className="timeline-badge"></div>
                                            <div className="timeline-panel">
                                                <p className="details">The best way to make sure you get your point across is to do some research in advance. You can also plan out what you want to cover and make sure your project flows well.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 timeline-item ">
                                            <div className="timeline-date left-part">
                                                <p className="title"></p>
                                                <p className="tagline">Analysis</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Step 2: Design */}
                                    <div className="row">
                                        <div className="col-md-6 timeline-item left-part">
                                            <div className="timeline-badge"></div>
                                            <div className="timeline-panel">
                                                <p className="details">Analysis is the process of gathering and comparing information about the web and its operation and use in order to improve the web's overall quality and to identify problem areas.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 timeline-item ">
                                            <div className="timeline-date left-part">
                                                <p className="title"></p>
                                                <p className="tagline">Design</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Step 3: Development */}
                                    <div className="row">
                                        <div className="col-md-6 timeline-item left-part">
                                            <div className="timeline-badge"></div>
                                            <div className="timeline-panel">
                                                <p className="details">Based on the data and result, we come up with a design mockup of your website and keep on working on it until you get that right.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 timeline-item ">
                                            <div className="timeline-date left-part">
                                                <p className="title"></p>
                                                <p className="tagline">Development</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Step 4: Testing */}
                                    <div className="row">
                                        <div className="col-md-6 timeline-item left-part">
                                            <div className="timeline-badge"></div>
                                            <div className="timeline-panel">
                                                <p className="details">After the design mocks up has been approved our developers start building the site.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 timeline-item ">
                                            <div className="timeline-date left-part">
                                                <p className="title"></p>
                                                <p className="tagline">Testing</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Step 5: Live */}
                                    <div className="row">
                                        <div className="col-md-6 timeline-item left-part">
                                            <div className="timeline-badge"></div>
                                            <div className="timeline-panel">
                                                <p className="details">We continuously offer our support to ensure that the Project is Delivered.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 timeline-item ">
                                            <div className="timeline-date left-part">
                                                <p className="title"></p>
                                                <p className="tagline">Live</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials & Contact */}
                <section id="tw-testimonial" className="tw-testimonial">
                    <div className="container">
                        <div className="row align-items-center">
                            {/* Testimonial Area */}
                            <div className="col-md-6 wow fadeInLeft" data-wow-duration="1s">
                                <div className="tw-testimonial-content text-center">
                                    <h2 className="section-title">Review From Clients</h2>
                                    <span className="animate-border border-green tw-mt-20 tw-mb-40 ml-auto mr-auto"></span>
                                </div>
                                <div className="tw-testimonial-carousel owl-carousel">
                                    {/* Review 1 */}
                                    <div className="tw-testimonial-wrapper">
                                        <div className="testimonial-bg testimonial-bg-orange">
                                            <div className="testimonial-icon">
                                                <img src={testimonialImg} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="testimonial-text">
                                            <p>I already had one website which was not SEO-friendly and also not properly designed. It all started when I gave my project to one novice web designing company but this time, I’m out of words to express my gratitude to Digital Marketing King for such creative, apt and excellent work done just the way I wanted.</p>
                                            <div className="testimonial-meta">
                                                <h4>
                                                    Rahul Mittal <small>CEO Disha Fashion</small>
                                                </h4>
                                                <i className="fa fa-quote-right" style={{ fontSize: '36px', color: '#fec658', opacity: 0.8 }}></i>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Review 2 */}
                                    <div className="tw-testimonial-wrapper">
                                        <div className="testimonial-bg testimonial-bg-orange">
                                            <div className="testimonial-icon">
                                                <img src={testimonialImg} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="testimonial-text">
                                            <p>A heartfelt thanks to Digital Marketing King for bringing immense traffic, high ranking, boosted visibility and greater sales to my business. Indeed, their Search Engine Optimization services are a boon for multiple leading IT firms and businesses. They strive to provide promising results within the committed duration. Keep it up and kudos to their team!</p>
                                            <div className="testimonial-meta">
                                                <h4>
                                                    Kamal <small>CEO kamal Fine Art Institute</small>
                                                </h4>
                                                <i className="fa fa-quote-right" style={{ fontSize: '36px', color: '#fec658', opacity: 0.8 }}></i>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Review 3 */}
                                    <div className="tw-testimonial-wrapper">
                                        <div className="testimonial-bg testimonial-bg-orange">
                                            <div className="testimonial-icon">
                                                <img src={testimonialImg} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="testimonial-text">
                                            <p>Digital Marketing King is truly a King organization. Thanks for building a competent website for my business. I like the work and appreciate the team’s coordinative effort. I’m glad to have shaken hands with this website designing service provider in a world full of incompetent and unauthentic agencies. Great work team!</p>
                                            <div className="testimonial-meta">
                                                <h4>
                                                    Mohd. Arif <small>CEO Zoya Clothing</small>
                                                </h4>
                                                <i className="fa fa-quote-right" style={{ fontSize: '36px', color: '#fec658', opacity: 0.8 }}></i>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Review 4 */}
                                    <div className="tw-testimonial-wrapper">
                                        <div className="testimonial-bg testimonial-bg-orange">
                                            <div className="testimonial-icon">
                                                <img src={testimonialImg} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="testimonial-text">
                                            <p>Being an owner of an E-commerce business, it was actually tough for me to join hands with any IT firm before validating their authenticity. All thanks to my friend who recommended me for Digital Marketing King. As their name speaks, they are truly adept and experienced in their niche. Thanks for such a wonderful deal!</p>
                                            <div className="testimonial-meta">
                                                <h4>
                                                    Anupam Sharma <small>CEO Unique Service 4 U</small>
                                                </h4>
                                                <i className="fa fa-quote-right" style={{ fontSize: '36px', color: '#fec658', opacity: 0.8 }}></i>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Review 5 */}
                                    <div className="tw-testimonial-wrapper">
                                        <div className="testimonial-bg testimonial-bg-orange">
                                            <div className="testimonial-icon">
                                                <img src={testimonialImg} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="testimonial-text">
                                            <p>I chose Digital Marketing King for my website’s digital marketing services because I had a low-ranked and non-SEO-friendly business site. My hearty gratitude goes to this company for doing such incredible work for my business. I highly recommend this organization for those looking for top-notch Digital Marketing solutions.</p>
                                            <div className="testimonial-meta">
                                                <h4>
                                                    Rahul Khanna <small>CEO Am Cooling Systems</small>
                                                </h4>
                                                <i className="fa fa-quote-right" style={{ fontSize: '36px', color: '#fec658', opacity: 0.8 }}></i>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Review 6 */}
                                    <div className="tw-testimonial-wrapper">
                                        <div className="testimonial-bg testimonial-bg-orange">
                                            <div className="testimonial-icon">
                                                <img src={testimonialImg} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="testimonial-text">
                                            <p>My reason for claiming Digital Marketing King as the best Website designing company is because of their vast yet skilled team of professionals. They listen to you patiently and resolve all your queries as a priority. In fact, their budget is very much affordable to consider for qualitative IT business solutions.</p>
                                            <div className="testimonial-meta">
                                                <h4>
                                                    Rajesh Gupta <small>CEO Gupta and Sons.</small>
                                                </h4>
                                                <i className="fa fa-quote-right" style={{ fontSize: '36px', color: '#fec658', opacity: 0.8 }}></i>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Review 7 */}
                                    <div className="tw-testimonial-wrapper">
                                        <div className="testimonial-bg testimonial-bg-orange">
                                            <div className="testimonial-icon">
                                                <img src={testimonialImg} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="testimonial-text">
                                            <p>I must say that I’ve encountered a massive difference in my success rates after partnering with Digital Marketing King. This Google promotion company serves services which are just impeccable. My business got high brand recognition in the market in the shortest span because its marketing strategies are seamless. Well done team and keep up doing a great job! </p>
                                            <div className="testimonial-meta">
                                                <h4>
                                                    Aman Khurana <small>CEO Ultra Systems</small>
                                                </h4>
                                                <i className="fa fa-quote-right" style={{ fontSize: '36px', color: '#fec658', opacity: 0.8 }}></i>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Review 8 */}
                                    <div className="tw-testimonial-wrapper">
                                        <div className="testimonial-bg testimonial-bg-orange">
                                            <div className="testimonial-icon">
                                                <img src={testimonialImg} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="testimonial-text">
                                            <p>Thanks, Digital Marketing King for being the back of my online business. Certainly, I’m going to partner with you for my future projects too because of your intense hard work, dedicated team and promising outcomes. Highly recommend this Social media marketing agency to every potential business owner. They perform from scratch and take the business to another level.</p>
                                            <div className="testimonial-meta">
                                                <h4>
                                                    Amit Kumar <small>CEO D.K Machine</small>
                                                </h4>
                                                <i className="fa fa-quote-right" style={{ fontSize: '36px', color: '#fec658', opacity: 0.8 }}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="col-md-6 wow fadeInRight" data-wow-duration="1s">
                                <div className="login-form box-shadow white-bg p-4 p-md-3 text-center">
                                    <div className="tw-testimonial-content text-center">
                                        <h2 className="section-title myquiiee">Connect with our Digital Marketing Experts</h2>
                                        <span className="animate-border border-green tw-mt-20 tw-mb-40 ml-auto mr-auto"></span>
                                    </div>
                                    <form onSubmit={handleFormSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        className="form-control"
                                                        placeholder="Name"
                                                        required
                                                        value={formData.username}
                                                        onChange={handleFormChange}
                                                        style={{ backgroundColor: '#fff' }}
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
                                                        required
                                                        value={formData.company}
                                                        onChange={handleFormChange}
                                                        style={{ backgroundColor: '#fff' }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        name="contact"
                                                        pattern="[0-9]{10}"
                                                        placeholder="Mobile No."
                                                        required
                                                        value={formData.contact}
                                                        onChange={handleFormChange}
                                                        style={{ backgroundColor: '#fff' }}
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
                                                        required
                                                        value={formData.email}
                                                        onChange={handleFormChange}
                                                        style={{ backgroundColor: '#fff' }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <select
                                                        name="service"
                                                        className="form-control"
                                                        value={formData.service}
                                                        onChange={handleFormChange}
                                                        style={{ backgroundColor: '#fff' }}
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
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea
                                                        className="form-control"
                                                        name="message"
                                                        rows="4"
                                                        cols="40"
                                                        placeholder="Description"
                                                        value={formData.message}
                                                        onChange={handleFormChange}
                                                        style={{ backgroundColor: '#fff' }}
                                                    ></textarea>
                                                </div>
                                            </div>
                                            {/* Recaptcha Placeholder
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <div className="g-recaptcha" data-sitekey=""></div>
                                                </div>
                                            </div>
                                            */}
                                        </div>
                                        <button type="submit" className="btn btn-secondary submi-btn">
                                            <span>Submit Now</span>
                                        </button>
                                        <a href="#review.php" className="btn btn-secondary mw-80 no-shadows ml-2">Write A Review..</a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Analysis CTA Section */}
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
                                                    <span className="text-white"> with India’s Leading Digital Marketing Company</span>
                                                </h2>
                                                <p className="text-white">We design solution to perform with Excellence and Technical Upgradation. Our Products and Digital marketing Services are laced with rich experience of our company which makes your projects failure proof.</p>
                                            </div>

                                            <div className="col-lg-2 col-md-12 no-padding">
                                                <div className="form-group">
                                                    <Link to="/contact" className="btn btn-secondary mw-80 no-shadows">Let's Talk</Link>
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

export default About;
