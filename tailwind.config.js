/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F5F2EC',
        'bg-card': '#EFEBE3',
        ink: '#1C1916',
        'ink-mid': '#5C5750',
        'ink-muted': '#9C9890',
        accent: '#7A3B1E',
        'accent-hover': '#5E2C13',
        'accent-soft': '#F0E6DF',
        'border-custom': '#DDD9D0',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}