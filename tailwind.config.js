/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#7ed321',
          dark: '#2c5530',
          yellow: '#feca57',
          soft: '#f8fff8',
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 5px 25px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
