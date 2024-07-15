/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'ubunto': ['Ubuntu', 'serif'],
      'carterOne': ["Carter One", 'system-ui'],
    },
    transitionProperty: {
      'width': 'width',
      'height': 'height',
      'display': 'display'
    },
    screens: {
      'xsm': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}

