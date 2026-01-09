import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import CSS files in correct order
import './styles/global.css'
import './styles/bootstrap.min.css'
import './styles/font-awesome.min.css'
import './styles/icofonts.css'
import './styles/animate.css'
import './styles/owlcarousel.min.css'
import './styles/magnific-popup.css'
import './styles/style.css'
import './styles/responsive.css'
import './styles/form.css'
import './styles/call.css'
import './styles/hero-slider.css'
import './styles/features-section.css'
import './styles/seo-partner-section.css'
import './styles/topbar-mobile.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
