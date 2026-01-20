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
      },
      colors: {
        'light-gray': '#f4f4f4',
        'border-gray': '#e1e2e3',
        background: 'hsl(var(--background))',
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          subtle: 'var(--text-subtle)',
          accent: 'var(--text-accent)',
          success: 'var(--text-success)'
        },
        border: 'hsl(var(--border))',
        button: {
          background: {
            primary: 'var(--button-bg-primary)',
            secondary: 'var(--button-bg-secondary)',
            muted: 'var(--button-bg-muted)',
            overlay: 'var(--button-bg-overlay)'
          },
          text: {
            primary: 'var(--button-text-primary)',
            muted: 'var(--button-text-muted)'
          },
          border: {
            primary: 'var(--button-border-primary)'
          }
        },
        chip: {
          background: {
            primary: 'var(--chip-bg-primary)'
          },
          text: {
            primary: 'var(--chip-text-primary)'
          }
        },
        line: {
          background: {
            primary: 'var(--line-bg-primary)',
            secondary: 'var(--line-bg-secondary)',
            light: 'var(--line-bg-light)'
          }
        },
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontSize: {
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        base: 'var(--font-size-base)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
        '7xl': 'var(--font-size-7xl)'
      },
      fontWeight: {
        light: 'var(--font-weight-light)',
        normal: 'var(--font-weight-normal)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)'
      },
      lineHeight: {
        tight: 'var(--line-height-tight)',
        snug: 'var(--line-height-snug)',
        normal: 'var(--line-height-normal)',
        relaxed: 'var(--line-height-relaxed)',
        loose: 'var(--line-height-loose)',
        'extra-loose': 'var(--line-height-extra-loose)'
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)'
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        '4xl': 'var(--radius-4xl)',
        '5xl': 'var(--radius-5xl)'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}