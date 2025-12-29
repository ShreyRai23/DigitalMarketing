// Honeypot middleware to catch bots
const honeypotCheck = (req, res, next) => {
    // Check if honeypot field exists and is filled (indicates bot)
    if (req.body.website || req.body.url || req.body.honeypot) {
        return res.status(400).json({
            success: false,
            message: 'Invalid submission detected'
        });
    }
    next();
};

module.exports = { honeypotCheck };
