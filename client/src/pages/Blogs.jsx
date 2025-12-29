import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Import banner image
import banner5 from '../assets/images/banner/banner5.jpg';

// Import blog images
import googlePartnerBlog from '../assets/images/other/google-partner-blog.webp';
import ppcBlog from '../assets/images/other/ppc-blog.png';
import digitalMarketingBlog from '../assets/images/other/digital-marketing-blog.png';

const Blogs = () => {
    const blogPosts = [
        {
            id: 1,
            image: googlePartnerBlog,
            date: '17',
            month: 'Feb',
            author: 'Digital Marketing King',
            title: 'Google Partner in India.',
            excerpt: 'An Ultimate Guide To Choosing The Perfect Google Premier Partner in India!',
            slug: 'google-partner'
        },
        {
            id: 2,
            image: ppcBlog,
            date: '23',
            month: 'May',
            author: 'Digital Marketing King',
            title: 'Best PPC Company in Delhi',
            excerpt: '...',
            slug: 'best-ppc-company-in-delhi'
        },
        {
            id: 3,
            image: digitalMarketingBlog,
            date: '08',
            month: 'Apr',
            author: 'Digital Marketing King',
            title: 'Top 10 Best Digital Marketing Agency in Delhi',
            excerpt: 'There...',
            slug: 'best-digital-marketing-agency-in-delhi'
        },
        {
            id: 4,
            image: digitalMarketingBlog,
            date: '07',
            month: 'Apr',
            author: 'Digital Marketing King',
            title: 'Top 10 Best Website Designing Company in Gujarat',
            excerpt: '...',
            slug: 'top-10-best-website-designing-company-in-gujarat'
        },
        {
            id: 5,
            image: digitalMarketingBlog,
            date: '07',
            month: 'Apr',
            author: 'Digital Marketing King',
            title: 'Best Website Designing Company in Delhi',
            excerpt: '...',
            slug: 'best-website-designing-company-in-delhi'
        },
        {
            id: 6,
            image: digitalMarketingBlog,
            date: '20',
            month: 'May',
            author: 'Digital Marketing King',
            title: 'Top 5 Seo Company in Delhi',
            excerpt: '...',
            slug: 'top-5-seo-company-in-delhi'
        }
    ];

    return (
        <>
            <Helmet>
                <title>Our Blogs - Digital Marketing King</title>
                <meta name="description" content="Read our latest blog posts about digital marketing, SEO, and web development." />
            </Helmet>

            <div className="blogs-page">
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
                                    <h1 className="banner-title" style={{ fontSize: '42px' }}>Our Blogs</h1>
                                    <ol className="breadcrumb justify-content-center" style={{ background: 'transparent' }}>
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Our Blogs</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Grid Section */}
                <section id="tw-blog" className="tw-blog">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col section-heading wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
                                <h2>
                                    Latest <span>Blog</span>
                                </h2>
                                <span className="animate-border border-offwhite ml-auto mr-auto tw-mt-20"></span>
                            </div>
                        </div>

                        <div className="row wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                            {blogPosts.map((post) => (
                                <div key={post.id} className="col-lg-4 col-md-12">
                                    <div className="tw-latest-post">
                                        <div className="latest-post-media text-center">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="post-body">
                                            <div className="post-item-date">
                                                <div className="post-date">
                                                    <span className="date">{post.date}</span>
                                                    <span className="month">{post.month}</span>
                                                </div>
                                            </div>
                                            <div className="post-info">
                                                <div className="post-meta">
                                                    <span className="post-author">
                                                        Posted by <a href="#">{post.author}</a>
                                                    </span>
                                                </div>
                                                <h3 className="post-title">
                                                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                                                </h3>
                                                <div className="entry-content">
                                                    <p>{post.excerpt}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                                                    Our Products and Digital marketing Services are laced with rich experience of our
                                                    company which makes your projects failure proof.
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

export default Blogs;
