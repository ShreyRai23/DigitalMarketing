<div align="center">

<img src="https://img.shields.io/badge/Digital%20Marketing%20King-v1.0.0-blue?style=for-the-badge&logo=google-chrome&logoColor=white" alt="version" />

# 👑 Digital Marketing King

### Full-Stack Hybrid App — Web · Android · Backend

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express%205-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose%209-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Capacitor](https://img.shields.io/badge/Capacitor-8.0.0-119EFF?style=flat-square&logo=capacitor&logoColor=white)](https://capacitorjs.com/)
[![Android](https://img.shields.io/badge/Android-Hybrid%20App-3DDC84?style=flat-square&logo=android&logoColor=white)](https://developer.android.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=flat-square&logo=opensourceinitiative&logoColor=white)](https://www.digitalmarketingking.in/)

<br/>

> A modern, full-stack hybrid application for **Digital Marketing King** — built with the MERN stack and packaged as a native Android app using Capacitor. Migrated from 19 PHP/HTML pages to a blazing-fast Single Page Application (SPA) with 100% visual fidelity.

<br/>

🌐 [Live Website](https://www.digitalmarketingking.in/) &nbsp;·&nbsp; 📱 Android App &nbsp;·&nbsp; 📞 +91-9910075663

</div>

---

## 📋 Table of Contents

- [✨ Overview](#-overview)
- [🏗️ Architecture](#️-architecture)
- [📁 Project Structure](#-project-structure)
- [🛠️ Tech Stack](#️-tech-stack)
- [📱 Android (Capacitor)](#-android-capacitor)
- [🚀 Getting Started](#-getting-started)
- [🔌 API Reference](#-api-reference)
- [🗺️ Route Mapping](#️-route-mapping)
- [✅ Features](#-features)
- [📊 Project Status](#-project-status)
- [🐛 Known Issues](#-known-issues)
- [📞 Contact](#-contact)

---

## ✨ Overview

**Digital Marketing King** is a professional digital marketing agency based in New Delhi, India. This repository contains the complete modernisation of their website — from a traditional 19-page PHP/HTML site into a cutting-edge **MERN Stack SPA** that is also packaged as a **native Android hybrid app** via Capacitor.

| Attribute | Original | New (This Project) |
|-----------|----------|---------------------|
| Architecture | Multi-page PHP/HTML | Single Page App (SPA) |
| Frontend | Static HTML + jQuery | React 18 + React Router |
| Build Tool | — | Vite 7 |
| Backend | PHP | Node.js + Express 5 |
| Database | — | MongoDB + Mongoose |
| Mobile | ❌ | ✅ Android via Capacitor |
| PWA | ❌ | ✅ vite-plugin-pwa |
| SEO | Static | React Helmet Async |
| Pages | 19 HTML files | Dynamic SPA routes |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   CLIENT (React + Vite)                  │
│  ┌──────────────┐  ┌─────────────┐  ┌───────────────┐  │
│  │  React Router │  │  Components  │  │  React Helmet │  │
│  │   (Routing)  │  │ (UI Library) │  │  (SEO/Meta)   │  │
│  └──────────────┘  └─────────────┘  └───────────────┘  │
│          │                                               │
│  ┌──────────────┐  ┌─────────────┐                      │
│  │   Bootstrap  │  │  Custom CSS  │                      │
│  │    (Grid)    │  │  (Styling)   │                      │
│  └──────────────┘  └─────────────┘                      │
└──────────────────────┬──────────────────────────────────┘
                       │ REST API (Axios / Fetch)
┌──────────────────────▼──────────────────────────────────┐
│                 SERVER (Node.js + Express 5)             │
│  ┌──────────────┐  ┌─────────────┐  ┌───────────────┐  │
│  │    Routes    │  │  Controllers │  │  Middleware   │  │
│  │  /api/contact│  │  (Business  │  │  (Rate Limit, │  │
│  │  /api/health │  │   Logic)    │  │  Validation)  │  │
│  └──────────────┘  └─────────────┘  └───────────────┘  │
│                          │                               │
│  ┌──────────────────────▼──────────────────────────┐   │
│  │            MongoDB (Mongoose ODM)                │   │
│  │         Contacts · Leads · Analytics             │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                       │ Capacitor Bridge
┌──────────────────────▼──────────────────────────────────┐
│              📱 Android App (Capacitor 8)                │
│         com.digitalmarketingking.app                     │
│   Native Shell wrapping the Vite production build        │
└─────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
Digital Marketing/
│
├── 📱 client/                        # React + Vite Frontend
│   ├── android/                      # Native Android project (Capacitor)
│   │   ├── app/                      # Android app module
│   │   ├── build.gradle              # Gradle build config
│   │   └── ...                       # Standard Android project files
│   │
│   ├── src/
│   │   ├── assets/                   # 🖼️ Images, icons, fonts
│   │   ├── components/               # ♻️ Reusable UI components
│   │   │   ├── layout/               # TopBar, Navbar, Footer, OffCanvas
│   │   │   ├── common/               # FloatingButtons (WhatsApp, Call)
│   │   │   └── forms/                # ContactForm
│   │   ├── pages/                    # 📄 Page components (routes)
│   │   │   └── services/             # Individual service pages
│   │   ├── styles/                   # 🎨 CSS files (migrated from PHP)
│   │   ├── utils/                    # 🔧 Utility/helper functions
│   │   ├── App.jsx                   # Root app component + routing
│   │   └── main.jsx                  # Application entry point
│   │
│   ├── capacitor.config.json         # Capacitor config (Android bridge)
│   ├── vite.config.js                # Vite + PWA config
│   ├── vercel.json                   # Vercel deployment config
│   └── package.json
│
├── 🖥️ server/                        # Node.js + Express Backend
│   ├── config/                       # 🔑 Database configuration
│   ├── controllers/                  # 🧠 Business logic handlers
│   ├── models/                       # 🗄️ Mongoose schema models
│   ├── routes/                       # 🛣️ API route definitions
│   ├── middleware/                   # 🛡️ Auth, validation, rate limiting
│   ├── server.js                     # Server entry point
│   ├── .env                          # Environment variables (private)
│   └── package.json
│
└── README.md
```

---

## 🛠️ Tech Stack

### 🌐 Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=flat-square) React | 18.3.1 | UI framework |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat-square) Vite | 7.2.4 | Build tool & dev server |
| ![React Router](https://img.shields.io/badge/-React%20Router-CA4245?logo=reactrouter&logoColor=white&style=flat-square) React Router | 7.11.0 | Client-side routing |
| React Helmet Async | 2.0.5 | SEO & meta tag management |
| Bootstrap | 4 | Responsive grid & UI |
| vite-plugin-pwa | 1.2.0 | Progressive Web App support |

### 🖥️ Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=nodedotjs&logoColor=white&style=flat-square) Node.js | ≥18 | Runtime environment |
| ![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=flat-square) Express | 5.2.1 | Web server framework |
| ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=flat-square) MongoDB | ≥6 | NoSQL database |
| Mongoose | 9.0.2 | MongoDB ODM |
| express-validator | 7.3.1 | Input validation |
| express-rate-limit | 8.2.1 | API rate limiting |
| dotenv | 17.2.3 | Environment variables |
| nodemon | 3.1.11 | Dev auto-restart |

### 📱 Mobile (Android)

| Technology | Version | Purpose |
|------------|---------|---------|
| ![Capacitor](https://img.shields.io/badge/-Capacitor-119EFF?logo=capacitor&logoColor=white&style=flat-square) Capacitor Core | 8.0.0 | Hybrid app bridge |
| Capacitor Android | 8.0.0 | Native Android wrapper |
| Capacitor CLI | 8.0.0 | Build tooling |
| Android SDK | — | Native compilation |

---

## 📱 Android (Capacitor)

This project is packaged as a **native Android hybrid app** using [Capacitor](https://capacitorjs.com/). The React/Vite production build is embedded inside an Android WebView, giving access to native device APIs.

**App ID**: `com.digitalmarketingking.app`  
**App Name**: Digital Marketing King  
**Web Directory**: `dist/` (Vite build output)

### Building the Android App

```bash
# Step 1 — Build the web assets
cd client
npm run build

# Step 2 — Sync to Android project
npx cap sync android

# Step 3 — Open in Android Studio
npx cap open android

# Step 4 — Run on device / emulator from Android Studio
```

> **Requires**: Android Studio, Android SDK, Java 17+

---

## 🚀 Getting Started

### Prerequisites

| Requirement | Minimum Version |
|-------------|----------------|
| ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=nodedotjs&logoColor=white&style=flat-square) Node.js | v18 or higher |
| ![npm](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white&style=flat-square) npm | v9 or higher |
| ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=flat-square) MongoDB | v6 or higher |
| ![Android Studio](https://img.shields.io/badge/-Android%20Studio-3DDC84?logo=androidstudio&logoColor=white&style=flat-square) Android Studio | For mobile builds |

---

### ⚡ Quick Start (Web)

**1. Clone the repository**

```bash
git clone <repo-url>
cd "Digital Marketing"
```

**2. Install dependencies**

```bash
# Backend
cd server && npm install

# Frontend
cd ../client && npm install
```

**3. Configure environment variables**

```bash
# server/.env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/digital-marketing-king
NODE_ENV=development
```

```bash
# client/.env
VITE_API_URL=http://localhost:5000
```

**4. Start MongoDB**

```bash
# Windows (check Services) or run manually:
mongod
```

**5. Run the app**

Open two terminals:

```bash
# Terminal 1 — Backend (http://localhost:5000)
cd server
npm run dev
```

```bash
# Terminal 2 — Frontend (http://localhost:5173)
cd client
npm run dev
```

**6. Open in browser**

```
http://localhost:5173
```

---

## 🔌 API Reference

Base URL: `http://localhost:5000`

### Contact Form

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/contact` | Submit a contact enquiry |
| `GET` | `/api/contact` | Retrieve all submissions (Admin) |
| `GET` | `/api/health` | Server health check |

#### `POST /api/contact`

```json
// Request Body
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91-9999999999",
  "company": "Acme Corp",
  "service": "SEO",
  "message": "I need help with my website..."
}

// Response
{
  "success": true,
  "message": "Thank you! We'll get back to you shortly."
}
```

> 🛡️ **Security**: Rate-limited to **5 requests/hour per IP** · Honeypot spam protection · express-validator input sanitisation

---

## 🗺️ Route Mapping

All 19 original PHP pages have been migrated to React routes:

| Original PHP Page | React Route | Component |
|-------------------|-------------|-----------|
| `index.html` | `/` | `pages/Home.jsx` |
| `about-us.html` | `/about` | `pages/About.jsx` |
| `contact-us.html` | `/contact` | `pages/Contact.jsx` |
| `portfolio.html` | `/portfolio` | `pages/Portfolio.jsx` |
| `our-blogs.html` | `/blogs` | `pages/Blogs.jsx` |
| `static-website-designing.html` | `/services/static-website-designing` | `services/StaticWebDesigning.jsx` |
| `dynamic-website-designing.html` | `/services/dynamic-website-designing` | `services/DynamicWebDesigning.jsx` |
| `ecommerce-website-designing.html` | `/services/ecommerce-website-designing` | `services/EcommerceWebDesigning.jsx` |
| `custom-website-designing.html` | `/services/custom-website-designing` | `services/CustomWebDesigning.jsx` |
| `wordpress-website-designing.html` | `/services/wordpress-website-designing` | `services/WordpressWebDesigning.jsx` |
| `landing-page-designing.html` | `/services/landing-page-designing` | `services/LandingPageDesigning.jsx` |
| `mlm-website-designing.html` | `/services/mlm-website-designing` | `services/MlmWebDesigning.jsx` |
| `news-website-designing.html` | `/services/news-website-designing` | `services/NewsWebDesigning.jsx` |
| `php-website-development.html` | `/services/php-website-development` | `services/PhpWebDevelopment.jsx` |
| `ecommerce-website-development.html` | `/services/ecommerce-website-development` | `services/EcommerceWebDevelopment.jsx` |
| `wordpress-website-development.html` | `/services/wordpress-website-development` | `services/WordpressWebDevelopment.jsx` |
| `custom-website-development.html` | `/services/custom-website-development` | `services/CustomWebDevelopment.jsx` |
| `mlm-software-development.html` | `/services/mlm-software-development` | `services/MlmSoftwareDevelopment.jsx` |
| `payment-gateway-integration.html` | `/services/payment-gateway-integration` | `services/PaymentGatewayIntegration.jsx` |

---

## ✅ Features

### 🌐 Frontend
- ✅ React Router SPA navigation (zero full-page reloads)
- ✅ React Helmet Async — per-page SEO meta tags & JSON-LD schema
- ✅ Responsive design — maintained from original (Bootstrap 4)
- ✅ Reusable layout components (TopBar, Navbar, Footer, OffCanvas)
- ✅ Floating WhatsApp & Call action buttons
- ✅ Progressive Web App (PWA) support via `vite-plugin-pwa`
- ✅ Off-canvas mobile-first navigation menu
- ⏳ Owl Carousel integration
- ⏳ WOW.js scroll animations
- ⏳ Contact form UI feedback

### 🖥️ Backend
- ✅ Express 5 server with CORS
- ✅ MongoDB with Mongoose ODM
- ✅ Contact form API with full validation
- ✅ Rate limiting — 5 req/hour per IP
- ✅ Honeypot spam protection
- ✅ express-validator input sanitisation
- ✅ Centralised error handling middleware

### 📱 Android (Capacitor)
- ✅ Native Android project generated
- ✅ App ID: `com.digitalmarketingking.app`
- ✅ Capacitor 8 bridge configured
- ✅ Ready to build APK / AAB in Android Studio

---

## 📊 Project Status

### ✅ Completed
- [x] MERN project structure
- [x] Express backend server
- [x] MongoDB models & controllers
- [x] Contact form API with validation & rate-limiting
- [x] React frontend routing (all 19 pages)
- [x] Layout components (TopBar, Navbar, Footer, OffCanvas)
- [x] SEO meta tags setup with React Helmet
- [x] Capacitor Android project initialised
- [x] PWA manifest configured

### 🔄 In Progress
- [ ] CSS & image asset migration
- [ ] Full HTML content migration (all 19 pages)
- [ ] Contact form UI ↔ backend API integration

### ⏳ Pending
- [ ] Owl Carousel & WOW.js setup
- [ ] Schema.org JSON-LD structured data
- [ ] End-to-end testing (web + mobile)
- [ ] Android APK / Play Store build
- [ ] Production deployment

---

## 🧰 Scripts Reference

### Client

```bash
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # ESLint code check
```

### Server

```bash
npm run dev       # Start with nodemon (auto-restart)
npm start         # Start production server
```

### Capacitor (from `client/`)

```bash
npx cap sync android     # Sync web build to Android
npx cap open android     # Open in Android Studio
npx cap run android      # Run on connected device
```

---

## 🐛 Known Issues

| Issue | Status | Notes |
|-------|--------|-------|
| Pages appear unstyled | 🔄 In Progress | CSS not yet migrated to `client/src/styles/` |
| Images not loading | 🔄 In Progress | Assets need copying to `client/src/assets/` |
| Service pages have placeholder content | 🔄 In Progress | HTML content migration pending |
| Contact form not connected | ⏳ Pending | API ready; UI integration needed |
| Carousels not working | ⏳ Pending | Owl Carousel setup required |

---

## 📞 Contact

<div align="center">

| | |
|---|---|
| 🌐 **Website** | [www.digitalmarketingking.in](https://www.digitalmarketingking.in/) |
| 📱 **Phone** | [+91-9910075663](tel:+919910075663) |
| 📧 **Email** | [info@digitalmarketingking.in](mailto:info@digitalmarketingking.in) |
| 📍 **Address** | Plot No.32, 2nd Floor, Sewak Park, Dwarka Mor, New Delhi - 110059, India |

</div>

---

<div align="center">

**Copyright © 2024 Digital Marketing King®. All Rights Reserved.**

Built using the **MERN Stack** + **Capacitor**

[![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=flat-square)](https://react.dev)
[![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=nodedotjs&logoColor=white&style=flat-square)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=flat-square)](https://mongodb.com)
[![Capacitor](https://img.shields.io/badge/-Capacitor-119EFF?logo=capacitor&logoColor=white&style=flat-square)](https://capacitorjs.com)
[![Android](https://img.shields.io/badge/-Android-3DDC84?logo=android&logoColor=white&style=flat-square)](https://developer.android.com)

</div>
