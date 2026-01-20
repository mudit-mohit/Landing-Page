import React, { useState, useEffect } from 'react';
import Button from "../../../components/ui/Button';

// ✅ CAL.COM CONFIGURATION
const CAL_API_KEY = 'cal_live_1614203fb8c5be38522535a84df90b24';
const EVENT_TYPE_ID = 4037867; // ✅ Updated with your ID from logs

const BookingCalendar = ({ isLight }) => {
   // --- STATE ---
   const [currentViewDate, setCurrentViewDate] = useState(new Date());
   const [selectedDateObj, setSelectedDateObj] = useState(null);
   const [selectedTime, setSelectedTime] = useState(null);
   const [availableSlots, setAvailableSlots] = useState([]);
   const [formData, setFormData] = useState({ name: '', email: '' });

   // Status: 'idle' | 'loading_slots' | 'booking' | 'success' | 'error'
   const [status, setStatus] = useState('idle');
   const [errorMessage, setErrorMessage] = useState('');

   // Current real date for validation
   const today = new Date();
   today.setHours(0, 0, 0, 0);

   // --- API HELPER: FETCH SLOTS (FIXED TIMEZONE BUG) ---
   const fetchTimeSlots = async (dateObj) => {
      if (!dateObj) return;
      setStatus('loading_slots');
      setAvailableSlots([]);
      setSelectedTime(null);

      // Calculate Start/End times
      const startTime = new Date(dateObj);
      startTime.setHours(0, 0, 0, 0);
      const endTime = new Date(dateObj);
      endTime.setHours(23, 59, 59, 999);

      console.log(`[Cal.com] 📡 Fetching slots for local date: ${dateObj.toDateString()}`);

      try {
         const query = new URLSearchParams({
            apiKey: CAL_API_KEY,
            eventTypeId: EVENT_TYPE_ID,
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString(),
         });

         const url = `https://api.cal.com/v1/slots?${query}`;
         const res = await fetch(url);
         const data = await res.json();

         if (!res.ok) {
            console.error(`[Cal.com] ❌ API Error: ${res.status}`, data);
            setStatus('idle');
            return;
         }

         // 🔴 FIX: Don't look for a specific date key. 
         // Aggregate ALL slots returned in the response object values.
         const allSlotsObj = data.slots || {};
         const allSlotsRaw = Object.values(allSlotsObj).flat();

         console.log(`[Cal.com] ✅ Found ${allSlotsRaw.length} total slots.`);

         // Format slots to local readable time (e.g., "09:00 AM")
         const formattedSlots = allSlotsRaw.map(slot => {
            const date = new Date(slot.time);
            return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
         });

         setAvailableSlots(formattedSlots);
         setStatus('idle');
      } catch (err) {
         console.error("[Cal.com] ❌ Network Error:", err);
         setStatus('idle');
      }
   };

   // --- API HELPER: BOOK MEETING ---
   const handleBooking = async () => {
      if (!selectedDateObj || !selectedTime || !formData.name || !formData.email) return;

      setStatus('booking');

      try {
         // Construct start time ISO string from selected date + time
         const timeParts = selectedTime.match(/(\d+):(\d+) (AM|PM)/);
         if (!timeParts) throw new Error("Invalid time format");

         let hours = parseInt(timeParts[1]);
         const minutes = parseInt(timeParts[2]);
         const ampm = timeParts[3];

         if (ampm === "PM" && hours < 12) hours += 12;
         if (ampm === "AM" && hours === 12) hours = 0;

         const startDateTime = new Date(selectedDateObj);
         startDateTime.setHours(hours, minutes, 0, 0);

         // ✅ FIX: Removed 'location' from responses to use the Event Type default
         const payload = {
            eventTypeId: EVENT_TYPE_ID,
            start: startDateTime.toISOString(),
            responses: {
               name: formData.name,
               email: formData.email,
               guests: [], // Optional: Initialize empty guests array
               notes: "Booked via GenSquad Website" // Optional: Add context
            },
            metadata: {},
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            language: "en"
         };

         const res = await fetch(`https://api.cal.com/v1/bookings?apiKey=${CAL_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
         });

         if (!res.ok) {
            const errData = await res.json();
            // Log the full error for debugging
            console.error("Cal.com Error Details:", errData);
            throw new Error(errData.message || "Booking Failed");
         }

         setStatus('success');
      } catch (error) {
         console.error("Booking Error:", error);
         setErrorMessage(error.message);
         setStatus('error');
      }
   };
   
   // --- CALENDAR LOGIC ---
   const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
   const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

   const isCurrentMonth =
      currentViewDate.getMonth() === today.getMonth() &&
      currentViewDate.getFullYear() === today.getFullYear();

   const handlePrevMonth = () => {
      if (isCurrentMonth) return;
      setCurrentViewDate(new Date(currentViewDate.getFullYear(), currentViewDate.getMonth() - 1, 1));
   };

   const handleNextMonth = () => {
      setCurrentViewDate(new Date(currentViewDate.getFullYear(), currentViewDate.getMonth() + 1, 1));
   };

   const handleDateClick = (day) => {
      const clickedDate = new Date(currentViewDate.getFullYear(), currentViewDate.getMonth(), day);
      // Allow clicking "today" even if time has passed (API filters slots)
      // Only block strictly past dates
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      if (clickedDate < yesterday) return;

      setSelectedDateObj(clickedDate);
      fetchTimeSlots(clickedDate);
   };

   const daysInMonth = getDaysInMonth(currentViewDate);
   const startDay = getFirstDayOfMonth(currentViewDate);
   const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
   const emptySlots = Array.from({ length: startDay });

   const monthName = currentViewDate.toLocaleString('default', { month: 'long' });
   const year = currentViewDate.getFullYear();
   const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
   };

   const isSelected = (day) => {
      return selectedDateObj &&
         selectedDateObj.getDate() === day &&
         selectedDateObj.getMonth() === currentViewDate.getMonth() &&
         selectedDateObj.getFullYear() === currentViewDate.getFullYear();
   };

   const isPastDate = (day) => {
      const checkDate = new Date(currentViewDate.getFullYear(), currentViewDate.getMonth(), day);
      return checkDate < today;
   };

   return (
      <div className={`
      w-full max-w-6xl mx-auto rounded-[32px] overflow-hidden shadow-2xl border flex flex-col lg:flex-row min-h-[750px]
      ${isLight ? "bg-white border-slate-200 shadow-blue-900/5" : "bg-[#111] border-[#333] shadow-black/50"}
    `}>

         {/* LEFT SIDE: Calendar Grid */}
         <div className="w-full lg:w-3/5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-[#222]">

            {/* Month Navigation */}
            <div className="flex justify-between items-center mb-8">
               <h3 className={`text-2xl font-bold ${isLight ? "text-slate-900" : "text-white"}`}>
                  {monthName} {year}
               </h3>
               <div className="flex gap-2">
                  <button
                     onClick={handlePrevMonth}
                     disabled={isCurrentMonth}
                     className={`
                   p-3 rounded-full transition-colors 
                   ${isCurrentMonth
                           ? "opacity-30 cursor-not-allowed text-gray-400"
                           : isLight ? "hover:bg-slate-100 text-slate-600" : "hover:bg-[#222] text-gray-400"
                        }
                 `}
                  >
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                  </button>

                  <button
                     onClick={handleNextMonth}
                     className={`p-3 rounded-full transition-colors ${isLight ? "hover:bg-slate-100 text-slate-600" : "hover:bg-[#222] text-gray-400"}`}
                  >
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                  </button>
               </div>
            </div>

            {/* Days Header */}
            <div className="grid grid-cols-7 mb-4 text-center">
               {dayNames.map(d => (
                  <span key={d} className={`text-xs font-bold uppercase tracking-wider ${isLight ? "text-slate-400" : "text-gray-600"}`}>{d}</span>
               ))}
            </div>

            {/* Dates Grid */}
            <div className="grid grid-cols-7 gap-3 md:gap-4">
               {emptySlots.map((_, i) => <div key={`empty-${i}`} className="aspect-square"></div>)}

               {daysArray.map(d => {
                  const isDisabled = isPastDate(d);
                  return (
                     <button
                        key={d}
                        onClick={() => !isDisabled && handleDateClick(d)}
                        disabled={isDisabled}
                        className={`
                      aspect-square rounded-2xl flex items-center justify-center text-lg font-medium transition-all duration-200
                      ${isDisabled
                              ? "opacity-20 cursor-not-allowed"
                              : isSelected(d)
                                 ? "bg-blue-600 text-white shadow-xl shadow-blue-500/30 scale-105"
                                 : `hover:bg-blue-50 dark:hover:bg-blue-900/10 ${isLight ? "text-slate-700 bg-slate-50" : "text-gray-300 bg-[#1a1a1a]"}`
                           }
                    `}
                     >
                        {d}
                     </button>
                  );
               })}
            </div>

            <div className={`mt-8 text-sm flex items-center gap-4 ${isLight ? "text-slate-500" : "text-gray-500"}`}>
               <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-600"></span> Selected</div>
               <div className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${isLight ? "bg-slate-200" : "bg-[#333]"}`}></span> Available</div>
            </div>
         </div>

         {/* RIGHT SIDE: Time & Form */}
         <div className={`relative w-full lg:w-2/5 p-8 md:p-12 flex flex-col ${isLight ? "bg-slate-50/50" : "bg-[#161616]"}`}>

            {/* ✅ ANIMATION OVERLAY: SUCCESS / ERROR */}
            {(status === 'success' || status === 'error') && (
               <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center backdrop-blur-md ${isLight ? "bg-white/80" : "bg-black/80"} transition-all animate-fade-in`}>
                  {status === 'success' ? (
                     <>
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-500/30 animate-bounce">
                           <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h3 className={`text-2xl font-bold mb-2 ${isLight ? "text-slate-900" : "text-white"}`}>Booking Confirmed!</h3>
                        <p className={`text-sm ${isLight ? "text-slate-500" : "text-gray-400"}`}>We've sent a confirmation to {formData.email}</p>
                        <Button
                           text="Book Another"
                           onClick={() => { setStatus('idle'); setFormData({ name: '', email: '' }); setSelectedTime(null); }}
                           className="mt-8"
                        />
                     </>
                  ) : (
                     <>
                        <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-red-500/30 animate-pulse">
                           <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                        <h3 className={`text-2xl font-bold mb-2 ${isLight ? "text-slate-900" : "text-white"}`}>Booking Failed</h3>
                        <p className="text-red-400 text-sm mb-6">{errorMessage}</p>
                        <Button
                           text="Try Again"
                           onClick={() => setStatus('idle')}
                           fill_background="#ef4444"
                        />
                     </>
                  )}
               </div>
            )}

            {/* 1. Time Slots */}
            <div className="mb-8 flex-grow">
               <h4 className={`text-lg font-bold mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>
                  Available Times
                  {selectedDateObj && (
                     <span className="text-blue-500 ml-2 text-sm">
                        ({selectedDateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })})
                     </span>
                  )}
               </h4>

               {status === 'loading_slots' ? (
                  <div className="flex items-center justify-center h-40">
                     <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
               ) : (
                  <div className={`
                 grid grid-cols-2 gap-3 transition-opacity duration-300 max-h-[240px] overflow-y-auto pr-2 custom-scrollbar
                 ${!selectedDateObj ? "opacity-40 pointer-events-none grayscale" : "opacity-100"}
              `}>
                     {availableSlots.length > 0 ? availableSlots.map(time => (
                        <button
                           key={time}
                           onClick={() => setSelectedTime(time)}
                           className={`
                          py-3 px-4 rounded-xl text-sm font-bold border transition-all
                          ${selectedTime === time
                                 ? "bg-blue-600 border-blue-600 text-white shadow-lg scale-[1.02]"
                                 : isLight ? "bg-white border-slate-200 hover:border-blue-400 text-slate-600" : "bg-[#222] border-[#333] hover:border-blue-500 text-gray-300"
                              }
                       `}
                        >
                           {time}
                        </button>
                     )) : selectedDateObj && (
                        <div className="col-span-2 text-center text-sm opacity-50 py-10">No slots available</div>
                     )}
                  </div>
               )}
            </div>

            {/* 2. User Details Form */}
            <div className={`
            flex-grow-0 flex flex-col justify-end transition-all duration-300
            ${!selectedTime ? "opacity-50 pointer-events-none blur-[1px]" : "opacity-100 blur-0"}
         `}>
               <h4 className={`text-lg font-bold mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>Your Details</h4>

               <div className="space-y-4 mb-6">
                  <div>
                     <label className={`block text-xs font-bold mb-1.5 uppercase ${isLight ? "text-slate-500" : "text-gray-500"}`}>Full Name</label>
                     <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className={`w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500 transition-all ${isLight ? "bg-white border-slate-200 text-slate-900" : "bg-[#222] border-[#333] text-white"}`}
                     />
                  </div>
                  <div>
                     <label className={`block text-xs font-bold mb-1.5 uppercase ${isLight ? "text-slate-500" : "text-gray-500"}`}>Email</label>
                     <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className={`w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500 transition-all ${isLight ? "bg-white border-slate-200 text-slate-900" : "bg-[#222] border-[#333] text-white"}`}
                     />
                  </div>
               </div>

               <Button
                  text={status === 'booking' ? "Booking..." : "Confirm Booking"}
                  onClick={handleBooking}
                  disabled={!selectedDateObj || !selectedTime || !formData.name || !formData.email || status === 'booking'}
                  layout_width="100%"
                  padding="16px"
                  fill_background="linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)"
                  text_color="#fff"
                  className={`shadow-xl shadow-blue-500/20 ${(!selectedDateObj || !selectedTime || !formData.name || !formData.email) ? "opacity-50 cursor-not-allowed" : ""}`}
               />
            </div>

         </div>

         {/* Scrollbar Style for slots */}
         <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: ${isLight ? '#cbd5e1' : '#333'}; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: ${isLight ? '#94a3b8' : '#555'}; }
      `}</style>
      </div>
   );
};

export default BookingCalendar;