import React from 'react';

function FooterSection() {
    return (
        <footer id="footer" className="footer-section">
            <div className="footer-container">
                <div className="footer-left">
                    <h2 className="footer-logo">Jordan's Holistic Massage</h2>
                    <p className="footer-description">
                        Allow yourself to become whole again and experience the healing power of touch.
                    </p>
                </div>
                
            </div>
            <hr className="footer-divider" />
            <div className="footer-bottom">
                <a href="#" className="footer-link">Privacy Policy</a>
                <a href="#" className="footer-link">Terms of Service</a>
                <p className="footer-copyright">
                    © 2025 Jordan's Holistic Massage. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default FooterSection;
