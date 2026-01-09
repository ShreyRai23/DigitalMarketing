import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Import banner image
import banner5 from '../../assets/images/banner/banner5.jpg';
import testimonialIcon from '../../assets/images/icon-image/testimonial1.png';
import { api } from '../../utils/api';
import '../../styles/service-mobile.css';

// Use image URL from the actual website
const ecommerceWebDevImage = 'https://www.digitalmarketingking.in/img/dm/ecommerce-website-development-in-delhi.webp';

const EcommerceWebDevelopment = () => {
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
        <title>Ecommerce Website Development</title>
        <meta name="description" content="Looking for Best E-commerce Website Development Company in Delhi? Digital Marketing King offers best ecommerce Development services. Contact us now!" />
      </Helmet>

      <div className="ecommerce-web-development-page">
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
                  <h1 className="banner-title">Ecommerce Website Development</h1>
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
                    <h2>Digital Marketing King: Unleash Your Business Progress With Top-Rated E-commerce Website Development!</h2>
                    <div className="entry-content">
                      <img className="entry-img" alt="Best E-commerce Website Development Company in Delhi" src={ecommerceWebDevImage} />

                      <p>
                        The steady growth in online shopping over the past years has been witnessed by us. That's one of the reasons why today's entrepreneurs, business owners and investors must not overlook the digital transformation of businesses. There's a rigorous need for <b><a href="https://digitalmarketingking.in/ecommerce-website-development.php">e-commerce website development</a></b> for those businesses that aspire to become a part of the global retail market. A well-established website enables customers to shop conveniently and ultimately meet the end objectives of that organization.
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
                        Furthermore, a competent website helps a business gain prominent attention from more than local areas and drive greater sales & improve ROI. You can get the <b><a href="https://digitalmarketingking.in/ecommerce-website-development.php">ecommerce website development service</a></b> from anywhere as there are countless companies catering to diverse IT services. However, it's important for every individual to hire the right company that serves authentic solutions at competitive prices. Let's dig more into the usefulness of web development services and their importance in today's time.
                      </p>

                      <h5>Digital Marketing King: A Terrific Ecommerce Website Development Company!</h5>

                      <p>
                        The development of an Ecommerce website is a professional task which is performed by specialized programmers and coders. <b><a href="https://digitalmarketingking.in">Digital Marketing King</a></b> is a supreme and top-rated <b><a href="https://digitalmarketingking.in/ecommerce-website-development.php">ecommerce website development company in India</a></b>, encompassing a team of adept website developers and designers. We help various individuals and companies reach the peak of success by building an enticing, mobile-friendly and impeccable business site for them.
                      </p>

                      <p>
                        Our knowledgeable programmers first create a plan right after the deal and share it with our clients to present how things will go further. At this point, the client can also help us with some suggestions and ideas that an individual seeks to add in. After the profound and precise planning, our development team goes on to the execution part. Herein our professionals work in the front-end and backend of the website, such as the cart section, product pages, contact & support section and order form.
                      </p>

                      <h5>Why Do You Need Ecommerce Website Development Service In Delhi?</h5>
                      <p>
                        Here is everything you need to learn about how a professional <b><a href="https://digitalmarketingking.in/ecommerce-website-development.php">Ecommerce Website Development Company in Delhi</a></b> would bring so much to your business. You need to have an autonomous and competent website if you aspire to run your business for the long run and lastly gain maximum sales from it.
                      </p>

                      <ul>
                        <li>
                          <b>Learn About Your Target Audience:</b> It's important to <b><a href="https://digitalmarketingking.in/ecommerce-website-development.php">Shopify website development services</a></b> because you get to learn about your target audience. By knowing the ever-changing behavior of your customers, you can optimize it every then and now through your website. The demographics inform so much via your business website, such as how your audience reached you, what they seek on your business page, from where they're navigating, and so on. This way, with a business website, your goals and product deliverables to customers become easy to achieve.
                        </li><br />
                        <li>
                          <b>Strengthening Your Brand's Presence:</b> Over the past years, traditional marketing has been replaced by Internet marketing because way too many users prefer online shopping. The <b><a href="https://digitalmarketingking.in/ecommerce-website-development.php">Shopify store development services</a></b> help businesses to strengthen brand visibility and awareness with utmost recognition. Because every brand gets good space for customization in logo, character count, description, packing, etc. With a website presence, customers recognize the brand by understanding that the purchases belong to a specific business page.
                        </li><br />
                        <li>
                          <b>Comprehensive Control On The Website:</b> Choosing <b><a href="https://digitalmarketingking.in/ecommerce-website-development.php">Magento ecommerce development services</a></b> gives you the liberty to run creative campaigns the way you want. Also, it gives you full freedom to operate your business activities as per your choice. Since customer comfort is most important in an online business, you will have the choice to make the user's experience seamless by organizing your website as required. You can add or eliminate the features or processes to ensure the best storefront for your online business.
                        </li><br />
                        <li>
                          <b>Choosing Apt Marketing Strategy:</b> Having an own business site gives complete choice to the owner to run the business as one aspires to. The individual can choose any marketing strategy that he finds apt based on the current status or business requirement. By hiring an <b><a href="https://digitalmarketingking.in/ecommerce-website-development.php">Ecommerce Website Development agency in Delhi</a></b>, a business can set up its profile and present the products to the target audience via enticing and robust website creation. With this aspect, one can choose the marketing strategy or run creative campaigns to drive greater traffic to the website and to improve its ranking on Google and other recognized search channels.
                        </li>
                      </ul>

                      <h5>Traits Of Perfect Ecommerce Website:</h5>
                      <p>
                        It is said all over again to choose and employ the trusted and skilled <b><a href="https://digitalmarketingking.in/ecommerce-website-development.php">Ecommerce Website Development company in India</a></b> to create a competent website with good traits and functioning. Below are some of the absolute traits of the finest ecommerce business website.
                      </p>

                      <ul>
                        <li>
                          <b>Security:</b> That's the most crucial facet to take care of while hiring a Shopify web developer. Your customers are above anything in your online business journey because ultimately they're going to grow it with their shopping experiences. Therefore, it's vital to ensure good security on your ecommerce site so that none of the information whether financial or personal details of your users are hacked or accessed by cyberpunks.
                        </li><br />
                        <li>
                          <b>UI/UX:</b> It can't certainly be overlooked in any way. A good user experience and user interface are two very important traits of an ideal ecommerce website because it enables a flawless shopping journey for customers. By optimizing the user experience with an easy user interface, a business gains the credibility of customers, eventually allowing them to visit again and recommend the business page to their known ones.
                        </li><br />
                        <li>
                          <b>Checkout Flow:</b> The complex sign-up processes and prolonged waitings to check in can easily daunt the customers and push them to leave. That's one of the common reasons why a business page easily and frequently loses a high number of customers. A potential ecommerce website must contain a smooth checkout flow for users so that they don't have trouble at any step while peacefully shopping for your brand.
                        </li><br />
                        <li>
                          <b>Mobile-friendliness:</b> The recent survey report affirms that netizens spend more than half of their day using their devices and handy gadgets. That's why it is essential to have a business site with comprehensive mobile friendliness. So that any user can easily and quickly access the website on a mobile phone and make transactions seamlessly without any hassle.
                        </li>
                      </ul>

                      <h5>Hire Experts; Hire Digital Marketing King!</h5>
                      <p>
                        Since we have together discovered the importance of contacting an authentic <b><a href="https://digitalmarketingking.in/ecommerce-website-development.php">ecommerce website development company</a></b>, <b><a href="https://digitalmarketingking.in">Digital Marketing King</a></b> is a one-stop destination for impeccable IT business services. From <b><a href="https://digitalmarketingking.in/ecommerce-website-development.php">ecommerce website development</a></b> to <b><a href="https://digitalmarketingking.in/ecommerce-website-development.php">Shopify website development services</a></b> and more different technologies, we aim to uplift your business and get you to meet your short and long-term business objectives.
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
                            required style={{ backgroundColor: '#fff', border: '2px solid #fec658' }}
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

export default EcommerceWebDevelopment;
