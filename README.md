# Digital Marketing King - MERN Stack Website

A modern MERN (MongoDB, Express, React, Node.js) stack implementation of the Digital Marketing King website, migrated from the original PHP/HTML/CSS/JS static website.

## 📋 Project Overview

This project is a complete conversion of the Digital Marketing King website from a traditional multi-page PHP/HTML site to a modern single-page application (SPA) using the MERN stack. The conversion maintains 100% visual fidelity with the original design while modernizing the tech stack and adding proper backend functionality.

### Original Website
- **URL**: https://www.digitalmarketingking.in/
- **Structure**: 19 HTML pages (PHP)
- **Technologies**: PHP, HTML, CSS, JavaScript, jQuery, Bootstrap 4

### New MERN Stack
- **Frontend**: React 19 + Vite + React Router
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Styling**: Bootstrap 4 + Custom CSS (migrated from original)

## 🗂️ Project Structure

```
Digital Marketing/
├── client/                 # React frontend
│   ├── src/
│   │   ├── assets/        # Images, icons, fonts
│   │   ├── components/    # Reusable components
│   │   │   ├── layout/    # TopBar, Navbar, Footer, etc.
│   │   │   ├── common/    # FloatingButtons, etc.
│   │   │   └── forms/     # ContactForm
│   │   ├── pages/         # Page components
│   │   │   └── services/  # Service pages
│   │   ├── styles/        # CSS files
│   │   ├── utils/         # Utility functions
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── .env               # Environment variables
│   └── package.json
│
├── server/                # Express backend
│   ├── config/           # Database configuration
│   ├── controllers/      # Route controllers
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── server.js         # Server entry point
│   ├── .env              # Environment variables
│   └── package.json
│
└── [Original HTML files]  # Source HTML files (19 pages)
```

## 🚀 Getting Started

### Prerequisites

-**Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **MongoDB** (v6 or higher) - Must be running locally or have a MongoDB Atlas connection string

### Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd "c:\Users\shrey\OneDrive\Documents\Digital Marketing"
   ```

2. **Install server dependencies**:
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**:
   ```bash
   cd ../client
   npm install
   ```

4. **Configure environment variables**:
   
   Server (`.env` in `server/` folder):
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/digital-marketing-king
   NODE_ENV=development
   ```

   Client (`.env` in `client/` folder):
   ```env
   VITE_API_URL=http://localhost:5000
   ```

5. **Start MongoDB**:
   ```bash
   # If using local MongoDB
   mongod
   
   # Or use MongoDB Compass to connect
   ```

### Running the Application

You need to run both the frontend and backend simultaneously.

**Terminal 1 - Backend Server**:
```bash
cd server
npm run dev
```
The server will start on `http://localhost:5000`

**Terminal 2 - Frontend (React)**:
```bash
cd client
npm run dev
```
The client will start on `http://localhost:5173`

Open your browser and navigate to `http://localhost:5173`

## 📄 HTML to React Route Mapping

| Original HTML File | React Route | Component File |
|-------------------|-------------|----------------|
| index.html | `/` | pages/Home.jsx |
| about-us.html | `/about` | pages/About.jsx |
| contact-us.html | `/contact` | pages/Contact.jsx |
| portfolio.html | `/portfolio` | pages/Portfolio.jsx |
| our-blogs.html | `/blogs` | pages/Blogs.jsx |
| static-website-designing.html | `/services/static-website-designing` | pages/services/StaticWebDesigning.jsx |
| dynamic-website-designing.html | `/services/dynamic-website-designing` | pages/services/DynamicWebDesigning.jsx |
| ecommerce-website-designing.html | `/services/ecommerce-website-designing` | pages/services/EcommerceWebDesigning.jsx |
| custom-website-designing.html | `/services/custom-website-designing` | pages/services/CustomWebDesigning.jsx |
| wordpress-website-designing.html | `/services/wordpress-website-designing` | pages/services/WordpressWebDesigning.jsx |
| landing-page-designing.html | `/services/landing-page-designing` | pages/services/LandingPageDesigning.jsx |
| mlm-website-designing.html | `/services/mlm-website-designing` | pages/services/MlmWebDesigning.jsx |
| news-website-designing.html | `/services/news-website-designing` | pages/services/NewsWebDesigning.jsx |
| php-website-development.html | `/services/php-website-development` | pages/services/PhpWebDevelopment.jsx |
| ecommerce-website-development.html | `/services/ecommerce-website-development` | pages/services/EcommerceWebDevelopment.jsx |
| wordpress-website-development.html | `/services/wordpress-website-development` | pages/services/WordpressWebDevelopment.jsx |
| custom-website-development.html | `/services/custom-website-development` | pages/services/CustomWebDevelopment.jsx |
| mlm-software-development.html | `/services/mlm-software-development` | pages/services/MlmSoftwareDevelopment.jsx |
| payment-gateway-integration.html | `/services/payment-gateway-integration` | pages/services/PaymentGatewayIntegration.jsx |

## 🔌 API Endpoints

### Contact Form
- **POST** `/api/contact` - Submit contact form
  - Body: `{ name, email, phone, company, service, message }`
  - Returns: `{ success: true, message: "..." }`
  - Rate Limited: 5 requests per hour per IP
  - Includes: Validation, honeypot protection

- **GET** `/api/contact` - Get all contacts (Admin)
  - Returns: Array of all contact submissions

### Health Check
- **GET** `/api/health` - Server health check

## 🎨 Frontend Features

- ✅ React Router for SPA navigation
- ✅ React Helmet Async for SEO meta tags
- ✅ Responsive design (maintained from original)
- ✅ Bootstrap 4 + Custom CSS
- ✅ Reusable components (TopBar, Navbar, Footer, etc.)
- ✅ Floating WhatsApp & Call buttons
- ✅ Off-canvas mobile menu
- ⏳ Form integration (Contact form - to be connected)
- ⏳ Owl Carousel for sliders
- ⏳ WOW.js for scroll animations
- ⏳ Full content migration from HTML files

## 🔧 Backend Features

- ✅ Express server with CORS
- ✅ MongoDB with Mongoose ODM
- ✅ Contact form API with full validation
- ✅ Rate limiting (5 req/hour per IP)
- ✅ Honeypot spam protection
- ✅ Express-validator for input validation
- ✅ Error handling middleware

## ⚙️ Scripts

### Client
- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Server
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## 🛠️ Technology Stack

### Frontend Dependencies
- react: ^19.2.0
- react-dom: ^19.2.0
- react-router-dom: ^7.1.3
- react-helmet-async: ^2.0.5 (for SEO)
- vite: ^7.3.0 (build tool)

### Backend Dependencies
- express: ^4.21.2
- mongoose: ^8.9.4
- dotenv: ^16.4.7
- cors: ^2.8.5
- express-validator: ^7.2.1
- express-rate-limit: ^7.5.0

### Dev Dependencies
- nodemon: ^3.1.9

## 📝 Next Steps / TODO

### High Priority
1. **Migrate CSS and Assets**:
   - Copy all CSS files from original HTML to `client/src/styles/`
   - Copy images to `client/src/assets/images/`
   - Update asset paths

2. **Complete Page Content Migration**:
   - Port full HTML content from all 19 pages
   - Maintain exact layout and structure
   - Add missing sections (sliders, testimonials, stats, etc.)

3. **Add Missing Libraries**:
   - Install and configure Owl Carousel
   - Install and configure WOW.js for animations
   - Install Font Awesome

4. **Form Integration**:
   - Create ContactForm component
   - Connect to backend API
   - Add success/error UI feedback

### Medium Priority
5. **SEO Optimization**:
   - Port all schema.org JSON-LD data
   - Add comprehensive meta tags per page
   - Implement breadcrumbs

6. **Visual Polish**:
   - Compare with screenshots
   - Adjust spacing/colors if needed
7. **Testing**:
   - Test all routes
   - Test forms end-to-end
   - Test on mobile/tablet/desktop

### Low Priority
8. **Optional Enhancements**:
   - Newsletter API endpoint
   - Admin panel for viewing contacts
   - Google Analytics integration
   - Performance optimization

## 🐛 Known Issues

- CSS and images not yet migrated (pages will look unstyled)
- Service pages have placeholder content
- Contact form not yet integrated with backend
- Carousels/sliders not functional yet (need Owl Carousel setup)

## 📞 Contact Information

- **Phone**: +91-9910075663
- **Email**: info@digitalmarketingking.in
- **Address**: Plot No.32, 2nd Floor, Sewak Park, Dwarka Mor, New Delhi-110059, India

## 📄 License

Copyright © 2024 Digital Marketing King®. All Rights Reserved.

---

## 🚦 Current Status

**✅ Completed**:
- [x] Project structure created
- [x] Backend server setup
- [x] MongoDB models and controllers
- [x] Contact API with validation
- [x] Frontend routing configured
- [x] Layout components (TopBar, Navbar, Footer, OffCanvas)
- [x] Placeholder pages for all routes
- [x] SEO meta tags setup

**🔄 In Progress**:
- [ ] CSS/Asset migration
- [ ] Full content migration
- [ ] Form integration

**⏳ Pending**:
[ ] Carousel setup
- [ ] Animation setup
- [ ] Testing & QA
- [ ] Deployment

---

**Built with ❤️ using the MERN Stack**
