/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1723px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        outline: 'outline',
        },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
        '5000': '5000ms',
        '3000': '3000ms',
        '4000': '4000ms',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('tailwind-scrollbar-hide')
  ],
}
