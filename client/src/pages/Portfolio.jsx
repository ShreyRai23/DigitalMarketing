import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Import banner image
import banner5 from '../assets/images/banner/banner5.jpg';

// Import portfolio images
import portfolio1 from '../assets/img/portfolio/1.webp';
import portfolio2 from '../assets/img/portfolio/2.webp';
import portfolio3 from '../assets/img/portfolio/3.webp';
import portfolio4 from '../assets/img/portfolio/4.webp';
import portfolio5 from '../assets/img/portfolio/5.webp';
import portfolio6 from '../assets/img/portfolio/6.webp';
import portfolio7 from '../assets/img/portfolio/7.webp';
import portfolio8 from '../assets/img/portfolio/8.webp';

const Portfolio = () => {
    const portfolioItems = [
        { id: 1, image: portfolio1, alt: 'Portfolio Item 1' },
        { id: 2, image: portfolio2, alt: 'Portfolio Item 2' },
        { id: 3, image: portfolio3, alt: 'Portfolio Item 3' },
        { id: 4, image: portfolio4, alt: 'Portfolio Item 4' },
        { id: 5, image: portfolio5, alt: 'Portfolio Item 5' },
        { id: 6, image: portfolio6, alt: 'Portfolio Item 6' },
        { id: 7, image: portfolio7, alt: 'Portfolio Item 7' },
        { id: 8, image: portfolio8, alt: 'Portfolio Item 8' }
    ];

    return (
        <>
            <Helmet>
                <title>Website Portfolio Of Digital Marketing King</title>
                <meta name="description" content="Website Portfolio Of Digital Marketing King" />
            </Helmet>

            <div className="portfolio-page">
                {/* Banner Area */}
                <div
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
                            <div className="col-sm-12 text-center">
                                <div className="banner-heading">
                                    <h1 className="banner-title" style={{ fontSize: '42px' }}>Portfolio</h1>
                                    <ol className="breadcrumb justify-content-center" style={{ background: 'transparent' }}>
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Portfolio Grid Section */}
                <div id="tw-final-result" className="mt-5 mb-5 tw-final-result wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col section-heading wow fadeInDown" data-wow-duration="1s">
                                <h2>Check out<span> Our Portfolio?</span></h2>
                                <span className="animate-border ml-auto mr-auto tw-mt-20"></span>
                            </div>
                        </div>

                        <div className="row mb-5 mt-5">
                            {portfolioItems.map((item) => (
                                <div key={item.id} className="col-md-3 mt-3">
                                    <div className="screen client-image">
                                        <img
                                            src={item.image}
                                            className="client-img"
                                            alt={item.alt}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

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
                                                    Ready To Give
                                                    <span className="text-white"> Boost To Your Website</span>
                                                </h2>
                                                <p className="text-white">
                                                    We'll help you expand your reach and take on the competition in style!
                                                    When you work with us, we'll help you achieve your goals with every campaign, every time!
                                                </p>
                                            </div>
                                            <div className="col-lg-2 col-md-12 no-padding">
                                                <div className="form-group">
                                                    <Link
                                                        to="/contact"
                                                        className="btn btn-secondary mw-80 no-shadows"
                                                        style={{
                                                            backgroundColor: '#fec658',
                                                            border: 'none',
                                                            padding: '15px 50px',
                                                            fontSize: '16px',
                                                            fontWeight: '700',
                                                            borderRadius: '50px',
                                                            textTransform: 'uppercase',
                                                            color: '#000',
                                                            display: 'inline-block'
                                                        }}
                                                    >
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

export default Portfolio;
