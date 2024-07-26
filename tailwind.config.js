/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFF',
        black: '#000',
        spaceCadet: '#1B3252',
        pearl: '#E0D9CF',
      },
      screens: {
        xsm: '491px',
        sm: '540px',
        md: '768px',
        lg: '990px',
        xl: '1280px',
        xxl: '1440px',
      },
      borderRadius: {
        'sm': '6px',
        'lg': '16px',
      },
      boxShadow: {
        'custom-shadow': '0px 4px 6px rgba(0, 0, 0, 0.1)',
        'hover-custom-shadow': '0px 4px 6px rgba(0, 0, 0, 0.5)',
        'custom-shadow-lr': '70px 30px 30px 0px #b9adad,-70px 30px 30px 0px #b9adad',
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
      }
    },
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
  ],
}
