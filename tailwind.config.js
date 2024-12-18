/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Red Hat Display', 'sans-serif'],
        serif: ['Hedvig Letters Serif', 'serif'],
      },
      padding: {
        section: '120px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-vertical': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'ticker-vertical': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0)' },
          '70%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-vertical': 'marquee-vertical 40s linear infinite',
        'ticker-slow': 'ticker 30s linear infinite',
        'ticker-normal': 'ticker 20s linear infinite',
        'ticker-fast': 'ticker 10s linear infinite',
        'ticker-vertical-slow': 'ticker-vertical 30s linear infinite',
        'ticker-vertical-normal': 'ticker-vertical 20s linear infinite',
        'ticker-vertical-fast': 'ticker-vertical 10s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'scale-up': 'scaleUp 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
