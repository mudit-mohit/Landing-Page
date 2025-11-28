import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function BookingScheduler() {
  
  // Initialize Cal.com styling
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"outmate"});
      cal("ui", {"theme":"light","styles":{"branding":{"brandColor":"#6366f1"}}}); // Matches your indigo-500
    })();
  }, []);

  return (
    <section id='BookingScheduler' className="w-full max-w-[1280px] mx-auto px-4 pt-16 pb-20 border-t border-[#E1E2E3]">
      
      {/* Title Section */}
      <div className="flex flex-col items-center gap-6 mb-12">
        <div className="border border-[#e2e2e2] bg-white rounded-full px-5 py-2 shadow-sm">
           <p className="font-mono text-[11px] tracking-widest uppercase text-[#4D4D4D] font-medium">Book Call</p>
        </div>
        <h2 className="font-display font-semibold text-5xl md:text-6xl tracking-tight text-black text-center max-w-3xl">
          Booking Scheduler
        </h2>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            
            {/* LEFT PANEL - Keep your sales copy */}
            <aside className="p-8 border-r hidden md:block w-full bg-gray-50/50">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">★</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Free Strategy Call</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Outmate is a full-service <span className="font-semibold text-gray-800">AI Growth Partner</span>.
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-gray-600 text-sm">
                <p>We help you identify where AI will have the biggest impact — then build systems that actually deliver results.</p>
                <div className="flex items-center gap-3 mt-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border shadow-sm">⏱ 30m</span>
              
                </div>
              </div>
            </aside>

            {/* RIGHT PANEL - Cal.com Embed */}
            <div className="md:col-span-2 bg-white h-full min-h-[600px]">
              <Cal 
                namespace="outmate"
                calLink="outmate/outmate"
                style={{width:"100%", height:"100%", overflow:"scroll"}}
                config={{layout: 'month_view'}}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}