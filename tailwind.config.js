const defaultTheme = require('tailwindcss/defaultTheme')
const windmill = require('windmill-react-ui-kit/config')
module.exports = windmill({
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './containers/**/*.{js,ts,jsx,tsx}', './example/**/*.{js,ts,jsx,tsx}'],
  extend: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    boxShadow: {
      bottom:
        '0 5px 6px -7px rgba(0, 0, 0, 0.6), 0 2px 4px -5px rgba(0, 0, 0, 0.06)',
    },
    colors: {
      green: defaultTheme.colors.emerald,
      yellow: defaultTheme.colors.amber,
      purple: defaultTheme.colors.violet,
    }
  },
  plugins: [],
})
