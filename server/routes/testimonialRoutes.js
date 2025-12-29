const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const rateLimit = require('express-rate-limit');
const {
    submitTestimonial,
    getTestimonials,
    getAllTestimonials
} = require('../controllers/testimonialController');

// Rate limiter for testimonial submissions
const testimonialLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3, // limit each IP to 3 requests per windowMs
    message: 'Too many testimonial submissions from this IP, please try again after 15 minutes'
});

// Validation middleware
const testimonialValidation = [
    body('username')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ max: 100 }).withMessage('Name cannot exceed 100 characters'),
    body('company')
        .trim()
        .notEmpty().withMessage('Company name is required')
        .isLength({ max: 100 }).withMessage('Company name cannot exceed 100 characters'),
    body('contact')
        .trim()
        .notEmpty().withMessage('Contact number is required')
        .matches(/^[0-9]{10}$/).withMessage('Please provide a valid 10-digit contact number'),
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email'),
    body('service')
        .trim()
        .notEmpty().withMessage('Please select a service'),
    body('message')
        .trim()
        .notEmpty().withMessage('Message is required')
        .isLength({ max: 1000 }).withMessage('Message cannot exceed 1000 characters')
];

// Routes
router.post('/', testimonialLimiter, testimonialValidation, submitTestimonial);
router.get('/', getTestimonials);
router.get('/all', getAllTestimonials);

module.exports = router;
