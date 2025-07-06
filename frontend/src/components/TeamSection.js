import React from 'react';
import elbowwork from '../images/elbowwork.jpeg';
import outdoor2 from '../images/outdoor2.jpeg';
function TeamSection() {
    return (
        <section id="team" className="team-section">
            <h3 className="team-heading">Our team</h3>
            <p className="team-text">
                Thanks to <span className="highlight">our clients, friends, partners</span>. Thank you to 
                <span className="team-images">
                    <img src={outdoor2} alt="Client 1" className="team-image" />
                    <img src={elbowwork} alt="Client 2" className="team-image" />
                </span>
                <span className="highlight">our team of volunteers</span> who made this journey possible.
            </p>
            <a href="#get-involved" className="btn btn-primary">Get Involved</a>
        </section>
    );
}

export default TeamSection;
