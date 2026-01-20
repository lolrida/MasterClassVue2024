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
    screens:{
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins:{}
}
