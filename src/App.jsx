import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import ProcessSection from './components/ProcessSection';
import FoundationSection from './components/FoundationSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import SystemDesignSection from './components/SystemDesignSection';
import ComparisonSection from './components/ComparisonSection';
import BookingScheduler from './components/BookingScheduler';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import JobsPage from './pages/JobsPage';
import GtmPage from './pages/GtmPage';
// ✅ IMPORT THE NEW PAGE
import N8nWorkflowsPage from './pages/N8nWorkflowsPage';

const Home = () => (
  <>
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
    <Footer />
  </>
);

function App() {
  return (
    <div className="min-h-screen w-full bg-[#f4f4f4] font-sans flex flex-col items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/gtm-hub" element={<GtmPage />} />
        {/* ✅ ADD THE ROUTE */}
        <Route path="/workflows" element={<N8nWorkflowsPage />} />
      </Routes>
    </div>
  );
}

export default App;