import React from 'react';

// --- Reusable SVG Icons for the Footer ---
const FooterLogoIcon = () => (
  <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-auto">
    <path d="M0 6.82L0 17.728L4.691 20.458L4.691 9.55Z" fill="white" />
    <path d="M15.615 9.55L15.615 14.998L10.935 17.722L10.935 23.183L20.306 17.728L20.306 6.819Z" fill="white" />
    <path d="M10.153 0L0.781 5.454L5.473 8.185L10.153 5.46L14.833 8.185L19.524 5.454L10.153 0Z" fill="white" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
    <path d="M12.198 12.201H10.078V8.879C10.078 8.087 10.062 7.067 8.973 7.067C7.868 7.067 7.699 7.929 7.699 8.821V12.201H5.579V5.369H7.615V6.301H7.643C7.928 5.764 8.62 5.197 9.653 5.197C11.802 5.197 12.199 6.611 12.199 8.451V12.201ZM3.184 4.434C2.502 4.434 1.953 3.882 1.953 3.203C1.953 2.524 2.502 1.972 3.184 1.972C3.864 1.972 4.415 2.524 4.415 3.203C4.415 3.882 3.864 4.434 3.184 4.434ZM4.247 12.201H2.121V5.369H4.247V12.201ZM13.259 0H1.057C0.472 0 0 0.462 0 1.032V13.287C0 13.857 0.472 14.318 1.057 14.318H13.257C13.841 14.318 14.318 13.857 14.318 13.287V1.032C14.318 0.462 13.841 0 13.257 0Z" fill="white" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
    <path d="M1.8 2H16.2C16.642 2 17 2.348 17 2.778V15.222C17 15.652 16.642 16 16.2 16H1.8C1.358 16 1 15.652 1 15.222V2.778C1 2.348 1.358 2 1.8 2ZM9.048 8.753L3.918 4.518L2.882 5.704L9.058 10.802L15.124 5.699L14.076 4.523Z" fill="white" />
  </svg>
);

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full max-w-[1280px] mx-auto px-4 pb-4 border-t border-b border-[#E1E2E3]"
    >
      {/* Main Footer Container */}
      <div className="relative w-full bg-black rounded-2xl text-white p-8 md:p-16 overflow-hidden">

        {/* Animated Background */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-black to-black animate-aurora"
            style={{ backgroundSize: '200% 200%' }}
          ></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10">
          {/* --- Top Section: Logo, Title, Badges, Form --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Left Side: Logo, Title, Badges */}
            <div className="flex flex-col gap-8 relative">

              <h2 className="font-display font-semibold text-5xl md:text-6xl tracking-tight leading-tight">
                Let's get started
              </h2>
              <p className="font-sans text-base leading-relaxed text-white/80">
                <strong className="font-semibold text-white">Book a focused strategy session with an expert to see if automated outbound fits your business.</strong>
                <br /><br />
                We’ll map your goals, challenges, and ideate your TAM — so you leave with a clear picture of the channel’s potential and the next steps to turn it into a predictable revenue engine.
              </p>
            </div>

            {/* Right Side: Text & Form */}
            <iframe src="https://outmatelabs.substack.com/embed" width="480" height="150" style={{ border: '1px solid #EEE', background: 'white' }} frameBorder="0" scrolling="no"></iframe>

          </div>

          {/* --- Divider Line --- */}
          <div className="w-full h-px bg-white/20 my-12"></div>

          {/* --- Bottom Section: Links & Copyright --- */}
          <div className="flex flex-col md:flex-row gap-8 justify-between">

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Navigation */}
              <div className="flex flex-col gap-4">
                <h4 className="font-display font-semibold text-sm uppercase text-white">Navigation</h4>
                <div className="flex flex-col gap-3">
                  <a href="#process" className="font-sans text-sm text-white/70 hover:text-white transition-colors">Our Process</a>
                  <a href="#case-studies" className="font-sans text-sm text-white/70 hover:text-white transition-colors">Case Studies</a>
                  {/* ✅ Added Labs Link */}
                  {/* <a href="/outmate-labs/prompts" className="font-sans text-sm text-white/70 hover:text-white transition-colors">Outmate Labs</a> */}
                  <a href="#faq" className="font-sans text-sm text-white/70 hover:text-white transition-colors">FAQ</a>
                  <a href="/privacy-policy" className="font-sans text-sm text-white/70 hover:text-white transition-colors">Privacy Policy</a>
                </div>
              </div>
              {/* Follow */}
              <div className="flex flex-col gap-4">
                <h4 className="font-display font-semibold text-sm uppercase text-white">Follow</h4>
                <a href="https://www.linkedin.com/company/outmateai/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                  <LinkedInIcon />
                  <span className="font-sans text-sm text-white/70 group-hover:text-white transition-colors">LinkedIn</span>
                </a>
              </div>
              {/* Get in touch */}
              <div className="flex flex-col gap-4">
                <h4 className="font-display font-semibold text-sm uppercase text-white">Get in touch</h4>
                <a href="https://www.linkedin.com/in/gautam-singh-manral/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <img
                    src="/GautamProfile.jpg"
                    alt="GautamProfile"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-display font-semibold text-sm text-white">Gautam Singh</p>
                    <p className="font-sans text-xs text-white/70">Founder</p>
                  </div>
                </a>
                <a href="mailto:team@outmate.co" className="flex items-center gap-2 group">
                  <MailIcon />
                  <span className="font-sans text-sm text-white/70 group-hover:text-white transition-colors">team@outmate.ai</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2 text-xs text-white/60 font-sans">
              <p>©2026 outmate - All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;