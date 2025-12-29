const FloatingButtons = () => {
    return (
        <>
            {/* WhatsApp Button */}
            <a
                href="https://wa.me/919910075663"
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Us"
            >
                <i className="fa fa-whatsapp"></i>
            </a>

            {/* Call Button */}
            <a
                href="tel:+919910075663"
                className="call-float"
                aria-label="Call Us"
            >
                <i className="fa fa-phone"></i>
            </a>
        </>
    );
};

export default FloatingButtons;
