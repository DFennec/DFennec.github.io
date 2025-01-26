/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {      fontFamily: {
      'custom': ['Ubuntu', 'sans-serif'],
    }},
  },
  plugins: [],
}

