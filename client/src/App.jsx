import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout components
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import OffCanvasMenu from './components/layout/OffCanvasMenu';
import SearchBar from './components/layout/SearchBar';
import WhatsAppButton from './components/common/WhatsAppButton';
import ScrollToTop from './components/common/ScrollToTop';


// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Blogs from './pages/Blogs';

// Service pages
import StaticWebDesigning from './pages/services/StaticWebDesigning';
import DynamicWebDesigning from './pages/services/DynamicWebDesigning';
import EcommerceWebDesigning from './pages/services/EcommerceWebDesigning';
import CustomWebDesigning from './pages/services/CustomWebDesigning';
import WordpressWebDesigning from './pages/services/WordpressWebDesigning';
import LandingPageDesigning from './pages/services/LandingPageDesigning';
import MlmWebDesigning from './pages/services/MlmWebDesigning';
import NewsWebDesigning from './pages/services/NewsWebDesigning';
import PhpWebDevelopment from './pages/services/PhpWebDevelopment';
import EcommerceWebDevelopment from './pages/services/EcommerceWebDevelopment';
import WordpressWebDevelopment from './pages/services/WordpressWebDevelopment';
import CustomWebDevelopment from './pages/services/CustomWebDevelopment';
import MlmSoftwareDevelopment from './pages/services/MlmSoftwareDevelopment';
import PaymentGatewayIntegration from './pages/services/PaymentGatewayIntegration';
import MultiVendorEcommerceWebsite from './pages/services/MultiVendorEcommerceWebsite';
import CmsWebDevelopment from './pages/services/CmsWebDevelopment';
import WebPortalDevelopment from './pages/services/WebPortalDevelopment';
import CrmSoftwareDevelopment from './pages/services/CrmSoftwareDevelopment';
import NewsPortalDevelopment from './pages/services/NewsPortalDevelopment';
import AndroidAppDevelopment from './pages/services/AndroidAppDevelopment';
import IosAppDevelopment from './pages/services/IosAppDevelopment';
import NativeAppDevelopment from './pages/services/NativeAppDevelopment';
import HybridAppDevelopment from './pages/services/HybridAppDevelopment';
import BusinessExplainerVideo from './pages/services/BusinessExplainerVideo';
import LogoDesigning from './pages/services/LogoDesigning';
import SocialMediaPostDesign from './pages/services/SocialMediaPostDesign';
import SearchEngineOptimization from './pages/services/SearchEngineOptimization';
import InstagramMarketing from './pages/services/InstagramMarketing';
import EmailMarketing from './pages/services/EmailMarketing';
import SocialMediaMarketing from './pages/services/SocialMediaMarketing';
import SocialMediaOptimization from './pages/services/SocialMediaOptimization';
import LeadGeneration from './pages/services/LeadGeneration';
import GoogleMyBusiness from './pages/services/GoogleMyBusiness';
import LocalSeo from './pages/services/LocalSeo';
import EcommerceSeo from './pages/services/EcommerceSeo';
import GoogleAds from './pages/services/GoogleAds';
import GooglePromotion from './pages/services/GooglePromotion';
import OnlineReputationManagement from './pages/services/OnlineReputationManagement';
import PerformanceMarketing from './pages/services/PerformanceMarketing';
import FacebookMarketing from './pages/services/FacebookMarketing';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <TopBar />
          <Navbar />
          <OffCanvasMenu />
          <SearchBar />

          {/* Add padding to account for fixed top bar and navbar */}
          <div style={{ paddingTop: '80px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blogs" element={<Blogs />} />

              {/* Service routes */}
              <Route path="/services/static-website-designing" element={<StaticWebDesigning />} />
              <Route path="/services/dynamic-website-designing" element={<DynamicWebDesigning />} />
              <Route path="/services/ecommerce-website-designing" element={<EcommerceWebDesigning />} />
              <Route path="/services/custom-website-designing" element={<CustomWebDesigning />} />
              <Route path="/services/wordpress-website-designing" element={<WordpressWebDesigning />} />
              <Route path="/services/landing-page-designing" element={<LandingPageDesigning />} />
              <Route path="/services/mlm-website-designing" element={<MlmWebDesigning />} />
              <Route path="/services/news-website-designing" element={<NewsWebDesigning />} />
              <Route path="/services/php-website-development" element={<PhpWebDevelopment />} />
              <Route path="/services/ecommerce-website-development" element={<EcommerceWebDevelopment />} />
              <Route path="/services/wordpress-website-development" element={<WordpressWebDevelopment />} />
              <Route path="/services/custom-website-development" element={<CustomWebDevelopment />} />
              <Route path="/services/mlm-software-development" element={<MlmSoftwareDevelopment />} />
              <Route path="/services/payment-gateway-integration" element={<PaymentGatewayIntegration />} />
              <Route path="/services/multi-vendor-ecommerce-website" element={<MultiVendorEcommerceWebsite />} />
              <Route path="/services/cms-web-development" element={<CmsWebDevelopment />} />
              <Route path="/services/web-portal-development" element={<WebPortalDevelopment />} />
              <Route path="/services/crm-software-development" element={<CrmSoftwareDevelopment />} />
              <Route path="/services/news-portal-development" element={<NewsPortalDevelopment />} />
              <Route path="/services/android-app-development" element={<AndroidAppDevelopment />} />
              <Route path="/services/ios-app-development" element={<IosAppDevelopment />} />
              <Route path="/services/native-app-development" element={<NativeAppDevelopment />} />
              <Route path="/services/hybrid-app-development" element={<HybridAppDevelopment />} />
              <Route path="/services/business-explainer-video" element={<BusinessExplainerVideo />} />
              <Route path="/services/logo-designing" element={<LogoDesigning />} />
              <Route path="/services/social-media-post-design" element={<SocialMediaPostDesign />} />
              <Route path="/services/search-engine-optimization" element={<SearchEngineOptimization />} />
              <Route path="/services/instagram-marketing" element={<InstagramMarketing />} />
              <Route path="/services/email-marketing" element={<EmailMarketing />} />
              <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
              <Route path="/services/social-media-optimization" element={<SocialMediaOptimization />} />
              <Route path="/services/lead-generation" element={<LeadGeneration />} />
              <Route path="/services/google-my-business" element={<GoogleMyBusiness />} />
              <Route path="/services/local-seo" element={<LocalSeo />} />
              <Route path="/services/ecommerce-seo" element={<EcommerceSeo />} />
              <Route path="/services/google-ads" element={<GoogleAds />} />
              <Route path="/services/google-promotion" element={<GooglePromotion />} />
              <Route path="/services/online-reputation-management" element={<OnlineReputationManagement />} />
              <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
              <Route path="/services/facebook-marketing" element={<FacebookMarketing />} />
            </Routes>
          </div>

          <Footer />
          <WhatsAppButton />

        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
