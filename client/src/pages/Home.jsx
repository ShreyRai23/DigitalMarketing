import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { api } from '../utils/api';

// Import SEO Partner Images
import finalResultImg from '../assets/images/cases/final_result.png';
import finalIcon1 from '../assets/images/icon/final_icon1.png';
import finalIcon2 from '../assets/images/icon/final_icon2.png';
import result1 from '../assets/img/others/2722090720469293result_1.png';
import result2 from '../assets/img/others/2722090721018115result_2.png';
import result3 from '../assets/img/others/2722090721102862result_3.png';
import result4 from '../assets/img/others/2722090721433179result_4.png';

// Import Mission Images
import mission1 from '../assets/img/others/our_mission_1.png';
import mission2 from '../assets/img/others/our_mission_2.png';
import mission3 from '../assets/img/others/our_mission_3.png';

// Import Blog Images
import blog1 from '../assets/images/other/google-partner-blog.webp';
import blog2 from '../assets/images/other/ppc-blog.png';
import blog3 from '../assets/images/other/digital-marketing-blog.png';
import googlePartnerCert from '../assets/images/other/Google-partner-digital-marketing-king.webp';

// Import CSS
import '../styles/features-section.css';
import '../styles/seo-partner-section.css';
import '../styles/review-section.css';
import '../styles/cta-section.css';
import '../styles/home-mobile.css';

// Import Tech Stack Images
import phpIcon from '../assets/images/other/php.png';
import wordpressIcon from '../assets/images/other/wordpress-logo.png';
import aspIcon from '../assets/images/other/asp.png';
import mysqlIcon from '../assets/images/other/mysql.png';
import htmlIcon from '../assets/images/other/html-5.png';
import drupalIcon from '../assets/images/other/drupal.png';
import jsIcon from '../assets/images/other/js.png';
import ciIcon from '../assets/images/other/ci.png';
import laravelIcon from '../assets/images/other/laravel.png';
import magentoIcon from '../assets/images/other/magento.png';
import angularIcon from '../assets/images/other/angular.png';
import cssIcon from '../assets/images/other/css-3.png';
import photoshopIcon from '../assets/images/other/photoshop.png';
import illustratorIcon from '../assets/images/other/illustrator.png';
import figmaIcon from '../assets/images/other/figma.png';
import bootstrapIcon from '../assets/images/other/bootstrap.png';

const Home = () => {
    const [activeTab, setActiveTab] = useState('tabs-1');
    const [activeFaq, setActiveFaq] = useState('faq1'); // First FAQ open by default
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });

    const toggleFaq = (faqId) => {
        setActiveFaq(activeFaq === faqId ? null : faqId);
    };

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await api.submitContact(formData);
            alert(result.message || 'Thank you for your inquiry! We will contact you soon.');
            setFormData({
                name: '',
                company: '',
                phone: '',
                email: '',
                service: 'Select Service',
                message: ''
            });
        } catch (error) {
            alert('Failed to submit your inquiry. Please try again later.');
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        // Initialize Owl Carousel when component mounts
        if (window.jQuery && window.jQuery.fn.owlCarousel) {
            window.jQuery('.tw-hero-slider').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000,
                items: 1,
                navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>']
            });

            window.jQuery('.clients-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3000,
                responsive: {
                    0: { items: 2 },
                    600: { items: 3 },
                    1000: { items: 5 }
                }
            });

            window.jQuery('.mission-carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                items: 1
            });

            window.jQuery('.tw-testimonial-carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 4000,
                items: 1
            });
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>Digital Marketing King® | Best Digital Marketing Agency in India</title>
                <meta
                    name="description"
                    content="Digital Marketing King is the Best Digital Marketing Agency In India and serves globally. We have been serving in business marketing & promotions for more than a decade."
                />
                <link rel="canonical" href="https://www.digitalmarketingking.in" />
            </Helmet>            {/* Hero Slider Section */}
            <div className="tw-hero-slider owl-carousel">
                {/* Slide 1 */}
                <div className="slider-2">
                    <div className="slider-arrow">
                        <img src="/assets/images/slider/pattern_arrow2.png" alt="sliderArrow1" />
                        <img src="/assets/images/slider/pattern_arrow1.png" alt="sliderArrow2" />
                        <img src="/assets/images/slider/pattern_arrow3.png" alt="sliderArrow3" />
                    </div>
                    <div className="slider-wrapper d-table">
                        <div className="slider-inner d-table-cell">
                            <div className="container">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-md-6">
                                        <div className="slider-content">
                                            <h1>Rank Your Website On 1st Page of Google Search</h1>
                                            <p>If your ultimate business goal is to generate numerous leads quickly, you've come to the right place. As its name illuminates, Digital Marketing King is a leading & the Best Digital Marketing Agency In India rendering success-proven business solutions worldwide.</p>
                                            <a href="/about" className="btn btn-dark">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <img src="/assets/img/slider/slider1.webp" alt="Google 1st Page" className="img-fluid slider-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="slider-3">
                    <div className="slider-arrow">
                        <img src="/assets/images/slider/pattern_arrow2.png" alt="sliderArrow1" />
                        <img src="/assets/images/slider/pattern_arrow1.png" alt="sliderArrow2" />
                        <img src="/assets/images/slider/pattern_arrow3.png" alt="sliderArrow3" />
                    </div>
                    <div className="slider-wrapper d-table">
                        <div className="slider-inner d-table-cell">
                            <div className="container">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-md-6">
                                        <div className="slider-content">
                                            <h1>Rated As Number #1 Digital Marketing Agency</h1>
                                            <p>Did you try every potential aspect but couldn't make it for your business? It's high time you think of the one-time investment with Digital Marketing King. We're a certified and exceedingly experienced Digital Marketing agency serving real success to businesses.</p>
                                            <a href="/about" className="btn btn-dark">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <img src="/assets/img/slider/banner2.png" alt="SEO 1st Ranking" className="img-fluid slider-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Give Us a Call Button */}
            <div className="tw-call-action">
                <a href="tel:+919910075663" className="call-btn">
                    <span className="call-icon"><i className="fa fa-phone"></i></span>
                    <span className="call-text">Give Us a Call</span>
                </a>
            </div>

            {/* Features Section - Boost Your Business */}
            <section id="tw-features" className="tw-features-area">
                <div className="container">
                    <div className="row tw-mb-65">
                        <div className="col-md-4 wow fadeInLeft" data-wow-duration="1s">
                            <h2 className="column-title text-md-right text-sm-center">Boost Your Business With Digital Marketing King.</h2>
                        </div>
                        <div className="col-md-7 ml-md-auto wow fadeInRight" data-wow-duration="1s">
                            <p className="features-text">Digital Marketing is already pleased to have you here! As you're here to meet your coveted marketing goals and expand your online business, we hereby commit you to cater the best among the rest of the solutions. With high innovation, smart approaches and multi-task skills, Digital Marketing King is always the optimal choice to make for your marketing & advertising needs.<br />
                                We believe in facilitating business roles in diverse aspects so as to help business owners and entrepreneurs to achieve organisational milestones every then and now.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Partner Section */}
            <section id="tw-intro" className="tw-intro-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-center">
                            <div className="tw-intro-content wow fadeInLeft">
                                <img src={googlePartnerCert} alt="Google Partner Certificate" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6 text-left">
                            <div className="tw-intro-content wow fadeInRight">
                                <h3>Welcome to Digital Marketing King® || Google SME Premier Partner</h3>
                                <p>
                                    Digital Marketing King is the <strong>Best Digital Marketing Agency In India</strong> and serves globally. We have been serving in business marketing & promotions for more than a decade and encompass a team of truly skilled & professional experts.
                                </p>
                                <p>
                                    With 360-degree digital marketing solutions, we serve a comprehensive range of IT services, including digital marketing, content management, web development, app development, UI/UX designing, and many more.
                                </p>
                                <a href="/about" className="btn btn-primary">Learn More</a>
                                <a href="/contact" className="btn btn-secondary ml-3">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Certificates Carousel */}
            <section id="tw-client" className="tw-client">
                <div className="container">
                    <div className="row text-center">
                        <div className="col section-heading wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
                            <h2>
                                Our <span>Google Awards & Certificates</span>
                            </h2>
                            <span className="animate-border border-offwhite ml-auto mr-auto tw-mt-20"></span>
                        </div>
                    </div>
                    <div className="row wow fadeInUp">
                        <div className="col-md-12">
                            <div className="clients-carousel owl-carousel">
                                <div className="client-logo-wrapper d-table">
                                    <div className="client-logo d-table-cell">
                                        <img src="/assets/img/cert/1.webp" alt="Google Ads Display Certificate" />
                                    </div>
                                </div>
                                <div className="client-logo-wrapper d-table">
                                    <div className="client-logo d-table-cell">
                                        <img src="/assets/img/cert/2.webp" alt="Google Ads Fundamentals Certificate" />
                                    </div>
                                </div>
                                <div className="client-logo-wrapper d-table">
                                    <div className="client-logo d-table-cell">
                                        <img src="/assets/img/cert/3.webp" alt="Google Ads Mobile Certificate" />
                                    </div>
                                </div>
                                <div className="client-logo-wrapper d-table">
                                    <div className="client-logo d-table-cell">
                                        <img src="/assets/img/cert/4.webp" alt="Google Ads Mobile Certification" />
                                    </div>
                                </div>
                                <div className="client-logo-wrapper d-table">
                                    <div className="client-logo d-table-cell">
                                        <img src="/assets/img/cert/5.webp" alt="Google Ads Display Certification" />
                                    </div>
                                </div>
                                <div className="client-logo-wrapper d-table">
                                    <div className="client-logo d-table-cell">
                                        <img src="/assets/img/cert/6.webp" alt="Google Digital Garage Certificate" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats/Facts Section */}
            <section id="tw-facts" className="tw-facts">
                <div className="facts-bg-pattern d-none d-lg-block">
                    <img className="wow fadeInLeft" src="/assets/images/funfacts/arrow_left.png" alt="arrow_left" />
                    <img className="wow fadeInRight" src="/assets/images/funfacts/arrow_right.png" alt="arrow_right" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <div className="tw-facts-box">
                                <div className="facts-img wow zoomIn" data-wow-duration="1s">
                                    <i className="fa fa-users" style={{ fontSize: '60px', color: '#fec658' }}></i>
                                </div>
                                <div className="facts-content wow fadeInUp" data-wow-duration="1s">
                                    <h4 className="facts-title">Active clients</h4>
                                    <span className="counter">489</span>
                                    <sup>+</sup>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="tw-facts-box">
                                <div className="facts-img wow zoomIn" data-wow-duration="1s">
                                    <i className="fa fa-briefcase" style={{ fontSize: '60px', color: '#fec658' }}></i>
                                </div>
                                <div className="facts-content wow fadeInUp" data-wow-duration="1s">
                                    <h4 className="facts-title">Projects Done</h4>
                                    <span className="counter">1059</span>
                                    <sup>+</sup>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="tw-facts-box">
                                <div className="facts-img wow zoomIn" data-wow-duration="1s">
                                    <i className="fa fa-line-chart" style={{ fontSize: '60px', color: '#fec658' }}></i>
                                </div>
                                <div className="facts-content wow fadeInUp" data-wow-duration="1s">
                                    <h4 className="facts-title">Success Rate</h4>
                                    <span className="counter">99</span>
                                    <sup>%</sup>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="tw-facts-box">
                                <div className="facts-img wow zoomIn" data-wow-duration="1s">
                                    <i className="fa fa-trophy" style={{ fontSize: '60px', color: '#fec658' }}></i>
                                </div>
                                <div className="facts-content wow fadeInUp" data-wow-duration="1s">
                                    <h4 className="facts-title">Awards</h4>
                                    <span className="counter">90</span>
                                    <sup>+</sup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Services Section */}
            <section id="tw-service" className="tw-service">
                <div className="container">
                    <div className="row text-center">
                        <div className="col section-heading wow fadeInDown">
                            <h2>
                                Our Top-Of-The-Line <span>Services:</span>
                            </h2>
                            <span className="animate-border ml-auto mr-auto tw-mt-20"></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".2s">
                                <div className="service-icon service-icon-bg-1 d-table">
                                    <div className="service-icon-inner d-table-cell">
                                        <img src="/assets/images/icon/service1.png" alt="search engine" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="service-content">
                                    <h3>Website Designing</h3>
                                    <p>Obtain our professional web designing services to create an impressive business page and medium to interact with your customers and generate revenue for your business.</p>
                                    <ul className="servicelist">
                                        <li><a href="/services/static-website-designing"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Static Website Designing</a></li>
                                        <li><a href="/services/dynamic-website-designing"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Dynamic Website Designing</a></li>
                                        <li><a href="/services/ecommerce-website-designing"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Ecommerce Website Designing</a></li>
                                        <li><a href="/services/wordpress-website-designing"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Business Website Design</a></li>
                                        <li><a href="/services/mlm-website-designing"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; MLM Website Designing</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                                <div className="service-icon service-icon-bg-2 d-table">
                                    <div className="service-icon-inner d-table-cell">
                                        <img src="/assets/images/icon/service2.png" alt="search engine" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="service-content">
                                    <h3>Website Development</h3>
                                    <p>Build a robust online presence of your brand with our flawless website development services. We use truly advanced technologies and innovative strategies to meet your business goals.</p>
                                    <ul className="servicelist">
                                        <li><a href="/services/php-website-development"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; PHP Website Development</a></li>
                                        <li><a href="/services/ecommerce-website-development"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Ecommerce Website Development</a></li>
                                        <li><a href="/services/custom-website-development"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Custom Website Development</a></li>
                                        <li><a href="/services/payment-gateway-integration"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Payment Gateway Integration</a></li>
                                        <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; News Portal Development</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".2s">
                                <div className="service-icon service-icon-bg-4 d-table">
                                    <div className="service-icon-inner d-table-cell">
                                        <img src="/assets/images/icon/service4.png" alt="search engine" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="service-content">
                                    <h3>Mobile App Development</h3>
                                    <p>Facilitate an easy and quick customer shopping experience with a one-tap source. Reach out to us for top-notch mobile app development services for both iOS & Android.</p>
                                    <ul className="servicelist">
                                        <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Mobile App Development</a></li>
                                        <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Android App development</a></li>
                                        <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; IOS App Development</a></li>
                                        <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Native App development</a></li>
                                        <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Hybrid App development</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tw-mb-60"></div>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".6s">
                                <div className="service-icon service-icon-bg-3 d-table">
                                    <div className="service-icon-inner d-table-cell">
                                        <img src="/assets/images/icon/service3.png" alt="search engine" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="service-content">
                                    <h3>Graphic Designing</h3>
                                    <p>Grasp the attention of your target audience towards your business by sharing outstanding graphics and content on diverse social media platforms.</p>
                                    <ul className="servicelist">
                                        <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Graphic Designing</a></li>
                                        <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Logo Designing</a></li>
                                        <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Social Media Post Design</a></li>
                                        <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Business Explainer Video</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                                <div className="service-icon service-icon-bg-5 d-table">
                                    <div className="service-icon-inner d-table-cell">
                                        <img src="/assets/images/icon/service5.png" alt="search engine" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="service-content">
                                    <h3>Digital Marketing</h3>
                                    <p>Enable your customers to know about your unique business or brand with the Best Digital Marketing Agency In India, including business promotion and advertising via campaigns</p>
                                    <ul className="servicelist">
                                        <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Search Engine Optimization</a></li>
                                        <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Google Business Listing SEO</a></li>
                                        <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; E-Commerce SEO</a></li>
                                        <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Google Ads</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".6s">
                                <div className="service-icon service-icon-bg-6 d-table">
                                    <div className="service-icon-inner d-table-cell">
                                        <img src="/assets/images/icon/service6.png" alt="search engine" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="service-content">
                                    <h3>Google Promotion</h3>
                                    <p>Validate the authenticity of your business by listing it on Google to facilitate easy interaction & connection with your target audience</p>
                                    <ul className="servicelist">
                                        <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Google Business Page </a></li>
                                        <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp;Google Map Listing</a></li>
                                        <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Google Listing Promotion</a></li>
                                        <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> &nbsp; Google Listing Ads</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Speciality Section */}
            <section id="tw-case" className="tw-case">
                <div className="container">
                    <div className="row text-center">
                        <div className="col section-heading wow fadeInDown" data-wow-duration="1s" data-wow-delay=".2s">
                            <h2>
                                Our<span>Speciality</span>
                            </h2>
                            <span className="animate-border border-offwhite ml-auto mr-auto tw-mt-20"></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tw-cases">
                                <div className="cases-img bg-orange tw-service-box">
                                    <img src="/assets/img/home/branding.png" alt="Branding" className="img-fluid" />
                                    <h3>Branding</h3>
                                </div>
                                <div className="cases-img bg-shrock tw-service-box">
                                    <img src="/assets/img/home/digital-marketing.png" alt="Digital Marketing" className="img-fluid" />
                                    <h3>Digital Marketing</h3>
                                </div>
                                <div className="cases-img bg-yellow tw-service-box">
                                    <img src="/assets/img/home/mobile-marketing.png" alt="Mobile Marketing" className="img-fluid" />
                                    <h3>Mobile Marketing</h3>
                                </div>
                                <div className="cases-img bg-blue tw-service-box">
                                    <img src="/assets/img/home/online-marketing.png" alt="Online Marketing" className="img-fluid" />
                                    <h3>Online Marketing</h3>
                                </div>
                                <div className="cases-img bg-darkBlue tw-service-box">
                                    <img src="/assets/img/home/search-engine-marketing.png" alt="Search Engine Marketing" className="img-fluid" />
                                    <h3>Search Engine Marketing</h3>
                                </div>
                                <div className="cases-img bg-pink tw-service-box">
                                    <img src="/assets/img/home/paid-marketing.png" alt="Paid Marketing" className="img-fluid" />
                                    <h3>Paid Marketing</h3>
                                </div>
                                <div className="cases-img bg-violet tw-service-box">
                                    <img src="/assets/img/home/seo.png" alt="seo" className="img-fluid" />
                                    <h3>Search Engine Optimization</h3>
                                </div>
                                <div className="cases-img bg-orange tw-service-box">
                                    <img src="/assets/img/home/smo.png" alt="Social Media Marketing" className="img-fluid" />
                                    <h3>Social Media Marketing</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* As Featured In Section */}
            <div id="greadtt" className="tw-client mt-5">
                <div className="container">
                    <div className="mission-title tw-mb-40">
                        <h2 className="column-title text-white text-center">AS FEATURED IN:</h2>
                        <p className="valueii">Since opening in 2011, we've had the privilege to Get featured by Various Media Houses.</p>
                        <span className="animate-border ml-auto mr-auto tw-mt-20"></span>
                    </div>
                    <div className="row">
                        <div className="col-md-12" id="cart">
                            <div className="clients-carousel owl-carousel">
                                <div className="client-logo-wrapper d-table">
                                    <div className="client-logo d-table-cell">
                                        <img src="/assets/img/featured/mid.png" alt="Mid Day logo" />
                                    </div>
                                </div>
                                <div className="client-logo-wrapper d-table">
                                    <div className="client-logo d-table-cell">
                                        <img src="/assets/img/featured/yahoo.jpg" alt="Yahoo logo" />
                                    </div>
                                </div>
                                <div className="client-logo-wrapper d-table">
                                    <div className="client-logo d-table-cell">
                                        <img src="/assets/img/featured/apn-news.jpg" alt="APN News logo" />
                                    </div>
                                </div>
                                <div className="client-logo-wrapper d-table">
                                    <div className="client-logo d-table-cell">
                                        <img src="/assets/img/featured/latestly.jpg" alt="latestly logo" />
                                    </div>
                                </div>
                                <div className="client-logo-wrapper d-table">
                                    <div className="client-logo d-table-cell">
                                        <img src="/assets/img/featured/ht-logo2.svg" alt="Hindustan Times logo" />
                                    </div>
                                </div>
                                <div className="client-logo-wrapper d-table">
                                    <div className="client-logo d-table-cell">
                                        <img src="/assets/img/featured/press.png" alt="Press logo" />
                                    </div>
                                </div>
                                <div className="client-logo-wrapper d-table">
                                    <div className="client-logo d-table-cell">
                                        <img src="/assets/img/featured/india.jpg" alt="India today logo" />
                                    </div>
                                </div>
                                <div className="client-logo-wrapper d-table">
                                    <div className="client-logo d-table-cell">
                                        <img src="/assets/img/featured/telegraph.jpg" alt="telegraph logo" />
                                    </div>
                                </div>
                                <div className="client-logo-wrapper d-table">
                                    <div className="client-logo d-table-cell">
                                        <img src="/assets/img/featured/silicon_india-906x250.webp" alt="silicon logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Working Process Section */}
            <section id="work-process" className="work-process mt-5">
                <div className="work-bg-pattern d-none d-lg-inline-block">
                    <img src="/assets/images/process/work_process.png" alt="" className="img-fluid wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1.2s" />
                </div>
                <div className="container">
                    <div className="row text-center">
                        <div className="col section-heading wow fadeInDown" data-wow-duration="1s">
                            <h2>Our Working <span>Process</span></h2>
                            <span className="animate-border ml-auto mr-auto tw-mt-20"></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="tw-work-process">
                                <div className="process-wrapper d-table wow zoomIn" data-wow-duration="1s" data-wow-delay=".2s">
                                    <div className="process-inner d-table-cell">
                                        <img src="/assets/images/icon/process1.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <p>01. Analysis</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="tw-work-process">
                                <div className="process-wrapper bg-orange d-table wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                                    <div className="process-inner d-table-cell">
                                        <img src="/assets/images/icon/process2.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <p>02. Design</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="tw-work-process">
                                <div className="process-wrapper bg-blue d-table wow zoomIn" data-wow-duration="1s" data-wow-delay=".6s">
                                    <div className="process-inner d-table-cell">
                                        <img src="/assets/images/icon/process3.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <p>03. Development</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="tw-work-process">
                                <div className="process-wrapper bg-yellow d-table wow zoomIn" data-wow-duration="1s" data-wow-delay=".8s">
                                    <div className="process-inner d-table-cell">
                                        <img src="/assets/images/icon/process4.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <p>04. Live</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Portfolio Section with Tabs */}
            <div id="greadtt">
                <div className="container">
                    <div className="mission-title tw-mb-40">
                        <h2 className="column-title text-white text-center">Our SEO Portfolio!</h2>
                        <h3 style={{ fontSize: '23px' }} className="column-title text-white text-center">
                            There's no denying that more than 70% of customers search on search engines to find reliable local stores or products for shopping since the ease of e-commerce establishment. Leveraging this truth, one can set up an online business and opt for various trending yet productive marketing & promotional strategies, SEO being one to influence their customers and expand their market.
                        </h3>
                        <p className="text-white text-center">
                            Here is how the Best Digital Marketing Agency In India, Digital Marketing King has helped many start-ups and leading organisations attain their business goals in different aspects. They've got what they desired, have you?
                        </p>
                        <span className="animate-border ml-auto mr-auto tw-mt-20"></span>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className={`nav-link ${activeTab === 'tabs-1' ? 'active' : ''}`} onClick={() => setActiveTab('tabs-1')} role="tab" style={{ cursor: 'pointer', color: activeTab === 'tabs-1' ? '#000' : '#fff', backgroundColor: activeTab === 'tabs-1' ? '#fff' : 'transparent', border: '1px solid #fff' }}>All</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${activeTab === 'tabs-2' ? 'active' : ''}`} onClick={() => setActiveTab('tabs-2')} role="tab" style={{ cursor: 'pointer', color: activeTab === 'tabs-2' ? '#000' : '#fff', backgroundColor: activeTab === 'tabs-2' ? '#fff' : 'transparent', border: '1px solid #fff' }}>Local SEO</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${activeTab === 'tabs-3' ? 'active' : ''}`} onClick={() => setActiveTab('tabs-3')} role="tab" style={{ cursor: 'pointer', color: activeTab === 'tabs-3' ? '#000' : '#fff', backgroundColor: activeTab === 'tabs-3' ? '#fff' : 'transparent', border: '1px solid #fff' }}>Citywise SEO</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${activeTab === 'tabs-4' ? 'active' : ''}`} onClick={() => setActiveTab('tabs-4')} role="tab" style={{ cursor: 'pointer', color: activeTab === 'tabs-4' ? '#000' : '#fff', backgroundColor: activeTab === 'tabs-4' ? '#fff' : 'transparent', border: '1px solid #fff' }}>Countrywise SEO</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className={`tab-pane ${activeTab === 'tabs-1' ? 'active' : ''}`} id="tabs-1" role="tabpanel">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="seoport">
                                                <div className="seo_header">
                                                    <div className="row">
                                                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                                            <div className="website_image">
                                                                <img src="/assets/img/brand/kamal.webp" alt="SEO Portfolio" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                                            <div className="seoname">
                                                                kamal Fine Art Institute<br />
                                                                <a href="#" target="_blank" title="Best Fine Art institute in Delhi">Kamalartinstitute.com</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <table className="wps-table">
                                                    <tbody>
                                                        <tr>
                                                            <td>Keyword</td>
                                                            <td>Ranking</td>
                                                            <td>Search Engine</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Painting Classes in Delhi</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sketching Classes in Delhi</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Oil Painting Classes in Delhi</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gouache Painting Classes in Delhi</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Acrylic Painting Classes in Delhi</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Portrait Painting Classes in Delhi</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mandana Painting Classes in Delhi</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="seoport">
                                                <div className="seo_header">
                                                    <div className="row">
                                                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                                            <div className="website_image">
                                                                <img src="/assets/img/brand/hem.webp" alt="SEO Portfolio" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                                            <div className="seoname">
                                                                SP Enterprise<br />
                                                                <a href="#" target="_blank" title="SP Enterprise">Sp-enterprise.in</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <table className="wps-table">
                                                    <tbody>
                                                        <tr>
                                                            <td>Keyword</td>
                                                            <td>Ranking</td>
                                                            <td>Search Engine</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Round Ring Making Machine in Assam</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2D Wire Bending Machine in Rajasthan</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2D Wire Bending Machine in Haryana</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>TMT Ring Making Machine in Andhra Pradesh</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Full Automatic Wire Bending Machine in Uttarakhand</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2D Wire Bending Machine in Kolkata</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Round Ring Making Machine in Haryana</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center text-center mt60">
                                        <div className="col-lg-10">
                                            <div className="cta-heading-wide-bt">
                                                <a href="#" className="btn btn-secondary mw-80 no-shadows">VIEW MORE ..</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane ${activeTab === 'tabs-2' ? 'active' : ''}`} id="tabs-2" role="tabpanel">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="seoport">
                                                <div className="seo_header">
                                                    <div className="row">
                                                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                                            <div className="website_image">
                                                                <img src="/assets/img/brand/kamal.webp" alt="SEO Portfolio" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                                            <div className="seoname">
                                                                Furry Friends Forever<br />
                                                                <a href="#" target="_blank" title="Furry Friends Forever">furryfriends forever.in</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <table className="wps-table">
                                                    <tbody>
                                                        <tr>
                                                            <td>Keyword</td>
                                                            <td>Ranking</td>
                                                            <td>Search Engine</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Pet Cremation In Delhi</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Dog Cremation In Delhi</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Cat Cremation In Delhi</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Pet Cremation Service In Delhi</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>pet Cremation Dwarka</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>pet Crematorium In Delhi</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>pet Funeral Services Delhi</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="seoport">
                                                <div className="seo_header">
                                                    <div className="row">
                                                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                                            <div className="website_image">
                                                                <img src="/assets/img/brand/sarte.png" alt="SEO Portfolio" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                                            <div className="seoname">
                                                                Abhinav Enterprises<br />
                                                                <a href="#" target="_blank" title="Abhinav Enterprises">abhinav-enterprises.com</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <table className="wps-table">
                                                    <tbody>
                                                        <tr>
                                                            <td>Keyword</td>
                                                            <td>Ranking</td>
                                                            <td>Search Engine</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Manifold Gauge Set with coupler in India</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Value Condensate Drain Pump Supplier in India</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Manifold Gauge Set with coupler Manufacturers in India</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Value Condensate Drain Pump in India</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Manifold Gauge Set with coupler in delhi</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Expansion Valve Dealers in delhi</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Value Condensate Drain Pump Dealer in India</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane ${activeTab === 'tabs-3' ? 'active' : ''}`} id="tabs-3" role="tabpanel">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="seoport">
                                                <div className="seo_header">
                                                    <div className="row">
                                                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                                            <div className="website_image">
                                                                <img src="/assets/img/brand/hem.webp" alt="SEO Portfolio" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                                            <div className="seoname">
                                                                SP Enterprise<br />
                                                                <a href="#" target="_blank" title="SP Enterprise">Sp-enterprise.in</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <table className="wps-table">
                                                    <tbody>
                                                        <tr>
                                                            <td>Keyword</td>
                                                            <td>Ranking</td>
                                                            <td>Search Engine</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Round Ring Making Machine in Assam</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2D Wire Bending Machine in Rajasthan</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2D Wire Bending Machine in Haryana</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>TMT Ring Making Machine in Andhra Pradesh</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Full Automatic Wire Bending Machine in Uttarakhand</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2D Wire Bending Machine in Kolkata</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Round Ring Making Machine in Haryana</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="seoport">
                                                <div className="seo_header">
                                                    <div className="row">
                                                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                                            <div className="website_image">
                                                                <img src="/assets/img/brand/plant.webp" alt="SEO Portfolio" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                                            <div className="seoname">
                                                                Adventure Plant<br />
                                                                <a href="#" target="_blank" title="Adventure Plant">adventureplant.com</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <table className="wps-table">
                                                    <tbody>
                                                        <tr>
                                                            <td>Keyword</td>
                                                            <td>Ranking</td>
                                                            <td>Search Engine</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Zipline Manufacturer in Arunachal Pradesh</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Zipline Installation in Andhra Pradesh</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Zipline Installation in Andhra Pradesh</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Zipline Construction company in Arunachal Pradesh</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Zipline Construction Company in Assam</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Zipline Setup Company in Andhra Pradesh</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Zipline Setup Company in Arunachal Pradesh</td>
                                                            <td>1st Page</td>
                                                            <td><a href="#" target="_blank">google.co.in</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane ${activeTab === 'tabs-4' ? 'active' : ''}`} id="tabs-4" role="tabpanel">
                                    <p className="text-white text-center p-5">Countrywise SEO portfolio items will be displayed here.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Choose Your SEO Partner Wisely Section */}
            <section id="tw-final-result" className="tw-final-result" style={{ backgroundImage: `url(${finalResultImg})` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="section-heading">
                                <h2>
                                    Choose Your SEO Partner <span>Wisely!</span>
                                    <span className="animate-border tw-mt-20 tw-mb-35"></span>
                                </h2>
                            </div>
                            <div className="tw-results-content">
                                <p>We're SEO experts and are here to assist you with Digital Marketing in every nook and cranny. From planning to implementation and eventually attaining the coveted brand marketing results, Digital Marketing King is the Best Digital Marketing Agency In India and is always your 24x7 assistance. We've gained a robust reputation in the market by serving our customers with business-oriented results. Our company is committed to quality, fortitude and effectiveness. Give us a chance to strengthen your digital business and encounter a drastic yet plausible transformation on your own.</p>
                                <div className="results-traffic tw-mt-40">
                                    <div className="traffic-info">
                                        <img src={finalIcon1} alt="Traffic Icon" className="img-fluid" />
                                        <span>55% growth in organic traffic</span>
                                    </div>
                                    <div className="traffic-info">
                                        <img src={finalIcon2} alt="Ranking Icon" className="img-fluid" />
                                        <span>No. 1 rankings for multiple</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-3 text-center">
                            <div className="tw-traffic-counter">
                                <div className="traffic-icon-bg traffic-bg-1">
                                    <img src={result1} alt="" className="img-fluid" />
                                </div>
                                <h3>Increased average page views</h3>
                                <p><span className="counter">6.5</span>%</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="tw-traffic-counter">
                                <div className="traffic-icon-bg traffic-bg-1">
                                    <img src={result2} alt="" className="img-fluid" />
                                </div>
                                <h3>Increased Length of each visit</h3>
                                <p><span className="counter">7</span>%</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="tw-traffic-counter">
                                <div className="traffic-icon-bg traffic-bg-1">
                                    <img src={result3} alt="" className="img-fluid" />
                                </div>
                                <h3>Increased Organic traffic</h3>
                                <p><span className="counter">80</span>%</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="tw-traffic-counter">
                                <div className="traffic-icon-bg traffic-bg-1">
                                    <img src={result4} alt="" className="img-fluid" />
                                </div>
                                <h3>Decreased Bounce Rate</h3>
                                <p><span className="counter">5.4</span>%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scrolling Tech Stack Section */}
            <section className="marBlock overflowHidden">
                <div className="marqBlock">
                    <h2 className="large_heading2 maqrquee fw-bold text-uppercase">
                        <span className="stroke">DIGITAL MARKETING KING</span> & DIGITAL MARKETING AGENCY
                    </h2>
                    <h2 className="large_heading2 mt-4 maqrqueeReverse fw-bold text-uppercase">
                        DIGITAL MARKETING KING & <span className="stroke">WEB DESIGNING AGENCY</span>
                    </h2>
                </div>
                <div className="container">
                    <div className="technicalExpertise">
                        <div className="itemTechnicalExpertise">
                            <img src={phpIcon} alt="PHP" />
                            <h4 className="small_heading">PHP</h4>
                        </div>
                        <div className="itemTechnicalExpertise">
                            <img src={wordpressIcon} alt="WordPress" />
                            <h4 className="small_heading">WordPress</h4>
                        </div>
                        <div className="itemTechnicalExpertise">
                            <img src={aspIcon} alt="ASP.NET" />
                            <h4 className="small_heading">ASP .net</h4>
                        </div>
                        <div className="itemTechnicalExpertise">
                            <img src={mysqlIcon} alt="MySQL" />
                            <h4 className="small_heading">MySQL</h4>
                        </div>
                        <div className="itemTechnicalExpertise">
                            <img src={htmlIcon} alt="HTML5" />
                            <h4 className="small_heading">HTML</h4>
                        </div>
                        <div className="itemTechnicalExpertise">
                            <img src={drupalIcon} alt="Drupal" />
                            <h4 className="small_heading">Drupal</h4>
                        </div>
                        <div className="itemTechnicalExpertise">
                            <img src={jsIcon} alt="JavaScript" />
                            <h4 className="small_heading">JavaScript</h4>
                        </div>
                        <div className="itemTechnicalExpertise">
                            <img src={ciIcon} alt="CodeIgniter" />
                            <h4 className="small_heading">Codeigniter</h4>
                        </div>
                        <div className="itemTechnicalExpertise">
                            <img src={laravelIcon} alt="Laravel" />
                            <h4 className="small_heading">Laravel</h4>
                        </div>
                        <div className="itemTechnicalExpertise">
                            <img src={magentoIcon} alt="Magento" />
                            <h4 className="small_heading">Magento</h4>
                        </div>
                        <div className="itemTechnicalExpertise">
                            <img src={angularIcon} alt="Angular" />
                            <h4 className="small_heading">Angular</h4>
                        </div>
                        <div className="itemTechnicalExpertise">
                            <img src={cssIcon} alt="CSS" />
                            <h4 className="small_heading">CSS</h4>
                        </div>
                        <div className="itemTechnicalExpertise">
                            <img src={photoshopIcon} alt="Photoshop" />
                            <h4 className="small_heading">Photoshop</h4>
                        </div>
                        <div className="itemTechnicalExpertise">
                            <img src={illustratorIcon} alt="Illustrator" />
                            <h4 className="small_heading">Illustrator</h4>
                        </div>
                        <div className="itemTechnicalExpertise">
                            <img src={figmaIcon} alt="Figma" />
                            <h4 className="small_heading">Figma</h4>
                        </div>
                        <div className="itemTechnicalExpertise">
                            <img src={bootstrapIcon} alt="Bootstrap" />
                            <h4 className="small_heading">Bootstrap</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section id="tw-blog" className="tw-blog">
                <div className="container">
                    <div className="row text-center">
                        <div className="col section-heading wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
                            <h2>
                                Check Out Our <span>Blog</span>
                            </h2>
                            <span className="animate-border border-offwhite ml-auto mr-auto tw-mt-20"></span>
                        </div>
                    </div>
                    <div className="row wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                        <div className="col-lg-4 col-md-12">
                            <div className="tw-latest-post">
                                <div className="latest-post-media text-center">
                                    <img src={blog1} alt="blog_image_one" className="img-fluid" />
                                </div>
                                <div className="post-body">
                                    <div className="post-item-date">
                                        <div className="post-date">
                                            <span className="date">17</span>
                                            <span className="month">Feb</span>
                                        </div>
                                    </div>
                                    <div className="post-info">
                                        <div className="post-meta">
                                            <span className="post-author">
                                                Posted by <a href="#">Digital Marketing King</a>
                                            </span>
                                        </div>
                                        <h3 className="post-title"><a href="#">Google Partner in India</a></h3>
                                        <div className="entry-content">
                                            <p>An Ultimate Guide To Choosing The Perfect Google Premier Partner in India!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="tw-latest-post">
                                <div className="latest-post-media text-center">
                                    <img src={blog2} alt="blog_image_two" className="img-fluid" />
                                </div>
                                <div className="post-body">
                                    <div className="post-item-date">
                                        <div className="post-date">
                                            <span className="date">23</span>
                                            <span className="month">May</span>
                                        </div>
                                    </div>
                                    <div className="post-info">
                                        <div className="post-meta">
                                            <span className="post-author">
                                                Posted by <a href="#">Digital Marketing King</a>
                                            </span>
                                        </div>
                                        <h3 className="post-title"><a href="#">Best PPC Company in Delhi</a></h3>
                                        <div className="entry-content">
                                            <p>...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="tw-latest-post">
                                <div className="latest-post-media text-center">
                                    <img src={blog3} alt="blog_image_three" className="img-fluid" />
                                </div>
                                <div className="post-body">
                                    <div className="post-item-date">
                                        <div className="post-date">
                                            <span className="date">08</span>
                                            <span className="month">Apr</span>
                                        </div>
                                    </div>
                                    <div className="post-info">
                                        <div className="post-meta">
                                            <span className="post-author">
                                                Posted by <a href="#">Digital Marketing King</a>
                                            </span>
                                        </div>
                                        <h3 className="post-title"><a href="#">Top 10 Best Digital Marketing Agency in Delhi</a></h3>
                                        <div className="entry-content">
                                            <p>Therefore, choosing the right p...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Culture Section with Carousel */}
            <section id="tw-mission" className="tw-mission testimonial-default-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mission-carousel owl-carousel carousel-black-dots">
                                <div className="row">
                                    <div className="col-md-6 mr-auto align-self-md-center">
                                        <img src={mission1} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mission-body">
                                            <div className="mission-title tw-mb-40">
                                                <h2 className="column-title text-black">Our Mission</h2>
                                                <span className="animate-border bg-white border-yellow tw-mt-20"></span>
                                            </div>
                                            <p>
                                                Digital Marketing King always opts for the latest tools and advanced techniques to deliver clients the best results. On the other hand, our professional digital marketers and web developers thoroughly analyse the requirements and prepare an outline to show clients any changes if required by their end. We are the Best Digital Marketing Agency In India who aim to succeed in our niche by making our clients excel in their businesses. By saving our client's maximum cost and time, we ensure complete transparency during the project and open discussion to serve value.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mr-auto align-self-md-center">
                                        <img src={mission2} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mission-body">
                                            <div className="mission-title tw-mb-40">
                                                <h2 className="column-title text-black">Our Vision</h2>
                                                <span className="animate-border bg-white border-yellow tw-mt-20"></span>
                                            </div>
                                            <p>
                                                We all know the importance of flexibility in today's time, so we persistently strive for software development up-gradation along with innovative digital marketing & promotional approaches. We, the Best Digital Marketing Agency In India, closely understand all possible concerns of our clients and, thus, attempt to content them by providing 360-degree assistance before, during and even after the completion of their projects.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mr-auto align-self-md-center">
                                        <img src={mission3} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mission-body">
                                            <div className="mission-title tw-mb-40">
                                                <h2 className="column-title text-black">Our Culture</h2>
                                                <span className="animate-border bg-white border-yellow tw-mt-20"></span>
                                            </div>
                                            <p>
                                                With an aesthetic work culture and environment, we ensure all our team members face safety, comfort and value while working with us. We take care of every small and possible aspect to ensure our employees don't feel discomfort. To ensure upliftment in our knowledge and skills, we also conduct various skilful activities routinely to ensure each of our employees experiences equal endeavours to excel in their domain. We've served numerous companies, and the number is still counting, which overall makes us the Best Digital Marketing Agency In India. We are ecstatic to have helped renowned businesses achieve excellence with our optimal digital marketing solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <div className="container mt-5 mb-5">
                <div className="row text-center">
                    <div className="col section-heading wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
                        <h2>( FAQ ) <span>Frequently Asked Questions</span></h2>
                        <span className="animate-border border-offwhite ml-auto mr-auto tw-mt-20"></span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div id="accordion" role="tablist">
                            <div className="card">
                                <div className="card-header" role="tab" id="headingOne" onClick={() => toggleFaq('faq1')} style={{ cursor: 'pointer' }}>
                                    <h4>
                                        <a>
                                            Whom can we help with business templates, custom web designing and mobile app development?
                                            <i className={`faq-indicator fa ${activeFaq === 'faq1' ? 'fa-minus' : 'fa-plus'}`}></i>
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className={`panel-collapse collapse ${activeFaq === 'faq1' ? 'show' : ''}`} role="tabpanel" aria-labelledby="headingOne">
                                    <div className="card-block">
                                        If you are an individual with an out of box idea or a sole entrepreneur with a sole business concept or a start-up or a leading organization, we Digital Marketing King can help you all with the best result-oriented solutions. Our professionals thoroughly understand your business objective and customize solutions accordingly. For personalized web solutions- connect with us.
                                    </div>
                                </div>
                            </div>

                            {/* New FAQs */}
                            <div className="card">
                                <div className="card-header" role="tab" id="headingTwo" onClick={() => toggleFaq('faq2')} style={{ cursor: 'pointer' }}>
                                    <h4>
                                        <a>
                                            Which digital marketing technique is best - SEO, SMO, SMM, or PPC?
                                            <i className={`faq-indicator fa ${activeFaq === 'faq2' ? 'fa-minus' : 'fa-plus'}`}></i>
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className={`panel-collapse collapse ${activeFaq === 'faq2' ? 'show' : ''}`} role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="card-block">
                                        The "best" technique depends on your business goals. SEO provides long-term organic growth, while PPC offers immediate visibility. SMO and SMM are excellent for brand awareness and engagement. We often recommend a holistic approach combining these strategies for optimal results.
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" role="tab" id="headingThree" onClick={() => toggleFaq('faq3')} style={{ cursor: 'pointer' }}>
                                    <h4>
                                        <a>
                                            How much does Digital Marketing King cost for its IT services?
                                            <i className={`faq-indicator fa ${activeFaq === 'faq3' ? 'fa-minus' : 'fa-plus'}`}></i>
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className={`panel-collapse collapse ${activeFaq === 'faq3' ? 'show' : ''}`} role="tabpanel" aria-labelledby="headingThree">
                                    <div className="card-block">
                                        Our pricing is tailored to your specific requirements and project scope. We offer flexible packages designed to provide the best value and ROI for your business. Please contact us for a customized quote.
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" role="tab" id="headingFour" onClick={() => toggleFaq('faq4')} style={{ cursor: 'pointer' }}>
                                    <h4>
                                        <a>
                                            Will you be aware at each stage of your project operations & proceedings?
                                            <i className={`faq-indicator fa ${activeFaq === 'faq4' ? 'fa-minus' : 'fa-plus'}`}></i>
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseFour" className={`panel-collapse collapse ${activeFaq === 'faq4' ? 'show' : ''}`} role="tabpanel" aria-labelledby="headingFour">
                                    <div className="card-block">
                                        Yes, absolutely. We believe in complete transparency. You will be kept informed at every stage of the project through regular updates and reports, ensuring you are always in the loop regarding progress and milestones.
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" role="tab" id="headingFive" onClick={() => toggleFaq('faq5')} style={{ cursor: 'pointer' }}>
                                    <h4>
                                        <a>
                                            Who will be in charge of providing the content for digital marketing?
                                            <i className={`faq-indicator fa ${activeFaq === 'faq5' ? 'fa-minus' : 'fa-plus'}`}></i>
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseFive" className={`panel-collapse collapse ${activeFaq === 'faq5' ? 'show' : ''}`} role="tabpanel" aria-labelledby="headingFive">
                                    <div className="card-block">
                                        We have a dedicated team of professional content writers who can create high-quality, engaging, and SEO-friendly content for your digital marketing campaigns. However, if you prefer to provide your own content, we are happy to work with that as well.
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" role="tab" id="headingSix" onClick={() => toggleFaq('faq6')} style={{ cursor: 'pointer' }}>
                                    <h4>
                                        <a>
                                            Why should you choose us as your Google SEM & Digital Marketing Partner?
                                            <i className={`faq-indicator fa ${activeFaq === 'faq6' ? 'fa-minus' : 'fa-plus'}`}></i>
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseSix" className={`panel-collapse collapse ${activeFaq === 'faq6' ? 'show' : ''}`} role="tabpanel" aria-labelledby="headingSix">
                                    <div className="card-block">
                                        As a certified Google Partner, we have proven expertise and access to the latest tools and insights. Our data-driven approach, experienced team, and commitment to delivering measurable results make us the ideal partner for your digital growth.
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" role="tab" id="headingSeven" onClick={() => toggleFaq('faq7')} style={{ cursor: 'pointer' }}>
                                    <h4>
                                        <a>
                                            How do we keep up with the SEO upgrades?
                                            <i className={`faq-indicator fa ${activeFaq === 'faq7' ? 'fa-minus' : 'fa-plus'}`}></i>
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseSeven" className={`panel-collapse collapse ${activeFaq === 'faq7' ? 'show' : ''}`} role="tabpanel" aria-labelledby="headingSeven">
                                    <div className="card-block">
                                        Our team constantly monitors Google's algorithm updates and industry trends. We proactively adjust our strategies and techniques to ensure compliance and maintain high rankings for our clients, ensuring your business stays ahead of the curve.
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" role="tab" id="headingEight" onClick={() => toggleFaq('faq8')} style={{ cursor: 'pointer' }}>
                                    <h4>
                                        <a>
                                            How is web development & designing crucially significant on direct sales or income generation?
                                            <i className={`faq-indicator fa ${activeFaq === 'faq8' ? 'fa-minus' : 'fa-plus'}`}></i>
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseEight" className={`panel-collapse collapse ${activeFaq === 'faq8' ? 'show' : ''}`} role="tabpanel" aria-labelledby="headingEight">
                                    <div className="card-block">
                                        With the advancement of technologies and innovations, competition has reached a pinnacle. To cope in this cut-throat competitive market, every business owner, investor and entrepreneur needs a business webpage to create an elegant yet direct window to communicate with the audience and fulfill their needs.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials and Contact Form Section */}
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
                                            <img src="/assets/images/icon-image/testimonial1.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="testimonial-text">
                                        <p>I already had one website which was not SEO-friendly and also not properly designed. It all started when I gave my project to one novice web designing company but this time, I'm out of words to express my gratitude to Digital Marketing King for such creative, apt and excellent work done just the way I wanted.</p>
                                        <div className="testimonial-meta">
                                            <h4>
                                                Rahul Mittal <small>CEO Disha Fashion</small>
                                            </h4>
                                            <i className="fa fa-quote-right" style={{ fontSize: '36px', color: '#fec658', opacity: 0.8 }}></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="tw-testimonial-wrapper">
                                    <div className="testimonial-bg testimonial-bg-orange">
                                        <div className="testimonial-icon">
                                            <img src="/assets/images/icon-image/testimonial1.png" alt="" className="img-fluid" />
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
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeInRight" data-wow-duration="1s">
                            <div className="login-form box-shadow white-bg p-4 p-md-3 text-center">
                                <div className="tw-testimonial-content text-center">
                                    <h2 className="section-title myquiiee">Connect with our Digital Marketing Experts</h2>
                                    <span className="animate-border border-green tw-mt-20 tw-mb-40 ml-auto mr-auto"></span>
                                </div>
                                <form method="post" onSubmit={handleFormSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="name" className="form-control" placeholder="Name" required value={formData.name} onChange={handleFormChange} style={{ backgroundColor: '#fff', color: '#333' }} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="company" placeholder="Company Name" required value={formData.company} onChange={handleFormChange} style={{ backgroundColor: '#fff', color: '#333' }} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="tel" className="form-control" name="phone" pattern="[1-9]{1}[0-9]{9}" placeholder="Mobile No." required value={formData.phone} onChange={handleFormChange} style={{ backgroundColor: '#fff', color: '#333' }} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" placeholder="Email Address" required value={formData.email} onChange={handleFormChange} style={{ backgroundColor: '#fff', color: '#333' }} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <select className="form-control" name="service" value={formData.service} onChange={handleFormChange} style={{ backgroundColor: '#fff', color: '#333' }}>
                                                    <option value="">Select Service</option>
                                                    <option value="SEO">SEO</option>
                                                    <option value="SMO">SMO</option>
                                                    <option value="PPC">PPC</option>
                                                    <option value="Web Design">Web Design</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea rows="3" className="form-control" name="message" required placeholder="Descriptions" value={formData.message} onChange={handleFormChange} style={{ backgroundColor: '#fff', color: '#333' }}></textarea>
                                            </div>
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

            {/* Portfolio Gallery Section */}
            <div id="tw-final-result" className="mt-5 mb-5 tw-final-result wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
                <div className="container">
                    <div className="row text-center">
                        <div className="col section-heading wow fadeInDown" data-wow-duration="1s">
                            <h2>Want to check out <span>Our Portfolio?</span></h2>
                            <span className="animate-border ml-auto mr-auto tw-mt-20"></span>
                        </div>
                    </div>
                    <div className="row mb-5 mt-5">
                        <div className="col-6 col-md-3 mt-3">
                            <div className="screen client-image" onClick={(e) => e.currentTarget.classList.toggle('active')}>
                                <img src="/assets/img/portfolio/1.webp" className="client-img" alt="Client Logo" />
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mt-3">
                            <div className="screen client-image" onClick={(e) => e.currentTarget.classList.toggle('active')}>
                                <img src="/assets/img/portfolio/2.webp" className="client-img" alt="Client Logo" />
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mt-3">
                            <div className="screen client-image" onClick={(e) => e.currentTarget.classList.toggle('active')}>
                                <img src="/assets/img/portfolio/3.webp" className="client-img" alt="Client Logo" />
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mt-3">
                            <div className="screen client-image" onClick={(e) => e.currentTarget.classList.toggle('active')}>
                                <img src="/assets/img/portfolio/4.webp" className="client-img" alt="Client Logo" />
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mt-3">
                            <div className="screen client-image" onClick={(e) => e.currentTarget.classList.toggle('active')}>
                                <img src="/assets/img/portfolio/5.webp" className="client-img" alt="Client Logo" />
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mt-3">
                            <div className="screen client-image" onClick={(e) => e.currentTarget.classList.toggle('active')}>
                                <img src="/assets/img/portfolio/6.webp" className="client-img" alt="Client Logo" />
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mt-3">
                            <div className="screen client-image" onClick={(e) => e.currentTarget.classList.toggle('active')}>
                                <img src="/assets/img/portfolio/7.webp" className="client-img" alt="Client Logo" />
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mt-3">
                            <div className="screen client-image" onClick={(e) => e.currentTarget.classList.toggle('active')}>
                                <img src="/assets/img/portfolio/8.webp" className="client-img" alt="Client Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Brand Presence CTA Section */}
            <section id="tw-analysis" className="tw-analysis-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 text-center wow fadeInDown">
                            <div className="analysis-form">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10 col-md-12">
                                        <h2 className="column-title" style={{ marginBottom: '20px' }}>
                                            Boost Your Brand Presence <span className="text-white">with India's Leading Digital Marketing Company</span>
                                        </h2>
                                        <p className="text-white" style={{ marginBottom: '30px', fontSize: '16px' }}>
                                            We design solution to perform with Excellence and Technical Upgradation. Our Products and Digital marketing Services are laced with rich experience of our company which makes your projects failure proof.
                                        </p>
                                        <div className="form-group">
                                            <a href="/contact" className="btn btn-secondary mw-80 no-shadows" style={{
                                                backgroundColor: '#fec658',
                                                border: 'none',
                                                padding: '15px 50px',
                                                fontSize: '16px',
                                                fontWeight: '700',
                                                borderRadius: '50px',
                                                textTransform: 'uppercase',
                                                display: 'inline-block'
                                            }}>Let's Talk</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Home;

