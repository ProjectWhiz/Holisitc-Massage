import React, { useState, useEffect } from 'react';
import elbowwork from '../images/elbowwork.jpeg';

const reviews = [
    {
        text: "“I love going to see Jordan, she does an amazing job getting deeper into my calves, I run 16-20 miles a week and heavily rely on Jordan's Help to maintain that level of fitness with little to no pain.”",
        name: "Trent B.",
        date: "Apr 2025",
    },
    {
        text: "“I really needed a lot of work and she found knots i didn't even know i had. I highly recommend her if you need deep tissue work.”",
        name: "Mai Y.",
        date: "Nov 2024",
    },
    {
        text: "“After seeing Jordan weekly for a month,  My physical therapist has seen improvement in my spine health, I am so grateful I found her.”",
        name: "Joanna F.",
        date: "Aug 2024",
    },
    {
        text: "“Best Massage I Ever Had !!! She has such a genuine passion for helping people feel better! She has an amazing quality of touch and found knots I wasn't even aware of!”",
        name: "Chad L.",
        date: "Dec 2024",
    },
];

function ImpactSection() {
    const [current, setCurrent] = useState(0);
    const [anim, setAnim] = useState('fade-in-left');

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnim('fade-out-left');
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % reviews.length);
                setAnim('fade-in-left');
            }, 400); // match animation duration
        }, 5000);
        return () => clearTimeout(timer);
    }, [current]);

    return (
        <section id="impact" className="impact-section">
            <div className="impact-header">
                <h2 className="impact-title">What Our Clients Say</h2>
            </div>
            <div className="impact-review-card">
                <div className={`review-content ${anim}`}>
                    <p className="review-text">{reviews[current].text}</p>
                    <div className="review-author">
                        <div>
                            <span className="review-name">{reviews[current].name}</span>
                            <span className="review-date">{reviews[current].date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImpactSection;

