import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Import banner image
import banner5 from '../../assets/images/banner/banner5.jpg';
import testimonialIcon from '../../assets/images/icon-image/testimonial1.png';
import { api } from '../../utils/api';
import '../../styles/service-mobile.css';

// Use image URL from the actual website
const phpWebDevImage = 'https://www.digitalmarketingking.in/img/dm/php-website-development-company-in-delhi.webp';

const PhpWebDevelopment = () => {
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
      text: "I already had one website which was not SEO-friendly and also not properly designed. It all started when I gave my project to one novice web designing company but this time, I'm out of words to express  my gratitude to Digital Marketing King for such creative, apt and excellent work done just the way I wanted."
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
    },
    {
      name: 'Anupam Sharma',
      company: 'CEO Unique Service 4 U',
      text: "Being an owner of an E-commerce business, it was actually tough for me to join hands with any IT firm before validating their authenticity. All thanks to my friend who recommended me for Digital Marketing King. As their name speaks, they are truly adept and experienced in their niche. Thanks for such a wonderful deal!"
    },
    {
      name: 'Rahul Khanna',
      company: 'CEO Am Cooling Systems',
      text: "I chose Digital Marketing King for my website's digital marketing services because I had a low-ranked and non-SEO-friendly business site. My hearty gratitude goes to this company for doing such incredible work for my business. I highly recommend this organization for those looking for top-notch Digital Marketing solutions."
    },
    {
      name: 'Rajesh Gupta',
      company: 'CEO Gupta and Sons.',
      text: "My reason for claiming Digital Marketing King as the best Website designing company is because of their vast yet skilled team of professionals. They listen to you patiently and resolve all your queries as a priority. In fact, their budget is very much affordable to consider for qualitative IT business solutions."
    },
    {
      name: 'Aman Khurana',
      company: 'CEO Ultra Systems',
      text: "I must say that I've encountered a massive difference in my success rates after partnering with Digital Marketing King. This Google promotion company serves services which are just impeccable. My business got high brand recognition in the market in the shortest span because its marketing strategies are seamless. Well done team and keep up doing a great job!"
    },
    {
      name: 'Amit Kumar',
      company: 'CEO D.K Machine',
      text: "Thanks, Digital Marketing King for being the back of my online business. Certainly, I'm going to partner with you for my future projects too because of your intense hard work, dedicated team and promising outcomes. Highly recommend this Social media marketing agency to every potential business owner. They perform from scratch and take the business to another level."
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
        <title>PHP Website Development</title>
        <meta name="description" content="Looking for Best PHP Website Development Company in Delhi? Digital Marketing King offers best PHP Development services. Contact us now!" />
      </Helmet>

      <div className="php-web-development-page">
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
                  <h1 className="banner-title">PHP Website Development</h1>
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
                    <h2>Digital Marketing King: End Your Quest For PHP Website Development Company In India!</h2>
                    <div className="entry-content">
                      <img className="entry-img" alt="Best PHP Website Development Company in Delhi" src={phpWebDevImage} />

                      <p>
                        Undoubtedly, every single passing day is majorly contributing to the IT world. With the availability of plenty of technologies and the invention of frameworks, Information Technology is at its summit. PHP website development is one such impeccable invention by the ever-growing IT companies for those looking to thrive in the marketplace. If you too are looking for PHP web development or questing to connect with a professional <b><a href="https://digitalmarketingking.in/php-website-development.php">PHP website development company</a></b>, this page is probably going to turn out to be worthy for you.
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

                      <p>
                        Digital Marketing King is a recognized PHP website development company in Delhi. With a robust clientele and seamless work strategy, it offers the supreme PHP website development service all across India and at the international level, too. Since Laravel website development services and custom PHP web development are highly demanded in the market, choosing the finest Laravel web development company could be a struggle for anyone. Putting a stop to all the hustle of finding the best ever <b><a href="https://digitalmarketingking.in/php-website-development.php">PHP website development agency</a></b>, below are certain unparalleled codeigniter web development services we cater to you.
                      </p>

                      <h5>Why Choose A PHP Website Development Service?</h5>

                      <ul>
                        <li>
                          <b>Prompt Load Time:</b> Our expert PHP website developer best knows how to integrate the right coding and features during Laravel website development. We are a prominent Laravel website development company catering for the comprehensive needs of our customers for better results & productivity. Our web developer PHP ensures their PHP programming takes less time to execute by using its own memory space.
                        </li><br />
                        <li>
                          <b>Cost-Effective Services:</b> Digital Marketing King offers Laravel web application development services at truly pocket-friendly rates in comparison to other scripting language web development solutions. Since PHP is open-source, it covers less cost for tools to be used in the PHP website development cost. Furthermore, our PHP web developers are super skilled and knowledgeable that they'll find a hosting provider offering free-of-cost Linux servers for your custom Laravel web development.
                        </li><br />
                        <li>
                          <b>Security:</b> We are a certified, authentic and recognized codeigniter web development company that aims to cater to its client with full satisfaction while rendering PHP developer services. When it comes to the security and flexibility of our custom PHP web development services, our teamwork acts as a shield to eliminate any sort of vulnerability from the website. With high proficiency and experience, we as a Laravel web development agency write secure codes for your website so as to keep it safe from any kind of cyberattack & hacking.
                        </li><br />
                        <li>
                          <b>Support & Maintenance:</b> It's not like we will be with you during the custom Laravel web development or PHP website development service. Instead, we will provide you with 360 degrees of support and maintenance of your comprehensive PHP website and application for its seamless performance even after the completion of the project. Our high-end integration with top-notch programming will turn out to be a boon for your online business.
                        </li><br />
                      </ul>

                      <h5>Choose Best; Experience Best!</h5>
                      <p>
                        When it comes to comparing the Laravel website cost from other programming languages, you will definitely find our Laravel website price inexpensive and apt as per the market situation. After covid-19, every second business has switched to online business which is eventually pushing everyone to find a competent <b><a href="https://digitalmarketingking.in/php-website-development.php">PHP website development company in India</a></b>. Our PHP website development services will certainly impress you to the core and take your business to another level. Visit our website to explore our broader spectrum of experience, portfolio and expertise in PHP web development.
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

export default PhpWebDevelopment;
