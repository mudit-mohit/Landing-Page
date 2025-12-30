import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GtmHero from '../components/gtm/GtmHero';
import GtmPostGrid from '../components/gtm/GtmPostGrid';

const GtmPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#f4f4f4] font-sans flex flex-col items-center">
      <Navbar />
      
      {/* GTM Hub Content */}
      <div className="w-full flex-grow">
        <GtmHero />
        <GtmPostGrid />
      </div>

      <Footer />
    </div>
  );
};

export default GtmPage;