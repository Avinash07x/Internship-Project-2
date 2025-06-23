import React from 'react'
import Hero from '../components/Hero.jsx';
import DCKeepersSection from '../components/DCKeepersSection.jsx';
import EsteemhostFAQ from '../components/EsteemhostFAQ.jsx';
import Plans from '../components/plans.jsx';


const Homepage = () => {
    return (
        <>
        <Hero />
        <Plans />
        <DCKeepersSection />
        <EsteemhostFAQ />
        </>
    )
}

export default Homepage;
