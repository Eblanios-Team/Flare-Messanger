/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FFB246',
        gray: '#EEEEEE',
        white: '#FFFFFF'
      },
      screens: {
        sm: '640px',    // мобильные устройства
        md: '768px',    // планшеты и маленькие ноутбуки
        lg: '1024px',   // обычные ноутбуки и экраны
        xl: '1536px',   // Full HD экраны и больше
      },
      fontFamily: {
        sans: ['Nunito Sans'],
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}