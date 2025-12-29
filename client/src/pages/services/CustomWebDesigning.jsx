import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../utils/api';

// Import banner image
import banner5 from '../../assets/images/banner/banner5.jpg';
import testimonialIcon from '../../assets/images/icon-image/testimonial1.png';

// Use image URL from the actual website
const customWebImage = 'https://www.digitalmarketingking.in/img/dm/custom-website-designing-in-delhi.webp';

const CustomWebDesigning = () => {
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
        <title>Custom Website Designing Company in Delhi</title>
        <meta name="description" content="Looking For Custom Website Designing Company in Delhi? Digital Marketing King is a Prominent Custom Website Designing service Provider agency in Delhi." />
      </Helmet>

      <div className="custom-web-designing-page">
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
                  <h1 className="banner-title">Custom Website Designing Company in Delhi</h1>
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
                            WhatsApp us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="post-body">
                    <h2>Prominent Reasons Why You Should Choose Custom Website Designing Service In Delhi!</h2>
                    <div className="entry-content">
                      <img className="entry-img" alt="Custom Website Designing Agency in Delhi" src={customWebImage} />

                      <p>
                        The advent of technological advancements and the latest innovation has catered for the audience in diverse manners. And undeniably <b><a href="https://digitalmarketingking.in/custom-website-designing.php">custom web design</a></b> is one of those integral upliftments of today's fast-paced world. With the invention of affordable custom web design, it has become significantly easier and quicker to interact with your target audience and create a potential brand image in the present fierce competition. And that's how we all witness the importance of a custom website designing service in Delhi.
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
                        For presenting a better storyline of your brand in front of your customers, you would ultimately require the assistance of a professional custom web design company. The potential agencies' apt knowledge and skills contribute a valuable impact on your business and expand its digital presence among the general community of web visitors. However, it's pertinent to understand that custom website designing is built from scratch, encompassing technical programming languages and scripting sources. Henceforth, here are some crucial reasons why you should choose <b><a href="https://digitalmarketingking.in/custom-website-designing.php">custom web design services</a></b>.
                      </p>

                      <ul>
                        <li>
                          <b>Uniqueness:</b> Considering the current market demand and needs of the ultimate customers is a must yet the foremost thing while opting for the custom web design. That's how your brand will create a unique identity in the market and the tailored solutions will entice your audience. And it is possible when you analyze and figure out the <b><a href="https://digitalmarketingking.in/custom-website-designing.php">best custom website design company</a></b> for web development & designing. Typically, template solutions won't give you 360 degrees of customization and are exactly up to the expected outcome.
                        </li><br />
                        <li>
                          <b>Enhanced User Experience:</b> Finding the right <b><a href="https://digitalmarketingking.in/custom-website-designing.php">custom website designing company in Delhi</a></b> is vital in order to create user-friendly websites for your final customers. You may find affordable custom web design pricing, but only a specialized agency knows what the contemporary netizens are up to and navigate on search engines. Keeping this viewpoint, a custom website design agency creates comprehensive yet responsive user-friendly and mobile-friendly websites to give web visitors an optimal experience.
                        </li><br />
                        <li>
                          <b>Robust Security:</b> None of the users would stick to your website if they doubt its security. That's why it is imperative to consult the trustworthy and only experienced custom website design company to create a potentially strong and secure webpage for your business. With SSL security technology and advanced coding, a <b><a href="https://digitalmarketingking.in/custom-website-designing.php">custom web design agency</a></b> ensures your website is free from data breaching or security issues. You can closely understand the custom web design packages and discuss with the company to know what benefits you will be offered in a specific plan along with the sureties.
                        </li><br />
                      </ul>

                      <h5>Conclusion!</h5>
                      <p>
                        In a nutshell, <b><a href="https://digitalmarketingking.in/custom-website-designing.php">custom website designing service in Delhi</a></b> is extremely beneficial for online businesses and one should definitely not miss out on them. This facet helps you render a greater user experience to prospective customers and also elevates a business's web presence. <b><a href="https://digitalmarketingking.in/">Digital Marketing King</a></b> is a certified and custom website design cost-friendly company in India and offers comprehensive modern IT business solutions.
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

export default CustomWebDesigning;
