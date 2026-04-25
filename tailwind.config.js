/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'namcha-blue':     '#5887DA',
        'namcha-navy':     '#1E3E8A',
        'namcha-lavender': '#8B9EE8',
        'namcha-pink':     '#D4688A',
        'namcha-cream':    '#F7F3EE',
        'namcha-earth':    '#4A3A2A',
        'namcha-sage':     '#7A9E7E',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
