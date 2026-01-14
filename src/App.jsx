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
import N8nWorkflowsPage from './pages/N8nWorkflowsPage';
import JobDetailPage from './pages/JobDetailPage';
// import OutboundTipsPage from './pages/OutboundTipsPage';
// import ToolDetailPage from './pages/ToolDetailPage';
// ✅ Import Tool Pages
// import GtmToolsPage from './pages/GtmToolsPage';
// import ToolDetailPage from './pages/ToolDetailPage'; // Placeholder for later

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
        {/* Core Routes */}
        <Route path="/" element={<Home />} />
        
        {/* Jobs Routes */}
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:jobId" element={<JobDetailPage />} />

        {/* ✅ OUTMATE LABS ROUTES */}
        <Route path="/outmate-labs/gtm-hub" element={<GtmPage />} />
        <Route path="/outmate-labs/workflows" element={<N8nWorkflowsPage />} />
        {/* <Route path="/outmate-labs/tips" element={<OutboundTipsPage />} /> */}
        
        {/* ✅ NEW TOOLS ROUTES */}
        {/* <Route path="/outmate-labs/tools" element={<GtmToolsPage />} /> */}
        {/* <Route path="/outmate-labs/tools/:slug" element={<ToolDetailPage />} /> */}
        {/* <Route path="/outmate-labs/tools/:slug" element={<ToolDetailPage />} /> */} 

      </Routes>
    </div>
  );
}

export default App;