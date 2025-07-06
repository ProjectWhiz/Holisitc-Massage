import React, { useState } from 'react';
import './styles.css';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import VisionSection from './components/VisionSection';
import ImpactSection from './components/ImpactSection';
import DonationSection from './components/DonationSection';
import FaqSection from './components/FaqSection';
/*import FooterSection from './components/FooterSection';*/
import HeroNavbar from './components/HeroNavbar';
import FooterSection from './components/FooterSection';

function Home() {
    const [activeCard, setActiveCard] = useState(1);

    return (
        <div className="home-body">
        <HeroNavbar />
        <HeroSection />
        {/*Removed the mission section to merge into vision section, place back if needed( <MissionSection /> )*/}
        <VisionSection />
        <ImpactSection />
        <FaqSection />
        {/*<DonationSection />*/}
        <FooterSection />
    </div>
    );
}

export default Home;