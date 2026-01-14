module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],

  darkmode: ['class'],
  safelist: ['dark'],
  theme: {
    extend: {
      colors: {
        destructive: '#e3342f', // Replace with your desired color
      },
    },
  },
}
