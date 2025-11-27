import React, { useMemo, useState, useEffect } from "react";

// BookingScheduler.jsx
// Default export: BookingScheduler
// Built with React + Tailwind CSS utility classes (no external heavy calendar libs)

export default function BookingScheduler({
  onDateSelect = (d) => console.log("date:", d),
  onTimeSelect = (t) => console.log("time:", t),
  primaryColor = "indigo-500",
}) {
  // State
  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState(null);
  const [timeFormat24, setTimeFormat24] = useState(false);
  const [timezone] = useState("Asia/Kolkata"); // placeholder, can be changed

  // sample static time slots
  const sampleSlots = useMemo(
    () => ["10:30", "11:00", "11:30", "12:00", "14:00", "15:30"],
    []
  );

  useEffect(() => {
    onDateSelect(selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    if (selectedTime) onTimeSelect(selectedTime);
  }, [selectedTime]);

  // Calendar helpers
  function startOfMonth(d) {
    return new Date(d.getFullYear(), d.getMonth(), 1);
  }
  function endOfMonth(d) {
    return new Date(d.getFullYear(), d.getMonth() + 1, 0);
  }

  const calendarMatrix = useMemo(() => {
    const start = startOfMonth(viewDate);
    const end = endOfMonth(viewDate);
    const startWeekday = start.getDay(); // 0-6
    const daysInMonth = end.getDate();

    const cells = [];
    // prepend blanks for the first week
    for (let i = 0; i < startWeekday; i++) cells.push(null);
    // push days
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(viewDate.getFullYear(), viewDate.getMonth(), d));

    // split into weeks (rows of 7)
    const weeks = [];
    for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
    return weeks;
  }, [viewDate]);

  function prevMonth() {
    setViewDate((v) => new Date(v.getFullYear(), v.getMonth() - 1, 1));
  }
  function nextMonth() {
    setViewDate((v) => new Date(v.getFullYear(), v.getMonth() + 1, 1));
  }

  function isSameDay(a, b) {
    return a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }

  function formatMonthYear(d) {
    return d.toLocaleString(undefined, { month: "long", year: "numeric" });
  }

  function toDisplayTime(t) {
    // t is "HH:MM" in 24h
    if (timeFormat24) return t;
    const [hh, mm] = t.split(":");
    let hour = parseInt(hh, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${mm} ${ampm}`;
  }

  // Helpers for bright accent class from prop
  const accentClass = `bg-${primaryColor}`; // Tailwind dynamic class note: when using real Tailwind, include the color in safelist or use inline style

  return (
    <section
      id="BookingScheduler"
      className="w-full max-w-[1280px] mx-auto px-4 pt-16 pb-20 border-t border-[#E1E2E3]"
    >
       <div className="flex flex-col items-center gap-10 mb-12">
        <div className="flex flex-col items-center gap-6">
          
          {/* Pill: "ENGINEERED ADVANTAGE" */}
          <div className="flex items-center gap-4">
            <svg width="40" height="10" viewBox="0 0 50 13" fill="none" className="opacity-20 hidden md:block">
              <path d="M42.9956 10.5L42.0222 9.52672L44.7897 6.75954L45.4386 6.32061L45.3624 6.0916L44.5798 6.18702L0.5 6.18703L0.5 4.81298L44.5798 4.81298L45.3624 4.9084L45.4386 4.67939L44.7897 4.24046L42.0222 1.47328L42.9956 0.5L47.5 5.00382V5.99618L42.9956 10.5Z" fill="black"/>
            </svg>
            <div className="border border-[#e2e2e2] bg-white rounded-full px-5 py-2 shadow-sm whitespace-nowrap">
              <p className="font-mono text-[11px] tracking-widest uppercase text-[#4D4D4D] font-medium">
                Book Call
              </p>
            </div>
            <svg width="40" height="10" viewBox="0 0 50 13" fill="none" className="opacity-20 hidden md:block rotate-180">
              <path d="M42.9956 10.5L42.0222 9.52672L44.7897 6.75954L45.4386 6.32061L45.3624 6.0916L44.5798 6.18702L0.5 6.18703L0.5 4.81298L44.5798 4.81298L45.3624 4.9084L45.4386 4.67939L44.7897 4.24046L42.0222 1.47328L42.9956 0.5L47.5 5.00382V5.99618L42.9956 10.5Z" fill="black"/>
            </svg>
          </div>
          
          {/* Main Title */}
          <h2 className="font-display font-semibold text-5xl md:text-6xl tracking-tight text-black text-center max-w-3xl">
            Booking Scheduler
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* LEFT PANEL */}
            <aside className="p-6 border-r hidden md:block w-full">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">★</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Free Strategy Call</h3>
                  <p className="text-sm text-gray-500 mt-1">Altari is a full-service <span className="font-semibold text-gray-800">AI Growth Partner</span> — we help you scale your business without increasing headcount.</p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-gray-600">
                <p>We help you identify where AI will have the biggest impact — then build systems that actually deliver results.</p>

                <div className="flex items-center gap-3">
                  <input type="checkbox" id="confirm" className="w-4 h-4" />
                  <label htmlFor="confirm" className="text-sm">Requires confirmation</label>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <span className="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-gray-50 border">⏱ 30m</span>
                  <span className="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-gray-50 border">🟢 Google Meet</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-sm">🌐</div>
                  <select className="text-sm border rounded-md p-2">
                    <option>{timezone}</option>
                    <option>UTC</option>
                  </select>
                </div>
              </div>
            </aside>

            {/* MIDDLE PANEL - CALENDAR */}
            <section className="p-6 md:col-span-1">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-medium">{formatMonthYear(viewDate)}</h4>
                <div className="flex items-center gap-2">
                  <button onClick={prevMonth} className="p-2 rounded-md hover:bg-gray-100">
                    ◀
                  </button>
                  <button onClick={nextMonth} className="p-2 rounded-md hover:bg-gray-100">
                    ▶
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <div className="grid grid-cols-7 text-xs text-gray-500 uppercase">
                  <div className="text-center py-2">Sun</div>
                  <div className="text-center py-2">Mon</div>
                  <div className="text-center py-2">Tue</div>
                  <div className="text-center py-2">Wed</div>
                  <div className="text-center py-2">Thu</div>
                  <div className="text-center py-2">Fri</div>
                  <div className="text-center py-2">Sat</div>
                </div>

                <div className="mt-2 space-y-2">
                  {calendarMatrix.map((week, wi) => (
                    <div key={wi} className="grid grid-cols-7 gap-2">
                      {week.map((cell, ci) => {
                        if (!cell)
                          return <div key={ci} className="h-14 rounded-lg"></div>;
                        const isToday = isSameDay(cell, today);
                        const isSelected = isSameDay(cell, selectedDate);
                        const inactive = cell < today; // disable past days

                        return (
                          <button
                            key={ci}
                            onClick={() => !inactive && setSelectedDate(cell)}
                            className={
                              `h-14 flex items-center justify-center rounded-lg transition-transform transform hover:scale-105 ` +
                              (inactive
                                ? "bg-gray-50 text-gray-300 cursor-not-allowed"
                                : isSelected
                                  ? "bg-gray-800 text-white shadow-md"
                                  : isToday
                                    ? "bg-indigo-50 text-indigo-700 border border-indigo-100"
                                    : "bg-gray-100 text-gray-700")
                            }
                          >
                            <div className="text-sm font-medium">{cell.getDate()}</div>
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* RIGHT PANEL - TIME SLOTS */}
            <aside className="p-6 border-l md:block">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">{selectedDate.toDateString()}</div>
                  <h5 className="text-lg font-semibold text-gray-800">{selectedDate.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</h5>
                </div>

                <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                  <button
                    onClick={() => setTimeFormat24(false)}
                    className={`px-3 py-1 rounded-md text-sm ${!timeFormat24 ? "bg-white shadow-sm" : ""}`}
                  >
                    12h
                  </button>
                  <button
                    onClick={() => setTimeFormat24(true)}
                    className={`px-3 py-1 rounded-md text-sm ${timeFormat24 ? "bg-white shadow-sm" : ""}`}
                  >
                    24h
                  </button>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {sampleSlots.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedTime(s)}
                    className={`text-left p-4 rounded-xl border hover:scale-[1.02] transition ${selectedTime === s ? 'bg-gray-800 text-white' : 'bg-white'}`}
                  >
                    <div className="text-sm font-medium">{toDisplayTime(s)}</div>
                    <div className="text-xs text-gray-500">30 min • Google Meet</div>
                  </button>
                ))}
              </div>

              <div className="mt-6">
                <button
                  onClick={() => alert(`Booked ${selectedDate.toDateString()} at ${toDisplayTime(selectedTime || sampleSlots[0])} (${timezone})`)}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold shadow-md hover:opacity-95 disabled:opacity-50"
                  disabled={!selectedTime}
                >
                  Confirm booking
                </button>
              </div>
            </aside>
          </div>
        </div>

        {/* Mobile compact footer */}
        <div className="md:hidden mt-4 p-4 bg-white rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-500">{selectedDate.toDateString()}</div>
              <div className="text-sm font-medium">{selectedTime ? toDisplayTime(selectedTime) : 'Select a time'}</div>
            </div>
            <button
              onClick={() => alert('Open booking drawer (mobile)')}
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
