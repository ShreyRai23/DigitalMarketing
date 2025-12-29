const Testimonial = require('../models/Testimonial');
const { validationResult } = require('express-validator');

// @desc    Submit a new testimonial/review
// @route   POST /api/testimonials
// @access  Public
exports.submitTestimonial = async (req, res) => {
    try {
        // Validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { username, company, contact, email, service, message, rating } = req.body;

        // Create testimonial
        const testimonial = await Testimonial.create({
            username,
            company,
            contact,
            email,
            service,
            message,
            rating: rating || 5
        });

        res.status(201).json({
            success: true,
            message: 'Thank you for your review! It will be reviewed and published soon.',
            data: {
                id: testimonial._id,
                username: testimonial.username,
                company: testimonial.company,
                createdAt: testimonial.createdAt
            }
        });
    } catch (error) {
        console.error('Error submitting testimonial:', error);

        // Handle validation errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: messages
            });
        }

        res.status(500).json({
            success: false,
            message: 'Failed to submit testimonial. Please try again later.'
        });
    }
};

// @desc    Get all approved testimonials
// @route   GET /api/testimonials
// @access  Public
exports.getTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find({ status: 'approved' })
            .select('-contact -email')
            .sort({ createdAt: -1 })
            .limit(parseInt(req.query.limit) || 10);

        res.status(200).json({
            success: true,
            count: testimonials.length,
            data: testimonials
        });
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch testimonials'
        });
    }
};

// @desc    Get all testimonials (admin use)
// @route   GET /api/testimonials/all
// @access  Private (will add auth later)
exports.getAllTestimonials = async (req, res) => {
    try {
        const status = req.query.status;
        const filter = status ? { status } : {};

        const testimonials = await Testimonial.find(filter)
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: testimonials.length,
            data: testimonials
        });
    } catch (error) {
        console.error('Error fetching all testimonials:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch testimonials'
        });
    }
};
