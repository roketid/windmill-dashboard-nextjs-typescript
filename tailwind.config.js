const defaultTheme = require('tailwindcss/defaultTheme')
const windmill = require('@roketid/windmill-react-ui/config')
module.exports = windmill({
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './containers/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  extend: {},
  plugins: [],
})
