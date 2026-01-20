import React from 'react';
import { Helmet } from 'react-helmet';
// 1. Import the new component
import DashboardOverview from "../../features/gtm/vendor/dashboard/DashboardOverview";

const VendorDashboard = () => {
  return (
    <>
      <Helmet>
        <title>Vendor Dashboard | GenSquad</title>
      </Helmet>

      {/* Clean Component: No extra wrappers or backgrounds here. 
         Layout handles the canvas. 
      */}
      <DashboardOverview />
      
    </>
  );
};

export default VendorDashboard;