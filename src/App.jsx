import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
// Styles
import './styles/testimonials.css';

// import GtmLanding from './pages/GtmSquad/Landing';
// import TalentListing from './pages/GtmSquad/TalentListing';
// import TalentProfile from './pages/GtmSquad/TalentProfile';
// import Login from './pages/GtmSquad/Login';
// import VendorDashboard from './pages/GtmSquad/VendorDashboard';
// import AboutUs from './pages/GtmSquad/AboutUs';
// import WhyUs from './pages/GtmSquad/WhyUs';
// import ServicePageTemplate from './pages/GtmSquad/ServicePageTemplate';
// import GtmLayout from './features/gtm/layout/GtmLayout';
// import { ThemeProvider } from './hooks/useTheme';


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
// import GtmPage from './pages/GtmPage';
import N8nWorkflowsPage from './pages/N8nWorkflowsPage';
import JobDetailPage from './pages/JobDetailPage';
// import OutboundTipsPage from './pages/OutboundTipsPage';
// import ToolDetailPage from './pages/ToolDetailPage';
// ✅ Import Tool Pages
import GtmToolsPage from './pages/GtmToolsPage';
import ToolDetailPage from './pages/ToolDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

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
  const location = useLocation();

  return (
    <div className="min-h-screen w-full bg-[#f4f4f4] font-sans flex flex-col items-center">
      <Routes>
        {/* Core Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        {/* Jobs Routes */}
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:jobId" element={<JobDetailPage />} />

        {/* Outmate Labs Routes */}
        {/* <Route path="/outmate-labs/gtm-hub" element={<GtmPage />} /> */}
        <Route path="/outmate-labs/workflows" element={<N8nWorkflowsPage />} />
        {/* <Route path="/outmate-labs/tips" element={<OutboundTipsPage />} /> */}

        {/* Tools Routes */}
        <Route path="/outmate-labs/tools" element={<GtmToolsPage />} />
        <Route path="/outmate-labs/tools/:slug" element={<ToolDetailPage />} />

        {/* ✅ GTM SQUAD ROUTES
        <Route element={<GtmLayout />}>
          <Route path="/gtm-squad" element={<GtmLanding />} />
          <Route path="/gtm-squad/talent" element={<TalentListing />} />
          <Route path="/gtm-squad/talent/:id" element={<TalentProfile />} />
          <Route path="/gtm-squad/login" element={<Login />} />
          <Route path="/gtm-squad/vendor" element={<VendorDashboard />} />
          <Route path="/gtm-squad/about-us" element={<AboutUs />} />
          <Route path="/gtm-squad/why-us" element={<WhyUs />} />
          <Route path="/gtm-squad/hire/:slug" element={<ServicePageTemplate />} />
        </Route> */}

      </Routes>
    </div>
  );
}

export default App;