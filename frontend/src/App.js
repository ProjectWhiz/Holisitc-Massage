import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css'; // Consolidated stylesheet
import Home from './Home';
import Pricing from './Pricing';
import Booking from './components/Booking';
import FAQ from './components/faq';
import logo from './logo.svg';
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
    return (
        
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/faq" element={<FAQ />} />
                </Routes>
            </Router>
        
    )
}

export default App;
