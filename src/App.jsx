import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import ProcessSection from './components/ProcessSection';
import FoundationSection from './components/FoundationSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import SystemDesignSection from './components/SystemDesignSection';
import ComparisonSection from './components/ComparisonSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer'; // Import the new Footer
import BookingScheduler from './components/BookingScheduler'; 

function App() {
  return (
    <div className="min-h-screen w-full bg-[#f4f4f4] font-sans flex flex-col items-center">
      <Navbar />
      <Hero />
      <Logos />
      <ProcessSection />
      <FoundationSection />
      <CaseStudiesSection />
      <SystemDesignSection />
      <ComparisonSection />
      <BookingScheduler />
      <FaqSection />
      <Footer /> {/* Add the new Footer at the end */}
    </div>
  );
}

export default App;