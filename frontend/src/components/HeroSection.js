import React from 'react';
import Towel from '../images/Towel.jpg';
import elbowwork from '../images/elbowwork.jpeg';
import wavyfinal from '../images/wavyfinal.MOV';
import wavycrash from '../images/wavycrash.MOV';

function HeroSection() {
    return (
        <section className="hero-section" id="hero">
            { <video
                className="hero-video"
                src={wavyfinal}
                autoPlay
                loop
                muted
                playsInline
            /> }
            <div className="hero-overlay"></div>
            <div className="hero-container">
                <h1 className="hero-title">Jordan D'Meza <br/>Holistic Massage </h1>
                <p className="hero-subtitle">
                    Bridging the gap between mind and body through healing touch 
                </p>
            </div>
        </section>
    );
}

export default HeroSection;
