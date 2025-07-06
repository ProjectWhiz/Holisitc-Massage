import React from 'react';
import { Link } from 'react-router-dom';

function DonationSection() {
    return (
        <section id="donate" className="donation-section">
            <div className="donation-container">
                <div className="donation-content">
                    <p className="donation-text">
                        Allow yourself to become whole again and experience the healing power of touch.
                    </p>
                <a
                    href="https://calendar.app.google/gCrXv8HcRArfms6z8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-donate"
                    >
                    Book Now
                </a>
                </div>
            </div>
        </section>
    );
}

export default DonationSection;
