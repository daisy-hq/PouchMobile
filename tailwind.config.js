/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  // content: ['./app/**/*.{js,jsx,ts,tsx}'],
  content: ['./App.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  assets: [
    './src/resources/assets/fonts/Lexend.ttf',
    './src/assets/fonts/LexendBold.ttf',
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        // lexendBold: ['LexendBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
