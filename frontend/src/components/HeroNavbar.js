import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const HeroNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Close sidebar and scroll to section
    const handleNavClick = (e, id) => {
        e.preventDefault();
        setIsOpen(false);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero">
            <div className="hamburger-icon" onClick={toggleSidebar}>
                &#9776; {/* Hamburger icon */}
            </div>
            <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="logo">
                    <Link to="/" className="logo-link">Jordan D'Meza</Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="#mission-section" onClick={e => handleNavClick(e, 'mission')}>About Me</a>
                    </li>
                    <li>
                        <a href="#empower-section" onClick={e => handleNavClick(e, 'impact')}>Results</a>
                    </li>
                    <li>
                        <a href="#Vision-section" onClick={e => handleNavClick(e, 'vision')}>Modalities</a>
                    </li>
                    <li>
                        <Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
                    </li>
                    <li>
                        <Link to="/faq" onClick={() => setIsOpen(false)}>FAQ</Link>
                    </li>
                </ul>
                <a
                    href="https://calendar.app.google/gCrXv8HcRArfms6z8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-donate"
                    >
                    Book Now
                </a>
            </nav>
        </section>
    );
};

export default HeroNavbar;

