import React, { useState, useEffect } from 'react';
import outsidejordan from '../images/outsidejordan.jpg';
import swedishwork from '../images/swedishwork.jpeg';
//import outdoor1 from '../images/outdoor1.jpeg';
import outdoor2 from '../images/outdoor2.jpeg';
import lotion from '../images/lotion.jpg';

const carouselData = [
    {
        image: outdoor2,
        alt: "Vision 5",
        text: "Hi, I’m Jordan, a certified massage therapist passionate about helping others heal. Specializing in myofascial therapy, Swedish, deep tissue, shiatsu, trigger point therapy, cryotherapy, and joint mobilization."
    },
    //{
    //    image: outdoor1,
    //    alt: "Vision 1",
    //    text: "Outdoor healing: Experience the benefits of massage in nature’s embrace."
    //},
    {
        image: lotion,
        alt: "Vision 2",
        text: "Holistic care: Using natural lotions and oils for your well-being."
    },
    {
        image: outsidejordan,
        alt: "Vision 3",
        text: "Personalized sessions: Every massage is tailored to your unique needs."
    },
    {
        image: swedishwork,
        alt: "Vision 4",
        text: "Find your flow: Restore balance and peace with every session."
    },

];

function VisionSection() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [entering, setEntering] = useState(false);
    const [direction, setDirection] = useState('right');

    // Auto-advance every 5 seconds
    //useEffect(() => {
    //    const timer = setTimeout(() => {
    //        handleNext();
    //   }, 5000);
    //    return () => clearTimeout(timer);
        // eslint-disable-next-line
    //}, [current]);

    const handlePrev = () => {
        setDirection('left');
        setAnimating(true);
        setTimeout(() => {
            setCurrent((prev) => (prev - 1 + carouselData.length) % carouselData.length);
            setAnimating(false);
            setEntering(true);
            setTimeout(() => setEntering(false), 400); // Match CSS animation duration
        }, 400);
    };

    const handleNext = () => {
        setDirection('right');
        setAnimating(true);
        setTimeout(() => {
            setCurrent((prev) => (prev + 1) % carouselData.length);
            setAnimating(false);
            setEntering(true);
            setTimeout(() => setEntering(false), 400); // Match CSS animation duration
        }, 400);
    };

    return (
        <section id="vision" className="vision-section">
            <h3 className="vision-heading"></h3>
            <h2 className="vision-title">Where Compassion Guides, and Healing Moves Forward.</h2>
            <div className="vision-carousel">
                <button className="carousel-arrow left" onClick={handlePrev} aria-label="Previous">&#8592;</button>
                <div className={
                    `carousel-image-container 
                    ${animating ? `slide-out-${direction}` : ''} 
                    ${entering ? `slide-in-${direction}` : ''}`
                }>
                    <img
                        src={carouselData[current].image}
                        alt={carouselData[current].alt}
                        className="vision-image"
                    />
                </div>
                <div className={
                    `carousel-text 
                    ${animating ? `slide-out-${direction}` : ''} 
                    ${entering ? `slide-in-${direction}` : ''}`
                }>
                    <p>{carouselData[current].text}</p>
                </div>
                <button className="carousel-arrow right" onClick={handleNext} aria-label="Next">&#8594;</button>
            </div>
        </section>
    );
}

export default VisionSection;
