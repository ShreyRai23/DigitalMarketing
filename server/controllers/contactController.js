const Contact = require('../models/Contact');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res) => {
    try {
        const { name, email, phone, company, service, message } = req.body;

        // Create new contact
        const contact = await Contact.create({
            name,
            email,
            phone,
            company,
            service,
            message
        });

        res.status(201).json({
            success: true,
            message: 'Thank you for contacting us! We will get back to you soon.',
            data: {
                id: contact._id,
                name: contact.name,
                email: contact.email
            }
        });
    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({
            success: false,
            message: 'There was an error submitting your request. Please try again later.'
        });
    }
};

// @desc    Get all contacts (Admin only - can be added later)
// @route   GET /api/contact
// @access  Private
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts
        });
    } catch (error) {
        console.error('Get contacts error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching contacts'
        });
    }
};

module.exports = {
    submitContact,
    getContacts
};
