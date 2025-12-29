const rateLimit = require('express-rate-limit');

// Rate limiter for contact form submissions
const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 100, // Limit each IP to 100 requests per windowMs (increased for development)
    message: 'Too many requests from this IP, please try again after an hour',
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = { contactLimiter };
