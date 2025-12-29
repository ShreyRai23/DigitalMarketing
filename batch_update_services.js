const fs = require('fs');
const path = require('path');

const servicesDir = 'c:\\Users\\shrey\\OneDrive\\Documents\\Digital Marketing\\client\\src\\pages\\services';

// Files already updated
const updatedFiles = [
    'AndroidAppDevelopment.jsx',
    'IosAppDevelopment.jsx',
    'NativeAppDevelopment.jsx',
    'HybridAppDevelopment.jsx',
    'BusinessExplainerVideo.jsx',
    'LogoDesigning.jsx',
    'SocialMediaPostDesign.jsx',
    'SearchEngineOptimization.jsx',
    'CmsWebDevelopment.jsx',
    'CrmSoftwareDevelopment.jsx',
    'CustomWebDesigning.jsx',
    'CustomWebDevelopment.jsx'
];

// Get all .jsx files
const allFiles = fs.readdirSync(servicesDir).filter(f => f.endsWith('.jsx'));
const filesToUpdate = allFiles.filter(f => !updatedFiles.includes(f));

console.log(`Files to update: ${filesToUpdate.length}`);

filesToUpdate.forEach(file => {
    const filePath = path.join(servicesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if file needs updating
    if (content.includes('import { api }') || content.includes('api.submitTestimonial')) {
        console.log(`SKIP: ${file} - already has API integration`);
        return;
    }

    let modified = false;

    // 1. Add API import after other imports
    if (!content.includes("import { api }")) {
        // Find the last import statement
        const importRegex = /(import .+ from ['"].+['"];?\n)/g;
        const imports = content.match(importRegex);
        if (imports && imports.length > 0) {
            const lastImport = imports[imports.length - 1];
            content = content.replace(lastImport, lastImport + "import { api } from '../../utils/api';\n");
            modified = true;
        }
    }

    // 2. Update handleContactSubmit function
    const oldHandler = /const handleContactSubmit = \(e\) => \{\s*e\.preventDefault\(\);\s*console\.log\('Contact form submitted:',\s*contactFormData\);\s*\};/gs;
    const newHandler = `const handleContactSubmit = async (e) => {
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

    if (oldHandler.test(content)) {
        content = content.replace(oldHandler, newHandler);
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Updated: ${file}`);
    } else {
        console.log(`✗ No changes: ${file}`);
    }
});

console.log('\nBatch update complete!');
