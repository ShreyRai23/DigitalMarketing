// Utility script to update all service pages with form handler
// This generates a template for the async form handler

const formHandlerTemplate = `    const handleContactFormSubmit = async (e) => {
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
    };`;

// Service pages that need updating
const servicePages = [
    "IosAppDevelopment",
    "NativeAppDevelopment",
    "HybridAppDevelopment",
    "BusinessExplainerVideo",
    "LogoDesigning",
    "SocialMediaPostDesign",
    "WordpressWebDevelopment",
    "WordpressWebDesigning",
    "SearchEngineOptimization",
    "SocialMediaOptimization",
    "SocialMediaMarketing",
    "PerformanceMarketing",
    "OnlineReputationManagement",
    "LocalSeo",
    "LeadGeneration",
    "InstagramMarketing",
    "GooglePromotion",
    "GoogleMyBusiness",
    "GoogleAds",
    "FacebookMarketing",
    "EmailMarketing",
    "EcommerceSeo",
    "CmsWebDevelopment",
    "CrmSoftwareDevelopment",
    "CustomWebDesigning",
    "CustomWebDevelopment",
    "DynamicWebDesigning",
    "EcommerceWebDesigning",
    "EcommerceWebDevelopment",
    "LandingPageDesigning",
    "MlmSoftwareDevelopment",
    "MlmWebDesigning",
    "MultiVendorEcommerceWebsite",
    "NewsPortalDevelopment",
    "NewsWebDesigning",
    "PaymentGatewayIntegration",
    "PhpWebDevelopment",
    "StaticWebDesigning",
    "WebPortalDevelopment"
];

console.log('Total pages to update:', servicePages.length);
console.log('Use the form handler template above for all pages');
