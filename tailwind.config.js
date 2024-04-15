/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '429px',
      'lg': '1025px',
      'xxl': '2000px'
    },

    extend: {
      colors: {
        setOrange: '#FF9800',
        setOrangeLight: '#fcbe62',
        setBlack: '#242424',
        setBlackLight: '#424242',
      }
    },
  },
  plugins: [],
}

