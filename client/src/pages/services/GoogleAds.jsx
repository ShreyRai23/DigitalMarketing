import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../../styles/service-mobile.css';

const GoogleAds = () => {
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
                <title>Google Ads Services in Delhi | PPC Management | Digital Marketing King</title>
                <meta name="description" content="Get best Google Ads services in Delhi. Our certified Google Ads experts help you create effective PPC campaigns for maximum ROI." />
                <link rel="canonical" href="https://www.digitalmarketingking.in/google-ads.php" />
            </Helmet>

            <div id="banner-area" className="banner-area" style={{ backgroundImage: 'url(https://www.digitalmarketingking.in/images/banner/banner5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '100px' }}>
                <div className="container"><div className="row"><div className="col-sm-12"><div className="banner-heading"><h1 className="banner-title">Google Ads Services</h1><ol className="breadcrumb"><li>Home</li><li><a href="#">Digital Marketing</a></li></ol></div></div></div></div>
            </div>

            <section className="r-bg-x sec-pad">
                <div className="container"><div className="row"><div className="col-lg-8"><div className="cta-heading-2 bx11">
                    <img src="https://www.digitalmarketingking.in/img/dm/google-ads.webp" className="img-fluid" alt="Google Ads" />
                    <h2>Google Ads</h2>

                    <div className="contact-form-wrapper1 d-flex justify-content-center">
                        <form onSubmit={handleFormSubmit} className="contact-form1">
                            <h5 className="title">Connect with </h5><p className="description">Schedule A Call</p>
                            <div><input type="text" className="form-control1" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Name" required /></div>
                            <div><input type="text" className="form-control1" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} placeholder="Mobile Number" maxLength="12" required /></div>
                            <div><input type="text" className="form-control1" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} placeholder="Service" required /></div>
                            <div className="submit-button-wrapper"><input type="submit" value="Submit" /></div>
                        </form>
                    </div>

                    <p>With ever increasing use of the internet, Google Adwords is an extremely potent feature for you to have the consumers find you online. Google is the preferred search engine for 81 percent of the people in India and 90 percent of the world. This makes it all the more important for your company to be visible to potential customers. Digital Marketing King offers you the perfect way to make your business visible through Google advertising.</p>

                    <p>Google AdWords, presently termed as Google Ads are paid for advertisements or SEM- search engine marketing, which gets showcased on Google search pages, YouTube and on different websites. It is one of the most sought ways to get leads and sales for businesses that need quick turnaround from customers. Put broadly, you pay only when somebody clicks on your listing that gets featured prominently on the first page of Google's search results. Google Adwords is the flagship service of Google. It is an economically feasible option for advertisers as there is practically no minimum investment, and you can make daily or monthly budget caps.</p>

                    <p>Google AdWords is a cost effective way of building brand awareness and popularity, wherein you not only get to generate higher ROI and better conversion through more business but you can also track the daily progress of your business metrics. As one of the most trusted PPC management services in Delhi, we at Digital Marketing King, Offer comprehensive Google AdWords services to help you reach the right audience that fits your brand. Our team of certified professionals have the right expertise and insights to make your AdWords campaigns a success. We execute various ad formats & paid tool such as text ads, image ads, remarketing campaigns, and video ads, so that you can increase your sales channel. Team Digital Marketing Experts can understand this; from the simplest to most complex campaigns, not limiting them to ad-groups and strategies related to the budgets best suited for each campaign.</p>

                    <p>While over 42,000 searches take place on Google every second, which is 3.6 billion searches a day! The Google Ads platform has proven invaluable at connecting these searchers with relevant companies. Google ads are a very cost-effective and efficient way to maintain leads for your website. Keywords define the search queries of your target customer, and placing a bid on particular keyword sets to show your listing when a corresponding search is performed. The catch is to create your ad in a way that motivates the searchers to follow through and take the action that your ad has motivated them to take, whether it is making a purchase, subscribing to a newsletter or a contacting form for service.</p>

                    <p>Our efficient team of marketers will assure that your ads rank at the top for the right keywords at the right time to bring you more and more search traffic. Our professionals study your competitors, bid and budget optimization, landing page design to ensure that your marketing investment brings down the 'cost of acquisition of customers' and increases conversion. Your business doesn't need to waste money on ads that aren't relevant to your targeted keyword. Our team ensures that you only pay for the ads people click on. The best thing about Google Ads is, it can be started right away, in contrast to SEO which can take months, Google Ads can start giving results instantly. That is why it makes a tremendous digital marketing tool.</p>

                    <p>With Google being the most visited and trusted site on the web: Google Adwords has potential to convert leads into customers for your business. The beauty is in its simplicity – you don't need a website to run a Google Adwords campaign, all you need is a strong landing page, strong customer service and the correct copy writing expertise to see how it can benefit your business. Combining it with web analytics, social media marketing, and search engine optimization techniques, our team of dynamic and skilled consultants at Digital Marketing King help you optimize your advertising campaign to give you maximum results at the lowest rates. Contact us for Google Advertising today to see where it can take your business!</p>

                    <p><strong>What is Google Ads?</strong></p>
                    <p>Google Ads (formerly known as Google AdWords, before July 2018). The largest and most widely used advertising network on the internet, has changed its name. Google Ads is the new name that is still the same, powerful platform "that makes your brands appear relevant and visible to people." which enables businesses that advertise online to display brief advertisements, service offers, product listings, video content and even inbound install applications within the Google ad network that is to web users. With Digital Marketing King, Google Ads Company in Delhi, your AdWords account will be in professional hands.</p>

                    <p><strong>How do Google Ads work?</strong></p>
                    <p>Google Ads users are provided by Google with three major options PPC (pay per click) marketing: They can go with their Search ads network, Display Ads or Video Ads. Search Ads Network, while ads can be set as text or image which are displayed at the top of the standard search results on the search engine's result page of Google. Apart from search ads on Google, it has a number of partners on which you can advertise with the help of Google Ads like Gmail, Google maps listings and YouTube.  Digital Marketing King is one of the best Google Adwords service providers in Delhi. Our team have a complete knowledge about Google Adwords, our PPC expert and strategist work day and night for providing the best Google Adwords services.</p>

                    <p><strong>What are the benefits of Google Ads?</strong></p>
                    <p>We all know how important online marketing has become for every business and for its survival in today's competitive digital world. Unlike other forms of marketing which can create a sense of brand awareness. Google Ads has the ability to put your business in front of prospective leads likely to convert into customers.  Digital Marketing King, the best Google Adwords company in Delhi, drives your campaign for success. Some of the major Google Adwords Benefits are enlisted below:</p>

                    <p><strong>a) Focus on your business</strong></p>
                    <p>Imagine you have a health and fitness club; you design a campaign focused on good fit and other relevant keywords. Users who are interested in good fitness and for gym, they will land upon on your website. It is the only unique feature of Google Ads, which allows you to promote only in specific countries, regions and cities. It also has a "radius targeting" option which enables you to specify an area around your business headquarter location.</p>

                    <p><strong>b) You are charged when people hits on your ad</strong></p>
                    <p>For using Google Ads for your business, You don't have to pay unless they click on your ads. This is a remarkable feature that puts you ahead in the industry of competitive digital market. With Google Ads, you won't have to worry about throwing your money away – since you only pay when people show genuine interest in what you're promoting.</p>

                    <p><strong>c) Quicker result as compared to organic traffic</strong></p>
                    <p>In Google Adwords PPC platform, Ads appears instantly on Google's search results page also called as SERP and will bring visitors to your landing page or website right away. It has a really unique feature that no other ad platform offers, on optimizing your Google Ads campaign properly, you will get higher ranking overnight for all major keywords. On the other hand if you choose the SEO route and start building organic traffic to your website, you need to stay patience and it require more time than Google Ads.</p>

                    <p><strong>d) Google Ads is measurable</strong></p>
                    <p>It's quite easy to find out how good your Google Ads campaign is performing. You can always track of all results of Google Ads efforts by syncing Google Ads account with the Google Analytics. You can use Google Analytics to find out which keywords are performing and driving traffic to your website and which one are just wasting your time and money. By determining such, you can modify your Google ads Strategy accordingly.</p>

                    <p><strong>e) Manage your budget</strong></p>
                    <p>When you start a Google ads campaign, You have the perfect control and you can adjust your budget on daily basis and at any time. As Google Ads charge as per Cost per click (CPC), it depends on you that how much you want to pay per every click on your ad. By choosing a high CPC will lead to more hits and results but will also deplete your budget at a quicker rate. Always make sure to determine a balance between your target keywords, CPC and ad positioning to maximize the success of your Google Ads campaign.</p>

                    <p><strong>f) High return on investment</strong></p>
                    <p>There are numerous benefits that a PPC campaign can offer to your business which can generate more profit. The beauty of using Google Ads PPC platform is that you only have to pay Google when a user clicks on your advertisement. You can quickly determine your ROI with Google Ads and make effective changes when you feel required to achieve better results.</p>

                    <p><strong>g) Brand awareness</strong></p>
                    <p>Pay per click platform, Google Ads doesn't only drive qualified leads and sales to your business, It has the ability to enhance your brand awareness and visibility in your niche industry or market. Recent analytics research shows that Google Ads can enhance brand awareness by as much as 90%.</p>

                    <p><strong>Conclusion</strong></p>
                    <p>Google ads are without doubt one of the most influential online advertising networks when it comes to pay per click advertising. If utilized properly or  performed by an expert team, you can experience better conversions and traffic that may result to higher profits and business growth in more effective way than traditional advertising. Digital Marketing King, the leading Google Ads management company in Delhi, has all the resources and expertise you need to get the most out of your Google Ads investment.</p>

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

export default GoogleAds;
