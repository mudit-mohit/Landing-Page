import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  Mail,
  CheckCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Loader2
} from "lucide-react";

export default function BookingScheduler({
  onDateSelect = (d) => console.log("date:", d),
}) {
  // ==========================================
  // 🔐 CONFIGURATION
  // ==========================================
  // We are using the direct key to prevent "ReferenceError: process is not defined" crashes.
  // This is safe for client-side API keys like Cal.com.
  const API_KEY = "cal_live_6c0f74afc7a51aeedbe50030d2c29698";
  const EVENT_TYPE_ID = 4037867;

  /* // OPTIONAL: If you want to use .env later, uncomment the lines below 
  // based on your build tool (Vite vs Create React App).
  
  // For Vite (.env must start with VITE_):
  const API_KEY = import.meta.env?.VITE_CAL_API_KEY || "cal_live_...";
  
  // For Create React App (.env must start with REACT_APP_):
  // const API_KEY = process.env?.REACT_APP_CAL_API_KEY || "cal_live_...";
  */
  // ==========================================

  // State
  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(today);

  // Data State
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // UI State
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState(false);
  const [success, setSuccess] = useState(false);
  const [timeFormat24, setTimeFormat24] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); // UI Error message (no alerts)

  // --- 1. FETCH SLOTS WHEN DATE CHANGES ---
  useEffect(() => {
    async function fetchAvailability() {
      if (!selectedDate) return;

      setLoading(true);
      setAvailableSlots([]);
      setSelectedSlot(null);
      setErrorMsg("");

      // Calculate Start/End in UTC correctly for the API query
      const start = new Date(selectedDate);
      start.setHours(0, 0, 0, 0);
      const end = new Date(selectedDate);
      end.setHours(23, 59, 59, 999);

      try {
        const query = new URLSearchParams({
          apiKey: API_KEY,
          eventTypeId: EVENT_TYPE_ID.toString(),
          startTime: start.toISOString(),
          endTime: end.toISOString(),
        });

        const res = await fetch(`https://api.cal.com/v1/slots?${query}`);
        const data = await res.json();

        // Generate local date key (YYYY-MM-DD)
        const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const day = String(selectedDate.getDate()).padStart(2, '0');
        const dateKey = `${year}-${month}-${day}`;

        // Look for the key in the response
        let slots = data.slots?.[dateKey] || [];

        // Fallback filtering if direct key match fails due to timezone shift in response
        if (slots.length === 0) {
          const allSlots = Object.values(data.slots || {}).flat();
          slots = allSlots.filter(s => {
            const slotDate = new Date(s.time);
            return slotDate.getDate() === selectedDate.getDate();
          });
        }

        setAvailableSlots(slots);

      } catch (error) {
        console.error("Error fetching slots:", error);
        setErrorMsg("Unable to load availability. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchAvailability();
    onDateSelect(selectedDate);
  }, [selectedDate]);

  // --- 2. SUBMIT BOOKING ---
  async function handleBooking() {
    setErrorMsg(""); // Clear previous errors

    if (!selectedSlot) {
      setErrorMsg("Please select a time slot.");
      return;
    }
    if (!name || !email) {
      setErrorMsg("Please enter your Name and Email.");
      return;
    }

    setBooking(true);
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    try {
      const res = await fetch(`https://api.cal.com/v1/bookings?apiKey=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventTypeId: EVENT_TYPE_ID,
          start: selectedSlot.time,
          responses: {
            name: name,
            email: email,
            location: {
              value: "integrations:google:meet",
              optionValue: "integrations:google:meet"
            }
          },
          metadata: {},
          timeZone: timeZone,
          language: "en"
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
      } else {
        // Show API error on screen
        setErrorMsg(data.message || "Booking failed. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Network connection error. Please check your internet.");
    } finally {
      setBooking(false);
    }
  }

  // --- HELPERS ---
  function getCalendarMatrix() {
    const start = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
    const end = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0);
    const startDay = start.getDay();
    const days = end.getDate();

    const cells = Array(startDay).fill(null);
    for (let i = 1; i <= days; i++) {
      cells.push(new Date(viewDate.getFullYear(), viewDate.getMonth(), i));
    }

    const weeks = [];
    for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
    return weeks;
  }

  function formatTime(isoString) {
    const d = new Date(isoString);
    return d.toLocaleTimeString([], {
      hour: 'numeric', minute: '2-digit', hour12: !timeFormat24
    });
  }

  // --- RENDER SUCCESS ---
  if (success) {
    return (
      <div className="w-full max-w-lg mx-auto py-20 px-6">
        <div className="bg-white rounded-3xl shadow-xl border border-indigo-50 p-10 text-center animate-fade-in-up">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6 shadow-sm">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-500 mb-8">
            A calendar invitation has been sent to <span className="font-semibold text-gray-800">{email}</span>.
          </p>
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-8 text-left inline-block w-full">
            <div className="flex items-center gap-3 mb-2">
              <Calendar size={18} className="text-indigo-500" />
              <span className="text-sm font-medium text-gray-700">{selectedDate.toDateString()}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} className="text-indigo-500" />
              <span className="text-sm font-medium text-gray-700">{selectedSlot ? formatTime(selectedSlot.time) : ""}</span>
            </div>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="w-full py-3 px-6 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02]"
          >
            Book Another Call
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 font-sans">

      {/* HEADER SECTION */}
      <div className="flex flex-col items-center gap-4 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold tracking-wider uppercase shadow-sm">
          <Calendar size={12} />
          Book a Call
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Let's Scale Your Business
        </h2>
        <p className="text-gray-500 max-w-2xl text-lg">
          Select a time below for a 30-minute strategy session. We'll send a Google Meet link instantly.
        </p>
      </div>

      {/* MAIN CARD */}
      <div className="bg-white rounded-[2rem] shadow-2xl shadow-indigo-500/10 border border-gray-200/60 overflow-hidden max-w-6xl mx-auto flex flex-col md:flex-row min-h-[600px]">

        {/* LEFT PANEL: INFO & FORM */}
        <div className="md:w-1/3 bg-gray-50/50 p-8 border-r border-gray-100 flex flex-col">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              Strategy Call
              <span className="px-2 py-0.5 rounded text-xs bg-indigo-100 text-indigo-700">Free</span>
            </h3>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              One-on-one session to discuss your AI integration needs.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-600 font-medium">
              <span className="flex items-center gap-1.5"><Clock size={16} /> 30 min</span>
              <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500"></div> Google Meet</span>
            </div>
          </div>

          <div className="space-y-5 flex-1">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide flex items-center gap-2">
                <User size={14} /> Your Name
              </label>
              <input
                className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                placeholder="John Doe"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide flex items-center gap-2">
                <Mail size={14} /> Your Email
              </label>
              <input
                className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                placeholder="john@example.com"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-400">
            Powered by Cal.com & Google Meet
          </div>
        </div>

        {/* MIDDLE PANEL: CALENDAR */}
        <div className="md:w-1/3 p-8 border-r border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-bold text-gray-800">
              {viewDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setViewDate(new Date(viewDate.setMonth(viewDate.getMonth() - 1)))}
                className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setViewDate(new Date(viewDate.setMonth(viewDate.getMonth() + 1)))}
                className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 text-xs font-semibold text-gray-400 text-center mb-4 uppercase tracking-wide">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <div key={i}>{d}</div>)}
          </div>

          <div className="space-y-2">
            {getCalendarMatrix().map((week, i) => (
              <div key={i} className="grid grid-cols-7 gap-2">
                {week.map((date, j) => {
                  if (!date) return <div key={j} className="h-10"></div>;

                  const isSelected = date.toDateString() === selectedDate.toDateString();
                  const isToday = date.toDateString() === new Date().toDateString();
                  const isPast = date < new Date().setHours(0, 0, 0, 0);

                  return (
                    <button
                      key={j}
                      disabled={isPast}
                      onClick={() => setSelectedDate(date)}
                      className={`
                          relative h-10 w-full rounded-xl text-sm flex items-center justify-center transition-all duration-200
                          ${isPast ? 'text-gray-300 cursor-not-allowed' :
                          isSelected ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 scale-105 font-semibold' :
                            isToday ? 'bg-indigo-50 text-indigo-600 font-bold border border-indigo-200' :
                              'hover:bg-gray-100 text-gray-700 hover:scale-110'}
                        `}
                    >
                      {date.getDate()}
                      {isToday && !isSelected && <div className="absolute bottom-1 w-1 h-1 bg-indigo-500 rounded-full"></div>}
                    </button>
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL: SLOTS */}
        <div className="md:w-1/3 p-8 bg-gray-50/30 flex flex-col relative">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h4 className="font-bold text-gray-900">Available Times</h4>
              <p className="text-xs text-gray-500">{selectedDate.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}</p>
            </div>
            <button
              onClick={() => setTimeFormat24(!timeFormat24)}
              className="text-xs font-medium bg-white border border-gray-200 px-3 py-1.5 rounded-lg hover:border-indigo-300 transition-colors"
            >
              {timeFormat24 ? "24h" : "12h"}
            </button>
          </div>

          {/* Error Banner */}
          {errorMsg && (
            <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3 text-red-700 text-sm animate-pulse">
              <AlertCircle size={18} className="mt-0.5 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-48 text-gray-400 gap-3">
                <Loader2 size={32} className="animate-spin text-indigo-500" />
                <span className="text-sm">Checking availability...</span>
              </div>
            ) : availableSlots.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-48 text-gray-400 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50">
                <Calendar size={32} className="mb-2 opacity-20" />
                <span className="text-sm">No slots available</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3">
                {availableSlots.map(slot => (
                  <button
                    key={slot.time}
                    onClick={() => setSelectedSlot(slot)}
                    className={`
                        w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 flex items-center justify-between group
                        ${selectedSlot?.time === slot.time
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                        : 'bg-white border-gray-200 text-gray-700 hover:border-indigo-500 hover:shadow-md'}
                       `}
                  >
                    <span className="font-medium">{formatTime(slot.time)}</span>
                    {selectedSlot?.time === slot.time && <CheckCircle size={16} />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 bg-gray-50/30 md:bg-transparent sticky bottom-0 z-10">
            <button
              onClick={handleBooking}
              disabled={!selectedSlot || booking}
              className={`
                    w-full py-4 rounded-xl text-white font-bold text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-2
                    ${!selectedSlot || booking
                  ? 'bg-gray-300 cursor-not-allowed shadow-none'
                  : 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:shadow-indigo-500/40 hover:-translate-y-1 active:translate-y-0'}
                 `}
            >
              {booking ? <><Loader2 size={20} className="animate-spin" /> Confirming...</> : "Confirm Booking"}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}