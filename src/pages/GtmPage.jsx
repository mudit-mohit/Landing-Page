import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GtmHero from '../components/gtm/GtmHero';
import GtmPostGrid from '../components/gtm/GtmPostGrid';
import { Helmet } from 'react-helmet-async';

const GtmPage = () => {
  return (
    <>
      <Helmet>
        <title>GTM Hub – Live Go-To-Market Insights & Conversations | Outmate</title>
        <meta name="description" content="Discover real-time go-to-market insights and conversations curated by Outmate. Stay updated on GTM, sales, growth, and outbound trends." />
        <link rel="canonical" href="https://outmate.ai/gtm-hub" />
      </Helmet>
      <div className="min-h-screen w-full bg-[#f4f4f4] font-sans flex flex-col items-center">
        <Navbar />

        {/* GTM Hub Content */}
        <div className="w-full flex-grow">
          <GtmHero />
          <GtmPostGrid />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default GtmPage;