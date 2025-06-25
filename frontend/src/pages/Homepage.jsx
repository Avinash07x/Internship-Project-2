import React from 'react'
import Hero from '../components/Hero.jsx';
import DCKeepersSection from '../components/DCKeepersSection.jsx';
import EsteemhostFAQ from '../components/EsteemhostFAQ.jsx';
import Plans from '../components/plans.jsx';
import Features from '../components/Features.jsx';
import Esteemhost from '../components/Esteemhost.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import AnimatedDashboard from '../components/AnimatedDashboard.jsx';
import Testimonials from '../components/Testimonials.jsx';


const Homepage = () => {
    return (
        <>
        <Hero />
        <Esteemhost />
        <ServicesSection />
        <AnimatedDashboard />
        <Features />
        <Plans />
        <DCKeepersSection />
        <EsteemhostFAQ />
        <Testimonials />
        </>
    )
}

export default Homepage;
