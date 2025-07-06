import React from 'react';
import outdoor2 from '../images/outdoor2.jpeg';
import { useSectionInView } from '../hooks/useSectionInView';

function MissionSection() {
    const [ref, isVisible] = useSectionInView(0.5);

    return (
        <section id="mission" ref={ref} className="mission-section">
            <div className={`section-slide ${isVisible ? 'visible fade-in-on-scroll' : 'fade-in-on-scroll'}`}>
                <div className="mission-box">
                    <div className="mission-container">
                        <div className="mission-content">
                            <img 
                                src={outdoor2} 
                                alt="Jordan, certified massage therapist" 
                                className="mission-image" 
                            />
                            <div className="mission-text-container">
                                <h2 className="mission-heading">About Me</h2>
                                <p className="mission-text">
                                    Hi, I’m Jordan, a certified massage therapist passionate about helping others heal. Specializing in myofascial therapy, Swedish, deep tissue, 
                                    shiatsu, trigger point therapy, cryotherapy, and joint mobilization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MissionSection;
