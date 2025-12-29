const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide your name'],
        trim: true,
        maxlength: [100, 'Name cannot be more than 100 characters']
    },
    company: {
        type: String,
        required: [true, 'Please provide your company name'],
        trim: true,
        maxlength: [100, 'Company name cannot be more than 100 characters']
    },
    contact: {
        type: String,
        required: [true, 'Please provide your contact number'],
        trim: true,
        match: [/^[0-9]{10}$/, 'Please provide a valid 10-digit contact number']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        trim: true,
        lowercase: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email'
        ]
    },
    service: {
        type: String,
        required: [true, 'Please select a service'],
        trim: true
    },
    message: {
        type: String,
        required: [true, 'Please provide a message'],
        trim: true,
        maxlength: [1000, 'Message cannot be more than 1000 characters']
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Testimonial', testimonialSchema, 'testimonials');
