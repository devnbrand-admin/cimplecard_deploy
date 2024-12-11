/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6200EE',
        secondary: '#03DAC5',
        accent: '#FF4081',
        background: '#121212',
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'Montserrat'],
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backdropBlur: ["responsive"],

    },
  },
};
