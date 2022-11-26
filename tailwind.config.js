const withMT = require('@material-tailwind/react/utils/withMT')
module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FD7270',
        secondary: '#f7d8de',
        gray: '#CFCFCF',
        softBlack: '#4B4D52',
      },
    },
  },
  plugins: [],
})
