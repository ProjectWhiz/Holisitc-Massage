import React from 'react';
import HeroNavbar from './components/HeroNavbar';
import './styles.css';

const pricingData = [
    {
        duration: '60 Minutes',
        price: '$70',
        features: [
            'Full body massage',
            'Swedish, Deep Tissue',
            'Relaxation & stress relief',
        ],
        highlight: false,
    },
    {
        duration: '90 Minutes',
        price: '$100',
        features: [
            'Extended full body massage',
            'Focus on problem areas',
            'Hot towels included',
        ],
        highlight: true,
    },
    {
        duration: '120 Minutes',
        price: '$130',
        features: [
            'Ultimate relaxation session',
            'Extra time for deep work',
            'Customizable modalities',
        ],
        highlight: false,
    },
];

function Pricing() {
    return (
        <div className="page-container">
            <HeroNavbar />
            <div className="pricing-page">
                <h1 className="pricing-title">Massage Pricing</h1>
                <div className="pricing-cards">
                    {pricingData.map((plan, idx) => (
                        <div
                            key={plan.duration}
                            className={`pricing-card${plan.highlight ? ' highlight' : ''}`}
                            style={{ animationDelay: `${idx * 0.15 + 0.1}s` }}
                        >
                            <div className="pricing-duration">{plan.duration}</div>
                            <div className="pricing-price">{plan.price}</div>
                            <ul className="pricing-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <a
                                href="https://calendar.app.google/gCrXv8HcRArfms6z8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pricing-btn"
                            >
                                Book Now
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Pricing;