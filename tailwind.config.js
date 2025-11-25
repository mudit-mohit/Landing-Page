/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'light-gray': '#f4f4f4',
        'border-gray': '#e1e2e3',
      },
      boxShadow: {
        'nav': '0px 0.6px 1.25px -1.25px rgba(0,0,0,0.18), 0px 2.2px 2.5px -2.5px rgba(0,0,0,0.16), 0px 10px 10px -3.75px rgba(0,0,0,0.06)',
      },
      keyframes: {
        // For logo scroller
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        // For Foundation section cards
        'fade-scale-in': {
          'from': { opacity: '0', transform: 'scale(0.95) translateY(10px)' },
          'to': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        // For Case Study cards
        'card-stack-in': {
          'from': { opacity: '0', transform: 'translateY(30px) scale(0.98)' },
          'to': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        // For Hero icons
        'float-bob': {
          '0%, 100%': { transform: 'translateY(-2px)' },
          '50%': { transform: 'translateY(2px)' },
        },
        // For Footer background
        'aurora': {
          'from': { backgroundPosition: '0% 50%' },
          'to': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        'scroll-left': 'scroll-left 40s linear infinite',
        'scroll-right': 'scroll-right 40s linear infinite',
        'fade-scale': 'fade-scale-in 0.6s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards',
        'card-stack': 'card-stack-in 0.5s ease-out forwards',
        'float-bob': 'float-bob 3s ease-in-out infinite',
        'aurora': 'aurora 20s ease infinite alternate',
      }
    },
  },
  plugins: [],
}