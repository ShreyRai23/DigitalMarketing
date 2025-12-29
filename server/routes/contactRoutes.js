const express = require('express');
const router = express.Router();
const { submitContact, getContacts } = require('../controllers/contactController');
const { contactValidation, validate } = require('../middleware/validation');
const { honeypotCheck } = require('../middleware/honeypot');
const { contactLimiter } = require('../middleware/rateLimiter');

// POST /api/contact - Submit contact form
router.post(
    '/',
    contactLimiter,
    honeypotCheck,
    contactValidation,
    validate,
    submitContact
);

// GET /api/contact - Get all contacts (for admin, can add auth later)
router.get('/', getContacts);

module.exports = router;
